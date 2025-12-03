import { getDb } from './client.js'
import type {
  User,
  CreateUserInput,
  UpdateUserInput,
  UserFact,
  CreateFactInput,
  PendingConfirmation,
  CreateConfirmationInput,
  Transcript,
  CreateTranscriptInput,
  OnboardingData,
  CreateOnboardingInput,
} from './types.js'

// ============= Users =============

export async function getUserById(id: string): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM users WHERE id = ${id} LIMIT 1
  `
  return rows[0] as User | undefined ?? null
}

export async function getUserByStackAuthId(stackAuthId: string): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM users WHERE stack_auth_id = ${stackAuthId} LIMIT 1
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
    INSERT INTO users (email, name, first_name, last_name, stack_auth_id)
    VALUES (${data.email}, ${data.name ?? null}, ${data.first_name ?? null}, ${data.last_name ?? null}, ${data.stack_auth_id})
    RETURNING *
  `
  return rows[0] as User
}

export async function updateUser(id: string, data: UpdateUserInput): Promise<User | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE users
    SET
      name = COALESCE(${data.name ?? null}, name),
      first_name = COALESCE(${data.first_name ?? null}, first_name),
      last_name = COALESCE(${data.last_name ?? null}, last_name),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as User | undefined ?? null
}

export async function getOrCreateUser(data: CreateUserInput): Promise<User> {
  const existing = await getUserByStackAuthId(data.stack_auth_id)
  if (existing) return existing
  return createUser(data)
}

// ============= User Facts =============

export async function getUserFacts(userId: string): Promise<UserFact[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM user_facts
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `
  return rows as UserFact[]
}

export async function getFactsByType(userId: string, type: string): Promise<UserFact[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM user_facts
    WHERE user_id = ${userId} AND type = ${type}
    ORDER BY created_at DESC
  `
  return rows as UserFact[]
}

export async function createFact(data: CreateFactInput): Promise<UserFact> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO user_facts (user_id, type, value, confidence, confirmed, source)
    VALUES (
      ${data.user_id},
      ${data.type},
      ${data.value},
      ${data.confidence ?? 1.0},
      ${data.confirmed ?? false},
      ${data.source}
    )
    RETURNING *
  `
  return rows[0] as UserFact
}

export async function updateFact(id: string, value: string, confirmed?: boolean): Promise<UserFact | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE user_facts
    SET
      value = ${value},
      confirmed = COALESCE(${confirmed ?? null}, confirmed),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as UserFact | undefined ?? null
}

export async function deleteFact(id: string): Promise<boolean> {
  const sql = getDb()
  const result = await sql`
    DELETE FROM user_facts WHERE id = ${id} RETURNING id
  `
  return result.length > 0
}

export async function confirmFact(id: string): Promise<UserFact | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE user_facts
    SET confirmed = true, updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as UserFact | undefined ?? null
}

// ============= Pending Confirmations =============

export async function getPendingConfirmations(userId: string): Promise<PendingConfirmation[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM pending_confirmations
    WHERE user_id = ${userId} AND status = 'pending'
    ORDER BY created_at DESC
  `
  return rows as PendingConfirmation[]
}

export async function createConfirmation(data: CreateConfirmationInput): Promise<PendingConfirmation> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO pending_confirmations (user_id, fact_type, old_value, new_value, confidence, context, status)
    VALUES (
      ${data.user_id},
      ${data.fact_type},
      ${data.old_value ?? null},
      ${data.new_value},
      ${data.confidence},
      ${data.context},
      'pending'
    )
    RETURNING *
  `
  return rows[0] as PendingConfirmation
}

export async function approveConfirmation(id: string): Promise<PendingConfirmation | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE pending_confirmations
    SET status = 'approved', resolved_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as PendingConfirmation | undefined ?? null
}

export async function rejectConfirmation(id: string): Promise<PendingConfirmation | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE pending_confirmations
    SET status = 'rejected', resolved_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `
  return rows[0] as PendingConfirmation | undefined ?? null
}

