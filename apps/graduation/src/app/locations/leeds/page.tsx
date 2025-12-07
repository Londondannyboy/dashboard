import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agency Leeds | Graduate Jobs Leeds',
  description: 'Leading graduate recruitment agency in Leeds. Connecting talented graduates with top employers across Yorkshire. Financial services, legal, digital & more.',
  keywords: 'graduate recruitment agency leeds, graduate jobs leeds, leeds graduate schemes, entry level jobs leeds, yorkshire graduate jobs',
}

const leedsJobs = [
  { title: 'Graduate Legal Executive', company: 'DWF', location: 'Leeds City Centre', salary: '£28,000 - £32,000' },
  { title: 'Junior Financial Analyst', company: 'KPMG', location: 'Wellington Place', salary: '£30,000 - £35,000' },
  { title: 'Graduate Digital Marketing', company: 'Sky Betting & Gaming', location: 'Leeds Dock', salary: '£26,000 - £30,000' },
  { title: 'Trainee Chartered Accountant', company: 'Mazars', location: 'City Centre', salary: '£27,000 + Study Support' },
  { title: 'Graduate Software Engineer', company: 'NHS Digital', location: 'Leeds', salary: '£28,000 - £33,000' },
  { title: 'Junior HR Advisor', company: 'Asda', location: 'South Leeds', salary: '£25,000 - £28,000' },
]

const leedsAreas = [
  { name: 'City Centre', description: 'Legal, finance, professional services' },
  { name: 'Leeds Dock', description: 'Digital, tech, creative agencies' },
  { name: 'Wellington Place', description: 'Big 4, law firms, banking' },
  { name: 'South Bank', description: 'Tech startups, media' },
  { name: 'Thorpe Park', description: 'Call centres, financial services' },
  { name: 'Kirkstall', description: 'Healthcare, NHS, public sector' },
]

export default function LeedsPage() {
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
              100+ Live Graduate Jobs in Leeds
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Graduate Recruitment Agency<br /><span className="text-pink-300">Leeds</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Leeds&apos; specialist graduate recruitment agency. Yorkshire&apos;s largest city is a thriving
              hub for financial services, legal, and digital industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?location=leeds" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Leeds Jobs</Link>
              <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">450+</div><div className="text-gray-600">Graduates Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">90+</div><div className="text-gray-600">Employer Partners</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">£26k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">3 weeks</div><div className="text-gray-600">Average Time to Hire</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Graduate Jobs Across Leeds</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">We work with employers across all of Leeds&apos; key business districts.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leedsAreas.map((area) => (
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
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Graduate Jobs in Leeds</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top Leeds employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leedsJobs.map((job, index) => (
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
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Graduate Recruitment Agency in Leeds?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">Leeds is the UK&apos;s largest financial and legal centre outside London, with a thriving digital sector and excellent quality of life. The city offers fantastic graduate opportunities with significantly lower living costs than the capital, making it an attractive destination for ambitious graduates.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Industries in Leeds</h3>
              <p className="mb-4">Leeds is particularly strong in financial services, legal (the city has more law firms per capita than anywhere outside London), digital and tech (Channel 4 relocated here), healthcare (NHS Digital HQ), and retail (Asda, Morrisons headquarters).</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Start Your Leeds Career?</h2>
            <p className="text-xl text-blue-100 mb-10">Register today and get matched with Leeds&apos; top graduate employers.</p>
            <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Graduate Recruitment Agency Leeds.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
