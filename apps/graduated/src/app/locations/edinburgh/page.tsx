import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agency Edinburgh | Graduate Jobs Edinburgh',
  description: 'Leading graduate recruitment agency in Edinburgh. Connecting talented graduates with top employers across Scotland. Finance, tech, government & professional services.',
  keywords: 'graduate recruitment agency edinburgh, graduate jobs edinburgh, edinburgh graduate schemes, entry level jobs edinburgh, scotland graduate jobs',
}

const edinburghJobs = [
  { title: 'Graduate Investment Analyst', company: 'Baillie Gifford', location: 'Calton Hill', salary: '£35,000 - £42,000' },
  { title: 'Junior Software Engineer', company: 'Skyscanner', location: 'Quartermile', salary: '£32,000 - £38,000' },
  { title: 'Graduate Actuary', company: 'Standard Life', location: 'Edinburgh Park', salary: '£34,000 - £40,000' },
  { title: 'Trainee Solicitor', company: 'CMS', location: 'Saltire Court', salary: '£38,000' },
  { title: 'Graduate Policy Advisor', company: 'Scottish Government', location: 'St Andrew&apos;s House', salary: '£28,000 - £32,000' },
  { title: 'Junior Data Scientist', company: 'FanDuel', location: 'Quartermile', salary: '£35,000 - £42,000' },
]

const edinburghAreas = [
  { name: 'City Centre', description: 'Legal, professional services, government' },
  { name: 'Quartermile', description: 'Tech startups, fintech, digital' },
  { name: 'Edinburgh Park', description: 'Insurance, banking, headquarters' },
  { name: 'The Exchange', description: 'Financial services, asset management' },
  { name: 'Leith', description: 'Creative industries, hospitality HQs' },
  { name: 'West End', description: 'Consultancies, investment managers' },
]

export default function EdinburghPage() {
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
              90+ Live Graduate Jobs in Edinburgh
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Graduate Recruitment Agency<br /><span className="text-pink-300">Edinburgh</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Edinburgh&apos;s specialist graduate recruitment agency. Scotland&apos;s capital is the UK&apos;s
              second largest financial centre with a thriving tech and government sector.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?location=edinburgh" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Edinburgh Jobs</Link>
              <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">400+</div><div className="text-gray-600">Graduates Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">80+</div><div className="text-gray-600">Employer Partners</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">£30k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-blue-600 mb-2">4 weeks</div><div className="text-gray-600">Average Time to Hire</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Graduate Jobs Across Edinburgh</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">We work with employers across all of Edinburgh&apos;s key business districts.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edinburghAreas.map((area) => (
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
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Graduate Jobs in Edinburgh</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top Edinburgh employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edinburghJobs.map((job, index) => (
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
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Graduate Recruitment Agency in Edinburgh?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">Edinburgh is the UK&apos;s second largest financial centre after London, managing over £1 trillion in assets. The city also has a thriving tech sector, world-class universities, and is home to the Scottish Government, creating diverse graduate opportunities.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Industries in Edinburgh</h3>
              <p className="mb-4">Edinburgh excels in asset management (Baillie Gifford, Standard Life Aberdeen), fintech (Skyscanner was founded here), banking, insurance, legal services, and government. The city&apos;s festival culture also supports a vibrant creative and hospitality sector.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Start Your Edinburgh Career?</h2>
            <p className="text-xl text-blue-100 mb-10">Register today and get matched with Edinburgh&apos;s top graduate employers.</p>
            <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Graduate Recruitment Agency Edinburgh.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
