// Simple in-memory rate limiter
// In production, use Redis for distributed rate limiting

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt < now) {
      rateLimitStore.delete(key)
    }
  }
}, 60000) // Clean every minute

export interface RateLimitConfig {
  maxRequests: number  // Max requests per window
  windowMs: number     // Window size in milliseconds
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now()
  const key = identifier

  let entry = rateLimitStore.get(key)

  // Create new entry if doesn't exist or window expired
  if (!entry || entry.resetAt < now) {
    entry = {
      count: 0,
      resetAt: now + config.windowMs,
    }
  }

  entry.count++
  rateLimitStore.set(key, entry)

  const remaining = Math.max(0, config.maxRequests - entry.count)
  const success = entry.count <= config.maxRequests

  return {
    success,
    remaining,
    resetAt: entry.resetAt,
  }
}

// Preset configurations
export const RATE_LIMITS = {
  // Strict for expensive operations (voice, AI chat)
  expensive: { maxRequests: 10, windowMs: 60000 },    // 10 per minute

  // Standard for API calls
  standard: { maxRequests: 30, windowMs: 60000 },     // 30 per minute

  // Lenient for read operations
  lenient: { maxRequests: 100, windowMs: 60000 },     // 100 per minute

  // Very strict for auth-related
  auth: { maxRequests: 5, windowMs: 60000 },          // 5 per minute
}

// Helper to get client identifier from request
export function getClientId(request: Request): string {
  // Try to get real IP from various headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIp) {
    return realIp
  }

  // Fallback to a hash of user-agent + some headers
  const ua = request.headers.get('user-agent') || 'unknown'
  return `ua-${ua.slice(0, 50)}`
}
