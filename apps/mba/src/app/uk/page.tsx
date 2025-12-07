import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Online MBA UK 2025 | Top UK University Online MBA Programs',
  description: 'Compare the best online MBA programs from UK universities. Rankings, fees, and reviews of accredited UK online MBA courses from Imperial, Warwick, Durham and more.',
  keywords: 'online mba uk, uk university online mba, best online mba uk, online mba courses uk, uk online mba programs, accredited online mba uk, mba online uk universities',
}

const ukPrograms = [
  {
    rank: 1,
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    location: 'London',
    duration: '21-32 months',
    fee: 57000,
    rating: 4.9,
    reviews: 234,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'QS Ranked #1 Online MBA Worldwide',
  },
  {
    rank: 2,
    name: 'Warwick Business School',
    program: 'Distance Learning MBA',
    location: 'Coventry',
    duration: '24-48 months',
    fee: 35300,
    rating: 4.8,
    reviews: 298,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'FT Top 10 Online MBA',
  },
  {
    rank: 3,
    name: 'Durham University Business School',
    program: 'Online MBA',
    location: 'Durham',
    duration: '24-36 months',
    fee: 28000,
    rating: 4.8,
    reviews: 187,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'Triple Accredited, Top 100 Global',
  },
  {
    rank: 4,
    name: 'University of London',
    program: 'Global MBA',
    location: 'London',
    duration: '24-72 months',
    fee: 22000,
    rating: 4.7,
    reviews: 412,
    accreditations: ['AMBA'],
    highlight: 'LSE-developed curriculum, Most Flexible',
  },
  {
    rank: 5,
    name: 'The Open University',
    program: 'MBA',
    location: 'Milton Keynes',
    duration: '24-84 months',
    fee: 18890,
    rating: 4.5,
    reviews: 523,
    accreditations: ['AMBA', 'EQUIS'],
    highlight: 'Most Affordable UK MBA',
  },
  {
    rank: 6,
    name: 'Strathclyde Business School',
    program: 'Online MBA',
    location: 'Glasgow',
    duration: '24-36 months',
    fee: 21000,
    rating: 4.6,
    reviews: 198,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'Triple Accredited Scottish Excellence',
  },
  {
    rank: 7,
    name: 'Edinburgh Business School',
    program: 'Online MBA',
    location: 'Edinburgh',
    duration: '24-60 months',
    fee: 15750,
    rating: 4.4,
    reviews: 312,
    accreditations: ['AACSB', 'AMBA'],
    highlight: 'Best Value Self-Paced MBA',
  },
  {
    rank: 8,
    name: 'Alliance Manchester Business School',
    program: 'Global MBA',
    location: 'Manchester',
    duration: '24 months',
    fee: 34000,
    rating: 4.6,
    reviews: 245,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    highlight: 'Global Study Centers',
  },
]

export default function UKMBAPage() {
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
              <Link href="/uk" className="text-blue-900 font-semibold">UK MBAs</Link>
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
        <section className="hero-gradient py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Best Online MBA UK 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Compare top-ranked online MBA programs from UK universities. Find accredited,
              flexible MBA courses from world-class British business schools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#rankings" className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition">
                View UK Rankings
              </Link>
              <Link href="/compare" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition">
                Compare Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-blue-900">50+</div>
                <div className="text-gray-600 text-sm">UK Online MBA Programs</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-900">8</div>
                <div className="text-gray-600 text-sm">Triple Accredited Schools</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-900">15,750</div>
                <div className="text-gray-600 text-sm">Lowest UK MBA Fee (GBP)</div>
              </div>
              <div>
                <div className="text-3xl font-black text-blue-900">42%</div>
                <div className="text-gray-600 text-sm">Avg Salary Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings */}
        <section id="rankings" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Top UK University Online MBA Programs 2025
            </h2>
            <div className="space-y-6">
              {ukPrograms.map((program) => (
                <div key={program.rank} className="program-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0">
                        #{program.rank}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{program.name}</h3>
                        <p className="text-blue-900 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.location}, UK</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tuition</p>
                        <p className="font-semibold">GBP {program.fee.toLocaleString()}</p>
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
                    <span className="badge-featured">{program.highlight}</span>
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
                    >
                      View Full Review
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why UK MBA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Why Choose a UK Online MBA?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'World-Class Reputation',
                  description: 'UK business schools consistently rank among the best globally, with 8 schools holding prestigious triple accreditation.',
                  icon: '🏆',
                },
                {
                  title: 'Internationally Recognised',
                  description: 'UK MBA qualifications are respected worldwide, opening doors to global career opportunities.',
                  icon: '🌍',
                },
                {
                  title: 'Flexible Study Options',
                  description: 'Most UK online MBAs offer part-time study over 2-4 years, perfect for working professionals.',
                  icon: '⏰',
                },
                {
                  title: 'Strong Alumni Networks',
                  description: 'Access powerful professional networks spanning industries and continents.',
                  icon: '🤝',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Rigorous UK education standards ensure consistent, high-quality learning experiences.',
                  icon: '✓',
                },
                {
                  title: 'Value for Money',
                  description: 'UK online MBAs often offer better value than US equivalents, with comparable outcomes.',
                  icon: '💷',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Online MBA UK: Your Complete Guide to British Business Education
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                The <strong>UK online MBA</strong> market has grown significantly, with over 50 accredited programs
                now available from British universities. These programs combine the prestige of UK higher education
                with the flexibility of online learning, making them ideal for working professionals worldwide.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                UK Online MBA Accreditation
              </h3>
              <p className="mb-4">
                When choosing an <strong>online MBA UK</strong> program, look for accreditation from AACSB, AMBA,
                or EQUIS. Eight UK business schools hold &quot;triple crown&quot; accreditation, placing them among
                the top 1% of business schools worldwide.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Cost of UK Online MBA Programs
              </h3>
              <p className="mb-4">
                <strong>UK university online MBA</strong> fees range from approximately GBP 15,750 (Edinburgh Business School)
                to GBP 57,000 (Imperial College). Most programs fall in the GBP 20,000-35,000 range, offering excellent
                value compared to US alternatives.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Perfect UK Online MBA
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare programs, read reviews, and make an informed decision about your UK business education.
            </p>
            <Link href="/compare" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition">
              Compare UK MBA Programs
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
