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
  searchGraph,
  searchRelocationContent,
  searchPlacementContent,
  getUserGraph,
  syncUserFacts,
  addMemoryToGraph,
  getArticleRecommendations,
} from './zep.js'

export type { GraphSearchResult, UserFact } from './zep.js'
