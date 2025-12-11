/**
 * Temporal Activities for Article Generation
 *
 * Simple, debuggable activities that use existing infrastructure
 */

import { neon } from '@neondatabase/serverless'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { searchKnowledgeGraph } from '../../src/lib/api-clients/zep'

const sql = neon(process.env.DATABASE_URL!)
const genai = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!)

export interface Job {
  id: string
  title: string
  company: string
  role_type: string
  description: string
  location?: string
  salary?: string
  remote_type?: string
}

export interface Article {
  title: string
  slug: string
  content: string
  excerpt: string
  role: string
  company: string
  location?: string
}

/**
 * Activity 1: Get jobs without articles
 */
export async function getJobsWithoutArticles(limit: number = 10): Promise<Job[]> {
  const jobs = await sql`
    SELECT j.*
    FROM jobs j
    LEFT JOIN articles a ON a.payload->>'jobId' = j.id AND a.app = 'fractional-jobs'
    WHERE a.id IS NULL
    AND j.status = 'open'
    ORDER BY j.created_at DESC
    LIMIT ${limit}
  ` as Job[]

  return jobs
}

/**
 * Activity 2: Check if company info exists in ZEP
 */
export async function checkCompanyInZEP(companyName: string): Promise<boolean> {
  try {
    const results = await searchKnowledgeGraph(
      `company ${companyName}`,
      {
        graphId: 'jobs',
        scope: 'edges',
        limit: 1
      }
    )

    // If we have any edges about this company, we have info
    return results.edges.length > 0
  } catch (error) {
    console.error('ZEP check error:', error)
    return false
  }
}

/**
 * Activity 3: Research company using Serper.dev + Gemini
 *
 * 1. Get real news from Serper.dev ($0.001)
 * 2. Summarize with Gemini ($0.0007)
 * 3. Save to ZEP for future use
 *
 * Total cost: ~$0.0017 per company
 */
