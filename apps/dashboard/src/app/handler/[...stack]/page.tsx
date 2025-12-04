import { StackHandler } from '@stackframe/stack'
import { getStackServerApp } from '@/stack'

// Next.js 15 App Router page props
type PageProps = {
  params: Promise<{ stack: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Handler(props: PageProps) {
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

  // Await the params for Next.js 15
  const params = await props.params
  const searchParams = await props.searchParams

  // StackHandler requires routeProps to handle the auth routes properly
  return (
    <StackHandler
      fullPage
      app={stackApp}
      routeProps={{ params, searchParams }}
    />
  )
}
