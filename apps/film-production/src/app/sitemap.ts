import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://filmproduction.quest'
  const pages = [
    '',
    '/short-film-insurance',
    '/tv-production-insurance',
    '/video-production-insurance',
    '/documentary-insurance',
    '/music-video-insurance',
    '/commercial-production',
    '/equipment-insurance',
    '/cast-and-crew',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
