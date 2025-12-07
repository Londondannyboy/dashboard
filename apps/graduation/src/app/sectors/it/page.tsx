import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IT Graduate Recruitment Agency | Graduate IT Jobs UK',
  description: 'Specialist IT graduate recruitment agency. We connect IT and computer science graduates with top UK tech employers. Software development, data, cybersecurity & more.',
  keywords: 'it graduate recruitment agency, graduate it jobs, graduate software developer jobs, computer science graduate jobs, tech graduate jobs uk',
}

const itJobs = [
  { title: 'Graduate Software Developer', company: 'Google', location: 'London', salary: '£50,000 - £65,000' },
  { title: 'Junior Data Engineer', company: 'Amazon', location: 'London', salary: '£45,000 - £55,000' },
  { title: 'Graduate Cybersecurity Analyst', company: 'GCHQ', location: 'Cheltenham', salary: '£35,000 - £42,000' },
  { title: 'Junior Cloud Engineer', company: 'Microsoft', location: 'Reading', salary: '£42,000 - £50,000' },
  { title: 'Graduate DevOps Engineer', company: 'Spotify', location: 'London', salary: '£45,000 - £55,000' },
  { title: 'Junior Full Stack Developer', company: 'Monzo', location: 'London', salary: '£40,000 - £48,000' },
]

const itFields = [
  { name: 'Software Development', description: 'Full stack, backend, frontend, mobile development', icon: '💻' },
  { name: 'Data & Analytics', description: 'Data engineering, data science, business intelligence', icon: '📊' },
  { name: 'Cybersecurity', description: 'Security analysis, penetration testing, GRC', icon: '🔒' },
  { name: 'Cloud & DevOps', description: 'AWS, Azure, GCP, CI/CD, infrastructure', icon: '☁️' },
  { name: 'AI & Machine Learning', description: 'ML engineering, NLP, computer vision', icon: '🤖' },
  { name: 'IT Consulting', description: 'Technical consulting, digital transformation', icon: '💡' },
]

const topEmployers = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Spotify', 'Monzo', 'Revolut', 'Deliveroo', 'Sky']

export default function ITPage() {
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
        <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">💻</span>
              IT & Tech Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              IT Graduate<br /><span className="text-purple-200">Recruitment Agency</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
              Specialist recruitment for IT and computer science graduates. From software development to cybersecurity,
              we connect tech talent with the UK&apos;s most innovative employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?sector=it" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse IT Jobs</Link>
              <Link href="/register" className="bg-purple-800 hover:bg-purple-900 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-purple-600 mb-2">1,200+</div><div className="text-gray-600">Tech Graduates Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-purple-600 mb-2">200+</div><div className="text-gray-600">Tech Employers</div></div>
              <div className="text-center"><div className="text-4xl font-black text-purple-600 mb-2">£42k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-purple-600 mb-2">3 weeks</div><div className="text-gray-600">Average Time to Hire</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">IT Specialisms We Recruit For</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our tech-specialist consultants understand the skills employers need.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itFields.map((field) => (
                <div key={field.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{field.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{field.name}</h3>
                  <p className="text-gray-600">{field.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured IT Graduate Jobs</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top UK tech employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition">
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
                  <button className="w-full bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-purple-50 border-y border-purple-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 font-medium mb-8">We work with the UK&apos;s leading tech employers</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topEmployers.map((employer) => (
                <div key={employer} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition">{employer}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our IT Graduate Recruitment Agency?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">As a specialist IT graduate recruitment agency, we understand the rapidly evolving tech landscape. Our consultants stay current with the latest technologies and can help match your skills—whether that&apos;s Python, JavaScript, cloud platforms, or emerging AI tools—with the right employers.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">IT Graduate Salaries</h3>
              <p className="mb-4">IT and tech graduates command premium salaries, typically ranging from £35,000 to £65,000 for top graduate schemes. FAANG companies and leading fintechs often offer the highest packages, with some roles exceeding £60,000 including signing bonuses and stock options.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technical Interview Preparation</h3>
              <p className="mb-4">We provide comprehensive support for technical interviews, including coding challenges, system design questions, and behavioural interviews. Our team can help you prepare for the rigorous interview processes at top tech companies.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your Tech Career?</h2>
            <p className="text-xl text-purple-100 mb-10">Register today and get matched with leading tech employers.</p>
            <Link href="/register" className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. IT Graduate Recruitment Agency.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
