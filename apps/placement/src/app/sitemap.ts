import { MetadataRoute } from 'next'
import { generateStaticSitemap, PLACEMENT_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://placement.quest',
    staticRoutes: PLACEMENT_STATIC_ROUTES,
  })
}
