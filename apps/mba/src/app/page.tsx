import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Online MBA Programs 2025 | Compare Top MBA Courses | MBA Quest',
  description: 'Discover the best online MBA programs for 2025. Compare rankings, fees, duration and reviews of top business schools worldwide. Find your perfect MBA online degree.',
  keywords: 'MBA online, online MBA programs, best online MBA 2025, MBA rankings, online MBA UK, executive MBA online, global online MBA, MBA comparison, business school rankings',
}

const programTypes = [
  { name: 'Online MBA', icon: '💻', count: 156, color: 'bg-blue-50 hover:bg-blue-100', description: 'Flexible study from anywhere' },
  { name: 'Executive MBA', icon: '👔', count: 89, color: 'bg-purple-50 hover:bg-purple-100', description: 'For senior professionals' },
  { name: 'Global MBA', icon: '🌍', count: 67, color: 'bg-green-50 hover:bg-green-100', description: 'International business focus' },
  { name: 'Part-Time MBA', icon: '⏰', count: 124, color: 'bg-orange-50 hover:bg-orange-100', description: 'Balance work and study' },
  { name: 'Full-Time MBA', icon: '📚', count: 203, color: 'bg-pink-50 hover:bg-pink-100', description: 'Intensive campus experience' },
  { name: 'Mini MBA', icon: '🎯', count: 45, color: 'bg-teal-50 hover:bg-teal-100', description: 'Short executive programs' },
]

const topPrograms = [
  {
    rank: 1,
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    location: 'London, UK',
    duration: '21-32 months',
    fee: '57,000',
    currency: 'GBP',
    rating: 4.9,
    reviews: 234,
    badges: ['QS Ranked #1 Online', 'Triple Accredited'],
    highlights: ['Flexible duration options', '50+ nationalities', 'Live online sessions'],
  },
  {
    rank: 2,
    name: 'University of London',
    program: 'Global MBA',
    location: 'London, UK',
    duration: '24-72 months',
    fee: '22,000',
    currency: 'GBP',
    rating: 4.7,
    reviews: 412,
    badges: ['Affordable', 'Highly Flexible'],
    highlights: ['LSE-developed curriculum', 'Self-paced learning', 'Global alumni network'],
  },
  {
    rank: 3,
    name: 'Durham University Business School',
    program: 'Online MBA',
    location: 'Durham, UK',
    duration: '24-36 months',
    fee: '28,000',
    currency: 'GBP',
    rating: 4.8,
    reviews: 187,
    badges: ['Triple Accredited', 'Top 100 Global'],
    highlights: ['2 residential weeks', 'Industry projects', 'Career coaching'],
  },
  {
    rank: 4,
    name: 'Warwick Business School',
    program: 'Distance Learning MBA',
    location: 'Coventry, UK',
    duration: '24-48 months',
    fee: '35,300',
    currency: 'GBP',
    rating: 4.8,
    reviews: 298,
    badges: ['FT Top 10 Online MBA', 'Triple Accredited'],
    highlights: ['Blended learning', 'Strong alumni network', 'Leadership focus'],
  },
  {
    rank: 5,
    name: 'IE Business School',
    program: 'Global Online MBA',
    location: 'Madrid, Spain',
    duration: '18 months',
    fee: '50,200',
    currency: 'EUR',
    rating: 4.7,
    reviews: 356,
    badges: ['QS Top 5 Online', 'Innovative Pedagogy'],
    highlights: ['Liquid learning format', 'Tech-focused', 'Entrepreneurship track'],
  },
  {
    rank: 6,
    name: 'INSEAD',
    program: 'Executive MBA',
    location: 'France/Singapore',
    duration: '14-17 months',
    fee: '115,000',
    currency: 'EUR',
    rating: 4.9,
    reviews: 178,
    badges: ['#1 Executive MBA', 'Elite Network'],
    highlights: ['Multi-campus experience', 'Senior cohort', 'Global immersions'],
  },
]

