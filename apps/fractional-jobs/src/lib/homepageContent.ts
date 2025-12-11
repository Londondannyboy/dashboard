import { neon } from '@neondatabase/serverless'

export interface HomepageSection {
  id: string
  site: string
  section_type: string
  section_order: number
  title: string | null
  subtitle: string | null
  content: Record<string, unknown>
  metadata: Record<string, unknown> | null
  is_active: boolean
}

function getDb() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return neon(databaseUrl)
}

export async function getHomepageSections(): Promise<HomepageSection[]> {
  const sql = getDb()
  const rows = await sql`
    SELECT id, site, section_type, section_order, title, subtitle, content, metadata, is_active
    FROM homepage_content
    WHERE site = 'fractional-jobs'
    AND is_active = true
    ORDER BY section_order ASC
  `
  return rows as HomepageSection[]
}

export async function getHomepageSectionByType(sectionType: string): Promise<HomepageSection | null> {
  const sql = getDb()
  const rows = await sql`
    SELECT id, site, section_type, section_order, title, subtitle, content, metadata, is_active
    FROM homepage_content
    WHERE site = 'fractional-jobs'
    AND section_type = ${sectionType}
    AND is_active = true
    LIMIT 1
  `
  return rows[0] as HomepageSection | undefined ?? null
}
