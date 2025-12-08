import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Hybrid Fuel Cost Calculator UK | Calculate Hybrid Car Costs',
  description: 'Free UK hybrid fuel cost calculator. Calculate hybrid vehicle fuel costs, compare hybrid vs petrol/diesel, and track hybrid fuel expenses. Perfect for eco-conscious drivers.',
  keywords: 'hybrid fuel cost calculator uk, hybrid car cost calculator, hybrid fuel consumption, hybrid vs petrol costs, hybrid efficiency calculator',
  openGraph: {
    title: 'Hybrid Fuel Cost Calculator UK',
    description: 'Calculate your hybrid vehicle fuel costs with our free UK hybrid calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/hybrid-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hybrid Fuel Cost Calculator UK',
    description: 'Free hybrid fuel cost calculator for UK drivers.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/hybrid-calculator',
  },
}

export default function HybridCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Hybrid <span className="text-teal-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Hybrid Car Cost Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#hybrid-benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Hybrid Fuel Cost Calculator
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your <strong>hybrid vehicle fuel costs</strong> accurately. Compare hybrid vs petrol/diesel and understand your fuel savings.
          </p>
          <p className="text-sm text-slate-500">
            Free hybrid calculator for eco-conscious drivers seeking fuel efficiency and cost savings.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <FuelCostCalculator />
      </section>

      {/* Hybrid Benefits Section */}
      <section id="hybrid-benefits" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Choose a Hybrid Vehicle?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-teal-500/10 rounded-2xl p-6 border border-teal-500/30">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">Hybrid Advantages</h3>
              <ul className="text-sm text-slate-300 space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Better fuel economy:</strong> 25-40% more efficient than conventional petrol</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Lower emissions:</strong> Reduced CO2 and fuel costs compared to petrol</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>No plug required:</strong> No charging infrastructure needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Regenerative braking:</strong> Extends brake life and recovers energy</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Hybrid Considerations</h3>
              <ul className="text-sm text-slate-300 space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Higher initial cost:</strong> More expensive than conventional petrol cars</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Battery replacement:</strong> Expensive battery replacement if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Complexity:</strong> More complex mechanics than conventional cars</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Limited range:</strong> Heavier than conventional cars due to battery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">When Hybrids Make Sense</h3>
            <p className="text-slate-300 mb-4">
              Hybrids are ideal for urban and suburban driving where frequent braking recovers energy. They're particularly cost-effective for drivers doing 8,000-15,000 miles per year with mixed city and motorway driving.
            </p>
            <p className="text-slate-400 text-sm">
              Use our hybrid calculator to compare your specific driving patterns and fuel costs with conventional petrol vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Hybrid Calculator - FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much fuel does a hybrid car save?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Typical hybrids save 25-40% fuel compared to conventional petrol cars. A hybrid achieving 50 MPG versus a petrol car with 35 MPG saves approximately 0.5-1p per mile. Over 10,000 miles annually, that's £50-100 in fuel savings. Additional savings come from reduced maintenance costs (longer brake life, fewer engine wear items).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Are hybrid cars worth the extra cost?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Hybrids typically cost £2,000-5,000 more than conventional petrol. Payback period depends on: (1) Annual mileage - higher mileage = faster payback, (2) Fuel prices - higher prices favor hybrids, (3) Driving style - urban driving favors hybrids (more braking = more energy recovery). For 12,000+ annual miles, payback is typically 5-7 years. Plus, hybrids often qualify for tax benefits and have strong resale value.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do hybrid batteries need replacing?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Hybrid batteries are designed to last the lifetime of the vehicle (10+ years). Modern hybrids have improved battery longevity through better thermal management. Replacement cost is typically £3,000-5,000 if needed after 15+ years. Many manufacturers offer 8-10 year warranty on hybrid batteries. Regular use and gentle driving extend battery life significantly.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do hybrids work in stop-start city traffic?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Hybrids excel in stop-start traffic: (1) Electric motor powers the vehicle at low speeds, (2) Regenerative braking captures energy when braking, (3) Engine turns off at idle, (4) Gas engine engages for acceleration. Urban driving produces best efficiency gains as frequent braking recovers energy. Motorway driving shows less hybrid advantage as the engine runs continuously.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I drive a hybrid on motorway journeys?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, hybrids work perfectly on motorways. The gas engine provides adequate power for motorway speeds (70+ mph). Fuel economy on motorways is similar to conventional petrol (hybrid benefit is less on long, straight roads). Regenerative braking provides minimal benefit at constant speeds. Hybrids are ideal for mixed urban/motorway driving. For pure motorway commuting, conventional diesels may offer better economy.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Hybrid Fuel Costs</h2>
          <p className="text-slate-400 mb-8">
            Use our free hybrid calculator to estimate your fuel savings compared to petrol vehicles.
          </p>
          <a href="#calculator" className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
            Open Hybrid Calculator
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Hybrid Fuel Cost Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK hybrid fuel cost calculator for eco-conscious drivers comparing fuel costs and efficiency.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-teal-400">Home</a></li>
                <li><a href="#calculator" className="hover:text-teal-400">Calculator</a></li>
                <li><a href="#faq" className="hover:text-teal-400">FAQ</a></li>
                <li><a href="/petrol-expense-calculator" className="hover:text-blue-400">Petrol Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/diesel-calculator" className="hover:text-orange-400">Diesel Costs</a></li>
                <li><a href="/journey-cost-calculator" className="hover:text-green-400">Journey Costs</a></li>
                <li><a href="/contact" className="hover:text-teal-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Hybrid Fuel Cost Calculator UK - Free fuel calculator for hybrid car owners
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
