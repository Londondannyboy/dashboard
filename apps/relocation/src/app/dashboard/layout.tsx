'use client'

import { Suspense } from 'react'
import { useUser, UserButton } from '@stackframe/stack'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading dashboard...</p>
      </div>
    </div>
  )
}

function DashboardHeader() {
  const user = useUser()

  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl">🌍</span>
          <span className="font-semibold text-white">Relocation Quest</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/dashboard/chat"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Chat
          </Link>
          <Link
            href="/dashboard/voice"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Voice
          </Link>
          <a
            href="https://relocation.quest/guides"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Guides
          </a>
          {user && <UserButton />}
        </nav>
      </div>
    </header>
  )
}

function DashboardFooter() {
  return (
    <footer className="border-t border-white/10 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>Relocation Quest - Your AI-powered relocation assistant</p>
      </div>
    </footer>
  )
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const user = useUser()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && user === null) {
      router.push('/handler/sign-in')
    }
  }, [user, router, mounted])

  // Don't render anything on server
  if (!mounted) {
    return <LoadingSpinner />
  }

  // Show loading while checking auth
  if (user === undefined) {
    return <LoadingSpinner />
  }

  // User is null (not logged in) - will redirect
  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-gray-400">Redirecting to sign in...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
      <DashboardFooter />
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </Suspense>
  )
}
