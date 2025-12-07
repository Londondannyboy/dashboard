import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tax-Free Childcare Calculator UK 2024/25 | Save Up to £2,000 Per Child',
  description: 'Calculate your Tax-Free Childcare savings. Get up to £2,000 per child (£4,000 for disabled children) from the government. Free calculator to check eligibility and benefits.',
  keywords: [
    'tax free childcare calculator',
    'tax-free childcare calculator',
    'childcare voucher calculator',
    'childcare vouchers calculator',
    'tax free childcare uk',
    'government childcare support',
    '£2000 childcare',
    'childcare tax relief',
    'tax free childcare eligibility',
    'tax free childcare how much',
  ],
  alternates: {
    canonical: 'https://childcarecalculator.quest/tax-free-childcare-calculator',
  },
  openGraph: {
    title: 'Tax-Free Childcare Calculator UK 2024/25',
    description: 'Calculate how much you could save with Tax-Free Childcare. Up to £2,000 per child per year.',
    url: 'https://childcarecalculator.quest/tax-free-childcare-calculator',
    siteName: 'Childcare Calculator',
    type: 'website',
  },
}

function TaxFreeCalculator() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tax-Free Childcare Savings Calculator</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">How Tax-Free Childcare Works</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-purple-600">80p</div>
              <div className="text-sm text-gray-600">You pay</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-pink-600">+20p</div>
              <div className="text-sm text-gray-600">Government adds</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-3xl font-bold text-green-600">=£1</div>
              <div className="text-sm text-gray-600">In your account</div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-semibold">Your Annual Childcare Spend</th>
                <th className="text-right p-4 font-semibold">Government Top-Up</th>
                <th className="text-right p-4 font-semibold">Your Actual Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">£2,000</td>
                <td className="p-4 text-right text-green-600 font-semibold">£500</td>
                <td className="p-4 text-right">£1,600</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">£5,000</td>
                <td className="p-4 text-right text-green-600 font-semibold">£1,250</td>
                <td className="p-4 text-right">£4,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">£8,000</td>
                <td className="p-4 text-right text-green-600 font-semibold">£2,000</td>
                <td className="p-4 text-right">£6,400</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">£10,000+</td>
                <td className="p-4 text-right text-green-600 font-semibold">£2,000 (max)</td>
                <td className="p-4 text-right">£8,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="text-sm text-yellow-800">
            <strong>Maximum Savings:</strong> £2,000 per child per year (£4,000 for disabled children).
            To get the full £2,000 top-up, you need to spend £10,000 on childcare annually per child.
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
          <h3 className="font-semibold text-gray-800">Child Age</h3>
          <p className="text-gray-600">Your child must be under 12 (or under 17 if disabled)</p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Working Requirements</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Both parents must work (or single parent if applicable)</li>
            <li>• Each parent earns at least £183.82/week (National Minimum Wage for 16 hours)</li>
            <li>• Neither parent earns over £100,000 per year</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold text-gray-800">Immigration Status</h3>
          <p className="text-gray-600">You must have a National Insurance number and live in the UK</p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold text-gray-800">Cannot Claim If...</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• You&apos;re claiming Tax Credits</li>
            <li>• You&apos;re claiming Universal Credit</li>
            <li>• You&apos;re using childcare vouchers for the same child</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function VsComparison() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tax-Free Childcare vs Childcare Vouchers</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-purple-100 to-pink-100">
              <th className="text-left p-4 font-semibold">Feature</th>
              <th className="text-center p-4 font-semibold">Tax-Free Childcare</th>
              <th className="text-center p-4 font-semibold">Childcare Vouchers (Closed)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-medium">Status</td>
              <td className="p-4 text-center"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Open to new applicants</span></td>
              <td className="p-4 text-center"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Closed October 2018</span></td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-medium">Max annual savings per child</td>
              <td className="p-4 text-center font-semibold text-green-600">£2,000</td>
              <td className="p-4 text-center">£933 (basic rate taxpayer)</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium">Self-employed eligible?</td>
              <td className="p-4 text-center">✓ Yes</td>
              <td className="p-4 text-center">✗ No</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-4 font-medium">Age limit</td>
              <td className="p-4 text-center">Under 12</td>
              <td className="p-4 text-center">Under 16</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-medium">Can use with 30 hours?</td>
              <td className="p-4 text-center">✓ Yes</td>
              <td className="p-4 text-center">✓ Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Childcare voucher schemes closed to new entrants in October 2018.
          If you&apos;re already receiving vouchers, you can continue until your child reaches age 16,
          but you should calculate whether switching to Tax-Free Childcare would save you more.
        </p>
      </div>
    </div>
  )
}

