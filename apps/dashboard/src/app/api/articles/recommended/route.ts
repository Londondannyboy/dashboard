import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  url: string | null
  type: string
  country_code: string | null
  countries: string[] | null
  created_at: string
}

// GET - Recommended articles based on user's destinations
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('X-User-Id')

    // Default articles if no user
    if (!userId) {
      const articles = await sql`
        SELECT id, slug, title, excerpt,
               COALESCE(hero_asset_url, featured_asset_url) as url,
               COALESCE(guide_type, article_mode, 'article') as type,
               country_code,
               ARRAY[country] as countries,
               created_at
        FROM articles
        WHERE status = 'published'
        ORDER BY created_at DESC
        LIMIT 5
      ` as Article[]

      return NextResponse.json({
        articles,
        destinations: [],
        message: 'Sign in to get personalized recommendations',
      })
    }

    // Get user's destination preferences
    const userFacts = await sql`
      SELECT fact_value
      FROM user_profile_facts
      WHERE user_id = ${userId}
        AND fact_type = 'destination'
        AND is_active = true
    `

    let destinations: string[] = []

    if (userFacts.length > 0) {
      // Parse destination value(s)
      const factValue = userFacts[0].fact_value
      if (typeof factValue === 'string') {
        destinations = [factValue]
      } else if (factValue && typeof factValue === 'object') {
        const value = (factValue as { value?: string }).value
        if (value) {
          destinations = [value]
        }
      }
    }

    let articles: Article[]

    if (destinations.length > 0) {
      // Get articles matching user's destinations (use country column and status='published')
      articles = await sql`
        SELECT id, slug, title, excerpt,
               COALESCE(hero_asset_url, featured_asset_url) as url,
               COALESCE(guide_type, article_mode, 'article') as type,
               country_code,
               ARRAY[country] as countries,
               created_at
        FROM articles
        WHERE status = 'published'
          AND (
            country = ANY(${destinations}::text[])
            OR country_code = ANY(${destinations}::text[])
          )
        ORDER BY
          CASE WHEN guide_type = 'country_guide' THEN 1 ELSE 2 END,
          created_at DESC
        LIMIT 10
      ` as Article[]

      // If no matching articles, fall back to general
      if (articles.length === 0) {
        articles = await sql`
          SELECT id, slug, title, excerpt,
                 COALESCE(hero_asset_url, featured_asset_url) as url,
                 COALESCE(guide_type, article_mode, 'article') as type,
                 country_code,
                 ARRAY[country] as countries,
                 created_at
          FROM articles
          WHERE status = 'published'
          ORDER BY created_at DESC
          LIMIT 5
        ` as Article[]
      }
    } else {
      // No destinations set, return general articles
      articles = await sql`
        SELECT id, slug, title, excerpt,
               COALESCE(hero_asset_url, featured_asset_url) as url,
               COALESCE(guide_type, article_mode, 'article') as type,
               country_code,
               ARRAY[country] as countries,
               created_at
        FROM articles
        WHERE status = 'published'
        ORDER BY created_at DESC
        LIMIT 5
      ` as Article[]
    }

    return NextResponse.json({
      articles,
      destinations,
      message: destinations.length === 0
        ? 'Tell us where you want to move to get personalized recommendations!'
        : undefined,
    })
  } catch (error) {
    console.error('Failed to fetch recommended articles:', error)

    // Return empty array on error rather than failing
    return NextResponse.json({
      articles: [],
      destinations: [],
      message: 'Unable to load articles',
    })
  }
}
