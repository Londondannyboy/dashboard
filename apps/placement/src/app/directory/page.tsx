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
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        signInGradient="from-emerald-500 to-teal-500"
        navItems={[
          { href: '/news', label: 'News' },
          { href: '/directory', label: 'Directory', highlight: true },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Mandate Directory</h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Track active fund mandates and placement agent activity across the market.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {companies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400">Loading mandates...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/directory/${company.slug}`}
                    className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition group"
                  >
                    <div className="h-24 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center relative">
                      {company.logo_url ? (
                        <img
                          src={company.logo_url}
                          alt={company.name}
                          className="h-12 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-4xl font-black text-emerald-400/30">
                          {company.name.charAt(0)}
                        </span>
                      )}
                      {company.global_rank && (
                        <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded font-bold">
                          #{company.global_rank}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-emerald-400 transition">
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
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Placement"
        brandAccent="Quest"
        brandGradient="from-emerald-400 to-teal-500"
        brandDescription="The insider guide to fund placements"
        productLinks={[
          { label: 'Mandates', href: '/directory' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/news' },
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
