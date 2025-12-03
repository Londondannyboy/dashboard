/**
 * Zod schemas for validated AI outputs - mirrors Python Pydantic schemas.
 */

import { z } from 'zod'

// Enums
export const JobStatusSchema = z.enum(['employed', 'seeking', 'remote', 'retired'])
export type JobStatus = z.infer<typeof JobStatusSchema>

export const FactTypeSchema = z.enum([
  'destination_preference',
  'current_location',
  'family_status',
  'job_status',
  'budget_range',
  'timeline',
  'language',
  'visa_requirement',
  'custom',
])
export type FactType = z.infer<typeof FactTypeSchema>

// Structured outputs
export const DestinationPreferenceSchema = z.object({
  country: z.string(),
  priority: z.number().min(1).max(10),
  reasons: z.array(z.string()).default([]),
})
export type DestinationPreference = z.infer<typeof DestinationPreferenceSchema>

export const FamilyConditionSchema = z.object({
  has_partner: z.boolean().default(false),
  has_children: z.boolean().default(false),
  children_ages: z.array(z.number()).default([]),
  partner_nationality: z.string().nullable().optional(),
  partner_work_status: z.string().nullable().optional(),
})
export type FamilyCondition = z.infer<typeof FamilyConditionSchema>

export const BudgetRangeSchema = z.object({
  monthly_min: z.number().nullable().optional(),
  monthly_max: z.number().nullable().optional(),
  currency: z.string().default('USD'),
  includes_housing: z.boolean().default(true),
})
export type BudgetRange = z.infer<typeof BudgetRangeSchema>

export const UserConditionsSchema = z.object({
  destination_preferences: z.array(DestinationPreferenceSchema).default([]),
  family_condition: FamilyConditionSchema.nullable().optional(),
  job_status: JobStatusSchema.nullable().optional(),
  budget: BudgetRangeSchema.nullable().optional(),
  timeline: z.string().nullable().optional(),
  current_location: z.string().nullable().optional(),
})
export type UserConditions = z.infer<typeof UserConditionsSchema>

export const ExtractedFactSchema = z.object({
  type: FactTypeSchema,
  value: z.string(),
  confidence: z.number().min(0).max(1),
  requires_confirmation: z.boolean().default(false),
  context: z.string().default(''),
})
export type ExtractedFact = z.infer<typeof ExtractedFactSchema>

export const FactExtractionResultSchema = z.object({
  facts: z.array(ExtractedFactSchema).default([]),
  user_conditions: UserConditionsSchema.nullable().optional(),
  has_changes: z.boolean().default(false),
  summary: z.string().default(''),
})
export type FactExtractionResult = z.infer<typeof FactExtractionResultSchema>

export const PendingConfirmationSchema = z.object({
  id: z.string().optional(),
  user_id: z.string(),
  fact_type: FactTypeSchema,
  old_value: z.string().nullable().optional(),
  new_value: z.string(),
  confidence: z.number(),
  context: z.string(),
  status: z.string().default('pending'),
  created_at: z.string().optional(),
})
export type PendingConfirmation = z.infer<typeof PendingConfirmationSchema>

export const ChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
})
export type ChatMessage = z.infer<typeof ChatMessageSchema>

export const ArticleRecommendationSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  relevance_score: z.number(),
  tags: z.array(z.string()).default([]),
})
export type ArticleRecommendation = z.infer<typeof ArticleRecommendationSchema>

export const ChatResponseSchema = z.object({
  content: z.string(),
  extracted_facts: z.array(ExtractedFactSchema).default([]),
  pending_confirmations: z.array(PendingConfirmationSchema).default([]),
  recommendations: z.array(ArticleRecommendationSchema).default([]),
})
export type ChatResponse = z.infer<typeof ChatResponseSchema>
