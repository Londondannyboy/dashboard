'use client'

import { useUser } from '@stackframe/stack'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import SmartChat from '@/components/SmartChat'

const CHAT_COUNT_KEY = 'chat_message_count'
const MAX_FREE_MESSAGES = 5

function getMessageCount(): number {
  if (typeof window === 'undefined') return 0
  const stored = localStorage.getItem(CHAT_COUNT_KEY)
  return stored ? parseInt(stored, 10) : 0
}

function incrementMessageCount(): number {
  if (typeof window === 'undefined') return 0
  const current = getMessageCount()
  const newCount = current + 1
  localStorage.setItem(CHAT_COUNT_KEY, String(newCount))
  return newCount
}

export default function ChatPage() {
  const user = useUser()
  const [messageCount, setMessageCount] = useState(0)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setMessageCount(getMessageCount())
  }, [])

  // Callback when user sends a message
  const handleMessageSent = () => {
    if (!user) {
      const newCount = incrementMessageCount()
      setMessageCount(newCount)
      if (newCount >= MAX_FREE_MESSAGES) {
        setShowLoginPrompt(true)
      }
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // Show login prompt when limit reached
  if (!user && showLoginPrompt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
        <GlobalHeader />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
              <span className="text-6xl mb-4 block">💬</span>
              <h2 className="text-2xl font-bold mb-2">Enjoying the chat?</h2>
              <p className="text-gray-400 mb-6">
                You've used your {MAX_FREE_MESSAGES} free messages. Sign in for unlimited conversations with Quest.
              </p>
              <Link
                href="/handler/sign-in?redirect=/chat"
                className="inline-block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:opacity-90 transition"
              >
                Sign In to Continue
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Free account • No credit card required
              </p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const remainingFree = user ? null : MAX_FREE_MESSAGES - messageCount

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
      <GlobalHeader />

      {/* Trial banner for unauthenticated users */}
      {!user && remainingFree !== null && remainingFree > 0 && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-center">
          <p className="text-amber-400 text-sm">
            🎁 {remainingFree} free {remainingFree === 1 ? 'message' : 'messages'} remaining •{' '}
            <Link href="/handler/sign-in?redirect=/chat" className="underline hover:text-amber-300">
              Sign in
            </Link>
            {' '}for unlimited access
          </p>
        </div>
      )}

      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <SmartChat onMessageSent={handleMessageSent} />
      </main>

      <GlobalFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-purple-400 to-pink-500"
        compact
      />
    </div>
  )
}
