// In-memory message store for conversation history
// In production, replace with Redis or PostgreSQL

import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

interface ThreadMessages {
  messages: ChatCompletionMessageParam[]
  context?: Record<string, unknown>
  lastUpdated: Date
}

const messageStore = new Map<string, ThreadMessages>()

// Clean up old threads periodically (older than 24 hours)
const THREAD_TTL = 24 * 60 * 60 * 1000 // 24 hours

export function getThreadMessages(threadId: string): ChatCompletionMessageParam[] {
  const thread = messageStore.get(threadId)
  return thread?.messages || []
}

export function getThreadContext(threadId: string): Record<string, unknown> | undefined {
  const thread = messageStore.get(threadId)
  return thread?.context
}

export function addMessage(threadId: string, message: ChatCompletionMessageParam): void {
  const thread = messageStore.get(threadId) || {
    messages: [],
    lastUpdated: new Date(),
  }

  thread.messages.push(message)
  thread.lastUpdated = new Date()
  messageStore.set(threadId, thread)
}

export function setThreadContext(threadId: string, context: Record<string, unknown>): void {
  const thread = messageStore.get(threadId) || {
    messages: [],
    lastUpdated: new Date(),
  }

  thread.context = context
  thread.lastUpdated = new Date()
  messageStore.set(threadId, thread)
}

export function getMessagesForOpenAI(threadId: string): ChatCompletionMessageParam[] {
  const messages = getThreadMessages(threadId)
  const context = getThreadContext(threadId)

  // Build system message with context
  const systemMessage: ChatCompletionMessageParam = {
    role: 'system',
    content: buildSystemPrompt(context),
  }

  return [systemMessage, ...messages]
}

function buildSystemPrompt(context?: Record<string, unknown>): string {
  let prompt = `You are Quest, an expert AI relocation assistant helping users move to a new country. You provide helpful, accurate information about visas, cost of living, healthcare, and the relocation process.

Your responses should be:
- Friendly and encouraging
- Accurate and well-researched
- Practical with actionable advice
- Culturally sensitive

When generating UI components:
- Use charts for cost comparisons
- Use cards for country summaries
- Use forms for collecting user preferences
- Use lists for step-by-step processes`

  if (context) {
    prompt += '\n\n## User Context\n'

    if (context.userName) {
      prompt += `- User name: ${context.userName}\n`
    }
    if (context.destination) {
      prompt += `- Target destination: ${context.destination}\n`
    }
    if (context.origin) {
      prompt += `- Current location: ${context.origin}\n`
    }
    if (context.budget) {
      prompt += `- Budget: ${context.budget}\n`
    }
    if (context.timeline) {
      prompt += `- Timeline: ${context.timeline}\n`
    }
    if (context.profession) {
      prompt += `- Profession: ${context.profession}\n`
    }
    if (context.family_status) {
      prompt += `- Family status: ${context.family_status}\n`
    }
    if (context.nationality) {
      prompt += `- Nationality: ${context.nationality}\n`
    }

    prompt += '\nUse this context to personalize your responses and recommendations.'
  }

  return prompt
}

export function clearThread(threadId: string): void {
  messageStore.delete(threadId)
}

// Cleanup old threads
export function cleanupOldThreads(): void {
  const now = Date.now()

  for (const [threadId, thread] of messageStore.entries()) {
    if (now - thread.lastUpdated.getTime() > THREAD_TTL) {
      messageStore.delete(threadId)
    }
  }
}

// Run cleanup every hour
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupOldThreads, 60 * 60 * 1000)
}
