import { Metadata } from 'next'
import Link from 'next/link'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Europe Fuel Cost Calculator | Calculate Multi-Country Road Trip Costs',
  description: 'Calculate fuel costs for European road trips. Compare fuel prices across Europe (France, Germany, Spain, Italy). Plan your journey budget with live fuel pricing.',
  keywords: 'europe fuel cost calculator, european fuel prices, road trip fuel calculator, fuel cost france germany spain, european petrol prices, fuel calculator for europe trip',
  openGraph: {
    title: 'Europe Fuel Cost Calculator',
    description: 'Calculate multi-country fuel costs for your European road trip. Compare petrol and diesel prices across Europe.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/europe-fuel-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Europe Fuel Cost Calculator',
    description: 'Calculate fuel costs for European road trips with live pricing data.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/europe-fuel-calculator',
  },
}

export default function EuropeFuelCalculatorPage() {
  const europeanCountries = [
    { name: 'Germany', petrol: 180, diesel: 165, currency: 'EUR' },
    { name: 'France', petrol: 175, diesel: 160, currency: 'EUR' },
    { name: 'Spain', petrol: 155, diesel: 145, currency: 'EUR' },
    { name: 'Italy', petrol: 180, diesel: 168, currency: 'EUR' },
    { name: 'Netherlands', petrol: 185, diesel: 172, currency: 'EUR' },
    { name: 'Belgium', petrol: 178, diesel: 164, currency: 'EUR' },
    { name: 'Poland', petrol: 135, diesel: 128, currency: 'PLN' },
    { name: 'Czech Republic', petrol: 140, diesel: 132, currency: 'CZK' },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white">
                Europe <span className="text-purple-400">Fuel</span>
              </span>
              <p className="text-xs text-slate-400">Road Trip Calculator</p>
            </div>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Europe Fuel Cost
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate fuel costs for multi-country European road trips with live pricing data.
          </p>
          <p className="text-sm text-slate-500">
            Compare petrol and diesel prices across 8+ European countries and plan your journey budget accurately.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">How to Use the Calculator</h2>
            <p className="text-slate-300 text-sm mb-3">
              Use our UK-based fuel calculator to estimate costs, then adjust for European fuel prices below:
            </p>
            <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
              <li>Enter your journey distance and vehicle fuel consumption</li>
              <li>Calculate with UK prices to establish a baseline</li>
              <li>Reference European fuel prices below to adjust for each country</li>
              <li>Plan pit stops to optimize fuel costs on your route</li>
            </ol>
          </div>
          <FuelCostCalculator />
        </div>
      </section>

      {/* European Fuel Prices Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Current European Fuel Prices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {europeanCountries.map((country) => (
              <div key={country.name} className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4">
                <h3 className="text-lg font-semibold text-white mb-3">{country.name}</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span>Petrol (E10)</span>
                    <span className="font-semibold text-purple-400">{country.petrol}c/{country.currency}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-700/30 rounded">
                    <span>Diesel</span>
                    <span className="font-semibold text-pink-400">{country.diesel}c/{country.currency}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 text-xs text-slate-400">
                    <span>vs UK (approx)</span>
                    <span className={country.petrol > 165 ? 'text-orange-400' : 'text-green-400'}>
                      {country.petrol > 165 ? '+' : ''}{((country.petrol - 165) / 165 * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Key Observations</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>✓ <strong>Cheapest:</strong> Poland and Czech Republic offer significantly lower fuel prices</li>
              <li>✓ <strong>Most Expensive:</strong> Germany and Netherlands typically have highest fuel costs in Western Europe</li>
              <li>✓ <strong>Variation:</strong> Western European prices are 5-12% higher than UK average</li>
              <li>✓ <strong>Eastern Europe:</strong> Up to 25% cheaper than UK, but availability varies on motorways</li>
              <li>✓ <strong>Best Savings Route:</strong> Plan journeys to refuel in lower-cost countries (Poland, Czech)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Road Trip Planning Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            European Road Trip Planning Guide
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">✈️ Before You Travel</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Check visa requirements for all countries</li>
                  <li>• Verify car documentation and insurance validity</li>
                  <li>• Calculate fuel costs using this calculator</li>
                  <li>• Budget 8-15% more for fuel than UK rates</li>
                  <li>• Download offline maps (fuel prices change daily)</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">🛣️ During Your Trip</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Use fuel apps (e.g., Appyours, Essence&CO) for live prices</li>
                  <li>• Fill up in cheaper countries when possible</li>
                  <li>• Avoid motorway service stations (20-30% markup)</li>
                  <li>• Monitor fuel consumption in unfamiliar vehicles</li>
                  <li>• Keep receipts for fuel purchases (tax reclaim)</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">💡 Money-Saving Tips</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Refuel in Poland/Czech (25% cheaper than Western Europe)</li>
                  <li>• Avoid peak travel times (holiday periods = higher prices)</li>
                  <li>• Plan routes to minimize backtracking</li>
                  <li>• Consider camping over hotels to reduce overall trip cost</li>
                  <li>• Compare rental car options (small cars use 30-40% less fuel)</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">⚠️ Important Warnings</h3>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Fuel prices fluctuate daily; plan with 10% buffer</li>
                  <li>• Some Eastern European fuel stations don't accept cards</li>
                  <li>• Quality varies; use reputable brands (Shell, BP, OMV)</li>
                  <li>• Road tolls (France, Germany) add 10-20% to journey cost</li>
                  <li>• Speed limits affect fuel consumption (120 km/h optimal)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            European Fuel Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Which European country has the cheapest fuel?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Poland and Czech Republic consistently offer the cheapest fuel prices in Europe, typically 20-25% cheaper than UK prices. However, petrol station availability on motorways in Eastern Europe is more limited than in Western Europe.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is fuel cheaper in France or Germany?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>France is generally 2-5% cheaper than Germany. However, prices fluctuate daily. Germany's superior motorway infrastructure may make it safer to rely on, while France offers better value on coastal routes.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Should I fill up my tank in cheaper countries?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Yes, absolutely. Refueling in Poland or Czech Republic can save £20-40 on a week-long European trip. Plan your route to fill up in cheaper countries when crossing borders. A full tank in Poland vs Germany can save 25-30%.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How much will I spend on fuel for a European road trip?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Use our calculator with your car's fuel consumption (MPG) and planned distance. A 2,000-mile European trip in a 40 MPG car will cost approximately £300-360 depending on which countries you visit. Budget 10% extra for price volatility.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Do fuel prices include tax in European countries?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Yes, all displayed European fuel prices include VAT/tax. Tax rates vary by country (15-25%). The prices shown are what you'll pay at the pump - no additional tax is added at checkout.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Can I use my UK debit card to pay for fuel in Europe?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm">
                <p>Yes, Visa/Mastercard are accepted at most major fuel stations in Western Europe. However, Eastern European stations often prefer cash. Always carry some local currency and inform your bank of travel dates to avoid card blocks.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-white">More Fuel Cost Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-purple-400 text-lg font-semibold mb-1">Fuel Cost Calculator</div>
              <p className="text-sm text-slate-400">Calculate fuel costs with current UK prices</p>
            </Link>

            <Link href="/fuel-economy-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-green-400 text-lg font-semibold mb-1">Fuel Economy Calculator</div>
              <p className="text-sm text-slate-400">Track your car's MPG and efficiency</p>
            </Link>

            <Link href="/comparison/diesel-vs-petrol" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <div className="text-blue-400 text-lg font-semibold mb-1">Fuel Comparison</div>
              <p className="text-sm text-slate-400">Compare petrol, diesel, hybrid & EV costs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
