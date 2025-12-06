import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
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
            <p className="text-gray-400 mb-12">Last updated: December 2024</p>

            <div className="prose prose-invert prose-blue max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Rainmaker, you accept and agree to be bound by the terms
                and provisions of this agreement.
              </p>

              <h2>Use of Service</h2>
              <p>
                Our service provides information about placement agents and the private equity industry.
                This information is provided for informational purposes only and should not be considered
                as financial or investment advice.
              </p>

              <h2>User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this platform, including text, graphics, logos, and software,
                is the property of Rainmaker and is protected by intellectual property laws.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Rainmaker shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of your use of the service.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service
                after changes constitutes acceptance of the new terms.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at legal@rainmakrr.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="The insider guide to placement agents"
        productLinks={[
          { label: 'Agents', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
        ]}
      />
    </div>
  )
}
