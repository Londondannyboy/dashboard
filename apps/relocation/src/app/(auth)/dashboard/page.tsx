'use client'

import { useUser } from '@stackframe/stack'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface DashboardData {
  summary: {
    userName: string
    currentLocation: { country: string | null; city: string | null }
    destination: { primary: string | null; all: string[] }
    budget: { amount: string | null; currency: string }
    timeline: string | null
    workType: string | null
  }
  articles: Array<{
    id: number
    title: string
    url: string
    image: string | null
    country: string | null
  }>
  countries: Array<{
    name: string
    slug: string
    flag: string
    facts: Record<string, any>
  }>
  factsCount: number
}

export default function DashboardPage() {
  const user = useUser()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.id) {
      setLoading(false)
      return
    }

    fetch('/api/user/profile/facts', {
      headers: { 'x-stack-user-id': user.id },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((d) => {
        // Transform the data to match our interface
        if (d) {
          setData({
            summary: {
              userName: user.displayName || 'Explorer',
              currentLocation: { country: d.currentLocation || null, city: null },
              destination: { primary: d.destination || null, all: d.destination ? [d.destination] : [] },
              budget: { amount: d.budget || null, currency: 'EUR' },
              timeline: d.timeline || null,
              workType: d.workType || null,
            },
            articles: [],
            countries: [],
            factsCount: d.factsCount || 0,
          })
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [user?.id, user?.displayName])

  const destination = data?.summary?.destination?.primary || 'Your Dream Destination'

  return (
    <div className="p-4 lg:p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-r from-purple-600 to-pink-600 p-8 lg:p-12">
        <div className="relative z-10">
          <span className="text-purple-200 text-sm font-medium">Your Relocation Journey</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mt-2">
            {data?.summary?.currentLocation?.city ||
              data?.summary?.currentLocation?.country ||
              'Home'}{' '}
            <span className="text-purple-200">→</span> {destination}
          </h1>
          <p className="text-purple-100 mt-2 text-lg">
            Welcome back, {data?.summary?.userName || user?.displayName || 'Explorer'}. Let's make
            your dream a reality.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <span className="text-purple-200 text-sm">Budget</span>
              <p className="text-white font-semibold text-lg">
                {data?.summary?.budget?.amount
                  ? `€${data.summary.budget.amount}/mo`
                  : 'Not set'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <span className="text-purple-200 text-sm">Timeline</span>
              <p className="text-white font-semibold text-lg">
                {data?.summary?.timeline || 'Flexible'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
              <span className="text-purple-200 text-sm">Work Style</span>
              <p className="text-white font-semibold text-lg">
                {data?.summary?.workType || 'Explorer'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Link
          href="/dashboard/chat"
          className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-5 hover:border-blue-500/50 transition group"
        >
          <span className="text-3xl">💬</span>
          <h3 className="font-semibold mt-2 group-hover:text-blue-400 transition">
            AI Chat
          </h3>
          <p className="text-xs text-gray-400 mt-1">Interactive assistant</p>
        </Link>

        <Link
          href="/dashboard/voice"
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-5 hover:border-purple-500/50 transition group"
        >
          <span className="text-3xl">🎙️</span>
          <h3 className="font-semibold mt-2 group-hover:text-purple-400 transition">
            Voice Chat
          </h3>
          <p className="text-xs text-gray-400 mt-1">Talk naturally</p>
        </Link>

        <Link
          href="/articles"
          className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl p-5 hover:border-amber-500/50 transition group"
        >
          <span className="text-3xl">📚</span>
          <h3 className="font-semibold mt-2 group-hover:text-amber-400 transition">
            Articles
          </h3>
          <p className="text-xs text-gray-400 mt-1">Guides & stories</p>
        </Link>

        <Link
          href="/"
          className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-5 hover:border-green-500/50 transition group"
        >
          <span className="text-3xl">🏠</span>
          <h3 className="font-semibold mt-2 group-hover:text-green-400 transition">
            Home
          </h3>
          <p className="text-xs text-gray-400 mt-1">Back to main site</p>
        </Link>
      </div>

      {/* Quick Start Topics */}
      <div className="bg-black/30 border border-white/10 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🌟</span>
          <div>
            <h2 className="font-semibold">Ready to Continue?</h2>
            <p className="text-sm text-gray-400">
              Pick up where you left off or start a new topic
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            'Visa Options',
            'Cost of Living',
            'Healthcare',
            'Tax Planning',
            'Finding Housing',
            'Banking Setup',
          ].map((topic) => (
            <Link
              key={topic}
              href={`/dashboard/chat?topic=${encodeURIComponent(topic.toLowerCase())}`}
              className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      {/* Profile Status */}
      {data?.factsCount !== undefined && (
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Profile Progress</h3>
              <p className="text-sm text-gray-400 mt-1">
                We've learned {data.factsCount} facts about your preferences
              </p>
            </div>
            <Link
              href="/dashboard/chat"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
            >
              Continue Chatting
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
