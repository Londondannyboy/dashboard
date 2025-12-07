import { Metadata } from 'next'
import Link from 'next/link'
import { StampDutyCalculator } from '../components/StampDutyCalculator'

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator UK 2025 | Free SDLT Calculator',
  description: 'Stamp Duty Calculator - Calculate your UK Stamp Duty Land Tax instantly. Free stamp duty calculator for first-time buyers, additional properties & non-UK residents. Updated 2025 rates.',
  keywords: 'stamp duty calculator, calculate stamp duty, stamp duty estimator, stamp duty checker, property stamp duty calculator, house stamp duty calculator, land stamp duty calculator, stamp duty charges, stamp duty costs, how much stamp duty, SDLT calculator, stamp duty tax calculator, online stamp duty calculator',
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
              <Link href="/scotland" className="text-slate-300 hover:text-white transition-colors">Scotland</Link>
              <Link href="/wales" className="text-slate-300 hover:text-white transition-colors">Wales</Link>
              <Link href="/buy-to-let" className="text-slate-300 hover:text-white transition-colors">Buy to Let</Link>
              <Link href="/commercial" className="text-slate-300 hover:text-white transition-colors">Commercial</Link>
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
            Use our free online <strong>stamp duty calculator</strong> to calculate stamp duty on your property purchase. Our stamp duty estimator shows you exactly how much stamp duty you'll pay.
          </p>
          <p className="text-sm text-slate-500">
            Instantly work out stamp duty charges for houses, flats and land in England and Northern Ireland. Updated December 2025 rates.
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
                Our stamp duty calculator uses the official HMRC rates to calculate your Stamp Duty Land Tax (SDLT). Simply enter your property price, select your buyer type, and the stamp duty calculator instantly shows you the tax due. This online stamp duty calculator works as a stamp duty checker and stamp duty estimator to give you accurate results.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How to calculate stamp duty on a property?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate stamp duty, enter your property price into our calculator above. Stamp duty is calculated in bands - you pay 0% on the first £125,000, then 2% on £125,001-£250,000, 5% on £250,001-£925,000, 10% on £925,001-£1.5m, and 12% above £1.5m. Our property stamp duty calculator does this calculation for you instantly.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much stamp duty will I pay?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                How much stamp duty you pay depends on the property price and your buyer type. For example, on a £350,000 property, a standard buyer pays £7,500, while a first-time buyer pays just £2,500. Use our stamp duty calculator above to see exactly how much stamp duty you'll pay on your specific property.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How to work out stamp duty costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To work out stamp duty costs, you need to apply the SDLT rates to each band of your property price. Our stamp duty cost calculator does this automatically. For a quick stamp duty calculation, enter your house price above and select whether you're a first-time buyer, standard buyer, or buying an additional property.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is estimated stamp duty?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Estimated stamp duty is the approximate amount of Stamp Duty Land Tax you'll need to pay when buying a property. Our stamp duty estimator gives you an accurate estimate based on current 2025 HMRC rates. The estimated stamp duty helps you budget for your property purchase alongside other costs like solicitor fees and surveys.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is stamp duty normally?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Stamp duty normally ranges from 0% to 12% depending on the property price. For an average UK house price of around £290,000, a standard buyer would pay approximately £4,000 in stamp duty, while a first-time buyer would pay £0 (as first-time buyers pay no stamp duty up to £300,000). Stamp duty charges increase significantly for properties over £925,000.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What are stamp duty charges for additional properties?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Stamp duty charges for additional properties include a 5% surcharge on top of standard rates. This means if you're buying a second home or buy-to-let property, you'll pay stamp duty starting at 5% from £0 (not £125,000). On a £300,000 property, additional property stamp duty would be £17,500 compared to £5,000 for a standard purchase.
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
                You must pay stamp duty within 14 days of completing your property purchase. Your solicitor or conveyancer usually handles the stamp duty payment and SDLT return as part of the transaction process. Late payment can result in penalties and interest charges.
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
                You qualify for first-time buyer relief if you've never owned an interest in a residential property in the UK or abroad, and the property price is £500,000 or less. If buying with someone else, both buyers must be first-time buyers to use the first-time buyer stamp duty rates.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does this stamp duty calculator cover Scotland and Wales?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! We have dedicated calculators for all UK nations. This page covers England and Northern Ireland (SDLT). For Scotland, use our <a href="/scotland" className="text-blue-400 hover:text-blue-300">Scotland LBTT Calculator</a> which uses Land and Buildings Transaction Tax rates. For Wales, use our <a href="/wales" className="text-red-400 hover:text-red-300">Wales LTT Calculator</a> which uses Land Transaction Tax rates. Each has different thresholds and rates.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is there stamp duty on land purchases?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, stamp duty applies to land purchases as well as houses. Our land stamp duty calculator uses the same residential rates if you're buying land for a home. For non-residential or mixed-use land, different rates apply. Use our calculator to estimate land stamp duty for residential purchases.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Calculate Stamp Duty for Any Property Type
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our stamp duty calculator works for all residential property types in England and Northern Ireland
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">House Stamp Duty Calculator</h3>
              <p className="text-sm text-slate-400">
                Calculate stamp duty on houses - detached, semi-detached, terraced. Enter your house price above to see how much stamp duty you'll pay.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Property Stamp Duty Calculator</h3>
              <p className="text-sm text-slate-400">
                Our property stamp duty calculator covers all residential properties. Check stamp duty costs on flats, apartments, and maisonettes.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Land Stamp Duty Calculator</h3>
              <p className="text-sm text-slate-400">
                Buying land? Our land stamp duty calculator helps estimate SDLT on residential land purchases for building your home.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Stamp Duty Tax Calculator</h3>
              <p className="text-sm text-slate-400">
                Get an accurate stamp duty tax calculation. Our SDLT calculator uses official 2025 tax rates from HMRC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Use Our Online Stamp Duty Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-indigo-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Enter Property Price</h3>
              <p className="text-sm text-slate-400">
                Type your property price or use the quick presets. The stamp duty calculation updates instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Select Buyer Type</h3>
              <p className="text-sm text-slate-400">
                Choose first-time buyer, standard, additional property, or non-UK resident to calculate stamp duty accurately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">View Stamp Duty Cost</h3>
              <p className="text-sm text-slate-400">
                See your stamp duty charges breakdown, effective rate, and compare costs across buyer types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UK Regions Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Stamp Duty Calculator by Region
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Scotland and Wales have their own property tax systems with different rates and thresholds
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-indigo-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                Current
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">England & N. Ireland</h3>
              <p className="text-sm text-slate-400 mb-4">
                Stamp Duty Land Tax (SDLT) with £125,000 nil-rate threshold.
              </p>
              <a href="#calculator" className="text-indigo-400 text-sm font-medium hover:text-indigo-300">
                Use calculator above →
              </a>
            </div>

            <Link href="/scotland" className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-colors block">
              <h3 className="text-lg font-semibold text-white mb-2">Stamp Duty Calculator Scotland</h3>
              <p className="text-sm text-slate-400 mb-4">
                Land and Buildings Transaction Tax (LBTT) with £145,000 nil-rate threshold and 6% ADS for additional properties.
              </p>
              <span className="text-blue-400 text-sm font-medium">
                Calculate LBTT →
              </span>
            </Link>

            <Link href="/wales" className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30 hover:border-red-500/50 transition-colors block">
              <h3 className="text-lg font-semibold text-white mb-2">Stamp Duty Calculator Wales</h3>
              <p className="text-sm text-slate-400 mb-4">
                Land Transaction Tax (LTT) with £225,000 nil-rate threshold - the highest in the UK.
              </p>
              <span className="text-red-400 text-sm font-medium">
                Calculate LTT →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialist Calculators Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Specialist Stamp Duty Calculators
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Different property types and buyer situations have their own stamp duty rules
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/buy-to-let" className="bg-slate-800/50 rounded-xl p-5 border border-amber-500/30 hover:border-amber-500/50 transition-colors block">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Buy to Let Calculator</h3>
              <p className="text-sm text-slate-400 mb-2">
                Calculate stamp duty on rental investment properties including the 5% surcharge.
              </p>
              <span className="text-amber-400 text-sm font-medium">Calculate BTL →</span>
            </Link>

            <Link href="/second-home" className="bg-slate-800/50 rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/50 transition-colors block">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Second Home Calculator</h3>
              <p className="text-sm text-slate-400 mb-2">
                Work out stamp duty on holiday homes and second properties with the 5% surcharge.
              </p>
              <span className="text-purple-400 text-sm font-medium">Calculate Second Home →</span>
            </Link>

            <Link href="/commercial" className="bg-slate-800/50 rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors block">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Commercial Calculator</h3>
              <p className="text-sm text-slate-400 mb-2">
                Lower rates for offices, shops, warehouses and mixed-use properties. Max 5%.
              </p>
              <span className="text-emerald-400 text-sm font-medium">Calculate Commercial →</span>
            </Link>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">First-Time Buyer</h3>
              <p className="text-sm text-slate-400 mb-2">
                Pay no stamp duty up to £300,000. Use the main calculator and select "First-Time Buyer".
              </p>
              <a href="#calculator" className="text-indigo-400 text-sm font-medium">Use main calculator →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Stamp Duty Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK stamp duty calculator for residential property purchases. Calculate SDLT instantly with accurate 2025 rates.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">By Region</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-indigo-400">England Calculator</a></li>
                <li><Link href="/scotland" className="hover:text-blue-400">Scotland LBTT Calculator</Link></li>
                <li><Link href="/wales" className="hover:text-red-400">Wales LTT Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">By Property Type</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/buy-to-let" className="hover:text-amber-400">Buy to Let Calculator</Link></li>
                <li><Link href="/second-home" className="hover:text-purple-400">Second Home Calculator</Link></li>
                <li><Link href="/commercial" className="hover:text-emerald-400">Commercial Calculator</Link></li>
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
              Stamp Duty Calculator UK - Free SDLT, LBTT and LTT calculators for property purchases across the UK
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
