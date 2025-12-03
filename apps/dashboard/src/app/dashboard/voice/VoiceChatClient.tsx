'use client'

import { HumeVoiceChat, type HumeVariables } from '@quest/ui'

interface VoiceChatClientProps {
  variables?: HumeVariables
  userId?: string
}

export function VoiceChatClient({ variables, userId }: VoiceChatClientProps) {
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
