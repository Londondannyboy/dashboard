import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CMO Jobs UK | Fractional CMO Roles & Opportunities | Fractional Quest',
  description: 'Find fractional CMO jobs in the UK. Browse Fractional CMO roles, marketing director positions in London and across the UK. Part-time CMO opportunities for marketing leaders.',
  keywords: 'fractional cmo jobs, fractional cmo roles, fractional cmo uk, fractional marketing director, part-time cmo, interim cmo uk, fractional chief marketing officer, fractional marketing jobs',
}

const cmoJobs = [
  {
    id: 1,
    title: 'Fractional CMO',
    company: 'D2C E-commerce Brand',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '800 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'D2C'],
    description: 'Fast-growing D2C brand seeking a Fractional CMO to lead brand strategy, performance marketing, and customer acquisition across digital channels.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional CMO',
    company: 'B2B SaaS Company',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '750 - 950',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'B2B SaaS'],
    description: 'B2B SaaS company seeking a Fractional CMO to develop go-to-market strategy, demand generation, and marketing team leadership.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional CMO',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '900 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['FinTech', 'Growth'],
    description: 'FinTech startup seeking a Fractional CMO to lead brand positioning, content strategy, and growth marketing initiatives.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional CMO',
    company: 'Health & Wellness Brand',
    location: 'Bristol, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Part-Time', 'Wellness'],
    description: 'Growing health and wellness brand seeking a Fractional CMO to lead influencer marketing, PR, and brand partnerships.',
    postedDays: 4,
  },
  {
    id: 5,
    title: 'Fractional CMO',
    company: 'EdTech Scale-up',
    location: 'London, UK',
    type: 'Remote / Hybrid',
    commitment: '2 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['EdTech', 'Remote'],
    description: 'EdTech company seeking a Fractional CMO to drive B2B2C marketing strategy, lead generation, and brand awareness.',
    postedDays: 2,
  },
  {
    id: 6,
    title: 'Fractional CMO',
    company: 'Professional Services Firm',
    location: 'Birmingham, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '700 - 850',
    currency: 'GBP',
    period: 'day',
    badges: ['Professional Services', 'Midlands'],
    description: 'Professional services firm seeking a Fractional CMO to modernise marketing, build digital presence, and generate leads.',
    postedDays: 5,
  },
]

const cmoResponsibilities = [
  {
    icon: '🎯',
    title: 'Marketing Strategy',
    description: 'Develop and execute comprehensive marketing strategy aligned with business objectives.',
  },
  {
    icon: '📱',
    title: 'Digital & Performance',
    description: 'Lead digital marketing, paid acquisition, SEO, and performance optimisation.',
  },
  {
    icon: '✨',
    title: 'Brand & Positioning',
    description: 'Define brand strategy, messaging, and market positioning for competitive advantage.',
  },
  {
    icon: '📈',
    title: 'Growth & Acquisition',
    description: 'Drive customer acquisition, conversion optimisation, and revenue growth.',
  },
  {
    icon: '👥',
    title: 'Team Leadership',
    description: 'Build and mentor marketing team, manage agencies, and develop capabilities.',
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Establish marketing analytics, reporting, and data-driven decision making.',
  },
]

export default function CMOPage() {
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
              <Link href="/remote" className="text-gray-700 hover:text-violet-900 font-medium">Remote</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
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
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              Marketing Leadership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Fractional CMO Jobs UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find Fractional CMO roles across the UK. Lead marketing strategy, brand development,
              and growth initiatives on a part-time basis with ambitious companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{cmoJobs.length * 6}+</span>
                <span className="block text-sm">CMO Roles</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£900</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">2-3</span>
                <span className="block text-sm">Days/Week</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Does a Fractional CMO Do? */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              What Does a Fractional CMO Do?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A Fractional CMO provides strategic marketing leadership on a part-time basis,
              typically 2-3 days per week. Common responsibilities include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {cmoResponsibilities.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CMO Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Fractional CMO Jobs
              </h2>
              <Link href="/jobs?role=cmo" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all CMO roles &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {cmoJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center text-pink-700 font-black text-xl shrink-0">
                        CMO
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-pink-100 text-pink-800">
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
              Fractional CMO Jobs: Your Guide to Part-Time Marketing Leadership
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional CMO jobs</strong> are ideal for experienced marketing leaders who want
                flexibility while making strategic impact. Companies hire <strong>Fractional CMOs</strong>
                to access senior marketing expertise without the cost of a full-time executive.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Who Hires Fractional CMOs?
              </h3>
              <p className="mb-4">
                <strong>Fractional CMO roles</strong> are most common in D2C brands, B2B SaaS companies,
                and growth-stage startups. These companies need strategic marketing leadership but may
                not have the budget or need for a full-time CMO. E-commerce, FinTech, and professional
                services firms are major employers of fractional marketing leaders.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional CMO Salary UK
              </h3>
              <p className="mb-4">
                <strong>Fractional CMO jobs</strong> in the UK typically pay day rates between £700-£1,200,
                with D2C and FinTech positions often at the higher end. A Fractional CMO working with
                2-3 clients can earn £150,000-£250,000+ annually while maintaining portfolio diversity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Fractional CMO Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse the latest Fractional CMO opportunities across the UK.
            </p>
            <Link href="/jobs?role=cmo" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse CMO Roles
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
              &copy; 2025 Fractional Quest. Fractional CMO Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
