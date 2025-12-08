import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getAgency(slug: string) {
  const sql = neon(process.env.DATABASE_URL!)

  const result = await sql`
    SELECT
      id,
      name,
      slug,
      company_type,
      description,
      founded_year,
      headquarters,
      logo_url,
      hero_asset_url,
      global_rank,
      specializations,
      capital_raised_total,
      funds_served,
      overview,
      key_facts,
      status,
      created_at,
      updated_at,
      geographic_focus,
      payload
    FROM companies
    WHERE slug = ${slug}
      AND app = 'predeploy'
    LIMIT 1
  `

  return result[0] || null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const agency = await getAgency(slug)

  if (!agency) {
    return {
      title: 'Agency Not Found | Predeploy Quest',
    }
  }

  return {
    title: `${agency.name} | Forward Deployed Engineer Recruitment Agency UK`,
    description: agency.description || `${agency.name} - Leading forward deployed engineer recruitment agency profile`,
    keywords: `${agency.name}, forward deployed engineer recruitment, FDE recruitment, ${agency.headquarters || 'UK'}`,
  }
}

export default async function AgencyPage({ params }: PageProps) {
  const { slug } = await params
  const agency = await getAgency(slug)

  if (!agency) {
    notFound()
  }

  // Parse key_facts if it's JSONB
  const keyFacts = typeof agency.key_facts === 'string'
    ? JSON.parse(agency.key_facts)
    : agency.key_facts

  // Parse payload for additional data
  const payload = typeof agency.payload === 'string'
    ? JSON.parse(agency.payload)
    : agency.payload

  const services = keyFacts?.services || []
  const achievements = keyFacts?.achievements || []
  const people = keyFacts?.people || []
  const websiteUrl = payload?.website_url || payload?.website || null
  const notableDeals = payload?.notable_deals || []
  const regionalRanks = payload?.regional_ranks || {}

  const anchorTexts = [
    "View all forward deployed engineer recruitment agencies",
    "Top FDE recruiters",
    "Best forward deployed engineer agencies UK",
    "Complete list of FDE recruiters",
    "Leading forward deployed engineer agencies"
  ]
  const anchorText = anchorTexts[Math.floor(Math.random() * anchorTexts.length)]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-violet-900">Predeploy</span>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 font-medium">Home</Link>
              <Link href="/articles" className="text-gray-700 hover:text-violet-600 font-medium">Articles</Link>
              <Link href="/agencies" className="text-violet-600 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/agencies" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Agencies
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Agency Profile */}
      <article className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Company Logo */}
                {agency.logo_url && (
                  <div className="mb-6">
                    <img
                      src={agency.logo_url}
                      alt={`${agency.name} logo`}
                      className="h-16 w-auto"
                    />
                  </div>
                )}

                {/* Company Name & Type */}
                <div className="mb-4">
                  <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                    Recruitment Agency
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                    {agency.name}
                  </h1>
                  {agency.description && (
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {agency.description}
                    </p>
                  )}
                </div>

                {/* Quick Facts */}
                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-6">
                  {agency.founded_year && (
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Founded:</span>
                      <span>{agency.founded_year}</span>
                    </div>
                  )}
                  {agency.headquarters && agency.headquarters !== 'Unavailable from provided context' && (
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Headquarters:</span>
                      <span>{agency.headquarters}</span>
                    </div>
                  )}
                  {websiteUrl && websiteUrl !== 'Unavailable from provided context' && (
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Website:</span>
                      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
                        {websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Ranking Badge */}
              {agency.global_rank && (
                <div className="ml-8">
                  <div className="bg-gradient-to-br from-violet-600 to-violet-800 text-white rounded-lg p-6 text-center min-w-[120px]">
                    <div className="text-3xl font-bold">#{agency.global_rank}</div>
                    <div className="text-sm mt-1 opacity-90">UK Rank</div>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview Section */}
              {agency.overview && (
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">{agency.overview}</p>
                  </div>
                </section>
              )}

              {/* Specializations Section */}
              {agency.specializations && agency.specializations.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    {agency.specializations.map((spec: string) => (
                      <span key={spec} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-violet-50 text-violet-700 border border-violet-200">
                        {spec}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Services Section */}
              {services.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Services</h2>
                  <ul className="space-y-3">
                    {services.map((service: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-violet-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Notable Placements Section */}
              {notableDeals && notableDeals.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notable Placements</h2>
                  <ul className="space-y-4">
                    {notableDeals.map((deal: any, index: number) => (
                      <li key={index} className="border-l-4 border-violet-600 pl-4 py-2">
                        <div className="text-gray-900 font-medium">{typeof deal === 'string' ? deal : deal.title || deal.deal_name}</div>
                        {typeof deal !== 'string' && deal.description && (
                          <div className="text-gray-600 text-sm mt-1">{deal.description}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Achievements Section */}
              {achievements.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Notable Achievements</h2>
                  <ul className="space-y-3">
                    {achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-violet-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">

              {/* Contact CTA */}
              {websiteUrl && websiteUrl !== 'Unavailable from provided context' && (
                <section className="bg-violet-600 rounded-lg shadow-sm p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Contact {agency.name}</h3>
                  <p className="text-violet-100 text-sm mb-4">
                    Visit their website to learn more about their services and current FDE opportunities.
                  </p>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-violet-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition"
                  >
                    Visit Website
                  </a>
                </section>
              )}

              {/* Geographic Focus */}
              {agency.geographic_focus && agency.geographic_focus.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Geographic Focus</h3>
                  <div className="space-y-2">
                    {agency.geographic_focus.map((region: string, index: number) => (
                      <div key={index} className="text-gray-700">{region}</div>
                    ))}
                  </div>
                </section>
              )}

              {/* Leadership Team */}
              {people.length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Leadership Team</h3>
                  <div className="space-y-3">
                    {people.map((person: any, index: number) => (
                      <div key={index}>
                        <div className="font-medium text-gray-900">{person.name}</div>
                        {person.title && <div className="text-sm text-gray-600">{person.title}</div>}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Regional Rankings */}
              {regionalRanks && Object.keys(regionalRanks).length > 0 && (
                <section className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Regional Rankings</h3>
                  <div className="space-y-3">
                    {Object.entries(regionalRanks).map(([region, rank]) => (
                      <div key={region} className="flex justify-between items-center">
                        <span className="text-gray-700">{region}</span>
                        <span className="font-bold text-violet-600">#{String(rank)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Back Link with SEO */}
          <div className="mt-12">
            <Link href="/agencies" className="inline-flex items-center text-violet-600 hover:text-violet-800 font-medium">
              &larr; {anchorText}
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Predeploy Quest</h3>
              <p className="text-gray-400 text-sm">Your source for Forward Deployed Engineer recruitment insights.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white">Articles</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white">Agencies Directory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/agencies" className="text-gray-400 hover:text-white">Top Recruitment Agencies</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white">Industry News</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Predeploy Quest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
