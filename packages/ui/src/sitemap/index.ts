// Shared sitemap utilities for @quest apps
import type { MetadataRoute } from 'next'

export interface SitemapEntry {
  url: string
  lastModified?: Date | string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export interface SitemapConfig {
  baseUrl: string
  staticRoutes: {
    path: string
    changeFrequency?: SitemapEntry['changeFrequency']
    priority?: number
  }[]
}

/**
 * Generate sitemap entries for static routes
 */
export function generateStaticSitemap(config: SitemapConfig): MetadataRoute.Sitemap {
  return config.staticRoutes.map(route => ({
    url: `${config.baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency || 'weekly',
    priority: route.priority || 0.8,
  }))
}

/**
 * Generate sitemap entries for dynamic routes (articles, companies, etc.)
 */
export function generateDynamicSitemap(
  baseUrl: string,
  basePath: string,
  slugs: { slug: string; updatedAt?: Date | string }[],
  options?: {
    changeFrequency?: SitemapEntry['changeFrequency']
    priority?: number
  }
): MetadataRoute.Sitemap {
  return slugs.map(item => ({
    url: `${baseUrl}${basePath}/${item.slug}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
    changeFrequency: options?.changeFrequency || 'weekly',
    priority: options?.priority || 0.6,
  }))
}

/**
 * Combine multiple sitemap arrays
 */
export function combineSitemaps(...sitemaps: MetadataRoute.Sitemap[]): MetadataRoute.Sitemap {
  return sitemaps.flat()
}

// Common static routes shared across apps
export const COMMON_STATIC_ROUTES = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
]

// PVC specific static routes
export const PVC_STATIC_ROUTES = [
  ...COMMON_STATIC_ROUTES,
  { path: '/private-equity-placement-agent-news', changeFrequency: 'daily' as const, priority: 0.9 },
  { path: '/private-equity-placement-agents-list', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/ecosystem', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/momentum', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/top-private-equity-placement-agents', changeFrequency: 'weekly' as const, priority: 0.8 },
]

// Placement specific static routes
export const PLACEMENT_STATIC_ROUTES = [
  ...COMMON_STATIC_ROUTES,
  { path: '/news', changeFrequency: 'daily' as const, priority: 0.9 },
  { path: '/directory', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/ecosystem', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/momentum', changeFrequency: 'daily' as const, priority: 0.8 },
]

// Rainmakrr specific static routes
export const RAINMAKRR_STATIC_ROUTES = [
  ...COMMON_STATIC_ROUTES,
  { path: '/private-equity-placement-agent-news', changeFrequency: 'daily' as const, priority: 0.9 },
  { path: '/private-equity-placement-agents-list', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/ecosystem', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/momentum', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/top-private-equity-placement-agents', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/visualizations', changeFrequency: 'weekly' as const, priority: 0.6 },
]

// Stamp Duty specific static routes
export const STAMP_DUTY_STATIC_ROUTES = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/scotland', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/wales', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/buy-to-let', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/second-home', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/commercial', changeFrequency: 'weekly' as const, priority: 0.9 },
]

// GTM Quest specific static routes
export const GTM_STATIC_ROUTES = [
  ...COMMON_STATIC_ROUTES,
  { path: '/news', changeFrequency: 'daily' as const, priority: 0.9 },
  { path: '/directory', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/ecosystem', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/momentum', changeFrequency: 'daily' as const, priority: 0.8 },
]

// Tractor Insurance specific static routes
export const TRACTOR_INSURANCE_STATIC_ROUTES = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/articles', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/vintage-tractor-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/tractor-insurance-cost', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/kubota-tractor-insurance', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/john-deere-tractor-insurance', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/massey-ferguson-tractor-insurance', changeFrequency: 'weekly' as const, priority: 0.8 },
]

/**
 * Generate robots.txt configuration
 */
export function generateRobots(baseUrl: string): {
  rules: { userAgent: string; allow: string }
  sitemap: string
} {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
