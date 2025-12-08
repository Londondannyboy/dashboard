import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://craftfair.quest'
  const pages = [
    '',
    '/market-stall-insurance',
    '/one-day-stall-insurance',
    '/farmers-market-insurance',
    '/car-boot-insurance',
    '/christmas-market-insurance',
    '/craft-seller-insurance',
    '/food-stall-insurance',
    '/articles',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
