#!/usr/bin/env tsx
/**
 * Trigger Article Generation Workflow
 *
 * Simple script to trigger the article generation workflow on Temporal.
 * Can be run manually or via cron.
 */

import { Connection, Client } from '@temporalio/client'

const TEMPORAL_ADDRESS = process.env.TEMPORAL_ADDRESS || 'europe-west3.gcp.api.temporal.io:7233'
const TEMPORAL_NAMESPACE = process.env.TEMPORAL_NAMESPACE || 'quickstart-quest.zivkb'
const TEMPORAL_API_KEY = process.env.TEMPORAL_API_KEY!

async function main() {
  console.log('🚀 Triggering Article Generation Workflow')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`Address: ${TEMPORAL_ADDRESS}`)
  console.log(`Namespace: ${TEMPORAL_NAMESPACE}`)
  console.log()

  try {
    // Connect to Temporal
    const connection = await Connection.connect({
      address: TEMPORAL_ADDRESS,
      apiKey: TEMPORAL_API_KEY,
      tls: true
    })

    const client = new Client({
      connection,
      namespace: TEMPORAL_NAMESPACE
    })

    // Generate workflow ID
    const workflowId = `generate-articles-${Date.now()}`

    console.log(`📝 Starting workflow: ${workflowId}`)

    // Start workflow
    const handle = await client.workflow.start('generateArticlesWorkflow', {
      taskQueue: 'fractional-jobs',
      workflowId,
      args: [{
        limit: 5, // Generate 5 articles per run
        skipCompanyResearch: false // Do company research
      }]
    })

    console.log(`✅ Workflow started!`)
    console.log(`   Workflow ID: ${workflowId}`)
    console.log(`   Run ID: ${handle.firstExecutionRunId}`)
    console.log()
    console.log(`🔗 View in Temporal UI:`)
    console.log(`   https://cloud.temporal.io/namespaces/${TEMPORAL_NAMESPACE}/workflows/${workflowId}`)
    console.log()
    console.log(`⏳ Waiting for result...`)

    // Wait for result (optional - can skip for async)
    const result = await handle.result()

    console.log()
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('✅ Workflow Complete!')
    console.log(`   Processed: ${result.processed}`)
    console.log(`   Generated: ${result.generated}`)
    console.log(`   Skipped: ${result.skipped}`)

    if (result.errors.length > 0) {
      console.log(`   Errors: ${result.errors.length}`)
      result.errors.forEach((err, i) => {
        console.log(`     ${i + 1}. ${err}`)
      })
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()
