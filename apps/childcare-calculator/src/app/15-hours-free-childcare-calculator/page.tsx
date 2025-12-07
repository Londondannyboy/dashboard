import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '15 Hours Free Childcare Calculator UK 2024/25 | Universal Entitlement',
  description: 'Calculate your 15 hours free childcare entitlement. All 3-4 year olds plus eligible 2 year olds qualify. Worth £3,750+ per year. Check eligibility and savings.',
  keywords: [
    '15 hours free childcare calculator',
    '15 hours free childcare',
    '15 free hours childcare',
    'free childcare calculator',
    'free childcare hours',
    '15 hours universal entitlement',
    '2 year old free childcare',
    '3 year old free childcare',
    'funded hours childcare',
    'free nursery hours',
  ],
  alternates: {
    canonical: 'https://childcarecalculator.quest/15-hours-free-childcare-calculator',
  },
  openGraph: {
    title: '15 Hours Free Childcare Calculator UK 2024/25',
    description: 'Calculate your 15 hours free childcare entitlement. Universal for 3-4 year olds, eligible 2 year olds.',
    url: 'https://childcarecalculator.quest/15-hours-free-childcare-calculator',
    siteName: 'Childcare Calculator',
    type: 'website',
  },
}

function EntitlementSummary() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">15 Hours Free Childcare Overview</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Universal Entitlement (All 3-4 Year Olds)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hours per week</span>
              <span className="font-bold text-green-600">15 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Weeks per year</span>
              <span className="font-bold text-green-600">38 weeks</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total hours/year</span>
              <span className="font-bold text-green-600">570 hours</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-gray-600">Approximate value</span>
              <span className="font-bold text-green-600 text-xl">£3,750+/year</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No income requirements - every 3-4 year old qualifies regardless of working status
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">2 Year Old Entitlement (Eligible Families)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Hours per week</span>
              <span className="font-bold text-blue-600">15 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Weeks per year</span>
              <span className="font-bold text-blue-600">38 weeks</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total hours/year</span>
              <span className="font-bold text-blue-600">570 hours</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-gray-600">Approximate value</span>
              <span className="font-bold text-blue-600 text-xl">£4,000+/year</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Income-based eligibility or qualifying benefits required
          </p>
        </div>
      </div>
    </div>
  )
}

function EligibilityChecker() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Qualifies for 15 Free Hours?</h2>

      <div className="space-y-6">
        {/* 3-4 Year Olds */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-3">Universal</span>
            All 3-4 Year Olds
          </h3>
          <p className="text-gray-600 mb-4">
            Every child aged 3-4 is entitled to 15 hours free childcare, regardless of parent income or working status.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">When does it start?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Birthday Jan-Mar: Free hours start following 1 April</li>
              <li>• Birthday Apr-Aug: Free hours start following 1 September</li>
              <li>• Birthday Sep-Dec: Free hours start following 1 January</li>
            </ul>
          </div>
        </div>

        {/* Eligible 2 Year Olds */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-3">Means-tested</span>
            Eligible 2 Year Olds
          </h3>
          <p className="text-gray-600 mb-4">
            2 year olds can get 15 free hours if their family meets certain criteria:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Qualifying Benefits</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Income Support</li>
                <li>• Income-based JSA</li>
                <li>• Income-related ESA</li>
                <li>• Universal Credit (income ≤£15,400)</li>
                <li>• Tax Credits (income ≤£16,190)</li>
                <li>• Working Tax Credit 4-week run-on</li>
                <li>• Support under Immigration Act</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Automatic Eligibility</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Looked after children</li>
                <li>• Adopted children</li>
                <li>• Special guardianship/child arrangement order</li>
                <li>• Child with disability (DLA)</li>
                <li>• Child with EHC plan</li>
                <li>• Parent gets Carer&apos;s Allowance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* From April 2024 - Working families */}
        <div className="border border-purple-300 rounded-lg p-6 bg-purple-50">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-3">New from 2024</span>
            Working Family Entitlement
          </h3>
          <p className="text-gray-600 mb-4">
            From April 2024, working families can also access free hours for younger children:
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <span className="font-medium">April 2024:</span> 15 hours for working parents of 2 year olds
            </div>
            <div className="bg-white rounded-lg p-3">
              <span className="font-medium">September 2024:</span> 15 hours extended to 9-month-olds
            </div>
            <div className="bg-white rounded-lg p-3">
              <span className="font-medium">September 2025:</span> 30 hours for all working parents (9 months - 4 years)
            </div>
          </div>
          <p className="text-sm text-purple-700 mt-4">
            Working family eligibility: Each parent earns at least £183.82/week but less than £100,000/year
          </p>
        </div>
      </div>
    </div>
  )
}

function SavingsCalculator() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">15 Hours Savings by Region</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-green-100 to-emerald-100">
              <th className="text-left p-4 font-semibold">Region</th>
              <th className="text-right p-4 font-semibold">Hourly Rate</th>
              <th className="text-right p-4 font-semibold">Weekly Saving</th>
              <th className="text-right p-4 font-semibold">Annual Saving</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Inner London</td>
              <td className="p-4 text-right">£8.75</td>
              <td className="p-4 text-right">£131</td>
              <td className="p-4 text-right font-semibold text-green-600">£4,987</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4">Outer London</td>
              <td className="p-4 text-right">£7.88</td>
              <td className="p-4 text-right">£118</td>
              <td className="p-4 text-right font-semibold text-green-600">£4,491</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">South East</td>
              <td className="p-4 text-right">£7.50</td>
              <td className="p-4 text-right">£113</td>
              <td className="p-4 text-right font-semibold text-green-600">£4,275</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4">UK Average</td>
              <td className="p-4 text-right">£6.60</td>
              <td className="p-4 text-right">£99</td>
              <td className="p-4 text-right font-semibold text-green-600">£3,762</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">North East</td>
              <td className="p-4 text-right">£5.50</td>
              <td className="p-4 text-right">£83</td>
              <td className="p-4 text-right font-semibold text-green-600">£3,135</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Based on average nursery rates for 3-4 year olds in each region. 15 hours × 38 weeks = 570 hours/year.
      </p>
    </div>
  )
}

