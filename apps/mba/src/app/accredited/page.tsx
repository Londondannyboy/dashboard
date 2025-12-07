import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accredited Online MBA Programs 2025 | AACSB, AMBA, EQUIS',
  description: 'Find accredited online MBA programs with AACSB, AMBA, or EQUIS certification. Triple-accredited business schools and what accreditation means for your career.',
  keywords: 'accredited online mba programs, aacsb accredited online mba, amba accredited mba, equis accredited mba, triple accredited mba, accredited online mba uk',
}

const tripleAccreditedPrograms = [
  {
    name: 'Imperial College Business School',
    program: 'Global Online MBA',
    location: 'London, UK',
    fee: 57000,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'QS #1 Online MBA',
  },
  {
    name: 'Warwick Business School',
    program: 'Distance Learning MBA',
    location: 'Coventry, UK',
    fee: 35300,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'FT Top 10 Online MBA',
  },
  {
    name: 'Durham University Business School',
    program: 'Online MBA',
    location: 'Durham, UK',
    fee: 28000,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'Top 100 Global',
  },
  {
    name: 'IE Business School',
    program: 'Global Online MBA',
    location: 'Madrid, Spain',
    fee: 50200,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'QS Top 5 Online',
  },
  {
    name: 'Strathclyde Business School',
    program: 'Online MBA',
    location: 'Glasgow, UK',
    fee: 21000,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'Best Value Triple Accredited',
  },
  {
    name: 'Alliance Manchester Business School',
    program: 'Global MBA',
    location: 'Manchester, UK',
    fee: 34000,
    accreditations: ['AACSB', 'AMBA', 'EQUIS'],
    ranking: 'Russell Group University',
  },
]

export default function AccreditedMBAPage() {
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
              <Link href="/accredited" className="text-blue-900 font-semibold">Accredited MBAs</Link>
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
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              Quality Assurance Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Accredited Online MBA Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Ensure your MBA investment pays off. Find programs with AACSB, AMBA, or EQUIS
              accreditation - the gold standards in business education.
            </p>
          </div>
        </section>

        {/* Accreditation Explained */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Understanding MBA Accreditations
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-lg">AACSB</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">AACSB International</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Association to Advance Collegiate Schools of Business. The oldest and most prestigious
                  accreditation, held by less than 6% of business schools worldwide.
                </p>
                <p className="text-blue-900 font-semibold text-sm">Founded: 1916 | HQ: USA</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-lg">AMBA</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">AMBA</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Association of MBAs. The only accreditation body focused exclusively on postgraduate
                  business education, specifically MBA programs.
                </p>
                <p className="text-blue-900 font-semibold text-sm">Founded: 1967 | HQ: UK</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-lg">EQUIS</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">EQUIS</h3>
                <p className="text-gray-600 text-sm mb-4">
                  European Quality Improvement System by EFMD. Evaluates the entire business school,
                  with emphasis on internationalisation and corporate connections.
                </p>
                <p className="text-blue-900 font-semibold text-sm">Founded: 1997 | HQ: Belgium</p>
              </div>
            </div>
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
              <h3 className="font-bold text-amber-800 text-lg mb-2">Triple Crown Accreditation</h3>
              <p className="text-amber-700">
                Schools holding all three accreditations (AACSB, AMBA, EQUIS) are &quot;triple accredited&quot; or
                hold the &quot;Triple Crown&quot; - achieved by less than 1% of business schools worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Triple Accredited Programs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Triple Accredited Online MBA Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tripleAccreditedPrograms.map((program) => (
                <div key={program.name} className="program-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{program.name}</h3>
                      <p className="text-blue-900 font-medium">{program.program}</p>
                      <p className="text-sm text-gray-500">{program.location}</p>
                    </div>
                    <span className="badge-featured">{program.ranking}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.accreditations.map((acc) => (
                      <span key={acc} className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                        {acc}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">GBP {program.fee.toLocaleString()}</p>
                    <Link
                      href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-900 hover:text-blue-700 font-semibold text-sm"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Accreditation Matters */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Why MBA Accreditation Matters for Your Career
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Choosing an <strong>accredited online MBA program</strong> is crucial for several reasons:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Employer Recognition:</strong> Major employers specifically look for candidates from accredited schools</li>
                <li><strong>Quality Assurance:</strong> Accreditation ensures rigorous curriculum, qualified faculty, and proper resources</li>
                <li><strong>Transfer Credits:</strong> Credits from accredited programs are more likely to be recognised by other institutions</li>
                <li><strong>Career Services:</strong> Accredited schools typically offer stronger career support and alumni networks</li>
                <li><strong>ROI Protection:</strong> Your investment is protected by continuous quality monitoring</li>
              </ul>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                How to Verify MBA Accreditation
              </h3>
              <p className="mb-4">
                Always verify accreditation directly through the accrediting body&apos;s website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>AACSB:</strong> aacsb.edu/accredited-schools</li>
                <li><strong>AMBA:</strong> associationofmbas.com/business-schools</li>
                <li><strong>EQUIS:</strong> efmdglobal.org/accreditations/business-schools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-6">
              Find Your Accredited Online MBA
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse our directory of accredited programs and compare options.
            </p>
            <Link href="/programs" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg transition">
              Browse Accredited Programs
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
