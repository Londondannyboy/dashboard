import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '30')
  const offset = parseInt(searchParams.get('offset') || '0')

  try {
    const articles = await sql`
      SELECT
        id, title, excerpt, slug, published_at, created_at,
        article_angle, featured_asset_url
      FROM articles
      WHERE app = 'gtm'
        AND status = 'published'
      ORDER BY COALESCE(published_at, created_at) DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `

    const countResult = await sql`
      SELECT COUNT(*) as total
      FROM articles
      WHERE app = 'gtm'
        AND status = 'published'
    `
    const total = countResult[0]?.total || 0

    return NextResponse.json({ articles, total, limit, offset }, {
      headers: { 'Cache-Control': 'public, max-age=60' }
    })

  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}
