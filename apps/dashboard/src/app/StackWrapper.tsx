'use client'

import { ReactNode, useEffect, useState } from 'react'
import { StackProvider, StackTheme, StackClientApp } from '@stackframe/stack'

// Check at runtime if Stack is configured
const isStackConfigured = Boolean(
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'placeholder' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'your_stack_project_id' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      process.env.NEXT_PUBLIC_STACK_PROJECT_ID
    )
)

// Singleton for Stack app instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let stackAppInstance: any = null

export function StackWrapper({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stackApp, setStackApp] = useState<any>(null)

  useEffect(() => {
    // Only initialize Stack on the client
    if (isStackConfigured && !stackAppInstance) {
      try {
        stackAppInstance = new StackClientApp({ tokenStore: 'nextjs-cookie' })
        setStackApp(stackAppInstance)
      } catch (e) {
        console.error('[StackWrapper] Failed to initialize StackClientApp:', e)
      }
    } else if (stackAppInstance) {
      setStackApp(stackAppInstance)
    }
  }, [])

  // If Stack is not configured, render children directly
  if (!isStackConfigured) {
    return <>{children}</>
  }

  // CRITICAL: Always render children for SSR
  // Wrap in StackProvider only when available on client
  if (!stackApp) {
    // Server render and initial client render: children without Stack context
    // Components using useUser() will get null/undefined
    return <>{children}</>
  }

  // Client after Stack loads: children with Stack context
  return (
    <StackProvider app={stackApp}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  )
}
