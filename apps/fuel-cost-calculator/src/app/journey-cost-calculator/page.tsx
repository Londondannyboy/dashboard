import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Journey Cost Calculator UK | Calculate Trip Fuel Costs',
  description: 'Free UK journey cost calculator. Plan your trip costs, calculate fuel expenses for long journeys, and budget your travel. Perfect for road trips and commute planning.',
  keywords: 'journey cost calculator, trip cost calculator uk, journey fuel cost, road trip fuel calculator, travel cost calculator, commute cost calculator',
  openGraph: {
    title: 'Journey Cost Calculator UK',
    description: 'Calculate your journey costs before you travel with our free UK trip fuel calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/journey-cost-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journey Cost Calculator UK',
    description: 'Free journey cost calculator for planning trip fuel expenses.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/journey-cost-calculator',
  },
}

export default function JourneyCostCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel Cost <span className="text-blue-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Journey Cost Planner</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#plan-trip" className="text-slate-300 hover:text-white transition-colors">Plan Trip</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Journey Cost Calculator
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Plan your trip fuel costs before you travel. Our free <strong>journey cost calculator</strong> helps you budget for road trips, long journeys, and commutes with accurate fuel expense estimates.
          </p>
          <p className="text-sm text-slate-500">
            Know exactly how much your journey will cost in fuel before you leave home.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <FuelCostCalculator />
      </section>

      {/* Plan Your Journey */}
      <section id="plan-trip" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Plan Your Journey with Confidence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Road Trip Planning</h3>
              <p className="text-sm text-slate-400">
                Calculate fuel costs for your holiday road trips and long journeys. Know your budget before you start driving.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c0 .5-.1 1-.3 1.5m-3.7 0C11.1 8 10.5 7.5 10 7m-6 10c0 .5.1 1 .3 1.5m3.7 0C12.9 16 13.5 16.5 14 17m4-9a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Commute Budgeting</h3>
              <p className="text-sm text-slate-400">
                Estimate daily or weekly commute costs to properly budget your fuel spending throughout the month.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compare Options</h3>
              <p className="text-sm text-slate-400">
                Compare different routes or vehicles to find the most fuel-efficient and cost-effective journey option.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Mileage</h3>
              <p className="text-sm text-slate-400">
                Track business journey costs for tax deductions and accurate expense reporting for client visits.
              </p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Journey Cost Tips</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ <strong>Plan your route</strong> - Avoid congestion and heavy traffic to maintain better fuel economy</li>
              <li>✓ <strong>Check your car</strong> - Ensure proper tyre pressure and recent servicing before long journeys</li>
              <li>✓ <strong>Travel during off-peak</strong> - Early morning or late evening driving uses less fuel than rush hour</li>
              <li>✓ <strong>Share the cost</strong> - Carpooling splits fuel costs between passengers</li>
              <li>✓ <strong>Monitor fuel prices</strong> - Fill up when prices are lowest for better value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Journey Cost Calculator - FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate are journey cost estimates?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Journey cost estimates are accurate when you input real data: (1) Use your car's actual fuel economy measured over several fill-ups, not manufacturer figures, (2) Use current fuel prices from your local area, (3) Consider journey type - city driving uses more fuel than motorway, (4) Account for traffic conditions - congestion increases consumption. For maximum accuracy, measure your actual MPG before a long journey.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Should I include return journey costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, always include both outbound and return journey costs in your budget: (1) For a 100-mile trip, use 200 miles (100 each way), (2) Return journeys often use more fuel due to different routes or traffic patterns, (3) Plan for slightly higher costs on return journeys after a tiring drive, (4) Consider fuel price changes between outbound and return dates for longer trips.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I find my car's fuel economy for accurate calculations?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Find your car's real fuel economy in several ways: (1) Check your car's manual or service book, (2) Search online using your car model and year, (3) Check your car's onboard computer/dashboard display (many modern cars show MPG), (4) Calculate it manually: divide miles driven by litres used. Note that manufacturer figures are often 10-20% optimistic, so use real-world measurements for accurate journey cost planning.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What if I'm not sure about fuel prices?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Always check current fuel prices: (1) Use petrol price checker websites and apps, (2) Check prices at your usual fuel station, (3) Compare supermarket prices - often 2-5p cheaper per litre, (4) Plan long journeys when prices are lower, (5) Use the average of prices along your route if travelling far. For future planning, add 5% to current prices to account for potential increases.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I calculate costs for multiple stops or detours?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, include all journey distance: (1) Add the total distance for your complete route including detours and stops, (2) Use route planning apps to calculate total journey distance, (3) Add 5-10% for getting lost or wrong turns, (4) Multiple short stops increase overall fuel consumption slightly. Use the total journey miles (not just main destination distance) for the most accurate cost estimate.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do weather and seasons affect journey costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Weather and seasons impact fuel consumption: (1) Cold weather - engines consume more fuel until warmed up, especially for short journeys, (2) Air conditioning - using AC reduces fuel economy by 5-10%, (3) Winter tyres - heavier than summer tyres, increase consumption slightly, (4) Headwinds - driving into strong winds reduces efficiency, (5) Heavy traffic in summer holidays. Budget 10% extra for winter journeys and add 5% for summer AC usage.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use this for motorway vs city journey comparison?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! Compare different routes easily: (1) Motorway driving - typically 20-30% more efficient than city driving, (2) City driving - more fuel consumption due to stop-start traffic, (3) Mixed routes - calculate costs for different routing options, (4) Calculate A-road vs motorway comparisons. Use your actual MPG figures for each journey type to make accurate comparisons and choose the most cost-effective route.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plan Your Next Journey</h2>
          <p className="text-slate-400 mb-8">
            Use our journey cost calculator to budget your trips accurately before you travel.
          </p>
          <a href="#calculator" className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Calculate Journey Cost
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Journey Cost Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK journey cost calculator for planning trip fuel expenses and budgeting your travels.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="#calculator" className="hover:text-blue-400">Calculator</a></li>
                <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="/about" className="hover:text-blue-400">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-400">Terms</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Journey Cost Calculator UK - Free trip fuel cost calculator for UK drivers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
