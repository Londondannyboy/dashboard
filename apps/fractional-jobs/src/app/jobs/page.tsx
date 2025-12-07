import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional Jobs UK | Browse Fractional Executive Roles | Fractional Quest',
  description: 'Browse all fractional jobs in the UK. Find Fractional CFO, CMO, CTO and executive roles in London, Manchester, Birmingham and remote. Updated daily.',
  keywords: 'fractional jobs, fractional jobs UK, fractional executive roles, fractional CFO jobs, fractional CMO jobs, fractional CTO jobs, UK executive jobs',
}

const allJobs = [
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
    industry: 'Technology',
  },
  {
    id: 2,
    title: 'Fractional CMO',
    company: 'E-commerce Scale-up',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'UK-Wide'],
    description: 'Leading e-commerce brand seeking a Fractional CMO to drive digital marketing strategy and customer acquisition.',
    postedDays: 3,
    industry: 'E-commerce',
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
    badges: ['London', 'FinTech'],
    description: 'FinTech startup seeking a Fractional CTO to lead technical architecture, team building, and product development.',
    postedDays: 1,
    industry: 'FinTech',
  },
  {
    id: 4,
    title: 'Fractional HR Director',
    company: 'Professional Services Firm',
    location: 'Birmingham, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '600 - 800',
    currency: 'GBP',
    period: 'day',
    badges: ['Part-Time', 'Midlands'],
    description: 'Growing professional services firm seeking a Fractional HR Director to establish people processes and culture.',
    postedDays: 5,
    industry: 'Professional Services',
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
    badges: ['London', 'HealthTech'],
    description: 'Fast-growing HealthTech company seeking a Fractional COO to streamline operations and support international expansion.',
    postedDays: 4,
    industry: 'HealthTech',
  },
  {
    id: 6,
    title: 'Fractional CFO',
    company: 'SaaS Company',
    location: 'Leeds, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '750 - 950',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'SaaS'],
    description: 'B2B SaaS company seeking a Fractional CFO to manage financial planning, investor relations, and prepare for Series B.',
    postedDays: 6,
    industry: 'Technology',
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
    badges: ['London', 'D2C'],
    description: 'Direct-to-consumer brand seeking a Fractional CMO to lead brand strategy, performance marketing, and team development.',
    postedDays: 2,
    industry: 'Consumer',
  },
  {
    id: 8,
    title: 'Fractional Sales Director',
    company: 'B2B Tech Company',
    location: 'Edinburgh, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'Scotland'],
    description: 'B2B technology company seeking a Fractional Sales Director to build sales processes and develop the enterprise sales team.',
    postedDays: 7,
    industry: 'Technology',
  },
]

const roleFilters = ['All Roles', 'Fractional CFO', 'Fractional CMO', 'Fractional CTO', 'Fractional COO', 'Fractional HR Director', 'Fractional Sales Director']
const locationFilters = ['All UK', 'London', 'Manchester', 'Birmingham', 'Leeds', 'Edinburgh', 'Remote Only']
const commitmentFilters = ['Any Commitment', '1 day/week', '2 days/week', '2-3 days/week', '3+ days/week']

export default function JobsPage() {
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
              <Link href="/jobs" className="text-violet-900 font-medium">All Jobs</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
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
        {/* Page Header */}
        <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Fractional Jobs UK
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse {allJobs.length}+ fractional executive opportunities across the UK
            </p>

            {/* Filters */}
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Role</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white">
                  {roleFilters.map((filter) => (
                    <option key={filter}>{filter}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white">
                  {locationFilters.map((filter) => (
                    <option key={filter}>{filter}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Commitment</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white">
                  {commitmentFilters.map((filter) => (
                    <option key={filter}>{filter}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 px-6 rounded-lg transition">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{allJobs.length}</span> fractional jobs
              </p>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm">
                <option>Most Recent</option>
                <option>Highest Rate</option>
                <option>Lowest Commitment</option>
              </select>
            </div>

            <div className="space-y-6">
              {allJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center text-violet-700 font-black text-xl shrink-0">
                        {job.title.split(' ')[1]?.charAt(0) || 'F'}
                      </div>
                      <div>
                        <h2 className="font-bold text-xl text-gray-900">{job.title}</h2>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className={`text-xs font-semibold px-2 py-1 rounded ${
                          badge === 'Featured' ? 'bg-amber-100 text-amber-800' :
                          badge === 'Remote' || badge === 'UK-Wide' ? 'bg-green-100 text-green-800' :
                          badge === 'London' ? 'bg-violet-100 text-violet-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>{badge}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4">{job.description}</p>

                  <div className="grid md:grid-cols-5 gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Commitment</p>
                      <p className="font-semibold text-gray-900">{job.commitment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Day Rate</p>
                      <p className="font-semibold text-gray-900">{job.currency} {job.rate}/{job.period}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Industry</p>
                      <p className="font-semibold text-gray-900">{job.industry}</p>
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

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 border border-violet-700 rounded-lg bg-violet-700 text-white">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
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
              &copy; 2025 Fractional Quest. Fractional Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
