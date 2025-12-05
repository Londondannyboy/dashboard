import { stackServerApp } from '@/stack/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const user = await stackServerApp.getUser()

  // If user is authenticated, redirect to dashboard
  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Quest
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Your AI-powered relocation and career placement assistant
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/handler/sign-in"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </a>
          <a
            href="/handler/sign-up"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  )
}
