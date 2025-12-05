import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

/**
 * Articles API
 * Fetches articles for the news listing
 */

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '30')
  const offset = parseInt(searchParams.get('offset') || '0')
  const category = searchParams.get('category')
  const featured = searchParams.get('featured') === 'true'

  try {
    let articles

    if (featured) {
      articles = await sql`
        SELECT
          id, title, excerpt, slug, published_at, created_at,
          article_angle, featured_asset_url, video_playback_id
        FROM articles
        WHERE app = 'pvc'
          AND status = 'published'
          AND is_featured = true
        ORDER BY COALESCE(published_at, created_at) DESC
        LIMIT ${limit}
        OFFSET ${offset}
      `
    } else if (category && category !== 'all') {
      articles = await sql`
        SELECT
          id, title, excerpt, slug, published_at, created_at,
          article_angle, featured_asset_url, video_playback_id
        FROM articles
        WHERE app = 'pvc'
          AND status = 'published'
          AND article_angle = ${category}
        ORDER BY COALESCE(published_at, created_at) DESC
        LIMIT ${limit}
        OFFSET ${offset}
      `
    } else {
      articles = await sql`
        SELECT
          id, title, excerpt, slug, published_at, created_at,
          article_angle, featured_asset_url, video_playback_id
        FROM articles
        WHERE app = 'pvc'
          AND status = 'published'
        ORDER BY COALESCE(published_at, created_at) DESC
        LIMIT ${limit}
        OFFSET ${offset}
      `
    }

    // Get total count
    const countResult = await sql`
      SELECT COUNT(*) as total
      FROM articles
      WHERE app = 'pvc'
        AND status = 'published'
    `
    const total = countResult[0]?.total || 0

    return NextResponse.json({
      articles,
      total,
      limit,
      offset
    }, {
      headers: {
        'Cache-Control': 'public, max-age=60'
      }
    })

  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}
