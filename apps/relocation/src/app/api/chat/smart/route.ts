import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { checkRateLimit, getClientId, RATE_LIMITS } from '@/lib/rate-limit'

// Lazy initialization - don't call neon() at module load time
const getDb = () => neon(process.env.DATABASE_URL!)
const GATEWAY_URL = process.env.GATEWAY_URL || 'https://quest-gateway-production.up.railway.app'

// Extract country names from query
function extractCountries(query: string): string[] {
  const countryPatterns = [
    'portugal', 'spain', 'france', 'germany', 'italy', 'uk', 'united kingdom',
    'usa', 'united states', 'dubai', 'uae', 'thailand', 'singapore', 'malta',
    'cyprus', 'greece', 'netherlands', 'ireland', 'switzerland', 'austria',
    'belgium', 'sweden', 'norway', 'denmark', 'finland', 'poland', 'czech',
    'hungary', 'croatia', 'slovenia', 'estonia', 'latvia', 'lithuania',
    'romania', 'bulgaria', 'slovakia', 'japan', 'australia', 'new zealand',
    'canada', 'mexico', 'brazil', 'argentina', 'chile', 'colombia',
    'indonesia', 'vietnam', 'philippines', 'malaysia', 'india', 'china',
    'south korea', 'taiwan', 'hong kong', 'morocco', 'south africa', 'kenya',
    'egypt', 'turkey', 'israel', 'qatar', 'bahrain', 'oman', 'saudi arabia'
  ]
  const lowerQuery = query.toLowerCase()
  return countryPatterns.filter(c => lowerQuery.includes(c))
}

// Get MUX thumbnail URL
function getArticleImage(article: any): string | null {
  if (article.hero_asset_url) return article.hero_asset_url
  if (article.featured_asset_url) return article.featured_asset_url
  if (article.video_playback_id) {
    return `https://image.mux.com/${article.video_playback_id}/thumbnail.jpg?width=400&height=225&fit_mode=smartcrop`
  }
  return null
}

// Fetch articles from Neon
async function fetchArticles(countries: string[], limit = 8) {
  const sql = getDb()
  try {
    if (countries.length === 0) {
      const result = await sql`
        SELECT id, slug, title, excerpt, meta_description,
          featured_asset_url, hero_asset_url, country_code, country,
          video_playback_id
        FROM articles
        WHERE status = 'published' AND app = 'relocation'
        ORDER BY published_at DESC
        LIMIT ${limit}
      `
      return result
    }

    const searchPatterns = countries.map(c => `%${c.toLowerCase()}%`)
    const result = await sql`
      SELECT id, slug, title, excerpt, meta_description,
        featured_asset_url, hero_asset_url, country_code, country,
        video_playback_id
      FROM articles
      WHERE status = 'published' AND app = 'relocation'
        AND (
          LOWER(title) LIKE ANY(${searchPatterns})
          OR LOWER(slug) LIKE ANY(${searchPatterns})
          OR LOWER(country) LIKE ANY(${searchPatterns})
        )
      ORDER BY published_at DESC
      LIMIT ${limit}
    `
    return result
  } catch (err) {
    console.error('[SmartChat] Error fetching articles:', err)
    return []
  }
}

// Fetch countries from Neon with MUX images
async function fetchCountries(countries: string[]) {
  const sql = getDb()
  try {
    if (countries.length === 0) return []

    const searchPatterns = countries.map(c => `%${c.toLowerCase()}%`)
    const result = await sql`
      SELECT
        c.id, c.name, c.code, c.slug, c.flag_emoji, c.capital, c.currency_code,
        c.language, c.visa_types, c.tax_overview, c.facts, c.relocation_motivations,
        h.video_playback_id as hub_video_id
      FROM countries c
      LEFT JOIN country_hubs h ON h.country_code = c.code AND h.status = 'published'
      WHERE LOWER(c.name) LIKE ANY(${searchPatterns})
         OR LOWER(c.slug) LIKE ANY(${searchPatterns})
      LIMIT 3
    `
    return result
  } catch (err) {
    console.error('[SmartChat] Error fetching countries:', err)
    return []
  }
}

