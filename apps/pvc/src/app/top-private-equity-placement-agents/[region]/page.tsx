import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Region configuration
const REGIONS: Record<string, { name: string; description: string; filter: { country?: string; region?: string } }> = {
  'us': {
    name: 'United States',
    description: 'Leading private equity placement agents in the United States. Premier US-based PE fundraising agencies with deep relationships across American pension funds, endowments, and institutional investors.',
    filter: { country: 'United States' }
  },
  'uk': {
    name: 'United Kingdom',
    description: 'Top private equity placement agents in the UK. Expert British fundraising advisors with strong ties to City of London institutions and European LPs.',
    filter: { country: 'United Kingdom' }
  },
  'europe': {
    name: 'Europe',
    description: 'Premier European private equity placement agents. Pan-European fundraising specialists serving continental pension funds, family offices, and sovereign wealth funds.',
    filter: { region: 'Europe' }
  },
  'asia-pacific': {
    name: 'Asia Pacific',
    description: 'Leading private equity placement agents across Asia Pacific. Regional specialists with deep LP relationships in Australia, Japan, Korea, and emerging Asian markets.',
    filter: { region: 'Asia Pacific' }
  },
  'north-america': {
    name: 'North America',
    description: 'Top private equity placement agents in North America. Full-service fundraising advisors covering US and Canadian institutional investors.',
    filter: { region: 'North America' }
  },
  'latin-america': {
    name: 'Latin America',
    description: 'Premier private equity placement agents in Latin America. Regional experts with connections to Brazilian, Mexican, and Latin American pension funds.',
    filter: { region: 'Latin America' }
  },
  'middle-east': {
    name: 'Middle East',
    description: 'Leading private equity placement agents in the Middle East. Specialists with relationships across Gulf sovereign wealth funds and family offices.',
    filter: { region: 'Middle East' }
  },
  'africa': {
    name: 'Africa',
    description: 'Top private equity placement agents in Africa. Regional specialists focused on pan-African institutional investors and development finance institutions.',
    filter: { region: 'Africa' }
  },
  'singapore': {
    name: 'Singapore',
    description: 'Premier private equity placement agents in Singapore. Southeast Asian specialists with strong ties to Singaporean sovereign wealth funds and regional LPs.',
    filter: { country: 'Singapore' }
  },
}

interface Company {
  id: number
  name: string
  display_name: string
  slug: string
  description: string | null
  logo_url: string | null
  headquarters: string | null
  specializations: string[] | null
  global_rank: number | null
}

async function getCompaniesByRegion(filter: { country?: string; region?: string }): Promise<Company[]> {
  try {
    let companies: Company[]

    if (filter.country) {
      companies = await sql`
        SELECT
          id,
          name,
          COALESCE(display_name, name) as display_name,
          slug,
          description,
          logo_url,
          headquarters,
          specializations,
          global_rank
        FROM companies
        WHERE company_type = 'placement_agent'
          AND status = 'published'
          AND primary_country = ${filter.country}
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
      ` as Company[]
    } else if (filter.region) {
      companies = await sql`
        SELECT
          id,
          name,
          COALESCE(display_name, name) as display_name,
          slug,
          description,
          logo_url,
          headquarters,
          specializations,
          global_rank
        FROM companies
        WHERE company_type = 'placement_agent'
          AND status = 'published'
          AND primary_region = ${filter.region}
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
      ` as Company[]
    } else {
      companies = []
    }

    return companies
  } catch (error) {
    console.error('Error fetching companies:', error)
    return []
  }
}

export function generateStaticParams() {
  return Object.keys(REGIONS).map((region) => ({ region }))
}

export default async function RegionalPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const config = REGIONS[region]

  if (!config) {
    notFound()
  }

  const companies = await getCompaniesByRegion(config.filter)

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
          { href: '/voice', label: 'Voice AI' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-transparent" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/private-equity-placement-agents-list"
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                All Regions
              </Link>
              <span className="text-gray-600">/</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm font-semibold rounded-full">
                {config.name}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Top Placement Agents in{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {config.name}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mb-8">
              {config.description}
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-gray-400">{companies.length} Agents Listed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Region Navigation */}
        <section className="px-6 py-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {Object.entries(REGIONS).map(([slug, { name }]) => (
                <Link
                  key={slug}
                  href={`/top-private-equity-placement-agents/${slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    slug === region
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {companies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <Link
                    key={company.id}
                    href={`/private-equity-placement-agents-list/${company.slug}`}
                    className="group relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-indigo-500/30 transition-all duration-300"
                  >
                    {/* Rank badge */}
                    {company.global_rank && company.global_rank <= 10 && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                        #{company.global_rank}
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-xl font-bold text-indigo-300 flex-shrink-0">
                        {company.logo_url ? (
                          <img
                            src={company.logo_url}
                            alt={company.display_name}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        ) : (
                          company.display_name.charAt(0)
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg group-hover:text-indigo-400 transition truncate">
                          {company.display_name}
                        </h3>
                        {company.headquarters && (
                          <p className="text-sm text-gray-500 truncate">{company.headquarters}</p>
                        )}
                      </div>
                    </div>

                    {company.description && (
                      <p className="text-sm text-gray-400 line-clamp-3 mb-4">
                        {company.description}
                      </p>
                    )}

                    {company.specializations && company.specializations.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {company.specializations.slice(0, 3).map((spec) => (
                          <span
                            key={spec}
                            className="px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                        {company.specializations.length > 3 && (
                          <span className="px-2 py-0.5 text-gray-500 text-xs">
                            +{company.specializations.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">No agents found</h3>
                <p className="text-gray-400 mb-6">
                  We're still building our database for {config.name}.
                </p>
                <Link
                  href="/private-equity-placement-agents-list"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
                >
                  View All Agents
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Explore More Regions</h2>
            <p className="text-gray-400 mb-8">
              Discover top placement agents across all major markets worldwide.
            </p>
            <Link
              href="/private-equity-placement-agents-list"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
            >
              Browse Full Directory
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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
