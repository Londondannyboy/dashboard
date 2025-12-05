'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { VoiceWidget } from '@/components/VoiceWidget'
import { useUser } from '@stackframe/stack'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function VoicePage() {
  const user = useUser()
  const [trialId, setTrialId] = useState<string | null>(null)

  useEffect(() => {
    // Generate trial ID for non-authenticated users
    if (!user) {
      const existingId = sessionStorage.getItem('pvc-trial-id')
      if (existingId) {
        setTrialId(existingId)
      } else {
        const newId = `trial-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        sessionStorage.setItem('pvc-trial-id', newId)
        setTrialId(newId)
      }
    }
  }, [user])

  const userId = user?.id || trialId

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/voice', label: 'Voice AI', highlight: true },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span className="inline-block px-4 py-1 bg-indigo-500/20 text-indigo-300 text-sm font-semibold rounded-full mb-6">
              AI Voice Assistant
            </span>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Talk to PVC
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Have a natural conversation about private equity, venture capital, placement agents,
              fundraising, and deal flow. Our AI assistant is ready to help.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Natural Conversation</h3>
                <p className="text-sm text-gray-400">Speak naturally about PE/VC topics - no commands needed</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Industry Expert</h3>
                <p className="text-sm text-gray-400">Deep knowledge of placement agents and fundraising</p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Real-time Response</h3>
                <p className="text-sm text-gray-400">Instant answers powered by advanced AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Widget */}
        <section className="px-6 pb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8">
              {userId ? (
                <VoiceWidget
                  userId={userId}
                  onSessionStart={() => {
                    console.log('Voice session started')
                  }}
                />
              ) : (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse" />
                  <p className="text-gray-400">Initializing...</p>
                </div>
              )}
            </div>

            {/* Usage tips */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Try asking about:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Top placement agents',
                  'Fundraising strategies',
                  'PE vs VC differences',
                  'Deal structuring',
                  'LP relations',
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want More Insights?</h2>
            <p className="text-gray-400 mb-8">
              Explore our comprehensive directory of placement agents and latest industry news.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/private-equity-placement-agents-list"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
              >
                Browse Directory
              </Link>
              <Link
                href="/private-equity-placement-agent-news"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition"
              >
                Read News
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        brandDescription="The insider guide to venture capital"
        productLinks={[
          { label: 'Directory', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />
    </div>
  )
}
