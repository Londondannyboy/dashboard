import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/1-year', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/accredited', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/affordable', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/articles', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/compare', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/london', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/programs', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/uk', changeFrequency: 'weekly' as const, priority: 0.8 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://mba.quest',
    staticRoutes,
  })
}
