import { neon } from '@neondatabase/serverless'

export interface Job {
  id: string
  slug: string
  title: string
  company_name: string
  location: string
  is_remote: boolean
  compensation: string
  full_description: string
  skills_required: string[]
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  seniority_level: string
  employment_type: string
  posted_date: string
  updated_date: string
  url: string
  is_active: boolean
}

function getDb() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set')
  }
  return neon(databaseUrl)
}

/**
 * Get jobs by role (CFO, CMO, CTO, COO, HR, Sales)
 */
export async function getJobsByRole(role: string, limit: number = 20): Promise<Job[]> {
  const sql = getDb()

  // Map role names for matching
  const roleMap: { [key: string]: string } = {
    'cfo': 'CFO',
    'cmo': 'CMO',
    'cto': 'CTO',
    'coo': 'COO',
    'hr': 'HR',
    'sales': 'Sales',
  }

  const dbRole = roleMap[role.toLowerCase()] || role.toUpperCase()

  const rows = await sql`
    SELECT id, slug, title, company_name, location, is_remote, compensation,
           full_description, skills_required, responsibilities, requirements,
           benefits, seniority_level, employment_type, posted_date, updated_date, url, is_active
    FROM jobs
    WHERE is_active = true
    AND is_fractional = true
    AND (role_category = ${dbRole} OR title ILIKE ${'%' + dbRole + '%'})
    ORDER BY posted_date DESC
    LIMIT ${limit}
  `
  return rows as Job[]
}

/**
 * Get jobs by location
 */
export async function getJobsByLocation(location: string, limit: number = 20): Promise<Job[]> {
  const sql = getDb()
  const locationPattern = `%${location}%`

  const rows = await sql`
    SELECT id, slug, title, company_name, location, is_remote, compensation,
           full_description, skills_required, responsibilities, requirements,
           benefits, seniority_level, employment_type, posted_date, updated_date, url, is_active
    FROM jobs
    WHERE is_active = true
    AND is_fractional = true
    AND (location ILIKE ${locationPattern} OR (is_remote = true AND ${location} ILIKE '%remote%'))
    ORDER BY posted_date DESC
    LIMIT ${limit}
  `
  return rows as Job[]
}

/**
 * Get remote jobs
 */
export async function getRemoteJobs(limit: number = 20): Promise<Job[]> {
  const sql = getDb()

  const rows = await sql`
    SELECT id, slug, title, company_name, location, is_remote, compensation,
           full_description, skills_required, responsibilities, requirements,
           benefits, seniority_level, employment_type, posted_date, updated_date, url, is_active
    FROM jobs
    WHERE is_active = true
    AND is_fractional = true
    AND is_remote = true
    ORDER BY posted_date DESC
    LIMIT ${limit}
  `
  return rows as Job[]
}

/**
 * Get all active fractional jobs
 */
export async function getAllJobs(limit: number = 50): Promise<Job[]> {
  const sql = getDb()

  const rows = await sql`
    SELECT id, slug, title, company_name, location, is_remote, compensation,
           full_description, skills_required, responsibilities, requirements,
           benefits, seniority_level, employment_type, posted_date, updated_date, url, is_active
    FROM jobs
    WHERE is_active = true
    AND is_fractional = true
    ORDER BY posted_date DESC
    LIMIT ${limit}
  `
  return rows as Job[]
}

/**
 * Get job by slug
 */
export async function getJobBySlug(slug: string): Promise<Job | null> {
  const sql = getDb()

  const rows = await sql`
    SELECT id, slug, title, company_name, location, is_remote, compensation,
           full_description, skills_required, responsibilities, requirements,
           benefits, seniority_level, employment_type, posted_date, updated_date, url, is_active
    FROM jobs
    WHERE slug = ${slug}
    AND is_active = true
    AND is_fractional = true
    LIMIT 1
  `
  return rows[0] as Job | undefined ?? null
}

/**
 * Get total count of active fractional jobs
 */
export async function getJobsCount(): Promise<number> {
  const sql = getDb()

  const rows = await sql`
    SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND is_fractional = true
  `
  return (rows[0] as { count: number }).count
}
