import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cost of Raising a Child UK 2024 | £160,000 to £230,000 Total',
  description: 'Calculate the true cost of raising a child in the UK. From baby to 18 years: childcare, food, clothing, education & more. Average £160,000-£230,000 total costs.',
  keywords: [
    'cost of raising a child uk',
    'baby cost calculator',
    'how much does a child cost',
    'cost of having a baby uk',
    'raising a child cost',
    'child cost calculator',
    'first year baby costs',
    'annual cost per child',
    'lifetime cost of child',
    'family budget calculator',
  ],
  alternates: {
    canonical: 'https://childcarecalculator.quest/cost-of-raising-a-child',
  },
  openGraph: {
    title: 'Cost of Raising a Child UK 2024',
    description: 'Calculate the true lifetime cost of raising a child. Average £160,000-£230,000 from birth to 18.',
    url: 'https://childcarecalculator.quest/cost-of-raising-a-child',
    siteName: 'Childcare Calculator',
    type: 'website',
  },
}

const annualCosts = [
  { age: '0-1 (Baby)', childcare: 15000, food: 1200, clothing: 800, activities: 500, education: 0, other: 2500, total: 20000 },
  { age: '1-2 (Toddler)', childcare: 14000, food: 1500, clothing: 700, activities: 600, education: 0, other: 2000, total: 18800 },
  { age: '2-3', childcare: 12000, food: 1600, clothing: 600, activities: 700, education: 0, other: 1800, total: 16700 },
  { age: '3-4 (Nursery)', childcare: 8000, food: 1800, clothing: 600, activities: 800, education: 200, other: 1600, total: 13000 },
  { age: '4-5 (Reception)', childcare: 5000, food: 2000, clothing: 600, activities: 1000, education: 400, other: 1500, total: 10500 },
  { age: '5-11 (Primary)', childcare: 3000, food: 2200, clothing: 700, activities: 1200, education: 500, other: 1400, total: 9000 },
  { age: '11-16 (Secondary)', childcare: 1500, food: 2800, clothing: 900, activities: 1500, education: 800, other: 1800, total: 9300 },
  { age: '16-18 (Sixth Form)', childcare: 0, food: 3000, clothing: 1000, activities: 1800, education: 1200, other: 2000, total: 9000 },
]

function CostsSummary() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Lifetime Cost Summary</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
          <div className="text-4xl font-bold text-orange-600">£160,000</div>
          <div className="text-gray-600 mt-2">Lower Estimate</div>
          <div className="text-xs text-gray-500 mt-1">Basic costs, no private education</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg">
          <div className="text-4xl font-bold text-red-600">£200,000</div>
          <div className="text-gray-600 mt-2">Average</div>
          <div className="text-xs text-gray-500 mt-1">Typical UK family</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
          <div className="text-4xl font-bold text-purple-600">£230,000+</div>
          <div className="text-gray-600 mt-2">Higher Estimate</div>
          <div className="text-xs text-gray-500 mt-1">London/premium choices</div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> These figures don&apos;t include university costs, which can add £40,000-£60,000.
          Costs vary significantly by location, lifestyle choices, and whether you use government support.
        </p>
      </div>
    </div>
  )
}

function AnnualBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Average Annual Costs by Age</h2>

      <table className="w-full border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-gradient-to-r from-orange-100 to-amber-100">
            <th className="text-left p-4 font-semibold">Age</th>
            <th className="text-right p-4 font-semibold">Childcare</th>
            <th className="text-right p-4 font-semibold">Food</th>
            <th className="text-right p-4 font-semibold">Clothing</th>
            <th className="text-right p-4 font-semibold">Activities</th>
            <th className="text-right p-4 font-semibold">Education</th>
            <th className="text-right p-4 font-semibold">Other*</th>
            <th className="text-right p-4 font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          {annualCosts.map((row, idx) => (
            <tr key={row.age} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-4 font-medium">{row.age}</td>
              <td className="p-4 text-right">£{row.childcare.toLocaleString()}</td>
              <td className="p-4 text-right">£{row.food.toLocaleString()}</td>
              <td className="p-4 text-right">£{row.clothing.toLocaleString()}</td>
              <td className="p-4 text-right">£{row.activities.toLocaleString()}</td>
              <td className="p-4 text-right">£{row.education.toLocaleString()}</td>
              <td className="p-4 text-right">£{row.other.toLocaleString()}</td>
              <td className="p-4 text-right font-semibold text-orange-600">£{row.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-500 mt-4">
        *Other includes: healthcare, transport, toys, technology, holidays, furniture, housing contribution.
        Figures represent UK averages for 2024 and assume some use of government childcare support.
      </p>
    </div>
  )
}

