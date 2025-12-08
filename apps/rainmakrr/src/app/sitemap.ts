import { MetadataRoute } from 'next'
import { generateStaticSitemap, RAINMAKRR_STATIC_ROUTES } from '@quest/ui/sitemap'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateStaticSitemap({
    baseUrl: 'https://rainmakrr.com',
    staticRoutes: RAINMAKRR_STATIC_ROUTES,
  })
}
