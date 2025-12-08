import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui'

const staticRoutes = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/commercial-drone-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/recreational-drone-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/fpv-drone-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/drone-liability-insurance', changeFrequency: 'weekly' as const, priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://droneinsurance.quest',
    staticRoutes,
  })
}