const comparisonFeatures = [
  { feature: 'Average Duration', online: '24-36 months', campus: '12-24 months' },
  { feature: 'Average Cost', online: '20,000 - 60,000', campus: '40,000 - 150,000' },
  { feature: 'Work While Studying', online: 'Yes - Full flexibility', campus: 'Limited - Part-time only' },
  { feature: 'Networking', online: 'Virtual + Optional residencies', campus: 'In-person daily' },
  { feature: 'Career Support', online: 'Online coaching + Resources', campus: 'On-campus career centre' },
  { feature: 'Global Accessibility', online: 'Study from anywhere', campus: 'Relocation required' },
]

const testimonials = [
  {
    quote: "The online MBA from Imperial transformed my career. I was promoted to Director within 6 months of graduating while working full-time throughout the programme.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Tech Global Ltd",
    program: "Imperial Global Online MBA"
  },
  {
    quote: "The flexibility of the University of London MBA allowed me to balance my startup while gaining world-class business education. The ROI has been exceptional.",
    name: "James Chen",
    role: "Founder & CEO",
    company: "FinTech Innovations",
    program: "UoL Global MBA"
  },
  {
    quote: "Durham's Online MBA provided the perfect blend of academic rigour and practical application. The residential weeks were invaluable for networking.",
    name: "Emma Thompson",
    role: "Senior Consultant",
    company: "McKinsey & Company",
    program: "Durham Online MBA"
  }
]

