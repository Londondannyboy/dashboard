import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// Hume webhook events
interface HumeWebhookPayload {
  event_name: 'chat_started' | 'chat_ended' | 'tool_call'
  chat_group_id: string
  chat_id: string
  config_id: string
  custom_session_id?: string // User ID from our session settings
  caller_number?: string
  timestamp?: string
  duration_seconds?: number
  termination_reason?: string
  messages?: Array<{
    role: string
    content: string
    timestamp: string
  }>
  // tool_call specific
  tool_name?: string
  tool_parameters?: Record<string, unknown>
}

/**
 * Verify Hume webhook signature.
 */
function verifySignature(
  payload: string,
  timestamp: string,
  signature: string,
  apiKey: string
): boolean {
  const message = payload + timestamp
  const expectedSignature = crypto
    .createHmac('sha256', apiKey)
    .update(message)
    .digest('hex')

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}

/**
 * Check if timestamp is within 180 seconds.
 */
function isTimestampValid(timestamp: string): boolean {
  const requestTime = parseInt(timestamp, 10)
  const now = Math.floor(Date.now() / 1000)
  return Math.abs(now - requestTime) < 180
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.HUME_API_KEY

  if (!apiKey) {
    console.error('Hume webhook: API key not configured')
    return NextResponse.json({ error: 'Not configured' }, { status: 500 })
  }

  // Get signature headers
  const signature = request.headers.get('X-Hume-AI-Webhook-Signature')
  const timestamp = request.headers.get('X-Hume-AI-Webhook-Timestamp')

  if (!signature || !timestamp) {
    console.error('Hume webhook: Missing signature headers')
    return NextResponse.json({ error: 'Missing signature' }, { status: 401 })
  }

  // Verify timestamp to prevent replay attacks
  if (!isTimestampValid(timestamp)) {
    console.error('Hume webhook: Timestamp too old')
    return NextResponse.json({ error: 'Timestamp expired' }, { status: 401 })
  }

  // Get raw payload for signature verification
  const rawPayload = await request.text()

  // Verify signature
  if (!verifySignature(rawPayload, timestamp, signature, apiKey)) {
    console.error('Hume webhook: Invalid signature')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  // Parse payload
  const payload: HumeWebhookPayload = JSON.parse(rawPayload)

  console.log(`Hume webhook: ${payload.event_name}`, {
    chatId: payload.chat_id,
    userId: payload.custom_session_id,
  })

  try {
    switch (payload.event_name) {
      case 'chat_started':
        await handleChatStarted(payload)
        break

      case 'chat_ended':
        await handleChatEnded(payload)
        break

      case 'tool_call':
        await handleToolCall(payload)
        break

      default:
        console.log('Hume webhook: Unknown event', payload.event_name)
    }

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    console.error('Hume webhook error:', error)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}

async function handleChatStarted(payload: HumeWebhookPayload) {
  const userId = payload.custom_session_id
  const sessionId = payload.chat_id

  if (!userId) {
    console.log('Chat started without user ID')
    return
  }

  // Create voice session in database
  // TODO: Use @quest/db when Neon connection is set up
  console.log(`Voice session started: user=${userId}, session=${sessionId}`)

  // Optionally create ZEP session
  // const { getOrCreateSession } = await import('@quest/ai/zep')
  // await getOrCreateSession(userId, sessionId)
}

async function handleChatEnded(payload: HumeWebhookPayload) {
  const userId = payload.custom_session_id
  const sessionId = payload.chat_id
  const duration = payload.duration_seconds
  const messages = payload.messages

  if (!userId) {
    console.log('Chat ended without user ID')
    return
  }

  console.log(`Voice session ended: user=${userId}, session=${sessionId}, duration=${duration}s`)

  // Store conversation in ZEP if messages available
  if (messages && messages.length > 0) {
    // TODO: Sync to ZEP when configured
    // const { addMessages, getOrCreateSession } = await import('@quest/ai/zep')
    // await getOrCreateSession(userId, sessionId)
    // await addMessages(sessionId, messages.map(m => ({
    //   role: m.role as 'user' | 'assistant',
    //   content: m.content,
    // })))
    console.log(`Would store ${messages.length} messages to ZEP`)
  }

  // Update voice session in database
  // TODO: Use @quest/db when Neon connection is set up
}

async function handleToolCall(payload: HumeWebhookPayload) {
  const userId = payload.custom_session_id
  const toolName = payload.tool_name
  const toolParams = payload.tool_parameters

  console.log(`Tool call: ${toolName}`, { userId, params: toolParams })

  // Handle specific tools
  switch (toolName) {
    case 'get_user_facts':
      // Fetch user facts from database
      break

    case 'save_fact':
      // Save extracted fact
      break

    case 'search_articles':
      // Search knowledge base
      break

    default:
      console.log('Unknown tool:', toolName)
  }
}
