import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Science Graduate Recruitment Agency | Graduate Science Jobs UK',
  description: 'Specialist science graduate recruitment agency. We connect biology, chemistry, physics and life science graduates with top UK employers in pharma, biotech & research.',
  keywords: 'science graduate recruitment agency, graduate science jobs, biology graduate jobs, chemistry graduate jobs, physics graduate jobs, life science graduate jobs',
}

const scienceJobs = [
  { title: 'Graduate Research Scientist', company: 'AstraZeneca', location: 'Cambridge', salary: '£32,000 - £38,000' },
  { title: 'Junior Analytical Chemist', company: 'GSK', location: 'Stevenage', salary: '£28,000 - £33,000' },
  { title: 'Graduate Microbiologist', company: 'PHE', location: 'Porton Down', salary: '£27,000 - £31,000' },
  { title: 'Junior Clinical Research Associate', company: 'IQVIA', location: 'Reading', salary: '£30,000 - £35,000' },
  { title: 'Graduate Formulation Scientist', company: 'Unilever', location: 'Port Sunlight', salary: '£30,000 - £34,000' },
  { title: 'Junior Regulatory Affairs', company: 'Roche', location: 'Welwyn', salary: '£28,000 - £32,000' },
]

const scienceFields = [
  { name: 'Life Sciences', description: 'Biology, biochemistry, biomedical science, genetics', icon: '🧬' },
  { name: 'Chemistry', description: 'Analytical, organic, medicinal, formulation', icon: '⚗️' },
  { name: 'Physics', description: 'Applied physics, materials, optics, acoustics', icon: '⚛️' },
  { name: 'Environmental Science', description: 'Ecology, conservation, climate science', icon: '🌍' },
  { name: 'Pharmacology', description: 'Drug development, toxicology, clinical research', icon: '💊' },
  { name: 'Food Science', description: 'Food technology, nutrition, quality assurance', icon: '🍎' },
]

const topEmployers = ['GSK', 'AstraZeneca', 'Pfizer', 'Unilever', 'Reckitt', 'DEFRA', 'Environment Agency', 'PHE', 'Syngenta', 'IQVIA']

export default function SciencePage() {
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
        <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">🔬</span>
              Science Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Science Graduate<br /><span className="text-green-200">Recruitment Agency</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-10">
              Specialist recruitment for science graduates. From pharmaceuticals to environmental science,
              we connect researchers and scientists with the UK&apos;s leading employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?sector=science" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Science Jobs</Link>
              <Link href="/register" className="bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-green-600 mb-2">600+</div><div className="text-gray-600">Scientists Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-green-600 mb-2">100+</div><div className="text-gray-600">Science Employers</div></div>
              <div className="text-center"><div className="text-4xl font-black text-green-600 mb-2">£30k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-green-600 mb-2">94%</div><div className="text-gray-600">Placement Rate</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Science Disciplines We Recruit For</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our specialist consultants have expertise across all scientific disciplines.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scienceFields.map((field) => (
                <div key={field.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-lg transition">
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
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Science Graduate Jobs</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top UK science employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scienceJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-lg transition">
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
                  <button className="w-full bg-gray-100 hover:bg-green-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-green-50 border-y border-green-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 font-medium mb-8">We work with the UK&apos;s leading science employers</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topEmployers.map((employer) => (
                <div key={employer} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition">{employer}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Science Graduate Recruitment Agency?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">As a specialist science graduate recruitment agency, we understand that laboratory skills, research experience, and scientific methodology are highly valued by employers. We can help you translate your academic achievements into a successful industry career.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Science Graduate Salaries</h3>
              <p className="mb-4">Science graduate salaries typically range from £25,000 to £38,000, with pharmaceutical and biotech companies often offering the most competitive packages. Roles in R&D, quality assurance, and regulatory affairs are particularly well-compensated.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Career Paths in Science</h3>
              <p className="mb-4">Science graduates can pursue careers in laboratory research, clinical trials, regulatory affairs, quality control, technical sales, and scientific writing. Many of our partner employers offer structured graduate programmes with clear progression paths.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your Science Career?</h2>
            <p className="text-xl text-green-100 mb-10">Register today and get matched with leading science employers.</p>
            <Link href="/register" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Science Graduate Recruitment Agency.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