function HowToApply() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Claim Your 15 Free Hours</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-green-600">1</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Check Eligibility</h3>
          <p className="text-sm text-gray-600">Use gov.uk childcare calculator to confirm you qualify</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-green-600">2</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Apply Online</h3>
          <p className="text-sm text-gray-600">Create a childcare service account on gov.uk</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-green-600">3</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Get Your Code</h3>
          <p className="text-sm text-gray-600">Receive eligibility code within 7 working days</p>
        </div>
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-green-600">4</span>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Give to Provider</h3>
          <p className="text-sm text-gray-600">Share code with your childcare provider</p>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> For the universal 15 hours (all 3-4 year olds), you don&apos;t need to apply online.
          Simply speak to your childcare provider directly - they&apos;ll help you claim.
        </p>
      </div>
    </div>
  )
}

export default function FifteenHoursPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '15 Hours Free Childcare Calculator UK 2024/25',
    description: 'Calculate your 15 hours free childcare entitlement. Universal for 3-4 year olds.',
    url: 'https://childcarecalculator.quest/15-hours-free-childcare-calculator',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do all 3 year olds get 15 hours free childcare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all 3 and 4 year olds in England are entitled to 15 hours of free childcare per week (570 hours per year), regardless of family income or working status. This is known as the universal entitlement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much is 15 hours free childcare worth?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '15 hours of free childcare is worth approximately £3,750 per year on average, though this varies by region. In London it can be worth over £5,000, while in northern regions it may be worth around £3,000.',
          },
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-semibold">
            ← Back to Main Calculator
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            15 Hours Free Childcare Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All 3-4 year olds get <span className="text-green-600 font-bold">15 hours free childcare</span> per week.
            Eligible 2 year olds also qualify. Worth <span className="text-green-600 font-bold">£3,750+</span> per year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-green-600">15</div>
              <div className="text-sm text-gray-600">Hours/Week</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-emerald-600">570</div>
              <div className="text-sm text-gray-600">Hours/Year</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-teal-600">£3,750+</div>
              <div className="text-sm text-gray-600">Annual Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <EntitlementSummary />
          <EligibilityChecker />
          <SavingsCalculator />
          <HowToApply />

          {/* Comparison with 30 hours */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">15 Hours vs 30 Hours Free Childcare</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-100 to-emerald-100">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">15 Hours (Universal)</th>
                    <th className="text-center p-4 font-semibold">30 Hours (Extended)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Who qualifies</td>
                    <td className="p-4 text-center">All 3-4 year olds</td>
                    <td className="p-4 text-center">Working parents of 3-4 year olds</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Income requirements</td>
                    <td className="p-4 text-center text-green-600">None</td>
                    <td className="p-4 text-center">£183.82/week min, £100k max</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Hours per week</td>
                    <td className="p-4 text-center">15 hours</td>
                    <td className="p-4 text-center">30 hours</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Annual value (avg)</td>
                    <td className="p-4 text-center">~£3,750</td>
                    <td className="p-4 text-center">~£7,500</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Need to apply online?</td>
                    <td className="p-4 text-center">No - just speak to provider</td>
                    <td className="p-4 text-center">Yes - gov.uk application</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/30-hours-free-childcare-calculator"
                className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Check 30 Hours Eligibility →
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Do all 3 year olds get 15 hours free childcare?</h3>
                <p className="text-gray-600">Yes! Every 3 and 4 year old in England is entitled to 15 hours of free childcare per week, regardless of family income, working status, or any other criteria. This is a universal entitlement.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much is 15 hours free childcare worth?</h3>
                <p className="text-gray-600">The value depends on your local childcare rates. On average, 15 hours is worth approximately £3,750 per year. In London it can be worth over £5,000, while in northern regions it may be around £3,000.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I stretch 15 hours over more days?</h3>
                <p className="text-gray-600">Yes, many providers allow you to &quot;stretch&quot; your hours over more weeks. Instead of 15 hours for 38 weeks, you might take fewer hours across more weeks (e.g., 11 hours for 52 weeks).</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Are meals included in the free hours?</h3>
                <p className="text-gray-600">No, the free hours cover childcare only. Providers can charge for meals, nappies, sun cream, and other consumables. Ask your provider about any additional charges.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I use 15 hours with a childminder?</h3>
                <p className="text-gray-600">Yes, you can use your free hours with any Ofsted-registered provider including nurseries, childminders, and pre-schools. The provider must be registered to accept funded hours.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What if I need more than 15 hours?</h3>
                <p className="text-gray-600">If you&apos;re a working family, check if you qualify for 30 hours free. Otherwise, you can top up with paid hours. Tax-Free Childcare can help cover additional costs (up to £2,000/year per child).</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Full Childcare Entitlement</h2>
            <p className="mb-6 opacity-90">
              Use our comprehensive calculator to see all your free hours entitlements plus
              Tax-Free Childcare and other government support.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
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
            Information based on gov.uk guidelines for funded childcare entitlements in England.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Childcare Calculator. For guidance only - verify current eligibility.
          </p>
        </div>
      </footer>
    </main>
  )
}
