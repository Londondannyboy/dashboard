import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Universal Credit Childcare Calculator UK 2024/25 | Up to 85% Costs Covered',
  description: 'Calculate Universal Credit childcare support. Get up to 85% of childcare costs covered - max £1,014.63/month for one child, £1,739.37 for two+. Check eligibility now.',
  keywords: [
    'universal credit childcare calculator',
    'universal credit childcare',
    'uc childcare element',
    'universal credit childcare costs',
    'childcare on universal credit',
    'universal credit nursery costs',
    'uc childcare element calculator',
    '85% childcare costs',
    'universal credit childcare claim',
    'childcare element universal credit',
  ],
  alternates: {
    canonical: 'https://childcarecalculator.quest/universal-credit-childcare-calculator',
  },
  openGraph: {
    title: 'Universal Credit Childcare Calculator UK 2024/25',
    description: 'Calculate how much childcare support you could get through Universal Credit. Up to 85% of costs covered.',
    url: 'https://childcarecalculator.quest/universal-credit-childcare-calculator',
    siteName: 'Childcare Calculator',
    type: 'website',
  },
}

function CoverageCalculator() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Universal Credit Childcare Support</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">How Much Is Covered?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-4xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">of eligible childcare costs</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Maximum monthly support</div>
              <div className="text-2xl font-bold text-green-600">£1,014.63</div>
              <div className="text-xs text-gray-500">one child</div>
              <div className="text-2xl font-bold text-green-600 mt-2">£1,739.37</div>
              <div className="text-xs text-gray-500">two or more children</div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-semibold">Your Monthly Childcare Cost</th>
                <th className="text-right p-4 font-semibold">UC Pays (85%)</th>
                <th className="text-right p-4 font-semibold">You Pay (15%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">£500</td>
                <td className="p-4 text-right text-green-600 font-semibold">£425.00</td>
                <td className="p-4 text-right">£75.00</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">£800</td>
                <td className="p-4 text-right text-green-600 font-semibold">£680.00</td>
                <td className="p-4 text-right">£120.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">£1,000</td>
                <td className="p-4 text-right text-green-600 font-semibold">£850.00</td>
                <td className="p-4 text-right">£150.00</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">£1,200 (1 child max)</td>
                <td className="p-4 text-right text-green-600 font-semibold">£1,014.63</td>
                <td className="p-4 text-right">£185.37</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">£2,000 (2+ children max)</td>
                <td className="p-4 text-right text-green-600 font-semibold">£1,739.37</td>
                <td className="p-4 text-right">£260.63</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> You must pay for childcare upfront and claim costs back through your UC journal.
            There can be a 1-month delay in receiving your first childcare payment.
          </p>
        </div>
      </div>
    </div>
  )
}

function EligibilityChecker() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Eligibility Requirements</h2>

      <div className="space-y-4">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Already on Universal Credit</h3>
          <p className="text-gray-600">You must already be receiving Universal Credit payments</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Working Requirements</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Single parent: must be working (any hours)</li>
            <li>• Couple: both must be working (or one working + one with limited capability)</li>
            <li>• No minimum earnings threshold like Tax-Free Childcare</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Child Requirements</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Child under 17 years old</li>
            <li>• Child lives with you</li>
            <li>• You&apos;re responsible for them</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Childcare Requirements</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Provider must be registered (Ofsted in England)</li>
            <li>• Includes nurseries, childminders, after-school clubs</li>
            <li>• Cannot be paid to relatives living with you</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function HowToClaim() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Claim UC Childcare Costs</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Pay Your Childcare Provider</h3>
              <p className="text-sm text-gray-600">You must pay upfront - UC reimburses you afterwards</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="font-bold text-blue-600">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Get Proof of Payment</h3>
              <p className="text-sm text-gray-600">Bank statement, receipt, or invoice showing amount paid</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="font-bold text-blue-600">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Report in UC Journal</h3>
              <p className="text-sm text-gray-600">Add childcare costs in your online UC account within the assessment period</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="font-bold text-blue-600">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Provider Details</h3>
              <p className="text-sm text-gray-600">Submit provider name, address, and registration number</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-red-800 mb-4">Common Mistakes to Avoid</h3>
          <ul className="space-y-2 text-sm text-red-700">
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Forgetting to report costs each month - you must claim every assessment period</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Not keeping receipts - you may need to prove payments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Claiming for unregistered childcare - provider MUST be registered</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Missing deadlines - report costs within the assessment period</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⚠️</span>
              <span>Not budgeting for the first month - there&apos;s a delay before first payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Comparison() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">UC Childcare vs Tax-Free Childcare</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-cyan-100">
              <th className="text-left p-4 font-semibold">Feature</th>
              <th className="text-center p-4 font-semibold">UC Childcare Element</th>
              <th className="text-center p-4 font-semibold">Tax-Free Childcare</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium">Coverage</td>
              <td className="p-4 text-center font-semibold text-green-600">85% of costs</td>
              <td className="p-4 text-center">25% top-up (you pay 80%)</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-medium">Max per year (1 child)</td>
              <td className="p-4 text-center">£12,175</td>
              <td className="p-4 text-center">£2,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium">Minimum income</td>
              <td className="p-4 text-center text-green-600">None</td>
              <td className="p-4 text-center">£183.82/week each</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-medium">Maximum income</td>
              <td className="p-4 text-center">UC limits apply</td>
              <td className="p-4 text-center">£100,000 each</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium">Payment timing</td>
              <td className="p-4 text-center">Reimburses after you pay</td>
              <td className="p-4 text-center">Pay in, government tops up</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-medium">Can use together?</td>
              <td className="p-4 text-center" colSpan={2}>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">No - must choose one</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Which is better?</strong> If you&apos;re eligible for Universal Credit, the childcare element usually provides
          more support (85% vs 20%). However, you cannot claim both for the same childcare costs.
          Use the calculator to compare your personal situation.
        </p>
      </div>
    </div>
  )
}

