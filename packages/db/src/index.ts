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
  TranscriptEntry,
  CreateTranscriptInput,
  VoiceSession,
  VoiceMessage,
  CreateVoiceSessionInput,
  UpdateVoiceSessionInput,
} from './types.js'

// Queries - Users
export {
  getUserById,
  getUserByNeonAuthId,
  getUserByEmail,
  createUser,
  updateUser,
  getOrCreateUser,
} from './queries.js'

// Queries - Facts (JSONB operations on users.facts)
export {
  getUserFacts,
  addFact,
  updateFact,
  removeFact,
  confirmFact,
} from './queries.js'

// Queries - Confirmations (JSONB operations on users.pending_confirmations)
export {
  getPendingConfirmations,
  addConfirmation,
  resolveConfirmation,
  approveConfirmation,
  rejectConfirmation,
} from './queries.js'

// Queries - Transcripts (JSONB operations on users.transcripts)
export {
  getTranscripts,
  addTranscript,
  getRecentSessions,
} from './queries.js'

// Queries - Voice Sessions
export {
  getVoiceSession,
  getVoiceSessionsByUser,
  createVoiceSession,
  updateVoiceSession,
  addMessageToSession,
  endVoiceSession,
} from './queries.js'

// Queries - Conversation Facts (for Hume tools - uses user_facts table)
export {
  getUserFactsByStackId,
  saveUserFact,
} from './queries.js'

export type { ConversationFact } from './queries.js'

// SEO Validation
export {
  SEO_RULES,
  validateTitleLength,
  validateMetaDescription,
  validateTitleKeywordsInContent,
  validateInternalLinks,
  countInternalLinks,
  validateArticleSEO,
  shortenTitle,
} from './seo-validation.js'

export type {
  SEOValidationResult,
  ArticleSEOInput,
} from './seo-validation.js'
