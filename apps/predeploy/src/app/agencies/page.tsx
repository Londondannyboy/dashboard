import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Forward Deployed Engineer Recruitment Agencies Directory UK | FDE Recruiters',
  description: 'Comprehensive directory of leading forward deployed engineer recruitment agencies in the UK. Find specialist recruiters for FDE positions at Palantir, Scale AI, and top tech companies.',
  keywords: 'forward deployed engineer recruitment agencies, FDE recruiters, forward deployed engineer jobs UK, technical recruitment agencies London',
}

async function getAgencies() {
  const sql = neon(process.env.DATABASE_URL!)

  const companies = await sql`
    SELECT
      id,
      name,
      slug,
      company_type,
      description,
      headquarters,
      logo_url,
      specializations,
      global_rank,
      created_at
    FROM companies
    WHERE app = 'predeploy'
      AND status = 'published'
    ORDER BY
      CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
      global_rank ASC NULLS LAST,
      name ASC
  `

  return companies
}

export default async function AgenciesPage() {
  const companies = await getAgencies()

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

      {/* Page Header */}
      <div className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Forward Deployed Engineer Recruitment Agencies
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl">
            Comprehensive directory of leading recruitment agencies specialising in Forward Deployed Engineer and FDE positions across the UK.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-600">
              <span className="font-bold text-gray-900">{companies.length}</span> specialist agencies listed
            </p>
            <div className="flex gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-violet-100 text-violet-800">
                Forward Deployed Engineer
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                Solutions Engineer
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Technical Recruitment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Agencies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {companies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No agencies found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company: any) => (
              <Link
                key={company.id}
                href={`/agencies/${company.slug}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 block border border-gray-200"
              >
                {/* Company Logo */}
                {company.logo_url && (
                  <div className="mb-4 h-12 flex items-center">
                    <img
                      src={company.logo_url}
                      alt={`${company.name} logo`}
                      className="h-10 w-auto"
                    />
                  </div>
                )}

                {/* Company Name & Rank */}
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-900 flex-1">
                    {company.name}
                  </h2>
                  {company.global_rank && (
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-100 text-violet-800">
                      #{company.global_rank}
                    </span>
                  )}
                </div>

                {/* Location */}
                {company.headquarters && company.headquarters !== 'Unavailable from provided context' && (
                  <div className="text-sm text-gray-600 mb-3">
                    {company.headquarters}
                  </div>
                )}

                {/* Description */}
                {company.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {company.description}
                  </p>
                )}

                {/* Specializations */}
                {company.specializations && company.specializations.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {company.specializations.slice(0, 3).map((spec: string) => (
                      <span key={spec} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                        {spec}
                      </span>
                    ))}
                    {company.specializations.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-gray-500">
                        +{company.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Finding the Right Forward Deployed Engineer Recruitment Agency
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Choosing the right <strong>forward deployed engineer recruitment agency</strong> is crucial for both candidates
              and hiring organisations. The best agencies have deep networks in the tech industry and
              understand the unique requirements of FDE roles.
            </p>
            <p className="mb-4">
              When selecting an agency, consider their specialisation (FDE, Solutions Engineering, Technical Sales),
              their client base (enterprise software, defence tech, AI companies), and their track record placing
              candidates at companies like Palantir, Scale AI, and Anduril.
            </p>
            <p>
              Whether you&apos;re seeking your first Forward Deployed Engineer role or looking to hire exceptional FDE talent,
              the agencies in our directory represent the best of UK&apos;s technical recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Predeploy Quest</h3>
              <p className="text-gray-400 text-sm">Your source for Forward Deployed Engineer recruitment insights and agency directory.</p>
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
