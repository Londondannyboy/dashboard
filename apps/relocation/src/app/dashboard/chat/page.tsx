'use client'

import SmartChat from '@/components/SmartChat'

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      <div className="mb-4 px-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Chat with Quest
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Your AI relocation assistant with interactive UI
        </p>
      </div>

      <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-black/30">
        <SmartChat />
      </div>
    </div>
  )
}
