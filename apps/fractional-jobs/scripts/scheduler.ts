#!/usr/bin/env tsx

/**
 * Article Generation Scheduler
 *
 * Runs the article generator every hour while your Mac is on.
 * Simple, debuggable, no external dependencies.
 */

import cron from 'node-cron'
import { generateArticle } from './generate-article'

console.log('🕐 Fractional Job News Scheduler Started')
console.log('📅', new Date().toLocaleString())
console.log('⏰ Will run every hour on the hour')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

// Run every hour on the hour
// Cron: '0 * * * *' = minute 0 of every hour
cron.schedule('0 * * * *', async () => {
  console.log(`\n⏰ Hourly trigger at ${new Date().toLocaleTimeString()}`)

  try {
    await generateArticle()
  } catch (error) {
    console.error('❌ Generation failed:', error)
  }
}, {
  timezone: 'Europe/London'
})

// Also run once immediately on startup
console.log('▶️ Running initial generation...\n')
generateArticle().catch(console.error)

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n\n👋 Scheduler stopped')
  process.exit(0)
})

console.log('✅ Scheduler is running. Press Ctrl+C to stop.\n')
