#!/usr/bin/env tsx

/**
 * Article Generator Control Panel
 *
 * Debug, test, and control the article generation system
 */

import { Command } from 'commander'
import { generateArticle } from './generate-article'
import { neon } from '@neondatabase/serverless'
import chalk from 'chalk'

const sql = neon(process.env.DATABASE_URL!)
const program = new Command()

program
  .name('control')
  .description('Control the Fractional Job News article generator')
  .version('1.0.0')

/**
 * Test Mode: Run once without saving
 */
program
  .command('test')
  .description('Test article generation (dry run - does NOT save to database)')
  .action(async () => {
    console.log(chalk.yellow('🧪 TEST MODE - No database writes'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    // Temporarily disable database saves
    process.env.DRY_RUN = 'true'

    try {
      await generateArticle()
      console.log(chalk.green('\n✅ Test successful!'))
      console.log(chalk.gray('(Nothing was saved to database)'))
    } catch (error) {
      console.error(chalk.red('\n❌ Test failed:'), error)
    }
  })

/**
 * Generate Once: Run and save one article
 */
program
  .command('once')
  .description('Generate and publish ONE article')
  .action(async () => {
    console.log(chalk.blue('🚀 Generating ONE article...'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    try {
      await generateArticle()
      console.log(chalk.green('\n✅ Article published!'))
    } catch (error) {
      console.error(chalk.red('\n❌ Failed:'), error)
    }
  })

/**
 * Status: Check recent articles
 */
program
  .command('status')
  .description('Show recent articles and statistics')
  .option('-n, --number <count>', 'Number of recent articles to show', '10')
  .action(async (options) => {
    console.log(chalk.blue('📊 Recent Articles'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    try {
      const articles = await sql`
        SELECT
          title,
          slug,
          role,
          published_at,
          payload->>'company' as company
        FROM articles
        WHERE app = 'fractional-jobs'
        ORDER BY published_at DESC
        LIMIT ${parseInt(options.number)}
      `

      if (articles.length === 0) {
        console.log(chalk.yellow('No articles found'))
        return
      }

      articles.forEach((article, i) => {
        const date = new Date(article.published_at).toLocaleString()
        console.log(chalk.green(`${i + 1}. ${article.title}`))
        console.log(chalk.gray(`   Company: ${article.company}`))
        console.log(chalk.gray(`   Role: ${article.role}`))
        console.log(chalk.gray(`   Published: ${date}`))
        console.log(chalk.gray(`   URL: https://fractional.quest/${article.slug}`))
        console.log()
      })

      // Statistics
      const stats = await sql`
        SELECT
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '24 hours') as today,
          COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '7 days') as this_week
        FROM articles
        WHERE app = 'fractional-jobs'
      `

      console.log(chalk.blue('📈 Statistics'))
      console.log(`   Total articles: ${stats[0].total}`)
      console.log(`   Published today: ${stats[0].today}`)
      console.log(`   Published this week: ${stats[0].this_week}`)

    } catch (error) {
      console.error(chalk.red('❌ Error:'), error)
    }
  })

/**
 * Delete: Remove an article by slug
 */
program
  .command('delete <slug>')
  .description('Delete an article by slug')
  .action(async (slug) => {
    console.log(chalk.yellow(`🗑️ Deleting article: ${slug}`))

    try {
      const result = await sql`
        DELETE FROM articles
        WHERE slug = ${slug}
        RETURNING title
      `

      if (result.length > 0) {
        console.log(chalk.green(`✅ Deleted: ${result[0].title}`))
      } else {
        console.log(chalk.yellow('❌ Article not found'))
      }
    } catch (error) {
      console.error(chalk.red('❌ Error:'), error)
    }
  })

/**
 * Pause: Create a pause file to stop scheduler
 */
program
  .command('pause')
  .description('Pause the scheduler (create .pause file)')
  .action(async () => {
    const fs = require('fs')
    const path = require('path')

    const pauseFile = path.join(__dirname, '.pause')
    fs.writeFileSync(pauseFile, new Date().toISOString())

    console.log(chalk.yellow('⏸️ Scheduler PAUSED'))
    console.log(chalk.gray('Run "npm run control resume" to restart'))
  })

/**
 * Resume: Remove pause file
 */
program
  .command('resume')
  .description('Resume the scheduler (remove .pause file)')
  .action(async () => {
    const fs = require('fs')
    const path = require('path')

    const pauseFile = path.join(__dirname, '.pause')

    if (fs.existsSync(pauseFile)) {
      fs.unlinkSync(pauseFile)
      console.log(chalk.green('▶️ Scheduler RESUMED'))
    } else {
      console.log(chalk.yellow('Scheduler was not paused'))
    }
  })

/**
 * Logs: Show generation logs
 */
program
  .command('logs')
  .description('Show generation logs')
  .option('-f, --follow', 'Follow log output')
  .action(async (options) => {
    const fs = require('fs')
    const path = require('path')

    const logFile = path.join(__dirname, 'generator.log')

    if (!fs.existsSync(logFile)) {
      console.log(chalk.yellow('No logs found'))
      return
    }

    if (options.follow) {
      console.log(chalk.blue('📜 Following logs (Ctrl+C to stop)...'))
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

      const { spawn } = require('child_process')
      const tail = spawn('tail', ['-f', logFile])

      tail.stdout.on('data', (data) => {
        process.stdout.write(data)
      })

      tail.on('close', () => {
        console.log(chalk.gray('\nLog following stopped'))
      })
    } else {
      const content = fs.readFileSync(logFile, 'utf-8')
      const lines = content.split('\n').slice(-50) // Last 50 lines
      console.log(lines.join('\n'))
    }
  })

/**
 * Cost: Calculate total cost
 */
program
  .command('cost')
  .description('Calculate total generation cost')
  .action(async () => {
    console.log(chalk.blue('💰 Cost Analysis'))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    try {
      const stats = await sql`
        SELECT
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '24 hours') as today,
          COUNT(*) FILTER (WHERE published_at > NOW() - INTERVAL '30 days') as this_month
        FROM articles
        WHERE app = 'fractional-jobs'
      `

      const costPerArticle = 0.05
      const totalCost = stats[0].total * costPerArticle
      const todayCost = stats[0].today * costPerArticle
      const monthCost = stats[0].this_month * costPerArticle

      console.log(`Total articles: ${stats[0].total}`)
      console.log(`Total cost: $${totalCost.toFixed(2)}`)
      console.log()
      console.log(`Today: ${stats[0].today} articles = $${todayCost.toFixed(2)}`)
      console.log(`This month: ${stats[0].this_month} articles = $${monthCost.toFixed(2)}`)
      console.log()
      console.log(chalk.gray(`(Estimated at $${costPerArticle} per article)`))

    } catch (error) {
      console.error(chalk.red('❌ Error:'), error)
    }
  })

program.parse()
