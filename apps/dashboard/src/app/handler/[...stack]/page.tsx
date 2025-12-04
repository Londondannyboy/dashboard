import { StackHandler } from '@stackframe/stack'
import { getStackServerApp } from '@/stack'

export default async function Handler(props: { params: Promise<{ stack: string[] }> }) {
  const stackApp = await getStackServerApp()

  if (!stackApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Authentication Not Available</h1>
          <p className="text-gray-600">Stack Auth is not configured.</p>
        </div>
      </div>
    )
  }

  // StackHandler requires routeProps to handle the auth routes properly
  return <StackHandler fullPage app={stackApp} routeProps={props} />
}
