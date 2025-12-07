import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Online MBA Programs | Side-by-Side Comparison | MBA Quest',
  description: 'Compare top online MBA programs side by side. Evaluate rankings, fees, duration, accreditation, and career outcomes to find your perfect MBA.',
  keywords: 'compare MBA programs, MBA comparison tool, online MBA comparison, MBA program rankings, MBA fees comparison',
}

const programsToCompare = [
  {
    name: 'Imperial Global Online MBA',
    school: 'Imperial College Business School',
    fee: 'GBP 57,000',
    duration: '21-32 months',
    format: 'Online',
    accreditation: 'Triple (AACSB, AMBA, EQUIS)',
    ranking: '#1 QS Online MBA',
    rating: 4.9,
    avgSalaryIncrease: '48%',
    classSize: '60-80',
    workExperience: '10 years avg',
    gmatRequired: 'Optional',
  },
  {
    name: 'Warwick Distance Learning MBA',
    school: 'Warwick Business School',
    fee: 'GBP 35,300',
    duration: '24-48 months',
    format: 'Online + Residencies',
    accreditation: 'Triple (AACSB, AMBA, EQUIS)',
    ranking: '#3 FT Online MBA',
    rating: 4.8,
    avgSalaryIncrease: '42%',
    classSize: '80-100',
    workExperience: '8 years avg',
    gmatRequired: 'Optional',
  },
  {
    name: 'Durham Online MBA',
    school: 'Durham University Business School',
    fee: 'GBP 28,000',
    duration: '24-36 months',
    format: 'Online + 2 Residencies',
    accreditation: 'Triple (AACSB, AMBA, EQUIS)',
    ranking: 'Top 100 Global',
    rating: 4.8,
    avgSalaryIncrease: '38%',
    classSize: '40-60',
    workExperience: '7 years avg',
    gmatRequired: 'No',
  },
]

const comparisonCategories = [
  { key: 'fee', label: 'Tuition Fee' },
  { key: 'duration', label: 'Duration' },
  { key: 'format', label: 'Format' },
  { key: 'accreditation', label: 'Accreditation' },
  { key: 'ranking', label: 'Ranking' },
  { key: 'rating', label: 'Rating' },
  { key: 'avgSalaryIncrease', label: 'Avg Salary Increase' },
  { key: 'classSize', label: 'Class Size' },
  { key: 'workExperience', label: 'Work Experience' },
  { key: 'gmatRequired', label: 'GMAT Required' },
]

export default function ComparePage() {
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
              <Link href="/compare" className="text-blue-900 font-semibold">Compare</Link>
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
              Compare Online MBA Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Evaluate MBA programs side by side to find the best fit for your career goals,
              budget, and lifestyle. Select up to 4 programs to compare.
            </p>
          </div>
        </section>

        {/* Program Selection */}
        <section className="py-8 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((slot) => (
                <div key={slot} className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-blue-400 transition cursor-pointer">
                  {slot <= programsToCompare.length ? (
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{programsToCompare[slot - 1]?.name}</p>
                      <p className="text-xs text-gray-500">{programsToCompare[slot - 1]?.school}</p>
                      <button className="text-red-500 text-xs mt-2 hover:underline">Remove</button>
                    </div>
                  ) : (
                    <div className="py-4">
                      <p className="text-gray-400 text-sm">+ Add Program</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-600 w-48">Feature</th>
                  {programsToCompare.map((program) => (
                    <th key={program.name} className="text-center py-4 px-4">
                      <p className="font-bold text-gray-900">{program.name}</p>
                      <p className="text-sm text-gray-500 font-normal">{program.school}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((category, idx) => (
                  <tr key={category.key} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-4 font-medium text-gray-700">{category.label}</td>
                    {programsToCompare.map((program) => (
                      <td key={program.name} className="py-4 px-4 text-center text-gray-900">
                        {category.key === 'rating' ? (
                          <div className="flex items-center justify-center gap-1">
                            <span className="font-semibold">{program[category.key as keyof typeof program]}</span>
                            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        ) : (
                          program[category.key as keyof typeof program]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {programsToCompare.map((program) => (
                <div key={program.name} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.fee}</p>
                  <Link
                    href={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg transition text-sm"
                  >
                    View Full Review
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Guide */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">How to Compare MBA Programs</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Choosing the right MBA program requires careful consideration of multiple factors.
                Use this comparison tool to evaluate programs based on what matters most to you.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Factors to Consider</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accreditation:</strong> Look for AACSB, AMBA, and EQUIS accreditation for quality assurance.</li>
                <li><strong>Cost vs Value:</strong> Consider total investment including opportunity cost, not just tuition.</li>
                <li><strong>Format:</strong> Choose between fully online, hybrid, or programs with residency requirements.</li>
                <li><strong>Career Outcomes:</strong> Review employment rates, salary increases, and alumni networks.</li>
                <li><strong>Duration:</strong> Consider how the program timeline fits with your career and personal plans.</li>
              </ul>
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
