import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Scotland Fuel Prices & Fuel Cost Calculator | Current Price Check',
  description: 'Check current fuel prices across Scotland. Calculate fuel costs with Scottish petrol and diesel prices. Compare costs from Highlands to Central Belt.',
  keywords: 'scotland fuel prices, petrol prices scotland, diesel prices scotland, fuel cost calculator scotland, fuel prices highlands, fuel prices edinburgh',
  openGraph: {
    title: 'Scotland Fuel Prices & Calculator',
    description: 'Current fuel prices across Scotland with regional cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/scotland-fuel-prices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scotland Fuel Prices',
    description: 'Calculate fuel costs with current Scottish fuel prices.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/scotland-fuel-prices',
  },
}

export default function ScotlandFuelPricesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Scotland <span className="text-purple-400">Fuel</span>
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
            Scotland Fuel Prices
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> & Costs</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Find current petrol and diesel prices across Scotland. Calculate your fuel costs with accurate regional pricing data.
          </p>
          <p className="text-sm text-slate-500">
            Updated daily with live fuel price data for all Scottish regions.
          </p>
        </div>
      </section>

      {/* Regional Prices Section */}
      <section id="prices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Current Fuel Prices in Scotland
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-6">Petrol (E10)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Central Belt Average</span>
                  <span className="font-semibold text-white">165.9p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Highlands &amp; Islands</span>
                  <span className="font-semibold text-white">171.2p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Scotland</span>
                  <span className="font-semibold text-white">164.1p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">East Coast</span>
                  <span className="font-semibold text-white">165.3p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Prices updated daily. Regional variations are typical due to location, supply costs, and local competition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-6">Diesel</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Central Belt Average</span>
                  <span className="font-semibold text-white">169.8p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Highlands &amp; Islands</span>
                  <span className="font-semibold text-white">176.5p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">South Scotland</span>
                  <span className="font-semibold text-white">168.2p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">East Coast</span>
                  <span className="font-semibold text-white">169.1p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Diesel is often better value for high-mileage Scottish drivers, especially in rural areas.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Scotland-Specific Considerations</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ <strong>Island Fuel Surcharge:</strong> Shetland and Orkney fuel prices can be 10-15% higher due to transport costs</li>
              <li>✓ <strong>Distance Factor:</strong> Highland and rural drivers face higher costs due to longer distances between fuel stations</li>
              <li>✓ <strong>Diesel Advantage:</strong> For rural and high-mileage Scottish drivers, diesel savings can be substantial</li>
              <li>✓ <strong>Winter Impact:</strong> Scottish winters increase fuel consumption; monitor costs during cold months</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Calculate Your Scottish Fuel Costs
          </h2>
          <p className="text-center text-slate-400 mb-8">
            Use current Scotland fuel prices in the calculator above to estimate your fuel expenses.
          </p>
          <FuelCostCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Scotland Fuel Price FAQs
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Why are fuel prices higher in the Highlands?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Higher Highland prices reflect increased transport and distribution costs. Fuel must travel further to reach remote areas, and smaller fuel stations have higher operating costs per litre sold.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is there fuel duty relief for Scottish drivers?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>No universal fuel duty relief, but the UK government caps fuel duty increases. Check for business fuel schemes if you use fuel for commercial purposes.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How do Scottish fuel prices compare to UK average?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Central Belt prices are close to UK average (often slightly lower in competitive urban areas), but Highlands can be 8-12% higher due to remote location premium.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Best places to fill up in Scotland?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>In Central Belt cities (Edinburgh, Glasgow), supermarket fuel stations (Tesco, Asda, Sainsbury's) typically offer competitive prices. Plan routes to fill up in larger towns rather than rural areas.</p>
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
            <a href="/wales-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">Wales Fuel Prices</h4>
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
