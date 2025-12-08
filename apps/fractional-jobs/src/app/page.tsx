import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional Jobs UK 2025 | Find Fractional Executive Roles in London | Fractional Quest',
  description: 'Discover the best fractional jobs in the UK. Browse fractional CFO, CMO, CTO and executive roles in London. Connect with leading fractional recruitment agencies and find flexible leadership opportunities.',
  keywords: 'fractional jobs, fractional jobs UK, fractional jobs London, fractional recruitment agencies, fractional CFO, fractional CMO, fractional CTO, fractional executive, part-time executive, interim executive UK',
}

const fractionalRoles = [
  { name: 'Fractional CFO', icon: '💰', count: 47, color: 'bg-emerald-50 hover:bg-emerald-100', description: 'Financial leadership on demand' },
  { name: 'Fractional CMO', icon: '📢', count: 38, color: 'bg-pink-50 hover:bg-pink-100', description: 'Marketing strategy & execution' },
  { name: 'Fractional CTO', icon: '💻', count: 52, color: 'bg-blue-50 hover:bg-blue-100', description: 'Technology leadership' },
  { name: 'Fractional COO', icon: '⚙️', count: 31, color: 'bg-orange-50 hover:bg-orange-100', description: 'Operations excellence' },
  { name: 'Fractional HR Director', icon: '👥', count: 29, color: 'bg-purple-50 hover:bg-purple-100', description: 'People & culture' },
  { name: 'Fractional Sales Director', icon: '📈', count: 35, color: 'bg-teal-50 hover:bg-teal-100', description: 'Revenue growth' },
]

const featuredJobs = [
  {
    id: 1,
    title: 'Fractional CFO',
    company: 'Tech Startup (Series A)',
    location: 'London, UK',
    type: 'Remote / Hybrid',
    commitment: '2-3 days/week',
    rate: '800 - 1,200',
    currency: 'GBP',
    period: 'day',
    badges: ['Featured', 'Equity Option'],
    description: 'Seeking an experienced Fractional CFO to lead financial strategy, fundraising preparation, and board reporting for a fast-growing SaaS company.',
    postedDays: 2,
  },
  {
    id: 2,
    title: 'Fractional CMO',
    company: 'E-commerce Scale-up',
    location: 'Manchester, UK',
    type: 'Remote',
    commitment: '2 days/week',
    rate: '700 - 900',
    currency: 'GBP',
    period: 'day',
    badges: ['Remote', 'UK-Wide'],
    description: 'Leading e-commerce brand seeking a Fractional CMO to drive digital marketing strategy and customer acquisition.',
    postedDays: 3,
  },
  {
    id: 3,
    title: 'Fractional CTO',
    company: 'FinTech Startup',
    location: 'London, UK',
    type: 'Hybrid',
    commitment: '3 days/week',
    rate: '900 - 1,400',
    currency: 'GBP',
    period: 'day',
    badges: ['London', 'FinTech'],
    description: 'FinTech startup seeking a Fractional CTO to lead technical architecture, team building, and product development.',
    postedDays: 1,
  },
  {
    id: 4,
    title: 'Fractional HR Director',
    company: 'Professional Services Firm',
    location: 'Birmingham, UK',
    type: 'Hybrid',
    commitment: '1-2 days/week',
    rate: '600 - 800',
    currency: 'GBP',
    period: 'day',
    badges: ['Part-Time', 'Midlands'],
    description: 'Growing professional services firm seeking a Fractional HR Director to establish people processes and culture.',
    postedDays: 5,
  },
]

const benefits = [
  {
    icon: '💷',
    title: 'Earn More Per Hour',
    description: 'Fractional executives in the UK typically earn £600-£1,500 per day, often exceeding full-time equivalent salaries.',
  },
  {
    icon: '🎯',
    title: 'Multiple Clients',
    description: 'Work with 2-4 companies simultaneously, diversifying your income and expanding your experience.',
  },
  {
    icon: '⏰',
    title: 'Flexible Schedule',
    description: 'Choose your working days and hours. Most fractional roles require 1-3 days per week per client.',
  },
  {
    icon: '🚀',
    title: 'High-Impact Work',
    description: 'Focus on strategic, high-value work without the administrative burden of a full-time role.',
  },
  {
    icon: '🌍',
    title: 'Location Freedom',
    description: 'Many UK fractional roles offer remote or hybrid working, with occasional on-site presence.',
  },
  {
    icon: '📊',
    title: 'Portfolio Career',
    description: 'Build a diverse portfolio of work across industries, company stages, and challenges.',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Browse Opportunities',
    description: 'Search fractional jobs across the UK by role, location, industry, and commitment level.',
  },
  {
    step: 2,
    title: 'Apply Directly',
    description: 'Submit your profile and experience directly to hiring companies or through fractional recruitment agencies.',
  },
  {
    step: 3,
    title: 'Interview & Agree Terms',
    description: 'Meet with potential clients, discuss scope, and negotiate your day rate and working arrangements.',
  },
  {
    step: 4,
    title: 'Start Adding Value',
    description: 'Begin your fractional engagement, delivering strategic impact from day one.',
  },
]

