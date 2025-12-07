import { Metadata } from 'next'
import Link from 'next/link'
import { PenaltyCalculator } from '../../components/PenaltyCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Penalty Calculator 2025 | Late Payment Fines & Interest',
  description: 'Stamp Duty Penalty Calculator - Calculate penalties and interest for late stamp duty payments. See what fines apply if you miss the 14-day deadline. Free SDLT penalty calculator.',
  keywords: 'stamp duty penalty calculator, stamp duty late payment, sdlt penalty, stamp duty fine, late stamp duty, stamp duty interest calculator',
  openGraph: {
    title: 'Stamp Duty Penalty Calculator 2025',
    description: 'Calculate penalties and interest for late stamp duty payments.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/penalty',
  },
}

export default function PenaltyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Stamp Duty <span className="text-red-400">Penalty</span>
                </span>
                <p className="text-xs text-slate-400">Late Payment Calculator</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Calculator</Link>
              <Link href="/refund" className="text-slate-300 hover:text-white transition-colors">Refund</Link>
              <Link href="/penalty" className="text-red-400 font-medium">Penalties</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Stamp Duty Penalty
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>stamp duty penalties and interest</strong> for late payments. Our penalty calculator shows fines for missing the 14-day deadline.
          </p>
          <div className="inline-block bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-red-400 font-semibold">14 days to pay</span>
            <span className="text-slate-400 ml-2">after property completion</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <PenaltyCalculator />
      </section>

      {/* Penalty Tiers Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Stamp Duty Penalty Rates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="text-3xl font-bold text-amber-400 mb-2">£100</div>
              <div className="text-white font-medium mb-2">Up to 3 months late</div>
              <p className="text-sm text-slate-400">
                Fixed penalty of £100 if you file your return up to 3 months after the deadline.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">£200</div>
              <div className="text-white font-medium mb-2">3-6 months late</div>
              <p className="text-sm text-slate-400">
                Additional £100 penalty (£200 total) if more than 3 months but less than 6 months late.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">5%</div>
              <div className="text-white font-medium mb-2">6-12 months late</div>
              <p className="text-sm text-slate-400">
                5% of the tax due or £300, whichever is greater, added to fixed penalties.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-600/30">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-white font-medium mb-2">12+ months late</div>
              <p className="text-sm text-slate-400">
                Up to 100% of the tax due for very late returns, depending on HMRC's assessment.
              </p>
            </div>
          </div>

          <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-lg font-semibold text-white mb-4">Interest on Late Payments</h3>
            <p className="text-sm text-slate-400 mb-4">
              In addition to penalties, HMRC charges interest on any unpaid stamp duty from the day after the filing deadline. The current interest rate is set by HMRC and compounds daily.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-red-400 font-medium mb-1">Interest Rate</div>
                <p className="text-slate-400">Currently 7.75% per annum (subject to change)</p>
              </div>
              <div>
                <div className="text-red-400 font-medium mb-1">Calculation</div>
                <p className="text-slate-400">Interest is calculated daily from day 15 after completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Stamp Duty Penalty FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                When do I have to pay stamp duty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You must file your SDLT return and pay the stamp duty within 14 days of completing your property purchase. This is the "effective date" of the transaction - usually the day you get the keys and complete the purchase.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What if I'm only a few days late?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Even being one day late triggers the initial £100 penalty. Interest also starts accruing from day 15. It's always best to file on time - your solicitor or conveyancer typically handles this as part of the transaction.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Can I appeal a stamp duty penalty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, you can appeal if you have a "reasonable excuse" for being late. Examples include serious illness, death of a close family member, or IT failures. Simply forgetting or being too busy is not usually accepted as a reasonable excuse.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Who is responsible for paying stamp duty on time?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You (the buyer) are legally responsible for filing the SDLT return and paying the tax on time. However, in practice, your solicitor or conveyancer usually handles this on your behalf as part of the conveyancing process.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What if I can't afford to pay stamp duty on time?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Contact HMRC as soon as possible. They may be able to arrange a payment plan. Ignoring the problem will only result in more penalties and interest. It's always better to communicate with HMRC than to simply not pay.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Main Calculator</Link>
            <Link href="/refund" className="text-slate-400 hover:text-white">Refund Calculator</Link>
            <Link href="/penalty" className="text-red-400">Penalty Calculator</Link>
          </div>
          <p className="text-xs text-slate-500">
            Stamp duty penalty information updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.uk/guidance/stamp-duty-land-tax-penalties" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
              GOV.UK
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
