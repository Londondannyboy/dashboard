import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CTO Jobs UK | Fractional CTO Roles & Positions | Fractional Quest',
  description: 'Find fractional CTO jobs in the UK. Browse Fractional CTO roles and technology leadership positions in London and across the UK. Part-time CTO opportunities for tech leaders.',
  keywords: 'fractional cto jobs, fractional cto roles, fractional cto uk, fractional technology director, part-time cto, interim cto uk, fractional chief technology officer, fractional tech lead',
}

const ctoJobs = [
  {
    id: 1,
    title: 'Fractional CTO',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '1,000 - 1,400',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'FinTech'],
    description: 'Fast-growing FinTech seeking a Fractional CTO to lead technical architecture, engineering team development, and product roadmap execution.',
    postedDays: 1,
  },
  {
    id: 2,
    title: 'Fractional CTO',
    company: 'HealthTech Scale-up',
    location: 'Cambridge, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '900 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['HealthTech', 'Series A'],
    description: 'HealthTech company seeking a Fractional CTO to lead platform development, ensure HIPAA compliance, and scale engineering team.',
    postedDays: 2,
  },
  {
    id: 3,
    title: 'Fractional CTO',
    company: 'E-commerce Platform',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '850 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'E-commerce'],
    description: 'Growing e-commerce platform seeking a Fractional CTO to modernise tech stack, improve scalability, and lead cloud migration.',
    postedDays: 3,
  },
  {
    id: 4,
    title: 'Fractional CTO',
    company: 'PropTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '2-3 days/week',
    rate: '950 - 1,250',
    currency: 'GBP',
    period: 'day',
    badges: ['PropTech', 'Seed'],
    description: 'Early-stage PropTech seeking a Fractional CTO to build MVP, establish technical foundations, and hire first engineers.',
    postedDays: 2,
  },
  {
    id: 5,
    title: 'Fractional CTO',
    company: 'B2B SaaS Company',
    location: 'Edinburgh, UK',
    type: 'Remote / Hybrid',
    commitment: '2 days/week',
    rate: '900 - 1,100',
    currency: 'GBP',
    period: 'day',
    badges: ['SaaS', 'Scotland'],
    description: 'B2B SaaS company seeking a Fractional CTO to improve platform reliability, implement DevOps practices, and mentor engineering leads.',
    postedDays: 4,
  },
  {
    id: 6,
    title: 'Fractional CTO',
    company: 'AI Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '1,100 - 1,500',
    currency: 'GBP',
    period: 'day',
    badges: ['AI/ML', 'Series A'],
    description: 'AI startup seeking a Fractional CTO with ML expertise to lead AI product development, data infrastructure, and research team.',
    postedDays: 1,
  },
]

const ctoResponsibilities = [
  {
    icon: '🏗️',
    title: 'Technical Architecture',
    description: 'Design scalable, secure system architecture and make key technology decisions.',
  },
  {
    icon: '👨‍💻',
    title: 'Engineering Leadership',
    description: 'Build, mentor, and lead engineering teams. Establish development practices.',
  },
  {
    icon: '🗺️',
    title: 'Product & Roadmap',
    description: 'Define technical roadmap aligned with product strategy and business goals.',
  },
  {
    icon: '☁️',
    title: 'Infrastructure & DevOps',
    description: 'Oversee cloud infrastructure, CI/CD pipelines, and platform reliability.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Ensure security best practices, data protection, and regulatory compliance.',
  },
  {
    icon: '💡',
    title: 'Technology Strategy',
    description: 'Advise on technology investments, build vs buy decisions, and innovation.',
  },
]

export default function CTOPage() {
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
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Technology Leadership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Fractional CTO Jobs UK
            </h1>
            <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-8">
              Find Fractional CTO roles across the UK. Lead technology strategy, engineering teams,
              and product development on a part-time basis with innovative companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">{ctoJobs.length * 9}+</span>
                <span className="block text-sm">CTO Roles</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">£1,150</span>
                <span className="block text-sm">Avg Day Rate</span>
              </div>
              <div className="bg-white/20 text-white px-6 py-3 rounded-lg">
                <span className="font-bold text-2xl">2-3</span>
                <span className="block text-sm">Days/Week</span>
              </div>
            </div>
          </div>
        </section>

        {/* What Does a Fractional CTO Do? */}
        <section className="py-12 px-4 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              What Does a Fractional CTO Do?
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              A Fractional CTO provides strategic technology leadership on a part-time basis,
              typically 2-3 days per week. Common responsibilities include:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {ctoResponsibilities.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTO Job Listings */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Fractional CTO Jobs
              </h2>
              <Link href="/jobs?role=cto" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all CTO roles &rarr;
              </Link>
            </div>

            <div className="space-y-6">
              {ctoJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 font-black text-xl shrink-0">
                        CTO
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800">
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
              Fractional CTO Jobs: Your Guide to Part-Time Technology Leadership
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional CTO jobs</strong> are among the highest-paid fractional executive roles
                in the UK. Startups and scale-ups hire <strong>Fractional CTOs</strong> to access senior
                technology leadership without the commitment of a full-time hire.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Who Hires Fractional CTOs?
              </h3>
              <p className="mb-4">
                <strong>Fractional CTO roles</strong> are most common in early-stage startups, FinTech,
                HealthTech, and SaaS companies. These organisations need technical leadership to build
                products, establish architecture, and grow engineering teams—but may not have the budget
                for a £250k+ full-time CTO.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional CTO Salary UK
              </h3>
              <p className="mb-4">
                <strong>Fractional CTO jobs</strong> in the UK command day rates between £900-£1,500,
                with AI/ML and FinTech roles at the premium end. A Fractional CTO working with 2-3
                clients can earn £250,000-£350,000+ annually while enjoying variety and flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-violet-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Fractional CTO Role
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Browse the latest Fractional CTO opportunities across the UK.
            </p>
            <Link href="/jobs?role=cto" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Browse CTO Roles
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
              &copy; 2025 Fractional Quest. Fractional CTO Jobs UK.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
