import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import Link from 'next/link'

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
}

async function getCompanies(): Promise<Company[]> {
  try {
    const companies = await sql`
      SELECT
        id, name, slug, description, logo_url, headquarters,
        specializations, global_rank, featured_asset_url
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
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">VC & PE Firms Directory</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Comprehensive directory of {companies.length}+ top venture capital and private equity firms worldwide.
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
            {companies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400">Loading companies...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/private-equity-placement-agents-list/${company.slug}`}
                    className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 transition group"
                  >
                    <div className="h-24 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center relative">
                      {company.logo_url ? (
                        <img
                          src={company.logo_url}
                          alt={company.name}
                          className="h-12 w-auto object-contain"
                        />
                      ) : company.featured_asset_url ? (
                        <img
                          src={company.featured_asset_url}
                          alt={company.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl font-black text-indigo-400/30">
                          {company.name.charAt(0)}
                        </span>
                      )}
                      {company.global_rank && (
                        <span className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-0.5 rounded font-bold">
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
            )}
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
