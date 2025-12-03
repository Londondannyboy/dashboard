/**
 * ZEP Knowledge Graph integration for TypeScript.
 */

const ZEP_API_URL = process.env.ZEP_API_URL || 'https://api.getzep.com/api/v2'
const ZEP_API_KEY = process.env.ZEP_API_KEY || ''

function getHeaders(): Record<string, string> {
  return {
    Authorization: `Api-Key ${ZEP_API_KEY}`,
    'Content-Type': 'application/json',
  }
}

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

/**
 * Search a ZEP knowledge graph.
 */
export async function searchGraph(
  graphId: string,
  query: string,
  limit = 10
): Promise<GraphSearchResult[]> {
  if (!ZEP_API_KEY || !graphId) {
    return []
  }

  try {
    const response = await fetch(`${ZEP_API_URL}/graphs/${graphId}/search`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        query,
        limit,
      }),
    })

    if (!response.ok) {
      console.error(`ZEP search error: ${response.statusText}`)
      return []
    }

    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('ZEP search error:', error)
    return []
  }
}

/**
 * Search relocation content graph.
 */
export async function searchRelocationContent(
  query: string,
  limit = 5
): Promise<GraphSearchResult[]> {
  const graphId = process.env.ZEP_RELOCATION_GRAPH_ID || ''
  return searchGraph(graphId, query, limit)
}

/**
 * Search placement/jobs content graph.
 */
export async function searchPlacementContent(
  query: string,
  limit = 5
): Promise<GraphSearchResult[]> {
  const graphId = process.env.ZEP_PLACEMENT_GRAPH_ID || ''
  return searchGraph(graphId, query, limit)
}

/**
 * Get user's knowledge graph data.
 */
export async function getUserGraph(userId: string): Promise<Record<string, unknown> | null> {
  const graphId = process.env.ZEP_USERS_GRAPH_ID || ''
  if (!ZEP_API_KEY || !graphId) {
    return null
  }

  try {
    const response = await fetch(
      `${ZEP_API_URL}/graphs/${graphId}/users/${userId}`,
      { headers: getHeaders() }
    )

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch {
    return null
  }
}

export interface UserFact {
  type: string
  value: string
  confidence: number
}

/**
 * Sync user facts to ZEP knowledge graph.
 */
export async function syncUserFacts(
  userId: string,
  facts: UserFact[]
): Promise<{ status: string; error?: string }> {
  const graphId = process.env.ZEP_USERS_GRAPH_ID || ''
  if (!ZEP_API_KEY || !graphId) {
    return { status: 'skipped', error: 'ZEP not configured' }
  }

  try {
    const response = await fetch(
      `${ZEP_API_URL}/graphs/${graphId}/users/${userId}/facts`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ facts }),
      }
    )

    if (!response.ok) {
      return { status: 'error', error: response.statusText }
    }

    return response.json()
  } catch (error) {
    return { status: 'error', error: String(error) }
  }
}

/**
 * Add memory to user's graph.
 */
export async function addMemoryToGraph(
  userId: string,
  content: string,
  metadata?: Record<string, unknown>
): Promise<{ status: string; error?: string }> {
  const graphId = process.env.ZEP_USERS_GRAPH_ID || ''
  if (!ZEP_API_KEY || !graphId) {
    return { status: 'skipped', error: 'ZEP not configured' }
  }

  try {
    const response = await fetch(
      `${ZEP_API_URL}/graphs/${graphId}/users/${userId}/memory`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ content, metadata: metadata || {} }),
      }
    )

    if (!response.ok) {
      return { status: 'error', error: response.statusText }
    }

    return response.json()
  } catch (error) {
    return { status: 'error', error: String(error) }
  }
}

/**
 * Get article recommendations for a user based on their context.
 */
export async function getArticleRecommendations(
  userId: string,
  query: string,
  graphType: 'relocation' | 'placement' = 'relocation'
): Promise<GraphSearchResult[]> {
  const results =
    graphType === 'placement'
      ? await searchPlacementContent(query)
      : await searchRelocationContent(query)

  // Filter for articles only
  return results.filter((r) => r.type === 'article')
}
