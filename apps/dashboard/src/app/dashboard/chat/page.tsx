'use client'

import { useUser } from '@stackframe/stack'
import { C1Chat } from '@thesysai/genui-sdk'
import '@crayonai/react-ui/styles/index.css'

export default function ChatPage() {
  const user = useUser()

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Please sign in to use the chat</p>
          <a
            href="/handler/sign-in"
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Sign In
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Chat with Quest
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Your AI relocation assistant with interactive UI
        </p>
      </div>

      <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-black/30">
        <C1Chat
          apiUrl="/api/chat/genui"
          formFactor="full-page"
          theme={{ mode: 'dark' }}
          agentName="Quest"
          logoUrl="/quest-logo.png"
        />
      </div>
    </div>
  )
}
