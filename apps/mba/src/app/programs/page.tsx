import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Online MBA Programs | Compare Rankings & Reviews | MBA Quest',
  description: 'Browse and compare all online MBA programs. Filter by type, location, price, and accreditation. Find the perfect MBA online degree for your career goals.',
  keywords: 'online MBA programs, MBA program list, compare MBA programs, MBA rankings 2025, business school comparison, MBA online UK, MBA online USA',
}

const allPrograms = [
  {
    slug: 'imperial-global-online-mba',
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    type: 'Online',
    location: 'London, UK',
    country: 'UK',
    duration: '21-32 months',
    fee: 57000,
    currency: 'GBP',
    rating: 4.9,
    reviews: 234,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['QS Ranked #1 Online', 'Triple Accredited'],
    featured: true,
  },
  {
    slug: 'university-of-london-global-mba',
    name: 'University of London',
    program: 'Global MBA',
    type: 'Online',
    location: 'London, UK',
    country: 'UK',
    duration: '24-72 months',
    fee: 22000,
    currency: 'GBP',
    rating: 4.7,
    reviews: 412,
    accreditations: ['AMBA'],
    badges: ['Affordable', 'Highly Flexible'],
    featured: true,
  },
  {
    slug: 'durham-online-mba',
    name: 'Durham University Business School',
    program: 'Online MBA',
    type: 'Online',
    location: 'Durham, UK',
    country: 'UK',
    duration: '24-36 months',
    fee: 28000,
    currency: 'GBP',
    rating: 4.8,
    reviews: 187,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['Triple Accredited', 'Top 100 Global'],
    featured: true,
  },
  {
    slug: 'warwick-distance-learning-mba',
    name: 'Warwick Business School',
    program: 'Distance Learning MBA',
    type: 'Online',
    location: 'Coventry, UK',
    country: 'UK',
    duration: '24-48 months',
    fee: 35300,
    currency: 'GBP',
    rating: 4.8,
    reviews: 298,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['FT Top 10 Online MBA', 'Triple Accredited'],
    featured: true,
  },
  {
    slug: 'ie-business-school-global-online-mba',
    name: 'IE Business School',
    program: 'Global Online MBA',
    type: 'Online',
    location: 'Madrid, Spain',
    country: 'Spain',
    duration: '18 months',
    fee: 50200,
    currency: 'EUR',
    rating: 4.7,
    reviews: 356,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['QS Top 5 Online', 'Innovative Pedagogy'],
    featured: true,
  },
  {
    slug: 'insead-executive-mba',
    name: 'INSEAD',
    program: 'Executive MBA',
    type: 'Executive',
    location: 'France/Singapore',
    country: 'France',
    duration: '14-17 months',
    fee: 115000,
    currency: 'EUR',
    rating: 4.9,
    reviews: 178,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['#1 Executive MBA', 'Elite Network'],
    featured: false,
  },
  {
    slug: 'london-business-school-emba',
    name: 'London Business School',
    program: 'Executive MBA',
    type: 'Executive',
    location: 'London, UK',
    country: 'UK',
    duration: '20 months',
    fee: 118500,
    currency: 'GBP',
    rating: 4.9,
    reviews: 156,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['Top 5 Global', 'Triple Accredited'],
    featured: false,
  },
  {
    slug: 'manchester-global-mba',
    name: 'Alliance Manchester Business School',
    program: 'Global MBA',
    type: 'Global',
    location: 'Manchester, UK',
    country: 'UK',
    duration: '24 months',
    fee: 34000,
    currency: 'GBP',
    rating: 4.6,
    reviews: 245,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['Triple Accredited', 'Global Centers'],
    featured: false,
  },
  {
    slug: 'open-university-mba',
    name: 'The Open University',
    program: 'MBA',
    type: 'Online',
    location: 'Milton Keynes, UK',
    country: 'UK',
    duration: '24-84 months',
    fee: 18890,
    currency: 'GBP',
    rating: 4.5,
    reviews: 523,
    accreditations: ['AMBA', 'EQUIS'],
    badges: ['Most Affordable UK', 'Maximum Flexibility'],
    featured: false,
  },
  {
    slug: 'edinburgh-business-school-mba',
    name: 'Edinburgh Business School',
    program: 'Online MBA',
    type: 'Online',
    location: 'Edinburgh, UK',
    country: 'UK',
    duration: '24-60 months',
    fee: 15750,
    currency: 'GBP',
    rating: 4.4,
    reviews: 312,
    accreditations: ['AACSB', 'AMBA'],
    badges: ['Value for Money', 'Self-Paced'],
    featured: false,
  },
  {
    slug: 'hult-global-one-year-mba',
    name: 'Hult International Business School',
    program: 'Global One-Year MBA',
    type: 'Global',
    location: 'Multiple Campuses',
    country: 'International',
    duration: '12 months',
    fee: 59000,
    currency: 'USD',
    rating: 4.5,
    reviews: 289,
    accreditations: ['AACSB', 'AMBA'],
    badges: ['Fastest Completion', 'Multi-Campus'],
    featured: false,
  },
  {
    slug: 'strathclyde-online-mba',
    name: 'Strathclyde Business School',
    program: 'Online MBA',
    type: 'Online',
    location: 'Glasgow, UK',
    country: 'UK',
    duration: '24-36 months',
    fee: 21000,
    currency: 'GBP',
    rating: 4.6,
    reviews: 198,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    badges: ['Triple Accredited', 'Scottish Excellence'],
    featured: false,
  },
]