export default function UniversalCreditChildcarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Universal Credit Childcare Calculator UK 2024/25',
    description: 'Calculate Universal Credit childcare support. Get up to 85% of childcare costs covered.',
    url: 'https://childcarecalculator.quest/universal-credit-childcare-calculator',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much childcare does Universal Credit pay?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Universal Credit pays up to 85% of eligible childcare costs, up to a maximum of £1,014.63 per month for one child or £1,739.37 for two or more children.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to pay childcare upfront on Universal Credit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you must pay your childcare provider first and then report the costs through your UC journal to be reimbursed. There is typically a 1-month delay for your first payment.',
          },
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Main Calculator
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Universal Credit Childcare Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get up to <span className="text-blue-600 font-bold">85% of childcare costs</span> covered
            through Universal Credit - that&apos;s up to £1,739/month for working families.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Costs Covered</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-cyan-600">£1,014</div>
              <div className="text-sm text-gray-600">Max/month (1 child)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-green-600">£1,739</div>
              <div className="text-sm text-gray-600">Max/month (2+ children)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <CoverageCalculator />
          <EligibilityChecker />
          <HowToClaim />
          <Comparison />

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much childcare does Universal Credit pay?</h3>
                <p className="text-gray-600">Universal Credit pays up to 85% of eligible childcare costs, with a maximum of £1,014.63 per month for one child or £1,739.37 for two or more children.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do I need to pay childcare upfront on Universal Credit?</h3>
                <p className="text-gray-600">Yes, you must pay your childcare provider first and then report the costs through your UC journal. You&apos;ll be reimbursed 85% in your next UC payment, but there&apos;s typically a one-month delay for your first childcare payment.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I get UC childcare if I only work part-time?</h3>
                <p className="text-gray-600">Yes! There&apos;s no minimum hours requirement for UC childcare support. As long as you&apos;re working (even just a few hours per week) and meet other eligibility criteria, you can claim.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I use 30 hours free childcare with Universal Credit?</h3>
                <p className="text-gray-600">Yes, you can combine 30 hours free childcare (or 15 hours) with UC childcare support. UC can cover the costs of additional hours, meals, and extras beyond your free hours.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How do I report childcare costs?</h3>
                <p className="text-gray-600">Log into your Universal Credit online account (journal), go to &quot;Report childcare costs&quot;, and enter the amount paid, dates, and provider details. You&apos;ll need your provider&apos;s registration number.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What if my childcare costs change each month?</h3>
                <p className="text-gray-600">Report the actual amount you pay each month. If you pay different amounts (e.g., during school holidays), report what you actually paid during each assessment period.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I backdate childcare costs?</h3>
                <p className="text-gray-600">You can usually only claim for childcare paid during your current assessment period or possibly the previous one. Report costs as soon as you pay them to avoid missing out.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What counts as registered childcare?</h3>
                <p className="text-gray-600">Ofsted-registered nurseries, childminders, nannies (via an agency), out-of-school clubs, and play schemes. You cannot claim for relatives who live with you or unregistered providers.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Total Childcare Support</h2>
            <p className="mb-6 opacity-90">
              Use our comprehensive calculator to see all available support including UC childcare element,
              30 hours free, and other government schemes.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
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
            Universal Credit childcare information based on gov.uk guidelines. Always verify current rates and eligibility.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Childcare Calculator. For guidance only - not benefits advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
