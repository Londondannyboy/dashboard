import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'London Fuel Prices & Cost Calculator | Current Petrol &amp; Diesel',
  description: 'Check current fuel prices across London. Calculate fuel costs with London petrol and diesel prices. Compare prices from Central London to Greater London areas.',
  keywords: 'london fuel prices, london petrol prices, london diesel prices, fuel cost calculator london, central london fuel, greater london prices',
  openGraph: {
    title: 'London Fuel Prices &amp; Calculator',
    description: 'Current fuel prices across London with city cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/london-fuel-prices',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London Fuel Prices',
    description: 'Calculate fuel costs with current London fuel prices.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/london-fuel-prices',
  },
}

export default function LondonFuelPricesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-red-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  London <span className="text-yellow-400">Fuel</span>
                </span>
                <p className="text-xs text-slate-400">City Price Tracker</p>
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
            London Fuel Prices
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"> &amp; Costs</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Find current petrol and diesel prices across London. Calculate your fuel costs with accurate city-wide pricing data.
          </p>
          <p className="text-sm text-slate-500">
            Updated daily with live fuel price data from across London and Greater London.
          </p>
        </div>
      </section>

      {/* Regional Prices Section */}
      <section id="prices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Current Fuel Prices in London
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-6">Petrol (E10)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Central London Average</span>
                  <span className="font-semibold text-white">168.3p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">West London</span>
                  <span className="font-semibold text-white">166.9p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">East London</span>
                  <span className="font-semibold text-white">165.4p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Greater London (M25)</span>
                  <span className="font-semibold text-white">164.1p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Prices updated daily. Greater London ring roads typically have cheaper prices than central areas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-6">Diesel</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Central London Average</span>
                  <span className="font-semibold text-white">171.8p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">West London</span>
                  <span className="font-semibold text-white">170.2p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">East London</span>
                  <span className="font-semibold text-white">168.9p/L</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded">
                  <span className="text-slate-300">Greater London (M25)</span>
                  <span className="font-semibold text-white">167.6p/L</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                * Central London diesel prices reflect higher demand and congestion charging.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">London-Specific Considerations</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ <strong>Central Premium:</strong> Central London fuel prices are typically 2-4% higher than Greater London due to limited competition and location</li>
              <li>✓ <strong>Congestion Charging:</strong> If driving into central London, factor in daily congestion charge (currently GBP 11.50)</li>
              <li>✓ <strong>Ring Road Savings:</strong> M25 and Greater London areas offer better fuel prices; consider filling up here</li>
              <li>✓ <strong>ULEZ Impact:</strong> Ultra Low Emission Zone adds daily charges (GBP 12.50 currently) for non-compliant vehicles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Calculate Your London Fuel Costs
          </h2>
          <p className="text-center text-slate-400 mb-8">
            Use current London fuel prices in the calculator above to estimate your fuel expenses.
          </p>
          <FuelCostCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            London Fuel Price FAQs
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Why are central London fuel prices so much higher?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Central London premium reflects higher land costs, limited petrol station availability, and lower price competition. Fewer stations means less ability to shop around for better prices.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Where is the cheapest fuel in London?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>M25 motorway service stations and Greater London supermarket fuel (Tesco, Asda, Sainsbury's) typically offer the best London prices. Consider filling up here if possible.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Should I avoid driving in central London to save fuel?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Consider it: congestion charging (GBP 11.50/day), ULEZ charges (GBP 12.50/day), and poor fuel economy from stop-start traffic make central London driving expensive. Use public transport instead where possible.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What's the impact of ULEZ on fuel costs?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>ULEZ charges GBP 12.50/day for non-compliant vehicles (most pre-2015 petrol, pre-2015 diesel). Over a work week, this adds GBP 62.50. Many modern cars are exempt from ULEZ charges.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is diesel worth it in London?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Generally no for London driving. Diesel's advantage is motorway efficiency, but London stop-start traffic negates this. Plus, older diesel cars may incur ULEZ charges. Petrol or electric is better for London commuting.</p>
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
            <a href="/northern-ireland-fuel-prices" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white">Northern Ireland</h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
