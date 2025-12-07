import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://graduation.quest'

  // Static pages
  const staticPages = [
    '',
    '/jobs',
    '/register',
    '/about',
    '/contact',
    '/cv-tips',
    '/interview-guide',
    '/salary-guide',
    '/hire-graduates',
    '/services',
    '/pricing',
    '/case-studies',
    '/privacy',
    '/terms',
  ]

  // Location pages
  const locationPages = [
    '/locations/london',
    '/locations/manchester',
    '/locations/birmingham',
    '/locations/leeds',
    '/locations/bristol',
    '/locations/edinburgh',
  ]

  // Sector pages
  const sectorPages = [
    '/sectors/engineering',
    '/sectors/it',
    '/sectors/stem',
    '/sectors/science',
    '/sectors/psychology',
  ]

  // Job category pages
  const categories = [
    'Finance & Banking',
    'Marketing & PR',
    'Technology & IT',
    'Sales & Business Dev',
    'HR & Recruitment',
    'Engineering',
    'Legal & Compliance',
    'Creative & Design',
  ]

  const categoryPages = categories.map(cat => ({
    url: `${baseUrl}/jobs?category=${encodeURIComponent(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  const staticSitemap = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }))

  const locationSitemap = locationPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const sectorSitemap = sectorPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticSitemap, ...locationSitemap, ...sectorSitemap, ...categoryPages]
}
