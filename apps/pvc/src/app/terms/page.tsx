import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: December 2025</p>

            <div className="prose prose-invert prose-indigo max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using PVC Quest (pvc.quest), you agree to be bound by these
                  Terms of Service. If you disagree with any part of the terms, you may not
                  access the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use of Service</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    PVC Quest provides information about private equity placement agents,
                    venture capital firms, and related market intelligence. The service is
                    provided for informational purposes only.
                  </p>
                  <p className="leading-relaxed">You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Use the service for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to any portion of the service</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Scrape or collect data without permission</li>
                    <li>Reproduce, duplicate, or sell any portion of the service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  The service and its original content, features, and functionality are owned
                  by PVC Quest and are protected by international copyright, trademark, patent,
                  trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                <p className="text-gray-300 leading-relaxed">
                  When you create an account, you must provide accurate and complete information.
                  You are responsible for safeguarding your account credentials and for any
                  activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Content Accuracy</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    We strive to provide accurate information about placement agents and market
                    data. However, we do not warrant that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>All information is complete, accurate, or current</li>
                    <li>The service will be uninterrupted or error-free</li>
                    <li>Any defects or errors will be corrected</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
                  <p className="text-amber-200 leading-relaxed">
                    <strong>Not Financial Advice:</strong> The information provided on PVC Quest
                    is for general informational purposes only and should not be construed as
                    financial, investment, legal, or professional advice. Always consult with
                    qualified professionals before making investment decisions or engaging
                    placement agents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall PVC Quest, its directors, employees, partners, agents,
                  suppliers, or affiliates be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our service may contain links to third-party websites or services. We have
                  no control over and assume no responsibility for the content, privacy policies,
                  or practices of any third-party sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will provide notice
                  of significant changes by updating the "Last updated" date. Continued use of
                  the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws
                  of England and Wales, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@pvc.quest" className="text-indigo-400 hover:text-indigo-300">
                    legal@pvc.quest
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        brandDescription="The insider guide to venture capital"
        productLinks={[
          { label: 'VC Firms', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'Momentum', href: '/momentum' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]}
      />
    </div>
  )
}
