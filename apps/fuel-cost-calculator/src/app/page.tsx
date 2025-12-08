import { Metadata } from 'next'
import { FuelCostCalculator } from '../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Fuel Cost Calculator UK | Calculate Petrol & Diesel Costs',
  description: 'Free UK fuel cost calculator. Calculate cost per mile, journey fuel costs, and fuel efficiency for petrol and diesel cars. Perfect for commuters and business mileage.',
  keywords: 'fuel cost calculator, cost per mile, journey cost, petrol calculator, diesel calculator, fuel economy, mileage calculator, fuel expense',
  openGraph: {
    title: 'Fuel Cost Calculator UK',
    description: 'Calculate your fuel costs instantly with our free UK fuel cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuel Cost Calculator UK',
    description: 'Calculate fuel costs per mile and for journeys with our free calculator.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center" role="img" aria-label="Fuel Cost Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Fuel Cost <span className="text-blue-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Cost Per Mile & Journey Calculator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Fuel Cost Calculator
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Free <strong>fuel cost calculator</strong> for UK drivers. Calculate petrol and diesel costs per mile, journey expenses, and fuel efficiency instantly.
          </p>
          <p className="text-sm text-slate-500">
            Perfect for commuters, business mileage tracking, and trip cost planning. Works with all cars.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <FuelCostCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Use Our Fuel Cost Calculator?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Save Money</h3>
              <p className="text-sm text-slate-400">
                Track your fuel spending and identify ways to reduce costs through better route planning and fuel-efficient driving.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Track Expenses</h3>
              <p className="text-sm text-slate-400">
                Easily calculate and track business mileage claims, tax deductions, and personal driving expenses for budgeting.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Estimates</h3>
              <p className="text-sm text-slate-400">
                Get instant calculations for journey costs before you travel. Plan your budget for long trips and commutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Use the Fuel Cost Calculator
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Choose Your Calculator</h3>
                <p className="text-slate-400">
                  Select the calculator that matches your needs: Cost per Mile (for actual trips), Journey Cost (for planned trips), or Price Analysis (to compare fuel prices).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Enter Your Details</h3>
                <p className="text-slate-400">
                  Input your journey distance, fuel costs, fuel economy (MPG), and current fuel prices. All UK values are supported.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Get Your Results</h3>
                <p className="text-slate-400">
                  Instantly see your fuel costs per mile, total journey expenses, and fuel efficiency estimates. Perfect for budgeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I know my car's MPG?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can find your car's fuel efficiency (MPG - Miles Per Gallon) in several ways: (1) Your car's manual or service book, (2) The manufacturer's specifications, (3) Official EPA/WLTP ratings online, (4) By calculating it from your actual driving: divide miles driven by litres of fuel used. Average UK cars get 30-45 MPG depending on driving conditions and vehicle type.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why do my actual costs differ from the calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Several factors affect actual fuel costs: (1) Driving conditions - city driving uses more fuel than motorway, (2) Weather - cold weather reduces fuel efficiency, (3) Vehicle condition - underinflated tyres increase consumption, (4) Driving style - aggressive acceleration and speeding increase fuel usage, (5) Actual fuel prices vary by location and petrol station. The calculator provides estimates; actual costs may vary.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use this for business mileage claims?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! This calculator is perfect for tracking business mileage and tax deductions. In the UK, you can claim a mileage allowance for business use. The calculator helps you determine actual fuel costs and track your expenses. Always keep detailed records of your journeys and fuel expenses. Check with HMRC or your accountant for the current mileage allowance rates and tax deduction rules.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between petrol and diesel costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Diesel and petrol have different costs and efficiency: (1) Diesel is typically more expensive per litre, (2) Diesel cars generally achieve better MPG (5-20% more efficient), (3) Over longer distances or high mileage, diesel can be cheaper overall, (4) Petrol cars are often cheaper upfront. Use our calculator with your actual fuel price and MPG to compare costs for your specific situation and journey distance.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is the fuel price data?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You enter the fuel price manually, so accuracy depends on current prices at your location. Fuel prices vary by: (1) Location - different areas have different prices, (2) Petrol station - branded stations charge differently, (3) Time - prices fluctuate daily based on crude oil and market conditions. For accurate calculations, check current prices at your usual petrol station before using the calculator. Supermarket fuel is often cheaper than branded stations.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use this calculator for electric vehicles (EVs)?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This calculator is designed for petrol and diesel vehicles. Electric vehicles have different cost structures based on electricity prices (pence per kWh) rather than fuel consumption (MPG). However, you can estimate EV costs by calculating your electricity rate as equivalent "fuel" price and using typical EV efficiency ratings (miles per kWh). We're developing an EV cost calculator - check back soon!
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What counts as a business journey?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                For UK tax purposes, a business journey is travel in the course of your business. This includes: (1) Meetings and client visits, (2) Site visits and inspections, (3) Conference and training attendance, (4) Delivering goods or services. Commuting from home to your main office is generally NOT classed as business mileage. Always keep detailed records including dates, distances, and purpose of journey for tax deduction claims.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How can I improve my car's fuel efficiency?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Simple tips to improve fuel efficiency: (1) Check tyre pressure regularly - underinflated tyres use more fuel, (2) Service your car regularly - a well-maintained engine is more efficient, (3) Avoid carrying unnecessary weight, (4) Remove roof racks when not needed, (5) Drive smoothly - avoid rapid acceleration and hard braking, (6) Avoid idling - turn off engine in traffic, (7) Plan efficient routes - use sat nav to avoid congestion, (8) Combine trips to reduce total distance driven.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Fuel Cost Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free fuel cost calculator for UK drivers. Calculate petrol and diesel costs per mile, journey expenses, and fuel efficiency instantly.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-blue-400">Calculator</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
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
              Fuel Cost Calculator UK - Free fuel cost calculator for UK drivers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
