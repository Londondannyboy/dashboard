import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// POST - Update a user fact
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('X-User-Id')
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 401 })
    }

    const body = await request.json()
    const { fact_id, fact_type, value } = body

    if (!value) {
      return NextResponse.json(
        { error: 'Value is required' },
        { status: 400 }
      )
    }

    // If fact_id is provided, update that specific fact
    if (fact_id) {
      const result = await sql`
        UPDATE user_profile_facts
        SET fact_value = ${JSON.stringify({ value })},
            is_user_verified = true,
            updated_at = NOW()
        WHERE id = ${fact_id} AND user_id = ${userId}
        RETURNING id, fact_type, fact_value
      `

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Fact not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        fact: result[0],
      })
    }

    // If fact_type is provided, upsert by type
    if (fact_type) {
      const existing = await sql`
        SELECT id FROM user_profile_facts
        WHERE user_id = ${userId} AND fact_type = ${fact_type}
      `

      if (existing.length > 0) {
        await sql`
          UPDATE user_profile_facts
          SET fact_value = ${JSON.stringify({ value })},
              is_user_verified = true,
              updated_at = NOW()
          WHERE user_id = ${userId} AND fact_type = ${fact_type}
        `
      } else {
        await sql`
          INSERT INTO user_profile_facts (user_id, fact_type, fact_value, confidence, source, is_user_verified)
          VALUES (${userId}, ${fact_type}, ${JSON.stringify({ value })}, 1.0, 'user_update', true)
        `
      }

      return NextResponse.json({
        success: true,
        fact_type,
        value,
      })
    }

    return NextResponse.json(
      { error: 'Either fact_id or fact_type is required' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Failed to update fact:', error)
    return NextResponse.json(
      { error: 'Failed to update fact' },
      { status: 500 }
    )
  }
}
