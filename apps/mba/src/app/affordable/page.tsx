import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affordable Online MBA Programs 2025 | Budget-Friendly MBA Degrees',
  description: 'Find affordable online MBA programs under 20,000. Compare cheap online MBA courses from accredited universities without compromising on quality.',
  keywords: 'affordable online mba programs, cheap online mba, online mba under 20000, budget mba programs, low cost online mba, cheapest online mba uk',
}

const affordablePrograms = [
  {
    rank: 1,
    name: 'Edinburgh Business School',
    program: 'Online MBA',
    location: 'Edinburgh, UK',
    fee: 15750,
    currency: 'GBP',
    duration: '24-60 months',
    rating: 4.4,
    accreditations: ['AACSB', 'AMBA'],
    highlight: 'Best Value Self-Paced MBA',
  },
  {
    rank: 2,
    name: 'The Open University',
    program: 'MBA',
    location: 'Milton Keynes, UK',
    fee: 18890,
    currency: 'GBP',
    duration: '24-84 months',
    rating: 4.5,
    accreditations: ['AMBA', 'EQUIS'],
    highlight: 'Most Flexible Study Options',
  },
  {
    rank: 3,
    name: 'Strathclyde Business School',
    program: 'Online MBA',
    location: 'Glasgow, UK',
    fee: 21000,
    currency: 'GBP',
    duration: '24-36 months',
    rating: 4.6,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'Triple Accredited Under 25k',
  },
  {
    rank: 4,
    name: 'University of London',
    program: 'Global MBA',
    location: 'London, UK',
    fee: 22000,
    currency: 'GBP',
    duration: '24-72 months',
    rating: 4.7,
    accreditations: ['AMBA'],
    highlight: 'LSE-developed curriculum',
  },
  {
    rank: 5,
    name: 'Aston University',
    program: 'Online MBA',
    location: 'Birmingham, UK',
    fee: 19500,
    currency: 'GBP',
    duration: '24-36 months',
    rating: 4.5,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'Triple Accredited Best Value',
  },
  {
    rank: 6,
    name: 'University of Liverpool',
    program: 'Online MBA',
    location: 'Liverpool, UK',
    fee: 21000,
    currency: 'GBP',
    duration: '24-48 months',
    rating: 4.4,
    accreditations: ['AACSB', 'AMBA'],
    highlight: 'Russell Group University',
  },
]

export default function AffordableMBAPage() {
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
              <Link href="/affordable" className="text-blue-900 font-semibold">Affordable MBAs</Link>
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
        <section className="bg-gradient-to-r from-green-700 to-green-600 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              Programs Under GBP 25,000
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Affordable Online MBA Programs
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Get a world-class MBA without the world-class price tag. Compare accredited
              online MBA programs starting from just GBP 15,750.
            </p>
          </div>
        </section>

        {/* Value Stats */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-700">15,750</div>
                <div className="text-gray-600 text-sm">Lowest Fee (GBP)</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-700">30+</div>
                <div className="text-gray-600 text-sm">Programs Under 25k</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-700">6</div>
                <div className="text-gray-600 text-sm">Triple Accredited</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-700">38%</div>
                <div className="text-gray-600 text-sm">Avg Salary Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Best Affordable Online MBA Programs 2025
            </h2>
            <div className="space-y-6">
              {affordablePrograms.map((program) => (
                <div key={program.rank} className="program-card border-l-4 border-green-500">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0">
                        #{program.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{program.name}</h3>
                        <p className="text-green-700 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.location}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                      <div>
                        <p className="text-xs text-gray-500">Tuition Fee</p>
                        <p className="font-bold text-green-700 text-lg">{program.currency} {program.fee.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
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
                      <div>
                        <p className="text-xs text-gray-500">Accreditation</p>
                        <p className="text-sm font-medium">{program.accreditations.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">{program.highlight}</span>
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              How to Find an Affordable Online MBA Without Compromising Quality
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                An <strong>affordable online MBA</strong> doesn&apos;t mean a low-quality education. Many budget-friendly
                programs from accredited universities offer the same rigorous curriculum and career outcomes as more expensive alternatives.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Tips for Finding Value</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Look for <strong>AACSB, AMBA, or EQUIS accreditation</strong> - these ensure quality regardless of price</li>
                <li>Consider UK programs - they often offer better value than US equivalents</li>
                <li>Check for scholarship opportunities and payment plans</li>
                <li>Compare total cost including exam fees, materials, and residencies</li>
                <li>Evaluate career services and alumni network strength</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">ROI Considerations</h3>
              <p className="mb-4">
                Even at lower price points, graduates from accredited <strong>affordable online MBA programs</strong> report
                average salary increases of 35-40%. With lower initial investment, the return on investment can actually
                be higher than premium-priced programs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Start Your MBA Journey Today
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Quality business education is within reach. Compare affordable programs and find your perfect fit.
            </p>
            <Link href="/compare" className="inline-block bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
              Compare Affordable Programs
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
