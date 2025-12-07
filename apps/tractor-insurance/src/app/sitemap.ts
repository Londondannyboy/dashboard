import type { MetadataRoute } from 'next'
import { generateStaticSitemap, TRACTOR_INSURANCE_STATIC_ROUTES } from '@quest/ui'

const BASE_URL = 'https://tractorinsurance.quest'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: BASE_URL,
    staticRoutes: TRACTOR_INSURANCE_STATIC_ROUTES,
  })
}
