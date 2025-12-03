'use client'

import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'

// Check at build time if Stack is configured
const isStackConfigured = Boolean(
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'placeholder' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'your_stack_project_id' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      process.env.NEXT_PUBLIC_STACK_PROJECT_ID
    )
)

// Dynamically import the Stack-enabled content only when configured
const StackContent = isStackConfigured
  ? dynamic(() => import('./StackContent'), {
      ssr: true,
      loading: () => (
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      ),
    })
  : null

function NotConfigured() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Quest Dashboard</h1>
        <p className="text-gray-600">Stack Auth is not configured.</p>
        <p className="text-gray-500 text-sm mt-2">Please set up your environment variables.</p>
      </div>
    </div>
  )
}

export function StackWrapper({ children }: { children: ReactNode }) {
  if (!isStackConfigured || !StackContent) {
    return <NotConfigured />
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><span>Loading...</span></div>}>
      <StackContent>{children}</StackContent>
    </Suspense>
  )
}
