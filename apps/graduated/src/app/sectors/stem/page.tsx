import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'STEM Graduate Recruitment Agency | STEM Graduate Jobs UK',
  description: 'Specialist STEM graduate recruitment agency. We connect science, technology, engineering and maths graduates with top UK employers across all STEM disciplines.',
  keywords: 'stem graduate recruitment agency, stem graduate jobs, science technology engineering maths jobs, stem careers uk, stem graduate schemes',
}

const stemJobs = [
  { title: 'Graduate Research Scientist', company: 'GSK', location: 'Stevenage', salary: '£32,000 - £38,000' },
  { title: 'Junior Data Scientist', company: 'DeepMind', location: 'London', salary: '£55,000 - £70,000' },
  { title: 'Graduate Process Engineer', company: 'Unilever', location: 'Port Sunlight', salary: '£30,000 - £35,000' },
  { title: 'Junior Quantitative Analyst', company: 'Citadel', location: 'London', salary: '£80,000 - £100,000' },
  { title: 'Graduate Environmental Scientist', company: 'Environment Agency', location: 'Bristol', salary: '£28,000 - £32,000' },
  { title: 'Junior Biomedical Engineer', company: 'Medtronic', location: 'Watford', salary: '£32,000 - £38,000' },
]

const stemFields = [
  { name: 'Science', description: 'Biology, chemistry, physics, environmental science', icon: '🔬', link: '/sectors/science' },
  { name: 'Technology', description: 'Software, data, cybersecurity, AI/ML', icon: '💻', link: '/sectors/it' },
  { name: 'Engineering', description: 'Mechanical, civil, electrical, aerospace', icon: '⚙️', link: '/sectors/engineering' },
  { name: 'Mathematics', description: 'Quantitative analysis, actuarial, statistics', icon: '📐', link: '#' },
  { name: 'Life Sciences', description: 'Pharmaceuticals, biotech, healthcare', icon: '🧬', link: '#' },
  { name: 'Physical Sciences', description: 'Materials, geology, astronomy', icon: '🌍', link: '#' },
]

const topEmployers = ['GSK', 'AstraZeneca', 'Rolls-Royce', 'DeepMind', 'Google', 'Dyson', 'BP', 'Shell', 'Unilever', 'NHS', 'GCHQ', 'Citadel']

export default function STEMPage() {
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
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">🔬</span>
              STEM Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              STEM Graduate<br /><span className="text-teal-200">Recruitment Agency</span>
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-10">
              Specialist recruitment for STEM graduates. Science, Technology, Engineering & Mathematics—
              we connect analytical minds with the UK&apos;s most innovative employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?sector=stem" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse STEM Jobs</Link>
              <Link href="/register" className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-teal-600 mb-2">2,000+</div><div className="text-gray-600">STEM Graduates Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-teal-600 mb-2">300+</div><div className="text-gray-600">STEM Employers</div></div>
              <div className="text-center"><div className="text-4xl font-black text-teal-600 mb-2">£38k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-teal-600 mb-2">97%</div><div className="text-gray-600">Placement Rate</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">STEM Disciplines We Recruit For</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our specialist consultants cover all STEM fields.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stemFields.map((field) => (
                <Link key={field.name} href={field.link} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-teal-300 hover:shadow-lg transition block">
                  <div className="text-4xl mb-4">{field.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{field.name}</h3>
                  <p className="text-gray-600">{field.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured STEM Graduate Jobs</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top UK STEM employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stemJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-teal-300 hover:shadow-lg transition">
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
                  <button className="w-full bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-teal-50 border-y border-teal-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 font-medium mb-8">We work with the UK&apos;s leading STEM employers</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {topEmployers.map((employer) => (
                <div key={employer} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition">{employer}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our STEM Graduate Recruitment Agency?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">STEM graduates are in high demand across virtually every industry. As a specialist STEM graduate recruitment agency, we understand the unique value that analytical, problem-solving skills bring to employers, and we can help you find roles that match your specific expertise.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">STEM Graduate Salaries</h3>
              <p className="mb-4">STEM graduates typically command higher than average starting salaries, ranging from £28,000 to £100,000+ for top quantitative roles. Finance, tech, and pharmaceutical sectors offer particularly competitive packages for STEM talent.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The STEM Skills Shortage</h3>
              <p className="mb-4">The UK faces a significant STEM skills shortage, meaning qualified graduates are highly sought after. Whether your degree is in pure mathematics, experimental physics, or biochemistry, there are excellent career opportunities available.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-teal-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your STEM Career?</h2>
            <p className="text-xl text-teal-100 mb-10">Register today and get matched with leading STEM employers.</p>
            <Link href="/register" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. STEM Graduate Recruitment Agency.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
