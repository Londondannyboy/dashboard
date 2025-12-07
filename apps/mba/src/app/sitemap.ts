import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mba.quest'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Location-specific pages
    {
      url: `${baseUrl}/uk`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/london`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Feature-specific pages
    {
      url: `${baseUrl}/affordable`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/1-year`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accredited`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Program pages (would be dynamically generated in production)
  const programSlugs = [
    'imperial-global-online-mba',
    'university-of-london-global-mba',
    'durham-online-mba',
    'warwick-distance-learning-mba',
    'ie-business-school-global-online-mba',
    'insead-executive-mba',
    'london-business-school-emba',
    'manchester-global-mba',
    'open-university-mba',
    'edinburgh-business-school-mba',
    'hult-global-one-year-mba',
    'strathclyde-online-mba',
  ]

  const programPages = programSlugs.map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Article pages
  const articleSlugs = [
    'online-mba-vs-campus-mba',
    'mba-accreditations-guide',
    'best-online-mba-uk-2025',
    'mba-salary-guide',
    'gmat-guide',
    'mba-application-tips',
    'executive-mba-guide',
    'mba-financing-options',
    'mba-career-change',
  ]

  const articlePages = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...programPages, ...articlePages]
}
