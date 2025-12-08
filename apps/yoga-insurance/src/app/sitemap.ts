import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui'

const staticRoutes = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/yoga-teacher-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/yoga-studio-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/hot-yoga-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/yoga-retreat-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://yogainsurance.quest',
    staticRoutes,
  })
}
