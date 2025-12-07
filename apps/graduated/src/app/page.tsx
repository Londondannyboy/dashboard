import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Graduate Recruitment Agencies London | Top UK Graduate Jobs | Graduated Quest',
  description: 'London\'s leading graduate recruitment agency. We connect talented university graduates with top UK employers. Expert career guidance, CV optimisation, and interview coaching. Find your dream graduate job today.',
  keywords: 'graduate recruitment agencies london, graduate jobs london, graduate recruitment uk, entry level jobs london, graduate schemes uk, graduate careers london, university graduate jobs',
}

const jobCategories = [
  { name: 'Finance & Banking', icon: '💷', count: 245, color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Marketing & PR', icon: '📣', count: 189, color: 'bg-pink-50 hover:bg-pink-100' },
  { name: 'Technology & IT', icon: '💻', count: 312, color: 'bg-purple-50 hover:bg-purple-100' },
  { name: 'Sales & Business Dev', icon: '🤝', count: 156, color: 'bg-green-50 hover:bg-green-100' },
  { name: 'HR & Recruitment', icon: '👥', count: 98, color: 'bg-yellow-50 hover:bg-yellow-100' },
  { name: 'Engineering', icon: '⚙️', count: 167, color: 'bg-orange-50 hover:bg-orange-100' },
  { name: 'Legal & Compliance', icon: '⚖️', count: 78, color: 'bg-indigo-50 hover:bg-indigo-100' },
  { name: 'Creative & Design', icon: '🎨', count: 124, color: 'bg-red-50 hover:bg-red-100' },
]

const featuredJobs = [
  { title: 'Graduate Marketing Executive', company: 'Tech Innovators Ltd', location: 'London, EC2', salary: '£28,000 - £32,000', type: 'Full-time', posted: '2 days ago' },
  { title: 'Junior Financial Analyst', company: 'Capital Partners', location: 'Canary Wharf', salary: '£35,000 - £40,000', type: 'Full-time', posted: '1 day ago' },
  { title: 'Graduate Software Developer', company: 'Digital Solutions UK', location: 'Shoreditch', salary: '£32,000 - £38,000', type: 'Full-time', posted: '3 days ago' },
  { title: 'Sales Development Representative', company: 'Growth Co', location: 'London, W1', salary: '£25,000 + Commission', type: 'Full-time', posted: 'Today' },
  { title: 'Graduate HR Assistant', company: 'People First Ltd', location: 'London Bridge', salary: '£26,000 - £28,000', type: 'Full-time', posted: '4 days ago' },
  { title: 'Junior Data Analyst', company: 'Analytics Pro', location: 'King\'s Cross', salary: '£30,000 - £35,000', type: 'Full-time', posted: '2 days ago' },
]

const testimonials = [
  {
    quote: "Graduated Quest found me my dream role at a top investment bank within 3 weeks of graduating. Their support throughout the application process was invaluable.",
    name: "Emma Richardson",
    role: "Graduate Analyst",
    company: "JP Morgan",
    university: "LSE Economics Graduate"
  },
  {
    quote: "As an employer, we've partnered with Graduated Quest for 3 years. They consistently deliver high-calibre candidates who hit the ground running.",
    name: "James Thornton",
    role: "HR Director",
    company: "Deloitte UK",
    isEmployer: true
  },
  {
    quote: "The interview coaching and CV review completely transformed my job search. I went from zero responses to multiple offers in just a month.",
    name: "Michael Chen",
    role: "Graduate Developer",
    company: "Google",
    university: "Imperial Computing Graduate"
  }
]

const employers = [
  'Deloitte', 'PwC', 'EY', 'KPMG', 'Goldman Sachs', 'Barclays', 'HSBC', 'Google', 'Amazon', 'Microsoft', 'Unilever', 'GSK'
]

const services = [
  {
    title: 'CV Optimisation',
    description: 'Expert review and optimisation of your CV to stand out to London employers and pass ATS systems.',
    icon: '📄'
  },
  {
    title: 'Interview Coaching',
    description: 'One-on-one preparation for competency, technical, and assessment centre interviews.',
    icon: '🎯'
  },
  {
    title: 'Career Guidance',
    description: 'Personalised advice on career paths, industries, and opportunities that match your skills.',
    icon: '🧭'
  },
  {
    title: 'Salary Negotiation',
    description: 'Expert support to help you secure the best possible package for your graduate role.',
    icon: '💰'
  },
  {
    title: 'Graduate Schemes',
    description: 'Exclusive access to structured graduate programmes at leading UK companies.',
    icon: '🎓'
  },
  {
    title: 'Ongoing Support',
    description: 'Continued guidance throughout your probation and early career development.',
    icon: '🤝'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-600">Graduated</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                  For Graduates
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/jobs" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Search Jobs</Link>
                  <Link href="/cv-tips" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">CV Tips</Link>
                  <Link href="/interview-guide" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Interview Guide</Link>
                  <Link href="/salary-guide" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Salary Guide</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                  For Employers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/hire-graduates" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Hire Graduates</Link>
                  <Link href="/services" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Our Services</Link>
                  <Link href="/pricing" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Pricing</Link>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/register" className="hidden sm:block text-blue-600 hover:text-blue-700 font-semibold">
                Register
              </Link>
              <Link href="/jobs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Jobs
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                London&apos;s #1 Graduate Recruitment Agency
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Launch Your Career with<br />
                <span className="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent">London&apos;s Top Employers</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                We connect ambitious university graduates with leading UK employers.
                Expert career guidance, CV support, and interview coaching to help you land your dream graduate role.
              </p>
            </div>

            {/* Job Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Job Title or Keywords</label>
                  <input
                    type="text"
                    placeholder="e.g. Marketing Graduate, Analyst"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>All London</option>
                    <option>City of London</option>
                    <option>Canary Wharf</option>
                    <option>Shoreditch</option>
                    <option>Westminster</option>
                    <option>Remote</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Jobs
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Graduate Schemes</button>
                <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Marketing</button>
                <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Finance</button>
                <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Software Developer</button>
                <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">Consulting</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600 font-medium">Graduates Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">850+</div>
                <div className="text-gray-600 font-medium">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">£32k</div>
                <div className="text-gray-600 font-medium">Average Salary</div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Graduate Recruitment Agencies London - Explore by Sector
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As one of London&apos;s leading graduate recruitment agencies, we specialise in placing
                talented graduates across all major industries.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {jobCategories.map((category) => (
                <Link
                  key={category.name}
                  href={`/jobs?category=${encodeURIComponent(category.name)}`}
                  className={`category-card ${category.color}`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} jobs</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                How Our Graduate Recruitment Agency Works
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                From registration to your first day, we support you every step of the way.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Register', desc: 'Create your profile and upload your CV in minutes.' },
                { step: '02', title: 'Get Matched', desc: 'Our consultants match you with suitable graduate roles.' },
                { step: '03', title: 'Interview Prep', desc: 'Receive expert coaching and preparation support.' },
                { step: '04', title: 'Start Your Career', desc: 'Accept your offer and begin your graduate journey.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  Latest Graduate Jobs in London
                </h2>
                <p className="text-gray-600">Fresh opportunities from top UK employers</p>
              </div>
              <Link href="/jobs" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                View All Jobs
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map((job, index) => (
                <div key={index} className="job-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded mb-2">
                        {job.posted}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 hover:text-blue-600 transition">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary}
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Why Choose Our Graduate Recruitment Agency?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive support services to help you succeed in your graduate job search.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Success Stories from Our Graduates
              </h2>
              <p className="text-lg text-gray-600">
                Hear from candidates and employers who found success with Graduated Quest.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    {testimonial.university && (
                      <p className="text-sm text-blue-600">{testimonial.university}</p>
                    )}
                    {testimonial.isEmployer && (
                      <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                        Employer Partner
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UK Locations */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Graduate Recruitment Agency Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We recruit graduates across major UK cities. Find opportunities near you.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { city: 'London', jobs: '500+', href: '/locations/london' },
                { city: 'Manchester', jobs: '200+', href: '/locations/manchester' },
                { city: 'Birmingham', jobs: '150+', href: '/locations/birmingham' },
                { city: 'Leeds', jobs: '100+', href: '/locations/leeds' },
                { city: 'Bristol', jobs: '80+', href: '/locations/bristol' },
                { city: 'Edinburgh', jobs: '90+', href: '/locations/edinburgh' },
              ].map((location) => (
                <Link
                  key={location.city}
                  href={location.href}
                  className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl p-4 text-center transition group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">{location.city}</h3>
                  <p className="text-sm text-gray-500">{location.jobs} jobs</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist Sectors */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Specialist Graduate Recruitment
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated recruitment teams for specialist degree disciplines.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Engineering', icon: '⚙️', href: '/sectors/engineering', color: 'bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300' },
                { name: 'IT & Tech', icon: '💻', href: '/sectors/it', color: 'bg-purple-50 hover:bg-purple-100 border-purple-200 hover:border-purple-300' },
                { name: 'STEM', icon: '🔬', href: '/sectors/stem', color: 'bg-teal-50 hover:bg-teal-100 border-teal-200 hover:border-teal-300' },
                { name: 'Science', icon: '🧬', href: '/sectors/science', color: 'bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300' },
                { name: 'Psychology', icon: '🧠', href: '/sectors/psychology', color: 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 hover:border-indigo-300' },
              ].map((sector) => (
                <Link
                  key={sector.name}
                  href={sector.href}
                  className={`${sector.color} border rounded-xl p-6 text-center transition group`}
                >
                  <div className="text-4xl mb-3">{sector.icon}</div>
                  <h3 className="font-bold text-gray-900">{sector.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Logos */}
        <section className="py-16 px-4 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 font-medium mb-8">
              Trusted by leading employers across London and the UK
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {employers.map((employer) => (
                <div key={employer} className="text-xl md:text-2xl font-bold text-gray-300 hover:text-gray-500 transition">
                  {employer}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Graduate Recruitment Agencies London: Your Complete Guide
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Finding the right graduate recruitment agency in London can make all the difference
                in launching your career. At Graduated Quest, we specialise in connecting talented
                university graduates with leading UK employers across finance, technology, marketing,
                and more.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                What Do Graduate Recruitment Agencies Do?
              </h3>
              <p className="mb-4">
                Graduate recruitment agencies act as intermediaries between job-seeking graduates
                and employers looking to hire entry-level talent. We maintain relationships with
                hundreds of London-based companies, giving you access to opportunities that may
                not be advertised elsewhere.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Benefits of Using a Graduate Recruitment Agency in London
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access to exclusive graduate schemes and entry-level positions</li>
                <li>Expert CV and application support tailored to London employers</li>
                <li>Interview preparation and coaching for assessment centres</li>
                <li>Salary negotiation guidance to maximise your starting package</li>
                <li>Industry insights and career advice from experienced consultants</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Popular Graduate Sectors in London
              </h3>
              <p className="mb-4">
                London offers diverse opportunities for graduates across investment banking,
                consulting, technology, marketing, law, and the public sector. Our specialist
                recruiters have deep expertise in each sector, ensuring you receive relevant
                guidance for your chosen career path.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Your Graduate Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of graduates who have launched successful careers with Graduated Quest.
              Register today and get matched with your perfect role.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Register as Graduate
              </Link>
              <Link href="/hire-graduates" className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-lg transition">
                Hire Graduates
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do graduate recruitment agencies charge graduates?',
                  a: 'No, our services are completely free for graduates. Employers pay us to find talented candidates like you.'
                },
                {
                  q: 'What qualifications do I need to register?',
                  a: 'We work with graduates from all degree disciplines. Whether you have a 1st or 2:2, we can help you find the right opportunity.'
                },
                {
                  q: 'How long does it take to find a graduate job?',
                  a: 'On average, our candidates secure roles within 4-6 weeks of registering. However, this varies based on your flexibility and the market.'
                },
                {
                  q: 'Do you only have jobs in London?',
                  a: 'While we specialise in London-based roles, we also have opportunities across the UK, including remote positions.'
                },
                {
                  q: 'What support do you provide during the application process?',
                  a: 'We offer CV reviews, interview coaching, assessment centre preparation, and ongoing support until you start your new role.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl px-6 py-5 group border border-gray-200">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.q}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-black text-white">Graduated</span>
                <span className="text-2xl font-black text-pink-400">Quest</span>
              </Link>
              <p className="text-gray-400 mb-4">
                London&apos;s leading graduate recruitment agency connecting talented graduates with top UK employers.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">For Graduates</h4>
              <ul className="space-y-2">
                <li><Link href="/jobs" className="text-gray-400 hover:text-white transition">Search Jobs</Link></li>
                <li><Link href="/register" className="text-gray-400 hover:text-white transition">Register</Link></li>
                <li><Link href="/cv-tips" className="text-gray-400 hover:text-white transition">CV Tips</Link></li>
                <li><Link href="/interview-guide" className="text-gray-400 hover:text-white transition">Interview Guide</Link></li>
                <li><Link href="/salary-guide" className="text-gray-400 hover:text-white transition">Salary Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">For Employers</h4>
              <ul className="space-y-2">
                <li><Link href="/hire-graduates" className="text-gray-400 hover:text-white transition">Hire Graduates</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition">Our Services</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition">Case Studies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Graduated Quest. All rights reserved. Graduate Recruitment Agency London.
              </p>
              <p className="text-gray-500 text-sm">
                Connecting graduates with London&apos;s best employers since 2020.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
