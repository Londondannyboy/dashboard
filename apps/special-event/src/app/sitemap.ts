import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://specialevent.quest'
  const pages = [
    '',
    '/one-off-event-insurance',
    '/art-exhibition-insurance',
    '/trade-show-insurance',
    '/outdoor-event-insurance',
    '/pop-up-event-insurance',
    '/multi-event-insurance',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
