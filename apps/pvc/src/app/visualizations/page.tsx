import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

export default function VisualizationsPage() {
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
          { href: '/visualizations', label: 'Visualizations', highlight: true },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Data Visualizations</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Interactive charts, timelines, and maps to explore venture capital
              and private equity data in new ways.
            </p>
          </div>
        </section>

        {/* Visualization Cards */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Deal Timeline */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold mb-2">Deal Timeline</h2>
                <p className="text-gray-400 text-sm">
                  Track funding rounds and exits over time
                </p>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-red-900/10 via-purple-900/10 to-slate-900/10 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  {/* Timeline decoration */}
                  <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500" />
                  <div className="absolute bottom-6 left-[15%] w-3 h-3 bg-red-500 rounded-full" />
                  <div className="absolute bottom-6 left-[35%] w-4 h-4 bg-purple-500 rounded-full" />
                  <div className="absolute bottom-6 left-[55%] w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="absolute bottom-6 left-[75%] w-5 h-5 bg-emerald-500 rounded-full" />
                </div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Network Graph Card */}
            <Link
              href="/ecosystem"
              className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition group"
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition">
                  Company Network
                </h2>
                <p className="text-gray-400 text-sm">
                  Explore relationships between firms, deals, and people
                </p>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-indigo-400/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3m18 0a9 9 0 01-9 9m-9-9a9 9 0 019-9" />
                  </svg>
                  <span className="text-indigo-300 font-medium">View Network →</span>
                </div>
              </div>
            </Link>

            {/* Capital Flow Map */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold mb-2">Capital Flow Map</h2>
                <p className="text-gray-400 text-sm">
                  Geographic distribution of PE/VC investments
                </p>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-emerald-900/20 to-teal-900/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-emerald-400/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-emerald-300/50 font-medium">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Momentum Signals */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold mb-2">Momentum Signals</h2>
                <p className="text-gray-400 text-sm">
                  Real-time market activity and trending sectors
                </p>
              </div>
              <div className="h-[350px] bg-gradient-to-br from-amber-900/20 to-orange-900/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-amber-400/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-amber-300/50 font-medium">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Explore Our Data</h2>
            <p className="text-gray-400 mb-8">
              While we build out our visualizations, explore our comprehensive directory
              of placement agents and latest industry news.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/private-equity-placement-agents-list"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
              >
                Browse Directory
              </Link>
              <Link
                href="/private-equity-placement-agent-news"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition"
              >
                Read News
              </Link>
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
