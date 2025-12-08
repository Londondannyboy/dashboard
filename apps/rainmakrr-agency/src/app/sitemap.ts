import { MetadataRoute } from 'next'
import { neon } from '@neondatabase/serverless'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rainmakrr.agency'
  const sql = neon(process.env.DATABASE_URL!)

  // Get all agencies
  const agencies = await sql`
    SELECT slug, updated_at
    FROM companies
    WHERE app = 'rainmakrr-agency' AND status = 'published'
  `

  // Get all articles
  const articles = await sql`
    SELECT slug, updated_at
    FROM articles
    WHERE app = 'rainmakrr-agency' AND status = 'published'
  `

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/agencies`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  const agencyPages = agencies.map((agency: any) => ({
    url: `${baseUrl}/agencies/${agency.slug}`,
    lastModified: agency.updated_at || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const articlePages = articles.map((article: any) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: article.updated_at || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...agencyPages, ...articlePages]
}
