// User types
export interface User {
  id: string
  email: string
  name: string | null
  first_name: string | null
  last_name: string | null
  stack_auth_id: string
  created_at: Date
  updated_at: Date
}

export interface CreateUserInput {
  email: string
  name?: string
  first_name?: string
  last_name?: string
  stack_auth_id: string
}

export interface UpdateUserInput {
  name?: string
  first_name?: string
  last_name?: string
}

// User Facts
export interface UserFact {
  id: string
  user_id: string
  type: FactType
  value: string
  confidence: number
  confirmed: boolean
  source: string // 'voice' | 'chat' | 'form' | 'manual'
  created_at: Date
  updated_at: Date
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
  | 'custom'

export interface CreateFactInput {
  user_id: string
  type: FactType
  value: string
  confidence?: number
  confirmed?: boolean
  source: string
}

// Pending Confirmations (HITL)
export interface PendingConfirmation {
  id: string
  user_id: string
  fact_type: FactType
  old_value: string | null
  new_value: string
  confidence: number
  context: string // What prompted this change
  status: 'pending' | 'approved' | 'rejected'
  created_at: Date
  resolved_at: Date | null
}

export interface CreateConfirmationInput {
  user_id: string
  fact_type: FactType
  old_value?: string
  new_value: string
  confidence: number
  context: string
}

// Transcripts
export interface Transcript {
  id: string
  user_id: string
  session_id: string
  role: 'user' | 'assistant'
  content: string
  emotion_scores: Record<string, number> | null // Hume emotion data
  created_at: Date
}

export interface CreateTranscriptInput {
  user_id: string
  session_id: string
  role: 'user' | 'assistant'
  content: string
  emotion_scores?: Record<string, number>
}

// Onboarding data
export interface OnboardingData {
  id: string
  user_id: string
  current_location: string | null
  destination_countries: string[]
  job_status: 'employed' | 'seeking' | 'remote' | 'retired' | null
  has_partner: boolean
  has_children: boolean
  children_ages: number[]
  timeline: string | null
  budget_min: number | null
  budget_max: number | null
  budget_currency: string
  completed: boolean
  created_at: Date
  updated_at: Date
}

export interface CreateOnboardingInput {
  user_id: string
  current_location?: string
  destination_countries?: string[]
  job_status?: 'employed' | 'seeking' | 'remote' | 'retired'
  has_partner?: boolean
  has_children?: boolean
  children_ages?: number[]
  timeline?: string
  budget_min?: number
  budget_max?: number
  budget_currency?: string
}
