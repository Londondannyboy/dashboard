import { NextResponse } from 'next/server'
import { Client, Connection } from '@temporalio/client'

interface WorkflowInfo {
  id: string
  type: string
  status: string
  startTime: string
  closeTime?: string
  runId: string
}

interface ActivityInfo {
  eventId: number
  name: string
  status: 'SCHEDULED' | 'STARTED' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT'
  scheduledTime?: string
  startedTime?: string
  runningMinutes?: number
}

// Status mapping from Temporal enum
const STATUS_MAP: Record<number, string> = {
  0: 'UNKNOWN',
  1: 'RUNNING',
  2: 'COMPLETED',
  3: 'FAILED',
  4: 'CANCELED',
  5: 'TERMINATED',
  6: 'CONTINUED_AS_NEW',
  7: 'TIMED_OUT',
}

let cachedClient: Client | null = null

async function getTemporalClient(): Promise<Client> {
  if (cachedClient) return cachedClient

  const address = process.env.TEMPORAL_ADDRESS
  const namespace = process.env.TEMPORAL_NAMESPACE
  const apiKey = process.env.TEMPORAL_API_KEY

  if (!address || !namespace || !apiKey) {
    throw new Error('Missing Temporal configuration')
  }

  const connection = await Connection.connect({
    address,
    tls: true,
    apiKey,
  })

  cachedClient = new Client({
    connection,
    namespace,
  })

  return cachedClient
}

export async function GET() {
  try {
    const client = await getTemporalClient()

    // Fetch running workflows
    const runningWorkflows: WorkflowInfo[] = []
    const recentWorkflows: WorkflowInfo[] = []

    // Query running workflows
    for await (const workflow of client.workflow.list({
      query: 'ExecutionStatus="Running"',
    })) {
      const w = workflow as any
      runningWorkflows.push({
        id: w.workflowId,
        type: w.workflowType || w.type?.name || 'Unknown',
        status: STATUS_MAP[w.status] || 'UNKNOWN',
        startTime: w.startTime?.toISOString?.() || '',
        runId: w.runId,
      })
    }

    // Query recent completed/failed workflows (last 24h)
    for await (const workflow of client.workflow.list({
      query: 'ExecutionStatus!="Running"',
    })) {
      // Limit to 20 recent workflows
      if (recentWorkflows.length >= 20) break

      const w = workflow as any
      recentWorkflows.push({
        id: w.workflowId,
        type: w.workflowType || w.type?.name || 'Unknown',
        status: STATUS_MAP[w.status] || 'UNKNOWN',
        startTime: w.startTime?.toISOString?.() || '',
        closeTime: w.closeTime?.toISOString?.(),
        runId: w.runId,
      })
    }

    return NextResponse.json({
      running: runningWorkflows,
      recent: recentWorkflows,
      namespace: process.env.TEMPORAL_NAMESPACE,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Temporal API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch workflows', details: String(error) },
      { status: 500 }
    )
  }
}
