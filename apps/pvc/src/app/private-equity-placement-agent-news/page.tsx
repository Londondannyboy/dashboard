'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

// Placeholder data - will be replaced with database queries
const placeholderArticles = [
  { id: 1, title: 'PAG Closes $8.3B China Mall Deal', slug: 'pag-china-mall-deal', excerpt: 'Hong Kong-based PAG completes largest retail acquisition in Asia Pacific...', category: 'Deals', date: 'Dec 4, 2025' },
  { id: 2, title: 'UK Healthcare Sector Sees $500M PE Investment', slug: 'uk-healthcare-pe-investment', excerpt: 'Multiple private equity firms compete for NHS-adjacent healthcare assets...', category: 'Markets', date: 'Dec 3, 2025' },
  { id: 3, title: 'Ares Management Launches €2B Plenitude Fund', slug: 'ares-plenitude-fund', excerpt: 'Ares expands European presence with new energy transition focused vehicle...', category: 'Fund Launches', date: 'Dec 2, 2025' },
  { id: 4, title: 'PE Rising Stars 2025: 40 Under 40', slug: 'pe-rising-stars-2025', excerpt: 'Annual ranking highlights the next generation of private equity leaders...', category: 'People', date: 'Dec 1, 2025' },
  { id: 5, title: 'Real Madrid Raises $500M from PE Investors', slug: 'real-madrid-pe-investment', excerpt: 'Spanish football giant sells minority stake to consortium of investors...', category: 'Sports', date: 'Nov 30, 2025' },
  { id: 6, title: 'Legal Sector PE Deals Hit Record High', slug: 'legal-pe-record', excerpt: 'Private equity investment in law firms reaches unprecedented levels...', category: 'Analysis', date: 'Nov 29, 2025' },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News', highlight: true },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/visualizations', label: 'Visualizations' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">VC & PE News</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Latest news on venture capital deals, private equity transactions,
              fund launches, and market analysis.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-4 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto">
            <button className="text-indigo-400 font-medium whitespace-nowrap border-b-2 border-indigo-400 pb-2">
              All News
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Deals
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Fund Launches
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              People
            </button>
            <button className="text-gray-400 font-medium whitespace-nowrap hover:text-white transition pb-2">
              Analysis
            </button>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placeholderArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${article.slug}`}
                  className="group"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-indigo-400/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium hover:bg-white/10 transition">
                Load More Articles
              </button>
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
