import type { MetadataRoute } from 'next'
import { generateStaticSitemap, generateDynamicSitemap, combineSitemaps, PLACEMENT_STATIC_ROUTES } from '@quest/ui'
import { sql } from '../lib/db'

const BASE_URL = 'https://placement.quest'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticSitemap = generateStaticSitemap({
    baseUrl: BASE_URL,
    staticRoutes: PLACEMENT_STATIC_ROUTES,
  })

  // Dynamic routes - articles
  let articleSitemap: MetadataRoute.Sitemap = []
  let companySitemap: MetadataRoute.Sitemap = []

  try {
    const articles = await sql`
      SELECT slug, updated_at FROM articles
      WHERE app = 'placement' AND status = 'published'
    ` as { slug: string; updated_at?: string }[]

    articleSitemap = generateDynamicSitemap(
      BASE_URL,
      '/news',
      articles.map(a => ({ slug: a.slug, updatedAt: a.updated_at })),
      { changeFrequency: 'weekly', priority: 0.7 }
    )

    // Dynamic routes - companies/directory
    const companies = await sql`
      SELECT slug, updated_at FROM companies
      WHERE status = 'published'
    ` as { slug: string; updated_at?: string }[]

    companySitemap = generateDynamicSitemap(
      BASE_URL,
      '/directory',
      companies.map(c => ({ slug: c.slug, updatedAt: c.updated_at })),
      { changeFrequency: 'weekly', priority: 0.7 }
    )
  } catch (error) {
    console.error('Error generating dynamic sitemap:', error)
  }

  return combineSitemaps(staticSitemap, articleSitemap, companySitemap)
}
