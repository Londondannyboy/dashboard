import { MetadataRoute } from 'next'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://predeploy.quest'

  // Return static pages only if DATABASE_URL is not available (during build)
  if (!process.env.DATABASE_URL) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/agencies`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/articles`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
    ]
  }

  const sql = neon(process.env.DATABASE_URL)

  // Fetch all published articles
  const articles = await sql`
    SELECT slug, updated_at, created_at
    FROM articles
    WHERE app = 'predeploy' AND status = 'published'
    ORDER BY published_at DESC NULLS LAST
  `

  // Fetch all published companies
  const companies = await sql`
    SELECT slug, updated_at, created_at
    FROM companies
    WHERE app = 'predeploy' AND status = 'published'
    ORDER BY name ASC
  `

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/agencies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((article: any) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: new Date(article.updated_at || article.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const companyPages: MetadataRoute.Sitemap = companies.map((company: any) => ({
    url: `${baseUrl}/agencies/${company.slug}`,
    lastModified: new Date(company.updated_at || company.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...companyPages, ...articlePages]
}
