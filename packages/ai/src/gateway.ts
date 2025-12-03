/**
 * Client-side wrapper for the Python API (Pydantic AI Gateway).
 */

import type { ChatMessage, ChatResponse, FactExtractionResult } from './schemas.js'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

/**
 * Send a chat message to the API and receive a streaming response.
 * Compatible with Vercel AI SDK.
 */
export async function chat(
  messages: ChatMessage[],
  options?: {
    userId?: string
    sessionId?: string
    appType?: 'relocation' | 'placement'
  }
): Promise<Response> {
  return fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      user_id: options?.userId,
      session_id: options?.sessionId,
      app_type: options?.appType || 'relocation',
    }),
  })
}

/**
 * Send a chat message and receive a complete response with extracted facts.
 */
export async function chatComplete(
  messages: ChatMessage[],
  options?: {
    userId?: string
    sessionId?: string
  }
): Promise<ChatResponse> {
  const response = await fetch(`${API_URL}/chat/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      user_id: options?.userId,
      session_id: options?.sessionId,
    }),
  })

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Extract facts from text.
 */
export async function extractFacts(
  text: string,
  userId?: string
): Promise<FactExtractionResult> {
  const params = new URLSearchParams({ text })
  if (userId) params.append('user_id', userId)

  const response = await fetch(`${API_URL}/extract-facts?${params}`, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Extract facts API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Create a pending confirmation for HITL.
 */
export async function createPendingConfirmation(confirmation: {
  userId: string
  factType: string
  newValue: string
  oldValue?: string
  confidence: number
  context: string
}): Promise<{ id: string }> {
  const response = await fetch(`${API_URL}/hitl/pending`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: confirmation.userId,
      fact_type: confirmation.factType,
      new_value: confirmation.newValue,
      old_value: confirmation.oldValue,
      confidence: confirmation.confidence,
      context: confirmation.context,
    }),
  })

  if (!response.ok) {
    throw new Error(`HITL API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Approve a pending confirmation.
 */
export async function approveConfirmation(
  confirmationId: string,
  userId: string
): Promise<{ status: string }> {
  const response = await fetch(
    `${API_URL}/hitl/approve/${confirmationId}?user_id=${userId}`,
    { method: 'POST' }
  )

  if (!response.ok) {
    throw new Error(`HITL API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Reject a pending confirmation.
 */
export async function rejectConfirmation(
  confirmationId: string,
  userId: string
): Promise<{ status: string }> {
  const response = await fetch(
    `${API_URL}/hitl/reject/${confirmationId}?user_id=${userId}`,
    { method: 'POST' }
  )

  if (!response.ok) {
    throw new Error(`HITL API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get the API URL for use with Vercel AI SDK's useChat hook.
 */
export function getApiUrl(endpoint = '/chat'): string {
  return `${API_URL}${endpoint}`
}
