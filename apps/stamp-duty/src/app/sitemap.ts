import { MetadataRoute } from 'next'
import { generateStaticSitemap, STAMP_DUTY_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://stampdutycalculator.quest',
    staticRoutes: STAMP_DUTY_STATIC_ROUTES,
  })
}