// Get country image from MUX
async function getCountryImage(countryCode: string): Promise<string | null> {
  const sql = getDb()
  try {
    const articleResult = await sql`
      SELECT video_playback_id
      FROM articles
      WHERE country_code = ${countryCode}
        AND status = 'published'
        AND app = 'relocation'
        AND video_playback_id IS NOT NULL
      ORDER BY published_at DESC
      LIMIT 1
    `
    if (articleResult.length > 0 && articleResult[0].video_playback_id) {
      return `https://image.mux.com/${articleResult[0].video_playback_id}/thumbnail.jpg?width=800&height=450&fit_mode=smartcrop&time=5`
    }
    return null
  } catch (err) {
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting - stricter for unauthenticated users
    const stackUserId = request.headers.get('x-stack-user-id')
    const clientId = stackUserId || getClientId(request)
    const rateLimit = stackUserId ? RATE_LIMITS.standard : RATE_LIMITS.expensive

    const rateLimitResult = checkRateLimit(`chat:${clientId}`, rateLimit)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          message: stackUserId
            ? 'You\'re sending messages too quickly. Please slow down.'
            : 'Rate limit exceeded. Please sign in for higher limits.',
          retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.resetAt),
            'Retry-After': String(Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)),
          },
        }
      )
    }

    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 })
    }

    const latestUserMessage = messages.filter((m: { role: string }) => m.role === 'user').pop()
    const userQuery = latestUserMessage?.content || ''

    console.log('[SmartChat] Query:', userQuery)

    const mentionedCountries = extractCountries(userQuery)
    console.log('[SmartChat] Countries:', mentionedCountries)

    // Fetch data in parallel
    const [articles, countries] = await Promise.all([
      fetchArticles(mentionedCountries, 8),
      fetchCountries(mentionedCountries),
    ])

    console.log('[SmartChat] Articles:', articles.length, 'Countries:', countries.length)

    // Call Quest Gateway for conversational response
    let conversationalResponse = ''
    try {
      const response = await fetch(`${GATEWAY_URL}/voice/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userQuery }],
          stream: false,
        }),
      })

      if (response.ok) {
        const responseText = await response.text()
        if (responseText.startsWith('data:')) {
          const lines = responseText.split('\n')
          for (const line of lines) {
            if (line.startsWith('data:') && !line.includes('[DONE]')) {
              try {
                const data = JSON.parse(line.slice(5).trim())
                conversationalResponse += data.choices?.[0]?.delta?.content || ''
              } catch {}
            }
          }
        } else {
          try {
            const data = JSON.parse(responseText)
            conversationalResponse = data.response || data.choices?.[0]?.message?.content || ''
          } catch {
            conversationalResponse = responseText
          }
        }
      }

      // Clean up debug metadata
      if (conversationalResponse) {
        const memoryIndex = conversationalResponse.indexOf('---MEMORY---')
        if (memoryIndex !== -1) {
          conversationalResponse = conversationalResponse.substring(0, memoryIndex).trim()
        }
        conversationalResponse = conversationalResponse.replace(/^One moment while I check\.\.\.\s*/i, '').trim()
      }
    } catch (err) {
      console.error('[SmartChat] Gateway error:', err)
    }

    // Build UI components
    const components: any[] = []
    const sources: Array<{ title: string; url: string; id: string }> = []

    // Add country cards with MUX images
    for (const c of countries as any[]) {
      let imageUrl: string | null = null
      if (c.hub_video_id) {
        imageUrl = `https://image.mux.com/${c.hub_video_id}/thumbnail.jpg?width=800&height=450&fit_mode=smartcrop&time=5`
      } else if (c.code) {
        imageUrl = await getCountryImage(c.code)
      }

      components.push({
        type: 'country_card',
        data: {
          name: c.name,
          flag: c.flag_emoji,
          capital: c.capital,
          currency: c.currency_code,
          language: c.language,
          slug: c.slug,
          facts: c.facts || {},
          image: imageUrl,
        }
      })
    }

    // Add article grid - deduplicated by title
    if (articles.length > 0) {
      const seenTitles = new Set<string>()
      const uniqueArticles = (articles as any[]).filter((a: any) => {
        const normalizedTitle = a.title.toLowerCase().trim()
        if (seenTitles.has(normalizedTitle)) return false
        seenTitles.add(normalizedTitle)
        return true
      })

      components.push({
        type: 'article_grid',
        data: {
          articles: uniqueArticles.slice(0, 4).map((a: any) => ({
            title: a.title,
            url: `https://relocation.quest/${a.slug}`,
            image: getArticleImage(a),
            excerpt: a.excerpt || a.meta_description,
            country: a.country,
          }))
        }
      })

      uniqueArticles.slice(0, 4).forEach((a: any) => {
        sources.push({
          title: a.title,
          url: `https://relocation.quest/${a.slug}`,
          id: `article-${a.id}`,
        })
      })
    }

    const result = {
      greeting: 'Hello!',
      mainText: conversationalResponse || `Here's what I found about ${mentionedCountries.join(', ') || 'your query'}. Check out the resources below for more details.`,
      components,
      sources,
      followUp: countries.length > 0
        ? `What visa options are available in ${(countries as any[])[0].name}?`
        : 'Which country are you considering for relocation?',
    }

    return NextResponse.json(result)

  } catch (error) {
    console.error('[SmartChat] Error:', error)
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Internal server error',
      message: "Sorry, I encountered an error. Please try again.",
      components: [],
      sources: []
    }, { status: 500 })
  }
}
