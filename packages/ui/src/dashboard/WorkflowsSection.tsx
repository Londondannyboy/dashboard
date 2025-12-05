'use client'

import { useState, useEffect } from 'react'

interface Workflow {
  id: string
  type: string
  status: string
  startTime: string
  closeTime?: string
  runId: string
}

interface Activity {
  eventId: number
  name: string
  status: 'SCHEDULED' | 'STARTED' | 'COMPLETED' | 'FAILED' | 'TIMED_OUT'
  scheduledTime?: string
  startedTime?: string
  runningMinutes?: number
  failure?: string
}

interface WorkflowDetail {
  workflow: {
    id: string
    type: string
    status: string
    startTime: string
    taskQueue: string
    runId: string
  }
  summary: {
    total: number
    completed: number
    failed: number
    timedOut: number
    stuck: number
    pending: number
  }
  stuckActivities: Activity[]
  pendingActivities: Activity[]
  temporalUrl: string
}

export interface WorkflowsSectionProps {
  className?: string
}

const STATUS_COLORS: Record<string, { bg: string; text: string; icon: string }> = {
  RUNNING: { bg: 'bg-blue-500/20', text: 'text-blue-400', icon: '🔄' },
  COMPLETED: { bg: 'bg-green-500/20', text: 'text-green-400', icon: '✅' },
  FAILED: { bg: 'bg-red-500/20', text: 'text-red-400', icon: '❌' },
  TIMED_OUT: { bg: 'bg-orange-500/20', text: 'text-orange-400', icon: '⏱️' },
  CANCELED: { bg: 'bg-gray-500/20', text: 'text-gray-400', icon: '🚫' },
  TERMINATED: { bg: 'bg-red-500/20', text: 'text-red-400', icon: '⛔' },
  UNKNOWN: { bg: 'bg-gray-500/20', text: 'text-gray-400', icon: '❓' },
}

const WORKFLOW_ICONS: Record<string, string> = {
  CountryGuideCreationWorkflow: '🌍',
  CompanyCreationWorkflow: '🏢',
  ArticleCreationWorkflow: '📰',
  NewsCreationWorkflow: '📢',
  SegmentVideoWorkflow: '🎬',
  TopicClusterWorkflow: '📚',
  ClusterArticleWorkflow: '📑',
  CrawlUrlWorkflow: '🔗',
  VideoEnrichmentWorkflow: '🎥',
}

