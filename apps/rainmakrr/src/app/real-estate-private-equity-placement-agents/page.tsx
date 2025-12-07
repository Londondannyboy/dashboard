import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Private Equity Placement Agents | REPE Fundraising',
  description: 'Top real estate private equity placement agents specializing in REPE fund placement. Expert fundraising advisors for real estate funds, REITs, and property investment vehicles.',
  openGraph: {
    title: 'Real Estate Private Equity Placement Agents',
    description: 'Specialists in real estate fund placement and REPE fundraising advisory.',
  },
}

interface Company {
  id: number
  name: string
  display_name: string
  slug: string
  description: string | null
  logo_url: string | null
  featured_asset_url: string | null
  headquarters: string | null
  specializations: string[] | null
  global_rank: number | null
  primary_country: string | null
  primary_region: string | null
}

async function getRealEstateAgents(): Promise<Company[]> {
  try {
    const companies = await sql`
      SELECT
        id,
        name,
        COALESCE(display_name, name) as display_name,
        slug,
        description,
        logo_url,
        featured_asset_url,
        headquarters,
        specializations,
        global_rank,
        primary_country,
        primary_region
      FROM companies
      WHERE company_type = 'placement_agent'
        AND status = 'published'
        AND (
          'Real Estate' = ANY(specializations)
          OR 'REPE' = ANY(specializations)
          OR 'Real Assets' = ANY(specializations)
          OR 'Infrastructure' = ANY(specializations)
          OR description ILIKE '%real estate%'
          OR description ILIKE '%property%'
        )
      ORDER BY
        CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
        global_rank ASC NULLS LAST,
        name ASC
    ` as Company[]
    return companies
  } catch (error) {
    console.error('Error fetching real estate agents:', error)
    return []
  }
}

