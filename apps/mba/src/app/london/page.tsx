import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online MBA London 2025 | London Business School MBA Programs',
  description: 'Compare online MBA programs from London business schools. Imperial, LSE, UCL, and more top London universities offering flexible MBA courses.',
  keywords: 'online mba london, london business school mba, mba london online, london university mba online, imperial mba online, lse mba',
}

const londonPrograms = [
  {
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    area: 'South Kensington',
    fee: 57000,
    duration: '21-32 months',
    rating: 4.9,
    format: 'Fully Online',
    highlight: 'QS #1 Online MBA Worldwide',
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
  },
  {
    name: 'University of London',
    program: 'Global MBA',
    area: 'Bloomsbury',
    fee: 22000,
    duration: '24-72 months',
    rating: 4.7,
    format: 'Fully Online',
    highlight: 'LSE-developed curriculum',
    accreditations: ['AMBA'],
  },
  {
    name: 'London Business School',
    program: 'Executive MBA',
    area: 'Regent\'s Park',
    fee: 118500,
    duration: '20 months',
    rating: 4.9,
    format: 'Hybrid',
    highlight: 'Top 5 Global MBA',
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
  },
  {
    name: 'Cass Business School (Bayes)',
    program: 'Executive MBA',
    area: 'City of London',
    fee: 52500,
    duration: '24 months',
    rating: 4.6,
    format: 'Part-time/Hybrid',
    highlight: 'City Connections',
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
  },
  {
    name: 'UCL School of Management',
    program: 'MBA',
    area: 'Canary Wharf',
    fee: 42000,
    duration: '12 months FT',
    rating: 4.5,
    format: 'Full-time',
    highlight: 'Tech & Innovation Focus',
    accreditations: ['AMBA'],
  },
  {
    name: 'Hult International',
    program: 'Global One-Year MBA',
    area: 'Holborn',
    fee: 59000,
    duration: '12 months',
    rating: 4.5,
    format: 'Hybrid',
    highlight: 'Multi-campus Experience',
    accreditations: ['AACSB', 'AMBA'],
  },
]

export default function LondonMBAPage() {
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
              <Link href="/london" className="text-blue-900 font-semibold">London MBAs</Link>
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
        <section className="bg-gradient-to-r from-red-800 to-red-700 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Global Business Capital
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Online MBA London
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Study at world-renowned London business schools. Access the UK&apos;s financial hub
              and global business networks from anywhere in the world.
            </p>
          </div>
        </section>

        {/* Why London */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-red-800">6</div>
                <div className="text-gray-600 text-sm">World-Class Schools</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-800">#1</div>
                <div className="text-gray-600 text-sm">Financial Centre</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-800">500+</div>
                <div className="text-gray-600 text-sm">Global HQs</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-800">40%</div>
                <div className="text-gray-600 text-sm">Intl Finance Jobs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              London Business School MBA Programs
            </h2>
            <div className="space-y-6">
              {londonPrograms.map((program, idx) => (
                <div key={program.name} className="program-card border-l-4 border-red-600">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 bg-red-800 rounded-full flex items-center justify-center text-white font-black text-lg shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{program.name}</h3>
                        <p className="text-red-800 font-medium">{program.program}</p>
                        <p className="text-sm text-gray-500">{program.area}, London</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                      <div>
                        <p className="text-xs text-gray-500">Tuition</p>
                        <p className="font-semibold">GBP {program.fee.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
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
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">{program.highlight}</span>
                      {program.accreditations.length === 3 && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">Triple Accredited</span>
                      )}
                    </div>
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-red-800 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why London for MBA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Why Study Your MBA in London?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Global Financial Hub',
                  description: 'London is home to the world\'s leading financial institutions, offering unparalleled networking and career opportunities.',
                  icon: '🏦',
                },
                {
                  title: 'Diverse Business Ecosystem',
                  description: 'From fintech startups to Fortune 500 HQs, London hosts every industry sector imaginable.',
                  icon: '🌐',
                },
                {
                  title: 'World-Class Faculty',
                  description: 'London business schools attract leading academics and industry practitioners from around the globe.',
                  icon: '👨‍🏫',
                },
                {
                  title: 'International Network',
                  description: 'Your classmates will come from 50+ countries, building a truly global professional network.',
                  icon: '🤝',
                },
                {
                  title: 'Career Opportunities',
                  description: 'Major employers actively recruit from London business schools, with many offering sponsorship.',
                  icon: '📈',
                },
                {
                  title: 'Cultural Capital',
                  description: 'Beyond business, London offers world-class culture, dining, and quality of life.',
                  icon: '🎭',
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
              Online MBA London: Your Guide to the UK Capital&apos;s Business Schools
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                An <strong>online MBA London</strong> degree combines the prestige of world-renowned business schools
                with the flexibility to study from anywhere. London&apos;s business schools consistently rank among
                the best globally, with Imperial College holding the #1 position for online MBAs worldwide.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                London vs Other UK Cities
              </h3>
              <p className="mb-4">
                While other UK cities offer excellent MBA programs, <strong>London business school MBA</strong> programs
                provide unique advantages: direct access to the City of London financial district, extensive corporate
                partnerships, and recruitment from global employers.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Online Study with London Residencies
              </h3>
              <p className="mb-4">
                Many <strong>MBA London online</strong> programs include optional or required residential components,
                allowing you to experience London&apos;s business environment firsthand while maintaining the flexibility
                of online study.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-red-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Study at a London Business School
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Compare programs and find your path to a world-class London MBA.
            </p>
            <Link href="/compare" className="inline-block bg-white text-red-800 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
              Compare London Programs
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