const testimonials = [
  {
    quote: "Moving to fractional work was the best career decision I've made. I now work with three fantastic companies across London, earning more while having better work-life balance.",
    name: "Richard Clarke",
    role: "Fractional CFO",
    companies: "3 UK Tech Companies",
  },
  {
    quote: "As a Fractional CMO, I get to work on diverse challenges across different industries. The variety keeps me sharp and the flexibility lets me be present for my family.",
    name: "Sarah Pemberton",
    role: "Fractional CMO",
    companies: "E-commerce & SaaS",
  },
  {
    quote: "The fractional model works brilliantly for scale-ups who need senior tech leadership but aren't ready for a full-time CTO. I help three companies and they all get what they need.",
    name: "David Okonkwo",
    role: "Fractional CTO",
    companies: "FinTech & HealthTech",
  },
]

const recruitmentAgencies = [
  { name: 'The Fractional Company', specialty: 'C-Suite Executives' },
  { name: 'Portfolio Executives', specialty: 'Finance & Operations' },
  { name: 'Exec Capital', specialty: 'Tech Leadership' },
  { name: 'Interim Partners', specialty: 'All Industries' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-violet-900">Fractional</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-violet-900 font-medium flex items-center gap-1">
                  Roles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/jobs?role=cfo" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-900">Fractional CFO</Link>
                  <Link href="/jobs?role=cmo" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-900">Fractional CMO</Link>
                  <Link href="/jobs?role=cto" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-900">Fractional CTO</Link>
                  <Link href="/jobs?role=coo" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-900">Fractional COO</Link>
                  <Link href="/hr" className="block px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-900">Fractional HR</Link>
                </div>
              </div>

              <Link href="/jobs" className="text-gray-700 hover:text-violet-900 font-medium">All Jobs</Link>
              <Link href="/remote" className="text-gray-700 hover:text-violet-900 font-medium">Remote</Link>
              <Link href="/london" className="text-gray-700 hover:text-violet-900 font-medium">London</Link>
              <Link href="/guide" className="text-gray-700 hover:text-violet-900 font-medium">Guide</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-900 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-5 py-2 rounded-lg transition">
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
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                {featuredJobs.length}+ New Fractional Jobs This Week
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Find Fractional Jobs<br />
                <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">in the UK</span>
              </h1>
              <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-10">
                Discover fractional executive opportunities across London and the UK.
                Browse CFO, CMO, CTO and leadership roles with top companies.
                Connect with leading fractional recruitment agencies.
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Search Roles</label>
                  <input
                    type="text"
                    placeholder="e.g. Fractional CFO, CTO"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white">
                    <option>All UK</option>
                    <option>London</option>
                    <option>Manchester</option>
                    <option>Birmingham</option>
                    <option>Remote Only</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Link href="/jobs" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <Link href="/jobs?role=cfo" className="text-sm text-violet-700 hover:text-violet-900 hover:underline">Fractional CFO</Link>
                <Link href="/london" className="text-sm text-violet-700 hover:text-violet-900 hover:underline">London Jobs</Link>
                <Link href="/jobs?type=remote" className="text-sm text-violet-700 hover:text-violet-900 hover:underline">Remote Roles</Link>
                <Link href="/agencies" className="text-sm text-violet-700 hover:text-violet-900 hover:underline">Recruitment Agencies</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">230+</div>
                <div className="text-gray-600 font-medium">Fractional Jobs UK</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">85+</div>
                <div className="text-gray-600 font-medium">London Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">£950</div>
                <div className="text-gray-600 font-medium">Average Day Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">45</div>
                <div className="text-gray-600 font-medium">Recruitment Agencies</div>
              </div>
            </div>
          </div>
        </section>

        {/* What Are Fractional Jobs Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What Are Fractional Jobs?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fractional jobs are part-time executive roles where experienced professionals work with
                companies for a fraction of the week. Instead of one full-time position, you work 1-3
                days per week with multiple companies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Leadership</h3>
                <p className="text-gray-600">Work 1-3 days per week per client. Maintain flexibility while delivering strategic impact.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Clients</h3>
                <p className="text-gray-600">Build a portfolio career working with 2-4 companies simultaneously. Diversify income and experience.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Expertise</h3>
                <p className="text-gray-600">Companies get senior CFO, CMO, CTO expertise without the cost of a full-time executive hire.</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/guide" className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 font-semibold">
                Learn how to find fractional jobs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Fractional Roles */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Explore Fractional Roles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse fractional executive positions across all functions. From Fractional CFO to CTO,
                find leadership roles that match your expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fractionalRoles.map((role) => (
                <Link
                  key={role.name}
                  href={`/jobs?role=${role.name.split(' ')[1]?.toLowerCase()}`}
                  className={`role-card ${role.color}`}
                >
                  <div className="text-4xl mb-3">{role.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{role.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{role.description}</p>
                  <p className="text-xs text-violet-700 font-semibold">{role.count} jobs available</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  Featured Fractional Jobs UK
                </h2>
                <p className="text-gray-600">Latest fractional executive opportunities in London and across the UK</p>
              </div>
              <Link href="/jobs" className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-3 rounded-lg transition">
                View All Jobs
              </Link>
            </div>

            <div className="space-y-6">
              {featuredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center text-violet-700 font-black text-xl shrink-0">
                        {job.title.split(' ')[1]?.charAt(0) || 'F'}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{job.title}</h3>
                        <p className="text-violet-700 font-medium">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location} • {job.type}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {job.badges.map((badge) => (
                        <span key={badge} className={`text-xs font-semibold px-2 py-1 rounded ${
                          badge === 'Featured' ? 'bg-amber-100 text-amber-800' :
                          badge === 'Remote' ? 'bg-green-100 text-green-800' :
                          badge === 'London' ? 'bg-violet-100 text-violet-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>{badge}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4">{job.description}</p>

                  <div className="grid md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Commitment</p>
                      <p className="font-semibold text-gray-900">{job.commitment}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Day Rate</p>
                      <p className="font-semibold text-gray-900">{job.currency} {job.rate}/{job.period}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold text-gray-900">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Posted</p>
                      <p className="font-semibold text-gray-900">{job.postedDays} days ago</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      href={`/jobs/${job.id}`}
                      className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                      View Details
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg transition">
                      Save Job
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Fractional Work */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Why Choose Fractional Work?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fractional executives enjoy flexibility, variety, and often higher earnings than traditional full-time roles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-xl p-8 border border-gray-200 card-hover">
                  <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-violet-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                How to Find Fractional Jobs in the UK
              </h2>
              <p className="text-lg text-violet-100 max-w-2xl mx-auto">
                Your journey to a fractional executive career starts here.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-violet-100">{item.description}</p>
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
                Fractional Executive Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Hear from professionals who built successful fractional careers in the UK.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="review-card">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <span className="inline-block mt-2 bg-violet-100 text-violet-800 text-xs font-semibold px-2 py-1 rounded">
                      {testimonial.companies}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Agencies */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Fractional Recruitment Agencies UK
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with specialist recruitment agencies that focus on fractional executive placements.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {recruitmentAgencies.map((agency) => (
                <div key={agency.name} className="bg-white rounded-xl p-6 border border-gray-200 text-center card-hover">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-violet-700 font-black text-lg">{agency.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{agency.name}</h3>
                  <p className="text-gray-600 text-sm">{agency.specialty}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/agencies" className="text-violet-700 hover:text-violet-900 font-semibold">
                View all fractional recruitment agencies &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Fractional Jobs UK: Your Complete Guide to Fractional Executive Careers
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Fractional jobs</strong> represent a growing trend in UK executive recruitment, offering experienced
                professionals the opportunity to work with multiple companies on a part-time basis. As a <strong>fractional
                executive</strong>, you can provide strategic leadership to businesses that need senior expertise but
                aren&apos;t ready for a full-time hire.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                What Are Fractional Jobs?
              </h3>
              <p className="mb-4">
                <strong>Fractional jobs</strong> are part-time executive roles where you work with a company for a
                fraction of the week—typically 1-3 days. Unlike interim or contract roles, fractional positions are
                ongoing relationships that allow you to build deep knowledge of multiple businesses simultaneously.
                Popular <strong>fractional roles in the UK</strong> include Fractional CFO, Fractional CMO, Fractional
                CTO, and Fractional COO positions.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional Jobs London
              </h3>
              <p className="mb-4">
                <strong>London</strong> is the UK&apos;s largest market for <strong>fractional executive jobs</strong>,
                particularly in tech, fintech, and professional services. With thousands of startups and scale-ups,
                London offers abundant opportunities for fractional leaders. Many roles offer hybrid working, combining
                office presence with remote flexibility.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Working with Fractional Recruitment Agencies
              </h3>
              <p className="mb-4">
                <strong>Fractional recruitment agencies</strong> specialise in matching experienced executives with
                companies seeking part-time leadership. These agencies understand the unique requirements of fractional
                work and can help you build a portfolio of complementary clients. Many <strong>UK fractional agencies</strong>
                focus on specific functions like finance (Fractional CFO) or technology (Fractional CTO).
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Fractional Executive Rates in the UK
              </h3>
              <p className="mb-4">
                Day rates for <strong>fractional executives in the UK</strong> typically range from £600-£1,500 per day,
                depending on the role, industry, and your experience level. <strong>Fractional CFOs</strong> and
                <strong>Fractional CTOs</strong> often command the highest rates, particularly in London&apos;s tech sector.
                Working with 2-4 clients, many fractional executives earn equivalent to or more than full-time salaries.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-900 to-violet-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Start Your Fractional Career?
            </h2>
            <p className="text-xl text-violet-100 mb-10">
              Browse the latest fractional jobs across the UK and find your next opportunity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/jobs" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse All Jobs
              </Link>
              <Link href="/agencies" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition">
                Find Agencies
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Fractional Jobs UK
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What is a fractional job?',
                  a: 'A fractional job is a part-time executive role where you work with a company for a portion of the week, typically 1-3 days. This allows you to work with multiple companies simultaneously while providing them with senior-level expertise.'
                },
                {
                  q: 'How much do fractional executives earn in the UK?',
                  a: 'Fractional executive day rates in the UK typically range from £600-£1,500 per day depending on the role and industry. Fractional CFOs and CTOs often command higher rates, particularly in London. Working with multiple clients, annual earnings can exceed £200,000.'
                },
                {
                  q: 'What are the most common fractional roles?',
                  a: 'The most common fractional roles include Fractional CFO (Chief Financial Officer), Fractional CMO (Chief Marketing Officer), Fractional CTO (Chief Technology Officer), Fractional COO (Chief Operating Officer), and Fractional HR Director. These C-suite positions are well-suited to fractional arrangements.'
                },
                {
                  q: 'Are fractional jobs only in London?',
                  a: 'While London has the highest concentration of fractional opportunities, there are fractional jobs across the UK including Manchester, Birmingham, Leeds, and Edinburgh. Many fractional roles also offer remote working, allowing you to work with companies nationwide.'
                },
                {
                  q: 'How do I find fractional recruitment agencies?',
                  a: 'Fractional recruitment agencies specialise in placing executives in part-time leadership roles. You can find UK-based fractional agencies through our directory, LinkedIn, or industry associations. Many agencies focus on specific functions like finance or technology.'
                },
                {
                  q: 'Is fractional work suitable for me?',
                  a: 'Fractional work suits experienced executives (typically 15+ years experience) who want flexibility, variety, and the ability to work with multiple companies. It requires strong time management, the ability to context-switch, and comfort with less job security than permanent roles.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl px-6 py-5 group border border-gray-200">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.q}
                    <span className="text-violet-700 group-open:rotate-45 transition-transform text-xl">+</span>
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
                <span className="text-2xl font-black text-white">Fractional</span>
                <span className="text-2xl font-black text-amber-400">Quest</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted source for fractional executive jobs across the UK.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Fractional Roles</h4>
              <ul className="space-y-2">
                <li><Link href="/jobs?role=cfo" className="text-gray-400 hover:text-white transition">Fractional CFO</Link></li>
                <li><Link href="/jobs?role=cmo" className="text-gray-400 hover:text-white transition">Fractional CMO</Link></li>
                <li><Link href="/jobs?role=cto" className="text-gray-400 hover:text-white transition">Fractional CTO</Link></li>
                <li><Link href="/jobs?role=coo" className="text-gray-400 hover:text-white transition">Fractional COO</Link></li>
                <li><Link href="/jobs" className="text-gray-400 hover:text-white transition">All Fractional Jobs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Locations</h4>
              <ul className="space-y-2">
                <li><Link href="/london" className="text-gray-400 hover:text-white transition">London</Link></li>
                <li><Link href="/jobs?location=manchester" className="text-gray-400 hover:text-white transition">Manchester</Link></li>
                <li><Link href="/jobs?location=birmingham" className="text-gray-400 hover:text-white transition">Birmingham</Link></li>
                <li><Link href="/jobs?type=remote" className="text-gray-400 hover:text-white transition">Remote UK</Link></li>
                <li><Link href="/jobs" className="text-gray-400 hover:text-white transition">All UK Locations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">Recruitment Agencies</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Articles & Guides</Link></li>
                <li><Link href="/articles/fractional-salary-guide" className="text-gray-400 hover:text-white transition">Salary Guide</Link></li>
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
                &copy; 2025 Fractional Quest. All rights reserved. Fractional Jobs UK.
              </p>
              <p className="text-gray-500 text-sm">
                Find fractional executive jobs across London and the UK.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
