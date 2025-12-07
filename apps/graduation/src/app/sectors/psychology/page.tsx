import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psychology Graduate Recruitment Agency | Graduate Psychology Jobs UK',
  description: 'Specialist psychology graduate recruitment agency. We connect psychology graduates with roles in HR, mental health, research, marketing, and corporate training across the UK.',
  keywords: 'psychology graduate recruitment agency, psychology graduate jobs, graduate psychology careers, psychology jobs uk, mental health graduate jobs',
}

const psychologyJobs = [
  { title: 'Graduate HR Coordinator', company: 'Deloitte', location: 'London', salary: '£28,000 - £32,000' },
  { title: 'Assistant Psychologist', company: 'NHS', location: 'Various', salary: '£26,000 - £30,000' },
  { title: 'Graduate User Researcher', company: 'GDS', location: 'London', salary: '£32,000 - £38,000' },
  { title: 'Junior Market Research Executive', company: 'Ipsos', location: 'London', salary: '£26,000 - £30,000' },
  { title: 'Graduate Learning & Development', company: 'PwC', location: 'London', salary: '£30,000 - £35,000' },
  { title: 'Research Assistant', company: 'University College London', location: 'London', salary: '£28,000 - £32,000' },
]

const psychologyCareerPaths = [
  { name: 'Human Resources', description: 'Recruitment, employee relations, talent development, organisational psychology', icon: '👥' },
  { name: 'Mental Health', description: 'Assistant psychologist, mental health support, counselling services', icon: '🧠' },
  { name: 'User Experience', description: 'UX research, user testing, behavioural design, product psychology', icon: '🎯' },
  { name: 'Market Research', description: 'Consumer behaviour, focus groups, quantitative research', icon: '📊' },
  { name: 'Learning & Development', description: 'Corporate training, instructional design, coaching', icon: '📚' },
  { name: 'Academia & Research', description: 'Research assistant, PhD pathways, academic careers', icon: '🔬' },
]

const topEmployers = ['NHS', 'Deloitte', 'PwC', 'Civil Service', 'Google', 'BBC', 'Ipsos', 'YouGov', 'Mind', 'Barnardo\'s']

export default function PsychologyPage() {
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
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">🧠</span>
              Psychology Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Psychology Graduate<br /><span className="text-indigo-200">Recruitment Agency</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
              Specialist recruitment for psychology graduates. Your degree opens doors to HR, mental health,
              UX research, marketing, and corporate training roles across the UK.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?sector=psychology" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Psychology Jobs</Link>
              <Link href="/register" className="bg-indigo-800 hover:bg-indigo-900 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-indigo-600 mb-2">450+</div><div className="text-gray-600">Grads Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-indigo-600 mb-2">80+</div><div className="text-gray-600">Employer Partners</div></div>
              <div className="text-center"><div className="text-4xl font-black text-indigo-600 mb-2">£28k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-indigo-600 mb-2">92%</div><div className="text-gray-600">Placement Rate</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Career Paths for Psychology Graduates</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Psychology graduates are valued across many industries. Here are the main career paths we recruit for.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychologyCareerPaths.map((path) => (
                <div key={path.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{path.name}</h3>
                  <p className="text-gray-600">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Psychology Graduate Jobs</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities for psychology graduates</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {psychologyJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition">
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
                  <button className="w-full bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-indigo-50 border-y border-indigo-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 font-medium mb-8">We work with employers who value psychology graduates</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topEmployers.map((employer) => (
                <div key={employer} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition">{employer}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Psychology Graduate Recruitment Agency?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">Psychology is one of the most versatile degrees, equipping graduates with skills in critical thinking, research methods, data analysis, and understanding human behaviour. As a specialist psychology graduate recruitment agency, we help you translate these skills into rewarding careers.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Psychology Graduate Salaries</h3>
              <p className="mb-4">Psychology graduate salaries typically range from £24,000 to £35,000, with UX research and corporate HR roles often commanding higher starting salaries. Clinical and counselling pathways may start lower but offer excellent long-term progression.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">BPS Accreditation & Further Training</h3>
              <p className="mb-4">For those pursuing chartered psychologist status, we can help you find roles that offer BPS-accredited training and supervision. Many of our NHS and private sector partners offer structured training programmes for aspiring clinical, occupational, or educational psychologists.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your Psychology Career?</h2>
            <p className="text-xl text-indigo-100 mb-10">Register today and get matched with employers who value your skills.</p>
            <Link href="/register" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Psychology Graduate Recruitment Agency.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
