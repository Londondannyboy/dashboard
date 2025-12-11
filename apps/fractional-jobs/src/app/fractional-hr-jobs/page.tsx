import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HR Fractional Jobs UK | Fractional HR Director Roles | Fractional Quest',
  description: 'Find HR fractional jobs in the UK. Browse Fractional HR Director, Fractional Chief People Officer and HR leadership roles in London and across the UK.',
  keywords: 'hr fractional jobs, fractional HR director, fractional chief people officer, fractional HR jobs UK, part-time HR director, interim HR director UK, fractional people director',
}

const hrJobs = [
  {
    id: 1,
    title: 'Fractional HR Director',
    company: 'Tech Scale-up (Series B)',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'Tech'],
    description: 'Fast-growing tech company seeking a Fractional HR Director to build people processes, lead talent acquisition strategy, and develop company culture during rapid scaling.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional Chief People Officer',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Remote / Hybrid',
    commitment: '2-3 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['FinTech', 'CPO Level'],
    description: 'FinTech startup seeking a Fractional CPO to lead people strategy, build HR infrastructure, and support international expansion across Europe.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional HR Director',
    company: 'Professional Services Firm',
    location: 'Manchester, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '650 - 800',
    currency: 'GBP',
    period: 'day',
    badges: ['Part-Time', 'Professional Services'],
    description: 'Growing professional services firm seeking a Fractional HR Director to establish people processes, lead recruitment, and develop employee engagement initiatives.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional People Director',
    company: 'E-commerce Brand',
    location: 'Remote UK',
    type: '100% Remote',
    commitment: '2 days/week',
    rate: '700 - 850',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'E-commerce'],
    description: 'D2C e-commerce brand seeking a Fractional People Director to build culture, implement HRIS systems, and lead organisational development.',
    postedDays: 4,
  },
  {
    id: 5,
    title: 'Fractional HR Director',
    company: 'Healthcare Company',
    location: 'Birmingham, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '600 - 750',
    currency: 'GBP',
    period: 'day',
    badges: ['Healthcare', 'Midlands'],
    description: 'Healthcare company seeking a Fractional HR Director to manage employee relations, compliance, and support workforce planning initiatives.',
    postedDays: 5,
  },
  {
    id: 6,
    title: 'Fractional HR Director',
    company: 'Creative Agency',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '1 day/week',
    rate: '650 - 800',
    currency: 'GBP',
    period: 'day',
    badges: ['Creative', 'Agency'],
    description: 'Award-winning creative agency seeking a Fractional HR Director to build people strategy, lead talent development, and foster creative culture.',
    postedDays: 2,
  },
]

const hrResponsibilities = [
  {
    icon: '👥',
    title: 'Talent Acquisition',
    description: 'Lead recruitment strategy, employer branding, and build scalable hiring processes.',
  },
  {
    icon: '📊',
    title: 'People Operations',
    description: 'Implement HRIS systems, develop policies, and streamline HR processes.',
  },
  {
    icon: '🎯',
    title: 'Culture & Engagement',
    description: 'Build company culture, lead engagement initiatives, and improve retention.',
  },
  {
    icon: '📈',
    title: 'Performance Management',
    description: 'Design performance frameworks, lead reviews, and develop career pathways.',
  },
  {
    icon: '⚖️',
    title: 'Compliance & ER',
    description: 'Ensure legal compliance, manage employee relations, and handle complex HR issues.',
  },
  {
    icon: '🚀',
    title: 'Organisational Development',
    description: 'Lead change management, restructuring, and support business scaling.',
  },
]

export default function HRPage() {
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
              <Link href="/fractional-jobs-remote" className="text-gray-700 hover:text-violet-900 font-medium">Remote</Link>
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
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              HR Leadership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              HR Fractional Jobs UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find Fractional HR Director and Chief People Officer roles across the UK.
              Lead people strategy, build culture, and drive organisational development
              on a part-time basis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{hrJobs.length * 5}+</span>
                <span className="block text-sm">HR Fractional Jobs</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£750</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">1-3</span>
                <span className="block text-sm">Days/Week</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Does a Fractional HR Director Do? */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              What Does a Fractional HR Director Do?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A Fractional HR Director provides strategic people leadership on a part-time basis,
              typically 1-3 days per week. Common responsibilities include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {hrResponsibilities.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest HR Fractional Jobs
              </h2>
              <Link href="/jobs?role=hr" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all HR jobs &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {hrJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 font-black text-xl shrink-0">
                        HR
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-purple-100 text-purple-800">
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
              HR Fractional Jobs: A Complete Guide to Fractional HR Director Roles
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>HR fractional jobs</strong> have become increasingly popular as companies recognise the
                value of experienced HR leadership without the cost of a full-time hire. A <strong>Fractional
                HR Director</strong> provides strategic people leadership on a part-time basis, typically working
                1-3 days per week with multiple clients.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Who Hires Fractional HR Directors?
              </h3>
              <p className="mb-4">
                Startups and scale-ups are the primary employers for <strong>fractional HR professionals</strong>.
                These companies need senior HR expertise to build people processes, develop culture, and support
                rapid growth—but aren&apos;t yet ready for a full-time HR Director. Professional services firms,
                agencies, and mid-sized companies also increasingly hire <strong>fractional HR leaders</strong>.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional HR Director Salary UK
              </h3>
              <p className="mb-4">
                <strong>HR fractional jobs</strong> in the UK typically pay day rates between £600-£1,100,
                depending on seniority, industry, and location. London-based roles and Chief People Officer
                positions command the highest rates. Working with 2-3 clients, a Fractional HR Director can
                earn £150,000+ annually while maintaining flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your HR Fractional Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse HR fractional opportunities across the UK and build your portfolio career.
            </p>
            <Link href="/jobs?role=hr" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse HR Jobs
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
              &copy; 2025 Fractional Quest. HR Fractional Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
