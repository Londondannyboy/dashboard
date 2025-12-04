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

// Singleton for Stack app instance (only created on client)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let stackAppInstance: any = null

export function StackWrapper({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stackApp, setStackApp] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only initialize Stack on the client after mount
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

  // If Stack is not configured, just render children directly
  if (!isStackConfigured) {
    return <>{children}</>
  }

  // Before mount or if Stack failed to init, render children without Stack context
  // This ensures server and initial client render match
  if (!mounted || !stackApp) {
    return <>{children}</>
  }

  return (
    <StackProvider app={stackApp}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  )
}
