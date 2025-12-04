'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { VoiceProvider, useVoice, type ToolCallHandler } from '@humeai/voice-react'

export interface EmotionScore {
  name: string
  score: number
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

// Dynamic variables to inject into the system prompt
export interface HumeVariables {
  first_name?: string
  current_country?: string
  destination_countries?: string
  budget?: string
  timeline?: string
  [key: string]: string | number | boolean | undefined
}

interface HumeVoiceChatProps {
  accessToken?: string
  configId?: string
  userId?: string
  variables?: HumeVariables
  onMessage?: (message: string, role: 'user' | 'assistant') => void
  onError?: (error: Error) => void
  onToolCall?: (toolName: string, result: unknown) => void
  toolsApiEndpoint?: string
  className?: string
}

function VoiceChatControls({
  accessToken,
  configId,
  userId,
  variables,
  onError,
}: {
  accessToken: string
  configId?: string
  userId?: string
  variables?: HumeVariables
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
      // Build session settings - filter out undefined values from variables
      const filteredVariables = variables
        ? Object.fromEntries(
            Object.entries(variables).filter(([, v]) => v !== undefined)
          ) as Record<string, string | number | boolean>
        : undefined

      // Debug logging
      console.log('🎙️ Hume Connect - userId:', userId)
      console.log('🎙️ Hume Connect - variables prop:', JSON.stringify(variables, null, 2))
      console.log('🎙️ Hume Connect - filtered variables:', JSON.stringify(filteredVariables, null, 2))

      // Build sessionSettings object - type IS required by Hume SDK
      const hasSettings = userId || (filteredVariables && Object.keys(filteredVariables).length > 0)

      const sessionSettings = hasSettings ? {
        type: 'session_settings' as const,
        ...(userId && { customSessionId: userId }),
        ...(filteredVariables && Object.keys(filteredVariables).length > 0 && {
          variables: filteredVariables,
        }),
      } : undefined

      console.log('🎙️ Hume Connect - sessionSettings:', JSON.stringify(sessionSettings, null, 2))

      // Connect with options
      await connect({
        auth: { type: 'accessToken', value: accessToken },
        configId: configId || undefined,
        sessionSettings,
      })

      console.log('🎙️ Hume Connected successfully!')
    } catch (e) {
      console.error('🎙️ Hume Connect error:', e)
      const err = e instanceof Error ? e : new Error(String(e))
      onError?.(err)
    }
  }, [connect, accessToken, configId, userId, variables, onError])

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
  variables,
  onMessage,
  onError,
  onToolCall,
  toolsApiEndpoint = '/api/hume/tools',
  className = '',
}: HumeVoiceChatProps) {
  const [token, setToken] = useState<string | null>(accessToken || null)
  const [config, setConfig] = useState<string | null>(configId || null)
  const [user, setUser] = useState<string | null>(userId || null)
  const [loading, setLoading] = useState(!accessToken)
  const [fetchError, setFetchError] = useState<string | null>(null)

  // Debug: Log what props we received
  useEffect(() => {
    console.log('🎙️ HumeVoiceChat mounted with props:', {
      hasAccessToken: !!accessToken,
      configId,
      userId,
      variables: JSON.stringify(variables),
    })
  }, [accessToken, configId, userId, variables])

  useEffect(() => {
    if (!accessToken) {
      fetch('/api/hume/token')
        .then((res) => res.json())
        .then((data) => {
          console.log('🎙️ Token API response:', data)
          if (data.error) {
            setFetchError(data.error)
          } else {
            setToken(data.accessToken)
            setConfig(data.configId || null)
            // Only update userId from API if not already provided as prop
            if (!userId) {
              setUser(data.userId || null)
            }
          }
        })
        .catch((e) => setFetchError(e.message))
        .finally(() => setLoading(false))
    }
  }, [accessToken, userId])

  // Create tool call handler that queries our API
  const handleToolCall: ToolCallHandler = useCallback(async (toolCall, send) => {
    const currentUserId = user || userId
    console.log(`[Hume Tool Call] ${toolCall.name}`, {
      parameters: toolCall.parameters,
      userId: currentUserId,
    })

    try {
      const response = await fetch(toolsApiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolName: toolCall.name,
          parameters: JSON.parse(toolCall.parameters),
          userId: currentUserId,
        }),
      })

      if (!response.ok) {
        throw new Error(`Tool API returned ${response.status}`)
      }

      const result = await response.json()
      console.log(`[Hume Tool Response] ${toolCall.name}`, result)

      // Notify parent component about tool call
      onToolCall?.(toolCall.name, result)

      // Return success response to Hume
      return send.success(JSON.stringify(result))
    } catch (error) {
      console.error(`[Hume Tool Error] ${toolCall.name}`, error)

      // Return error response to Hume with fallback content
      return send.error({
        error: error instanceof Error ? error.message : 'Tool execution failed',
        code: 'TOOL_ERROR',
        level: 'warn',
        content: 'I had trouble looking that up. Let me try another way.',
      })
    }
  }, [user, userId, toolsApiEndpoint, onToolCall])

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
          console.error('🎙️ VoiceProvider error:', err)
          onError?.(new Error(err.message || 'Voice chat error'))
        }}
        onToolCall={handleToolCall}
      >
        <VoiceChatControls
          accessToken={token}
          configId={config || undefined}
          userId={user || userId || undefined}
          variables={variables}
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
