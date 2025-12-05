'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface VoiceWidgetProps {
  userId: string
  onSessionStart?: () => void
}

function VoiceControls({
  accessToken,
  configId,
  userId,
  onSessionStart,
}: {
  accessToken: string
  configId: string
  userId: string
  onSessionStart?: () => void
}) {
  const { status, connect, disconnect, isMuted, mute, unmute, messages } = useVoice()
  const [displayMessages, setDisplayMessages] = useState<Message[]>([])
  const messagesRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)

  const isConnected = status.value === 'connected'
  const isConnecting = status.value === 'connecting'

  useEffect(() => {
    const transformed: Message[] = []
    for (const msg of messages) {
      if (msg.type === 'user_message' || msg.type === 'assistant_message') {
        const content = (msg as { message?: { content?: string } }).message?.content
        if (content) {
          transformed.push({
            role: msg.type === 'user_message' ? 'user' : 'assistant',
            content,
          })
        }
      }
    }
    setDisplayMessages(transformed)

    if (messagesRef.current) {
      setTimeout(() => {
        messagesRef.current?.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: 'smooth',
        })
      }, 100)
    }
  }, [messages])

  const handleConnect = useCallback(async () => {
    try {
      await connect({
        auth: { type: 'accessToken', value: accessToken },
        configId: configId || undefined,
        sessionSettings: {
          type: 'session_settings',
          customSessionId: userId,
        },
      })

      if (!hasStarted.current) {
        hasStarted.current = true
        onSessionStart?.()
      }
    } catch (e) {
      console.error('Hume connect error:', e)
    }
  }, [connect, accessToken, configId, userId, onSessionStart])

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Visual indicator */}
      <div className="relative">
        <div
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 ${
            isConnected
              ? 'bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse'
              : isConnecting
              ? 'bg-gradient-to-br from-amber-500 to-orange-500 animate-pulse'
              : 'bg-gradient-to-br from-gray-600 to-gray-700'
          }`}
        >
          <svg
            className={`w-12 h-12 text-white ${isConnected ? 'animate-bounce' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        {isConnected && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <span className="flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </div>
        )}
      </div>

      {/* Status */}
      <div className="text-center">
        <p className="text-lg font-medium">
          {isConnected ? 'Listening...' : isConnecting ? 'Connecting...' : 'Ready to talk'}
        </p>
        <p className="text-sm text-gray-400">
          {isConnected ? 'Speak naturally about PE/VC topics' : 'Click to start voice chat'}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        {!isConnected ? (
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            {isConnecting ? 'Connecting...' : 'Start Voice Chat'}
          </button>
        ) : (
          <>
            <button
              onClick={() => (isMuted ? unmute() : mute())}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                isMuted
                  ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button
              onClick={disconnect}
              className="px-6 py-3 bg-red-500/20 text-red-400 rounded-xl font-medium hover:bg-red-500/30 transition"
            >
              End Chat
            </button>
          </>
        )}
      </div>

      {/* Messages */}
      {displayMessages.length > 0 && (
        <div
          ref={messagesRef}
          className="w-full max-h-64 overflow-y-auto mt-4 space-y-3 bg-black/20 rounded-xl p-4"
        >
          {displayMessages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-indigo-500/20 ml-8 text-right'
                  : 'bg-white/10 mr-8'
              }`}
            >
              <div className="text-xs text-gray-500 mb-1">
                {msg.role === 'user' ? 'You' : 'PVC Assistant'}
              </div>
              <div className="text-sm">{msg.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function VoiceWidget({ userId, onSessionStart }: VoiceWidgetProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [configId, setConfigId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch('/api/voice/access-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: userId }),
        })

        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.error || `HTTP ${response.status}`)
        }

        const data = await response.json()
        setAccessToken(data.accessToken)
        setConfigId(data.configId || process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '')
      } catch (err) {
        console.error('Failed to fetch token:', err)
        setError(err instanceof Error ? err.message : 'Failed to initialize voice')
      } finally {
        setLoading(false)
      }
    }

    fetchToken()
  }, [userId])

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4 p-8">
        <div className="w-32 h-32 rounded-full bg-gray-700 animate-pulse" />
        <p className="text-gray-500">Initializing voice...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-red-500/20 rounded-xl text-center">
        <p className="text-red-300 font-medium mb-2">Voice Error</p>
        <p className="text-red-400 text-sm mb-4">{error}</p>
        <button
          onClick={() => {
            setError(null)
            setLoading(true)
            setAccessToken(null)
          }}
          className="px-4 py-2 bg-red-500/30 hover:bg-red-500/50 rounded-lg text-sm transition"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!accessToken || !configId) {
    return (
      <div className="p-6 bg-amber-500/20 rounded-xl text-center">
        <p className="text-amber-300 font-medium">Voice not configured</p>
        <p className="text-amber-400/70 text-sm mt-1">Missing credentials</p>
      </div>
    )
  }

  return (
    <VoiceProvider
      onError={(err) => {
        console.error('VoiceProvider error:', err)
        setError(err.message || 'Voice chat error')
      }}
    >
      <VoiceControls
        accessToken={accessToken}
        configId={configId}
        userId={userId}
        onSessionStart={onSessionStart}
      />
    </VoiceProvider>
  )
}
