import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UK Mileage Rates 2025: Freelancers & Business Drivers Tax Guide',
  description: 'Complete guide to 2025 UK mileage reimbursement rates, mileage allowances, and tax relief for business, freelance, and self-employed drivers.',
  keywords: 'uk mileage rates 2025, business mileage allowance, tax relief mileage, mileage reimbursement, AMAP rates, freelancer mileage',
}

export default function UKMileageRatesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">📚</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel <span className="text-blue-400">Blog</span>
                </span>
                <p className="text-xs text-slate-400">Expert Guides & Tips</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="min-h-screen">
        {/* Hero */}
        <section className="py-12 sm:py-16 px-4 border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              UK Mileage Rates 2025: Complete Tax Guide for Freelancers & Business Drivers
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive guide to official UK mileage reimbursement rates, tax relief, and how to claim business mileage expenses for 2025.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Official Rates */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Official 2025 Mileage Rates</h2>
              <p className="text-slate-300 mb-6">
                The <a href="https://www.gov.uk/tax-relief-mileage" className="text-blue-400 hover:text-blue-300 underline" target="_blank">UK government</a> sets official mileage allowance payments (MAPs) for business use. These remain at historically established rates:
              </p>
              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 border-b border-slate-700">
                      <th className="px-4 py-3 text-left text-white font-semibold">Vehicle Type</th>
                      <th className="px-4 py-3 text-center text-white font-semibold">2025 Rate</th>
                      <th className="px-4 py-3 text-left text-slate-300 font-semibold text-xs">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Car (first 10,000 miles)</td>
                      <td className="px-4 py-3 text-center text-white font-semibold">45p/mile</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">Unchanged since 2011</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Car (after 10,000 miles)</td>
                      <td className="px-4 py-3 text-center text-white font-semibold">25p/mile</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">Reduced rate</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Motorcycle</td>
                      <td className="px-4 py-3 text-center text-white font-semibold">24p/mile</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">Unchanged since 2011</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-300">Bicycle</td>
                      <td className="px-4 py-3 text-center text-white font-semibold">20p/mile</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">Unchanged since 2012</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-slate-300 text-sm"><strong>Important:</strong> The 45p rate applies to the first 10,000 miles of business mileage per tax year. Miles beyond 10,000 attract the lower 25p rate.</p>
              </div>
            </section>

            {/* Who Can Claim */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Who Can Claim Mileage Allowance?</h2>
              <p className="text-slate-300 mb-4">You can claim mileage tax relief if you are:</p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>✓ Self-employed and use your own vehicle for business</li>
                <li>✓ An employee required to use your own vehicle for work</li>
                <li>✓ A freelancer or contractor using personal vehicles for client visits</li>
                <li>✓ Running a limited company and claiming through business expenses</li>
              </ul>
              <p className="text-slate-300">
                You cannot claim if your employer provides a company car or covers fuel expenses directly.
              </p>
            </section>

            {/* EV & Alternative Fuel */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Electric Vehicles & Alternative Fuel Rates</h2>
              <p className="text-slate-300 mb-4">
                For electric vehicles and alternative fuel vehicles (hybrid, LPG, CNG), HMRC allows up to 5p per mile additional claim:
              </p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>✓ <strong>Electric Vehicles:</strong> 45p/mile + 5p/mile = 50p/mile (first 10,000 miles)</li>
                <li>✓ <strong>Hybrids:</strong> Check vehicle documentation for eligibility</li>
                <li>✓ <strong>LPG/CNG Vehicles:</strong> 5p/mile supplement may apply</li>
              </ul>
              <p className="text-slate-300">
                Learn more about <Link href="/comparison/hybrid-vs-ev" className="text-blue-400 hover:text-blue-300 underline">electric vehicle costs</Link> to determine if EV tax relief makes financial sense for your situation.
              </p>
            </section>

            {/* How to Claim */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Claim Mileage Tax Relief</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/30 p-4 rounded border border-slate-700/50">
                  <h3 className="text-white font-semibold mb-2">Self-Employed & Sole Traders</h3>
                  <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                    <li>Record business mileage in logbook or mileage tracking app</li>
                    <li>Calculate total business miles per tax year</li>
                    <li>Apply rates: 45p for first 10,000 miles, 25p thereafter</li>
                    <li>Enter claim in Self Assessment tax return (Section 4, Employment)</li>
                    <li>You can also claim for actual running costs if they exceed mileage allowance</li>
                  </ol>
                </div>
                <div className="bg-slate-800/30 p-4 rounded border border-slate-700/50">
                  <h3 className="text-white font-semibold mb-2">Employees</h3>
                  <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                    <li>Provide employer with business mileage records</li>
                    <li>If employer pays less than HMRC rates, claim difference via Self Assessment</li>
                    <li>If employer pays more, no tax relief needed</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Record Keeping */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Best Practices for Mileage Records</h2>
              <p className="text-slate-300 mb-4">HMRC requires adequate records to support claims. Best practices include:</p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>✓ Use apps like <a href="https://www.milegemate.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">MileageMate</a> or <a href="https://www.everlance.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Everlance</a> for automatic tracking</li>
                <li>✓ Maintain a physical logbook with date, distance, and business purpose</li>
                <li>✓ Keep evidence of destination visits (invoices, meeting notes, client confirmations)</li>
                <li>✓ Separate personal miles from business miles clearly</li>
                <li>✓ Keep records for at least 5 years (HMRC requirements)</li>
              </ul>
            </section>

            {/* Calculate Savings */}
            <section className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Example Calculation: Annual Savings</h3>
              <p className="text-slate-300 mb-4">Self-employed consultant covering 15,000 business miles annually:</p>
              <ul className="text-slate-300 space-y-1 mb-4">
                <li>• First 10,000 miles: 10,000 × £0.45 = £4,500</li>
                <li>• Remaining 5,000 miles: 5,000 × £0.25 = £1,250</li>
                <li>• <strong>Total annual claim: £5,750</strong></li>
              </ul>
              <p className="text-slate-300 text-sm">
                At 20% tax rate: £1,150 tax relief. At 40% tax rate: £2,300 tax relief annually.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Calculate Your Annual Mileage Costs</h3>
              <p className="text-slate-300 mb-4">
                Use our fuel calculator to estimate your annual business mileage costs.
              </p>
              <Link href="/" className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                Open Mileage Calculator
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <section className="py-12 px-4 border-t border-slate-700/50 mt-12 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/how-to-reduce-fuel-costs" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Reduce Fuel Costs</h4>
              <p className="text-sm text-slate-400">Money-saving strategies for drivers</p>
            </Link>
            <Link href="/diesel-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Diesel Calculator</h4>
              <p className="text-sm text-slate-400">Calculate business fuel costs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
