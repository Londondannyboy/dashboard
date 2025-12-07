import { Metadata } from 'next'
import Link from 'next/link'
import { StampDutyCalculator } from '../../components/StampDutyCalculator'

export const metadata: Metadata = {
  title: 'Buy to Let Stamp Duty Calculator 2025 | BTL SDLT Calculator',
  description: 'Buy to Let Stamp Duty Calculator - Calculate stamp duty on buy-to-let properties. Includes the 5% additional property surcharge. Free BTL stamp duty calculator with 2025 rates.',
  keywords: 'buy to let stamp duty calculator, BTL stamp duty, buy to let SDLT, landlord stamp duty, investment property stamp duty, rental property tax',
  openGraph: {
    title: 'Buy to Let Stamp Duty Calculator 2025 | BTL Calculator',
    description: 'Calculate stamp duty on buy-to-let investment properties including the 5% surcharge.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/buy-to-let',
  },
}

export default function BuyToLetPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Buy to Let <span className="text-amber-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Investment Property Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Standard</Link>
              <Link href="/buy-to-let" className="text-amber-400 font-medium">Buy to Let</Link>
              <Link href="/second-home" className="text-slate-300 hover:text-white transition-colors">Second Home</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Buy to Let Stamp Duty
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>stamp duty on buy-to-let properties</strong> including the 5% additional property surcharge. Our BTL stamp duty calculator shows you the total SDLT cost for your investment property.
          </p>
          <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-amber-400 font-semibold">+5% Surcharge</span>
            <span className="text-slate-400 ml-2">applies to all buy-to-let purchases</span>
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
            Buy to Let Stamp Duty Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">BTL Stamp Duty Rates</h3>
              <p className="text-sm text-slate-400 mb-4">Standard rates + 5% surcharge:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £125,000</span>
                  <span className="text-amber-400 font-medium">5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£125,001 - £250,000</span>
                  <span className="text-amber-400 font-medium">7%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £925,000</span>
                  <span className="text-amber-400 font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£925,001 - £1.5m</span>
                  <span className="text-amber-400 font-medium">15%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £1.5 million</span>
                  <span className="text-amber-400 font-medium">17%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Buy to Let Examples</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£200,000 BTL property</span>
                    <span className="text-amber-400 font-medium">£11,500</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £1,500 for main residence</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£300,000 BTL property</span>
                    <span className="text-amber-400 font-medium">£20,000</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £5,000 for main residence</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£500,000 BTL property</span>
                    <span className="text-amber-400 font-medium">£40,000</span>
                  </div>
                  <div className="text-xs text-slate-500">vs £15,000 for main residence</div>
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
            Buy to Let Stamp Duty FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How much stamp duty do I pay on a buy-to-let property?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Buy-to-let properties attract a 5% surcharge on top of standard stamp duty rates. This applies from the first pound, so even properties under £125,000 will pay 5% stamp duty. Use our buy-to-let stamp duty calculator above to see the exact amount for your investment.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Can I avoid the buy-to-let stamp duty surcharge?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The 5% surcharge applies to all buy-to-let purchases where you'll own more than one property. The only way to avoid it is if you're replacing your main residence (selling and buying) and won't own multiple properties. Some investors use company structures, but these have their own costs and considerations.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Is buy-to-let stamp duty tax deductible?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Stamp duty is not deductible as an ongoing expense against rental income. However, it's added to the purchase price when calculating Capital Gains Tax if you sell the property, reducing your taxable gain. Always consult a tax advisor for your specific situation.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Do I pay the surcharge on my first buy-to-let if I own my home?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes. If you already own a property (including your main residence), buying a buy-to-let means you'll own multiple properties, so the 5% surcharge applies. The surcharge only doesn't apply if the buy-to-let would be your only property.
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
            <Link href="/buy-to-let" className="text-amber-400">Buy to Let</Link>
            <Link href="/second-home" className="text-slate-400 hover:text-white">Second Home</Link>
            <Link href="/commercial" className="text-slate-400 hover:text-white">Commercial</Link>
          </div>
          <p className="text-xs text-slate-500">
            Buy to let stamp duty rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
              GOV.UK
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
