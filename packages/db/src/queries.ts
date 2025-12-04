import { getDb } from './client.js'
import type {
  User,
  CreateUserInput,
  UpdateUserInput,
  UserFact,
  CreateFactInput,
  PendingConfirmation,
  CreateConfirmationInput,
  TranscriptEntry,
  CreateTranscriptInput,
  VoiceSession,
  CreateVoiceSessionInput,
  UpdateVoiceSessionInput,
} from './types.js'

// ============= Users =============

export async function getUserById(id: string): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM users WHERE id = ${id} LIMIT 1
  `
  return rows[0] as User | undefined ?? null
}

export async function getUserByNeonAuthId(neonAuthId: string): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM users WHERE neon_auth_id = ${neonAuthId} LIMIT 1
  `
  return rows[0] as User | undefined ?? null
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM users WHERE email = ${email} LIMIT 1
  `
  return rows[0] as User | undefined ?? null
}

export async function createUser(data: CreateUserInput): Promise<User> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO users (neon_auth_id, email, first_name, last_name)
    VALUES (${data.neon_auth_id}, ${data.email}, ${data.first_name ?? null}, ${data.last_name ?? null})
    RETURNING *
  `
  return rows[0] as User
}

export async function updateUser(id: string, data: UpdateUserInput): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE users
    SET
      first_name = COALESCE(${data.first_name ?? null}, first_name),
      last_name = COALESCE(${data.last_name ?? null}, last_name),
      current_country = COALESCE(${data.current_country ?? null}, current_country),
      destination_countries = COALESCE(${data.destination_countries ?? null}, destination_countries),
      nationality = COALESCE(${data.nationality ?? null}, nationality),
      budget_monthly = COALESCE(${data.budget_monthly ?? null}, budget_monthly),
      timeline = COALESCE(${data.timeline ?? null}, timeline),
      relocation_motivation = COALESCE(${data.relocation_motivation ?? null}, relocation_motivation),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as User | undefined ?? null
}

export async function getOrCreateUser(data: CreateUserInput): Promise<User> {
  const existing = await getUserByNeonAuthId(data.neon_auth_id)
  if (existing) return existing
  return createUser(data)
}

// ============= User Facts (JSONB) =============

function generateId(): string {
  return crypto.randomUUID()
}

export async function getUserFacts(userId: string): Promise<UserFact[]> {
  const user = await getUserById(userId)
  return user?.facts ?? []
}

export async function addFact(userId: string, data: CreateFactInput): Promise<UserFact> {
  const sql = getDb()
  const newFact: UserFact = {
    id: generateId(),
    type: data.type,
    value: data.value,
    confidence: data.confidence ?? 1.0,
    confirmed: data.confirmed ?? false,
    source: data.source,
    created_at: new Date().toISOString(),
  }

  await sql`
    UPDATE users
    SET facts = facts || ${JSON.stringify(newFact)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `
  return newFact
}

export async function updateFact(userId: string, factId: string, value: string, confirmed?: boolean): Promise<UserFact | null> {
  const sql = getDb()
  const user = await getUserById(userId)
  if (!user) return null

  const facts = user.facts.map(f => {
    if (f.id === factId) {
      return { ...f, value, confirmed: confirmed ?? f.confirmed }
    }
    return f
  })

  await sql`
    UPDATE users
    SET facts = ${JSON.stringify(facts)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `

  return facts.find(f => f.id === factId) ?? null
}

export async function removeFact(userId: string, factId: string): Promise<boolean> {
  const sql = getDb()
  const user = await getUserById(userId)
  if (!user) return false

  const facts = user.facts.filter(f => f.id !== factId)

  await sql`
    UPDATE users
    SET facts = ${JSON.stringify(facts)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `
  return true
}

export async function confirmFact(userId: string, factId: string): Promise<UserFact | null> {
  return updateFact(userId, factId, '', true)
}

// ============= Pending Confirmations (JSONB) =============

export async function getPendingConfirmations(userId: string): Promise<PendingConfirmation[]> {
  const user = await getUserById(userId)
  return user?.pending_confirmations.filter(c => c.status === 'pending') ?? []
}

export async function addConfirmation(userId: string, data: CreateConfirmationInput): Promise<PendingConfirmation> {
  const sql = getDb()
  const newConfirmation: PendingConfirmation = {
    id: generateId(),
    fact_type: data.fact_type,
    old_value: data.old_value ?? null,
    new_value: data.new_value,
    confidence: data.confidence,
    context: data.context,
    status: 'pending',
    created_at: new Date().toISOString(),
    resolved_at: null,
  }

  await sql`
    UPDATE users
    SET pending_confirmations = pending_confirmations || ${JSON.stringify(newConfirmation)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `
  return newConfirmation
}

export async function resolveConfirmation(
  userId: string,
  confirmationId: string,
  status: 'approved' | 'rejected'
): Promise<PendingConfirmation | null> {
  const sql = getDb()
  const user = await getUserById(userId)
  if (!user) return null

  const confirmations = user.pending_confirmations.map(c => {
    if (c.id === confirmationId) {
      return { ...c, status, resolved_at: new Date().toISOString() }
    }
    return c
  })

  await sql`
    UPDATE users
    SET pending_confirmations = ${JSON.stringify(confirmations)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `

  return confirmations.find(c => c.id === confirmationId) ?? null
}

export async function approveConfirmation(userId: string, confirmationId: string): Promise<PendingConfirmation | null> {
  return resolveConfirmation(userId, confirmationId, 'approved')
}

export async function rejectConfirmation(userId: string, confirmationId: string): Promise<PendingConfirmation | null> {
  return resolveConfirmation(userId, confirmationId, 'rejected')
}

