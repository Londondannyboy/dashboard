import { Metadata } from 'next'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Petrol Expense Calculator UK | Calculate Fuel Costs & Track Spending',
  description: 'Free UK petrol expense calculator. Track your petrol costs, calculate fuel expenses per mile, and manage your fuel budget. Perfect for commuters and business mileage tracking.',
  keywords: 'petrol expense calculator, petrol cost calculator uk, fuel expense tracker, petrol spending calculator, fuel budget calculator, petrol cost tracker, UK fuel calculator',
  openGraph: {
    title: 'Petrol Expense Calculator UK',
    description: 'Calculate and track your petrol expenses with our free UK petrol expense calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/petrol-expense-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petrol Expense Calculator UK',
    description: 'Free petrol expense calculator for tracking fuel costs and spending.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/petrol-expense-calculator',
  },
}

export default function PetrolExpenseCalculatorPage() {
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
                <p className="text-xs text-slate-400">UK Fuel Expense Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#why-track" className="text-slate-300 hover:text-white transition-colors">Why Track</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Petrol Expense Calculator
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Track your <strong>petrol expenses</strong> and manage your fuel budget effectively. Our free petrol cost calculator helps you understand exactly how much you're spending on fuel.
          </p>
          <p className="text-sm text-slate-500">
            Calculate petrol costs per mile, track fuel spending, and identify savings opportunities.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <FuelCostCalculator />
      </section>

      {/* Why Track Petrol Expenses */}
      <section id="why-track" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Track Your Petrol Expenses?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reduce Spending</h3>
              <p className="text-sm text-slate-400">
                Understanding your petrol spending helps you identify ways to reduce fuel costs through efficient driving and route planning.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Budget Accurately</h3>
              <p className="text-sm text-slate-400">
                Know your true petrol costs to create realistic budgets for personal and business travel.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tax Deductions</h3>
              <p className="text-sm text-slate-400">
                Track business petrol expenses for tax deductions and mileage allowance claims.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Make Informed Decisions</h3>
              <p className="text-sm text-slate-400">
                Compare petrol vs diesel, plan long trips, and evaluate vehicle efficiency with real data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Calculate Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Calculate Your Petrol Expenses
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Know Your Fuel Economy (MPG)</h3>
                <p className="text-slate-400">
                  Find your car's fuel efficiency (Miles Per Gallon) in your manual or search online. Average UK cars get 30-45 MPG depending on driving conditions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Check Current Petrol Prices</h3>
                <p className="text-slate-400">
                  Note the current petrol price per litre at your usual fuel station. Prices vary by location and petrol station. Check current prices before calculating.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Enter Your Details</h3>
                <p className="text-slate-400">
                  Input your journey distance, fuel economy, and petrol price. Our calculator instantly shows your total petrol cost and cost per mile.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-blue-400">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Analyze and Plan</h3>
                <p className="text-slate-400">
                  Review your petrol expenses, compare different scenarios, and identify opportunities to reduce fuel costs through better driving or trip planning.
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
            Petrol Expense Calculator - FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's included in petrol expenses?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Petrol expenses include the cost of fuel consumed during your journeys. Our calculator accounts for your vehicle's fuel efficiency (MPG) and current petrol prices to determine total expenses. This includes commute costs, business travel, leisure trips, and any journey requiring petrol.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is this petrol expense calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The calculator is highly accurate when you provide real data. Accuracy depends on: (1) Your car's actual MPG - manufacturer figures are often optimistic, (2) Current petrol prices at your location, (3) Driving conditions - city driving uses more fuel than motorway. For best accuracy, measure your actual fuel consumption over 2-3 fill-ups and use current prices from your local petrol station.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use this for business petrol expenses?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! This petrol expense calculator is perfect for tracking business mileage expenses. Use it to calculate petrol costs for client visits, conferences, and business travel. Keep detailed records of dates, distances, and purposes for tax deduction claims. In the UK, you can claim business mileage allowances. Consult your accountant for current tax rates and deduction rules.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How can I reduce my petrol expenses?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Reduce petrol expenses with these tips: (1) Maintain proper tyre pressure - underinflated tyres increase fuel consumption, (2) Reduce unnecessary weight - remove roof racks and excess items, (3) Drive smoothly - avoid rapid acceleration and hard braking, (4) Plan efficient routes - use sat nav to avoid congestion, (5) Combine trips - plan multiple errands in one journey, (6) Regular servicing - a well-maintained engine is more efficient, (7) Use supermarket fuel - often cheaper than branded stations.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is diesel cheaper than petrol?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Diesel costs and efficiency depend on: (1) Per litre price - diesel is sometimes more expensive per litre than petrol, (2) Fuel efficiency - diesel cars typically achieve 15-20% better MPG, (3) Total cost - over long distances, diesel is often cheaper overall despite higher per-litre price. Use our calculator to compare diesel vs petrol costs with your actual vehicle specs and local fuel prices.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do petrol prices affect my expenses?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Petrol prices directly impact your fuel expenses: (1) A 10p increase per litre adds £5-6 to every 100 miles, (2) Prices vary by location - urban stations charge more than rural, (3) Supermarket fuel is typically 2-5p cheaper per litre, (4) Prices fluctuate daily based on crude oil costs. Monitor petrol prices regularly and consider longer trips when prices are lower to manage your expenses effectively.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between city and motorway petrol consumption?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                City driving is significantly less efficient: (1) City driving - typically 20-30% worse fuel economy due to stop-start traffic, (2) Motorway driving - typically 15-25% better fuel economy due to steady speeds, (3) Mixed driving - falls between the two extremes, (4) Cold engines - consume more fuel, especially for short city trips. Use your actual consumption figures rather than manufacturer ratings for more accurate expense calculations.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Tracking Your Petrol Expenses Today</h2>
          <p className="text-slate-400 mb-8">
            Use our free petrol expense calculator to understand your fuel spending and find ways to save money.
          </p>
          <a href="#calculator" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Open Calculator
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Petrol Expense Calculator</h4>
              <p className="text-sm text-slate-400">
                Free UK petrol expense calculator for tracking fuel costs and managing your fuel budget.
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
              Petrol Expense Calculator UK - Free fuel expense tracker for UK drivers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
