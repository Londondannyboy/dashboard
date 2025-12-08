import { Metadata } from 'next'
import { FuelCostCalculator } from '../../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Diesel vs Petrol: Complete Cost Comparison Guide for UK Drivers',
  description: 'Detailed comparison of diesel vs petrol cars. Analyze fuel costs, fuel economy, maintenance, and total cost of ownership. Use our calculator to compare for your driving patterns.',
  keywords: 'diesel vs petrol, diesel vs petrol cost comparison, diesel vs petrol fuel economy, diesel vs petrol cars UK, is diesel cheaper than petrol',
  openGraph: {
    title: 'Diesel vs Petrol Comparison Guide',
    description: 'Complete cost analysis comparing diesel and petrol cars for UK drivers.',
    type: 'article',
    url: 'https://fuelcostcalculator.quest/comparison/diesel-vs-petrol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diesel vs Petrol Comparison',
    description: 'Compare diesel and petrol fuel costs, efficiency, and total ownership costs.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/comparison/diesel-vs-petrol',
  },
}

export default function DieselVsPetrolPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel <span className="text-blue-400">Comparison</span>
                </span>
                <p className="text-xs text-slate-400">Cost & Efficiency Analysis</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#comparison" className="text-slate-300 hover:text-white transition-colors">Comparison</a>
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
            Diesel vs Petrol
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Cost Comparison</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Which fuel type is cheaper for your driving patterns? Get detailed cost analysis comparing diesel and petrol vehicles.
          </p>
          <p className="text-sm text-slate-500">
            Use real UK fuel prices and realistic driving scenarios to make the right choice.
          </p>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Differences: Diesel vs Petrol
          </h2>

          <div className="overflow-x-auto rounded-lg border border-slate-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold text-white">Factor</th>
                  <th className="px-4 py-3 text-center font-semibold text-orange-400">Diesel</th>
                  <th className="px-4 py-3 text-center font-semibold text-blue-400">Petrol</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-300">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Fuel Economy</td>
                  <td className="px-4 py-3 text-center text-slate-300">45-55 MPG</td>
                  <td className="px-4 py-3 text-center text-slate-300">35-45 MPG</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-xs font-semibold">Diesel</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Cost per Mile</td>
                  <td className="px-4 py-3 text-center text-slate-300">12-14p</td>
                  <td className="px-4 py-3 text-center text-slate-300">14-17p</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-xs font-semibold">Diesel</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Purchase Price</td>
                  <td className="px-4 py-3 text-center text-slate-300">£2,000-3,000 more</td>
                  <td className="px-4 py-3 text-center text-slate-300">Base price</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">Petrol</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Service Costs</td>
                  <td className="px-4 py-3 text-center text-slate-300">10-15% higher</td>
                  <td className="px-4 py-3 text-center text-slate-300">Standard</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">Petrol</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Annual Road Tax</td>
                  <td className="px-4 py-3 text-center text-slate-300">Same rate</td>
                  <td className="px-4 py-3 text-center text-slate-300">Same rate</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-slate-500/20 text-slate-300 text-xs font-semibold">Neutral</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Insurance Costs</td>
                  <td className="px-4 py-3 text-center text-slate-300">Typically higher</td>
                  <td className="px-4 py-3 text-center text-slate-300">Lower</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-semibold">Petrol</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Resale Value</td>
                  <td className="px-4 py-3 text-center text-slate-300">Holds well</td>
                  <td className="px-4 py-3 text-center text-slate-300">Good</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-xs font-semibold">Diesel</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            Total Cost of Ownership: 5-Year Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-400 mb-6">Diesel Car (£25,000)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Purchase Price</span>
                  <span className="font-semibold text-white">£25,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Fuel (60,000 miles @ 50 MPG)</span>
                  <span className="font-semibold text-white">£3,600</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Service & Maintenance</span>
                  <span className="font-semibold text-white">£1,200</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Insurance (5 years)</span>
                  <span className="font-semibold text-white">£4,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Road Tax (5 years)</span>
                  <span className="font-semibold text-white">£1,450</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-200 font-semibold">Resale Value</span>
                  <span className="font-semibold text-orange-400">-£10,500</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-orange-500/30">
                  <span className="text-white font-bold">Total 5-Year Cost</span>
                  <span className="font-bold text-orange-300 text-lg">£25,250</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">Petrol Car (£22,000)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Purchase Price</span>
                  <span className="font-semibold text-white">£22,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Fuel (60,000 miles @ 40 MPG)</span>
                  <span className="font-semibold text-white">£4,800</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Service & Maintenance</span>
                  <span className="font-semibold text-white">£900</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Insurance (5 years)</span>
                  <span className="font-semibold text-white">£4,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Road Tax (5 years)</span>
                  <span className="font-semibold text-white">£1,450</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-200 font-semibold">Resale Value</span>
                  <span className="font-semibold text-blue-400">-£9,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-blue-500/30">
                  <span className="text-white font-bold">Total 5-Year Cost</span>
                  <span className="font-bold text-blue-300 text-lg">£24,150</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Analysis</h3>
            <p className="text-slate-300 mb-3">
              In this scenario, <strong>petrol is £1,100 cheaper</strong> over 5 years despite diesel's superior fuel economy. However, this varies significantly based on:
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>✓ Annual mileage (diesel improves with higher mileage)</li>
              <li>✓ Current fuel price differences</li>
              <li>✓ Your insurance profile</li>
              <li>✓ Service cost differences for your specific model</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Breakeven Analysis */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            When Does Diesel Become Cheaper?
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Annual Mileage Impact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span className="text-slate-300">10,000 miles/year</span>
                    <span className="text-blue-400 font-semibold">Petrol saves £300</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span className="text-slate-300">15,000 miles/year</span>
                    <span className="text-slate-400 font-semibold">Break-even</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span className="text-slate-300">20,000 miles/year</span>
                    <span className="text-orange-400 font-semibold">Diesel saves £400</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span className="text-slate-300">30,000 miles/year</span>
                    <span className="text-orange-400 font-semibold">Diesel saves £1,200</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Key Decision Factors</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Drive more than 15,000 miles/year?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mostly motorway driving?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Planning to keep car 5+ years?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Budget allows £2-3k more upfront?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Calculate Your Personal Cost Comparison
          </h2>
          <p className="text-center text-slate-400 mb-8">
            Use current fuel prices for your area to see which fuel type is cheaper for your driving patterns.
          </p>
          <FuelCostCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is diesel cheaper than petrol in the UK right now?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>It depends on your specific location and fuel prices at that moment. Diesel typically costs 5-15% more per litre than petrol, but diesel engines get 15-20% better fuel economy. For high-mileage drivers, diesel usually becomes cheaper.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What's the break-even mileage for diesel vs petrol?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>The break-even point is typically around 12,000-15,000 miles per year when accounting for the £2,000-3,000 higher purchase price of diesel cars. Above this mileage, diesel usually becomes cheaper.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Do diesel cars hold their value better?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Yes, diesel cars typically retain 5-10% more of their purchase price on the used market due to their reputation for longevity and lower running costs for future owners.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Are diesel service costs significantly higher?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Diesel service costs are typically 10-15% higher than petrol due to more frequent filter changes and potentially higher labour costs. However, diesel engines generally require less frequent major repairs.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Should I choose diesel or petrol for city driving?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>For city driving, petrol is usually better. Diesel engines work more efficiently on motorways and long journeys. City driving doesn't allow diesel engines to reach optimal efficiency, and you'll pay more upfront for limited benefit.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What about diesel particulate filters (DPF)?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Modern diesel cars have DPF systems that clean themselves automatically during motorway driving. However, if your diesel car is mostly city-driven, the DPF may need professional cleaning (£300-600). This is another reason diesel suits long-distance driving better.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-white">Explore Other Fuel Comparisons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/comparison/hybrid-vs-ev" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Hybrid vs EV</h4>
              <p className="text-sm text-slate-400">Compare alternative fuel options</p>
            </a>
            <a href="/diesel-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Diesel Calculator</h4>
              <p className="text-sm text-slate-400">Calculate your diesel costs</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
