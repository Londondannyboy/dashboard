import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Diesel Cost Calculator UK | Calculate Diesel Fuel Costs & Expenses',
  description: 'Free UK diesel cost calculator. Calculate diesel fuel costs per mile, compare diesel vs petrol prices, and track diesel expenses. Perfect for diesel car owners.',
  keywords: 'diesel cost calculator uk, diesel fuel cost calculator, diesel price calculator, cost per mile diesel, diesel fuel expenses, diesel vs petrol costs',
  openGraph: {
    title: 'Diesel Cost Calculator UK',
    description: 'Calculate your diesel fuel costs with our free UK diesel cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/diesel-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diesel Cost Calculator UK',
    description: 'Free diesel fuel cost calculator for UK drivers.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/diesel-calculator',
  },
}

export default function DieselCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Diesel <span className="text-orange-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Diesel Cost Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#why-diesel" className="text-slate-300 hover:text-white transition-colors">Diesel Benefits</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Diesel Cost Calculator
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your <strong>diesel fuel costs</strong> accurately. Compare diesel vs petrol prices, track diesel expenses, and understand your fuel budget.
          </p>
          <p className="text-sm text-slate-500">
            Free diesel cost calculator for diesel car owners and fleet managers.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <FuelCostCalculator />
      </section>

      {/* Why Diesel Section */}
      <section id="why-diesel" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Diesel vs Petrol: Understanding Fuel Costs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Diesel Advantages</h3>
              <ul className="text-sm text-slate-300 space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Better fuel economy:</strong> Diesel engines achieve 15-20% better MPG than petrol</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Lower running costs:</strong> Better MPG means lower cost per mile over long distances</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Ideal for high mileage:</strong> Perfect for commuters and business travel</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Strong resale value:</strong> Diesel cars hold value well due to lower running costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">Diesel Considerations</h3>
              <ul className="text-sm text-slate-300 space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Higher upfront cost:</strong> Diesel cars cost more to purchase initially</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Price variance:</strong> Diesel prices fluctuate differently than petrol</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Service costs:</strong> Diesel engines may have higher service costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a6 6 0 1110.84 0" />
                  </svg>
                  <span><strong>Limited options:</strong> Fewer diesel models available than petrol</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">When Diesel Pays Off</h3>
            <p className="text-slate-300 mb-4">
              Diesel becomes more cost-effective when you drive more than 10,000-12,000 miles per year. The better fuel economy compensates for the higher purchase price and fuel costs.
            </p>
            <p className="text-slate-400 text-sm">
              Use our diesel cost calculator to compare your specific situation with current diesel prices in your area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Diesel Calculator - FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is diesel cheaper than petrol per mile?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Often yes, but it depends on: (1) Diesel fuel price per litre - sometimes more expensive than petrol, (2) Your vehicle's MPG - diesel vehicles typically achieve 15-20% better fuel economy, (3) Annual mileage - diesel becomes cheaper at higher mileages. For example, a diesel car with 45 MPG might be cheaper per mile than a petrol car with 38 MPG, even if diesel costs more per litre. Use our calculator to compare actual costs for your vehicle.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is MPG for diesel vehicles?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Manufacturer MPG figures for diesel are often 10-20% optimistic. Real-world diesel MPG depends on: (1) Driving style - city driving reduces efficiency, (2) Vehicle maintenance - poorly serviced diesel engines consume more fuel, (3) Fuel quality - using quality diesel maintains better MPG. Always measure your actual diesel consumption over several fill-ups to get accurate cost calculations.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why do diesel prices fluctuate differently than petrol?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Diesel and petrol prices respond differently to global factors: (1) Crude oil prices affect both, but with different ratios, (2) Refining capacity - diesel and petrol require different refining processes, (3) Seasonal demand - winter increases diesel demand for heating, (4) Supply chain - different routes and suppliers. Monitor both prices separately and use our calculator with current diesel prices for accurate budgeting.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the payback period for switching to diesel?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The payback period depends on: (1) Price difference between diesel and petrol versions (usually £1,500-£3,000 extra), (2) Fuel cost savings per mile (typically 1-2p per mile), (3) Annual mileage. At 12,000 miles per year with 1.5p savings per mile, you save £180 annually - a 10-year payback on £1,800 price difference. Higher mileage or greater price differences can reduce payback to 5-7 years.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Are diesel engines more reliable than petrol?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Diesel engines are generally robust but reliability depends on: (1) Maintenance - diesel engines need quality fuel and regular servicing, (2) Manufacturer - some brands have better diesel reliability than others, (3) Driving style - gentle driving extends engine life. Well-maintained diesel engines can run 200,000+ miles. Poor maintenance or cheap fuel can cause costly repairs. Always use quality diesel and follow service schedules.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Diesel Costs</h2>
          <p className="text-slate-400 mb-8">
            Use our free diesel calculator to understand your fuel expenses with current diesel prices.
          </p>
          <a href="#calculator" className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
            Open Diesel Calculator
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Diesel Cost Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK diesel cost calculator for tracking diesel fuel expenses and comparing diesel vs petrol.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-orange-400">Home</a></li>
                <li><a href="#calculator" className="hover:text-orange-400">Calculator</a></li>
                <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
                <li><a href="/petrol-expense-calculator" className="hover:text-blue-400">Petrol Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Fuel Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/journey-cost-calculator" className="hover:text-green-400">Journey Costs</a></li>
                <li><a href="/about" className="hover:text-orange-400">About</a></li>
                <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Diesel Cost Calculator UK - Free diesel fuel cost calculator for UK drivers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