const accreditations = [
  { name: 'AACSB', description: 'Association to Advance Collegiate Schools of Business' },
  { name: 'AMBA', description: 'Association of MBAs' },
  { name: 'EQUIS', description: 'European Quality Improvement System' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-900">MBA</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-900 font-medium flex items-center gap-1">
                  Programs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/programs?type=online" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900">Online MBA Programs</Link>
                  <Link href="/programs?type=executive" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900">Executive MBA</Link>
                  <Link href="/programs?type=global" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900">Global MBA</Link>
                  <Link href="/programs?type=part-time" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900">Part-Time MBA</Link>
                </div>
              </div>

              <Link href="/programs" className="text-gray-700 hover:text-blue-900 font-medium">All Programs</Link>
              <Link href="/compare" className="text-gray-700 hover:text-blue-900 font-medium">Compare</Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-900 font-medium">Articles</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/programs" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Your MBA
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
                2025 Rankings Updated
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Find the Best<br />
                <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">Online MBA Programs</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Compare top-ranked online MBA programs from leading business schools worldwide.
                Expert reviews, detailed rankings, and comprehensive guides to help you choose
                the right MBA online degree for your career.
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Search Programs</label>
                  <input
                    type="text"
                    placeholder="e.g. Online MBA, Executive MBA"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Program Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                    <option>All Types</option>
                    <option>Online MBA</option>
                    <option>Executive MBA</option>
                    <option>Global MBA</option>
                    <option>Part-Time MBA</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Link href="/programs" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <Link href="/programs?type=online" className="text-sm text-blue-900 hover:text-blue-700 hover:underline">Online MBA UK</Link>
                <Link href="/programs?type=executive" className="text-sm text-blue-900 hover:text-blue-700 hover:underline">Executive MBA</Link>
                <Link href="/programs?budget=affordable" className="text-sm text-blue-900 hover:text-blue-700 hover:underline">Affordable MBA</Link>
                <Link href="/programs?accreditation=triple" className="text-sm text-blue-900 hover:text-blue-700 hover:underline">Triple Accredited</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">MBA Programs Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">150+</div>
                <div className="text-gray-600 font-medium">Business Schools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">50k+</div>
                <div className="text-gray-600 font-medium">Student Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">35</div>
                <div className="text-gray-600 font-medium">Countries Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Explore MBA Online Program Types
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you&apos;re looking for a flexible online MBA, an intensive executive program,
                or a global business education, we have reviews for every type of MBA.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {programTypes.map((type) => (
                <Link
                  key={type.name}
                  href={`/programs?type=${type.name.toLowerCase().replace(' ', '-')}`}
                  className={`category-card ${type.color}`}
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{type.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{type.description}</p>
                  <p className="text-xs text-blue-900 font-semibold">{type.count} programs</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Ranked Programs */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  Top Online MBA Programs 2025
                </h2>
                <p className="text-gray-600">Expert-reviewed rankings of the best MBA online degrees worldwide</p>
              </div>
              <Link href="/programs" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition">
                View All Rankings
              </Link>
            </div>

            <div className="space-y-6">
              {topPrograms.map((program) => (
                <div key={program.rank} className="program-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0">
                        #{program.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{program.name}</h3>
                        <p className="text-blue-900 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:ml-auto">
                      {program.badges.map((badge) => (
                        <span key={badge} className="badge-featured">{badge}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tuition Fee</p>
                      <p className="font-semibold text-gray-900">{program.currency} {program.fee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-gray-900">{program.rating}</span>
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-500">({program.reviews} reviews)</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Highlights</p>
                      <p className="text-sm text-gray-700">{program.highlights[0]}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                      View Full Review
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg transition">
                      Add to Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Campus Comparison */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Online MBA vs Campus MBA
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understand the key differences to make an informed decision about your MBA online degree.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="p-4 font-semibold text-gray-700">Feature</div>
                <div className="p-4 font-semibold text-blue-900 text-center bg-blue-50">Online MBA</div>
                <div className="p-4 font-semibold text-gray-700 text-center">Campus MBA</div>
              </div>
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 comparison-row border-b border-gray-100 last:border-0">
                  <div className="p-4 font-medium text-gray-900">{item.feature}</div>
                  <div className="p-4 text-center text-blue-900 bg-blue-50/50">{item.online}</div>
                  <div className="p-4 text-center text-gray-600">{item.campus}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/compare" className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold">
                Compare specific programs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Online MBA */}
        <section className="py-20 px-4 bg-blue-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Why Choose an Online MBA?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                An MBA online degree offers flexibility without compromising on quality or career outcomes.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: '💼', title: 'Continue Working', desc: 'Earn your MBA while maintaining your career and income.' },
                { icon: '🌐', title: 'Global Network', desc: 'Connect with diverse professionals from around the world.' },
                { icon: '💰', title: 'Cost Effective', desc: 'Save on relocation, housing, and opportunity costs.' },
                { icon: '🎯', title: 'Same Outcomes', desc: 'Graduates earn similar salaries to campus MBA holders.' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
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
                MBA Graduate Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Hear from professionals who transformed their careers with an online MBA.
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
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                    <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {testimonial.program}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditation Guide */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Understanding MBA Accreditations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Look for these gold-standard accreditations when choosing your MBA online program.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {accreditations.map((acc) => (
                <div key={acc.name} className="bg-white rounded-xl p-6 border border-gray-200 text-center card-hover">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-black text-lg">{acc.name}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{acc.name}</h3>
                  <p className="text-gray-600 text-sm">{acc.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                <strong>Triple Accredited</strong> programs hold all three accreditations - only 1% of business schools worldwide achieve this distinction.
              </p>
              <Link href="/articles/mba-accreditations-guide" className="text-blue-900 hover:text-blue-700 font-semibold">
                Read our complete accreditation guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Online MBA Programs: Your Complete Guide to Business Education
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                An <strong>online MBA</strong> (Master of Business Administration) offers professionals the opportunity to earn
                a prestigious business qualification while continuing their careers. With advances in educational technology,
                today&apos;s <strong>MBA online programs</strong> deliver the same rigorous curriculum and career outcomes as
                traditional campus-based degrees.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                What Makes a Great Online MBA Program?
              </h3>
              <p className="mb-4">
                The best <strong>online MBA programs</strong> combine academic excellence with practical flexibility. Key factors
                to consider include accreditation status (AACSB, AMBA, EQUIS), faculty credentials, curriculum relevance,
                technology platform, networking opportunities, and career support services.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Benefits of Studying MBA Online
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Flexibility to study around work and family commitments</li>
                <li>No relocation required - study from anywhere in the world</li>
                <li>Lower overall costs compared to full-time campus programs</li>
                <li>Immediate application of learning to your current role</li>
                <li>Access to diverse, global cohorts and perspectives</li>
                <li>Same accreditation and recognition as campus MBA degrees</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Top Online MBA Schools in the UK
              </h3>
              <p className="mb-4">
                The UK hosts some of the world&apos;s most respected <strong>online MBA programs</strong>. Imperial College
                Business School, University of London, Durham University Business School, and Warwick Business School
                consistently rank among the top global providers of MBA online education, offering world-class faculty
                and strong alumni networks.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Career Outcomes and ROI
              </h3>
              <p className="mb-4">
                Graduates of top <strong>online MBA programs</strong> report significant career advancement. On average,
                MBA holders see salary increases of 30-50% within two years of graduation. Many programs also offer
                career services, executive coaching, and access to exclusive job boards and networking events.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Find Your Perfect MBA Online?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Compare programs, read reviews, and make an informed decision about your business education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programs" className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse All Programs
              </Link>
              <Link href="/compare" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition">
                Compare Programs
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Online MBA Programs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Are online MBA programs respected by employers?',
                  a: 'Yes, online MBA programs from accredited business schools are highly respected. Many top employers actively recruit from leading online MBA programs, and graduates achieve similar career outcomes to campus MBA holders.'
                },
                {
                  q: 'How long does an online MBA take to complete?',
                  a: 'Most online MBA programs take 18-36 months to complete, depending on your pace and the program structure. Many offer flexible timelines allowing you to accelerate or extend based on your schedule.'
                },
                {
                  q: 'What is the typical cost of an online MBA?',
                  a: 'Online MBA tuition ranges from approximately 15,000 to 100,000+ depending on the institution. Top-ranked programs typically cost between 35,000 - 60,000. Many schools offer payment plans and scholarships.'
                },
                {
                  q: 'Can I work while completing an online MBA?',
                  a: 'Absolutely. Online MBA programs are designed for working professionals. Most students maintain full-time employment throughout their studies, typically dedicating 15-25 hours per week to coursework.'
                },
                {
                  q: 'What are the admission requirements for online MBA programs?',
                  a: 'Common requirements include a bachelor\'s degree, professional work experience (typically 3+ years), GMAT/GRE scores (increasingly optional), essays, recommendations, and an interview. Requirements vary by school.'
                },
                {
                  q: 'Do online MBA students get networking opportunities?',
                  a: 'Yes, leading online MBA programs offer extensive networking through virtual events, optional residencies, regional meetups, and active alumni networks. Many students form lasting professional relationships with global cohorts.'
                }
              ].map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl px-6 py-5 group border border-gray-200">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.q}
                    <span className="text-blue-900 group-open:rotate-45 transition-transform text-xl">+</span>
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
                <span className="text-2xl font-black text-white">MBA</span>
                <span className="text-2xl font-black text-amber-400">Quest</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted guide to finding the best online MBA programs worldwide.
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
              <h4 className="font-bold text-lg mb-4">MBA Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/programs?type=online" className="text-gray-400 hover:text-white transition">Online MBA</Link></li>
                <li><Link href="/programs?type=executive" className="text-gray-400 hover:text-white transition">Executive MBA</Link></li>
                <li><Link href="/programs?type=global" className="text-gray-400 hover:text-white transition">Global MBA</Link></li>
                <li><Link href="/programs?type=part-time" className="text-gray-400 hover:text-white transition">Part-Time MBA</Link></li>
                <li><Link href="/programs" className="text-gray-400 hover:text-white transition">All Programs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Articles & Guides</Link></li>
                <li><Link href="/compare" className="text-gray-400 hover:text-white transition">Compare Programs</Link></li>
                <li><Link href="/articles/mba-accreditations-guide" className="text-gray-400 hover:text-white transition">Accreditation Guide</Link></li>
                <li><Link href="/articles/mba-salary-guide" className="text-gray-400 hover:text-white transition">MBA Salary Guide</Link></li>
                <li><Link href="/articles/gmat-guide" className="text-gray-400 hover:text-white transition">GMAT Preparation</Link></li>
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
                &copy; 2025 MBA Quest. All rights reserved. Online MBA Reviews & Rankings.
              </p>
              <p className="text-gray-500 text-sm">
                Helping professionals find the best MBA online programs worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
