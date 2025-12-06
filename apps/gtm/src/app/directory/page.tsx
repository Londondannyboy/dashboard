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
}

async function getCompanies(): Promise<Company[]> {
  try {
    const companies = await sql`
      SELECT
        id, name, slug, description, logo_url, headquarters,
        specializations, global_rank
      FROM companies
      WHERE status = 'published'
        AND company_type = 'gtm_provider'
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
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        signInGradient="from-orange-500 to-amber-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Providers', highlight: true },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">GTM Providers</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Discover top go-to-market agencies, consultants, and service providers to help launch your product.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-6 border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg font-medium text-sm">
                All Providers
              </button>
              <button className="px-4 py-2 bg-white/[0.03] border border-white/10 text-gray-400 rounded-lg font-medium text-sm hover:bg-white/[0.05] transition">
                GTM Agencies
              </button>
              <button className="px-4 py-2 bg-white/[0.03] border border-white/10 text-gray-400 rounded-lg font-medium text-sm hover:bg-white/[0.05] transition">
                Sales Consultants
              </button>
              <button className="px-4 py-2 bg-white/[0.03] border border-white/10 text-gray-400 rounded-lg font-medium text-sm hover:bg-white/[0.05] transition">
                Marketing Agencies
              </button>
              <button className="px-4 py-2 bg-white/[0.03] border border-white/10 text-gray-400 rounded-lg font-medium text-sm hover:bg-white/[0.05] transition">
                Product Marketing
              </button>
              <button className="px-4 py-2 bg-white/[0.03] border border-white/10 text-gray-400 rounded-lg font-medium text-sm hover:bg-white/[0.05] transition">
                Growth Agencies
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {companies.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">GTM Provider Directory Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                  We're building the most comprehensive directory of GTM agencies and consultants.
                  Want to be listed?
                </p>
                <Link href="/contact" className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition">
                  Submit Your Agency
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/directory/${company.slug}`}
                    className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition group"
                  >
                    <div className="h-24 bg-gradient-to-br from-orange-600/20 to-amber-600/20 flex items-center justify-center relative">
                      {company.logo_url ? (
                        <img
                          src={company.logo_url}
                          alt={company.name}
                          className="h-12 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-4xl font-black text-orange-400/30">
                          {company.name.charAt(0)}
                        </span>
                      )}
                      {company.global_rank && (
                        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded font-bold">
                          #{company.global_rank}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-orange-400 transition">
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
                          {company.specializations.slice(0, 3).map((spec, i) => (
                            <span key={i} className="px-2 py-1 bg-orange-500/10 text-orange-300 rounded text-xs">
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
        brandName="GTM"
        brandAccent="Quest"
        brandGradient="from-orange-400 to-amber-500"
        brandDescription="Your expert GTM agency partner"
        productLinks={[
          { label: 'GTM Planner', href: '/' },
          { label: 'Providers', href: '/directory' },
          { label: 'News', href: '/news' },
          { label: 'Network', href: '/ecosystem' },
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
