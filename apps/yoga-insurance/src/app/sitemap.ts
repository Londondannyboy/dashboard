import { MetadataRoute } from 'next'
import { generateStaticSitemap } from '@quest/ui/sitemap'

const staticRoutes = [
  { path: '', changeFrequency: 'daily' as const, priority: 1 }
]

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://yogainsurance.quest',
    staticRoutes,
  })
}
