import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

interface Company {
  id: number
  name: string
  display_name: string | null
  slug: string
  description: string | null
  overview: string | null
  logo_url: string | null
  headquarters: string | null
  primary_country: string | null
  primary_region: string | null
  specializations: string[] | null
  geographic_focus: string[] | null
  global_rank: number | null
  founded_year: number | null
  employee_count: number | null
  capital_raised_total: number | null
  funds_served: number | null
  phone: string | null
  email: string | null
  key_facts: Record<string, string> | null
}

async function getCompany(slug: string): Promise<Company | null> {
  try {
    const companies = await sql`
      SELECT
        id, name, display_name, slug, description, overview, logo_url,
        headquarters, primary_country, primary_region, specializations,
        geographic_focus, global_rank, founded_year, employee_count,
        capital_raised_total, funds_served, phone, email, key_facts
      FROM companies
      WHERE slug = ${slug}
        AND status = 'published'
        AND company_type = 'placement_agent'
      LIMIT 1
    `
    return companies[0] as Company || null
  } catch (error) {
    console.error('Error fetching company:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const company = await getCompany(slug)

  if (!company) {
    return { title: 'Company Not Found | Placement Quest' }
  }

  const displayName = company.display_name || company.name
  return {
    title: `${displayName} | Private Equity Placement Agent | Placement Quest`,
    description: company.description || `${displayName} is a private equity placement agent. Learn more about their services, track record, and expertise.`,
  }
}

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1)}B`
  }
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(0)}M`
  }
  return `$${amount.toLocaleString()}`
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompany(slug)

  if (!company) {
    notFound()
  }

  const displayName = company.display_name || company.name

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
        {/* Hero Section */}
        <section className="py-12 px-6 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/directory"
              className="text-sm text-emerald-400 hover:text-emerald-300 mb-6 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Directory
            </Link>

            <div className="flex items-start gap-6 mt-4">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                {company.logo_url ? (
                  <img
                    src={company.logo_url}
                    alt={displayName}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <span className="text-3xl font-black text-emerald-400/50">
                    {displayName.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-black">{displayName}</h1>
                  {company.global_rank && (
                    <span className="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full font-bold">
                      #{company.global_rank} Global
                    </span>
                  )}
                </div>

                <p className="text-gray-400">
                  {company.headquarters && <span>{company.headquarters}</span>}
                  {company.headquarters && company.founded_year && <span className="mx-2">•</span>}
                  {company.founded_year && <span>Est. {company.founded_year}</span>}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        {(company.capital_raised_total || company.funds_served || company.employee_count) && (
          <section className="py-8 px-6 border-b border-white/10 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {company.capital_raised_total && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Capital Raised</p>
                    <p className="text-2xl font-bold text-emerald-400">
                      {formatCurrency(company.capital_raised_total)}
                    </p>
                  </div>
                )}
                {company.funds_served && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Funds Served</p>
                    <p className="text-2xl font-bold">{company.funds_served}</p>
                  </div>
                )}
                {company.employee_count && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Employees</p>
                    <p className="text-2xl font-bold">{company.employee_count}+</p>
                  </div>
                )}
                {company.founded_year && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Years Active</p>
                    <p className="text-2xl font-bold">{new Date().getFullYear() - company.founded_year}+</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Left Column - Overview */}
              <div className="md:col-span-2 space-y-8">
                {(company.overview || company.description) && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Overview</h2>
                    <div className="prose prose-invert prose-gray max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                        {company.overview || company.description}
                      </p>
                    </div>
                  </div>
                )}

                {company.specializations && company.specializations.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Specializations</h2>
                    <div className="flex flex-wrap gap-2">
                      {company.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-400"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {company.geographic_focus && company.geographic_focus.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Geographic Focus</h2>
                    <div className="flex flex-wrap gap-2">
                      {company.geographic_focus.map((region, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                        >
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Quick Info */}
              <div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sticky top-24">
                  <h3 className="font-bold mb-4">Quick Info</h3>
                  <dl className="space-y-4 text-sm">
                    {company.primary_region && (
                      <div>
                        <dt className="text-gray-500">Region</dt>
                        <dd className="text-white">{company.primary_region}</dd>
                      </div>
                    )}
                    {company.primary_country && (
                      <div>
                        <dt className="text-gray-500">Country</dt>
                        <dd className="text-white">{company.primary_country}</dd>
                      </div>
                    )}
                    {company.headquarters && (
                      <div>
                        <dt className="text-gray-500">Headquarters</dt>
                        <dd className="text-white">{company.headquarters}</dd>
                      </div>
                    )}
                    {company.founded_year && (
                      <div>
                        <dt className="text-gray-500">Founded</dt>
                        <dd className="text-white">{company.founded_year}</dd>
                      </div>
                    )}
                  </dl>

                  {(company.email || company.phone) && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="font-bold mb-3">Contact</h4>
                      {company.email && (
                        <a
                          href={`mailto:${company.email}`}
                          className="block text-emerald-400 hover:text-emerald-300 text-sm mb-2"
                        >
                          {company.email}
                        </a>
                      )}
                      {company.phone && (
                        <a
                          href={`tel:${company.phone}`}
                          className="block text-gray-400 hover:text-white text-sm"
                        >
                          {company.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
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
