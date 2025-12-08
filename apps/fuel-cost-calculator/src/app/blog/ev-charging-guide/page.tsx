import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete EV Charging Guide 2025: Types, Costs & Best Practices for UK Drivers',
  description: 'Comprehensive guide to EV charging in the UK. Learn about charging types, networks, costs, home installation, and best practices for electric vehicle owners.',
  keywords: 'ev charging guide, electric vehicle charging, EV charging costs, home charging installation, rapid charging, public charging networks uk',
}

export default function EVChargingGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">⚡</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  EV <span className="text-green-400">Guide</span>
                </span>
                <p className="text-xs text-slate-400">Charging & Cost Guide</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="min-h-screen">
        {/* Hero */}
        <section className="py-12 sm:py-16 px-4 border-b border-slate-700/50">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Complete EV Charging Guide 2025: Everything UK Drivers Need to Know
            </h1>
            <p className="text-xl text-slate-300">
              Master electric vehicle charging with our comprehensive guide covering charging types, costs, home installation, and public network strategies.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Charging Types */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Three Main EV Charging Types</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-800/30 border-l-4 border-blue-500 p-4 rounded">
                  <h3 className="text-white font-semibold mb-2">Level 1: Slow Charging (3-4 kW)</h3>
                  <p className="text-slate-300 text-sm mb-2">Standard household outlet charging</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Time: 8-12 hours per full charge</li>
                    <li>• Cost: £2-3 per charge (electricity only)</li>
                    <li>• Best for: Overnight home charging</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 border-l-4 border-green-500 p-4 rounded">
                  <h3 className="text-white font-semibold mb-2">Level 2: Fast Charging (7-22 kW)</h3>
                  <p className="text-slate-300 text-sm mb-2">Wallbox installation or public charging stations</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Time: 2-8 hours per full charge</li>
                    <li>• Cost: Home installation £500-1,500</li>
                    <li>• Best for: Daily home charging, convenient range</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 border-l-4 border-purple-500 p-4 rounded">
                  <h3 className="text-white font-semibold mb-2">Level 3: Rapid/Ultra-Rapid (50+ kW)</h3>
                  <p className="text-slate-300 text-sm mb-2">Public rapid charging networks</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Time: 20-30 minutes to 80% charge</li>
                    <li>• Cost: £5-15 per charge at public networks</li>
                    <li>• Best for: Long journeys, motorway travel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Home Charging */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Installing Home EV Charging</h2>
              <p className="text-slate-300 mb-4">Home charging is the most convenient and cost-effective solution for daily use. Here's what you need to know:</p>

              <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded mb-6">
                <h3 className="text-white font-semibold mb-2">Installation Steps</h3>
                <ol className="text-slate-300 text-sm space-y-2 list-decimal list-inside">
                  <li>Check if your property is eligible (off-street parking required)</li>
                  <li>Get quotes from certified installers (£500-1,500 typical cost)</li>
                  <li>Apply for <a href="https://www.gov.uk/guidance/electric-vehicle-smart-charge-points-grant" className="text-blue-400 hover:text-blue-300 underline" target="_blank">government grants</a> (if available, up to £350)</li>
                  <li>Professional installation takes 1-3 days</li>
                  <li>Monthly electricity cost: £20-50 for full charging</li>
                </ol>
              </div>
            </section>

            {/* Public Networks */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Public Charging Networks in the UK</h2>
              <p className="text-slate-300 mb-4">
                The UK has a growing network of public charging stations. Major networks include:
              </p>
              <ul className="text-slate-300 space-y-2 mb-6">
                <li>✓ <a href="https://www.nationalchargepoint.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">National Charge Point</a> - Over 5,000 charging locations nationwide</li>
                <li>✓ <a href="https://www.instavolts.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Instavolt</a> - Rapid charging on motorways and major routes</li>
                <li>✓ <a href="https://www.tesla.com/en_GB/supercharger" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Tesla Supercharger</a> - Exclusive network expanding to non-Tesla vehicles</li>
                <li>✓ <a href="https://www.chargeplace.london/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">ChargePlace London</a> - UK's largest network with 10,000+ points</li>
              </ul>

              <p className="text-slate-300 mb-4">
                Use <a href="https://www.zap-map.com/" className="text-blue-400 hover:text-blue-300 underline" target="_blank">Zap-Map</a> to find nearby charging stations and plan routes with charging stops.
              </p>
            </section>

            {/* Charging Costs */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">EV Charging Cost Comparison</h2>
              <p className="text-slate-300 mb-4">Compare EV charging costs to traditional fuel:</p>

              <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-800 border-b border-slate-700">
                      <th className="px-4 py-3 text-left text-white font-semibold">Charging Type</th>
                      <th className="px-4 py-3 text-center text-white font-semibold">Cost per 100 miles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Home Charging (Level 2)</td>
                      <td className="px-4 py-3 text-center text-green-400 font-semibold">£1.50-2.00</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Public Standard Charging</td>
                      <td className="px-4 py-3 text-center text-slate-300 font-semibold">£2.50-3.00</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="px-4 py-3 text-slate-300">Rapid Charging</td>
                      <td className="px-4 py-3 text-center text-orange-400 font-semibold">£3.50-4.50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-slate-300">Petrol Car (comparison)</td>
                      <td className="px-4 py-3 text-center text-red-400 font-semibold">£10-12</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-300">
                Learn more about <Link href="/comparison/hybrid-vs-ev" className="text-blue-400 hover:text-blue-300 underline">EV vs hybrid costs</Link> to make the right choice for your situation.
              </p>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">EV Charging Best Practices</h2>
              <ul className="text-slate-300 space-y-3 mb-6">
                <li>✓ <strong>Charge at home overnight:</strong> Cheapest and most convenient option</li>
                <li>✓ <strong>Avoid rapid charging daily:</strong> Reduces battery lifespan; use for long trips only</li>
                <li>✓ <strong>Plan long journeys:</strong> Use Zap-Map to identify charging stops</li>
                <li>✓ <strong>Charge to 80% routinely:</strong> Optimal for battery health</li>
                <li>✓ <strong>Use off-peak tariffs:</strong> Some suppliers offer cheaper evening/overnight rates</li>
                <li>✓ <strong>Consider solar panels:</strong> Reduce charging costs further with renewable energy</li>
              </ul>
            </section>

            {/* CTA */}
            <div className="mt-12 p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-white mb-3">Calculate Your EV Charging Costs</h3>
              <p className="text-slate-300 mb-4">
                Compare EV charging costs with traditional fuel using our calculator.
              </p>
              <Link href="/ev-charging-calculator" className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">
                EV Cost Calculator
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <section className="py-12 px-4 border-t border-slate-700/50 mt-12 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">More EV Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/comparison/hybrid-vs-ev" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">Hybrid vs EV</h4>
              <p className="text-sm text-slate-400">Compare vehicle types</p>
            </Link>
            <Link href="/ev-charging-calculator" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors text-left">
              <h4 className="font-semibold text-white mb-1">EV Calculator</h4>
              <p className="text-sm text-slate-400">Calculate EV costs</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
