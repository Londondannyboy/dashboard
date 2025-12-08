import { MetadataRoute } from 'next'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://relocation.quest'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!process.env.DATABASE_URL) {
    // Return static pages only during build
    return [
      { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
      { url: `${BASE_URL}/chat`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
      { url: `${BASE_URL}/voice`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
      { url: `${BASE_URL}/calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/relocation-assistance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/jobs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
      { url: `${BASE_URL}/moving-abroad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ]
  }

  const sql = neon(process.env.DATABASE_URL)

  // Fetch all published articles
  const articles = await sql`
    SELECT slug, published_at, updated_at, guide_type
    FROM articles
    WHERE status = 'published'
    AND app = 'relocation'
    AND (guide_type IS NULL OR guide_type != 'country')
    ORDER BY published_at DESC
  ` as Array<{
    slug: string
    published_at: string | null
    updated_at: string | null
    guide_type: string | null
  }>

  // Fetch all country guides
  const guides = await sql`
    SELECT slug, published_at, updated_at
    FROM articles
    WHERE status = 'published'
    AND app = 'relocation'
    AND guide_type = 'country'
    ORDER BY keyword_difficulty ASC
  ` as Array<{
    slug: string
    published_at: string | null
    updated_at: string | null
  }>

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/chat`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/voice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculator`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/relocation-assistance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/moving-abroad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/digital-nomad-visa`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/move-to-europe`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ]

  // Dynamic article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: article.updated_at
      ? new Date(article.updated_at)
      : article.published_at
      ? new Date(article.published_at)
      : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Country guide pages (higher priority for SEO)
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: guide.updated_at
      ? new Date(guide.updated_at)
      : guide.published_at
      ? new Date(guide.published_at)
      : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...guidePages, ...articlePages]
}
