import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// GET - List all facts for a user
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('X-User-Id')
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 401 })
    }

    const facts = await sql`
      SELECT id, user_id, fact_type, fact_value, confidence, source, is_user_verified, is_active, created_at, updated_at
      FROM user_profile_facts
      WHERE user_id = ${userId} AND is_active = true
      ORDER BY updated_at DESC
    `

    return NextResponse.json({ facts })
  } catch (error) {
    console.error('Failed to fetch facts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch facts' },
      { status: 500 }
    )
  }
}
