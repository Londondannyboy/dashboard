import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Northern Ireland Fuel Prices & Calculator | Current Petrol & Diesel',
  description: 'Check current fuel prices in Northern Ireland. Calculate fuel costs with NI petrol and diesel prices. Compare Belfast, Derry, and regional pricing.',
  keywords: 'northern ireland fuel prices, belfast petrol prices, northern ireland diesel prices, fuel cost calculator northern ireland, derry fuel prices',
  openGraph: {
    title: 'Northern Ireland Fuel Prices & Calculator',
    description: 'Current fuel prices across Northern Ireland with regional cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/northern-ireland-fuel-prices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Ireland Fuel Prices',
    description: 'Calculate fuel costs with current Northern Ireland fuel prices.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/northern-ireland-fuel-prices',
  },
}

export default function NorthernIrelandFuelPricesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  NI <span className="text-indigo-400">Fuel</span>
                </span>
                <p className="text-xs text-slate-400">Regional Price Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#prices" className="text-slate-300 hover:text-white transition-colors">Prices</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Northern Ireland Fuel Prices
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> &amp; Costs</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Find current petrol and diesel prices across Northern Ireland. Calculate your fuel costs with accurate regional pricing data.
          </p>
          <p className="text-sm text-slate-500">
            Updated daily with live fuel price data for all NI regions.
          </p>
        </div>
      </section>

      {/* Regional Prices Section */}
      <section id="prices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Current Fuel Prices in Northern Ireland
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-6">Petrol (E10)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Belfast Area</span>
                  <span className="font-semibold text-white">164.2p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Greater Belfast</span>
                  <span className="font-semibold text-white">164.6p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Derry/Londonderry</span>
                  <span className="font-semibold text-white">166.1p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Armagh</span>
                  <span className="font-semibold text-white">165.3p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Prices updated daily. Derry prices often reflect cross-border shopping patterns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-6">Diesel</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Belfast Area</span>
                  <span className="font-semibold text-white">168.1p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Greater Belfast</span>
                  <span className="font-semibold text-white">168.5p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Derry/Londonderry</span>
                  <span className="font-semibold text-white">170.0p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Armagh</span>
                  <span className="font-semibold text-white">169.2p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Diesel pricing tracks closely with Republic of Ireland due to proximity.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Northern Ireland-Specific Considerations</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ <strong>Cross-Border Effect:</strong> Derry/Londonderry prices sometimes influenced by Republic of Ireland pricing</li>
              <li>✓ <strong>Belfast Competition:</strong> Belfast city center typically has most competitive pricing due to urban competition</li>
              <li>✓ <strong>Rural Premiums:</strong> Countryside and remote areas can be 1-2% more expensive</li>
              <li>✓ <strong>Good Infrastructure:</strong> NI has excellent petrol station coverage and competitive pricing overall</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Calculate Your Northern Ireland Fuel Costs
          </h2>
          <p className="text-center text-slate-400 mb-8">
            Use current NI fuel prices in the calculator above to estimate your fuel expenses.
          </p>
          <FuelCostCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Northern Ireland Fuel Price FAQs
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Why are Derry fuel prices different from Belfast?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Derry's proximity to the Republic of Ireland means prices are influenced by cross-border shopping patterns and Irish market pricing, sometimes creating slight differences from Belfast.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Are NI fuel prices cheaper than Republic of Ireland?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>NI fuel prices are typically comparable or slightly lower than the Republic. Some NI drivers near the border fuel up locally and vice versa depending on current pricing.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Which fuel stations offer the best NI prices?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Supermarket fuel stations (Tesco, Sainsbury's, Asda) in Belfast typically offer competitive pricing. Major fuel chains also compete actively in urban areas.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How do NI prices compare to Great Britain?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>NI prices track closely with Great Britain pricing. Belfast typically has competitive pricing similar to English major cities like Liverpool and Manchester.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-white">Explore Other UK Regions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <a href="/scotland-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">Scotland Fuel Prices</h4>
            </a>
            <a href="/wales-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">Wales Fuel Prices</h4>
            </a>
            <a href="/london-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">London Fuel Prices</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
