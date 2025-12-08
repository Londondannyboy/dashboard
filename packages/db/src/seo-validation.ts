/**
 * SEO Validation Rules for All Apps
 *
 * These rules ensure content meets SEO best practices across the monorepo.
 * Apply these validations when creating or updating articles/content.
 */

export interface SEOValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

export interface ArticleSEOInput {
  title: string
  metaDescription?: string | null
  content?: string | null
  brandSuffix?: string // e.g., " | Relocation Quest" (default 19 chars)
}

// Configuration
export const SEO_RULES = {
  // Title rules
  TITLE_MAX_LENGTH: 60, // Total including brand suffix
  TITLE_MIN_LENGTH: 30,

  // Meta description rules
  META_DESC_MIN_LENGTH: 140,
  META_DESC_MAX_LENGTH: 160,

  // Content rules
  MIN_INTERNAL_LINKS: 4,

  // Brand suffix (average)
  DEFAULT_BRAND_SUFFIX_LENGTH: 19, // " | Brand Name"
} as const

/**
 * Extract keywords from a title (ignoring common words)
 */
function extractKeywords(title: string): string[] {
  const stopWords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
    'your', 'our', 'their', 'its', 'this', 'that', 'these', 'those',
    '|', '-', ':', '&', '+',
  ])

  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word))
}

/**
 * Validate article title length
 */
export function validateTitleLength(
  title: string,
  brandSuffixLength: number = SEO_RULES.DEFAULT_BRAND_SUFFIX_LENGTH
): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  const totalLength = title.length + brandSuffixLength

  if (totalLength > SEO_RULES.TITLE_MAX_LENGTH) {
    errors.push(
      `Title too long: ${totalLength} chars (max ${SEO_RULES.TITLE_MAX_LENGTH}). ` +
      `Title should be max ${SEO_RULES.TITLE_MAX_LENGTH - brandSuffixLength} chars.`
    )
  }

  if (totalLength < SEO_RULES.TITLE_MIN_LENGTH) {
    warnings.push(
      `Title may be too short: ${totalLength} chars (recommended min ${SEO_RULES.TITLE_MIN_LENGTH}).`
    )
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Validate meta description length
 */
export function validateMetaDescription(
  description: string | null | undefined
): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!description) {
    warnings.push('Meta description is missing. Add a 140-160 character description.')
    return { valid: true, errors, warnings }
  }

  if (description.length > SEO_RULES.META_DESC_MAX_LENGTH) {
    errors.push(
      `Meta description too long: ${description.length} chars (max ${SEO_RULES.META_DESC_MAX_LENGTH}).`
    )
  }

  if (description.length < SEO_RULES.META_DESC_MIN_LENGTH) {
    warnings.push(
      `Meta description may be too short: ${description.length} chars (recommended ${SEO_RULES.META_DESC_MIN_LENGTH}-${SEO_RULES.META_DESC_MAX_LENGTH}).`
    )
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Validate that title keywords appear in content
 */
export function validateTitleKeywordsInContent(
  title: string,
  content: string | null | undefined
): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!content) {
    warnings.push('No content provided to check for title keywords.')
    return { valid: true, errors, warnings }
  }

  const titleKeywords = extractKeywords(title)
  const contentLower = content.toLowerCase()

  const missingKeywords = titleKeywords.filter(
    keyword => !contentLower.includes(keyword)
  )

  if (missingKeywords.length > 0) {
    warnings.push(
      `Title keywords not found in content: ${missingKeywords.join(', ')}. ` +
      `Include these words in your content for better SEO.`
    )
  }

  return {
    valid: true, // Keywords are a warning, not an error
    errors,
    warnings,
  }
}

/**
 * Count internal links in HTML content
 */
export function countInternalLinks(
  content: string | null | undefined,
  domain: string = ''
): number {
  if (!content) return 0

  // Match <a href="..."> tags
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi
  let count = 0
  let match

  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1]
    // Count internal links (relative paths or same domain)
    if (
      href.startsWith('/') ||
      href.startsWith('#') ||
      (domain && href.includes(domain))
    ) {
      count++
    }
  }

  return count
}

/**
 * Validate minimum internal links
 */
export function validateInternalLinks(
  content: string | null | undefined,
  domain: string = '',
  minLinks: number = SEO_RULES.MIN_INTERNAL_LINKS
): SEOValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  const linkCount = countInternalLinks(content, domain)

  if (linkCount < minLinks) {
    warnings.push(
      `Only ${linkCount} internal links found (recommended min ${minLinks}). ` +
      `Add more internal links to related content.`
    )
  }

  return {
    valid: true, // Links are a warning, not an error
    errors,
    warnings,
  }
}

/**
 * Full SEO validation for an article
 */
export function validateArticleSEO(
  input: ArticleSEOInput,
  domain: string = ''
): SEOValidationResult {
  const brandSuffixLength = input.brandSuffix?.length ?? SEO_RULES.DEFAULT_BRAND_SUFFIX_LENGTH

  const titleResult = validateTitleLength(input.title, brandSuffixLength)
  const metaResult = validateMetaDescription(input.metaDescription)
  const keywordsResult = validateTitleKeywordsInContent(input.title, input.content)
  const linksResult = validateInternalLinks(input.content, domain)

  return {
    valid: titleResult.valid && metaResult.valid,
    errors: [
      ...titleResult.errors,
      ...metaResult.errors,
      ...keywordsResult.errors,
      ...linksResult.errors,
    ],
    warnings: [
      ...titleResult.warnings,
      ...metaResult.warnings,
      ...keywordsResult.warnings,
      ...linksResult.warnings,
    ],
  }
}

/**
 * Generate a shortened title that fits within limits
 */
export function shortenTitle(
  title: string,
  maxLength: number = SEO_RULES.TITLE_MAX_LENGTH - SEO_RULES.DEFAULT_BRAND_SUFFIX_LENGTH
): string {
  if (title.length <= maxLength) return title

  // Try to cut at a natural break point
  const truncated = title.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  const lastColon = truncated.lastIndexOf(':')
  const lastDash = truncated.lastIndexOf('-')

  const breakPoint = Math.max(lastSpace, lastColon, lastDash)

  if (breakPoint > maxLength * 0.6) {
    return truncated.substring(0, breakPoint).trim()
  }

  return truncated.trim()
}
