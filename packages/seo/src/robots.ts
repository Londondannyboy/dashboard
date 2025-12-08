import type { MetadataRoute } from 'next'

export interface RobotsConfig {
  siteUrl: string
  disallow?: string[]
}

export function createRobots(config: RobotsConfig): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: config.disallow || ['/api/', '/private/'],
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  }
}