function formatTimeSince(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMin = Math.floor(diffMs / 60000)

  if (diffMin < 1) return 'just now'
  if (diffMin < 60) return `${diffMin}m ago`
  const diffHours = Math.floor(diffMin / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d ago`
}

function WorkflowCard({
  workflow,
  onSelect,
  isSelected,
}: {
  workflow: Workflow
  onSelect: (id: string) => void
  isSelected: boolean
}) {
  const status = STATUS_COLORS[workflow.status] || STATUS_COLORS.UNKNOWN
  const icon = WORKFLOW_ICONS[workflow.type] || '⚙️'

  return (
    <button
      onClick={() => onSelect(workflow.id)}
      className={`w-full text-left p-3 rounded-lg border transition ${
        isSelected
          ? 'bg-purple-500/20 border-purple-500/50'
          : 'bg-white/5 border-white/10 hover:border-purple-500/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-0.5 rounded ${status.bg} ${status.text}`}>
              {status.icon} {workflow.status}
            </span>
          </div>
          <h4 className="font-medium text-white truncate mt-1 text-sm">
            {workflow.type.replace('Workflow', '')}
          </h4>
          <p className="text-xs text-gray-500 truncate">{workflow.id}</p>
          <p className="text-xs text-gray-400 mt-1">
            Started {formatTimeSince(workflow.startTime)}
          </p>
        </div>
      </div>
    </button>
  )
}

function ActivityBadge({ activity }: { activity: Activity }) {
  const isStuck = activity.status === 'STARTED' && (activity.runningMinutes || 0) > 2
  const bgColor = isStuck
    ? 'bg-red-500/20 border-red-500/50'
    : activity.status === 'SCHEDULED'
      ? 'bg-yellow-500/20 border-yellow-500/50'
      : 'bg-gray-500/20 border-gray-500/50'

  return (
    <div className={`p-2 rounded border text-xs ${bgColor}`}>
      <div className="flex items-center justify-between">
        <span className="font-medium truncate">{activity.name}</span>
        <span className="text-gray-400 ml-2">#{activity.eventId}</span>
      </div>
      {isStuck && (
        <div className="text-red-400 mt-1">
          ⚠️ Stuck for {activity.runningMinutes} minutes
        </div>
      )}
      {activity.failure && (
        <div className="text-red-400 mt-1 truncate">
          ❌ {activity.failure.slice(0, 50)}...
        </div>
      )}
    </div>
  )
}

export function WorkflowsSection({ className = '' }: WorkflowsSectionProps) {
  const [workflows, setWorkflows] = useState<{
    running: Workflow[]
    recent: Workflow[]
  }>({ running: [], recent: [] })
  const [loading, setLoading] = useState(true)
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null)
  const [workflowDetail, setWorkflowDetail] = useState<WorkflowDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch workflows list
  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const res = await fetch('/api/workflows')
        if (res.ok) {
          const data = await res.json()
          setWorkflows(data)
          setError(null)
        } else {
          const errorData = await res.json()
          setError(errorData.error || 'Failed to fetch workflows')
        }
      } catch (err) {
        setError('Failed to connect to Temporal')
        console.error('Failed to fetch workflows:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflows()
    // Refresh every 30 seconds
    const interval = setInterval(fetchWorkflows, 30000)
    return () => clearInterval(interval)
  }, [])

  // Fetch workflow details when selected
  useEffect(() => {
    if (!selectedWorkflow) {
      setWorkflowDetail(null)
      return
    }

    const fetchDetail = async () => {
      setDetailLoading(true)
      try {
        const res = await fetch(`/api/workflows/${selectedWorkflow}`)
        if (res.ok) {
          const data = await res.json()
          setWorkflowDetail(data)
        }
      } catch (err) {
        console.error('Failed to fetch workflow detail:', err)
      } finally {
        setDetailLoading(false)
      }
    }

    fetchDetail()
    // Refresh detail every 10 seconds when selected
    const interval = setInterval(fetchDetail, 10000)
    return () => clearInterval(interval)
  }, [selectedWorkflow])

  const hasStuckActivities =
    workflowDetail && workflowDetail.stuckActivities.length > 0

  return (
    <div className={`bg-black/30 border border-white/10 rounded-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <h2 className="font-semibold">Temporal Workflows</h2>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span
              className={`px-2 py-1 rounded ${
                workflows.running.length > 0
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-gray-500/20 text-gray-400'
              }`}
            >
              {workflows.running.length} running
            </span>
          </div>
        </div>
      </div>

      {error ? (
        <div className="p-4 text-center text-red-400">
          <p>{error}</p>
          <p className="text-xs text-gray-500 mt-2">
            Check Temporal configuration in environment variables
          </p>
        </div>
      ) : loading ? (
        <div className="p-4 text-center text-gray-400 animate-pulse">
          Connecting to Temporal...
        </div>
      ) : (
        <div className="flex">
          {/* Workflow List */}
          <div className="w-1/2 border-r border-white/10 max-h-[400px] overflow-y-auto">
            {/* Running workflows */}
            {workflows.running.length > 0 && (
              <div className="p-3 space-y-2">
                <h3 className="text-xs font-medium text-blue-400 uppercase">
                  Running ({workflows.running.length})
                </h3>
                {workflows.running.map((w) => (
                  <WorkflowCard
                    key={w.id}
                    workflow={w}
                    onSelect={setSelectedWorkflow}
                    isSelected={selectedWorkflow === w.id}
                  />
                ))}
              </div>
            )}

            {/* Recent workflows */}
            {workflows.recent.length > 0 && (
              <div className="p-3 space-y-2 border-t border-white/10">
                <h3 className="text-xs font-medium text-gray-400 uppercase">
                  Recent ({workflows.recent.length})
                </h3>
                {workflows.recent.slice(0, 5).map((w) => (
                  <WorkflowCard
                    key={w.id}
                    workflow={w}
                    onSelect={setSelectedWorkflow}
                    isSelected={selectedWorkflow === w.id}
                  />
                ))}
              </div>
            )}

            {workflows.running.length === 0 && workflows.recent.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No workflows found
              </div>
            )}
          </div>

          {/* Workflow Detail */}
          <div className="w-1/2 max-h-[400px] overflow-y-auto">
            {detailLoading ? (
              <div className="p-4 text-center text-gray-400 animate-pulse">
                Loading details...
              </div>
            ) : workflowDetail ? (
              <div className="p-3 space-y-3">
                {/* Summary */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-500/10 rounded p-2">
                    <div className="text-lg font-bold text-green-400">
                      {workflowDetail.summary.completed}
                    </div>
                    <div className="text-xs text-gray-400">Done</div>
                  </div>
                  <div
                    className={`rounded p-2 ${
                      workflowDetail.summary.stuck > 0
                        ? 'bg-red-500/20'
                        : 'bg-yellow-500/10'
                    }`}
                  >
                    <div
                      className={`text-lg font-bold ${
                        workflowDetail.summary.stuck > 0
                          ? 'text-red-400'
                          : 'text-yellow-400'
                      }`}
                    >
                      {workflowDetail.summary.stuck}
                    </div>
                    <div className="text-xs text-gray-400">Stuck</div>
                  </div>
                  <div className="bg-gray-500/10 rounded p-2">
                    <div className="text-lg font-bold text-gray-400">
                      {workflowDetail.summary.pending}
                    </div>
                    <div className="text-xs text-gray-400">Pending</div>
                  </div>
                </div>

                {/* Stuck Activities Warning */}
                {hasStuckActivities && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded p-3">
                    <h4 className="text-sm font-medium text-red-400 mb-2">
                      ⚠️ Stuck Activities ({workflowDetail.stuckActivities.length})
                    </h4>
                    <div className="space-y-2">
                      {workflowDetail.stuckActivities.map((a) => (
                        <ActivityBadge key={a.eventId} activity={a} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Pending Activities */}
                {workflowDetail.pendingActivities.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-2 uppercase">
                      Pending Activities
                    </h4>
                    <div className="space-y-1">
                      {workflowDetail.pendingActivities.slice(-5).map((a) => (
                        <ActivityBadge key={a.eventId} activity={a} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Link to Temporal UI */}
                <a
                  href={workflowDetail.temporalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs text-purple-400 hover:text-purple-300 py-2 border border-purple-500/30 rounded hover:bg-purple-500/10 transition"
                >
                  View in Temporal Cloud ↗
                </a>
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p>Select a workflow to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
