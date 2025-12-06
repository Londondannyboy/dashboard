import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

const REGIONS = [
  { slug: 'us', name: 'United States', flag: '', description: 'Premier US-based PE fundraising agencies' },
  { slug: 'uk', name: 'United Kingdom', flag: '', description: 'Expert British fundraising advisors' },
  { slug: 'europe', name: 'Europe', flag: '', description: 'Pan-European fundraising specialists' },
  { slug: 'asia-pacific', name: 'Asia Pacific', flag: '', description: 'Regional specialists across APAC' },
  { slug: 'north-america', name: 'North America', flag: '', description: 'US and Canadian focused advisors' },
  { slug: 'latin-america', name: 'Latin America', flag: '', description: 'LatAm regional experts' },
  { slug: 'middle-east', name: 'Middle East', flag: '', description: 'Gulf and MENA specialists' },
  { slug: 'africa', name: 'Africa', flag: '', description: 'Pan-African institutional experts' },
  { slug: 'singapore', name: 'Singapore', flag: '', description: 'Southeast Asian specialists' },
]

export default function RegionalIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory', highlight: true },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-transparent" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
              Regional Directory
            </span>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Top Placement Agents{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                by Region
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl">
              Explore leading private equity placement agents across major markets worldwide.
              Find regional specialists with deep LP relationships in your target geography.
            </p>
          </div>
        </section>

        {/* Regions Grid */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REGIONS.map((region) => (
                <Link
                  key={region.slug}
                  href={`/top-private-equity-placement-agents/${region.slug}`}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{region.flag}</div>
                    <div>
                      <h3 className="font-bold text-xl group-hover:text-blue-400 transition">
                        {region.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{region.description}</p>

                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>View agents</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-blue-900/10 to-indigo-900/10 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Global Coverage</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our directory includes placement agents operating across all major financial centers,
              from New York and London to Singapore and Sao Paulo.
            </p>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/[0.03] rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-400 mb-1">120+</div>
                <div className="text-sm text-gray-400">Placement Agents</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-6">
                <div className="text-3xl font-bold text-indigo-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-400 mb-1">$500B+</div>
                <div className="text-sm text-gray-400">Capital Raised</div>
              </div>
              <div className="bg-white/[0.03] rounded-xl p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-1">1000+</div>
                <div className="text-sm text-gray-400">Fund Mandates</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need the Full Picture?</h2>
            <p className="text-gray-400 mb-8">
              Browse our complete directory of placement agents or explore our interactive network visualization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/private-equity-placement-agents-list"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
              >
                Full Directory
              </Link>
              <Link
                href="/ecosystem"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition"
              >
                Network View
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="The insider guide to placement agents"
        productLinks={[
          { label: 'Directory', href: '/private-equity-placement-agents-list' },
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
