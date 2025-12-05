'use client'

import { GlobalHeader } from '@/components/GlobalHeader'
import SmartChat from '@/components/SmartChat'

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
      <GlobalHeader />

      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <SmartChat />
      </main>
    </div>
  )
}
