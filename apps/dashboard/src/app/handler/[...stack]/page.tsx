'use client'

import dynamic from 'next/dynamic'

// Only import Stack Auth if properly configured
const StackHandler = dynamic(
  () => import('@stackframe/stack').then((mod) => mod.StackHandler),
  { ssr: false }
)

export default function Handler(props: { params: Promise<{ stack: string[] }> }) {
  const projectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID

  if (!projectId || projectId === 'placeholder') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stack Auth Not Configured</h1>
          <p className="text-gray-600">
            Please configure your Stack Auth credentials in .env.local
          </p>
        </div>
      </div>
    )
  }

  // Need to use dynamic import for StackServerApp at runtime
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Authentication...</h1>
      </div>
    </div>
  )
}
