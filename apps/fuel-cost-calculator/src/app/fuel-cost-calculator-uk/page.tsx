import { Metadata } from 'next'
import Link from 'next/link'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Fuel Cost Calculator UK | Calculate Petrol & Diesel Costs Today',
  description: 'Free UK fuel cost calculator. Calculate petrol and diesel costs instantly using current UK fuel prices. Perfect for planning journeys and managing fuel budgets.',
  keywords: 'fuel cost calculator uk, petrol cost calculator uk, diesel calculator uk, uk fuel calculator, calculate fuel cost uk',
  openGraph: {
    title: 'Fuel Cost Calculator UK',
    description: 'Calculate your UK fuel costs instantly with current petrol and diesel prices.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/fuel-cost-calculator-uk',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/fuel-cost-calculator-uk',
  },
}

export default function FuelCostCalculatorUKPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                Fuel <span className="text-red-400">Calculator</span>
              </span>
              <p className="text-xs text-slate-400">UK Fuel Cost Estimator</p>
            </div>
          </a>
        </div>
      </header>

      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Fuel Cost Calculator
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your fuel costs instantly using current UK petrol and diesel prices.
          </p>
          <p className="text-sm text-slate-500">
            Plan journeys, compare fuel types, and manage your fuel budget with our free calculator.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">What Can You Calculate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="flex gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Cost per mile:</strong> Calculate your fuel consumption efficiency</span>
              </div>
              <div className="flex gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Journey costs:</strong> Estimate fuel for trips and journeys</span>
              </div>
              <div className="flex gap-2">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Fuel price analysis:</strong> Compare petrol and diesel costs</span>
              </div>
            </div>
          </div>
          <FuelCostCalculator />
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            Why Use Our Calculator?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">⚡ Real-Time UK Prices</h3>
              <p className="text-slate-300 text-sm">
                Calculator uses current UK fuel prices for accurate cost estimates. Regional variations available.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">🚗 Multiple Fuel Types</h3>
              <p className="text-slate-300 text-sm">
                Compare petrol, diesel, hybrid, and EV costs to find the most economical option.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">📍 Regional Breakdown</h3>
              <p className="text-slate-300 text-sm">
                Check fuel prices in Scotland, Wales, Northern Ireland, London, and across the UK.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-3">💰 Budget Planning</h3>
              <p className="text-slate-300 text-sm">
                Plan trips, estimate business driving costs, and track fuel budgets effectively.
              </p>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Current UK Average Fuel Prices (December 2025)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-orange-400 font-semibold">Petrol (E10)</p>
                <p className="text-lg font-bold text-white">165p/litre</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-amber-400 font-semibold">Diesel</p>
                <p className="text-lg font-bold text-white">169p/litre</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-green-400 font-semibold">Electricity (EV)</p>
                <p className="text-lg font-bold text-white">28p/kWh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Explore Fuel Cost Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/comparison/diesel-vs-petrol" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Diesel vs Petrol</h3>
              <p className="text-sm text-slate-400 mb-3">Detailed comparison of fuel types with cost analysis and break-even analysis.</p>
              <span className="text-blue-400 text-sm font-semibold">Read guide →</span>
            </Link>

            <Link href="/blog/how-to-reduce-fuel-costs" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Reduce Fuel Costs</h3>
              <p className="text-sm text-slate-400 mb-3">10 proven strategies to reduce fuel consumption and save money on driving.</p>
              <span className="text-blue-400 text-sm font-semibold">Read guide →</span>
            </Link>

            <Link href="/fuel-economy-calculator" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Fuel Economy Calculator</h3>
              <p className="text-sm text-slate-400 mb-3">Calculate your car's MPG and fuel efficiency with detailed analysis.</p>
              <span className="text-blue-400 text-sm font-semibold">Learn more →</span>
            </Link>

            <Link href="/mileage-calculator" className="p-6 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Mileage Calculator</h3>
              <p className="text-sm text-slate-400 mb-3">Calculate cost per mile and business mileage allowance claims.</p>
              <span className="text-blue-400 text-sm font-semibold">Use calculator →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Fuel Cost Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How accurate is this calculator?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>The calculator uses current UK fuel prices and your input data to provide accurate estimates. Actual costs may vary based on driving conditions, vehicle maintenance, and real-time fuel prices.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Does the calculator update fuel prices?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>You can enter current fuel prices manually. Check your local fuel stations or visit <a href="https://www.petrolprices.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">petrolprices.com</a> for live UK prices.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Can I calculate fuel costs for business purposes?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Yes! Use the calculator to estimate business fuel costs, track mileage expenses, and plan journeys. See our <Link href="/blog/uk-mileage-rates" className="text-blue-400 hover:text-blue-300 underline">UK Mileage Rates guide</Link> for tax claim information.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
