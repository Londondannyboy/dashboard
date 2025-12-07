import { Metadata } from 'next'
import Link from 'next/link'
import { StampDutyCalculator } from '../../components/StampDutyCalculator'

export const metadata: Metadata = {
  title: 'Second Home Stamp Duty Calculator 2025 | Additional Property SDLT',
  description: 'Second Home Stamp Duty Calculator - Calculate stamp duty on second homes and holiday homes. Includes the 5% additional property surcharge. Free calculator with 2025 rates.',
  keywords: 'second home stamp duty calculator, stamp duty calculator second home, additional property stamp duty, holiday home stamp duty, second property tax',
  openGraph: {
    title: 'Second Home Stamp Duty Calculator 2025',
    description: 'Calculate stamp duty on second homes and holiday properties including the 5% surcharge.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/second-home',
  },
}

export default function SecondHomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Second Home <span className="text-purple-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Additional Property Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Standard</Link>
              <Link href="/buy-to-let" className="text-slate-300 hover:text-white transition-colors">Buy to Let</Link>
              <Link href="/second-home" className="text-purple-400 font-medium">Second Home</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Second Home Stamp Duty
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>stamp duty on second homes</strong> and holiday properties. Our second home stamp duty calculator includes the 5% additional property surcharge that applies to all second property purchases.
          </p>
          <div className="inline-block bg-purple-500/20 border border-purple-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-purple-400 font-semibold">+5% Surcharge</span>
            <span className="text-slate-400 ml-2">applies to all second home purchases</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <StampDutyCalculator defaultBuyerType="additional" />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Second Home Stamp Duty Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Second Home Stamp Duty Rates</h3>
              <p className="text-sm text-slate-400 mb-4">Standard rates + 5% surcharge:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £125,000</span>
                  <span className="text-purple-400 font-medium">5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£125,001 - £250,000</span>
                  <span className="text-purple-400 font-medium">7%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £925,000</span>
                  <span className="text-purple-400 font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£925,001 - £1.5m</span>
                  <span className="text-purple-400 font-medium">15%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £1.5 million</span>
                  <span className="text-purple-400 font-medium">17%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Second Home Examples</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£250,000 holiday home</span>
                    <span className="text-purple-400 font-medium">£15,000</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £2,500 for main residence</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£400,000 coastal cottage</span>
                    <span className="text-purple-400 font-medium">£30,000</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £10,000 for main residence</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£750,000 country retreat</span>
                    <span className="text-purple-400 font-medium">£65,000</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £27,500 for main residence</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Second Home Stamp Duty FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How much extra stamp duty on a second home?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Second homes attract a 5% surcharge on top of standard stamp duty rates. This applies from £0, so a £200,000 second home would incur £11,500 stamp duty (compared to £1,500 for a main residence). Use our second home stamp duty calculator above for your exact amount.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Can I get the second home stamp duty surcharge refunded?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, if you're replacing your main residence. If you buy a new home before selling your old one, you pay the surcharge initially. If you sell your previous main residence within 36 months, you can claim a refund of the 5% surcharge. The claim must be made within 12 months of the sale.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Do I pay the surcharge on inherited properties?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Inheriting a property doesn't trigger stamp duty. However, if you already own an inherited property and then buy another home, the surcharge may apply because you'd own multiple properties. There are exemptions if your inherited share is worth less than £40,000.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What counts as a second home for stamp duty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Any residential property you purchase while owning another property counts as a second home. This includes holiday homes, investment properties, buy-to-lets, and properties abroad. The surcharge applies whether the additional property is worth £40,000 or more.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Standard Calculator</Link>
            <Link href="/buy-to-let" className="text-slate-400 hover:text-white">Buy to Let</Link>
            <Link href="/second-home" className="text-purple-400">Second Home</Link>
            <Link href="/commercial" className="text-slate-400 hover:text-white">Commercial</Link>
          </div>
          <p className="text-xs text-slate-500">
            Second home stamp duty rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
              GOV.UK
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
