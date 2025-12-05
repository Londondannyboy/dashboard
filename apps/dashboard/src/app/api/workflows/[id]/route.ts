import { NextRequest, NextResponse } from 'next/server'
import { Client, Connection } from '@temporalio/client'

interface ActivityInfo {
  eventId: number
  name: string
  status: 'SCHEDULED' | 'STARTED' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT'
  scheduledTime?: string
  startedTime?: string
  runningMinutes?: number
  failure?: string
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

// Event type mapping
const EVENT_TYPES = {
  ACTIVITY_TASK_SCHEDULED: 10,
  ACTIVITY_TASK_STARTED: 11,
  ACTIVITY_TASK_COMPLETED: 12,
  ACTIVITY_TASK_TIMED_OUT: 13,
  ACTIVITY_TASK_FAILED: 16,
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const client = await getTemporalClient()
    const handle = client.workflow.getHandle(id)
    const desc = await handle.describe()

    // Get workflow history to analyze activities
    const scheduled = new Map<number, { name: string; time: Date }>()
    const started = new Map<number, Date>()
    const completed = new Set<number>()
    const failed = new Map<number, { time: Date; failure: string }>()
    const timedOut = new Set<number>()

    const history = await handle.fetchHistory()
    for (const event of history.events || []) {
      const eventType = event.eventType

      // eventId might be a Long type, convert to number
      const eventId = Number(event.eventId) || 0

      if (eventType === EVENT_TYPES.ACTIVITY_TASK_SCHEDULED) {
        const attrs = (event as any).activityTaskScheduledEventAttributes
        if (attrs) {
          scheduled.set(eventId, {
            name: attrs.activityType?.name || 'Unknown',
            time: event.eventTime ? new Date(event.eventTime as any) : new Date(),
          })
        }
      } else if (eventType === EVENT_TYPES.ACTIVITY_TASK_STARTED) {
        const attrs = (event as any).activityTaskStartedEventAttributes
        if (attrs?.scheduledEventId) {
          started.set(
            Number(attrs.scheduledEventId),
            event.eventTime ? new Date(event.eventTime as any) : new Date()
          )
        }
      } else if (eventType === EVENT_TYPES.ACTIVITY_TASK_COMPLETED) {
        const attrs = (event as any).activityTaskCompletedEventAttributes
        if (attrs?.scheduledEventId) {
          completed.add(Number(attrs.scheduledEventId))
        }
      } else if (eventType === EVENT_TYPES.ACTIVITY_TASK_FAILED) {
        const attrs = (event as any).activityTaskFailedEventAttributes
        if (attrs?.scheduledEventId) {
          failed.set(Number(attrs.scheduledEventId), {
            time: event.eventTime ? new Date(event.eventTime as any) : new Date(),
            failure: attrs.failure?.message || String(attrs.failure) || 'Unknown failure',
          })
        }
      } else if (eventType === EVENT_TYPES.ACTIVITY_TASK_TIMED_OUT) {
        const attrs = (event as any).activityTaskTimedOutEventAttributes
        if (attrs?.scheduledEventId) {
          timedOut.add(Number(attrs.scheduledEventId))
        }
      }
    }

    // Build activity list
    const activities: ActivityInfo[] = []
    const now = new Date()

    for (const [eventId, info] of scheduled) {
      let status: ActivityInfo['status'] = 'SCHEDULED'
      let startedTime: string | undefined
      let runningMinutes: number | undefined
      let failure: string | undefined

      if (completed.has(eventId)) {
        status = 'COMPLETED'
      } else if (failed.has(eventId)) {
        status = 'FAILED'
        failure = failed.get(eventId)?.failure
      } else if (timedOut.has(eventId)) {
        status = 'TIMED_OUT'
      } else if (started.has(eventId)) {
        status = 'STARTED'
        const startTime = started.get(eventId)!
        startedTime = startTime.toISOString()
        runningMinutes = Math.round((now.getTime() - startTime.getTime()) / 60000)
      }

      activities.push({
        eventId,
        name: info.name,
        status,
        scheduledTime: info.time.toISOString(),
        startedTime,
        runningMinutes,
        failure,
      })
    }

    // Find stuck activities (started but not completed, running > 2 min)
    const stuckActivities = activities.filter(
      (a) => a.status === 'STARTED' && (a.runningMinutes || 0) > 2
    )

    // Find pending activities (not started)
    const pendingActivities = activities.filter((a) => a.status === 'SCHEDULED')

    // Handle different Temporal SDK versions
    const workflowType = typeof desc.type === 'string'
      ? desc.type
      : (desc.type as any)?.name || 'Unknown'

    const statusCode = typeof desc.status === 'number'
      ? desc.status
      : (desc.status as any)?.code || 0

    return NextResponse.json({
      workflow: {
        id: desc.workflowId,
        type: workflowType,
        status: STATUS_MAP[statusCode] || 'UNKNOWN',
        startTime: desc.startTime.toISOString(),
        taskQueue: desc.taskQueue,
        runId: desc.runId,
      },
      summary: {
        total: activities.length,
        completed: completed.size,
        failed: failed.size,
        timedOut: timedOut.size,
        stuck: stuckActivities.length,
        pending: pendingActivities.length,
      },
      stuckActivities,
      pendingActivities: pendingActivities.slice(-10), // Last 10 pending
      recentActivities: activities.slice(-20), // Last 20 activities
      temporalUrl: `https://cloud.temporal.io/namespaces/${process.env.TEMPORAL_NAMESPACE}/workflows/${id}`,
    })
  } catch (error) {
    console.error('Temporal workflow detail error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch workflow details', details: String(error) },
      { status: 500 }
    )
  }
}
