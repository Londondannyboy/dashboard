'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'

// Check at runtime if Stack is configured
const isStackConfigured = Boolean(
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'placeholder' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'your_stack_project_id' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      process.env.NEXT_PUBLIC_STACK_PROJECT_ID
    )
)

// Dynamically import with ssr: false to avoid Turbopack proxy issues
const StackContent = dynamic(() => import('./StackContent'), {
  ssr: false,
  // Don't block rendering - show children immediately while Stack loads
  loading: () => null,
})

export function StackWrapper({ children }: { children: ReactNode }) {
  // If Stack is not configured, just render children directly
  if (!isStackConfigured) {
    return <>{children}</>
  }

  return (
    <Suspense fallback={null}>
      <StackContent>{children}</StackContent>
    </Suspense>
  )
}
