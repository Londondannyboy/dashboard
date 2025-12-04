import { NextRequest, NextResponse } from 'next/server'
import { getUserByNeonAuthId, getUserFactsByStackId, saveUserFact } from '@quest/db'
import {
  searchRelocationContent,
  searchMemory,
  storeConversationTurn,
  getConversationContext,
  saveMemoryFact,
  searchMemories,
  getUserMemories,
} from '@quest/ai'
import { neon } from '@neondatabase/serverless'

// Force dynamic rendering - this route needs runtime env vars
export const dynamic = 'force-dynamic'

// Lazy connection to avoid build-time errors
function getDb() {
  return neon(process.env.DATABASE_URL!)
}

export async function POST(req: NextRequest) {
  const sql = getDb()
  try {
    const { toolName, parameters, userId, sessionId } = await req.json()

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    switch (toolName) {
      case 'get_user_profile': {
        const profile = await getUserByNeonAuthId(userId)
        if (!profile) {
          return NextResponse.json({
            message: 'No profile found for this user yet.',
            current_country: 'Not specified',
            destination_countries: 'Not specified',
            budget: 'Not specified',
            timeline: 'Not specified',
          })
        }
        return NextResponse.json({
          current_country: profile.current_country || 'Not specified',
          destination_countries: profile.destination_countries?.join(', ') || 'Not specified',
          budget: profile.budget_monthly ? `$${profile.budget_monthly}/month` : 'Not specified',
          timeline: profile.timeline || 'Not specified',
          first_name: profile.first_name || undefined,
        })
      }

      case 'get_user_facts': {
        const category = parameters?.category || 'all'
        // Try Neon first
        const facts = await getUserFactsByStackId(userId, category)

        // Also get from Super Memory
        const memoryFacts = await getUserMemories(userId, {
          type: 'fact',
          category: category !== 'all' ? category : undefined,
        })

        const allFacts = [
          ...(facts || []),
          ...memoryFacts.map(m => ({
            id: m.id,
            fact: m.content,
            category: m.category || 'general',
            created_at: m.createdAt,
          })),
        ]

        if (allFacts.length === 0) {
          return NextResponse.json({
            message: 'No facts recorded for this user yet.',
            facts: [],
          })
        }
        return NextResponse.json({ facts: allFacts })
      }

      case 'save_user_fact': {
        if (!parameters?.fact || !parameters?.category) {
          return NextResponse.json(
            { error: 'Both fact and category are required' },
            { status: 400 }
          )
        }

        // Save to Neon
        await saveUserFact(userId, parameters.fact, parameters.category, sessionId)

        // Also save to Super Memory
        await saveMemoryFact(userId, parameters.category, parameters.fact, parameters.confidence || 0.8)

        return NextResponse.json({ success: true, message: 'Fact saved successfully' })
      }

      case 'search_memory': {
        const query = parameters?.query
        if (!query) {
          return NextResponse.json({ error: 'Query is required' }, { status: 400 })
        }

        // Search ZEP if session exists
        let zepResults: unknown[] = []
        if (sessionId) {
          zepResults = await searchMemory(sessionId, query, parameters?.limit || 5)
        }

        // Also search Super Memory
        const superMemoryResults = await searchMemories({
          userId,
          query,
          limit: parameters?.limit || 5,
        })

        return NextResponse.json({
          results: [
            ...zepResults,
            ...superMemoryResults.map(m => ({
              id: m.id,
              content: m.content,
              type: m.type,
              category: m.category,
            })),
          ],
        })
      }

      case 'save_conversation': {
        if (!parameters?.userMessage || !parameters?.assistantResponse) {
          return NextResponse.json(
            { error: 'userMessage and assistantResponse are required' },
            { status: 400 }
          )
        }

        if (sessionId) {
          await storeConversationTurn(
            userId,
            sessionId,
            parameters.userMessage,
            parameters.assistantResponse
          )
        }

        return NextResponse.json({ success: true })
      }

      case 'get_conversation_context': {
        if (!sessionId) {
          return NextResponse.json({ messages: [] })
        }

        const context = await getConversationContext(sessionId, parameters?.lastN || 10)
        return NextResponse.json({ messages: context })
      }

      case 'search_articles': {
        const query = parameters?.query || ''
        const country = parameters?.country

        // Search ZEP knowledge graph for articles
        let articles = await searchRelocationContent(query, 5)

        // Also search Neon articles table
        if (country) {
          const neonArticles = await sql`
            SELECT id, slug, title, excerpt, url, type, country_code
            FROM articles
            WHERE is_published = true
              AND (countries && ARRAY[${country}]::text[] OR country_code = ${country})
            ORDER BY created_at DESC
            LIMIT 5
          `
          articles = [
            ...articles,
            ...neonArticles.map(a => ({
              id: String(a.id),
              type: a.type,
              title: a.title,
              slug: a.slug,
              summary: a.excerpt,
              score: 1,
            })),
          ]
        }

        return NextResponse.json({
          articles,
          query,
          country: country || 'any',
        })
      }

      case 'create_confirmation': {
        // Create HITL confirmation for preference change
        if (!parameters?.fact_type || !parameters?.new_value) {
          return NextResponse.json(
            { error: 'fact_type and new_value are required' },
            { status: 400 }
          )
        }

        const result = await sql`
          INSERT INTO pending_confirmations (user_id, fact_type, old_value, new_value, context)
          VALUES (${userId}, ${parameters.fact_type}, ${parameters.old_value || null}, ${parameters.new_value}, ${parameters.context || null})
          RETURNING id
        `

        return NextResponse.json({
          success: true,
          confirmation_id: result[0].id,
          message: `Created confirmation for ${parameters.fact_type} change`,
        })
      }

      default:
        return NextResponse.json(
          { error: `Unknown tool: ${toolName}` },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('[Hume Tools API] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
