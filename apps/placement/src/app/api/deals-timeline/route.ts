import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET() {
  try {
    const articles = await sql`
      SELECT id, title, slug, article_angle, published_at, created_at, payload
      FROM articles
      WHERE app = 'placement'
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
      let company = 'Industry'

      const valueMatch = title.match(/\$[\d,.]+\s*([BMK]illion)?/i)
      if (valueMatch) {
        const numStr = valueMatch[0].replace(/[^0-9.]/g, '')
        let num = parseFloat(numStr)
        if (valueMatch[0].toLowerCase().includes('b')) num *= 1000
        value = num
        type = 'deal'
      }

      if (/mandate|placement|close|commit|fund|raise/i.test(title)) {
        type = 'deal'
      } else if (/launch|hire|appoint|partner/i.test(title)) {
        type = 'event'
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
