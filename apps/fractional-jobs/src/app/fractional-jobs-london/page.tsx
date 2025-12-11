import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional Jobs London | Find Fractional Executive Roles in London | Fractional Quest',
  description: 'Discover fractional jobs in London. Browse Fractional CFO, CMO, CTO and executive roles in London. The UK\'s largest market for fractional executive opportunities.',
  keywords: 'fractional jobs London, fractional CFO London, fractional CMO London, fractional CTO London, London fractional executive, part-time executive London, interim executive London',
}

const londonJobs = [
  {
    id: 1,
    title: 'Fractional CFO',
    company: 'Tech Startup (Series A)',
    location: 'London, UK',
    type: 'Remote / Hybrid',
    commitment: '2-3 days/week',
    rate: '800 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'Equity Option'],
    description: 'Seeking an experienced Fractional CFO to lead financial strategy, fundraising preparation, and board reporting for a fast-growing SaaS company.',
    postedDays: 2,
    area: 'City of London',
  },
  {
    id: 3,
    title: 'Fractional CTO',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '900 - 1,400',
    currency: 'GBP',
    period: 'day',
    badges: ['FinTech', 'Hybrid'],
    description: 'FinTech startup seeking a Fractional CTO to lead technical architecture, team building, and product development.',
    postedDays: 1,
    area: 'Shoreditch',
  },
  {
    id: 5,
    title: 'Fractional COO',
    company: 'HealthTech Scale-up',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['HealthTech', 'Growth'],
    description: 'Fast-growing HealthTech company seeking a Fractional COO to streamline operations and support international expansion.',
    postedDays: 4,
    area: 'Kings Cross',
  },
  {
    id: 7,
    title: 'Fractional CMO',
    company: 'Consumer Brand',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['D2C', 'Brand'],
    description: 'Direct-to-consumer brand seeking a Fractional CMO to lead brand strategy, performance marketing, and team development.',
    postedDays: 2,
    area: 'Soho',
  },
  {
    id: 9,
    title: 'Fractional CFO',
    company: 'PropTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2 days/week',
    rate: '750 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['PropTech', 'Series B'],
    description: 'PropTech company seeking a Fractional CFO to lead financial planning, Series B preparation, and investor relations.',
    postedDays: 3,
    area: 'Canary Wharf',
  },
  {
    id: 10,
    title: 'Fractional HR Director',
    company: 'Creative Agency',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '650 - 850',
    currency: 'GBP',
    period: 'day',
    badges: ['Creative', 'Culture'],
    description: 'Award-winning creative agency seeking a Fractional HR Director to build people strategy and develop company culture.',
    postedDays: 5,
    area: 'Clerkenwell',
  },
]

const londonAreas = [
  { name: 'City of London', jobs: 28 },
  { name: 'Shoreditch & Tech City', jobs: 35 },
  { name: 'Canary Wharf', jobs: 18 },
  { name: 'Kings Cross', jobs: 22 },
  { name: 'Soho & West End', jobs: 15 },
  { name: 'South Bank', jobs: 12 },
]

export default function LondonPage() {
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
              <Link href="/fractional-jobs-london" className="text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
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
              Fractional Jobs London
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              London is the UK&apos;s largest market for fractional executive opportunities.
              Browse CFO, CMO, CTO and leadership roles across the capital.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">85+</span>
                <span className="block text-sm">London Jobs</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£1,050</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">60%</span>
                <span className="block text-sm">Hybrid Roles</span>
              </div>
            </div>
          </div>
        </section>

        {/* London Areas */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Browse by London Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {londonAreas.map((area) => (
                <Link
                  key={area.name}
                  href={`/london?area=${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:border-violet-300 hover:shadow-md transition text-center"
                >
                  <p className="font-semibold text-gray-900">{area.name}</p>
                  <p className="text-sm text-violet-700">{area.jobs} jobs</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Fractional Jobs in London
              </h2>
              <Link href="/jobs?location=london" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all London jobs &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {londonJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center text-violet-700 font-black text-xl shrink-0">
                        {job.title.split(' ')[1]?.charAt(0) || 'F'}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.area} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-violet-100 text-violet-800">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4">{job.description}</p>

                  <div className="grid md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Commitment</p>
                      <p className="font-semibold text-gray-900">{job.commitment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Day Rate</p>
                      <p className="font-semibold text-gray-900">{job.currency} {job.rate}/{job.period}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-semibold text-gray-900">{job.area}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Posted</p>
                      <p className="font-semibold text-gray-900">{job.postedDays} days ago</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      href={`/jobs/${job.id}`}
                      className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                      View Details
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg transition">
                      Save Job
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
              Fractional Jobs London: Your Guide to Executive Opportunities in the Capital
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>London</strong> is the epicentre of the UK&apos;s <strong>fractional jobs</strong> market, offering
                the highest concentration of fractional executive opportunities in the country. From FinTech startups
                in Shoreditch to established firms in the City, London-based companies increasingly rely on
                <strong>fractional CFOs, CMOs, and CTOs</strong> to drive growth.
              </p>
              <p className="mb-4">
                <strong>Fractional jobs in London</strong> typically command day rates of £800-£1,400, reflecting
                the capital&apos;s premium market rates. Most roles offer hybrid working arrangements, with 1-2 days
                on-site in London and the remainder remote.
              </p>
              <p>
                Whether you&apos;re seeking a <strong>Fractional CFO role in Canary Wharf</strong> or a
                <strong>Fractional CTO position in Tech City</strong>, London offers unparalleled opportunities
                for experienced executives looking to build a fractional career.
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
              &copy; 2025 Fractional Quest. Fractional Jobs London.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
