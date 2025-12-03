// Client
export { getDb, sql } from './client.js'

// Types
export type {
  User,
  CreateUserInput,
  UpdateUserInput,
  UserFact,
  FactType,
  CreateFactInput,
  PendingConfirmation,
  CreateConfirmationInput,
  Transcript,
  CreateTranscriptInput,
  OnboardingData,
  CreateOnboardingInput,
} from './types.js'

// Queries - Users
export {
  getUserById,
  getUserByStackAuthId,
  getUserByEmail,
  createUser,
  updateUser,
  getOrCreateUser,
} from './queries.js'

// Queries - Facts
export {
  getUserFacts,
  getFactsByType,
  createFact,
  updateFact,
  deleteFact,
  confirmFact,
} from './queries.js'

// Queries - Confirmations
export {
  getPendingConfirmations,
  createConfirmation,
  approveConfirmation,
  rejectConfirmation,
} from './queries.js'

// Queries - Transcripts
export {
  getTranscripts,
  createTranscript,
  getRecentSessions,
} from './queries.js'

// Queries - Onboarding
export {
  getOnboarding,
  createOnboarding,
  updateOnboarding,
  completeOnboarding,
} from './queries.js'
