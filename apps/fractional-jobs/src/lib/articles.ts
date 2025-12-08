import { neon } from '@neondatabase/serverless'

export interface Article {
  id: number
  slug: string
  title: string
  content: string
  meta_description: string
  status: string
  app: string
  hero_asset_url: string | null
  hero_asset_alt: string | null
  hero_asset_title: string | null
  featured_asset_url: string | null
  featured_asset_alt: string | null
  content_image_1_url: string | null
  content_image_1_alt: string | null
  content_image_2_url: string | null
  content_image_2_alt: string | null
  content_image_3_url: string | null
  content_image_3_alt: string | null
  target_keyword: string | null
  keyword_volume: number | null
  keyword_difficulty: number | null
  secondary_keywords: string[] | null
  country_code: string | null
  excerpt: string | null
  payload: Record<string, unknown> | null
  created_at: Date
  updated_at: Date
}

function getDb() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return neon(databaseUrl)
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM articles
    WHERE slug = ${slug}
    AND app = 'fractional'
    AND status = 'published'
    LIMIT 1
  `
  return rows[0] as Article | undefined ?? null
}

export async function getAllArticles(): Promise<Article[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM articles
    WHERE app = 'fractional'
    AND status = 'published'
    ORDER BY created_at DESC
  `
  return rows as Article[]
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM articles
    WHERE app = 'fractional'
    AND status = 'published'
    AND payload->>'category' = ${category}
    ORDER BY created_at DESC
  `
  return rows as Article[]
}

export async function getRelatedArticles(currentSlug: string, limit: number = 3): Promise<Article[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT * FROM articles
    WHERE app = 'fractional'
    AND status = 'published'
    AND slug != ${currentSlug}
    ORDER BY created_at DESC
    LIMIT ${limit}
  `
  return rows as Article[]
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT slug FROM articles
    WHERE app = 'fractional'
    AND status = 'published'
  `
  return (rows as Array<{ slug: string }>).map((row) => row.slug)
}
