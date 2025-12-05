import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

export default function EcosystemPage() {
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
          { href: '/ecosystem', label: 'Network', highlight: true },
          { href: '/resources', label: 'Resources' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-sm text-indigo-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Network Explorer
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">PE & VC Ecosystem</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore the interconnected network of private equity and venture capital firms,
              their deals, and relationships.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">87+</strong> PE & VC Firms</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">106</strong> Entities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="text-gray-300"><strong className="text-white">599</strong> Connections</span>
              </div>
            </div>
          </div>
        </section>

        {/* Network Visualization Placeholder */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Company Network</h2>
            <div className="h-[500px] bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-slate-900/20 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
              {/* Decorative network nodes */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100" />
                <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-emerald-500 rounded-full animate-pulse delay-200" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-300" />
                <div className="absolute bottom-1/3 right-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-150" />
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
                  <line x1="33%" y1="75%" x2="66%" y2="33%" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
                  <line x1="75%" y1="50%" x2="50%" y2="66%" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
                </svg>
              </div>

              <div className="text-center z-10">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3m18 0a9 9 0 01-9 9m-9-9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Network Coming Soon</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  We're building an interactive 3D visualization of the PE/VC ecosystem.
                  Explore our directory in the meantime.
                </p>
                <Link
                  href="/private-equity-placement-agents-list"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
                >
                  Browse Directory
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Network Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Relationship Mapping</h3>
                <p className="text-gray-400 text-sm">
                  Visualize connections between firms, people, and deals to uncover hidden relationships.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Timeline Analysis</h3>
                <p className="text-gray-400 text-sm">
                  Track deal flow over time to identify market trends and investment patterns.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Coverage</h3>
                <p className="text-gray-400 text-sm">
                  Explore PE/VC activity across regions and sectors with geographic context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Links */}
        <section className="py-12 px-6 bg-white/[0.02] border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Explore by Region</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { slug: 'us', name: 'United States', flag: '🇺🇸' },
                { slug: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
                { slug: 'europe', name: 'Europe', flag: '🇪🇺' },
                { slug: 'asia-pacific', name: 'Asia Pacific', flag: '🌏' },
                { slug: 'singapore', name: 'Singapore', flag: '🇸🇬' },
              ].map((region) => (
                <Link
                  key={region.slug}
                  href={`/top-private-equity-placement-agents/${region.slug}`}
                  className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.06] hover:border-indigo-500/30 transition"
                >
                  <span className="text-2xl">{region.flag}</span>
                  <span className="font-medium">{region.name}</span>
                </Link>
              ))}
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
