import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nursery Cost Calculator UK 2024/25 | Average Fees by Region',
  description: 'Calculate nursery costs in your area. Compare nursery fees across UK regions, from Inner London (£1,745/month) to North East (£1,100/month). Plan your childcare budget.',
  keywords: [
    'nursery cost calculator',
    'nursery fees uk',
    'average nursery costs',
    'nursery fees calculator',
    'how much is nursery',
    'childcare costs uk',
    'nursery prices 2024',
    'full time nursery costs',
    'part time nursery fees',
    'nursery costs by region',
  ],
  alternates: {
    canonical: 'https://childcarecalculator.quest/nursery-cost-calculator',
  },
  openGraph: {
    title: 'Nursery Cost Calculator UK 2024/25',
    description: 'Calculate and compare nursery fees across UK regions. See average costs and plan your childcare budget.',
    url: 'https://childcarecalculator.quest/nursery-cost-calculator',
    siteName: 'Childcare Calculator',
    type: 'website',
  },
}

const regionalCosts = [
  { region: 'Inner London', under2: 79.00, '2years': 74.00, '3-4years': 70.00, multiplier: 1.40 },
  { region: 'Outer London', under2: 70.00, '2years': 66.00, '3-4years': 63.00, multiplier: 1.25 },
  { region: 'South East', under2: 67.00, '2years': 63.00, '3-4years': 60.00, multiplier: 1.20 },
  { region: 'South West', under2: 62.00, '2years': 58.00, '3-4years': 55.00, multiplier: 1.10 },
  { region: 'East of England', under2: 64.00, '2years': 60.00, '3-4years': 57.00, multiplier: 1.15 },
  { region: 'West Midlands', under2: 58.00, '2years': 54.00, '3-4years': 51.00, multiplier: 1.03 },
  { region: 'East Midlands', under2: 56.00, '2years': 52.00, '3-4years': 49.00, multiplier: 0.98 },
  { region: 'Yorkshire & Humber', under2: 55.00, '2years': 51.00, '3-4years': 48.00, multiplier: 0.96 },
  { region: 'North West', under2: 54.00, '2years': 50.00, '3-4years': 47.00, multiplier: 0.95 },
  { region: 'North East', under2: 50.00, '2years': 46.00, '3-4years': 44.00, multiplier: 0.88 },
  { region: 'Wales', under2: 53.00, '2years': 49.00, '3-4years': 46.00, multiplier: 0.94 },
  { region: 'Scotland', under2: 52.00, '2years': 48.00, '3-4years': 45.00, multiplier: 0.92 },
  { region: 'Northern Ireland', under2: 48.00, '2years': 45.00, '3-4years': 42.00, multiplier: 0.85 },
]

