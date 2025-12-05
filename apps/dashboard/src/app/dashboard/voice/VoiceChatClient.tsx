'use client'

import { useEffect } from 'react'
import { HumeVoiceChat, type HumeVariables } from '@quest/ui/voice'

interface VoiceChatClientProps {
  variables?: HumeVariables
  userId?: string
}

export function VoiceChatClient({ variables, userId }: VoiceChatClientProps) {
  // Debug: Log what props the client component received from the server
  useEffect(() => {
    console.log('🔵 VoiceChatClient received from server:')
    console.log('🔵   userId:', userId)
    console.log('🔵   variables:', JSON.stringify(variables, null, 2))
  }, [userId, variables])

  return (
    <HumeVoiceChat
      userId={userId}
      variables={variables}
      onMessage={(message, role) => {
        console.log(`${role}: ${message}`)
      }}
      onError={(error) => {
        console.error('Voice chat error:', error)
      }}
      className="w-full"
    />
  )
}
