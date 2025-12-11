import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CFO Roles UK | Fractional CFO Jobs & Opportunities | Fractional Quest',
  description: 'Find fractional CFO roles in the UK. Browse Fractional CFO jobs, opportunities and positions in London and across the UK. Part-time CFO roles for experienced finance leaders.',
  keywords: 'fractional cfo roles, fractional cfo jobs, fractional cfo opportunities, fractional cfo uk, part-time cfo, interim cfo uk, fractional finance director, fractional chief financial officer',
}

interface HardcodedJob {
  id: number
  title: string
  company: string
  location: string
  type: string
  commitment: string
  rate: string
  currency: string
  period: string
  badges: string[]
  description: string
  postedDays: number
}

const cfoJobs_HARDCODED: HardcodedJob[] = [
  {
    id: 1,
    title: 'Fractional CFO',
    company: 'Tech Startup (Series A)',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '900 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'Equity Option'],
    description: 'Fast-growing SaaS startup seeking a Fractional CFO to lead financial strategy, Series B preparation, investor relations, and board reporting.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional CFO',
    company: 'E-commerce Scale-up',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'E-commerce'],
    description: 'Growing e-commerce brand seeking a Fractional CFO to manage cash flow, financial planning, and prepare for potential acquisition.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional CFO',
    company: 'FinTech Company',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '1,000 - 1,400',
    currency: 'GBP',
    period: 'day',
    badges: ['FinTech', 'Series B'],
    description: 'FinTech company seeking a Fractional CFO to lead financial operations, regulatory compliance, and support international expansion.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional CFO',
    company: 'Professional Services Firm',
    location: 'Birmingham, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '750 - 950',
    currency: 'GBP',
    period: 'day',
    badges: ['Part-Time', 'Midlands'],
    description: 'Established professional services firm seeking a Fractional CFO to improve financial processes and support partner buyout.',
    postedDays: 4,
  },
  {
    id: 5,
    title: 'Fractional CFO',
    company: 'HealthTech Startup',
    location: 'London, UK',
    type: 'Remote / Hybrid',
    commitment: '2 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['HealthTech', 'Remote'],
    description: 'HealthTech startup seeking a Fractional CFO to lead fundraising, financial modelling, and establish finance function.',
    postedDays: 2,
  },
  {
    id: 6,
    title: 'Fractional CFO',
    company: 'PropTech Scale-up',
    location: 'Leeds, UK',
    type: 'Hybrid',
    commitment: '2 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['PropTech', 'Yorkshire'],
    description: 'PropTech company seeking a Fractional CFO to manage investor reporting, financial planning, and support Series A close.',
    postedDays: 5,
  },
]

const cfoResponsibilities = [
  {
    icon: '📊',
    title: 'Financial Strategy',
    description: 'Develop and execute financial strategy aligned with business goals and growth plans.',
  },
  {
    icon: '💰',
    title: 'Fundraising & Investors',
    description: 'Lead fundraising rounds, manage investor relations, and prepare board materials.',
  },
  {
    icon: '📈',
    title: 'Financial Planning',
    description: 'Build financial models, forecasts, budgets, and manage cash flow planning.',
  },
  {
    icon: '📋',
    title: 'Reporting & Compliance',
    description: 'Establish financial reporting, ensure compliance, and manage audits.',
  },
  {
    icon: '⚙️',
    title: 'Finance Operations',
    description: 'Build finance function, implement systems, and develop finance team.',
  },
  {
    icon: '🎯',
    title: 'Strategic Advice',
    description: 'Provide strategic counsel to CEO and board on financial decisions and M&A.',
  },
]

export default function CFOPage() {
  // Using hardcoded data for now - will be migrated to Neon queries
  const cfoJobs = cfoJobs_HARDCODED

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
              <Link href="/fractional-jobs" className="text-gray-700 hover:text-violet-900 font-medium">All Jobs</Link>
              <Link href="/fractional-jobs-remote" className="text-gray-700 hover:text-violet-900 font-medium">Remote</Link>
              <Link href="/fractional-jobs-london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/fractional-jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2 rounded-lg transition">
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
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Finance Leadership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Fractional CFO Roles UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find Fractional CFO jobs and opportunities across the UK. Lead financial strategy,
              fundraising, and finance operations on a part-time basis with growing companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{cfoJobs.length * 8}+</span>
                <span className="block text-sm">CFO Roles</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£1,050</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">2-3</span>
                <span className="block text-sm">Days/Week</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Does a Fractional CFO Do? */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              What Does a Fractional CFO Do?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A Fractional CFO provides strategic financial leadership on a part-time basis,
              typically 2-3 days per week. Common responsibilities include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {cfoResponsibilities.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CFO Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Fractional CFO Opportunities
              </h2>
              <Link href="/fractional-cfo-jobs" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all CFO roles &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {cfoJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 font-black text-xl shrink-0">
                        CFO
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-emerald-100 text-emerald-800">
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
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{job.location}</p>
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
              Fractional CFO Roles: Your Guide to Part-Time Finance Leadership
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional CFO roles</strong> have become one of the most sought-after executive positions
                in the UK. Companies from early-stage startups to established SMEs are hiring <strong>Fractional
                CFOs</strong> to provide senior financial leadership without the cost of a full-time hire.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Who Hires Fractional CFOs?
              </h3>
              <p className="mb-4">
                <strong>Fractional CFO opportunities</strong> are most common in venture-backed startups and
                scale-ups. These companies need experienced finance leadership for fundraising, investor relations,
                and building financial infrastructure—but aren&apos;t ready for a £200k+ full-time CFO. Professional
                services firms, family businesses, and PE-backed companies also increasingly hire fractional CFOs.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional CFO Salary UK
              </h3>
              <p className="mb-4">
                <strong>Fractional CFO roles</strong> in the UK typically pay day rates between £800-£1,400,
                with London and FinTech positions commanding the highest rates. Working with 2-3 clients at
                2 days per week each, a Fractional CFO can earn £200,000-£300,000+ annually while maintaining
                flexibility and variety.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Skills Required for Fractional CFO Roles
              </h3>
              <p className="mb-4">
                Successful <strong>Fractional CFOs</strong> typically have 15+ years of finance experience,
                including time as a Finance Director or CFO. Key skills include fundraising experience, financial
                modelling, investor relations, and the ability to build finance functions from scratch. Industry
                expertise in tech, e-commerce, or professional services is highly valued.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Fractional CFO Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse the latest Fractional CFO opportunities across the UK.
            </p>
            <Link href="/fractional-cfo-jobs" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse CFO Roles
            </Link>
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
              &copy; 2025 Fractional Quest. Fractional CFO Roles UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
