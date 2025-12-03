/**
 * ZEP Memory integration using REST API.
 * Provides conversation memory, user facts, and knowledge graph search.
 */

const ZEP_API_URL = process.env.ZEP_API_URL || 'https://api.getzep.com/api/v2'
const ZEP_API_KEY = process.env.ZEP_API_KEY || ''

function getHeaders(): Record<string, string> {
  return {
    'Authorization': `Api-Key ${ZEP_API_KEY}`,
    'Content-Type': 'application/json',
  }
}

export function isZepConfigured(): boolean {
  return !!ZEP_API_KEY
}

// ============= User Management =============

export interface CreateZepUserInput {
  userId: string
  email?: string
  firstName?: string
  lastName?: string
  metadata?: Record<string, unknown>
}

export async function getOrCreateZepUser(input: CreateZepUserInput): Promise<unknown | null> {
  if (!isZepConfigured()) return null

  try {
    // Try to get existing user
    const getResponse = await fetch(`${ZEP_API_URL}/users/${input.userId}`, {
      headers: getHeaders(),
    })

    if (getResponse.ok) {
      return getResponse.json()
    }

    // Create new user
    const createResponse = await fetch(`${ZEP_API_URL}/users`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        user_id: input.userId,
        email: input.email,
        first_name: input.firstName,
        last_name: input.lastName,
        metadata: input.metadata,
      }),
    })

    if (createResponse.ok) {
      return createResponse.json()
    }

    return null
  } catch (error) {
    console.error('ZEP getOrCreateUser error:', error)
    return null
  }
}

// ============= Session/Thread Management =============

export async function getOrCreateSession(
  userId: string,
  sessionId: string,
  metadata?: Record<string, unknown>
): Promise<string | null> {
  if (!isZepConfigured()) return null

  try {
    // Ensure user exists
    await getOrCreateZepUser({ userId })

    // Try to get existing session
    const getResponse = await fetch(`${ZEP_API_URL}/sessions/${sessionId}`, {
      headers: getHeaders(),
    })

    if (getResponse.ok) {
      return sessionId
    }

    // Create new session
    const createResponse = await fetch(`${ZEP_API_URL}/sessions`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        session_id: sessionId,
        user_id: userId,
        metadata,
      }),
    })

    if (createResponse.ok) {
      return sessionId
    }

    return null
  } catch (error) {
    console.error('ZEP getOrCreateSession error:', error)
    return null
  }
}

// ============= Memory/Messages =============

export interface AddMessageInput {
  role: 'user' | 'assistant' | 'system'
  content: string
  metadata?: Record<string, unknown>
}

export async function addMessages(
  sessionId: string,
  messages: AddMessageInput[]
): Promise<boolean> {
  if (!isZepConfigured()) return false

  try {
    const response = await fetch(`${ZEP_API_URL}/sessions/${sessionId}/memory`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        messages: messages.map(m => ({
          role_type: m.role,
          content: m.content,
          metadata: m.metadata,
        })),
      }),
    })

    return response.ok
  } catch (error) {
    console.error('ZEP addMessages error:', error)
    return false
  }
}

export async function getSessionMemory(sessionId: string, lastN = 10): Promise<unknown | null> {
  if (!isZepConfigured()) return null

  try {
    const response = await fetch(
      `${ZEP_API_URL}/sessions/${sessionId}/memory?lastn=${lastN}`,
      { headers: getHeaders() }
    )

    if (!response.ok) return null
    return response.json()
  } catch (error) {
    console.error('ZEP getSessionMemory error:', error)
    return null
  }
}

// ============= Facts/Knowledge =============

export interface UserFact {
  type: string
  value: string
  confidence: number
}

export async function addFactsToUser(userId: string, facts: UserFact[]): Promise<boolean> {
  if (!isZepConfigured()) return false

  try {
    const sessionId = `${userId}_facts`
    await getOrCreateSession(userId, sessionId)

    return await addMessages(sessionId, facts.map(fact => ({
      role: 'system' as const,
      content: `User fact: ${fact.type} = ${fact.value} (confidence: ${fact.confidence})`,
      metadata: {
        factType: fact.type,
        factValue: fact.value,
        confidence: fact.confidence,
      },
    })))
  } catch (error) {
    console.error('ZEP addFacts error:', error)
    return false
  }
}

// ============= Search =============

