#!/usr/bin/env tsx

/**
 * Fractional Job News Article Generator
 *
 * Runs every hour to:
 * 1. Scrape a job from SerpaAPI
 * 2. Generate news article with Gemini
 * 3. Fetch hero image from Unsplash
 * 4. Save to Neon database
 *
 * Cost per run: ~$0.05
 */

import { GoogleGenerativeAI } from '@google/generative-ai'
import { neon } from '@neondatabase/serverless'
import fetch from 'node-fetch'

// Environment variables
const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY!
const SERPA_API_KEY = process.env.SERPA_API_KEY!
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY!
const DATABASE_URL = process.env.DATABASE_URL!

const genai = new GoogleGenerativeAI(GOOGLE_AI_API_KEY)
const sql = neon(DATABASE_URL)

interface ScrapedJob {
  title: string
  company: string
  location: string
  salary?: string
  description: string
  link: string
  source: 'indeed' | 'linkedin'
}

/**
 * Step 1: Scrape a job from SerpaAPI (WITH TIMEOUT)
 * SerpaAPI can take 30-120 seconds, so we use a long timeout
 */
async function scrapeJob(): Promise<ScrapedJob | null> {
  console.log('🔍 Scraping job from SerpaAPI...')
  console.log('⏱️ This may take up to 2 minutes...')

  // Rotate through search terms for variety
  const searchTerms = [
    'fractional CFO london',
    'fractional CTO remote',
    'fractional CMO UK',
    'interim CFO london',
    'part-time CTO startup',
    'fractional COO london',
    'interim CTO UK',
    'fractional CPO remote'
  ]

  const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)]
  console.log(`📝 Search term: "${randomTerm}"`)

  try {
    // Create AbortController for timeout
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 120000) // 2 minute timeout

    const response = await fetch('https://api.serpa.dev/api/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERPA_API_KEY}`
      },
      body: JSON.stringify({
        q: randomTerm,
        gl: 'gb',
        type: 'search',
        engine: 'google_jobs'
      }),
      signal: controller.signal
    })

    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`SerpaAPI returned ${response.status}`)
    }

    const data = await response.json()

    if (!data.jobs || data.jobs.length === 0) {
      console.log('❌ No jobs found')
      return null
    }

    // Get first job that has good description
    const job = data.jobs.find(j => j.description && j.description.length > 200) || data.jobs[0]

    console.log(`✅ Found: ${job.title} at ${job.company || job.company_name}`)

    return {
      title: job.title,
      company: job.company_name || job.company || 'Company',
      location: job.location || 'UK',
      salary: job.salary,
      description: job.description || job.snippet || '',
      link: job.link || job.job_link || '',
      source: job.via?.includes('Indeed') ? 'indeed' : 'linkedin'
    }
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('❌ SerpaAPI timeout after 2 minutes')
    } else {
      console.error('❌ SerpaAPI error:', error)
    }
    return null
  }
}

/**
 * Step 2: Generate article with Gemini
 */
async function generateArticle(job: ScrapedJob): Promise<{
  title: string
  content: string
  excerpt: string
  slug: string
}> {
  console.log('✍️ Generating article with Gemini...')

  const model = genai.getGenerativeModel({
    model: 'gemini-2.0-flash-exp' // Cheapest model
  })

  const prompt = `You are a business journalist covering the fractional executive job market.

Write a 600-word news article analyzing this job posting:

JOB DETAILS:
Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Salary: ${job.salary || 'Not specified'}
Description: ${job.description}

ARTICLE STRUCTURE:
1. Headline (SEO optimized, include company name and role)
2. Opening paragraph: What this hiring signals about the company
3. Company direction analysis (what can we infer from this hire?)
4. Role breakdown (key responsibilities and requirements)
5. Market context (what does this say about the fractional market?)
6. Similar opportunities (mention 2-3 related roles in the market)
7. Bottom line: Who should apply?

STYLE GUIDELINES:
- Analytical and data-driven tone
- Focus on WHY they're hiring NOW
- Include strategic insights about company direction
- Make it newsworthy - this is BUSINESS NEWS, not a job ad
- If company description is sparse, write about the ROLE TYPE in their industry
- Add value: what does this opportunity reveal about market trends?

Example opening: "${job.company} Seeks ${job.title.split(' ')[1]} as [Strategic Initiative] Accelerates"

Write the article in markdown format.`

  const result = await model.generateContent(prompt)
  const content = result.response.text()

  // Extract title from first # heading
  const titleMatch = content.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1] : `${job.company} Seeks ${job.title}`

  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 100)

  // Extract first paragraph as excerpt
  const excerptMatch = content.match(/\n\n(.+?)\n\n/)
  const excerpt = excerptMatch ? excerptMatch[1] : title

  console.log(`✅ Generated: ${title}`)

  return {
    title,
    content,
    excerpt,
    slug
  }
}

