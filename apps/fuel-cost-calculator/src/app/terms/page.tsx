import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Fuel Cost Calculator UK',
  description: 'Terms of service for Fuel Cost Calculator UK',
}

export default function Terms() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Fuel Cost Calculator UK's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Disclaimer</h2>
            <p>
              The materials on Fuel Cost Calculator UK's website are provided on an 'as is' basis. Fuel Cost Calculator UK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Limitations</h2>
            <p>
              In no event shall Fuel Cost Calculator UK or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fuel Cost Calculator UK's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Accuracy of Materials</h2>
            <p>
              The materials appearing on Fuel Cost Calculator UK's website could include technical, typographical, or photographic errors. Fuel Cost Calculator UK does not warrant that any of the materials on our website are accurate, complete, or current. Fuel Cost Calculator UK may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Links</h2>
            <p>
              Fuel Cost Calculator UK has not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Fuel Cost Calculator UK of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Modifications</h2>
            <p>
              Fuel Cost Calculator UK may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
        <a href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  )
}
