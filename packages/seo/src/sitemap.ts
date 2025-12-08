import type { MetadataRoute } from 'next'

export interface SitemapPage {
  path: string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastModified?: Date | string
}

export interface SitemapConfig {
  siteUrl: string
  pages: SitemapPage[]
}

export function createSitemap(config: SitemapConfig): MetadataRoute.Sitemap {
  return config.pages.map((page) => ({
    url: `${config.siteUrl}${page.path}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency || 'monthly',
    priority: page.priority ?? (page.path === '' || page.path === '/' ? 1 : 0.8),
  }))
}

// Common pages for calculators/tools
export const calculatorPages: SitemapPage[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
]

// Common pages for information sites
export const infoSitePages: SitemapPage[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
]