export interface GraphSearchResult {
  id: string
  type: string
  title?: string
  slug?: string
  summary?: string
  score: number
  tags?: string[]
  metadata?: Record<string, unknown>
}

export async function searchMemory(
  sessionId: string,
  query: string,
  limit = 10
): Promise<GraphSearchResult[]> {
  if (!isZepConfigured()) return []

  try {
    const response = await fetch(`${ZEP_API_URL}/sessions/${sessionId}/search`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        text: query,
        limit,
        search_type: 'similarity',
      }),
    })

    if (!response.ok) return []

    const data = await response.json()
    return (data.results || []).map((r: { message?: { uuid?: string; content?: string }; score?: number }) => ({
      id: r.message?.uuid || '',
      type: 'memory',
      summary: r.message?.content,
      score: r.score || 0,
    }))
  } catch (error) {
    console.error('ZEP searchMemory error:', error)
    return []
  }
}

// ============= Conversation Helpers =============

/**
 * Store a conversation turn in ZEP memory.
 */
export async function storeConversationTurn(
  userId: string,
  sessionId: string,
  userMessage: string,
  assistantResponse: string,
  metadata?: Record<string, unknown>
): Promise<boolean> {
  if (!isZepConfigured()) return false

  try {
    await getOrCreateSession(userId, sessionId)
    return await addMessages(sessionId, [
      { role: 'user', content: userMessage, metadata },
      { role: 'assistant', content: assistantResponse, metadata },
    ])
  } catch (error) {
    console.error('ZEP storeConversationTurn error:', error)
    return false
  }
}

/**
 * Get conversation context for a session.
 */
export async function getConversationContext(
  sessionId: string,
  lastN = 10
): Promise<{ role: string; content: string }[]> {
  const memory = await getSessionMemory(sessionId, lastN) as { messages?: Array<{ role_type?: string; content?: string }> } | null
  if (!memory?.messages) return []

  return memory.messages.map((m) => ({
    role: m.role_type || 'user',
    content: m.content || '',
  }))
}

// ============= Legacy Graph Search (backwards compat) =============

export async function searchGraph(
  graphId: string,
  query: string,
  limit = 10
): Promise<GraphSearchResult[]> {
  if (!isZepConfigured() || !graphId) return []

  try {
    const response = await fetch(`${ZEP_API_URL}/graphs/${graphId}/search`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ query, limit }),
    })

    if (!response.ok) return []
    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('ZEP searchGraph error:', error)
    return []
  }
}

export async function searchRelocationContent(query: string, limit = 5): Promise<GraphSearchResult[]> {
  const graphId = process.env.ZEP_RELOCATION_GRAPH_ID || ''
  return searchGraph(graphId, query, limit)
}

export async function searchPlacementContent(query: string, limit = 5): Promise<GraphSearchResult[]> {
  const graphId = process.env.ZEP_PLACEMENT_GRAPH_ID || ''
  return searchGraph(graphId, query, limit)
}

export async function getUserGraph(userId: string): Promise<Record<string, unknown> | null> {
  const graphId = process.env.ZEP_USERS_GRAPH_ID || ''
  if (!isZepConfigured() || !graphId) return null

  try {
    const response = await fetch(`${ZEP_API_URL}/graphs/${graphId}/users/${userId}`, {
      headers: getHeaders(),
    })
    if (!response.ok) return null
    return response.json()
  } catch {
    return null
  }
}

export async function syncUserFacts(
  userId: string,
  facts: UserFact[]
): Promise<{ status: string; error?: string }> {
  const success = await addFactsToUser(userId, facts)
  return success ? { status: 'success' } : { status: 'error', error: 'Failed to sync facts' }
}

export async function addMemoryToGraph(
  userId: string,
  content: string,
  metadata?: Record<string, unknown>
): Promise<{ status: string; error?: string }> {
  const sessionId = `${userId}_memory`
  await getOrCreateSession(userId, sessionId)
  const success = await addMessages(sessionId, [
    { role: 'system', content, metadata },
  ])
  return success ? { status: 'success' } : { status: 'error', error: 'Failed to add memory' }
}

export async function getArticleRecommendations(
  userId: string,
  query: string,
  graphType: 'relocation' | 'placement' = 'relocation'
): Promise<GraphSearchResult[]> {
  const results =
    graphType === 'placement'
      ? await searchPlacementContent(query)
      : await searchRelocationContent(query)

  return results.filter((r) => r.type === 'article')
}
