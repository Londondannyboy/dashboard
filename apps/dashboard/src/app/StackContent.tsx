'use client'

import { ReactNode, useEffect, useState } from 'react'

// Lazy load Stack to avoid Turbopack proxy issues
export default function StackContent({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [StackComponents, setStackComponents] = useState<{
    StackProvider: React.ComponentType<{ app: any; children: ReactNode }>
    StackTheme: React.ComponentType<{ children: ReactNode }>
    app: any
  } | null>(null)

  useEffect(() => {
    // Dynamic import on client side only
    import('@stackframe/stack').then(({ StackProvider, StackTheme, StackServerApp }) => {
      const app = new StackServerApp({ tokenStore: 'nextjs-cookie' })
      setStackComponents({ StackProvider, StackTheme, app })
    }).catch(err => {
      console.error('Failed to load Stack Auth:', err)
    })
  }, [])

  if (!StackComponents) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-500">Loading authentication...</span>
      </div>
    )
  }

  const { StackProvider, StackTheme, app } = StackComponents
  return (
    <StackProvider app={app}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  )
}
