import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agency Manchester | Graduate Jobs Manchester',
  description: 'Leading graduate recruitment agency in Manchester. Connecting talented graduates with top employers across Greater Manchester. Finance, tech, media & more.',
  keywords: 'graduate recruitment agency manchester, graduate jobs manchester, manchester graduate schemes, entry level jobs manchester',
}

const manchesterJobs = [
  { title: 'Graduate Digital Marketing Executive', company: 'The Hut Group', location: 'Manchester City Centre', salary: '£26,000 - £30,000' },
  { title: 'Junior Software Developer', company: 'Booking.com', location: 'Spinningfields', salary: '£32,000 - £38,000' },
  { title: 'Graduate Accountant', company: 'BDO', location: 'Deansgate', salary: '£28,000 + Study Support' },
  { title: 'Trainee Recruitment Consultant', company: 'Michael Page', location: 'MediaCityUK', salary: '£24,000 + Commission' },
  { title: 'Graduate Data Analyst', company: 'AO.com', location: 'Bolton', salary: '£28,000 - £32,000' },
  { title: 'Junior UX Designer', company: 'Auto Trader', location: 'Manchester City Centre', salary: '£30,000 - £35,000' },
]

const manchesterAreas = [
  { name: 'City Centre', description: 'Professional services, finance, retail HQs' },
  { name: 'Spinningfields', description: 'Banking, law firms, consultancies' },
  { name: 'MediaCityUK', description: 'BBC, ITV, media & creative agencies' },
  { name: 'Oxford Road Corridor', description: 'Tech startups, universities, biotech' },
  { name: 'Salford Quays', description: 'Digital, broadcasting, tech companies' },
  { name: 'Trafford Park', description: 'Logistics, manufacturing, engineering' },
]

export default function ManchesterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-600">Graduated</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Quest</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/jobs" className="text-gray-600 hover:text-blue-600 font-medium">All Jobs</Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              200+ Live Graduate Jobs in Manchester
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Graduate Recruitment Agency<br />
              <span className="text-pink-300">Manchester</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Manchester&apos;s specialist graduate recruitment agency. From MediaCityUK to Spinningfields,
              we connect ambitious graduates with the North West&apos;s best employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?location=manchester" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse Manchester Jobs
              </Link>
              <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition">
                Register Now
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">800+</div>
                <div className="text-gray-600">Graduates Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Employer Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">£28k</div>
                <div className="text-gray-600">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">3 weeks</div>
                <div className="text-gray-600">Average Time to Hire</div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">
              Graduate Jobs Across Greater Manchester
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We work with employers across all of Manchester&apos;s key business districts.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manchesterAreas.map((area) => (
                <div key={area.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">
              Featured Graduate Jobs in Manchester
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Latest opportunities from top Manchester employers
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manchesterJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded mb-3">New</span>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-600 mb-3">{job.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/jobs?location=manchester" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition inline-block">
                View All Manchester Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Why Choose Our Graduate Recruitment Agency in Manchester?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Manchester has emerged as the UK&apos;s second city for graduate employment, with a thriving
                tech scene, major media presence at MediaCityUK, and a growing financial services sector.
                Our specialist recruiters have deep connections across Greater Manchester&apos;s key industries.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Manchester Graduate Job Market
              </h3>
              <p className="mb-4">
                The Manchester graduate market offers excellent opportunities with a lower cost of living
                than London. Key growth sectors include digital, creative industries, fintech, and
                e-commerce, with companies like The Hut Group, Booking.com, and Auto Trader all having
                major presences in the region.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Graduate Salaries in Manchester
              </h3>
              <p className="mb-4">
                Graduate salaries in Manchester typically range from £24,000 to £35,000, with tech and
                finance roles commanding premium packages. When adjusted for cost of living, Manchester
                graduates often enjoy comparable or better purchasing power than London counterparts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Your Manchester Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Register today and get matched with Manchester&apos;s top graduate employers.
            </p>
            <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">
              Register Now - It&apos;s Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">Graduated</span>
              <span className="text-xl font-black text-pink-400">Quest</span>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2024 Graduated Quest. Graduate Recruitment Agency Manchester.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
