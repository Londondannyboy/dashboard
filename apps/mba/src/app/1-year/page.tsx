import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1 Year Online MBA UK 2025 | Fast-Track MBA Programs',
  description: 'Complete your online MBA in just 12-18 months. Compare accelerated 1 year online MBA programs from UK universities. Fast-track your career.',
  keywords: '1 year online mba uk, 1 year mba online, accelerated mba online, fast track mba uk, 12 month mba online, quick online mba',
}

const oneYearPrograms = [
  {
    rank: 1,
    name: 'Hult International Business School',
    program: 'Global One-Year MBA',
    location: 'London/Multiple',
    duration: '12 months',
    fee: 59000,
    currency: 'USD',
    rating: 4.5,
    format: 'Hybrid',
    highlight: 'Fastest Top-Ranked MBA',
  },
  {
    rank: 2,
    name: 'IE Business School',
    program: 'Global Online MBA',
    location: 'Madrid, Spain',
    duration: '15 months',
    fee: 50200,
    currency: 'EUR',
    rating: 4.7,
    format: 'Online',
    highlight: 'QS Top 5 Online',
  },
  {
    rank: 3,
    name: 'INSEAD',
    program: 'Executive MBA',
    location: 'France/Singapore',
    duration: '14-17 months',
    fee: 115000,
    currency: 'EUR',
    rating: 4.9,
    format: 'Hybrid',
    highlight: '#1 Executive MBA',
  },
  {
    rank: 4,
    name: 'Cambridge Judge',
    program: 'Executive MBA',
    location: 'Cambridge, UK',
    duration: '20 months',
    fee: 61000,
    currency: 'GBP',
    rating: 4.8,
    format: 'Hybrid',
    highlight: 'Top UK Executive MBA',
  },
  {
    rank: 5,
    name: 'Imperial College',
    program: 'Global Online MBA',
    location: 'London, UK',
    duration: '21 months (accelerated)',
    fee: 57000,
    currency: 'GBP',
    rating: 4.9,
    format: 'Online',
    highlight: 'QS #1 Online MBA',
  },
]

export default function OneYearMBAPage() {
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
              <Link href="/1-year" className="text-blue-900 font-semibold">1-Year MBAs</Link>
              <Link href="/compare" className="text-gray-700 hover:text-blue-900 font-medium">Compare</Link>
            </div>
            <Link href="/programs" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition">
              Find Your MBA
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-600 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Complete in 12-18 Months
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              1 Year Online MBA UK
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Fast-track your career with an accelerated online MBA. Complete your degree
              in as little as 12 months without compromising on quality.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-purple-700">12</div>
                <div className="text-gray-600 text-sm">Months Minimum</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-700">20+</div>
                <div className="text-gray-600 text-sm">Accelerated Programs</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-700">45%</div>
                <div className="text-gray-600 text-sm">Avg Salary Increase</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-700">30</div>
                <div className="text-gray-600 text-sm">Hours/Week Study</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Top Accelerated Online MBA Programs
            </h2>
            <div className="space-y-6">
              {oneYearPrograms.map((program) => (
                <div key={program.rank} className="program-card border-l-4 border-purple-500">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 bg-purple-700 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0">
                        #{program.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{program.name}</h3>
                        <p className="text-purple-700 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.location}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-bold text-purple-700">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tuition</p>
                        <p className="font-semibold">{program.currency} {program.fee.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Format</p>
                        <p className="font-semibold">{program.format}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Rating</p>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">{program.rating}</span>
                          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">{program.highlight}</span>
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Is it Right for You */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Is a 1 Year Online MBA Right for You?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ideal If You...
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>Want to minimise time away from career progression</li>
                  <li>Have strong time management skills</li>
                  <li>Can commit 25-30+ hours per week</li>
                  <li>Have significant prior business experience</li>
                  <li>Are self-motivated and disciplined</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-red-200">
                <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Consider Alternatives If...
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>You have demanding family commitments</li>
                  <li>Your job requires frequent travel</li>
                  <li>You prefer deeper networking opportunities</li>
                  <li>You learn better at a slower pace</li>
                  <li>Budget is your primary concern</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              1 Year Online MBA UK: Everything You Need to Know
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                A <strong>1 year online MBA UK</strong> program offers an intensive, fast-track route to your business
                qualification. These accelerated programs compress the traditional 2-year curriculum into 12-18 months,
                perfect for experienced professionals who want to minimise career disruption.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What to Expect</h3>
              <p className="mb-4">
                <strong>Accelerated online MBA</strong> programs typically require 25-30+ hours of study per week.
                The curriculum covers the same content as longer programs but with a more intensive schedule and
                less flexibility in pacing.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Admission Requirements</h3>
              <p className="mb-4">
                Most <strong>1 year MBA online</strong> programs require significant work experience (typically 5+ years)
                and may have higher GMAT expectations. Schools assume students can handle the intensive pace due to
                their professional maturity.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Ready to Fast-Track Your Career?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Compare accelerated MBA programs and find the perfect fit for your timeline.
            </p>
            <Link href="/compare" className="inline-block bg-white text-purple-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
              Compare 1-Year Programs
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-black text-white">MBA</span>
            <span className="text-xl font-black text-amber-400">Quest</span>
          </Link>
          <p className="text-gray-400 text-sm">&copy; 2025 MBA Quest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