export async function researchCompany(companyName: string): Promise<void> {
  console.log(`🔍 Researching ${companyName} with Serper.dev...`)

  try {
    const SERPER_API_KEY = process.env.SERPER_API_KEY!

    // Step 1: Get recent news from Serper.dev
    console.log(`   📰 Fetching news from Google...`)

    const newsResponse = await fetch('https://google.serper.dev/news', {
      method: 'POST',
      headers: {
        'X-API-KEY': SERPER_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: `${companyName} company news`,
        num: 5 // Get top 5 news results
      })
    })

    if (!newsResponse.ok) {
      throw new Error(`Serper.dev returned ${newsResponse.status}`)
    }

    const newsData = await newsResponse.json()
    const newsResults = newsData.news || []

    console.log(`   ✅ Found ${newsResults.length} news articles`)

    // Step 2: Format news for Gemini
    let newsContext = ''
    if (newsResults.length > 0) {
      newsContext = newsResults
        .map((item: any, i: number) =>
          `${i + 1}. ${item.title}\n   ${item.snippet || ''}\n   Source: ${item.source || ''}, ${item.date || ''}`
        )
        .join('\n\n')
    }

    // Step 3: Summarize with Gemini
    console.log(`   🤖 Summarizing with Gemini...`)

    const model = genai.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

    const prompt = newsResults.length > 0
      ? `Summarize this company based on recent news:

Company: ${companyName}

Recent News:
${newsContext}

Provide a 2-3 sentence summary covering:
- What the company does
- Recent developments or news
- Company trajectory (growing, stable, etc.)

Be concise and factual.`
      : `Provide a brief 2-sentence summary of ${companyName} based on what you know.`

    const result = await model.generateContent(prompt)
    const companyInfo = result.response.text()

    console.log(`   📝 Summary: ${companyInfo.substring(0, 150)}...`)

    // Step 4: Save to ZEP knowledge graph
    const ZEP_API_KEY = process.env.ZEP_API_KEY!
    const ZEP_BASE_URL = 'https://api.getzep.com/api/v2'

    const zepData = newsResults.length > 0
      ? `Company: ${companyName}. ${companyInfo}\n\nRecent News:\n${newsContext}`
      : `Company: ${companyName}. ${companyInfo}`

    await fetch(`${ZEP_BASE_URL}/graph/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Api-Key ${ZEP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        graph_id: 'jobs',
        data: zepData,
        type: 'company_info'
      })
    })

    console.log(`   ✅ Saved to ZEP (cost: ~$0.0017)`)

  } catch (error) {
    console.error('Company research error:', error)
    // Don't throw - article generation can work without company info
    console.log(`   ⚠️ Continuing without company info for ${companyName}`)
  }
}

/**
 * Activity 4: Generate article from job
 */
export async function generateArticleFromJob(jobId: string): Promise<Article> {
  console.log(`✍️ Generating article for job ${jobId}...`)

  // Get job from Neon
  const jobs = await sql`
    SELECT * FROM jobs WHERE id = ${jobId}
  ` as Job[]

  if (jobs.length === 0) {
    throw new Error(`Job ${jobId} not found`)
  }

  const job = jobs[0]

  // Get company info from ZEP
  let companyContext = ''
  try {
    const zepResults = await searchKnowledgeGraph(
      `company ${job.company}`,
      {
        graphId: 'jobs',
        scope: 'edges',
        limit: 5
      }
    )

    if (zepResults.formatted) {
      companyContext = `\n\nCOMPANY CONTEXT FROM KNOWLEDGE BASE:\n${zepResults.formatted}`
    }
  } catch (error) {
    console.log('⚠️ Could not fetch company context from ZEP, continuing...')
  }

  // Generate article with Gemini
  const model = genai.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

  const prompt = `You are a business journalist covering the fractional executive job market.

Write a 600-word news article analyzing this job posting:

JOB DETAILS:
Title: ${job.title}
Company: ${job.company}
Location: ${job.location || 'Not specified'}
Salary: ${job.salary || 'Not specified'}
Remote: ${job.remote_type || 'Not specified'}
Description: ${job.description}
${companyContext}

ARTICLE STRUCTURE:
1. Headline (SEO optimized, newsworthy)
   Format: "${job.company} Seeks ${job.role_type.toUpperCase()} as [Strategic Initiative] Accelerates"

2. Opening paragraph: What this hiring signals about the company

3. Company direction analysis:
   ${companyContext ? '- Use the company context above to inform your analysis' : '- Infer from the role what this says about company direction'}
   - Why are they hiring NOW?
   - What does this role tell us about their strategy?

4. Role breakdown:
   - Key responsibilities
   - Required skills and experience
   - What makes this role interesting

5. Market context:
   - What does this say about the fractional executive market?
   - Industry trends relevant to this hire

6. Bottom line: Who should apply?

STYLE:
- News article, not job ad
- Analytical and insightful
- Focus on WHY and WHAT IT MEANS
- If company info is limited, analyze the ROLE TYPE in their industry
- Make it valuable - add strategic insights

Write in markdown format with # for title, ## for sections.`

  const result = await model.generateContent(prompt)
  const content = result.response.text()

  // Extract title
  const titleMatch = content.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1] : `${job.company} Seeks ${job.title}`

  // Generate slug
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 100)

  // Extract excerpt (first paragraph after title)
  const excerptMatch = content.match(/\n\n(.+?)\n\n/)
  const excerpt = excerptMatch ? excerptMatch[1] : title

  console.log(`✅ Generated: "${title}"`)

  return {
    title,
    slug,
    content,
    excerpt,
    role: job.role_type,
    company: job.company,
    location: job.location
  }
}

/**
 * Activity 5: Save article to Neon
 */
export async function saveArticleToNeon(article: Article): Promise<void> {
  console.log(`💾 Saving article: ${article.title}`)

  // Check if article already exists
  const existing = await sql`
    SELECT id FROM articles WHERE slug = ${article.slug}
  `

  if (existing.length > 0) {
    console.log('⚠️ Article already exists, skipping')
    return
  }

  // Save article
  await sql`
    INSERT INTO articles (
      id,
      title,
      slug,
      excerpt,
      content,
      role,
      location,
      app,
      status,
      published_at,
      payload
    ) VALUES (
      ${`article-${Date.now()}`,
      ${article.title},
      ${article.slug},
      ${article.excerpt},
      ${article.content},
      ${article.role},
      ${article.location || ''},
      'fractional-jobs',
      'published',
      ${new Date().toISOString()},
      ${JSON.stringify({ company: article.company })}
    )
  `

  console.log(`✅ Article saved to database`)
}
