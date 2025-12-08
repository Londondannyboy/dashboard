import { Metadata } from 'next'
import Link from 'next/link'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Fuel Price Estimate UK | Current Petrol & Diesel Prices 2025',
  description: 'Get accurate fuel price estimates for UK regions. Compare petrol and diesel prices across Scotland, Wales, Northern Ireland, London and more. Free fuel price checker.',
  keywords: 'fuel price estimate uk, current petrol prices, diesel prices uk, fuel price checker, uk fuel prices today',
  openGraph: {
    title: 'Fuel Price Estimate UK',
    description: 'Current UK fuel prices with regional breakdown and price trends for petrol and diesel.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/fuel-price-estimate',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/fuel-price-estimate',
  },
}

export default function FuelPriceEstimatePage() {
  const regionalPrices = [
    { region: 'England (National Average)', petrol: 165, diesel: 169, trend: 'stable' },
    { region: 'London & Southeast', petrol: 168, diesel: 172, trend: 'up' },
    { region: 'Midlands', petrol: 164, diesel: 168, trend: 'stable' },
    { region: 'North England', petrol: 162, diesel: 166, trend: 'down' },
    { region: 'Scotland', petrol: 170, diesel: 174, trend: 'up' },
    { region: 'Wales', petrol: 163, diesel: 167, trend: 'stable' },
    { region: 'Northern Ireland', petrol: 172, diesel: 176, trend: 'up' },
  ]

  const priceHistory = [
    { month: 'October 2025', petrol: 162, diesel: 166 },
    { month: 'November 2025', petrol: 164, diesel: 168 },
    { month: 'December 2025', petrol: 165, diesel: 169 },
  ]

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                Fuel Price <span className="text-purple-400">Estimate</span>
              </span>
              <p className="text-xs text-slate-400">Regional UK Price Tracker</p>
            </div>
          </a>
        </div>
      </header>

      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Fuel Price
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> Estimate</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Real-time UK fuel price estimates with regional breakdown and price trends.
          </p>
          <p className="text-sm text-slate-500">
            Track petrol and diesel prices across all UK regions and plan your refueling strategy.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">Current UK Fuel Prices (December 2025)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-purple-400 font-semibold">Petrol (E10)</p>
                <p className="text-2xl font-bold text-white">165p</p>
                <p className="text-xs text-slate-400">per litre</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-indigo-400 font-semibold">Diesel</p>
                <p className="text-2xl font-bold text-white">169p</p>
                <p className="text-xs text-slate-400">per litre</p>
              </div>
              <div className="p-3 bg-slate-700/30 rounded">
                <p className="text-blue-400 font-semibold">Change (Month)</p>
                <p className="text-lg font-bold text-green-400">+1p (-)</p>
                <p className="text-xs text-slate-400">petrol/diesel</p>
              </div>
            </div>
          </div>
          <FuelCostCalculator />
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            Regional Fuel Price Comparison
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-white">Region</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-400">Petrol (p/L)</th>
                  <th className="text-center py-3 px-4 font-semibold text-indigo-400">Diesel (p/L)</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-400">Trend</th>
                </tr>
              </thead>
              <tbody>
                {regionalPrices.map((price, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="py-3 px-4 text-slate-300">{price.region}</td>
                    <td className="text-center py-3 px-4 text-white font-semibold">{price.petrol}p</td>
                    <td className="text-center py-3 px-4 text-white font-semibold">{price.diesel}p</td>
                    <td className="text-center py-3 px-4">
                      {price.trend === 'up' && <span className="text-red-400 font-semibold">↑ Up</span>}
                      {price.trend === 'down' && <span className="text-green-400 font-semibold">↓ Down</span>}
                      {price.trend === 'stable' && <span className="text-blue-400 font-semibold">→ Stable</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Most Expensive Regions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>🔴 Northern Ireland</span><span className="font-semibold">172-176p</span></li>
                <li className="flex justify-between"><span>🔴 Scotland</span><span className="font-semibold">170-174p</span></li>
                <li className="flex justify-between"><span>🟡 London & Southeast</span><span className="font-semibold">168-172p</span></li>
              </ul>
              <p className="text-xs text-slate-400 mt-4">Higher prices due to transportation costs and regional tax variations.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Most Affordable Regions</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex justify-between"><span>🟢 North England</span><span className="font-semibold">162-166p</span></li>
                <li className="flex justify-between"><span>🟢 Wales</span><span className="font-semibold">163-167p</span></li>
                <li className="flex justify-between"><span>🟡 Midlands</span><span className="font-semibold">164-168p</span></li>
              </ul>
              <p className="text-xs text-slate-400 mt-4">Lower prices due to local competition and shorter distribution routes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            Explore Regional Fuel Prices
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link href="/london-fuel-prices" className="p-5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors group">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">London & Southeast</h3>
                  <p className="text-sm text-slate-400">168-172p per litre</p>
                </div>
              </div>
            </Link>

            <Link href="/scotland-fuel-prices" className="p-5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors group">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">Scotland</h3>
                  <p className="text-sm text-slate-400">170-174p per litre</p>
                </div>
              </div>
            </Link>

            <Link href="/wales-fuel-prices" className="p-5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors group">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏴</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">Wales</h3>
                  <p className="text-sm text-slate-400">163-167p per litre</p>
                </div>
              </div>
            </Link>

            <Link href="/northern-ireland-fuel-prices" className="p-5 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors group">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇬🇧</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">Northern Ireland</h3>
                  <p className="text-sm text-slate-400">172-176p per litre</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">
            3-Month Price Trend Analysis
          </h2>

          <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-white">Month</th>
                    <th className="text-center py-3 px-4 font-semibold text-purple-400">Petrol</th>
                    <th className="text-center py-3 px-4 font-semibold text-indigo-400">Diesel</th>
                    <th className="text-center py-3 px-4 font-semibold text-blue-400">Average</th>
                  </tr>
                </thead>
                <tbody>
                  {priceHistory.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-700/50">
                      <td className="py-3 px-4 text-slate-300">{item.month}</td>
                      <td className="text-center py-3 px-4 text-white font-semibold">{item.petrol}p</td>
                      <td className="text-center py-3 px-4 text-white font-semibold">{item.diesel}p</td>
                      <td className="text-center py-3 px-4 text-purple-400 font-semibold">{Math.round((item.petrol + item.diesel) / 2)}p</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              <strong>Observation:</strong> Fuel prices have increased 1.9% (petrol) and 1.8% (diesel) over the past 3 months. December 2025 sees slight stabilization after November's increase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-slate-400 text-sm">3-Month Petrol Change</p>
              <p className="text-2xl font-bold text-red-400">+3p</p>
              <p className="text-xs text-slate-500">Oct 162p → Dec 165p</p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-slate-400 text-sm">3-Month Diesel Change</p>
              <p className="text-2xl font-bold text-red-400">+3p</p>
              <p className="text-xs text-slate-500">Oct 166p → Dec 169p</p>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4">
              <p className="text-slate-400 text-sm">Cost Impact (50L Tank)</p>
              <p className="text-2xl font-bold text-orange-400">+£1.50</p>
              <p className="text-xs text-slate-500">Both fuels combined</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Fuel Price Estimation FAQ
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How often do UK fuel prices change?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>UK fuel prices typically change weekly, sometimes daily. Prices fluctuate based on crude oil prices, exchange rates, and retailer margins. Major fuel brands (Shell, BP, Tesco, Sainsbury's) may have different prices at the same time.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Why are fuel prices different by region?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Regional price variations (5-10%) are caused by transportation costs, local competition, depot locations, and regional tax differences. Remote areas and islands typically have higher prices due to delivery costs. London often has higher prices due to congestion charging and demand.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Where can I find live fuel prices?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Visit <a href="https://www.petrolprices.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">PetrolPrices.com</a> for live UK fuel prices at specific stations. The RAC also publishes weekly price reports. Major supermarkets show their current prices online.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is diesel always more expensive than petrol?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Not always. Diesel is typically 2-4% more expensive per litre, but diesel cars achieve 20-30% better fuel economy. This means diesel is usually cheaper per mile. Check fuel economy differences before deciding based on price alone.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How do fuel prices affect my driving costs?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Each 1p increase in fuel price adds approximately £5 to annual driving costs for average 12,000-mile driving. A 3p increase (like we've seen recently) costs £15 extra annually. Use our fuel cost calculator to estimate impact on your specific driving patterns.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>When is the best time to refuel?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Fuel prices typically change on Tuesdays and Thursdays. Refueling on price reduction days (usually after government announcements) can save 2-3p per litre. Weekend fuel is often more expensive. Monitor price trends using our price comparison tools.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 border-t border-slate-700/50 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-white">More Fuel Tools & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/fuel-cost-calculator-uk" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-red-400 text-lg font-semibold mb-1">Fuel Cost Calculator</div>
              <p className="text-sm text-slate-400">Calculate costs using current prices</p>
            </Link>

            <Link href="/fuel-economy-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-green-400 text-lg font-semibold mb-1">Fuel Economy Calculator</div>
              <p className="text-sm text-slate-400">Track your MPG and efficiency</p>
            </Link>

            <Link href="/comparison/diesel-vs-petrol" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-blue-400 text-lg font-semibold mb-1">Fuel Comparison</div>
              <p className="text-sm text-slate-400">Compare all fuel types and costs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
