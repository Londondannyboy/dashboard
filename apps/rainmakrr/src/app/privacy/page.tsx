import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmaker"
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
            <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-12">Last updated: December 2024</p>

            <div className="prose prose-invert prose-blue max-w-none">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                subscribe to our newsletter, or contact us for support.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                to communicate with you, and to personalize your experience.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with third-party
                service providers who assist us in operating our platform.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information.
                Contact us at privacy@rainmakrr.com for any privacy-related requests.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                privacy@rainmakrr.com.
              </p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmaker"
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
