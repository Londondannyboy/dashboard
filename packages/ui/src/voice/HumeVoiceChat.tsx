'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'

export interface EmotionScore {
  name: string
  score: number
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface HumeVoiceChatProps {
  accessToken?: string
  configId?: string
  userId?: string
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onError?: (error: Error) => void
  className?: string
}

function VoiceChatControls({
  accessToken,
  configId,
  userId,
  onError,
}: {
  accessToken: string
  configId?: string
  userId?: string
  onError?: (error: Error) => void
}) {
  const { status, connect, disconnect, isMuted, mute, unmute, messages } = useVoice()
  const [displayMessages, setDisplayMessages] = useState<Message[]>([])
  const messagesRef = useRef<HTMLDivElement>(null)

  const isConnected = status.value === 'connected'
  const isConnecting = status.value === 'connecting'

  useEffect(() => {
    // Transform Hume messages to our format
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

    // Auto-scroll to bottom
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
        // Pass user ID as customSessionId to maintain identity across sessions
        sessionSettings: userId
          ? {
              type: 'session_settings' as const,
              customSessionId: userId,
            }
          : undefined,
      })
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e))
      onError?.(err)
    }
  }, [connect, accessToken, configId, userId, onError])

  return (
    <div className="flex flex-col gap-4">
      {/* Connection status */}
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? 'bg-green-500' : isConnecting ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'
          }`}
        />
        <span className="text-sm">
          {isConnected ? 'Connected' : isConnecting ? 'Connecting...' : 'Disconnected'}
        </span>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {!isConnected ? (
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isConnecting ? 'Connecting...' : 'Start Voice Chat'}
          </button>
        ) : (
          <>
            <button
              onClick={disconnect}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              End Chat
            </button>
            <button
              onClick={() => (isMuted ? unmute() : mute())}
              className={`px-4 py-2 rounded ${
                isMuted
                  ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </>
        )}
      </div>

      {/* Messages display */}
      <div ref={messagesRef} className="flex flex-col gap-2 max-h-96 overflow-y-auto">
        {displayMessages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded ${
              msg.role === 'user' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'
            }`}
          >
            <div className="text-xs text-gray-500 mb-1">
              {msg.role === 'user' ? 'You' : 'Quest'}
            </div>
            <div>{msg.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HumeVoiceChat({
  accessToken,
  configId,
  userId,
  onMessage,
  onError,
  className = '',
}: HumeVoiceChatProps) {
  const [token, setToken] = useState<string | null>(accessToken || null)
  const [config, setConfig] = useState<string | null>(configId || null)
  const [user, setUser] = useState<string | null>(userId || null)
  const [loading, setLoading] = useState(!accessToken)
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    if (!accessToken) {
      fetch('/api/hume/token')
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setFetchError(data.error)
          } else {
            setToken(data.accessToken)
            setConfig(data.configId || null)
            setUser(data.userId || null)
          }
        })
        .catch((e) => setFetchError(e.message))
        .finally(() => setLoading(false))
    }
  }, [accessToken])

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <span className="text-gray-500">Loading voice chat...</span>
      </div>
    )
  }

  if (fetchError || !token) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
          {fetchError || 'Voice chat credentials not configured.'}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <VoiceProvider
        onMessage={(msg) => {
          if (msg.type === 'user_message' || msg.type === 'assistant_message') {
            const content = (msg as { message?: { content?: string } }).message?.content
            if (content) {
              onMessage?.(content, msg.type === 'user_message' ? 'user' : 'assistant')
            }
          }
        }}
        onError={(err) => {
          onError?.(new Error(err.message || 'Voice chat error'))
        }}
      >
        <VoiceChatControls
          accessToken={token}
          configId={config || undefined}
          userId={user || undefined}
          onError={onError}
        />
      </VoiceProvider>
    </div>
  )
}

// Hook for getting Hume access token from API
export function useHumeAccessToken(apiEndpoint = '/api/hume/token') {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch(apiEndpoint)
        if (!response.ok) {
          throw new Error('Failed to fetch Hume access token')
        }
        const data = await response.json()
        setAccessToken(data.accessToken)
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)))
      } finally {
        setLoading(false)
      }
    }
    fetchToken()
  }, [apiEndpoint])

  return { accessToken, loading, error }
}

export interface VoiceChatCallbacks {
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onEmotions?: (emotions: EmotionScore[]) => void
  onError?: (error: Error) => void
  onConnect?: () => void
  onDisconnect?: () => void
}
