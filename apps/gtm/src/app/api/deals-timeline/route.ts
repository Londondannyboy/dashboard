import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const articles = await sql`
      SELECT id, title, slug, article_angle, published_at, created_at, payload
      FROM articles
      WHERE app = 'gtm'
        AND status = 'published'
      ORDER BY COALESCE(published_at, created_at) DESC
      LIMIT 50
    `

    const deals: any[] = []

    articles.forEach((article: any) => {
      const date = article.published_at || article.created_at
      const title = article.title || ''

      let type: 'deal' | 'news' | 'event' = 'news'
      let value = 0
      let company = 'GTM Industry'

      // Detect deal type from title
      if (/launch|release|announce|unveil/i.test(title)) {
        type = 'deal'
      } else if (/event|conference|summit|webinar/i.test(title)) {
        type = 'event'
      }

      // Extract company mentions
      const companyMatch = title.match(/^([A-Z][a-zA-Z0-9]+(?:\s+[A-Z][a-zA-Z0-9]+)?)/);
      if (companyMatch) {
        company = companyMatch[1]
      }

      deals.push({
        id: article.id,
        title: title.length > 60 ? title.substring(0, 57) + '...' : title,
        date: date ? new Date(date).toISOString().slice(0, 7) : '2025-01',
        type,
        value,
        company,
        slug: article.slug
      })
    })

    deals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return NextResponse.json(deals.slice(0, 100), {
      headers: { 'Cache-Control': 'public, max-age=300' }
    })

  } catch (error) {
    console.error('Error fetching deals timeline:', error)
    return NextResponse.json({ error: 'Failed to fetch deals' }, { status: 500 })
  }
}
