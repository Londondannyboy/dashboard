import { Metadata } from 'next'
import { FuelCostCalculator } from '../../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Hybrid vs EV: Complete Cost Comparison for UK Drivers',
  description: 'Detailed comparison of hybrid vs electric vehicles. Analyze fuel/electricity costs, charging infrastructure, purchase price, and total cost of ownership. Use our calculator to compare.',
  keywords: 'hybrid vs EV, hybrid vs electric, hybrid vs electric car comparison UK, is EV cheaper than hybrid, charging costs vs petrol',
  openGraph: {
    title: 'Hybrid vs EV Comparison Guide',
    description: 'Complete cost analysis comparing hybrid and electric cars for UK drivers.',
    type: 'article',
    url: 'https://fuelcostcalculator.quest/comparison/hybrid-vs-ev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid vs EV Comparison',
    description: 'Compare hybrid and electric vehicle costs, charging, and total ownership expenses.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/comparison/hybrid-vs-ev',
  },
}

export default function HybridVsEVPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel <span className="text-green-400">Comparison</span>
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
            Hybrid vs EV
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Comparison</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Should you go hybrid or fully electric? Get detailed analysis comparing electricity costs, driving range, charging infrastructure, and total ownership costs.
          </p>
          <p className="text-sm text-slate-500">
            Make an informed decision with real UK charging costs and realistic driving scenarios.
          </p>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section id="comparison" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Differences: Hybrid vs EV
          </h2>

          <div className="overflow-x-auto rounded-lg border border-slate-700/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800/50 border-b border-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold text-white">Factor</th>
                  <th className="px-4 py-3 text-center font-semibold text-teal-400">Hybrid</th>
                  <th className="px-4 py-3 text-center font-semibold text-green-400">EV</th>
                  <th className="px-4 py-3 text-center font-semibold text-slate-300">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Fuel Economy</td>
                  <td className="px-4 py-3 text-center text-slate-300">50-65 MPG</td>
                  <td className="px-4 py-3 text-center text-slate-300">2-3 miles per kWh</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs font-semibold">EV</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Cost per Mile</td>
                  <td className="px-4 py-3 text-center text-slate-300">10-12p</td>
                  <td className="px-4 py-3 text-center text-slate-300">3-4p</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs font-semibold">EV</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Range</td>
                  <td className="px-4 py-3 text-center text-slate-300">500-600 miles</td>
                  <td className="px-4 py-3 text-center text-slate-300">200-350 miles</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-semibold">Hybrid</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Refueling Time</td>
                  <td className="px-4 py-3 text-center text-slate-300">5 minutes</td>
                  <td className="px-4 py-3 text-center text-slate-300">30 min-12 hours</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-semibold">Hybrid</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Purchase Price</td>
                  <td className="px-4 py-3 text-center text-slate-300">£28,000-35,000</td>
                  <td className="px-4 py-3 text-center text-slate-300">£35,000-50,000</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-semibold">Hybrid</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Charging Network</td>
                  <td className="px-4 py-3 text-center text-slate-300">Standard fuel</td>
                  <td className="px-4 py-3 text-center text-slate-300">Growing rapidly</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-semibold">Hybrid</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Annual Maintenance</td>
                  <td className="px-4 py-3 text-center text-slate-300">£1,000-1,200</td>
                  <td className="px-4 py-3 text-center text-slate-300">£400-600</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs font-semibold">EV</span></td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-800/20">
                  <td className="px-4 py-3 text-slate-200 font-medium">Warranty (Battery)</td>
                  <td className="px-4 py-3 text-center text-slate-300">8 years/120k miles</td>
                  <td className="px-4 py-3 text-center text-slate-300">8 years/120k miles</td>
                  <td className="px-4 py-3 text-center"><span className="inline-block px-2 py-1 rounded bg-slate-500/20 text-slate-300 text-xs font-semibold">Equal</span></td>
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
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-500/30">
              <h3 className="text-xl font-semibold text-teal-400 mb-6">Hybrid Car (£30,000)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Purchase Price</span>
                  <span className="font-semibold text-white">£30,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Fuel (60,000 miles @ 55 MPG)</span>
                  <span className="font-semibold text-white">£3,200</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Service & Maintenance</span>
                  <span className="font-semibold text-white">£5,500</span>
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
                  <span className="font-semibold text-teal-400">-£12,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-teal-500/30">
                  <span className="text-white font-bold">Total 5-Year Cost</span>
                  <span className="font-bold text-teal-300 text-lg">£32,650</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-400 mb-6">EV Car (£40,000)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Purchase Price</span>
                  <span className="font-semibold text-white">£40,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Electricity (60,000 miles @ 3 mi/kWh)</span>
                  <span className="font-semibold text-white">£2,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Service & Maintenance</span>
                  <span className="font-semibold text-white">£2,500</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Insurance (5 years)</span>
                  <span className="font-semibold text-white">£5,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/30">
                  <span className="text-slate-300">Road Tax (5 years)</span>
                  <span className="font-semibold text-white">£0</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-200 font-semibold">Resale Value</span>
                  <span className="font-semibold text-green-400">-£16,000</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-green-500/30">
                  <span className="text-white font-bold">Total 5-Year Cost</span>
                  <span className="font-bold text-green-300 text-lg">£33,500</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Analysis</h3>
            <p className="text-slate-300 mb-3">
              In this scenario, <strong>costs are nearly equivalent</strong> at £32,650 (Hybrid) vs £33,500 (EV). However, this comparison reveals important nuances:
            </p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>✓ EV electricity costs are roughly 70% cheaper than hybrid fuel</li>
              <li>✓ EV maintenance is 50% lower (no oil changes, spark plugs, or exhaust work)</li>
              <li>✓ Hybrid has significantly better range and faster refueling</li>
              <li>✓ EV road tax is zero; hybrid still requires standard rate</li>
              <li>✓ EV government incentives (if available) significantly improve the equation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            When Should You Choose Hybrid vs EV?
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-500/30">
                <h3 className="text-lg font-semibold text-teal-400 mb-6">Choose Hybrid If You:</h3>
                <ul className="text-sm text-slate-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Frequently take long trips/motorway driving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Don't have off-street parking/charging at home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Want maximum refueling convenience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Live in areas with limited EV charging infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Want lower upfront costs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-lg font-semibold text-green-400 mb-6">Choose EV If You:</h3>
                <ul className="text-sm text-slate-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Have home charging capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mostly do daily commuting under 200 miles/day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Want lowest running/maintenance costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prioritize environmental impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Live in area with good charging network</span>
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
            Use current electricity and fuel prices for your area to see which is cheaper for your driving patterns.
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
                <span>How much does it cost to charge an EV at home?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>With an average UK electricity rate of 25-30p per kWh, charging a typical EV costs £2-4 per full charge (200 miles). This equates to 1-2p per mile, compared to 10-12p per mile for petrol and 10-12p for hybrids.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What's the difference between home and public charging costs?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Home charging is cheapest at 25-30p/kWh. Standard public chargers cost 30-40p/kWh. Rapid/ultrafast chargers cost 40-70p/kWh. If you charge mostly at home with occasional public charging, your average is still far cheaper than fuel.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Will EV battery degradation affect costs?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Modern EV batteries retain 80-85% capacity after 8 years/120,000 miles (typical warranty period). Degradation is slower than people expect and doesn't significantly affect total cost of ownership. Battery replacement at end of life would be an additional cost.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Can I get a grant for an EV in 2025?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>UK government EV grants have been reduced significantly. Check the latest schemes like Plug-in Car Grant (if still available) and workplace charging grants. Some local councils offer incentives. Always verify current eligibility on gov.uk before purchasing.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How long does EV charging take?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Home 7kW wallbox: 8-10 hours for full charge. Fast public charger (50kW): 30-45 minutes to 80%. Rapid charger (150kW+): 20-30 minutes to 80%. For daily commuting, overnight home charging is most convenient and cost-effective.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Are hybrids good for towing or heavy loads?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Hybrids can tow (check model limits) but generally less efficient when towing than regular petrol/diesel. EVs are not suitable for towing due to range reduction. For occasional towing, hybrid is better. For frequent heavy towing, consider diesel.</p>
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
            <a href="/comparison/diesel-vs-petrol" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Diesel vs Petrol</h4>
              <p className="text-sm text-slate-400">Compare traditional fuel options</p>
            </a>
            <a href="/hybrid-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Hybrid Calculator</h4>
              <p className="text-sm text-slate-400">Calculate your hybrid costs</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
