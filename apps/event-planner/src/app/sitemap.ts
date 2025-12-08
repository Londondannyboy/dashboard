import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eventplanner.quest'
  const pages = [
    '',
    '/public-liability',
    '/event-management-insurance',
    '/charity-event-insurance',
    '/corporate-event-insurance',
    '/wedding-planner-insurance',
    '/festival-insurance',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
