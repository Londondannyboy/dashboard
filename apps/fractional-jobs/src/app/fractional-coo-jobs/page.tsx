import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional COO Jobs UK | Fractional COO Roles & Operations | Fractional Quest',
  description: 'Find fractional COO jobs in the UK. Browse Fractional COO roles, operations director positions in London and across the UK. Part-time COO and fractional operations opportunities.',
  keywords: 'fractional coo jobs, fractional coo roles, fractional coo uk, fractional operations director, fractional operations assistant, part-time coo, interim coo uk, fractional chief operating officer',
}

const cooJobs = [
  {
    id: 1,
    title: 'Fractional COO',
    company: 'Tech Scale-up',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '900 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'Tech'],
    description: 'Fast-growing tech company seeking a Fractional COO to streamline operations, implement systems, and support international expansion.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional COO',
    company: 'E-commerce Brand',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '800 - 1,000',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'E-commerce'],
    description: 'D2C brand seeking a Fractional COO to optimise fulfilment, supply chain, and operational efficiency during rapid growth.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional COO',
    company: 'Professional Services Firm',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['Professional Services', 'Operations'],
    description: 'Growing consultancy seeking a Fractional COO to professionalise operations, implement project management systems, and improve delivery.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional COO',
    company: 'HealthTech Company',
    location: 'Cambridge, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '900 - 1,150',
    currency: 'GBP',
    period: 'day',
    badges: ['HealthTech', 'Scale-up'],
    description: 'HealthTech company seeking a Fractional COO to build operational infrastructure, ensure compliance, and scale service delivery.',
    postedDays: 2,
  },
  {
    id: 5,
    title: 'Fractional COO',
    company: 'Creative Agency',
    location: 'Bristol, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Creative', 'Agency'],
    description: 'Award-winning creative agency seeking a Fractional COO to improve resource planning, project profitability, and operational processes.',
    postedDays: 4,
  },
  {
    id: 6,
    title: 'Fractional COO',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '950 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['FinTech', 'Series A'],
    description: 'FinTech startup seeking a Fractional COO to build operational foundations, vendor management, and regulatory compliance processes.',
    postedDays: 1,
  },
]

const cooResponsibilities = [
  {
    icon: '⚙️',
    title: 'Operations Strategy',
    description: 'Design and implement operational strategies aligned with business growth objectives.',
  },
  {
    icon: '📊',
    title: 'Process Optimisation',
    description: 'Streamline workflows, eliminate inefficiencies, and implement best practices.',
  },
  {
    icon: '🔧',
    title: 'Systems & Tools',
    description: 'Select and implement operational systems, automation, and productivity tools.',
  },
  {
    icon: '👥',
    title: 'Team & Resources',
    description: 'Optimise resource allocation, build teams, and develop operational capabilities.',
  },
  {
    icon: '📈',
    title: 'Scaling Operations',
    description: 'Build scalable processes and infrastructure to support rapid growth.',
  },
  {
    icon: '🎯',
    title: 'Performance Management',
    description: 'Establish KPIs, dashboards, and operational reporting frameworks.',
  },
]

export default function COOPage() {
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
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Operations Leadership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Fractional COO Jobs UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find Fractional COO roles across the UK. Lead operations strategy, process optimisation,
              and business scaling on a part-time basis with growing companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{cooJobs.length * 5}+</span>
                <span className="block text-sm">COO Roles</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£950</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">2-3</span>
                <span className="block text-sm">Days/Week</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Does a Fractional COO Do? */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              What Does a Fractional COO Do?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A Fractional COO provides strategic operations leadership on a part-time basis,
              typically 2-3 days per week. Common responsibilities include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {cooResponsibilities.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COO Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Fractional COO Jobs
              </h2>
              <Link href="/jobs?role=coo" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all COO roles &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {cooJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-700 font-black text-xl shrink-0">
                        COO
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-800">
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

        {/* Fractional Operations Assistant Section */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Fractional Operations Assistant Roles
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-orange-200">
              <p className="text-gray-600 mb-6">
                Looking for <strong>fractional operations assistant</strong> opportunities? While most fractional
                operations roles are at the director or COO level, some companies seek part-time operations
                support for specific projects or ongoing operational assistance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Operations Assistant Tasks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Process documentation and SOPs</li>
                    <li>• Project coordination support</li>
                    <li>• Systems administration</li>
                    <li>• Vendor management assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Typical Arrangements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1-2 days per week</li>
                    <li>• Often remote-friendly</li>
                    <li>• Project-based or ongoing</li>
                    <li>• £300-£500 day rate</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/jobs?role=operations" className="text-violet-700 hover:text-violet-900 font-semibold">
                  Browse all operations roles &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Fractional COO Jobs: Your Guide to Part-Time Operations Leadership
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional COO jobs</strong> are increasingly popular as companies recognise the value
                of experienced operations leadership without the cost of a full-time hire. A <strong>Fractional
                COO</strong> helps scale-ups and SMEs build operational foundations for sustainable growth.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Who Hires Fractional COOs?
              </h3>
              <p className="mb-4">
                <strong>Fractional COO roles</strong> are common in fast-growing startups, e-commerce brands,
                agencies, and professional services firms. These organisations need operational expertise to
                scale efficiently but may not require a full-time COO. Companies going through rapid growth,
                international expansion, or operational transformation are key employers.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional COO Salary UK
              </h3>
              <p className="mb-4">
                <strong>Fractional COO jobs</strong> in the UK typically pay day rates between £800-£1,200,
                with tech and FinTech roles at the higher end. A Fractional COO working with 2-3 clients
                can earn £180,000-£280,000+ annually while enjoying variety across different business challenges.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Fractional COO Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse the latest Fractional COO opportunities across the UK.
            </p>
            <Link href="/jobs?role=coo" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse COO Roles
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
              &copy; 2025 Fractional Quest. Fractional COO Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
