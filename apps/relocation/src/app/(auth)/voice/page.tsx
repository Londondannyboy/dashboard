'use client'

import { useUser } from '@stackframe/stack'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { VoiceWidget } from '@/components/VoiceWidget'
import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

const VOICE_TRIAL_KEY = 'voice_trial_used'
const MAX_FREE_SESSIONS = 1

function getTrialCount(): number {
  if (typeof window === 'undefined') return 0
  const stored = localStorage.getItem(VOICE_TRIAL_KEY)
  return stored ? parseInt(stored, 10) : 0
}

function incrementTrialCount(): void {
  if (typeof window === 'undefined') return
  const current = getTrialCount()
  localStorage.setItem(VOICE_TRIAL_KEY, String(current + 1))
}

export default function VoicePage() {
  const user = useUser()
  const router = useRouter()
  const [trialUsed, setTrialUsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTrialUsed(getTrialCount() >= MAX_FREE_SESSIONS)
  }, [])

  // Show loading while checking
  if (!mounted || user === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Not logged in and trial used - show sign in prompt
  if (user === null && trialUsed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
        <GlobalHeader />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
              <span className="text-6xl mb-4 block">🎙️</span>
              <h2 className="text-2xl font-bold mb-2">Enjoyed your trial?</h2>
              <p className="text-gray-400 mb-6">
                Sign in to continue unlimited voice conversations with Quest.
              </p>
              <Link
                href="/handler/sign-in?redirect=/voice"
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

  // Function to handle when voice session starts
  const handleVoiceStart = () => {
    if (!user) {
      incrementTrialCount()
    }
  }

  const isTrialMode = user === null && !trialUsed

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex flex-col">
      <GlobalHeader />

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Voice Assistant
          </h1>
          <p className="text-gray-400 mb-8">
            Talk to Quest about your relocation plans
          </p>

          {user ? (
            <p className="text-gray-500 text-sm mb-4">
              Signed in as {user.displayName || user.primaryEmail}
            </p>
          ) : (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 mb-4 inline-block">
              <p className="text-amber-400 text-sm">
                🎁 Free trial session •{' '}
                <Link href="/handler/sign-in?redirect=/voice" className="underline hover:text-amber-300">
                  Sign in
                </Link>
                {' '}for unlimited access
              </p>
            </div>
          )}

          <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
            <VoiceWidget
              userId={user?.id || `trial-${Date.now()}`}
              onSessionStart={handleVoiceStart}
            />
          </div>
        </div>
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
