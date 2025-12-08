import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/15-hours-free-childcare-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/30-hours-free-childcare-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/cost-of-raising-a-child', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/nursery-cost-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/tax-free-childcare-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/universal-credit-childcare-calculator', changeFrequency: 'weekly' as const, priority: 0.8 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://childcarecalculator.quest',
    staticRoutes,
  })
}
