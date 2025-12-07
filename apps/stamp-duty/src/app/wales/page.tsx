import { Metadata } from 'next'
import Link from 'next/link'
import { WalesCalculator } from '../../components/WalesCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator Wales 2025 | LTT Calculator',
  description: 'Wales Stamp Duty Calculator - Calculate Land Transaction Tax (LTT) for Welsh property purchases. Free LTT calculator with 2025 rates and higher rates for additional properties.',
  keywords: 'stamp duty calculator wales, LTT calculator, wales stamp duty, land transaction tax, welsh property tax, wales property tax calculator',
  openGraph: {
    title: 'Stamp Duty Calculator Wales 2025 | LTT Calculator',
    description: 'Calculate Land Transaction Tax (LTT) for Welsh property purchases with our free calculator.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/wales',
  },
}

export default function WalesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  LTT <span className="text-red-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Wales Property Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">England</Link>
              <Link href="/wales" className="text-red-400 font-medium">Wales</Link>
              <Link href="/scotland" className="text-slate-300 hover:text-white transition-colors">Scotland</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Stamp Duty Calculator
            <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent"> Wales</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>Land Transaction Tax (LTT)</strong> for property purchases in Wales. Our Wales stamp duty calculator uses the latest 2025 rates.
          </p>
          <p className="text-sm text-slate-500">
            Wales has different rates to England - including a £225,000 nil-rate threshold for main residences.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <WalesCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Wales LTT Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Standard LTT Rates</h3>
              <p className="text-sm text-slate-400 mb-4">For main residence purchases in Wales:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £225,000</span>
                  <span className="text-red-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£225,001 - £400,000</span>
                  <span className="text-red-400 font-medium">6%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£400,001 - £750,000</span>
                  <span className="text-red-400 font-medium">7.5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£750,001 - £1.5m</span>
                  <span className="text-red-400 font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £1.5 million</span>
                  <span className="text-red-400 font-medium">12%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Higher Rates (Additional Properties)</h3>
              <p className="text-sm text-slate-400 mb-4">For second homes and buy-to-let properties:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £180,000</span>
                  <span className="text-amber-400 font-medium">4%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£180,001 - £250,000</span>
                  <span className="text-amber-400 font-medium">7.5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £400,000</span>
                  <span className="text-amber-400 font-medium">9%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£400,001 - £750,000</span>
                  <span className="text-amber-400 font-medium">11.5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£750,001 - £1.5m</span>
                  <span className="text-amber-400 font-medium">14%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £1.5 million</span>
                  <span className="text-amber-400 font-medium">16%</span>
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
            Wales Stamp Duty Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What is LTT in Wales?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                LTT (Land Transaction Tax) is Wales's version of stamp duty. It replaced UK Stamp Duty Land Tax in Wales from April 2018. LTT is managed by the Welsh Revenue Authority and has different rates and thresholds compared to England.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Is there first-time buyer relief in Wales?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Unlike England, Wales does not have specific first-time buyer relief for LTT. However, the higher nil-rate threshold of £225,000 (compared to England's £125,000) means first-time buyers often pay less anyway on average-priced properties.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                How is Welsh stamp duty different from English stamp duty?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Wales uses LTT with different bands. The nil-rate threshold is £225,000 (vs £125,000 in England), but rates above that are generally higher. Wales also has different higher rates for additional properties, starting at 4% on the first £180,000 (England's surcharge is applied on top of standard rates).
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
            <Link href="/wales" className="text-red-400">Wales Calculator</Link>
            <Link href="/scotland" className="text-slate-400 hover:text-white">Scotland Calculator</Link>
          </div>
          <p className="text-xs text-slate-500">
            LTT rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.wales/land-transaction-tax-rates" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
              Welsh Government
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
