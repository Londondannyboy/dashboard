import { getStackServerApp } from '@/stack'

export default async function DashboardPage() {
  const stackApp = await getStackServerApp()
  const user = stackApp ? await stackApp.getUser() : null

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome, {user?.displayName || 'User'}!</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your relocation journey from here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Facts Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Information we've learned about you from conversations.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Name</span>
              <span>{user?.displayName || 'Not set'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span>{user?.primaryEmail || 'Not set'}</span>
            </div>
          </div>
        </div>

        {/* Voice Chat Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Voice Assistant</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Talk to Quest about your relocation plans.
          </p>
          <a
            href="/dashboard/voice"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Start Voice Chat
          </a>
        </div>

        {/* Pending Confirmations Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Pending Confirmations</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Review and confirm information we've extracted.
          </p>
          <div className="text-sm text-gray-500">
            No pending confirmations
          </div>
        </div>
      </div>

      {/* Recent Conversations */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Conversations</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Your recent conversations with Quest will appear here.
        </p>
      </div>
    </div>
  )
}
