import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/gas-bill-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/gas-cost-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://gasratecalculator.quest',
    staticRoutes,
  })
}
