import { stackServerApp } from '@/stack'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await stackServerApp.getUser()

  if (!user) {
    redirect('/handler/sign-in')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Quest Dashboard</h1>
          <nav className="flex items-center gap-4">
            <a href="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Dashboard
            </a>
            <a href="/dashboard/chat" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Text Chat
            </a>
            <a href="/dashboard/voice" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Voice Chat
            </a>
            <a href="/handler/sign-out" className="text-red-600 hover:text-red-700">
              Sign Out
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
