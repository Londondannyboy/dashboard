import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Sample program data - in production, this would come from a database
const programsData: Record<string, {
  name: string
  program: string
  school: string
  location: string
  country: string
  type: string
  duration: string
  fee: number
  currency: string
  rating: number
  reviews: number
  accreditations: string[]
  rankings: { source: string; rank: string }[]
  overview: string
  curriculum: string[]
  admissions: { requirement: string; detail: string }[]
  careerOutcomes: { metric: string; value: string }[]
  highlights: string[]
  pros: string[]
  cons: string[]
}> = {
  'imperial-global-online-mba': {
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    school: 'Imperial College London',
    location: 'London, UK',
    country: 'UK',
    type: 'Online',
    duration: '21-32 months',
    fee: 57000,
    currency: 'GBP',
    rating: 4.9,
    reviews: 234,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    rankings: [
      { source: 'QS Online MBA Rankings 2024', rank: '#1 in the World' },
      { source: 'Financial Times', rank: 'Top 10 Online MBA' },
      { source: 'The Economist', rank: 'Top 5 UK Business School' },
    ],
    overview: `Imperial College Business School's Global Online MBA is consistently ranked as the world's best online MBA program. The program combines academic excellence with practical business application, delivered through an innovative digital learning platform called "The Hub".

Students benefit from Imperial's world-class faculty, rigorous curriculum, and strong connections to industry. The program attracts high-calibre professionals from over 50 nationalities, creating a truly global learning experience.`,
    curriculum: [
      'Business Economics',
      'Corporate Finance',
      'Marketing Management',
      'Operations Management',
      'Strategy',
      'Organisational Behaviour',
      'Digital Business & Analytics',
      'Global Business Environment',
      'Entrepreneurship',
      'Leadership',
    ],
    admissions: [
      { requirement: 'Work Experience', detail: 'Minimum 3 years professional experience' },
      { requirement: 'Education', detail: 'Bachelor\'s degree or equivalent' },
      { requirement: 'GMAT/GRE', detail: 'Optional but recommended (650+ preferred)' },
      { requirement: 'English', detail: 'IELTS 7.0 or TOEFL 100 (for non-native speakers)' },
      { requirement: 'Application', detail: 'Essays, CV, references, interview' },
    ],
    careerOutcomes: [
      { metric: 'Average Salary Increase', value: '48%' },
      { metric: 'Career Change Rate', value: '67%' },
      { metric: 'Promotion Rate', value: '89%' },
      { metric: 'Employment Rate', value: '98%' },
    ],
    highlights: [
      'Ranked #1 Online MBA globally by QS',
      'Triple accredited (AACSB, AMBA, EQUIS)',
      'Flexible duration: 21, 24, or 32 months',
      'Live online sessions with global cohort',
      'Optional London campus residency',
      'Strong alumni network of 45,000+',
    ],
    pros: [
      'World-class reputation and rankings',
      'Excellent career services and outcomes',
      'Flexible study options',
      'Diverse, senior cohort',
      'Strong industry connections',
    ],
    cons: [
      'Higher tuition compared to some alternatives',
      'Intensive workload',
      'Limited face-to-face networking',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const program = programsData[slug]

  if (!program) {
    return {
      title: 'Program Not Found | MBA Quest',
    }
  }

  return {
    title: `${program.program} - ${program.name} Review | MBA Quest`,
    description: `Comprehensive review of ${program.name}'s ${program.program}. Tuition: ${program.currency} ${program.fee.toLocaleString()}. Duration: ${program.duration}. Rating: ${program.rating}/5.`,
    keywords: `${program.name} MBA, ${program.program} review, ${program.school} MBA, online MBA ${program.country}`,
  }
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params
  const program = programsData[slug]

  if (!program) {
    notFound()
  }

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
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link href="/programs" className="text-gray-700 hover:text-blue-900 font-medium">All Programs</Link>
              <Link href="/compare" className="text-gray-700 hover:text-blue-900 font-medium">Compare</Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-900 font-medium">Articles</Link>
            </div>

            <Link href="/programs" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition">
              Find Your MBA
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/programs" className="hover:text-blue-900">Programs</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{program.name}</span>
          </nav>
        </div>

        {/* Program Header */}
        <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-featured">Featured Review</span>
                  <span className="badge-online">{program.type} MBA</span>
                  {program.accreditations.length === 3 && (
                    <span className="badge-ranking">Triple Accredited</span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {program.program}
                </h1>
                <p className="text-xl text-blue-900 font-medium mb-2">{program.name}</p>
                <p className="text-gray-600">{program.location}</p>

                <div className="flex flex-wrap items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${star <= Math.round(program.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{program.rating}</span>
                    <span className="text-gray-500">({program.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Key Info Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 lg:w-80 shrink-0">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition Fee</span>
                    <span className="font-bold text-gray-900">{program.currency} {program.fee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold text-gray-900">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format</span>
                    <span className="font-bold text-gray-900">{program.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accreditation</span>
                    <span className="font-bold text-gray-900">{program.accreditations.join(', ')}</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition">
                    Visit School Website
                  </button>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition">
                    Add to Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings */}
        <section className="py-8 px-4 bg-blue-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {program.rankings.map((ranking) => (
                <div key={ranking.source} className="text-center">
                  <p className="text-amber-400 font-black text-2xl">{ranking.rank}</p>
                  <p className="text-blue-100 text-sm">{ranking.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Program Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {program.overview.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Program Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Curriculum */}
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Core Curriculum</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {program.curriculum.map((course, idx) => (
                    <div key={course} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <span className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Admission Requirements */}
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Admission Requirements</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="space-y-4">
                    {program.admissions.map((req) => (
                      <div key={req.requirement} className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <span className="font-semibold text-gray-900 sm:w-40 shrink-0">{req.requirement}</span>
                        <span className="text-gray-600">{req.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Pros and Cons */}
              <section>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Our Verdict</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {program.pros.map((pro) => (
                        <li key={pro} className="text-green-700 flex items-start gap-2">
                          <span className="text-green-500 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {program.cons.map((con) => (
                        <li key={con} className="text-red-700 flex items-start gap-2">
                          <span className="text-red-500 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Career Outcomes */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Career Outcomes</h3>
                <div className="space-y-4">
                  {program.careerOutcomes.map((outcome) => (
                    <div key={outcome.metric}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">{outcome.metric}</span>
                        <span className="font-bold text-blue-900">{outcome.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-900 h-2 rounded-full"
                          style={{ width: outcome.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accreditations */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Accreditations</h3>
                <div className="flex flex-wrap gap-3">
                  {program.accreditations.map((acc) => (
                    <div key={acc} className="bg-white border border-gray-200 rounded-lg px-4 py-2 font-semibold text-gray-700">
                      {acc}
                    </div>
                  ))}
                </div>
                {program.accreditations.length === 3 && (
                  <p className="text-sm text-gray-600 mt-4">
                    This program holds the prestigious &quot;Triple Crown&quot; accreditation, achieved by less than 1% of business schools worldwide.
                  </p>
                )}
              </div>

              {/* Similar Programs */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Similar Programs</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Warwick Distance Learning MBA', fee: 'GBP 35,300' },
                    { name: 'Durham Online MBA', fee: 'GBP 28,000' },
                    { name: 'IE Global Online MBA', fee: 'EUR 50,200' },
                  ].map((similar) => (
                    <Link
                      key={similar.name}
                      href={`/programs/${similar.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition"
                    >
                      <p className="font-medium text-gray-900 text-sm">{similar.name}</p>
                      <p className="text-xs text-gray-500">{similar.fee}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">MBA</span>
              <span className="text-xl font-black text-amber-400">Quest</span>
            </Link>
            <p className="text-gray-400 text-sm">
              &copy; 2025 MBA Quest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
