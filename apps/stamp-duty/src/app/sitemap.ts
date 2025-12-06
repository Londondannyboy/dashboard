import type { MetadataRoute } from 'next'
import { generateStaticSitemap, STAMP_DUTY_STATIC_ROUTES } from '@quest/ui'

const BASE_URL = 'https://stampdutycalculator.quest'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: BASE_URL,
    staticRoutes: STAMP_DUTY_STATIC_ROUTES,
  })
}
