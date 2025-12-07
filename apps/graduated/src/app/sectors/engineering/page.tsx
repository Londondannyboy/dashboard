import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Engineering Graduate Recruitment Agency | Graduate Engineering Jobs UK',
  description: 'Specialist engineering graduate recruitment agency. We connect engineering graduates with top UK employers in mechanical, civil, electrical, and aerospace engineering.',
  keywords: 'engineering graduate recruitment agency, graduate engineering jobs, mechanical engineering graduate jobs, civil engineering graduate jobs, electrical engineering graduate jobs',
}

const engineeringJobs = [
  { title: 'Graduate Mechanical Engineer', company: 'Rolls-Royce', location: 'Derby', salary: '£32,000 - £38,000' },
  { title: 'Junior Civil Engineer', company: 'Arup', location: 'London', salary: '£30,000 - £35,000' },
  { title: 'Graduate Electrical Engineer', company: 'National Grid', location: 'Warwick', salary: '£32,000 - £36,000' },
  { title: 'Aerospace Graduate Engineer', company: 'Airbus', location: 'Bristol', salary: '£34,000 - £40,000' },
  { title: 'Graduate Structural Engineer', company: 'WSP', location: 'Manchester', salary: '£28,000 - £32,000' },
  { title: 'Junior Systems Engineer', company: 'BAE Systems', location: 'Hampshire', salary: '£30,000 - £35,000' },
]

const engineeringFields = [
  { name: 'Mechanical Engineering', description: 'Design and manufacturing of mechanical systems, automotive, robotics', icon: '⚙️' },
  { name: 'Civil Engineering', description: 'Infrastructure, construction, structural design, transport', icon: '🏗️' },
  { name: 'Electrical Engineering', description: 'Power systems, electronics, telecommunications', icon: '⚡' },
  { name: 'Aerospace Engineering', description: 'Aircraft design, propulsion, defence systems', icon: '✈️' },
  { name: 'Chemical Engineering', description: 'Process engineering, pharmaceuticals, energy', icon: '🧪' },
  { name: 'Software Engineering', description: 'Systems development, embedded software, IoT', icon: '💻' },
]

const topEmployers = ['Rolls-Royce', 'BAE Systems', 'Airbus', 'Arup', 'Jaguar Land Rover', 'National Grid', 'Network Rail', 'Atkins', 'Mott MacDonald', 'Dyson']

export default function EngineeringPage() {
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
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-2xl">⚙️</span>
              Engineering Recruitment Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Engineering Graduate<br /><span className="text-orange-200">Recruitment Agency</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-10">
              Specialist recruitment for engineering graduates. From aerospace to civil, mechanical to electrical,
              we connect talented engineers with the UK&apos;s leading employers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs?sector=engineering" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">Browse Engineering Jobs</Link>
              <Link href="/register" className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-4 rounded-lg transition">Register Now</Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center"><div className="text-4xl font-black text-orange-600 mb-2">800+</div><div className="text-gray-600">Engineers Placed</div></div>
              <div className="text-center"><div className="text-4xl font-black text-orange-600 mb-2">120+</div><div className="text-gray-600">Engineering Employers</div></div>
              <div className="text-center"><div className="text-4xl font-black text-orange-600 mb-2">£33k</div><div className="text-gray-600">Average Salary</div></div>
              <div className="text-center"><div className="text-4xl font-black text-orange-600 mb-2">95%</div><div className="text-gray-600">Placement Rate</div></div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Engineering Disciplines We Recruit For</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our specialist consultants have deep expertise across all major engineering fields.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringFields.map((field) => (
                <div key={field.name} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 hover:shadow-lg transition">
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
            <h2 className="text-3xl font-black text-gray-900 mb-4 text-center">Featured Engineering Graduate Jobs</h2>
            <p className="text-gray-600 text-center mb-12">Latest opportunities from top UK engineering employers</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringJobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 hover:shadow-lg transition">
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
                  <button className="w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-orange-50 border-y border-orange-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 font-medium mb-8">We work with the UK&apos;s leading engineering employers</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {topEmployers.map((employer) => (
                <div key={employer} className="text-lg font-bold text-gray-400 hover:text-gray-600 transition">{employer}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Our Engineering Graduate Recruitment Agency?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">As a specialist engineering graduate recruitment agency, we understand the unique skills and qualifications that engineering employers seek. Our team includes consultants with engineering backgrounds who can effectively match candidates with the right opportunities.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Engineering Graduate Salaries</h3>
              <p className="mb-4">Engineering graduates command some of the highest starting salaries, typically ranging from £28,000 to £40,000. Aerospace, oil & gas, and defence sectors often offer the most competitive packages, with some graduate schemes exceeding £35,000.</p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Chartered Status Support</h3>
              <p className="mb-4">Many of our partner employers offer structured paths to Chartered Engineer (CEng) status through the relevant professional institutions (IMechE, ICE, IET). We can help you find roles that support your professional development goals.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your Engineering Career?</h2>
            <p className="text-xl text-orange-100 mb-10">Register today and get matched with leading engineering employers.</p>
            <Link href="/register" className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition inline-block">Register Now - It&apos;s Free</Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2"><span className="text-xl font-black text-white">Graduated</span><span className="text-xl font-black text-pink-400">Quest</span></Link>
            <p className="text-gray-400 text-sm">© 2024 Graduated Quest. Engineering Graduate Recruitment Agency.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
