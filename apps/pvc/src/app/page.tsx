'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

export default function HomePage() {
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
          { href: '/visualizations', label: 'Visualizations' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-slate-900/20" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-sm text-indigo-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Venture Capital Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Venture Capital & Startup Funding
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              The insider guide to venture capital. VC firm rankings, startup funding rounds,
              Series A-D intelligence, and market insights for founders and investors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/private-equity-placement-agents-list"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Explore VC Firms
              </Link>
              <Link
                href="/ecosystem"
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Network
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-indigo-400 mb-2">87+</div>
                <div className="text-gray-400 text-sm">PE & VC Firms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-400 mb-2">106</div>
                <div className="text-gray-400 text-sm">Entities Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-amber-400 mb-2">599</div>
                <div className="text-gray-400 text-sm">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">$B+</div>
                <div className="text-gray-400 text-sm">Deals Tracked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Platform Features</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Everything you need to navigate the venture capital and private equity landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-indigo-500/50 transition">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">VC Firm Rankings</h3>
                <p className="text-gray-400 text-sm">Comprehensive directory of top venture capital and growth equity firms worldwide.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3D Network Graph</h3>
                <p className="text-gray-400 text-sm">Interactive force-directed visualization of company relationships and deal flows.</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deal Timeline</h3>
                <p className="text-gray-400 text-sm">Track funding rounds, exits, and market events on interactive 3D timelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Track the VC & Startup Ecosystem</h2>
            <p className="text-xl text-white/80 mb-10">
              Stay ahead with comprehensive intelligence on venture capital firms,
              startup funding rounds, fund performance, and market trends.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-indigo-600 rounded-lg font-bold hover:bg-white/90 transition"
            >
              Get Started
            </Link>
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
          { label: 'Firm Network', href: '/ecosystem' },
          { label: 'Funding News', href: '/private-equity-placement-agent-news' },
          { label: 'Deal Flow', href: '/deal-flow' },
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