// ============= Transcripts =============

export async function getTranscripts(userId: string, sessionId?: string): Promise<Transcript[]> {
  const sql = getDb()
  if (sessionId) {
    const rows = await sql`
      SELECT * FROM transcripts
      WHERE user_id = ${userId} AND session_id = ${sessionId}
      ORDER BY created_at ASC
    `
    return rows as Transcript[]
  }
  const rows = await sql`
    SELECT * FROM transcripts
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
    LIMIT 100
  `
  return rows as Transcript[]
}

export async function createTranscript(data: CreateTranscriptInput): Promise<Transcript> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO transcripts (user_id, session_id, role, content, emotion_scores)
    VALUES (
      ${data.user_id},
      ${data.session_id},
      ${data.role},
      ${data.content},
      ${data.emotion_scores ? JSON.stringify(data.emotion_scores) : null}
    )
    RETURNING *
  `
  return rows[0] as Transcript
}

export async function getRecentSessions(userId: string, limit = 10): Promise<string[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT DISTINCT session_id
    FROM transcripts
    WHERE user_id = ${userId}
    ORDER BY MAX(created_at) DESC
    LIMIT ${limit}
  `
  return rows.map((r: Record<string, unknown>) => r.session_id as string)
}

// ============= Onboarding =============

export async function getOnboarding(userId: string): Promise<OnboardingData | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM onboarding_data WHERE user_id = ${userId} LIMIT 1
  `
  return rows[0] as OnboardingData | undefined ?? null
}

export async function createOnboarding(data: CreateOnboardingInput): Promise<OnboardingData> {
  const sql = getDb()
  const rows = await sql`
    INSERT INTO onboarding_data (
      user_id,
      current_location,
      destination_countries,
      job_status,
      has_partner,
      has_children,
      children_ages,
      timeline,
      budget_min,
      budget_max,
      budget_currency,
      completed
    )
    VALUES (
      ${data.user_id},
      ${data.current_location ?? null},
      ${data.destination_countries ?? []},
      ${data.job_status ?? null},
      ${data.has_partner ?? false},
      ${data.has_children ?? false},
      ${data.children_ages ?? []},
      ${data.timeline ?? null},
      ${data.budget_min ?? null},
      ${data.budget_max ?? null},
      ${data.budget_currency ?? 'USD'},
      false
    )
    RETURNING *
  `
  return rows[0] as OnboardingData
}

export async function updateOnboarding(
  userId: string,
  data: Partial<CreateOnboardingInput>
): Promise<OnboardingData | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE onboarding_data
    SET
      current_location = COALESCE(${data.current_location ?? null}, current_location),
      destination_countries = COALESCE(${data.destination_countries ?? null}, destination_countries),
      job_status = COALESCE(${data.job_status ?? null}, job_status),
      has_partner = COALESCE(${data.has_partner ?? null}, has_partner),
      has_children = COALESCE(${data.has_children ?? null}, has_children),
      children_ages = COALESCE(${data.children_ages ?? null}, children_ages),
      timeline = COALESCE(${data.timeline ?? null}, timeline),
      budget_min = COALESCE(${data.budget_min ?? null}, budget_min),
      budget_max = COALESCE(${data.budget_max ?? null}, budget_max),
      budget_currency = COALESCE(${data.budget_currency ?? null}, budget_currency),
      updated_at = NOW()
    WHERE user_id = ${userId}
    RETURNING *
  `
  return rows[0] as OnboardingData | undefined ?? null
}

export async function completeOnboarding(userId: string): Promise<OnboardingData | null> {
  const sql = getDb()
  const rows = await sql`
    UPDATE onboarding_data
    SET completed = true, updated_at = NOW()
    WHERE user_id = ${userId}
    RETURNING *
  `
  return rows[0] as OnboardingData | undefined ?? null
}
