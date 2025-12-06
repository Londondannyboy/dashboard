import { Metadata } from 'next'
import { StampDutyCalculator } from '../components/StampDutyCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
  description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free stamp duty calculator for first-time buyers, additional properties & non-UK residents. Updated 2025 rates.',
  keywords: 'stamp duty calculator, SDLT calculator, UK stamp duty, stamp duty rates, first-time buyer stamp duty, property tax calculator',
  openGraph: {
    title: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
    description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free calculator with 2025 rates.',
    type: 'website',
    url: 'https://stampdutycalculator.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator UK 2025',
    description: 'Calculate your UK Stamp Duty instantly with our free stamp duty calculator.',
  },
  alternates: {
    canonical: 'https://stampdutycalculator.quest',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center" role="img" aria-label="Stamp Duty Calculator logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Stamp Duty <span className="text-indigo-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Property Tax Calculator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#rates" className="text-slate-300 hover:text-white transition-colors">Rates</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Stamp Duty Calculator
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>stamp duty calculator</strong> to calculate your Stamp Duty Land Tax (SDLT) for residential properties in England and Northern Ireland.
          </p>
          <p className="text-sm text-slate-500">
            Updated stamp duty rates for December 2025 including first-time buyer relief and surcharges.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <StampDutyCalculator />
      </section>

      {/* Info Section */}
      <section id="rates" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Stamp Duty Calculator Rates 2025
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Standard Rates Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Standard Stamp Duty Rates</h3>
              <p className="text-sm text-slate-400 mb-4">
                For buyers purchasing a single residential property who already own or have owned property before.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £125,000</span>
                  <span className="text-indigo-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£125,001 - £250,000</span>
                  <span className="text-indigo-400 font-medium">2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£250,001 - £925,000</span>
                  <span className="text-indigo-400 font-medium">5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£925,001 - £1.5m</span>
                  <span className="text-indigo-400 font-medium">10%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Over £1.5m</span>
                  <span className="text-indigo-400 font-medium">12%</span>
                </li>
              </ul>
            </div>

            {/* First-Time Buyer Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">First-Time Buyer Stamp Duty</h3>
              <p className="text-sm text-slate-400 mb-4">
                Special rates for those who have never owned a property. Only available for properties up to £500,000.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Up to £300,000</span>
                  <span className="text-emerald-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">£300,001 - £500,000</span>
                  <span className="text-emerald-400 font-medium">5%</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Note: If property exceeds £500,000, standard rates apply.
              </p>
            </div>

            {/* Surcharges Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stamp Duty Surcharges</h3>
              <p className="text-sm text-slate-400 mb-4">
                Extra charges that apply on top of standard rates in certain situations.
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Additional Property</span>
                    <span className="text-amber-400 font-medium">+5%</span>
                  </div>
                  <p className="text-xs text-slate-500">If you'll own more than one property after purchase</p>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 font-medium">Non-UK Resident</span>
                    <span className="text-red-400 font-medium">+2%</span>
                  </div>
                  <p className="text-xs text-slate-500">For buyers not resident in the UK</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Stamp Duty Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How does the stamp duty calculator work?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Our stamp duty calculator uses the official HMRC rates to calculate your Stamp Duty Land Tax (SDLT). Simply enter your property price, select your buyer type, and the stamp duty calculator instantly shows you the tax due. SDLT applies to property purchases in England and Northern Ireland. Scotland uses LBTT and Wales uses LTT.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                When do I need to pay stamp duty?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You must pay SDLT within 14 days of completing your property purchase. Your solicitor or conveyancer usually handles this as part of the transaction process.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I claim the additional property surcharge back?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, if you sell your previous main residence within 36 months of completing your new purchase, you can apply for a refund of the additional 5% surcharge. The refund must be claimed within 12 months of selling your old property or within 12 months of filing the SDLT return for the new property, whichever is later.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Am I eligible for first-time buyer relief?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You qualify for first-time buyer relief if you've never owned an interest in a residential property in the UK or abroad, and the property price is £500,000 or less. If buying with someone else, both buyers must be first-time buyers.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does this calculator cover Scotland and Wales?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No, this calculator is specifically for Stamp Duty Land Tax (SDLT) which applies to England and Northern Ireland. Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT), both with different rates and thresholds.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Stamp Duty Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK stamp duty calculator for residential property purchases. Calculate SDLT instantly with accurate 2025 rates.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Stamp Duty Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-indigo-400">Stamp Duty Calculator</a></li>
                <li><a href="#rates" className="hover:text-indigo-400">Stamp Duty Rates 2025</a></li>
                <li><a href="#faq" className="hover:text-indigo-400">Stamp Duty FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Guidance</h4>
              <p className="text-sm text-slate-400">
                Stamp duty rates updated December 2025. For official guidance, visit{' '}
                <a
                  href="https://www.gov.uk/stamp-duty-land-tax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  GOV.UK
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Stamp Duty Calculator UK - Free SDLT calculator for England and Northern Ireland property purchases
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
