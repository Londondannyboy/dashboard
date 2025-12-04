'use client'

import { useUser } from '@stackframe/stack'
import {
  ProfileSection,
  RepoSection,
  ArticlesSection,
  ConfirmationSidebar,
} from '@quest/ui'
import Link from 'next/link'

export default function DashboardPage() {
  const user = useUser()
  const userId = user?.id || null

  return (
    <div className="flex min-h-[calc(100vh-160px)]">
      {/* Main Content - 12 col grid */}
      <div className="flex-1 p-4 lg:p-6">
        {/* Welcome Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Welcome back, {user?.displayName || 'Explorer'}!
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Your relocation journey awaits. Start a conversation to continue planning.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Left Column - Profile + Repo */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <ProfileSection userId={userId} />
            <RepoSection userId={userId} />
          </div>

          {/* Center/Right Column - Voice + Articles + Actions */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/dashboard/voice"
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/50 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎙️</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-purple-400 transition">
                      Voice Chat
                    </h3>
                    <p className="text-xs text-gray-400">
                      Talk to Quest naturally
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/dashboard/chat"
                className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4 hover:border-blue-500/50 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💬</span>
                  <div>
                    <h3 className="font-semibold group-hover:text-blue-400 transition">
                      Text Chat
                    </h3>
                    <p className="text-xs text-gray-400">
                      Interactive AI chat
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Voice Preview / Status */}
            <div className="bg-black/30 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌟</span>
                <div>
                  <h2 className="font-semibold">Ready to Continue?</h2>
                  <p className="text-sm text-gray-400">
                    Pick up where you left off or start a new topic
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['Visa Options', 'Cost of Living', 'Healthcare'].map((topic) => (
                  <Link
                    key={topic}
                    href={`/dashboard/chat?topic=${encodeURIComponent(topic.toLowerCase())}`}
                    className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:border-purple-500/50 transition text-center"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* Articles */}
            <ArticlesSection userId={userId} />
          </div>
        </div>
      </div>

      {/* Right Sidebar - Confirmations */}
      <ConfirmationSidebar
        userId={userId}
        className="hidden xl:flex w-80 flex-shrink-0"
      />
    </div>
  )
}
