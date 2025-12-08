import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/agencies', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/articles', changeFrequency: 'daily' as const, priority: 0.8 },
  { path: '/cfo', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/cmo', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/coo', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/cto', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/guide', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/hr', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/jobs', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/london', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/remote', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://fractional.quest',
    staticRoutes,
  })
}
