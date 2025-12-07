import { Metadata } from 'next'
import Link from 'next/link'
import { CommercialCalculator } from '../../components/CommercialCalculator'

export const metadata: Metadata = {
  title: 'Commercial Stamp Duty Calculator 2025 | Business Property SDLT',
  description: 'Commercial Stamp Duty Calculator - Calculate SDLT on commercial and business properties. Lower rates than residential with no additional surcharges. Free calculator with 2025 rates.',
  keywords: 'commercial stamp duty calculator, commercial property stamp duty, business property SDLT, non-residential stamp duty, commercial SDLT rates, industrial property tax',
  openGraph: {
    title: 'Commercial Stamp Duty Calculator 2025',
    description: 'Calculate stamp duty on commercial properties, offices, shops, and industrial units.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/commercial',
  },
}

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Commercial <span className="text-emerald-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Business Property Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Residential</Link>
              <Link href="/buy-to-let" className="text-slate-300 hover:text-white transition-colors">Buy to Let</Link>
              <Link href="/commercial" className="text-emerald-400 font-medium">Commercial</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Commercial Stamp Duty
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>stamp duty on commercial properties</strong> including offices, shops, warehouses, and industrial units. Our commercial stamp duty calculator uses the lower non-residential SDLT rates.
          </p>
          <div className="inline-block bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-emerald-400 font-semibold">Lower rates</span>
            <span className="text-slate-400 ml-2">than residential property - max 5%</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <CommercialCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Commercial Stamp Duty Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Commercial SDLT Rates</h3>
              <p className="text-sm text-slate-400 mb-4">For non-residential and mixed-use properties:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £150,000</span>
                  <span className="text-emerald-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£150,001 - £250,000</span>
                  <span className="text-emerald-400 font-medium">2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £250,000</span>
                  <span className="text-emerald-400 font-medium">5%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Commercial Examples</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£200,000 retail unit</span>
                    <span className="text-emerald-400 font-medium">£1,000</span>
                  </div>
                  <div className="text-xs text-slate-500">Just 0.5% effective rate</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£500,000 office space</span>
                    <span className="text-emerald-400 font-medium">£14,500</span>
                  </div>
                  <div className="text-xs text-slate-500">2.9% effective rate</div>
                </li>
                <li>
                  <div className="flex justify-between text-slate-300">
                    <span>£1,000,000 warehouse</span>
                    <span className="text-emerald-400 font-medium">£39,500</span>
                  </div>
                  <div className="text-xs text-slate-500">3.95% effective rate</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Property Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-white font-medium">Offices</div>
              <div className="text-xs text-slate-400">Commercial rates apply</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🏪</div>
              <div className="text-white font-medium">Retail</div>
              <div className="text-xs text-slate-400">Shops & restaurants</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <div className="text-white font-medium">Industrial</div>
              <div className="text-xs text-slate-400">Warehouses & factories</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🌾</div>
              <div className="text-white font-medium">Agricultural</div>
              <div className="text-xs text-slate-400">Land & farm buildings</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Commercial Stamp Duty FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What is commercial stamp duty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Commercial stamp duty (SDLT) applies to non-residential property purchases in England. This includes offices, shops, warehouses, factories, and agricultural land. The rates are lower than residential property, with a maximum rate of 5% compared to 12% for residential.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Do I pay the additional property surcharge on commercial?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No. The 5% additional property surcharge only applies to residential property. Commercial properties use the lower non-residential rates regardless of how many properties you already own. This makes commercial property tax-efficient for investors.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What about mixed-use properties?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Mixed-use properties (part residential, part commercial) use the commercial SDLT rates, not residential rates. This can result in significant savings. For example, a shop with a flat above would pay commercial rates on the entire purchase.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Do 6+ unit purchases qualify as commercial?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes. If you purchase 6 or more residential properties in a single transaction, the entire purchase qualifies for commercial SDLT rates. This is known as Multiple Dwellings Relief and can significantly reduce the tax on bulk purchases.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Is commercial stamp duty different in Scotland and Wales?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes. Scotland uses Land and Buildings Transaction Tax (LBTT) with different commercial rates, and Wales uses Land Transaction Tax (LTT). Both have their own rate structures for non-residential properties. This calculator shows England rates only.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">Residential Calculator</Link>
            <Link href="/buy-to-let" className="text-slate-400 hover:text-white">Buy to Let</Link>
            <Link href="/second-home" className="text-slate-400 hover:text-white">Second Home</Link>
            <Link href="/commercial" className="text-emerald-400">Commercial</Link>
          </div>
          <p className="text-xs text-slate-500">
            Commercial stamp duty rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.uk/stamp-duty-land-tax/nonresidential-and-mixed-use-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
              GOV.UK
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
