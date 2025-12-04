import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { broadcastResolution } from '@/lib/sse-clients'

const sql = neon(process.env.DATABASE_URL!)

// POST - Resolve a confirmation (accept or reject)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = request.headers.get('X-User-Id')
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    const { action } = body

    if (!action || !['accept', 'reject'].includes(action)) {
      return NextResponse.json(
        { error: 'Action must be "accept" or "reject"' },
        { status: 400 }
      )
    }

    const newStatus = action === 'accept' ? 'accepted' : 'rejected'

    // Get the confirmation first
    const confirmations = await sql`
      SELECT id, user_id, fact_type, new_value
      FROM pending_confirmations
      WHERE id = ${id} AND user_id = ${userId} AND status = 'pending'
    `

    if (confirmations.length === 0) {
      return NextResponse.json(
        { error: 'Confirmation not found or already resolved' },
        { status: 404 }
      )
    }

    const confirmation = confirmations[0]

    // Update the confirmation status
    await sql`
      UPDATE pending_confirmations
      SET status = ${newStatus}, updated_at = NOW()
      WHERE id = ${id}
    `

    // If accepted, save the fact to the user's profile
    if (action === 'accept') {
      await saveUserFact(userId, confirmation.fact_type, confirmation.new_value)
    }

    // Broadcast resolution to SSE clients
    broadcastResolution(userId, id)

    return NextResponse.json({
      success: true,
      action,
      id,
    })
  } catch (error) {
    console.error('Failed to resolve confirmation:', error)
    return NextResponse.json(
      { error: 'Failed to resolve confirmation' },
      { status: 500 }
    )
  }
}

async function saveUserFact(
  userId: string,
  factType: string,
  value: string
): Promise<void> {
  try {
    // Check if fact exists
    const existing = await sql`
      SELECT id FROM user_profile_facts
      WHERE user_id = ${userId} AND fact_type = ${factType}
    `

    if (existing.length > 0) {
      // Update existing fact
      await sql`
        UPDATE user_profile_facts
        SET fact_value = ${JSON.stringify({ value })},
            is_user_verified = true,
            updated_at = NOW()
        WHERE user_id = ${userId} AND fact_type = ${factType}
      `
    } else {
      // Insert new fact
      await sql`
        INSERT INTO user_profile_facts (user_id, fact_type, fact_value, confidence, source, is_user_verified)
        VALUES (${userId}, ${factType}, ${JSON.stringify({ value })}, 1.0, 'hitl_confirmation', true)
      `
    }
  } catch (error) {
    console.error('Failed to save user fact:', error)
    throw error
  }
}