function RegionalCostsTable() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Average Nursery Costs by Region (Daily Rate)</h2>

      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gradient-to-r from-purple-100 to-pink-100">
            <th className="text-left p-4 font-semibold">Region</th>
            <th className="text-right p-4 font-semibold">Under 2</th>
            <th className="text-right p-4 font-semibold">2 Years</th>
            <th className="text-right p-4 font-semibold">3-4 Years</th>
            <th className="text-right p-4 font-semibold">Monthly (FT)*</th>
          </tr>
        </thead>
        <tbody>
          {regionalCosts.map((row, idx) => (
            <tr key={row.region} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-4 font-medium">{row.region}</td>
              <td className="p-4 text-right">£{row.under2.toFixed(2)}</td>
              <td className="p-4 text-right">£{row['2years'].toFixed(2)}</td>
              <td className="p-4 text-right">£{row['3-4years'].toFixed(2)}</td>
              <td className="p-4 text-right font-semibold text-purple-600">
                £{(row.under2 * 22).toFixed(0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        *Monthly cost based on full-time (5 days/week, ~22 days/month) for under-2s. Actual costs vary by provider.
      </p>
    </div>
  )
}

function CostBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Nursery Costs</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-800">Full-Time Care (5 days)</h3>
            <p className="text-gray-600 text-sm">Typically 8am-6pm, ~50 hours/week</p>
            <p className="text-2xl font-bold text-purple-600 mt-1">£1,100 - £1,750/month</p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4">
            <h3 className="font-semibold text-gray-800">Part-Time Care (3 days)</h3>
            <p className="text-gray-600 text-sm">~30 hours/week</p>
            <p className="text-2xl font-bold text-pink-600 mt-1">£660 - £1,050/month</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-800">Sessional Care (mornings only)</h3>
            <p className="text-gray-600 text-sm">~25 hours/week</p>
            <p className="text-2xl font-bold text-green-600 mt-1">£500 - £850/month</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Why Nursery Costs Vary</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Location:</strong> London costs 40%+ more than northern regions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Age:</strong> Under-2s need higher staff ratios (1:3 vs 1:8 for 3+)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Hours:</strong> Extended hours and flexibility add costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Extras:</strong> Meals, nappies, activities may be additional</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Type:</strong> Private nurseries often cost more than community/charity run</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function SavingsOptions() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Reduce Nursery Costs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div className="text-4xl mb-3">🎁</div>
          <h3 className="font-semibold text-gray-800 mb-2">30 Hours Free</h3>
          <p className="text-sm text-gray-600 mb-2">For eligible 3-4 year olds</p>
          <p className="text-xl font-bold text-green-600">Save £7,500+/year</p>
          <Link href="/30-hours-free-childcare-calculator" className="text-sm text-green-700 hover:underline mt-2 inline-block">
            Check eligibility →
          </Link>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
          <div className="text-4xl mb-3">💰</div>
          <h3 className="font-semibold text-gray-800 mb-2">Tax-Free Childcare</h3>
          <p className="text-sm text-gray-600 mb-2">Government tops up 25%</p>
          <p className="text-xl font-bold text-purple-600">Save £2,000/year</p>
          <Link href="/tax-free-childcare-calculator" className="text-sm text-purple-700 hover:underline mt-2 inline-block">
            Calculate savings →
          </Link>
        </div>

        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
          <div className="text-4xl mb-3">🏛️</div>
          <h3 className="font-semibold text-gray-800 mb-2">15 Hours Universal</h3>
          <p className="text-sm text-gray-600 mb-2">All 3-4 year olds + eligible 2s</p>
          <p className="text-xl font-bold text-blue-600">Save £3,750+/year</p>
          <Link href="/15-hours-free-childcare-calculator" className="text-sm text-blue-700 hover:underline mt-2 inline-block">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function NurseryCostCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Nursery Cost Calculator UK 2024/25',
    description: 'Calculate and compare nursery costs across UK regions.',
    url: 'https://childcarecalculator.quest/nursery-cost-calculator',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does nursery cost in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Full-time nursery costs in the UK range from £1,100/month in the North East to £1,750/month in Inner London for under-2s. Average UK cost is around £1,300-£1,400/month for full-time care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is childcare so expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Childcare costs are high due to strict staff-to-child ratios (1:3 for under-2s), high property costs especially in cities, staff wages, insurance, and regulatory requirements. These costs must be covered primarily through parent fees.',
          },
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Main Calculator
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nursery Cost Calculator UK
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find out how much nursery costs in your area. Compare fees by region and age group
            to plan your childcare budget for 2024/25.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-purple-600">£1,400</div>
              <div className="text-sm text-gray-600">UK Average/Month</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">£16,700</div>
              <div className="text-sm text-gray-600">Average/Year</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-green-600">40%</div>
              <div className="text-sm text-gray-600">Regional Variance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <RegionalCostsTable />
          <CostBreakdown />
          <SavingsOptions />

          {/* Age-based breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Age Affects Nursery Costs</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Under 2 Years</h3>
                <p className="text-3xl font-bold text-red-600 mb-2">Highest Cost</p>
                <p className="text-sm text-gray-600">
                  Staff ratio: <strong>1:3</strong><br />
                  Babies and toddlers need intensive care, frequent nappy changes, and individual attention.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">2 Years Old</h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">Medium Cost</p>
                <p className="text-sm text-gray-600">
                  Staff ratio: <strong>1:4</strong><br />
                  Slightly lower ratios but still high needs. Some 2-year-olds qualify for 15 free hours.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">3-4 Years</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">Lower Cost</p>
                <p className="text-sm text-gray-600">
                  Staff ratio: <strong>1:8</strong><br />
                  All children get 15 free hours. Working parents may get 30 free hours.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much does nursery cost per month UK?</h3>
                <p className="text-gray-600">Full-time nursery in the UK costs between £1,100-£1,750 per month depending on your location. Inner London is most expensive at around £1,750/month, while northern regions average £1,100-£1,200/month.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Why is childcare so expensive?</h3>
                <p className="text-gray-600">Childcare is expensive due to strict staff-to-child ratios (1:3 for babies), high property costs, competitive wages needed to attract qualified staff, insurance, and regulatory compliance costs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Is nursery cheaper than a childminder?</h3>
                <p className="text-gray-600">Childminders are typically 15-25% cheaper than nurseries, averaging £5-7 per hour vs £6-9 for nurseries. However, availability varies and nurseries offer more structured environments with multiple staff.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What extras do I need to pay for at nursery?</h3>
                <p className="text-gray-600">Additional costs may include: registration fees (£50-£200), meals (£3-8/day if not included), nappies/wipes (if not provided), uniform, late pickup fees, and holiday retainer fees.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How can I reduce nursery costs?</h3>
                <p className="text-gray-600">Use government schemes: Tax-Free Childcare (save £2,000/year), 30 hours free for 3-4 year olds (save £7,500+), Universal Credit childcare element (85% of costs). Some employers offer childcare benefits too.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">When should I start looking for nursery places?</h3>
                <p className="text-gray-600">Start looking 6-12 months before you need a place, especially for babies. Popular nurseries often have waiting lists. Many parents put their name down during pregnancy.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your True Childcare Costs</h2>
            <p className="mb-6 opacity-90">
              Use our comprehensive calculator to see your actual costs after government support,
              including Tax-Free Childcare and free hours entitlements.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Go to Full Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Nursery cost data based on 2024 UK averages. Actual costs vary by provider and location.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Childcare Calculator. For guidance only - always verify with individual nurseries.
          </p>
        </div>
      </footer>
    </main>
  )
}
