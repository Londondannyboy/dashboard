import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui'

const staticRoutes = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/class-2-mobility-scooter-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/class-3-mobility-scooter-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/electric-wheelchair-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/mobility-scooter-theft-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://mobilityscooterinsurance.quest',
    staticRoutes,
  })
}
