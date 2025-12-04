'use client'

import { ReactNode } from 'react'
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

// Create Stack app instance lazily
// Type assertion needed due to complex SDK generic inference
let stackApp: StackClientApp<true, string> | null = null
function getStackApp(): StackClientApp<true, string> | null {
  if (!stackApp && isStackConfigured) {
    stackApp = new StackClientApp({ tokenStore: 'nextjs-cookie' }) as StackClientApp<true, string>
  }
  return stackApp
}

export function StackWrapper({ children }: { children: ReactNode }) {
  // If Stack is not configured, just render children directly
  if (!isStackConfigured) {
    return <>{children}</>
  }

  // Always render children immediately for proper hydration
  // Stack context will be available after mount
  const app = getStackApp()

  if (!app) {
    return <>{children}</>
  }

  return (
    <StackProvider app={app}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  )
}
