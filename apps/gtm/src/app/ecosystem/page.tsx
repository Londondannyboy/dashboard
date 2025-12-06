'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { ZepGraph3D, DealTimeline3D } from '@quest/ui/finance'
import Link from 'next/link'

export default function EcosystemPage() {
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
          { href: '/ecosystem', label: 'Network', highlight: true },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-sm text-orange-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interactive Network
                <span className="bg-gradient-to-r from-amber-500 to-red-500 text-[8px] px-1.5 py-0.5 rounded text-white font-bold">BETA</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">GTM Ecosystem</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore the interconnected network of GTM agencies, tools, and service providers
              in an interactive 3D visualization.
            </p>

            <div className="flex gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">100+</strong> GTM Agencies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">50+</strong> Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">500+</strong> Connections</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">GTM Provider Network</h2>
            <ZepGraph3D
              companyId="all"
              companyName="GTM Network"
              height="600px"
              apiEndpoint="/api/zep-graph"
              onNodeClick={(node) => {
                if (node.url) {
                  window.location.href = node.url
                }
              }}
            />
          </div>
        </section>

        <section className="py-12 px-6 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">GTM Activity Timeline</h2>
            <p className="text-gray-400 mb-8">
              Track recent product launches, GTM campaigns, and market events.
            </p>
            <DealTimeline3D
              height="450px"
              maxDeals={20}
              apiEndpoint="/api/deals-timeline"
            />
          </div>
        </section>

        {/* GTM Categories */}
        <section className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Explore by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/directory?category=agency" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-orange-400 transition">GTM Agencies</h3>
                <p className="text-sm text-gray-400">Full-service go-to-market agencies</p>
              </Link>

              <Link href="/directory?category=sales" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-orange-400 transition">Sales Consultants</h3>
                <p className="text-sm text-gray-400">Expert sales strategy advisors</p>
              </Link>

              <Link href="/directory?category=marketing" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-orange-400 transition">Marketing Agencies</h3>
                <p className="text-sm text-gray-400">Demand generation experts</p>
              </Link>

              <Link href="/directory?category=growth" className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-orange-400 transition">Growth Agencies</h3>
                <p className="text-sm text-gray-400">Scale your business faster</p>
              </Link>
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
