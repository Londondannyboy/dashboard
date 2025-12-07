import { Metadata } from 'next'
import Link from 'next/link'
import { JerseyCalculator } from '../../components/JerseyCalculator'

export const metadata: Metadata = {
  title: 'Jersey Stamp Duty Calculator 2025 | Land Transaction Tax',
  description: 'Jersey Stamp Duty Calculator - Calculate Land Transaction Tax (LTT) for property purchases in Jersey. Free calculator with 2025 rates including first-time buyer relief.',
  keywords: 'jersey stamp duty calculator, jersey land transaction tax, jersey LTT, jersey property tax, stamp duty jersey, jersey first time buyer',
  openGraph: {
    title: 'Jersey Stamp Duty Calculator 2025',
    description: 'Calculate Land Transaction Tax for property purchases in Jersey.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest/jersey',
  },
}

export default function JerseyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Jersey <span className="text-yellow-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Land Transaction Tax</p>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">England</Link>
              <Link href="/scotland" className="text-slate-300 hover:text-white transition-colors">Scotland</Link>
              <Link href="/wales" className="text-slate-300 hover:text-white transition-colors">Wales</Link>
              <Link href="/jersey" className="text-yellow-400 font-medium">Jersey</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Jersey Stamp Duty
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate <strong>Land Transaction Tax (LTT)</strong> for property purchases in Jersey. Our Jersey stamp duty calculator uses the current rates for this Crown Dependency.
          </p>
          <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-4 py-2 mt-4">
            <span className="text-yellow-400 font-semibold">Crown Dependency</span>
            <span className="text-slate-400 ml-2">with its own tax system</span>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <JerseyCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Jersey Land Transaction Tax Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Standard LTT Rates</h3>
              <p className="text-sm text-slate-400 mb-4">For all property purchases in Jersey:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £50,000</span>
                  <span className="text-yellow-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£50,001 - £150,000</span>
                  <span className="text-yellow-400 font-medium">2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£150,001 - £250,000</span>
                  <span className="text-yellow-400 font-medium">3%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £400,000</span>
                  <span className="text-yellow-400 font-medium">4%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£400,001 - £500,000</span>
                  <span className="text-yellow-400 font-medium">5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£500,001 - £700,000</span>
                  <span className="text-yellow-400 font-medium">6%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£700,001 - £1m</span>
                  <span className="text-yellow-400 font-medium">7%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£1m - £1.5m</span>
                  <span className="text-yellow-400 font-medium">8%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£1.5m - £2m</span>
                  <span className="text-yellow-400 font-medium">9%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £2 million</span>
                  <span className="text-yellow-400 font-medium">10%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-yellow-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">First-Time Buyer Relief</h3>
              <p className="text-sm text-slate-400 mb-4">Generous relief for first-time buyers in Jersey:</p>
              <div className="bg-yellow-500/10 rounded-xl p-4 mb-4">
                <div className="text-2xl font-bold text-yellow-400 mb-1">£0</div>
                <div className="text-sm text-slate-300">Tax on properties up to £500,000</div>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Jersey offers excellent first-time buyer relief, with no LTT payable on properties up to £500,000 - significantly higher than England's £300,000 threshold.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £500,000</span>
                  <span className="text-yellow-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Above £500,000</span>
                  <span className="text-slate-400 font-medium">Standard rates apply</span>
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
            Jersey Stamp Duty FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                What is Land Transaction Tax in Jersey?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Land Transaction Tax (LTT) is Jersey's equivalent of stamp duty. As a Crown Dependency, Jersey has its own tax system separate from the UK. LTT is paid when you purchase property in Jersey and is calculated on a banded system similar to UK stamp duty.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Is Jersey stamp duty cheaper than England?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                It depends on the property price. Jersey has a lower nil-rate threshold (£50,000 vs £125,000) but also more bands with gradual increases. For first-time buyers, Jersey is much more generous with £0 tax up to £500,000 compared to England's £300,000. Jersey's maximum rate is 10% vs England's 12%.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Who qualifies as a first-time buyer in Jersey?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To qualify for first-time buyer relief in Jersey, you must never have owned an interest in a residential property anywhere in the world. If buying with a partner, both buyers must be first-time buyers. The relief applies to properties up to £500,000.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                Is there an additional property surcharge in Jersey?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Unlike England, Jersey does not currently have an additional property surcharge for second homes or buy-to-let properties. The same LTT rates apply regardless of how many properties you own.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium">
                When do I pay Land Transaction Tax in Jersey?
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                LTT is typically paid on completion of the property purchase through your conveyancer or advocate. The tax must be paid before the property can be registered in your name. Your legal representative will handle the payment process.
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
            <Link href="/scotland" className="text-slate-400 hover:text-white">Scotland Calculator</Link>
            <Link href="/wales" className="text-slate-400 hover:text-white">Wales Calculator</Link>
            <Link href="/jersey" className="text-yellow-400">Jersey Calculator</Link>
          </div>
          <p className="text-xs text-slate-500">
            Jersey LTT rates updated 2025. For official guidance, visit{' '}
            <a href="https://www.gov.je/TaxesMoney/LandTransactionTax/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
              Government of Jersey
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
