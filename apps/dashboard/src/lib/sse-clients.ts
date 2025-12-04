// In-memory SSE clients store (replace with Redis in production)

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

const sseClients = new Map<string, Set<(data: string) => void>>()

export function addSSEClient(
  userId: string,
  sendEvent: (data: string) => void
): () => void {
  if (!sseClients.has(userId)) {
    sseClients.set(userId, new Set())
  }
  sseClients.get(userId)!.add(sendEvent)

  return () => {
    sseClients.get(userId)?.delete(sendEvent)
    if (sseClients.get(userId)?.size === 0) {
      sseClients.delete(userId)
    }
  }
}

export function broadcastConfirmation(
  userId: string,
  confirmation: PendingConfirmation
): void {
  const clients = sseClients.get(userId)
  if (!clients) return

  const eventData = `event: new_confirmation\ndata: ${JSON.stringify(confirmation)}\n\n`
  clients.forEach((sendEvent) => sendEvent(eventData))
}

export function broadcastResolution(userId: string, confirmationId: string): void {
  const clients = sseClients.get(userId)
  if (!clients) return

  const eventData = `event: confirmation_resolved\ndata: ${JSON.stringify({ id: confirmationId })}\n\n`
  clients.forEach((sendEvent) => sendEvent(eventData))
}
