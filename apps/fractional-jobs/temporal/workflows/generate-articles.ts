/**
 * Temporal Workflow: Generate Articles from Jobs
 *
 * Simple workflow that:
 * 1. Gets jobs from Neon that don't have articles yet
 * 2. For each job:
 *    - Check ZEP for company info
 *    - If missing, research company and save to ZEP
 *    - Generate article with Gemini
 *    - Save to Neon
 *
 * No images, no video, just text content
 */

import { proxyActivities } from '@temporalio/workflow'
import type * as activities from '../activities'

const {
  getJobsWithoutArticles,
  checkCompanyInZEP,
  researchCompany,
  generateArticleFromJob,
  saveArticleToNeon
} = proxyActivities<typeof activities>({
  startToCloseTimeout: '10 minutes' // Generous timeout for AI operations
})

export interface GenerateArticlesInput {
  limit?: number // Max articles to generate per run
  skipCompanyResearch?: boolean // Skip research step (use ZEP data only)
}

export async function generateArticlesWorkflow(
  input: GenerateArticlesInput = {}
): Promise<{
  processed: number
  generated: number
  skipped: number
  errors: string[]
}> {
  const { limit = 10, skipCompanyResearch = false } = input

  console.log(`🚀 Starting article generation workflow`)
  console.log(`   Limit: ${limit} articles`)
  console.log(`   Skip company research: ${skipCompanyResearch}`)

  // Step 1: Get jobs without articles
  const jobs = await getJobsWithoutArticles(limit)
  console.log(`📊 Found ${jobs.length} jobs without articles`)

  const results = {
    processed: 0,
    generated: 0,
    skipped: 0,
    errors: [] as string[]
  }

  // Step 2: Process each job
  for (const job of jobs) {
    results.processed++

    try {
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`📝 Processing job ${results.processed}/${jobs.length}`)
      console.log(`   Title: ${job.title}`)
      console.log(`   Company: ${job.company}`)

      // Step 3: Check if we have company info in ZEP
      const hasCompanyInfo = await checkCompanyInZEP(job.company)

      if (!hasCompanyInfo && !skipCompanyResearch) {
        console.log(`   🔍 No company info in ZEP - researching...`)

        try {
          await researchCompany(job.company)
          console.log(`   ✅ Company research complete`)
        } catch (error) {
          console.log(`   ⚠️ Company research failed, continuing anyway`)
          // Don't fail the whole workflow, just note it
        }
      } else if (hasCompanyInfo) {
        console.log(`   ✅ Company info found in ZEP`)
      } else {
        console.log(`   ⏭️ Skipping company research (disabled)`)
      }

      // Step 4: Generate article
      console.log(`   ✍️ Generating article...`)
      const article = await generateArticleFromJob(job.id)

      // Step 5: Save to Neon
      console.log(`   💾 Saving to database...`)
      await saveArticleToNeon(article)

      console.log(`   ✅ Article published: ${article.title}`)
      results.generated++

    } catch (error) {
      console.error(`   ❌ Error processing job:`, error)
      results.errors.push(`${job.title}: ${error.message}`)
      results.skipped++
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`✅ Workflow complete!`)
  console.log(`   Processed: ${results.processed}`)
  console.log(`   Generated: ${results.generated}`)
  console.log(`   Skipped: ${results.skipped}`)
  if (results.errors.length > 0) {
    console.log(`   Errors:`)
    results.errors.forEach(err => console.log(`     - ${err}`))
  }

  return results
}
