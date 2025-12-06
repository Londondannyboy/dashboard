import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Providers' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 mb-12">
              Ready to launch your GTM strategy? Have questions about our platform?
              We're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
                <p className="text-gray-400 text-sm mb-3">Questions about GTM Quest</p>
                <a href="mailto:hello@gtm.quest" className="text-orange-400 hover:text-orange-300 transition">
                  hello@gtm.quest
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">GTM Consulting</h3>
                <p className="text-gray-400 text-sm mb-3">Work with our GTM experts</p>
                <a href="mailto:consulting@gtm.quest" className="text-amber-400 hover:text-amber-300 transition">
                  consulting@gtm.quest
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Partnerships</h3>
                <p className="text-gray-400 text-sm mb-3">Agency & tool partnerships</p>
                <a href="mailto:partners@gtm.quest" className="text-yellow-400 hover:text-yellow-300 transition">
                  partners@gtm.quest
                </a>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Listed</h3>
                <p className="text-gray-400 text-sm mb-3">Add your agency to our directory</p>
                <a href="mailto:listings@gtm.quest" className="text-orange-400 hover:text-orange-300 transition">
                  listings@gtm.quest
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Need a GTM Strategy?</h3>
              <p className="text-gray-400 mb-6">
                Our AI-powered planner can generate a comprehensive go-to-market strategy in seconds.
              </p>
              <a href="/#planner" className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                Try the GTM Planner
              </a>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner"
        productLinks={[
          { label: 'GTM Planner', href: '/' },
          { label: 'Providers', href: '/directory' },
          { label: 'News', href: '/news' },
          { label: 'Network', href: '/ecosystem' },
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
