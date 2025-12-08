import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/annual-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/average-salary-uk', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/daily-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/hourly-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/monthly-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/nhs-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/pay-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/pro-rata-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/salary-converter', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/scotland-salary-calculator', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/wage-calculator', changeFrequency: 'weekly' as const, priority: 0.8 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://salarycalculator.quest',
    staticRoutes,
  })
}
