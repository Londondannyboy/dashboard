import { MetadataRoute } from 'next'
import { generateStaticSitemap, TRACTOR_INSURANCE_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://tractorinsurance.quest',
    staticRoutes: TRACTOR_INSURANCE_STATIC_ROUTES,
  })
}
