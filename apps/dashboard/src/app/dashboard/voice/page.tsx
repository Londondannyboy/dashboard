'use client'

import { HumeVoiceChat } from '@quest/ui'

export default function VoicePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Voice Chat</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Talk to Quest about your relocation plans. Quest will remember what you share
        and help you with personalized recommendations.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <HumeVoiceChat
          onMessage={(message, role) => {
            console.log(`${role}: ${message}`)
          }}
          onError={(error) => {
            console.error('Voice chat error:', error)
          }}
          className="w-full"
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
