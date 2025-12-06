import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Private Equity Placement Agents | Complete Directory',
  description: 'Comprehensive list of top private equity placement agents featuring the largest and best boutique and bulge bracket agencies specializing in PE fundraising and capital raising worldwide.',
  openGraph: {
    title: 'Top Private Equity Placement Agents | Complete Directory',
    description: 'Directory of the world\'s leading private equity placement agents for PE fundraising.',
  },
}

interface Company {
  id: number
  name: string
  slug: string
  description: string | null
  logo_url: string | null
  headquarters: string | null
  specializations: string[] | null
  global_rank: number | null
  featured_asset_url: string | null
  primary_country: string | null
}

async function getCompanies(): Promise<Company[]> {
  try {
    const companies = await sql`
      SELECT
        id, name, slug, description, logo_url, headquarters,
        specializations, global_rank, featured_asset_url, primary_country
      FROM companies
      WHERE status = 'published'
        AND company_type = 'placement_agent'
      ORDER BY
        CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
        global_rank ASC NULLS LAST,
        name ASC
      LIMIT 100
    `
    return companies as Company[]
  } catch (error) {
    console.error('Error fetching companies:', error)
    return []
  }
}

export default async function DirectoryPage() {
  const companies = await getCompanies()

  // Group by country
  const companiesByCountry = companies.reduce((acc, company) => {
    const country = company.primary_country || 'Other'
    if (!acc[country]) acc[country] = []
    acc[country].push(company)
    return acc
  }, {} as Record<string, Company[]>)

  const sortedCountries = Object.keys(companiesByCountry).sort((a, b) => {
    if (a === 'United States') return -1
    if (b === 'United States') return 1
    if (a === 'United Kingdom') return -1
    if (b === 'United Kingdom') return 1
    if (a === 'Other') return 1
    if (b === 'Other') return -1
    return a.localeCompare(b)
  })

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
        {/* Hero Section with H1 */}
        <section className="relative py-16 px-6 border-b border-white/10 bg-gradient-to-b from-indigo-950/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-sm text-indigo-300 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Curated Directory
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Top Private Equity Placement Agents
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
              Comprehensive directory of the world's <strong className="text-white">top private equity placement agents</strong>,
              featuring {companies.length}+ of the largest and best boutique and bulge bracket agencies
              specializing in PE fundraising and capital raising. Your definitive resource for connecting
              with leading placement agents worldwide.
            </p>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Finding the Right Private Equity Placement Agent</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Selecting the right <strong className="text-white">private equity placement agent</strong> is one of the most
              critical decisions a fund manager can make during a fundraising campaign. The top private equity placement
              agents bring extensive LP relationships, market intelligence, and proven track records that can significantly
              impact fundraising success. These firms serve as strategic partners, connecting fund managers with
              institutional investors including pension funds, endowments, sovereign wealth funds, and family offices.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our directory features the leading private equity placement agents across all major markets. From boutique
              specialists focusing on emerging managers to global powerhouses handling multi-billion dollar mandates,
              this comprehensive list helps you identify the right partner for your fundraising needs. Each placement
              agent profile includes key information about their specializations, track record, and geographic focus.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're raising a first-time fund or seeking a placement agent for a flagship vehicle, understanding
              the landscape of top private equity placement agents is essential. Browse by region, country, or
              specialization to find agencies that align with your fund strategy and investor targeting requirements.
            </p>
          </div>
        </section>

        {/* Region Links */}
        <section className="py-10 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-bold text-indigo-400 uppercase tracking-wider mb-6">Browse by Region</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'North America', slug: 'north-america' },
                { name: 'Europe', slug: 'europe' },
                { name: 'Asia Pacific', slug: 'asia-pacific' },
                { name: 'United Kingdom', slug: 'uk' },
                { name: 'United States', slug: 'us' },
                { name: 'Middle East', slug: 'middle-east' },
                { name: 'Latin America', slug: 'latin-america' },
                { name: 'Africa', slug: 'africa' },
              ].map((region) => (
                <Link
                  key={region.slug}
                  href={`/top-private-equity-placement-agents/${region.slug}`}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-lg text-sm font-semibold text-white hover:border-indigo-400 transition"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-6 px-6 border-b border-white/10 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium">
              All Agents
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

        {/* Directory Grid by Country */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {companies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400">Loading placement agents...</p>
              </div>
            ) : (
              <div className="space-y-16">
                {sortedCountries.map((country) => (
                  <div key={country} id={country.toLowerCase().replace(/\s+/g, '-')}>
                    <h2 className="text-2xl font-bold mb-8 text-center">
                      Top Private Equity Placement Agents - {country}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {companiesByCountry[country].map((company) => (
                        <Link
                          key={company.id}
                          href={`/private-equity-placement-agents-list/${company.slug}`}
                          className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition group"
                        >
                          <div className="h-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center relative">
                            {company.featured_asset_url ? (
                              <img
                                src={company.featured_asset_url}
                                alt={`${company.name} - Top private equity placement agent`}
                                className="w-full h-full object-cover"
                              />
                            ) : company.logo_url ? (
                              <img
                                src={company.logo_url}
                                alt={`${company.name} logo - Private equity placement agent`}
                                className="h-12 w-auto object-contain"
                              />
                            ) : (
                              <span className="text-5xl font-black text-indigo-400/30">
                                {company.name.charAt(0)}
                              </span>
                            )}
                            {company.global_rank && (
                              <span className="absolute top-3 right-3 bg-indigo-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                                #{company.global_rank}
                              </span>
                            )}
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition">
                              {company.name}
                            </h3>
                            {company.headquarters && (
                              <p className="text-sm text-gray-500 mb-3">{company.headquarters}</p>
                            )}
                            {company.description && (
                              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                {company.description}
                              </p>
                            )}
                            {company.specializations && company.specializations.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {company.specializations.slice(0, 3).map((spec) => (
                                  <span
                                    key={spec}
                                    className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded text-xs font-medium"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bottom SEO Content */}
        <section className="py-16 px-6 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Why Work with Top Private Equity Placement Agents?</h2>
            <div className="prose prose-invert prose-lg text-gray-300">
              <p className="mb-4">
                The <strong className="text-white">top private equity placement agents</strong> offer fund managers
                significant advantages during the fundraising process. These specialized intermediaries maintain
                relationships with hundreds of institutional investors globally, providing access to capital that
                would otherwise take years to develop independently.
              </p>
              <p className="mb-4">
                Leading placement agents bring market intelligence, helping fund managers understand investor
                preferences, competitive positioning, and optimal timing for their fundraise. They also provide
                valuable feedback on fund terms, marketing materials, and investor presentations.
              </p>
              <p>
                Whether you're an emerging manager seeking your first institutional commitments or an established
                GP raising a successor fund, the right private equity placement agent can significantly impact
                your fundraising outcomes. Use this directory to research and identify potential partners for
                your next capital raise.
              </p>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="The insider guide to private equity placement agents"
        productLinks={[
          { label: 'Placement Agents', href: '/private-equity-placement-agents-list' },
          { label: 'Agent Network', href: '/ecosystem' },
          { label: 'Industry News', href: '/private-equity-placement-agent-news' },
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
