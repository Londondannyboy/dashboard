'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { ZepGraph3D, DealTimeline3D } from '@quest/ui/finance'
import Link from 'next/link'

export default function EcosystemPage() {
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
          { href: '/ecosystem', label: 'Network', highlight: true },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full text-sm text-emerald-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Interactive Network
                <span className="bg-gradient-to-r from-amber-500 to-red-500 text-[8px] px-1.5 py-0.5 rounded text-white font-bold">BETA</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Placement Ecosystem</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore the interconnected network of GPs, LPs, and placement agents
              in an interactive 3D visualization.
            </p>

            <div className="flex gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">500+</strong> Active Mandates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">200+</strong> LPs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">1000+</strong> Connections</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Placement Network</h2>
            <ZepGraph3D
              companyId="all"
              companyName="Placement Network"
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
            <h2 className="text-2xl font-bold mb-6">Deal Timeline</h2>
            <p className="text-gray-400 mb-8">
              Track recent fund closes, mandate wins, and market events.
            </p>
            <DealTimeline3D
              height="450px"
              maxDeals={20}
              apiEndpoint="/api/deals-timeline"
            />
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
