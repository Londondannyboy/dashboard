import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-12">
              Have questions about placement agents, want to be listed in our directory,
              or need help with your fundraising strategy? We're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm mb-3">For general inquiries and support</p>
                <a href="mailto:hello@pvc.quest" className="text-indigo-400 hover:text-indigo-300 transition">
                  hello@pvc.quest
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Directory Listings</h3>
                <p className="text-gray-400 text-sm mb-3">Add or update your firm's profile</p>
                <a href="mailto:listings@pvc.quest" className="text-purple-400 hover:text-purple-300 transition">
                  listings@pvc.quest
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Get Listed</h2>
              <p className="text-gray-300 mb-6">
                Are you a placement agent looking to be featured in our directory?
                We welcome submissions from established firms with a track record in
                private equity, venture capital, or alternative asset fundraising.
              </p>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-500/30 rounded flex items-center justify-center mt-0.5">
                    <span className="text-indigo-400 text-xs">1</span>
                  </div>
                  <span>Submit your firm details via email</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-500/30 rounded flex items-center justify-center mt-0.5">
                    <span className="text-indigo-400 text-xs">2</span>
                  </div>
                  <span>Our team will review your submission</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-indigo-500/30 rounded flex items-center justify-center mt-0.5">
                    <span className="text-indigo-400 text-xs">3</span>
                  </div>
                  <span>Approved firms are added to the directory within 5 business days</span>
                </div>
              </div>
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