export default async function RealEstatePlacementAgentsPage() {
  const companies = await getRealEstateAgents()

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li>/</li>
            <li><Link href="/private-equity-placement-agents-list" className="hover:text-white transition">Placement Agents</Link></li>
            <li>/</li>
            <li className="text-white">Real Estate</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="py-16 px-6 text-center border-b border-white/10 bg-gradient-to-b from-emerald-950/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-sm text-emerald-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              REPE Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Real Estate Private Equity Placement Agents
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover the top <strong className="text-white">real estate private equity placement agents</strong> specializing
              in REPE fund placement, property fund fundraising, and real assets capital raising. These specialists
              connect real estate fund managers with institutional investors seeking property exposure.
            </p>
          </div>
        </section>

        {/* Main SEO Content */}
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <h2 className="text-3xl font-bold text-white mb-6">
              What Are Real Estate Private Equity Placement Agents?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Real estate private equity placement agents</strong> are specialized
              fundraising advisors who help real estate fund managers raise capital from institutional investors.
              Unlike generalist placement agents, these REPE specialists focus exclusively on property-related
              investment vehicles including opportunistic real estate funds, value-add strategies, core-plus funds,
              and real estate debt vehicles.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              The top real estate private equity placement agents maintain dedicated relationships with institutional
              investors who allocate specifically to real estate and real assets. This includes pension fund real
              estate teams, insurance company property divisions, sovereign wealth fund real assets groups, and
              family offices with direct property investment mandates.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              These specialists understand the unique aspects of real estate fundraising, including property-level
              due diligence requirements, track record presentation for real assets, co-investment structuring,
              and the specific return expectations of different real estate strategies from core to opportunistic.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">
              Why Use a Real Estate Specialist Placement Agent?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Dedicated REPE Relationships</h3>
                <p className="text-gray-400 text-sm">
                  Access to institutional investors with specific real estate allocation targets and dedicated
                  property investment teams who evaluate funds differently than traditional PE allocators.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Property Sector Expertise</h3>
                <p className="text-gray-400 text-sm">
                  Deep understanding of real estate fundamentals, property cycles, and sector-specific dynamics
                  that enables effective positioning of your fund's strategy to institutional investors.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Track Record Presentation</h3>
                <p className="text-gray-400 text-sm">
                  Expertise in presenting real estate track records, including property-level attribution,
                  IRR/multiple analysis, and comparison to relevant property benchmarks and indices.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Co-Investment Structuring</h3>
                <p className="text-gray-400 text-sm">
                  Experience structuring property-level co-investment opportunities that are particularly
                  popular with institutional investors seeking direct real estate exposure alongside fund commitments.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">
              Types of Real Estate Funds These Agents Place
            </h2>
            <ul className="text-gray-300 space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-white">Opportunistic Real Estate Funds</strong> - Higher risk/return strategies targeting distressed assets, development, and major repositioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-white">Value-Add Real Estate Funds</strong> - Moderate risk strategies focused on asset improvement and leasing enhancement</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-white">Core-Plus Real Estate Funds</strong> - Stable income strategies with modest value creation potential</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-white">Real Estate Debt Funds</strong> - Senior and mezzanine lending strategies across property types</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <span><strong className="text-white">Sector-Specific Funds</strong> - Specialized strategies in logistics, multifamily, life sciences, data centers</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Top Real Estate Private Equity Placement Agents
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Leading placement agents with real estate and real assets expertise, connecting REPE fund managers
              with institutional investors globally.
            </p>

            {companies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/private-equity-placement-agents-list/${company.slug}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300"
                  >
                    {company.featured_asset_url && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={company.featured_asset_url}
                          alt={`${company.display_name} - Real estate private equity placement agent`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
                        {company.display_name}
                      </h3>
                      {company.headquarters && (
                        <p className="text-sm text-gray-500 mb-2">📍 {company.headquarters}</p>
                      )}
                      {company.global_rank && (
                        <p className="text-sm text-gray-500 mb-3">🏆 Global Rank #{company.global_rank}</p>
                      )}
                      {company.description && (
                        <p className="text-sm text-gray-400 line-clamp-3 mb-4">{company.description}</p>
                      )}
                      {company.specializations && company.specializations.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.specializations.slice(0, 3).map((spec) => (
                            <span
                              key={spec}
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                spec.toLowerCase().includes('real') || spec.toLowerCase().includes('property')
                                  ? 'bg-emerald-500/20 text-emerald-300'
                                  : 'bg-white/10 text-gray-400'
                              }`}
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-emerald-400 font-semibold text-sm">View Profile →</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white/[0.03] border border-white/10 rounded-2xl">
                <p className="text-gray-400 mb-6">
                  We're building our database of real estate placement specialists.
                </p>
                <Link
                  href="/private-equity-placement-agents-list"
                  className="inline-flex px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition"
                >
                  View All Placement Agents
                </Link>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href="/private-equity-placement-agents-list"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl font-bold transition"
              >
                View All Placement Agents
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom SEO Content */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <h2 className="text-2xl font-bold text-white mb-6">
              How Real Estate Placement Agents Differ from Generalists
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              While many placement agents handle real estate funds as part of a broader practice, the top
              <strong className="text-white"> real estate private equity placement agents</strong> bring
              specialized advantages that can significantly impact fundraising outcomes for REPE managers.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              These specialists understand property-level due diligence requirements, can effectively present
              asset-by-asset track records, and maintain relationships with dedicated real estate allocators
              at institutional investors. Their expertise in real estate fund terms, co-investment structures,
              and property sector dynamics enables more effective investor engagement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're raising a first-time real estate fund or seeking placement support for an
              established REPE platform, working with agents who specialize in real assets can provide
              meaningful advantages in accessing the right institutional capital for your strategy.
            </p>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="Your comprehensive guide to private equity placement agents worldwide."
        productLinks={[
          { label: 'All Placement Agents', href: '/private-equity-placement-agents-list' },
          { label: 'Real Estate Agents', href: '/real-estate-private-equity-placement-agents' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
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
