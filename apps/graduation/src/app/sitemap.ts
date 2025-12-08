import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/locations/birmingham', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/locations/bristol', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/locations/edinburgh', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/locations/leeds', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/locations/london', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/locations/manchester', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/sectors/engineering', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/sectors/it', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/sectors/psychology', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/sectors/science', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/sectors/stem', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://graduated.quest',
    staticRoutes,
  })
}
