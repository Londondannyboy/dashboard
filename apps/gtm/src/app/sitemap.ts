import { MetadataRoute } from 'next'
import { generateStaticSitemap, GTM_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://gtm.quest',
    staticRoutes: GTM_STATIC_ROUTES,
  })
}