function FirstYearCosts() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">First Year Baby Costs</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">One-Time Purchases</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Pram/Pushchair</span>
              <span className="font-semibold">£200 - £1,500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Cot & Mattress</span>
              <span className="font-semibold">£100 - £600</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Car Seat</span>
              <span className="font-semibold">£50 - £400</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Nursery Furniture</span>
              <span className="font-semibold">£200 - £1,000</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Baby Monitor</span>
              <span className="font-semibold">£30 - £300</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-orange-50 rounded">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Setup Total</span>
              <span className="font-bold text-orange-600">£2,000 - £6,000</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Monthly Ongoing Costs</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Nappies</span>
              <span className="font-semibold">£40 - £80</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Formula/Feeding</span>
              <span className="font-semibold">£0 - £150</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Clothing</span>
              <span className="font-semibold">£30 - £100</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Toiletries</span>
              <span className="font-semibold">£20 - £50</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Childcare (if used)</span>
              <span className="font-semibold">£800 - £1,800</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-orange-50 rounded">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Monthly Total</span>
              <span className="font-bold text-orange-600">£900 - £2,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SavingsTips() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Reduce Childcare Costs</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">🎁</div>
          <h3 className="font-semibold text-gray-800 mb-2">Free Hours Entitlements</h3>
          <p className="text-sm text-gray-600">All 3-4 year olds get 15 free hours. Working parents may get 30 hours. Worth £3,750-£7,500/year.</p>
          <Link href="/30-hours-free-childcare-calculator" className="text-sm text-purple-600 hover:underline mt-2 inline-block">
            Check eligibility →
          </Link>
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">💰</div>
          <h3 className="font-semibold text-gray-800 mb-2">Tax-Free Childcare</h3>
          <p className="text-sm text-gray-600">Get £2,000/year per child from the government. For every £8 you pay, they add £2.</p>
          <Link href="/tax-free-childcare-calculator" className="text-sm text-purple-600 hover:underline mt-2 inline-block">
            Calculate savings →
          </Link>
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">🏛️</div>
          <h3 className="font-semibold text-gray-800 mb-2">Universal Credit</h3>
          <p className="text-sm text-gray-600">Get up to 85% of childcare costs covered if you&apos;re eligible for UC.</p>
          <Link href="/universal-credit-childcare-calculator" className="text-sm text-purple-600 hover:underline mt-2 inline-block">
            Learn more →
          </Link>
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">👶</div>
          <h3 className="font-semibold text-gray-800 mb-2">Buy Second-Hand</h3>
          <p className="text-sm text-gray-600">Baby items are often used briefly. Facebook Marketplace, NCT sales, and eBay can save 50-80%.</p>
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">👨‍👩‍👧</div>
          <h3 className="font-semibold text-gray-800 mb-2">Family Support</h3>
          <p className="text-sm text-gray-600">Grandparents providing childcare can save thousands. Even 1-2 days/week makes a big difference.</p>
        </div>

        <div className="border rounded-lg p-4">
          <div className="text-3xl mb-3">💼</div>
          <h3 className="font-semibold text-gray-800 mb-2">Employer Benefits</h3>
          <p className="text-sm text-gray-600">Some employers offer childcare subsidies, flexible working, or workplace nurseries.</p>
        </div>
      </div>
    </div>
  )
}

export default function CostOfRaisingChildPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Cost of Raising a Child UK 2024',
    description: 'Calculate the true cost of raising a child in the UK. Average £160,000-£230,000 from birth to 18.',
    url: 'https://childcarecalculator.quest/cost-of-raising-a-child',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does it cost to raise a child in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The average cost to raise a child from birth to 18 in the UK is between £160,000 and £230,000. This includes childcare, food, clothing, education, activities, and other expenses. Costs are higher in London and for families choosing private education.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the most expensive age for childcare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The first 3 years are typically the most expensive for childcare, costing £12,000-£15,000 per year for full-time nursery care. Costs drop significantly once children start school and qualify for free hours entitlements.',
          },
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold">
            ← Back to Main Calculator
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cost of Raising a Child in the UK
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From first nappies to university prep: the true cost of raising a child
            averages <span className="text-orange-600 font-bold">£160,000 - £230,000</span> over 18 years.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-orange-600">£200k</div>
              <div className="text-sm text-gray-600">Average Total</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-amber-600">£11k</div>
              <div className="text-sm text-gray-600">Average/Year</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-yellow-600">£20k</div>
              <div className="text-sm text-gray-600">First Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <CostsSummary />
          <AnnualBreakdown />
          <FirstYearCosts />
          <SavingsTips />

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much does it cost to raise a child in the UK?</h3>
                <p className="text-gray-600">The average cost to raise a child from birth to 18 is £160,000-£230,000. This includes childcare (biggest cost in early years), food, clothing, education, activities, and housing contributions. London families typically pay 20-30% more.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What is the most expensive age for childcare?</h3>
                <p className="text-gray-600">Ages 0-3 are the most expensive for childcare, often costing £12,000-£15,000 per year for full-time nursery. Costs drop from age 3 when free hours kick in, and again at school age.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much does a baby cost in the first year?</h3>
                <p className="text-gray-600">The first year typically costs £15,000-£20,000+, with £2,000-£6,000 in setup costs (cot, pram, etc.) and £900-£2,200 monthly for nappies, food, clothing, and childcare if needed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How can I reduce the cost of raising a child?</h3>
                <p className="text-gray-600">Use government support (free hours, Tax-Free Childcare), buy second-hand, leverage family help for childcare, plan bigger purchases around sales, and look into employer benefits like childcare vouchers or flexible working.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Is it cheaper to have a second child?</h3>
                <p className="text-gray-600">Yes, second children are typically 20-30% cheaper due to hand-me-downs, existing equipment, and learned budgeting skills. However, childcare costs don&apos;t reduce much if both children need care simultaneously.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Does this include university costs?</h3>
                <p className="text-gray-600">No, university costs (tuition, living expenses) are not included and could add £40,000-£60,000 if you help fund your child&apos;s university education. Many parents start saving early through Junior ISAs.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Childcare Costs & Savings</h2>
            <p className="mb-6 opacity-90">
              Childcare is the biggest cost in the early years. Use our calculator to see how much
              government support you could receive and reduce your costs.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Go to Childcare Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            Cost estimates based on UK research and government data. Individual costs vary significantly.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Childcare Calculator. For guidance only - not financial advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
