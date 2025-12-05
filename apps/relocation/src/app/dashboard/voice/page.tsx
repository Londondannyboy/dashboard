'use client'

import { useUser } from '@stackframe/stack'
import { VoiceWidget } from '@/components/VoiceWidget'

export default function DashboardVoicePage() {
  const user = useUser()
  const userId = user?.id || null

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Voice Chat
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Talk to Quest about your relocation plans
      </p>

      <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
        <VoiceWidget userId={userId} />
      </div>

      <div className="mt-8 text-sm text-gray-500">
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
