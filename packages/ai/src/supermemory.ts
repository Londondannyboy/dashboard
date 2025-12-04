/**
 * Super Memory integration for long-term memory storage.
 * Provides CRUD operations for user memories and facts.
 */

const SUPERMEMORY_API_URL = process.env.SUPERMEMORY_API_URL || 'https://api.supermemory.ai/v1'
const SUPERMEMORY_API_KEY = process.env.SUPERMEMORY_API_KEY || ''

function getHeaders(): Record<string, string> {
  return {
    'Authorization': `Bearer ${SUPERMEMORY_API_KEY}`,
    'Content-Type': 'application/json',
  }
}

export function isSuperMemoryConfigured(): boolean {
  return !!SUPERMEMORY_API_KEY
}

// ============= Memory Types =============

export interface Memory {
  id: string
  userId: string
  content: string
  type: 'fact' | 'preference' | 'conversation' | 'note'
  category?: string
  metadata?: Record<string, unknown>
  embedding?: number[]
  createdAt: string
  updatedAt: string
}

export interface CreateMemoryInput {
  userId: string
  content: string
  type: Memory['type']
  category?: string
  metadata?: Record<string, unknown>
}

export interface UpdateMemoryInput {
  content?: string
  type?: Memory['type']
  category?: string
  metadata?: Record<string, unknown>
}

export interface SearchMemoryInput {
  userId: string
  query: string
  type?: Memory['type']
  category?: string
  limit?: number
}

// ============= CRUD Operations =============

/**
 * Create a new memory
 */
export async function createMemory(input: CreateMemoryInput): Promise<Memory | null> {
  if (!isSuperMemoryConfigured()) {
    console.warn('Super Memory not configured')
    return null
  }

  try {
    const response = await fetch(`${SUPERMEMORY_API_URL}/memories`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        user_id: input.userId,
        content: input.content,
        type: input.type,
        category: input.category,
        metadata: input.metadata,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Failed to create memory:', error)
      return null
    }

    const data = await response.json()
    return normalizeMemory(data)
  } catch (error) {
    console.error('Super Memory createMemory error:', error)
    return null
  }
}

/**
 * Get a specific memory by ID
 */
export async function getMemory(memoryId: string): Promise<Memory | null> {
  if (!isSuperMemoryConfigured()) return null

  try {
    const response = await fetch(`${SUPERMEMORY_API_URL}/memories/${memoryId}`, {
      headers: getHeaders(),
    })

    if (!response.ok) return null

    const data = await response.json()
    return normalizeMemory(data)
  } catch (error) {
    console.error('Super Memory getMemory error:', error)
    return null
  }
}

/**
 * Get all memories for a user
 */
export async function getUserMemories(
  userId: string,
  options?: {
    type?: Memory['type']
    category?: string
    limit?: number
    offset?: number
  }
): Promise<Memory[]> {
  if (!isSuperMemoryConfigured()) return []

  try {
    const params = new URLSearchParams({ user_id: userId })
    if (options?.type) params.append('type', options.type)
    if (options?.category) params.append('category', options.category)
    if (options?.limit) params.append('limit', options.limit.toString())
    if (options?.offset) params.append('offset', options.offset.toString())

    const response = await fetch(`${SUPERMEMORY_API_URL}/memories?${params}`, {
      headers: getHeaders(),
    })

    if (!response.ok) return []

    const data = await response.json()
    return (data.memories || []).map(normalizeMemory)
  } catch (error) {
    console.error('Super Memory getUserMemories error:', error)
    return []
  }
}

/**
 * Update an existing memory
 */
export async function updateMemory(
  memoryId: string,
  input: UpdateMemoryInput
): Promise<Memory | null> {
  if (!isSuperMemoryConfigured()) return null

  try {
    const response = await fetch(`${SUPERMEMORY_API_URL}/memories/${memoryId}`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify(input),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Failed to update memory:', error)
      return null
    }

    const data = await response.json()
    return normalizeMemory(data)
  } catch (error) {
    console.error('Super Memory updateMemory error:', error)
    return null
  }
}

/**
 * Delete a memory
 */
export async function deleteMemory(memoryId: string): Promise<boolean> {
  if (!isSuperMemoryConfigured()) return false

  try {
    const response = await fetch(`${SUPERMEMORY_API_URL}/memories/${memoryId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })

    return response.ok
  } catch (error) {
    console.error('Super Memory deleteMemory error:', error)
    return false
  }
}

/**
 * Search memories by semantic similarity
 */
export async function searchMemories(input: SearchMemoryInput): Promise<Memory[]> {
  if (!isSuperMemoryConfigured()) return []

  try {
    const response = await fetch(`${SUPERMEMORY_API_URL}/memories/search`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        user_id: input.userId,
        query: input.query,
        type: input.type,
        category: input.category,
        limit: input.limit || 10,
      }),
    })

    if (!response.ok) return []

    const data = await response.json()
    return (data.results || []).map((r: { memory: unknown }) => normalizeMemory(r.memory))
  } catch (error) {
    console.error('Super Memory searchMemories error:', error)
    return []
  }
}

// ============= Helper Functions =============

/**
 * Save a user fact to Super Memory
 */
export async function saveUserFact(
  userId: string,
  factType: string,
  factValue: string,
  confidence?: number
): Promise<Memory | null> {
  return createMemory({
    userId,
    content: `${factType}: ${factValue}`,
    type: 'fact',
    category: factType,
    metadata: {
      factType,
      factValue,
      confidence: confidence || 0.8,
    },
  })
}

/**
 * Get all facts for a user
 */
export async function getUserFacts(userId: string): Promise<Memory[]> {
  return getUserMemories(userId, { type: 'fact' })
}

/**
 * Save a user preference
 */
export async function saveUserPreference(
  userId: string,
  preference: string,
  category?: string
): Promise<Memory | null> {
  return createMemory({
    userId,
    content: preference,
    type: 'preference',
    category,
  })
}

/**
 * Save conversation summary
 */
export async function saveConversationSummary(
  userId: string,
  summary: string,
  sessionId?: string
): Promise<Memory | null> {
  return createMemory({
    userId,
    content: summary,
    type: 'conversation',
    metadata: { sessionId },
  })
}

// ============= Normalize Response =============

function normalizeMemory(data: unknown): Memory {
  const d = data as Record<string, unknown>
  return {
    id: String(d.id || d._id || ''),
    userId: String(d.user_id || d.userId || ''),
    content: String(d.content || ''),
    type: (d.type as Memory['type']) || 'note',
    category: d.category as string | undefined,
    metadata: d.metadata as Record<string, unknown> | undefined,
    embedding: d.embedding as number[] | undefined,
    createdAt: String(d.created_at || d.createdAt || new Date().toISOString()),
    updatedAt: String(d.updated_at || d.updatedAt || new Date().toISOString()),
  }
}
