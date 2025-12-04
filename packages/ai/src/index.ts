// Gateway - API client
export {
  chat,
  chatComplete,
  extractFacts,
  createPendingConfirmation,
  approveConfirmation,
  rejectConfirmation,
  getApiUrl,
} from './gateway.js'

// Schemas
export type {
  JobStatus,
  FactType,
  DestinationPreference,
  FamilyCondition,
  BudgetRange,
  UserConditions,
  ExtractedFact,
  FactExtractionResult,
  PendingConfirmation,
  ChatMessage,
  ArticleRecommendation,
  ChatResponse,
} from './schemas.js'

export {
  JobStatusSchema,
  FactTypeSchema,
  DestinationPreferenceSchema,
  FamilyConditionSchema,
  BudgetRangeSchema,
  UserConditionsSchema,
  ExtractedFactSchema,
  FactExtractionResultSchema,
  PendingConfirmationSchema,
  ChatMessageSchema,
  ArticleRecommendationSchema,
  ChatResponseSchema,
} from './schemas.js'

// ZEP
export {
  isZepConfigured,
  searchGraph,
  searchRelocationContent,
  searchPlacementContent,
  getUserGraph,
  syncUserFacts,
  addMemoryToGraph,
  getArticleRecommendations,
  getOrCreateSession,
  addMessages,
  getSessionMemory,
  searchMemory,
  storeConversationTurn,
  getConversationContext,
} from './zep.js'

export type { GraphSearchResult, UserFact, AddMessageInput } from './zep.js'

// Super Memory
export {
  isSuperMemoryConfigured,
  createMemory,
  getMemory,
  getUserMemories,
  updateMemory,
  deleteMemory,
  searchMemories,
  saveUserFact as saveMemoryFact,
  getUserFacts as getMemoryFacts,
  saveUserPreference,
  saveConversationSummary,
} from './supermemory.js'

export type {
  Memory,
  CreateMemoryInput,
  UpdateMemoryInput,
  SearchMemoryInput,
} from './supermemory.js'

// Hume Voice
export {
  QUEST_VOICE_SYSTEM_PROMPT,
  QUEST_VOICE_SHORT_PROMPT,
  buildHumeVariables,
} from './prompts/quest-voice-prompt.js'

export type { HumeSessionVariables } from './prompts/quest-voice-prompt.js'