export default function TaxFreeChildcarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tax-Free Childcare Calculator UK 2024/25',
    description: 'Calculate your Tax-Free Childcare savings. Get up to £2,000 per child per year.',
    url: 'https://childcarecalculator.quest/tax-free-childcare-calculator',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much can I get from Tax-Free Childcare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can receive up to £2,000 per child per year (£4,000 for disabled children). For every £8 you pay into your Tax-Free Childcare account, the government adds £2.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use Tax-Free Childcare with 30 hours free childcare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can use both schemes together. The Tax-Free Childcare helps cover additional hours, meals, and other childcare costs beyond the 30 free hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the income limit for Tax-Free Childcare?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each parent must earn at least £183.82 per week (equivalent to 16 hours at National Minimum Wage) but no more than £100,000 per year.',
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
            Tax-Free Childcare Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get up to <span className="text-purple-600 font-bold">£2,000 per child</span> per year
            from the government. For every £8 you pay in, the government tops up £2.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-purple-600">£2,000</div>
              <div className="text-sm text-gray-600">Max per child/year</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-pink-600">£4,000</div>
              <div className="text-sm text-gray-600">Disabled children</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4">
              <div className="text-3xl font-bold text-green-600">25%</div>
              <div className="text-sm text-gray-600">Government top-up</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <TaxFreeCalculator />
          <EligibilityChecker />
          <VsComparison />

          {/* How to Apply */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Apply for Tax-Free Childcare</h2>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Create Account</h3>
                <p className="text-sm text-gray-600">Apply through the government childcare service website</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Verify Details</h3>
                <p className="text-sm text-gray-600">HMRC checks your eligibility automatically</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Pay In Money</h3>
                <p className="text-sm text-gray-600">Deposit funds and government adds 25%</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Pay Provider</h3>
                <p className="text-sm text-gray-600">Use your account to pay registered childcare</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How much can I get from Tax-Free Childcare?</h3>
                <p className="text-gray-600">You can receive up to £2,000 per child per year (£4,000 for disabled children). For every £8 you pay into your account, the government adds £2 - that&apos;s a 25% top-up on your childcare spending.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I use Tax-Free Childcare with 30 hours free childcare?</h3>
                <p className="text-gray-600">Yes! You can use both schemes together. Use Tax-Free Childcare to pay for additional hours beyond your 30 free hours, meals, nappies, and other childcare costs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What is the income limit for Tax-Free Childcare?</h3>
                <p className="text-gray-600">Each parent must earn at least £183.82 per week (equivalent to 16 hours at National Minimum Wage) but no more than £100,000 per year. If you&apos;re on maternity/paternity leave, you&apos;re still eligible.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can self-employed people use Tax-Free Childcare?</h3>
                <p className="text-gray-600">Yes, self-employed individuals are eligible for Tax-Free Childcare as long as they meet the minimum and maximum income requirements. This is a key advantage over the old childcare voucher scheme.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What happens if I earn over £100,000?</h3>
                <p className="text-gray-600">If either parent earns over £100,000 adjusted net income, you&apos;re not eligible for Tax-Free Childcare. Consider salary sacrifice, pension contributions, or charitable donations to bring your income below the threshold.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How do I reconfirm my eligibility?</h3>
                <p className="text-gray-600">You must reconfirm your eligibility every 3 months. HMRC will remind you when it&apos;s time. If your circumstances change (new job, income changes), update your details immediately.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What childcare providers can I pay?</h3>
                <p className="text-gray-600">You can pay any Ofsted-registered provider including nurseries, childminders, nannies, after-school clubs, and holiday clubs. Your provider must be signed up to receive Tax-Free Childcare payments.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I switch from childcare vouchers to Tax-Free Childcare?</h3>
                <p className="text-gray-600">Yes, but you must stop childcare vouchers for at least one full tax year before switching for the same child. Calculate which scheme gives you more savings before switching.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Total Childcare Costs</h2>
            <p className="mb-6 opacity-90">
              Use our comprehensive calculator to see all available government support including Tax-Free Childcare,
              30 hours free, and Universal Credit childcare element.
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
            Tax-Free Childcare information based on gov.uk guidelines. Always verify current eligibility requirements.
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Childcare Calculator. For guidance only - not financial advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
