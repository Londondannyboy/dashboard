// Voice components
export { HumeVoiceChat, useHumeAccessToken } from './voice/index.js'
export type { EmotionScore, VoiceChatCallbacks, HumeVariables } from './voice/index.js'

// Graph components
export { KnowledgeGraph3D, useGraphData } from './graphs/index.js'
export type { GraphNode, GraphLink, GraphData } from './graphs/index.js'

// Dashboard components
export { ProfileSection, RepoSection, ArticlesSection, WorkflowsSection } from './dashboard/index.js'
export type { ProfileSectionProps, RepoSectionProps, ArticlesSectionProps, WorkflowsSectionProps } from './dashboard/index.js'

// Layout components
export { GlobalHeader, GlobalFooter } from './layout/index.js'
export type { GlobalHeaderProps, GlobalFooterProps } from './layout/index.js'

// Feedback components (HITL)
export { ConfirmationSidebar } from './feedback/index.js'
export type { ConfirmationSidebarProps, PendingConfirmation } from './feedback/index.js'

// Hooks
export { useSSE } from './hooks/index.js'
