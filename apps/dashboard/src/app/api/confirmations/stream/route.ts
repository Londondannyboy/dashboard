import { NextRequest } from 'next/server'
import { addSSEClient } from '@/lib/sse-clients'

// SSE endpoint for real-time confirmation updates
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('user_id')

  if (!userId) {
    return new Response('User ID required', { status: 401 })
  }

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      controller.enqueue(
        encoder.encode(`event: connected\ndata: ${JSON.stringify({ userId })}\n\n`)
      )

      // Register this client for broadcasts
      const sendEvent = (data: string) => {
        try {
          controller.enqueue(encoder.encode(data))
        } catch {
          // Client disconnected
        }
      }

      const unsubscribe = addSSEClient(userId, sendEvent)

      // Heartbeat to keep connection alive
      const heartbeatInterval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: heartbeat\n\n`))
        } catch {
          // Client disconnected
          clearInterval(heartbeatInterval)
        }
      }, 30000)

      // Handle client disconnect
      request.signal.addEventListener('abort', () => {
        clearInterval(heartbeatInterval)
        unsubscribe()
      })
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