/**
 * Step 3: Get hero image from Unsplash
 */
async function getHeroImage(keywords: string[]): Promise<string> {
  console.log('🖼️ Fetching hero image from Unsplash...')

  const query = keywords.join(',')

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`,
      {
        headers: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    )

    const data = await response.json()

    console.log(`✅ Image: ${data.urls.regular}`)

    return data.urls.regular
  } catch (error) {
    console.error('❌ Unsplash error:', error)
    // Fallback to generic business image
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
  }
}

/**
 * Step 4: Save article to Neon
 */
async function saveArticle(
  article: { title: string; content: string; excerpt: string; slug: string },
  job: ScrapedJob,
  heroImageUrl: string
) {
  console.log('💾 Saving to Neon database...')

  // Check if article already exists
  const existing = await sql`
    SELECT id FROM articles WHERE slug = ${article.slug}
  `

  if (existing.length > 0) {
    console.log('⚠️ Article already exists, skipping')
    return false
  }

  // Extract role type from title
  const roleMatch = article.title.match(/\b(CFO|CTO|CMO|COO|CPO|CRO|CEO)\b/i)
  const role = roleMatch ? roleMatch[1].toLowerCase() : 'executive'

  await sql`
    INSERT INTO articles (
      id,
      title,
      slug,
      excerpt,
      content,
      role,
      location,
      featured_asset_url,
      hero_asset_url,
      published_at,
      app,
      status,
      payload
    ) VALUES (
      ${`article-${Date.now()}`,
      ${article.title},
      ${article.slug},
      ${article.excerpt},
      ${article.content},
      ${role},
      ${job.location},
      ${heroImageUrl},
      ${heroImageUrl},
      ${new Date().toISOString()},
      'fractional-jobs',
      'published',
      ${JSON.stringify({
        company: job.company,
        originalLink: job.link,
        source: job.source,
        salary: job.salary
      })}
    )
  `

  console.log('✅ Article saved to database')
  return true
}

/**
 * Step 5: Revalidate site
 */
async function revalidateSite(slug: string) {
  console.log('🔄 Revalidating site...')

  try {
    await fetch('https://fractional.quest/api/revalidate-sitemap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: `/${slug}` })
    })

    console.log('✅ Site revalidated')
  } catch (error) {
    console.log('⚠️ Revalidation skipped (not critical)')
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🚀 Fractional Job News Generator')
  console.log(`📅 ${new Date().toLocaleString()}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  try {
    // Step 1: Scrape job
    const job = await scrapeJob()
    if (!job) {
      console.log('❌ No job scraped, exiting')
      return
    }

    // Step 2: Generate article
    const article = await generateArticle(job)

    // Step 3: Get hero image
    const keywords = [
      job.title.split(' ')[0], // role type
      'business',
      job.location.split(',')[0] // city
    ]
    const heroImage = await getHeroImage(keywords)

    // Step 4: Save to database
    const saved = await saveArticle(article, job, heroImage)

    if (saved) {
      // Step 5: Revalidate site
      await revalidateSite(article.slug)

      console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('✅ SUCCESS!')
      console.log(`📰 Article: ${article.title}`)
      console.log(`🔗 URL: https://fractional.quest/${article.slug}`)
      console.log(`💰 Cost: ~$0.05`)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    }

  } catch (error) {
    console.error('\n❌ ERROR:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

export { main as generateArticle }
