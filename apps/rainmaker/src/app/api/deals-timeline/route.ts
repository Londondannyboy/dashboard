import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

/**
 * Deals Timeline API
 * Fetches articles and extracts deal/event information for 3D timeline visualization
 */

export async function GET() {
  try {
    // Fetch recent articles with deal-related content
    const articles = await sql`
      SELECT
        id,
        title,
        slug,
        article_angle,
        published_at,
        created_at,
        payload,
        meta_description
      FROM articles
      WHERE app = 'rainmakrr'
        AND status = 'published'
      ORDER BY COALESCE(published_at, created_at) DESC
      LIMIT 50
    `

    // Process articles into deal timeline events
    const deals: any[] = []

    articles.forEach((article: any) => {
      const date = article.published_at || article.created_at
      const title = article.title || ''

      // Detect deal type from title patterns
      let type: 'deal' | 'news' | 'event' = 'news'
      let value = 0
      let company = 'Industry'

      // Extract monetary values from title
      const valueMatch = title.match(/\$[\d,.]+\s*([BMK]illion)?|\€[\d,.]+\s*([BMK]illion)?|£[\d,.]+\s*([BMK]illion)?/i)
      if (valueMatch) {
        const numStr = valueMatch[0].replace(/[^0-9.]/g, '')
        let num = parseFloat(numStr)
        if (valueMatch[0].toLowerCase().includes('b')) num *= 1000
        else if (valueMatch[0].toLowerCase().includes('k')) num /= 1000
        value = num
        type = 'deal'
      }

      // Detect deal keywords
      if (/acqui|merger|buyout|investment|raises|funding|stake|exit|ipo|mandate|placement/i.test(title)) {
        type = 'deal'
      } else if (/launch|announces|partner|expand|hire|appoint/i.test(title)) {
        type = 'event'
      }

      // Extract company names
      const companyMatch = title.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s+(?:acqui|raises|launch|announc|invest|buys|sells|makes|wins|secures)/i)
      if (companyMatch) {
        company = companyMatch[1]
      }

      // Try to get timeline from payload
      let timeline: any[] = []
      if (article.payload) {
        try {
          const payload = typeof article.payload === 'string' ? JSON.parse(article.payload) : article.payload
          if (payload.timeline) {
            timeline = payload.timeline
          }
        } catch (e) {}
      }

      // Add main article as event
      deals.push({
        id: article.id,
        title: title.length > 60 ? title.substring(0, 57) + '...' : title,
        date: date ? new Date(date).toISOString().slice(0, 7) : '2025-01',
        type,
        value,
        company,
        slug: article.slug
      })

      // Add timeline events if available
      timeline.forEach((event: any, i: number) => {
        if (event.date && event.title) {
          deals.push({
            id: `${article.id}-timeline-${i}`,
            title: event.title,
            date: event.date.length === 4 ? `${event.date}-01` : event.date,
            type: 'event' as const,
            value: 0,
            company: company,
            description: event.description
          })
        }
      })
    })

    // Sort by date descending
    deals.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

    return NextResponse.json(deals.slice(0, 100), {
      headers: {
        'Cache-Control': 'public, max-age=300'
      }
    })

  } catch (error) {
    console.error('Error fetching deals timeline:', error)
    return NextResponse.json({ error: 'Failed to fetch deals' }, { status: 500 })
  }
}
