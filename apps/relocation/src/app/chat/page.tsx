'use client'

import { GlobalHeader } from '@/components/GlobalHeader'
import { QuestChat } from '@/components/QuestChat'

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
      <GlobalHeader />

      <main className="flex-1 flex flex-col">
        <QuestChat appId="relocation" />
      </main>
    </div>
  )
}
