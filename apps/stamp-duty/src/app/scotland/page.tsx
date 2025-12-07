import { Metadata } from 'next'
import Link from 'next/link'
import { ScotlandCalculator } from '../../components/ScotlandCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator Scotland 2025 | LBTT Calculator',
  description: 'Scotland Stamp Duty Calculator - Calculate Land and Buildings Transaction Tax (LBTT) for Scottish property purchases. Free LBTT calculator with 2025 rates, first-time buyer relief, and ADS.',
  keywords: 'stamp duty calculator scotland, LBTT calculator, scotland stamp duty, land and buildings transaction tax, scottish property tax, ADS calculator',
  openGraph: {
    title: 'Stamp Duty Calculator Scotland 2025 | LBTT Calculator',
    description: 'Calculate Land and Buildings Transaction Tax (LBTT) for Scottish property purchases with our free calculator.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/scotland',
  },
}

export default function ScotlandPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  LBTT <span className="text-blue-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Scotland Property Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">England</Link>
              <Link href="/wales" className="text-slate-300 hover:text-white transition-colors">Wales</Link>
              <Link href="/scotland" className="text-blue-400 font-medium">Scotland</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Stamp Duty Calculator
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Scotland</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>Land and Buildings Transaction Tax (LBTT)</strong> for property purchases in Scotland. Our Scotland stamp duty calculator uses the latest 2025 rates.
          </p>
          <p className="text-sm text-slate-500">
            Includes first-time buyer relief and Additional Dwelling Supplement (ADS) for second homes.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <ScotlandCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Scotland LBTT Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Standard LBTT Rates</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £145,000</span>
                  <span className="text-blue-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£145,001 - £250,000</span>
                  <span className="text-blue-400 font-medium">2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £325,000</span>
                  <span className="text-blue-400 font-medium">5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£325,001 - £750,000</span>
                  <span className="text-blue-400 font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £750,000</span>
                  <span className="text-blue-400 font-medium">12%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">First-Time Buyer Relief</h3>
              <p className="text-sm text-slate-400 mb-4">
                First-time buyers in Scotland get an increased nil-rate threshold of £175,000, saving up to £600.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £175,000</span>
                  <span className="text-emerald-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Above £175,000</span>
                  <span className="text-emerald-400 font-medium">Standard rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Dwelling Supplement</h3>
              <p className="text-sm text-slate-400 mb-4">
                If you're buying an additional property in Scotland (second home, buy-to-let), you pay an extra 6% ADS on the total price.
              </p>
              <div className="bg-amber-500/10 rounded-lg p-3">
                <div className="text-amber-400 font-semibold">+6% ADS</div>
                <div className="text-xs text-slate-400">On entire purchase price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Scotland Stamp Duty Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What is LBTT in Scotland?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                LBTT (Land and Buildings Transaction Tax) is Scotland's version of stamp duty. It replaced UK Stamp Duty Land Tax in Scotland from April 2015. Like SDLT, LBTT is calculated on the portion of property value within each band, not the whole amount.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What is the Additional Dwelling Supplement (ADS)?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The ADS is a 6% surcharge on the total purchase price when buying an additional residential property in Scotland (like a second home or buy-to-let). It applies to the whole price, not just amounts above a threshold. You may be able to reclaim it if you sell your previous main home within 18 months.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How is Scottish stamp duty different from English stamp duty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Scotland uses LBTT with different thresholds and rates compared to England's SDLT. The nil-rate threshold is £145,000 (vs £125,000 in England), and Scotland has a 6% ADS (vs 5% in England). First-time buyers get relief up to £175,000 in Scotland.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-4 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white">England Calculator</Link>
            <Link href="/wales" className="text-slate-400 hover:text-white">Wales Calculator</Link>
            <Link href="/scotland" className="text-blue-400">Scotland Calculator</Link>
          </div>
          <p className="text-xs text-slate-500">
            LBTT rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.revenue.scot/land-buildings-transaction-tax" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              Revenue Scotland
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
