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
  apiKey?: string
  configId?: string
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onEmotions?: (emotions: EmotionScore[]) => void
  onError?: (error: Error) => void
  className?: string
}

/**
 * Hume Voice Chat component.
 *
 * This is a placeholder implementation. To fully integrate with Hume EVI:
 * 1. Install @humeai/voice-react
 * 2. Configure your Hume API key and config ID
 * 3. Update this component to use the VoiceProvider
 *
 * For now, this provides the UI structure that will be wired up to Hume.
 */
export function HumeVoiceChat({
  apiKey,
  configId,
  onMessage,
  onEmotions,
  onError,
  className = '',
}: HumeVoiceChatProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleConnect = useCallback(async () => {
    setIsConnecting(true)
    setError(null)
    try {
      // TODO: Implement actual Hume connection
      // This is a placeholder - actual implementation will use @humeai/voice-react
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsConnected(true)
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e))
      setError(err.message)
      onError?.(err)
    } finally {
      setIsConnecting(false)
    }
  }, [onError])

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
            isConnected ? 'bg-green-500' : 'bg-gray-400'
          }`}
        />
        <span className="text-sm">
          {isConnected ? 'Connected' : 'Disconnected'}
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

      {/* Speaking indicator */}
      {isPlaying && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="animate-pulse w-2 h-2 bg-blue-500 rounded-full" />
          Quest is speaking...
        </div>
      )}

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
