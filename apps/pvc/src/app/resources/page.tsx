import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import Link from 'next/link'

const GUIDES = [
  {
    slug: 'how-placement-agents-work',
    title: 'How Placement Agents Work',
    description: 'Step-by-step guide to the PE fundraising process, from pitch development to final close.',
    icon: '📊',
    category: 'Fundamentals',
  },
  {
    slug: 'choosing-a-placement-agent',
    title: 'Choosing a Placement Agent',
    description: 'Key factors to consider when selecting the right placement agent for your fund.',
    icon: '🎯',
    category: 'Strategy',
  },
  {
    slug: 'placement-agent-fees',
    title: 'Placement Agent Fees',
    description: 'Understanding fee structures, retainers, and success fees in PE fundraising.',
    icon: '💰',
    category: 'Economics',
  },
  {
    slug: 'what-do-placement-agents-do',
    title: 'What Do Placement Agents Do?',
    description: 'A comprehensive overview of placement agent services and value proposition.',
    icon: '🤝',
    category: 'Fundamentals',
  },
]

const CATEGORIES = [
  {
    slug: 'boutique-private-equity-placement-agents',
    title: 'Boutique Placement Agents',
    description: 'Specialized boutique firms offering personalized fundraising services.',
    count: 45,
  },
  {
    slug: 'venture-capital-placement-agents',
    title: 'Venture Capital Placement Agents',
    description: 'Agents specializing in VC fund placement and emerging manager mandates.',
    count: 32,
  },
  {
    slug: 'private-credit-placement-agents',
    title: 'Private Credit Placement Agents',
    description: 'Specialists focused on private debt and credit fund fundraising.',
    count: 28,
  },
  {
    slug: 'real-estate-private-equity-placement-agents',
    title: 'Real Estate Placement Agents',
    description: 'Experts in real estate and real assets fund placement.',
    count: 24,
  },
]

export default function ResourcesPage() {
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
          { href: '/resources', label: 'Resources', highlight: true },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block px-4 py-1 bg-indigo-500/20 text-indigo-300 text-sm font-semibold rounded-full mb-6">
              Resources
            </span>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Placement Agent{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Knowledge Center
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl">
              Everything you need to know about private equity placement agents,
              fundraising strategies, and the LP landscape.
            </p>
          </div>
        </section>

        {/* Guides */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Guides & Tutorials
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/${guide.slug}`}
                  className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{guide.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs rounded">
                          {guide.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-indigo-400 transition mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-400">{guide.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-6 py-12 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              Browse by Category
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="group bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all"
                >
                  <h3 className="font-bold group-hover:text-purple-400 transition mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{category.count} agents</span>
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regional */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Regional Directories
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                { slug: 'us', name: 'United States', flag: '🇺🇸' },
                { slug: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
                { slug: 'europe', name: 'Europe', flag: '🇪🇺' },
                { slug: 'asia-pacific', name: 'Asia Pacific', flag: '🌏' },
                { slug: 'north-america', name: 'North America', flag: '🌎' },
                { slug: 'singapore', name: 'Singapore', flag: '🇸🇬' },
              ].map((region) => (
                <Link
                  key={region.slug}
                  href={`/top-private-equity-placement-agents/${region.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg hover:bg-white/[0.06] hover:border-emerald-500/30 transition"
                >
                  <span>{region.flag}</span>
                  <span className="font-medium">{region.name}</span>
                </Link>
              ))}
              <Link
                href="/top-private-equity-placement-agents"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition"
              >
                View All Regions →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-400 mb-8">
              Try our AI voice assistant for personalized guidance on placement agents and fundraising.
            </p>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Talk to PVC AI
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
