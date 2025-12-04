import { NextRequest, NextResponse } from 'next/server'
import { getUserByNeonAuthId, getUserFactsByStackId, saveUserFact } from '@quest/db'

export async function POST(req: NextRequest) {
  try {
    const { toolName, parameters, userId } = await req.json()

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
        const facts = await getUserFactsByStackId(userId, category)
        if (!facts || facts.length === 0) {
          return NextResponse.json({
            message: 'No facts recorded for this user yet.',
            facts: [],
          })
        }
        return NextResponse.json({ facts })
      }

      case 'save_user_fact': {
        if (!parameters?.fact || !parameters?.category) {
          return NextResponse.json(
            { error: 'Both fact and category are required' },
            { status: 400 }
          )
        }
        await saveUserFact(userId, parameters.fact, parameters.category, parameters.sessionId)
        return NextResponse.json({ success: true, message: 'Fact saved successfully' })
      }

      case 'search_articles': {
        // TODO: Implement article search when knowledge base is ready
        const query = parameters?.query || ''
        const country = parameters?.country
        console.log(`[search_articles] Query: "${query}", Country: ${country || 'any'}`)
        return NextResponse.json({
          message: 'Article search is not yet available.',
          articles: [],
          query,
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
