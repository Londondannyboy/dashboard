import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import { ZepGraph3D, ForceGraphLoader } from '@quest/ui/finance'
import Link from 'next/link'
import { marked } from 'marked'

interface Company {
  id: number
  name: string
  slug: string
  display_name: string
  description: string | null
  logo_url: string | null
  headquarters: string | null
  website: string | null
  payload: any
  updated_at: string | null
}

async function getCompany(slug: string): Promise<Company | null> {
  try {
    const companies = await sql`
      SELECT *
      FROM companies
      WHERE slug = ${slug}
      LIMIT 1
    `
    if (companies.length === 0) return null
    const company = companies[0] as any
    return {
      ...company,
      ...(company.payload || {}),
      display_name: company.display_name || company.payload?.display_name || company.name,
    }
  } catch (error) {
    console.error('Error fetching company:', error)
    return null
  }
}

function parseMarkdown(content: string): string {
  return marked.parse(content, { async: false }) as string
}

function extractTags(sections: any): { industries: string[], services: string[], locations: string[] } {
  const tags = { industries: [] as string[], services: [] as string[], locations: [] as string[] }
  if (!sections) return tags

  const content = JSON.stringify(sections).toLowerCase()

  if (content.includes('private equity')) tags.industries.push('Private Equity')
  if (content.includes('venture capital')) tags.industries.push('Venture Capital')
  if (content.includes('private credit')) tags.industries.push('Private Credit')
  if (content.includes('real estate') || content.includes('real assets')) tags.industries.push('Real Assets')
  if (content.includes('infrastructure')) tags.industries.push('Infrastructure')
  if (content.includes('fundraising')) tags.services.push('Fundraising')
  if (content.includes('advisory')) tags.services.push('Advisory')

  return {
    industries: [...new Set(tags.industries)].slice(0, 3),
    services: [...new Set(tags.services)].slice(0, 2),
    locations: tags.locations.slice(0, 2)
  }
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = await getCompany(slug)

  if (!company) {
    notFound()
  }

  const sections = company.payload?.profile_sections || {}
  const tags = extractTags(sections)
  const overviewSection = sections.overview || sections.about
  const lastUpdated = company.updated_at
    ? new Date(company.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : null

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <ForceGraphLoader />

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
        <section className="relative py-16 px-6">
          {company.payload?.featured_asset_url && (
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={company.payload.featured_asset_url}
                alt={company.display_name}
                className="w-full h-full object-cover opacity-10 blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 via-[#0a0a0f]/80 to-[#0a0a0f]" />
            </div>
          )}

          <div className="max-w-7xl mx-auto relative z-10">
            <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full mb-4">
              Placement Agent
            </span>

            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {company.display_name}
              </span>
              <span className="text-gray-500 font-normal ml-3">Placement Agent</span>
            </h1>

            {overviewSection && (
              <p className="text-xl text-gray-300 max-w-3xl mb-6">
                {overviewSection.content.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').split('.')[0]}.
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.industries.map(tag => (
                <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  {tag}
                </span>
              ))}
              {tags.services.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  {tag}
                </span>
              ))}
              {company.payload?.headquarters_city && (
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                  {company.payload.headquarters_city}
                </span>
              )}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-sm">
              {company.payload?.founded_year && (
                <div>
                  <span className="text-gray-500">Founded </span>
                  <span className="text-white font-semibold">{company.payload.founded_year}</span>
                </div>
              )}
              {company.payload?.employee_range && (
                <div>
                  <span className="text-gray-500">Employees </span>
                  <span className="text-white font-semibold">{company.payload.employee_range}</span>
                </div>
              )}
              {company.payload?.headquarters_city && (
                <div>
                  <span className="text-gray-500">Location </span>
                  <span className="text-white font-semibold">
                    {company.payload.headquarters_city}, {company.payload.headquarters_country}
                  </span>
                </div>
              )}
              {company.website && (
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                  Visit Website →
                </a>
              )}
            </div>
          </div>
        </section>

        {/* 3D Knowledge Graph */}
        <section className="py-12 px-6 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border-y border-emerald-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {company.display_name} Network
              </h2>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">
                3D Knowledge Graph
              </span>
            </div>

            <ZepGraph3D
              companyId={slug}
              companyName={company.name}
              height="500px"
            />
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {Object.entries(sections)
                  .filter(([key]) => key !== 'resources')
                  .map(([key, section]: [string, any]) => (
                    <div key={key} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {section.title?.charAt(0) || key.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">{section.title || key}</h2>
                          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1" />
                        </div>
                      </div>
                      <div
                        className="prose prose-invert prose-indigo max-w-none"
                        dangerouslySetInnerHTML={{ __html: parseMarkdown(section.content || '') }}
                      />
                    </div>
                  ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Info Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    Company Info
                  </h3>
                  <div className="space-y-4">
                    {company.payload?.industry && (
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Industry</div>
                        <div className="text-white font-medium">{company.payload.industry}</div>
                      </div>
                    )}
                    {company.payload?.founded_year && (
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Founded</div>
                        <div className="text-white font-medium">{company.payload.founded_year}</div>
                      </div>
                    )}
                    {company.payload?.employee_range && (
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Team Size</div>
                        <div className="text-white font-medium">{company.payload.employee_range}</div>
                      </div>
                    )}
                    {company.payload?.headquarters_city && (
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Headquarters</div>
                        <div className="text-white font-medium">
                          {company.payload.headquarters_city}, {company.payload.headquarters_country}
                        </div>
                      </div>
                    )}
                  </div>
                  {lastUpdated && (
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-400">Updated </span>
                      <span className="text-emerald-400 font-medium">{lastUpdated}</span>
                    </div>
                  )}
                </div>

                {/* Related Resources */}
                <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    More Resources
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/private-equity-placement-agents-list"
                      className="block p-3 bg-white/[0.03] rounded-lg hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm font-medium">All Placement Agents</span>
                      </div>
                    </Link>
                    <Link
                      href="/ecosystem"
                      className="block p-3 bg-white/[0.03] rounded-lg hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3" />
                        </svg>
                        <span className="text-sm font-medium">View Full Network</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Navigation */}
            <div className="mt-12">
              <Link
                href="/private-equity-placement-agents-list"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Placement Agents
              </Link>
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
