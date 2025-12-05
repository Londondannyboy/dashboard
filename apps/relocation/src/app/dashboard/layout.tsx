'use client'

import { Suspense } from 'react'
import { useUser } from '@stackframe/stack'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

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
      <GlobalHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-purple-400 to-pink-500"
        signInGradient="from-purple-500 to-pink-500"
        navItems={[
          { href: '/articles', label: 'Articles' },
          { href: '/chat', label: 'Chat' },
          { href: '/voice', label: 'Voice' },
          { href: '/dashboard', label: 'Dashboard', highlight: true },
        ]}
      />
      <main className="flex-1 pt-16">{children}</main>
      <GlobalFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-purple-400 to-pink-500"
        compact
      />
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
