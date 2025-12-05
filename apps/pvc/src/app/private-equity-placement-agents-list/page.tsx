'use client'

import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

// Placeholder data - will be replaced with database queries
const placeholderAgents = [
  { id: 1, name: 'Ares Management', slug: 'ares-management', headquarters: 'Los Angeles, CA', description: 'Global alternative investment manager', specializations: ['Private Equity', 'Credit', 'Real Estate'] },
  { id: 2, name: 'Park Hill Group', slug: 'park-hill-group', headquarters: 'New York, NY', description: 'Private capital advisory firm', specializations: ['Private Equity', 'Real Assets', 'Credit'] },
  { id: 3, name: 'Evercore', slug: 'evercore', headquarters: 'New York, NY', description: 'Independent investment banking advisory firm', specializations: ['M&A', 'Private Capital', 'Restructuring'] },
  { id: 4, name: 'Lazard', slug: 'lazard', headquarters: 'New York, NY', description: 'Financial advisory and asset management firm', specializations: ['M&A', 'Capital Raising', 'Restructuring'] },
  { id: 5, name: 'Campbell Lutyens', slug: 'campbell-lutyens', headquarters: 'London, UK', description: 'Global private capital advisory firm', specializations: ['Private Equity', 'Infrastructure', 'Real Estate'] },
  { id: 6, name: 'Eaton Partners', slug: 'eaton-partners', headquarters: 'Rowayton, CT', description: 'Global placement agent', specializations: ['Private Equity', 'Real Assets', 'Credit'] },
  { id: 7, name: 'Mercury Capital', slug: 'mercury-capital', headquarters: 'New York, NY', description: 'Private equity placement agent', specializations: ['Private Equity', 'Venture Capital', 'Growth Equity'] },
  { id: 8, name: 'Probitas Partners', slug: 'probitas-partners', headquarters: 'San Francisco, CA', description: 'Independent placement agent', specializations: ['Private Equity', 'Real Assets', 'Credit'] },
]

export default function DirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="PVC"
        brandAccent="Quest"
        brandGradient="from-indigo-400 to-purple-500"
        signInGradient="from-indigo-500 to-purple-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory', highlight: true },
          { href: '/ecosystem', label: 'Network' },
          { href: '/visualizations', label: 'Visualizations' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">VC & PE Firms Directory</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Comprehensive directory of top venture capital and private equity firms worldwide.
              Browse by specialization, region, or fund size.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium">
              All Firms
            </button>
            <button className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition">
              Private Equity
            </button>
            <button className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition">
              Venture Capital
            </button>
            <button className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition">
              Real Estate
            </button>
            <button className="px-4 py-2 bg-white/5 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/10 transition">
              Credit
            </button>
          </div>
        </section>

        {/* Directory Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderAgents.map((agent) => (
                <Link
                  key={agent.id}
                  href={`/private-equity-placement-agents-list/${agent.slug}`}
                  className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition group"
                >
                  <div className="h-24 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-4xl font-black text-indigo-400/30">
                      {agent.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{agent.headquarters}</p>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {agent.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {agent.specializations.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 font-medium hover:bg-white/10 transition">
                Load More Firms
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
