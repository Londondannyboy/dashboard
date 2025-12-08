import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://esportsevent.quest'
  const pages = [
    '',
    '/gaming-tournament-insurance',
    '/lan-party-insurance',
    '/esports-venue-insurance',
    '/streaming-event-insurance',
    '/gaming-convention-insurance',
    '/prize-pool-insurance',
    '/equipment-insurance',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
