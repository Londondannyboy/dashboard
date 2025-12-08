import { MetadataRoute } from 'next'
import { generateStaticSitemap, PVC_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://pvc.quest',
    staticRoutes: PVC_STATIC_ROUTES,
  })
}
