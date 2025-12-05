import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-12">
              Have questions about fund placements or want to contribute market intelligence?
              We're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm mb-3">For general inquiries</p>
                <a href="mailto:hello@placement.quest" className="text-emerald-400 hover:text-emerald-300 transition">
                  hello@placement.quest
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Market Intel</h3>
                <p className="text-gray-400 text-sm mb-3">Share placement intel</p>
                <a href="mailto:intel@placement.quest" className="text-teal-400 hover:text-teal-300 transition">
                  intel@placement.quest
                </a>
              </div>
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
