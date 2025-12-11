import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Remote Fractional Jobs UK | Work From Home Fractional Executive Roles | Fractional Quest',
  description: 'Find remote fractional jobs in the UK. Browse work from home Fractional CFO, CMO, CTO and executive roles. Flexible remote fractional opportunities with top UK companies.',
  keywords: 'fractional jobs remote, remote fractional jobs, work from home fractional, remote fractional CFO, remote fractional CMO, remote fractional CTO, UK remote executive jobs, fractional jobs work from home',
}

const remoteJobs = [
  {
    id: 1,
    title: 'Fractional CFO',
    company: 'SaaS Startup',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '2 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'Equity'],
    description: 'Fast-growing SaaS startup seeking a fully remote Fractional CFO to lead financial strategy, manage investor relations, and prepare for Series B.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional CMO',
    company: 'E-commerce Brand',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '2-3 days/week',
    rate: '750 - 950',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'D2C'],
    description: 'Direct-to-consumer brand seeking a remote Fractional CMO to lead digital marketing strategy, performance marketing, and brand development.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional CTO',
    company: 'HealthTech Company',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '3 days/week',
    rate: '900 - 1,300',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'HealthTech'],
    description: 'HealthTech company seeking a remote Fractional CTO to lead technical architecture, engineering team development, and product roadmap.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional HR Director',
    company: 'Tech Scale-up',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '1-2 days/week',
    rate: '600 - 800',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'Scale-up'],
    description: 'Growing tech company seeking a remote Fractional HR Director to establish people processes, culture, and support rapid team growth.',
    postedDays: 4,
  },
  {
    id: 5,
    title: 'Fractional COO',
    company: 'PropTech Startup',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '2 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'PropTech'],
    description: 'PropTech startup seeking a remote Fractional COO to streamline operations, implement systems, and support international expansion.',
    postedDays: 5,
  },
  {
    id: 6,
    title: 'Fractional Sales Director',
    company: 'B2B Software Company',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '2-3 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Fully Remote', 'B2B SaaS'],
    description: 'B2B software company seeking a remote Fractional Sales Director to build sales processes, develop the team, and drive enterprise growth.',
    postedDays: 3,
  },
]

const remoteAdvantages = [
  {
    icon: '🏠',
    title: 'Work From Anywhere in the UK',
    description: 'No commute, no relocation. Work with London companies from anywhere in the country.',
  },
  {
    icon: '⏰',
    title: 'Maximum Flexibility',
    description: 'Remote fractional roles offer the ultimate flexibility in when and where you work.',
  },
  {
    icon: '💰',
    title: 'Competitive Rates',
    description: 'Remote fractional roles often pay London-equivalent rates regardless of your location.',
  },
  {
    icon: '🌐',
    title: 'Wider Opportunity Pool',
    description: 'Access fractional opportunities across the entire UK, not just your local area.',
  },
]

export default function RemotePage() {
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
              <Link href="/fractional-jobs-remote" className="text-violet-900 font-medium">Remote</Link>
              <Link href="/fractional-jobs-london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              100% Remote Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Remote Fractional Jobs UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find fully remote fractional executive roles across the UK. Work from home as a
              Fractional CFO, CMO, CTO or other leadership position with top companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{remoteJobs.length * 10}+</span>
                <span className="block text-sm">Remote Jobs</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">100%</span>
                <span className="block text-sm">Work From Home</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">UK-Wide</span>
                <span className="block text-sm">Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages of Remote Fractional Work */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Remote Fractional Jobs?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {remoteAdvantages.map((advantage) => (
                <div key={advantage.title} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Remote Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Remote Fractional Jobs
              </h2>
              <Link href="/jobs?type=remote" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all remote jobs &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {remoteJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-black text-xl shrink-0">
                        {job.title.split(' ')[1]?.charAt(0) || 'F'}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-800">
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
                      <p className="text-sm text-gray-500">Work Style</p>
                      <p className="font-semibold text-gray-900">{job.type}</p>
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
              Remote Fractional Jobs: Work From Home Executive Opportunities
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Remote fractional jobs</strong> offer the ultimate flexibility for experienced executives.
                Work from anywhere in the UK while providing strategic leadership to growing companies. Whether
                you&apos;re based in Scotland, Wales, or anywhere in England, remote fractional roles let you
                access opportunities that were previously only available to those in major cities.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Benefits of Remote Fractional Work
              </h3>
              <p className="mb-4">
                <strong>Fractional jobs remote</strong> positions combine the flexibility of working from home
                with the strategic impact of executive leadership. You can build a portfolio of clients across
                the UK without geographical constraints, often earning London-equivalent day rates regardless
                of where you live.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Finding Remote Fractional Opportunities
              </h3>
              <p className="mb-4">
                The demand for <strong>remote fractional executives</strong> has grown significantly, especially
                among tech startups and scale-ups. Companies increasingly value the expertise of seasoned
                executives without requiring on-site presence. Most remote fractional roles involve video
                meetings, asynchronous collaboration, and occasional in-person sessions for strategic planning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Remote Fractional Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse remote fractional opportunities across the UK and work from anywhere.
            </p>
            <Link href="/jobs?type=remote" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse Remote Jobs
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
              &copy; 2025 Fractional Quest. Remote Fractional Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
