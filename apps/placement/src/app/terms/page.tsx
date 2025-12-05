import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        signInGradient="from-emerald-500 to-teal-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-12">Last updated: December 2024</p>

            <div className="prose prose-invert prose-emerald max-w-none">
              <h2>Acceptance of Terms</h2>
              <p>By using Placement, you agree to these terms of service.</p>

              <h2>Use of Service</h2>
              <p>Our service provides fund placement intelligence for informational purposes.</p>

              <h2>Contact</h2>
              <p>For questions, contact us at legal@placement.quest.</p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        brandDescription="The insider guide to fund placements"
        productLinks={[
          { label: 'Mandates', href: '/directory' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/news' },
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
