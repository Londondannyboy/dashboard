'use client'

import { useEffect, useState, useCallback } from 'react'

export interface EmotionScore {
  name: string
  score: number
}

export interface VoiceChatCallbacks {
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onEmotions?: (emotions: EmotionScore[]) => void
  onError?: (error: Error) => void
  onConnect?: () => void
  onDisconnect?: () => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface HumeVoiceChatProps {
  accessToken?: string
  configId?: string
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onEmotions?: (emotions: EmotionScore[]) => void
  onError?: (error: Error) => void
  className?: string
}

/**
 * Hume Voice Chat component - Placeholder
 *
 * Voice chat requires the Hume EVI SDK to be properly integrated.
 * The current implementation shows the UI structure.
 */
export function HumeVoiceChat({
  accessToken,
  configId,
  onMessage,
  onEmotions,
  onError,
  className = '',
}: HumeVoiceChatProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [error, setError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(accessToken || null)
  const [config, setConfig] = useState<string | null>(configId || null)

  useEffect(() => {
    if (!accessToken) {
      fetch('/api/hume/token')
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error)
          } else {
            setToken(data.accessToken)
            setConfig(data.configId || null)
          }
        })
        .catch((e) => setError(e.message))
    }
  }, [accessToken])

  const handleConnect = useCallback(async () => {
    if (!token) {
      setError('No access token available')
      return
    }

    setIsConnecting(true)
    setError(null)

    try {
      // Voice chat connection would happen here
      // For now, show that credentials are configured
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsConnected(true)
      setMessages([{
        role: 'assistant',
        content: `Voice chat ready. Config: ${config || 'default'}. Token available: ${!!token}`
      }])
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e))
      setError(err.message)
      onError?.(err)
    } finally {
      setIsConnecting(false)
    }
  }, [token, config, onError])

  const handleDisconnect = useCallback(() => {
    setIsConnected(false)
    setMessages([])
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
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

      {/* Error display */}
      {error && (
        <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
          {error}
        </div>
      )}

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
              onClick={handleDisconnect}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              End Chat
            </button>
            <button
              onClick={toggleMute}
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
      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded ${
              msg.role === 'user'
                ? 'bg-blue-100 ml-8'
                : 'bg-gray-100 mr-8'
            }`}
          >
            <div className="text-xs text-gray-500 mb-1">
              {msg.role === 'user' ? 'You' : 'Quest'}
            </div>
            <div>{msg.content}</div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="text-xs text-gray-400 mt-2">
        Voice integration pending full Hume EVI SDK setup
      </div>
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
