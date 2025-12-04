import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { broadcastConfirmation } from '@/lib/sse-clients'

const sql = neon(process.env.DATABASE_URL!)

interface PendingConfirmation {
  id: string
  user_id: string
  fact_type: string
  old_value: string | null
  new_value: string
  context: string | null
  status: string
  created_at: string
}

// GET - List pending confirmations for a user
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('X-User-Id')
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 401 })
    }

    const status = request.nextUrl.searchParams.get('status') || 'pending'

    const confirmations = await sql`
      SELECT id, user_id, fact_type, old_value, new_value, context, status, created_at
      FROM pending_confirmations
      WHERE user_id = ${userId} AND status = ${status}
      ORDER BY created_at DESC
      LIMIT 50
    ` as PendingConfirmation[]

    return NextResponse.json({ confirmations })
  } catch (error) {
    console.error('Failed to fetch confirmations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch confirmations' },
      { status: 500 }
    )
  }
}

// POST - Create a new pending confirmation
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('X-User-Id')
    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 401 })
    }

    const body = await request.json()
    const { fact_type, old_value, new_value, context } = body

    if (!fact_type || !new_value) {
      return NextResponse.json(
        { error: 'fact_type and new_value are required' },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO pending_confirmations (user_id, fact_type, old_value, new_value, context)
      VALUES (${userId}, ${fact_type}, ${old_value || null}, ${new_value}, ${context || null})
      RETURNING id, user_id, fact_type, old_value, new_value, context, status, created_at
    ` as PendingConfirmation[]

    const confirmation = result[0]

    // Broadcast to SSE clients
    broadcastConfirmation(userId, confirmation)

    return NextResponse.json({ confirmation }, { status: 201 })
  } catch (error) {
    console.error('Failed to create confirmation:', error)
    return NextResponse.json(
      { error: 'Failed to create confirmation' },
      { status: 500 }
    )
  }
}
