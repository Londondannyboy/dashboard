import { getStackServerApp } from '@/stack'
import { getUserByNeonAuthId } from '@quest/db'
import { buildHumeVariables } from '@quest/ai'
import { VoiceChatClient } from './VoiceChatClient'

export default async function VoicePage() {
  // Get Stack Auth user (server-side)
  const stackApp = await getStackServerApp()
  const stackUser = stackApp ? await stackApp.getUser() : null

  // Debug logging (server-side - check Vercel function logs)
  console.log('🟢 VoicePage server render:')
  console.log('🟢   stackApp exists:', !!stackApp)
  console.log('🟢   stackUser:', stackUser ? { id: stackUser.id, email: stackUser.primaryEmail } : null)

  // Fetch user profile from Neon using their Stack Auth ID
  let userProfile = null
  let humeVariables = {}

  if (stackUser?.id) {
    userProfile = await getUserByNeonAuthId(stackUser.id)
    console.log('🟢   userProfile from Neon:', userProfile ? { first_name: userProfile.first_name, current_country: userProfile.current_country } : null)

    if (userProfile) {
      humeVariables = buildHumeVariables({
        first_name: userProfile.first_name,
        current_country: userProfile.current_country,
        destination_countries: userProfile.destination_countries,
        budget_monthly: userProfile.budget_monthly,
        timeline: userProfile.timeline,
      })
      console.log('🟢   humeVariables built:', humeVariables)
    }
  } else {
    console.log('🟢   No stackUser.id - cannot fetch profile')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Voice Chat</h2>

      {userProfile?.first_name && (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
          Welcome back, {userProfile.first_name}!
        </p>
      )}

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Talk to Quest about your relocation plans. Quest will remember what you share
        and help you with personalized recommendations.
      </p>

      {/* Debug: Show what variables are being passed */}
      {process.env.NODE_ENV === 'development' && (
        <details className="mb-4 text-xs text-gray-500">
          <summary>Debug: Hume Variables</summary>
          <pre className="bg-gray-100 dark:bg-gray-900 p-2 rounded mt-2 overflow-auto">
            {JSON.stringify({ stackUserId: stackUser?.id, humeVariables }, null, 2)}
          </pre>
        </details>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <VoiceChatClient
          variables={humeVariables}
          userId={stackUser?.id}
        />
      </div>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <h3 className="font-semibold mb-2">Tips for better conversations:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Speak clearly about your relocation goals</li>
          <li>Mention countries you're considering</li>
          <li>Share your timeline and budget if comfortable</li>
          <li>Ask questions about visas, cost of living, etc.</li>
        </ul>
      </div>
    </div>
  )
}
