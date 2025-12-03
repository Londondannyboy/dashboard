import { StackHandler } from '@stackframe/stack'
import { stackServerApp, isStackConfigured } from '@/stack'

export default function Handler(props: { params: Promise<{ stack: string[] }> }) {
  if (!isStackConfigured || !stackServerApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Authentication Not Available</h1>
          <p className="text-gray-600">Stack Auth is not configured.</p>
        </div>
      </div>
    )
  }
  return <StackHandler fullPage app={stackServerApp} />
}
