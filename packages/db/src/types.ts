// User types - matches actual Neon schema
export interface User {
  id: string
  neon_auth_id: string
  email: string
  first_name: string | null
  last_name: string | null
  current_country: string | null
  destination_countries: string[] | null
  nationality: string | null
  budget_monthly: number | null
  timeline: string | null
  relocation_motivation: string[] | null
  facts: UserFact[]
  pending_confirmations: PendingConfirmation[]
  transcripts: TranscriptEntry[]
  created_at: Date
  updated_at: Date
}

export interface CreateUserInput {
  neon_auth_id: string
  email: string
  first_name?: string
  last_name?: string
}

export interface UpdateUserInput {
  first_name?: string
  last_name?: string
  current_country?: string
  destination_countries?: string[]
  nationality?: string
  budget_monthly?: number
  timeline?: string
  relocation_motivation?: string[]
}

// User Facts (stored as JSONB array in users.facts)
export interface UserFact {
  id: string
  type: FactType
  value: string
  confidence: number
  confirmed: boolean
  source: string // 'voice' | 'chat' | 'form' | 'manual'
  created_at: string
}

export type FactType =
  | 'destination_preference'
  | 'current_location'
  | 'family_status'
  | 'job_status'
  | 'budget_range'
  | 'timeline'
  | 'language'
  | 'visa_requirement'
  | 'nationality'
  | 'custom'

export interface CreateFactInput {
  type: FactType
  value: string
  confidence?: number
  confirmed?: boolean
  source: string
}

// Pending Confirmations (stored as JSONB in users.pending_confirmations)
export interface PendingConfirmation {
  id: string
  fact_type: FactType
  old_value: string | null
  new_value: string
  confidence: number
  context: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  resolved_at: string | null
}

export interface CreateConfirmationInput {
  fact_type: FactType
  old_value?: string
  new_value: string
  confidence: number
  context: string
}

// Transcript entries (stored as JSONB in users.transcripts)
export interface TranscriptEntry {
  id: string
  session_id: string
  role: 'user' | 'assistant'
  content: string
  emotion_scores?: Record<string, number>
  created_at: string
}

export interface CreateTranscriptInput {
  session_id: string
  role: 'user' | 'assistant'
  content: string
  emotion_scores?: Record<string, number>
}

// Voice Sessions table
export interface VoiceSession {
  id: number
  session_id: string
  user_profile_id: string | null
  stack_user_id: string | null
  status: 'active' | 'ended' | string
  messages: VoiceMessage[]
  quick_extraction: Record<string, unknown>
  llm_refined_facts: Record<string, unknown>
  message_count: number
  duration_seconds: number | null
  started_at: Date
  ended_at: Date | null
  created_at: Date
  updated_at: Date
}

export interface VoiceMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
  emotions?: Record<string, number>
}

export interface CreateVoiceSessionInput {
  session_id: string
  user_profile_id?: string
  stack_user_id?: string
}

export interface UpdateVoiceSessionInput {
  status?: string
  messages?: VoiceMessage[]
  quick_extraction?: Record<string, unknown>
  llm_refined_facts?: Record<string, unknown>
  message_count?: number
  duration_seconds?: number
  ended_at?: Date
}
