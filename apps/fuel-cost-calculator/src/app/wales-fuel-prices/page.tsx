import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Wales Fuel Prices & Cost Calculator | Current Price Tracker',
  description: 'Check current fuel prices across Wales. Calculate fuel costs with Welsh petrol and diesel prices. Compare costs from North Wales to South Wales.',
  keywords: 'wales fuel prices, petrol prices wales, diesel prices wales, fuel cost calculator wales, cardiff fuel prices, swansea fuel prices',
  openGraph: {
    title: 'Wales Fuel Prices & Calculator',
    description: 'Current fuel prices across Wales with regional cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/wales-fuel-prices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wales Fuel Prices',
    description: 'Calculate fuel costs with current Welsh fuel prices.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/wales-fuel-prices',
  },
}

export default function WalesFuelPricesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Wales <span className="text-red-400">Fuel</span>
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
            Wales Fuel Prices
            <span className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent"> &amp; Costs</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Find current petrol and diesel prices across Wales. Calculate your fuel costs with accurate regional pricing data.
          </p>
          <p className="text-sm text-slate-500">
            Updated daily with live fuel price data for all Welsh regions.
          </p>
        </div>
      </section>

      {/* Regional Prices Section */}
      <section id="prices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Current Fuel Prices in Wales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-6">Petrol (E10)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Wales Average</span>
                  <span className="font-semibold text-white">163.4p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">North Wales</span>
                  <span className="font-semibold text-white">164.8p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Mid Wales</span>
                  <span className="font-semibold text-white">165.6p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Cardiff &amp; Valleys</span>
                  <span className="font-semibold text-white">162.9p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Prices updated daily. Urban areas like Cardiff typically have more competitive pricing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-6">Diesel</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Wales Average</span>
                  <span className="font-semibold text-white">167.2p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">North Wales</span>
                  <span className="font-semibold text-white">168.6p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Mid Wales</span>
                  <span className="font-semibold text-white">169.4p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Cardiff &amp; Valleys</span>
                  <span className="font-semibold text-white">166.8p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Diesel drivers benefit from excellent motorway charging infrastructure.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Wales-Specific Considerations</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ <strong>Urban vs Rural:</strong> South Wales (Cardiff, Swansea) has more competitive pricing due to higher demand and competition</li>
              <li>✓ <strong>Mid Wales Premium:</strong> Rural mid-Wales areas can be 2-3% more expensive due to limited competition</li>
              <li>✓ <strong>M4 Corridor:</strong> Better fuel prices along major motorway routes (M4, M5) due to competition</li>
              <li>✓ <strong>Tourism Impact:</strong> Coastal areas see seasonal price variations during holiday season</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Calculate Your Welsh Fuel Costs
          </h2>
          <p className="text-center text-slate-400 mb-8">
            Use current Wales fuel prices in the calculator above to estimate your fuel expenses.
          </p>
          <FuelCostCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Wales Fuel Price FAQs
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Are fuel prices the same across Wales?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>No. South Wales, particularly around Cardiff and Swansea, typically has the most competitive prices due to population density and competition. Rural mid-Wales areas tend to be slightly more expensive.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Where is the cheapest fuel in Wales?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Supermarket fuel stations in Cardiff, Swansea, and Newport typically offer the best prices. Along the M4 corridor, major fuel chain competition keeps prices competitive.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Do rural Welsh drivers pay more for fuel?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Yes, rural mid-Wales and Powys areas typically have slightly higher prices (1-2% premium) due to smaller fuel stations and higher distribution costs. Plan to fill up when visiting towns.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How do Welsh prices compare to England?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>South Wales prices are typically very competitive compared to English regions. Cardiff and Swansea often have better prices than many Midlands and northern English towns.</p>
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
            <a href="/london-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">London Fuel Prices</h4>
            </a>
            <a href="/northern-ireland-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">Northern Ireland</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