// ============= Transcripts (JSONB) =============

export async function getTranscripts(userId: string, sessionId?: string): Promise<TranscriptEntry[]> {
  const user = await getUserById(userId)
  const transcripts = user?.transcripts ?? []

  if (sessionId) {
    return transcripts.filter(t => t.session_id === sessionId)
  }
  return transcripts
}

export async function addTranscript(userId: string, data: CreateTranscriptInput): Promise<TranscriptEntry> {
  const sql = getDb()
  const newTranscript: TranscriptEntry = {
    id: generateId(),
    session_id: data.session_id,
    role: data.role,
    content: data.content,
    emotion_scores: data.emotion_scores,
    created_at: new Date().toISOString(),
  }

  await sql`
    UPDATE users
    SET transcripts = transcripts || ${JSON.stringify(newTranscript)}::jsonb,
        updated_at = NOW()
    WHERE id = ${userId}
  `
  return newTranscript
}

export async function getRecentSessions(userId: string, limit = 10): Promise<string[]> {
  const transcripts = await getTranscripts(userId)
  const sessionIds = [...new Set(transcripts.map(t => t.session_id))]
  return sessionIds.slice(0, limit)
}

// ============= Voice Sessions =============

export async function getVoiceSession(sessionId: string): Promise<VoiceSession | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM voice_sessions WHERE session_id = ${sessionId} LIMIT 1
  `
  return rows[0] as VoiceSession | undefined ?? null
}

export async function getVoiceSessionsByUser(stackUserId: string): Promise<VoiceSession[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM voice_sessions
    WHERE stack_user_id = ${stackUserId}
    ORDER BY created_at DESC
  `
  return rows as VoiceSession[]
}

export async function createVoiceSession(data: CreateVoiceSessionInput): Promise<VoiceSession> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO voice_sessions (session_id, user_profile_id, stack_user_id)
    VALUES (${data.session_id}, ${data.user_profile_id ?? null}, ${data.stack_user_id ?? null})
    RETURNING *
  `
  return rows[0] as VoiceSession
}

export async function updateVoiceSession(sessionId: string, data: UpdateVoiceSessionInput): Promise<VoiceSession | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE voice_sessions
    SET
      status = COALESCE(${data.status ?? null}, status),
      messages = COALESCE(${data.messages ? JSON.stringify(data.messages) : null}::jsonb, messages),
      quick_extraction = COALESCE(${data.quick_extraction ? JSON.stringify(data.quick_extraction) : null}::jsonb, quick_extraction),
      llm_refined_facts = COALESCE(${data.llm_refined_facts ? JSON.stringify(data.llm_refined_facts) : null}::jsonb, llm_refined_facts),
      message_count = COALESCE(${data.message_count ?? null}, message_count),
      duration_seconds = COALESCE(${data.duration_seconds ?? null}, duration_seconds),
      ended_at = COALESCE(${data.ended_at ?? null}, ended_at),
      updated_at = NOW()
    WHERE session_id = ${sessionId}
    RETURNING *
  `
  return rows[0] as VoiceSession | undefined ?? null
}

export async function addMessageToSession(sessionId: string, message: { role: 'user' | 'assistant'; content: string; emotions?: Record<string, number> }): Promise<VoiceSession | null> {
  const sql = getDb()
  const messageWithTimestamp = {
    ...message,
    timestamp: new Date().toISOString(),
  }

  const rows = await sql`
    UPDATE voice_sessions
    SET
      messages = messages || ${JSON.stringify(messageWithTimestamp)}::jsonb,
      message_count = message_count + 1,
      updated_at = NOW()
    WHERE session_id = ${sessionId}
    RETURNING *
  `
  return rows[0] as VoiceSession | undefined ?? null
}

export async function endVoiceSession(sessionId: string, durationSeconds?: number): Promise<VoiceSession | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE voice_sessions
    SET
      status = 'ended',
      ended_at = NOW(),
      duration_seconds = ${durationSeconds ?? null},
      updated_at = NOW()
    WHERE session_id = ${sessionId}
    RETURNING *
  `
  return rows[0] as VoiceSession | undefined ?? null
}

// ============= Conversation Facts (for Hume tools) =============

export interface ConversationFact {
  id: number
  stack_user_id: string
  fact: string
  category: string
  source_session_id: string | null
  created_at: Date
}

/**
 * Get facts learned about a user from voice conversations
 * Uses Stack Auth user ID (neon_auth_id)
 */
export async function getUserFactsByStackId(
  stackUserId: string,
  category?: string
): Promise<ConversationFact[]> {
  const sql = getDb()

  if (category && category !== 'all') {
    const rows = await sql`
      SELECT * FROM conversation_facts
      WHERE stack_user_id = ${stackUserId}
        AND category = ${category}
      ORDER BY created_at DESC
      LIMIT 20
    `
    return rows as ConversationFact[]
  }

  const rows = await sql`
    SELECT * FROM conversation_facts
    WHERE stack_user_id = ${stackUserId}
    ORDER BY created_at DESC
    LIMIT 20
  `
  return rows as ConversationFact[]
}

/**
 * Save a fact learned about a user during voice conversation
 * Uses Stack Auth user ID (neon_auth_id)
 */
export async function saveUserFact(
  stackUserId: string,
  fact: string,
  category: string,
  sourceSessionId?: string
): Promise<ConversationFact> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO conversation_facts (stack_user_id, fact, category, source_session_id)
    VALUES (${stackUserId}, ${fact}, ${category}, ${sourceSessionId ?? null})
    RETURNING *
  `
  return rows[0] as ConversationFact
}
