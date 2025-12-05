import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

/**
 * Companies API
 * Fetches companies for the directory listing
 */

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = parseInt(searchParams.get('limit') || '50')
  const offset = parseInt(searchParams.get('offset') || '0')
  const specialization = searchParams.get('specialization')

  try {
    let companies

    if (specialization && specialization !== 'all') {
      companies = await sql`
        SELECT
          id, name, slug, description, logo_url, headquarters,
          specializations, global_rank, featured_asset_url
        FROM companies
        WHERE status = 'published'
          AND company_type = 'placement_agent'
          AND ${specialization} = ANY(specializations)
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
        LIMIT ${limit}
        OFFSET ${offset}
      `
    } else {
      companies = await sql`
        SELECT
          id, name, slug, description, logo_url, headquarters,
          specializations, global_rank, featured_asset_url
        FROM companies
        WHERE status = 'published'
          AND company_type = 'placement_agent'
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
        LIMIT ${limit}
        OFFSET ${offset}
      `
    }

    // Get total count
    const countResult = await sql`
      SELECT COUNT(*) as total
      FROM companies
      WHERE status = 'published'
        AND company_type = 'placement_agent'
    `
    const total = countResult[0]?.total || 0

    return NextResponse.json({
      companies,
      total,
      limit,
      offset
    }, {
      headers: {
        'Cache-Control': 'public, max-age=60'
      }
    })

  } catch (error) {
    console.error('Error fetching companies:', error)
    return NextResponse.json({ error: 'Failed to fetch companies' }, { status: 500 })
  }
}
