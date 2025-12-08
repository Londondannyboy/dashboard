import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://villagefete.quest'
  const pages = [
    '',
    '/community-event-insurance',
    '/church-event-insurance',
    '/parish-council-insurance',
    '/charity-fundraiser-insurance',
    '/village-hall-insurance',
    '/fete-stall-insurance',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
