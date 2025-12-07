import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agency Birmingham | Graduate Jobs Birmingham',
  description: 'Leading graduate recruitment agency in Birmingham. Connecting talented graduates with top employers across the West Midlands. Finance, engineering, professional services & more.',
  keywords: 'graduate recruitment agency birmingham, graduate jobs birmingham, birmingham graduate schemes, entry level jobs birmingham',
}

const birminghamJobs = [
  { title: 'Graduate Management Consultant', company: 'KPMG', location: 'Snowhill', salary: '£32,000 - £38,000' },
  { title: 'Junior Mechanical Engineer', company: 'Jaguar Land Rover', location: 'Solihull', salary: '£30,000 - £35,000' },
  { title: 'Graduate Auditor', company: 'EY', location: 'Colmore Row', salary: '£28,000 + Study Support' },
  { title: 'Trainee Solicitor', company: 'DLA Piper', location: 'City Centre', salary: '£45,000' },
  { title: 'Graduate Business Analyst', company: 'HSBC', location: 'Centenary Square', salary: '£32,000 - £36,000' },
  { title: 'Junior Project Manager', company: 'Balfour Beatty', location: 'Five Ways', salary: '£28,000 - £32,000' },
]

const birminghamAreas = [
  { name: 'City Centre', description: 'Big 4, law firms, banking' },
  { name: 'Colmore Business District', description: 'Professional services, finance' },
  { name: 'Digbeth', description: 'Creative industries, tech startups' },
  { name: 'Solihull', description: 'Automotive, engineering, manufacturing' },
  { name: 'Jewellery Quarter', description: 'Creative, design, small businesses' },
  { name: 'Brindleyplace', description: 'Media, tech, professional services' },
]

export default function BirminghamPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-600">Graduated</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Quest</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/jobs" className="text-gray-600 hover:text-blue-600 font-medium">All Jobs</Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition">Register</Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              150+ Live Graduate Jobs in Birmingham
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Graduate Recruitment Agency<br /><span className="text-pink-300">Birmingham</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Birmingham&apos;s specialist graduate recruitment agency. The UK&apos;s second largest city offers
              fantastic opportunities in professional services, automotive, and engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?location=birmingham" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Birmingham Jobs</Link>
              <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">600+</div><div className="text-gray-600">Graduates Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">120+</div><div className="text-gray-600">Employer Partners</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">£27k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">3 weeks</div><div className="text-gray-600">Average Time to Hire</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Graduate Jobs Across Birmingham</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">We work with employers across all of Birmingham&apos;s key business districts.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {birminghamAreas.map((area) => (
                <div key={area.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Graduate Jobs in Birmingham</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top Birmingham employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {birminghamJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded mb-3">New</span>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-600 mb-3">{job.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {job.salary}
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Graduate Recruitment Agency in Birmingham?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">Birmingham is the UK&apos;s second largest city and a major hub for professional services, automotive manufacturing, and engineering. With excellent transport links via HS2 and a thriving business community, Birmingham offers fantastic graduate opportunities at competitive salaries with a lower cost of living than London.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Industries in Birmingham</h3>
              <p className="mb-4">Major sectors include professional services (all Big 4 firms have offices here), automotive (Jaguar Land Rover, BMW), banking (HSBC UK headquarters), and a growing tech scene. The city&apos;s central location makes it a strategic base for many national and international companies.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Start Your Birmingham Career?</h2>
            <p className="text-xl text-blue-100 mb-10">Register today and get matched with Birmingham&apos;s top graduate employers.</p>
            <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Graduate Recruitment Agency Birmingham.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
