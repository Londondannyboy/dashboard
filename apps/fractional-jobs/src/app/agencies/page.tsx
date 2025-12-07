import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional Recruitment Agencies UK | Find Specialist Agencies | Fractional Quest',
  description: 'Connect with the best fractional recruitment agencies in the UK. Specialist agencies for Fractional CFO, CMO, CTO and executive placements in London and nationwide.',
  keywords: 'fractional recruitment agencies, fractional recruitment UK, fractional executive recruiters, fractional CFO recruitment, fractional CMO recruitment, interim executive agencies UK',
}

const agencies = [
  {
    id: 1,
    name: 'The Fractional Company',
    specialty: 'C-Suite Executives',
    description: 'Specialist fractional executive recruitment for CFO, CMO, CTO, and COO roles across tech and growth companies.',
    locations: ['London', 'Manchester'],
    founded: 2019,
    placements: '200+',
    features: ['FinTech Focus', 'Equity Roles', 'Retained Search'],
  },
  {
    id: 2,
    name: 'Portfolio Executives',
    specialty: 'Finance & Operations',
    description: 'Expert placement of Fractional CFOs and COOs for private equity-backed businesses and scale-ups.',
    locations: ['London', 'Birmingham'],
    founded: 2017,
    placements: '350+',
    features: ['PE/VC Network', 'Due Diligence Support', 'Board Advisory'],
  },
  {
    id: 3,
    name: 'Exec Capital',
    specialty: 'Technology Leadership',
    description: 'Connecting elite Fractional CTOs and technology leaders with ambitious tech companies across the UK.',
    locations: ['London', 'Remote UK'],
    founded: 2020,
    placements: '150+',
    features: ['Tech Specialists', 'CTO Network', 'Startup Focus'],
  },
  {
    id: 4,
    name: 'Interim Partners',
    specialty: 'All Industries',
    description: 'Full-service fractional and interim executive recruitment across all functions and industries.',
    locations: ['London', 'Manchester', 'Edinburgh'],
    founded: 2012,
    placements: '500+',
    features: ['Multi-Sector', 'Rapid Placement', 'Contract Support'],
  },
  {
    id: 5,
    name: 'Marketing Leaders',
    specialty: 'Marketing & Growth',
    description: 'Dedicated fractional CMO and marketing leadership recruitment for brands and digital businesses.',
    locations: ['London'],
    founded: 2018,
    placements: '180+',
    features: ['D2C Brands', 'Performance Marketing', 'Brand Strategy'],
  },
  {
    id: 6,
    name: 'People Partners',
    specialty: 'HR & People',
    description: 'Specialist recruitment for Fractional HR Directors and People Leaders across all sectors.',
    locations: ['London', 'Bristol'],
    founded: 2021,
    placements: '100+',
    features: ['Culture Focus', 'Scale-ups', 'HRIS Implementation'],
  },
  {
    id: 7,
    name: 'Revenue Leaders',
    specialty: 'Sales & Revenue',
    description: 'Expert placement of Fractional Sales Directors and CROs for B2B and enterprise sales teams.',
    locations: ['London', 'Remote UK'],
    founded: 2019,
    placements: '120+',
    features: ['SaaS Focus', 'Enterprise Sales', 'RevOps'],
  },
  {
    id: 8,
    name: 'Boardroom Talent',
    specialty: 'Board & Advisory',
    description: 'Executive search for fractional board members, NEDs, and strategic advisors.',
    locations: ['London'],
    founded: 2015,
    placements: '400+',
    features: ['NED Roles', 'Advisory', 'Governance'],
  },
]

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-violet-900">Fractional</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-gray-700 hover:text-violet-900 font-medium">All Jobs</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-violet-900 font-medium">Agencies</Link>
              <Link href="/articles" className="text-gray-700 hover:text-violet-900 font-medium">Articles</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Jobs
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="hero-gradient py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Fractional Recruitment Agencies UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto">
              Connect with specialist recruitment agencies that focus on fractional executive placements.
              Find the right agency for your fractional career.
            </p>
          </div>
        </section>

        {/* Agency Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{agencies.length}</span> fractional recruitment agencies
              </p>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm">
                <option>All Specialties</option>
                <option>Finance & Operations</option>
                <option>Technology Leadership</option>
                <option>Marketing & Growth</option>
                <option>HR & People</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {agencies.map((agency) => (
                <div key={agency.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-violet-300 hover:shadow-lg transition">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center text-violet-700 font-black text-xl shrink-0">
                      {agency.name.charAt(0)}
                    </div>
                    <div>
                      <h2 className="font-bold text-xl text-gray-900">{agency.name}</h2>
                      <p className="text-violet-700 font-medium">{agency.specialty}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{agency.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agency.features.map((feature) => (
                      <span key={feature} className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Founded</p>
                      <p className="font-semibold text-gray-900">{agency.founded}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Placements</p>
                      <p className="font-semibold text-gray-900">{agency.placements}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Locations</p>
                      <p className="font-semibold text-gray-900">{agency.locations[0]}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 rounded-lg transition">
                      Contact Agency
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Working with Fractional Recruitment Agencies in the UK
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional recruitment agencies</strong> specialise in matching experienced executives with
                companies seeking part-time leadership. Unlike traditional recruiters, these agencies understand
                the unique dynamics of fractional work and can help you build a portfolio career.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                How Fractional Agencies Work
              </h3>
              <p className="mb-4">
                Most <strong>UK fractional recruitment agencies</strong> work on a retained or contingency basis,
                connecting you with companies that need specific expertise. They handle initial screening, contract
                negotiation, and often provide ongoing support throughout your engagement.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Choosing the Right Agency
              </h3>
              <p className="mb-4">
                Select an agency that specialises in your function. <strong>Fractional CFO recruitment</strong>
                agencies have different networks than <strong>Fractional CMO recruiters</strong>. Consider agencies
                with experience in your target industries and company stages.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">Fractional</span>
              <span className="text-xl font-black text-amber-400">Quest</span>
            </Link>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Fractional Quest. Fractional Recruitment Agencies UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