const programTypes = ['All', 'Online', 'Executive', 'Global', 'Part-Time']
const countries = ['All', 'UK', 'USA', 'Spain', 'France', 'International']
const priceRanges = ['All', 'Under 20k', '20k-40k', '40k-60k', 'Over 60k']

export default function ProgramsPage() {
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
              <Link href="/programs" className="text-blue-900 font-semibold">All Programs</Link>
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
        {/* Page Header */}
        <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Online MBA Programs Directory
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse {allPrograms.length}+ MBA programs from top business schools worldwide.
              Compare rankings, fees, duration, and accreditation to find your perfect MBA online.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 px-4 bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Program Type</label>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500">
                  {programTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500">
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Price Range</label>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500">
                  {priceRanges.map((range) => (
                    <option key={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Accreditation</label>
                <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500">
                  <option>All</option>
                  <option>Triple Accredited</option>
                  <option>AACSB</option>
                  <option>AMBA</option>
                  <option>EQUIS</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition">
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Listings */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{allPrograms.length}</span> programs
              </p>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm">
                <option>Sort by: Ranking</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Duration</option>
                <option>Sort by: Rating</option>
              </select>
            </div>

            <div className="space-y-6">
              {allPrograms.map((program, index) => (
                <div key={program.slug} className="program-card">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {program.featured && (
                            <span className="badge-featured">Featured</span>
                          )}
                          <span className="badge-online">{program.type}</span>
                          {program.accreditations.length === 3 && (
                            <span className="badge-ranking">Triple Accredited</span>
                          )}
                        </div>
                        <h2 className="font-bold text-xl text-gray-900">{program.name}</h2>
                        <p className="text-blue-900 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.location}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                        <p className="font-semibold text-gray-900">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Tuition</p>
                        <p className="font-semibold text-gray-900">{program.currency} {program.fee.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Rating</p>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-gray-900">{program.rating}</span>
                          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-500">{program.reviews} reviews</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Accreditation</p>
                        <p className="font-medium text-gray-900 text-sm">{program.accreditations.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
                    >
                      View Full Review
                    </Link>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-lg transition text-sm">
                      Add to Compare
                    </button>
                    <div className="ml-auto flex flex-wrap gap-2">
                      {program.badges.map((badge) => (
                        <span key={badge} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex gap-2">
                <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium">1</button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">2</button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">3</button>
                <span className="px-4 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">10</button>
              </nav>
            </div>
          </div>
        </section>
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
