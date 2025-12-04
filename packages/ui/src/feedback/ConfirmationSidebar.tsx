'use client'

import { useState, useEffect, useCallback } from 'react'

export interface PendingConfirmation {
  id: string
  user_id: string
  fact_type: string
  old_value?: string
  new_value: string
  context?: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

export interface ConfirmationSidebarProps {
  userId: string | null
  gatewayUrl?: string
  onConfirm?: (confirmation: PendingConfirmation) => void
  onReject?: (confirmation: PendingConfirmation) => void
  className?: string
}

const FACT_ICONS: Record<string, string> = {
  destination: '🎯',
  origin: '🏠',
  nationality: '🪪',
  family_status: '👨‍👩‍👧‍👦',
  profession: '💼',
  budget: '💰',
  timeline: '📅',
  visa_interest: '📄',
  lifestyle: '🏖️',
  priorities: '⭐',
}

export function ConfirmationSidebar({
  userId,
  gatewayUrl,
  onConfirm,
  onReject,
  className = '',
}: ConfirmationSidebarProps) {
  const [confirmations, setConfirmations] = useState<PendingConfirmation[]>([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState<string | null>(null)

  const baseUrl = gatewayUrl || process.env.NEXT_PUBLIC_GATEWAY_URL || ''

  // Fetch pending confirmations
  const fetchConfirmations = useCallback(async () => {
    if (!userId) return

    try {
      const res = await fetch(`/api/confirmations?status=pending`, {
        headers: { 'X-User-Id': userId },
      })
      if (res.ok) {
        const data = await res.json()
        setConfirmations(data.confirmations || [])
      }
    } catch (error) {
      console.error('Failed to fetch confirmations:', error)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchConfirmations()
  }, [fetchConfirmations])

  // SSE for real-time confirmations
  useEffect(() => {
    if (!userId) return

    const eventSource = new EventSource(
      `/api/confirmations/stream?user_id=${userId}`
    )

    eventSource.addEventListener('new_confirmation', (e) => {
      try {
        const data = JSON.parse(e.data) as PendingConfirmation
        setConfirmations((prev) => {
          // Avoid duplicates
          if (prev.find((c) => c.id === data.id)) return prev
          return [data, ...prev]
        })
      } catch (err) {
        console.warn('Failed to parse confirmation event:', err)
      }
    })

    eventSource.addEventListener('confirmation_resolved', (e) => {
      try {
        const data = JSON.parse(e.data)
        setConfirmations((prev) => prev.filter((c) => c.id !== data.id))
      } catch (err) {
        console.warn('Failed to parse resolution event:', err)
      }
    })

    eventSource.onerror = () => {
      console.warn('Confirmation SSE connection error')
    }

    return () => eventSource.close()
  }, [userId])

  const handleConfirm = async (confirmation: PendingConfirmation) => {
    setProcessing(confirmation.id)

    try {
      const res = await fetch(`/api/confirmations/${confirmation.id}/resolve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId || '',
        },
        body: JSON.stringify({ action: 'accept' }),
      })

      if (res.ok) {
        setConfirmations((prev) => prev.filter((c) => c.id !== confirmation.id))
        onConfirm?.(confirmation)
      }
    } catch (error) {
      console.error('Failed to confirm:', error)
    } finally {
      setProcessing(null)
    }
  }

  const handleReject = async (confirmation: PendingConfirmation) => {
    setProcessing(confirmation.id)

    try {
      const res = await fetch(`/api/confirmations/${confirmation.id}/resolve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': userId || '',
        },
        body: JSON.stringify({ action: 'reject' }),
      })

      if (res.ok) {
        setConfirmations((prev) => prev.filter((c) => c.id !== confirmation.id))
        onReject?.(confirmation)
      }
    } catch (error) {
      console.error('Failed to reject:', error)
    } finally {
      setProcessing(null)
    }
  }

  if (!userId) {
    return null
  }

  const pendingCount = confirmations.length

  return (
    <div
      className={`bg-black/30 border-l border-white/10 flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">✋</span>
          <h2 className="font-semibold text-sm">Confirm Changes</h2>
        </div>
        {pendingCount > 0 && (
          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full animate-pulse">
            {pendingCount} pending
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {loading ? (
          <div className="text-center text-gray-400 py-8 animate-pulse text-sm">
            Loading...
          </div>
        ) : confirmations.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p className="text-sm mb-1">No pending confirmations</p>
            <p className="text-xs text-gray-600">
              When Quest detects preference changes, they'll appear here for your approval
            </p>
          </div>
        ) : (
          confirmations.map((confirmation) => (
            <div
              key={confirmation.id}
              className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg animate-fadeIn"
            >
              {/* Fact type */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">
                  {FACT_ICONS[confirmation.fact_type] || '📌'}
                </span>
                <span className="text-sm font-medium capitalize">
                  {confirmation.fact_type.replace(/_/g, ' ')}
                </span>
              </div>

              {/* Change details */}
              <div className="mb-2">
                {confirmation.old_value && (
                  <div className="text-xs text-gray-400 mb-1">
                    <span className="line-through">{confirmation.old_value}</span>
                    <span className="mx-2">→</span>
                  </div>
                )}
                <div className="text-white font-medium">
                  {confirmation.new_value}
                </div>
              </div>

              {/* Context/reasoning */}
              {confirmation.context && (
                <div className="text-xs text-gray-400 mb-3 italic border-l-2 border-yellow-500/50 pl-2">
                  "{confirmation.context}"
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleConfirm(confirmation)}
                  disabled={processing === confirmation.id}
                  className="flex-1 py-1.5 bg-green-500 hover:bg-green-600 disabled:opacity-50 rounded text-xs font-medium transition flex items-center justify-center gap-1"
                >
                  {processing === confirmation.id ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <>
                      <span>✓</span>
                      <span>Yes, update</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => handleReject(confirmation)}
                  disabled={processing === confirmation.id}
                  className="flex-1 py-1.5 bg-gray-600 hover:bg-gray-500 disabled:opacity-50 rounded text-xs font-medium transition flex items-center justify-center gap-1"
                >
                  <span>✗</span>
                  <span>No, keep</span>
                </button>
              </div>

              {/* Timestamp */}
              <div className="mt-2 text-xs text-gray-500 text-right">
                {new Date(confirmation.created_at).toLocaleTimeString()}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer info */}
      <div className="px-4 py-2 border-t border-white/10 text-xs text-gray-500">
        <strong className="text-purple-400">Human-in-the-loop:</strong> All
        preference changes require your approval
      </div>
    </div>
  )
}
