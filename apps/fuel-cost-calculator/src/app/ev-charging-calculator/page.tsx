import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EV Charging Cost Calculator UK | Calculate Electric Car Costs',
  description: 'Free UK EV charging cost calculator. Calculate electric car charging costs, compare EV vs petrol costs, and estimate annual electricity expenses for electric vehicles.',
  keywords: 'EV charging cost calculator, electric car cost calculator uk, EV running costs, electric vehicle charging costs, EV electricity calculator',
  openGraph: {
    title: 'EV Charging Cost Calculator UK',
    description: 'Calculate your EV charging costs with our free UK electric car cost calculator.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/ev-charging-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EV Charging Cost Calculator UK',
    description: 'Free EV charging cost calculator for UK electric vehicle owners.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/ev-charging-calculator',
  },
}

export default function EVChargingCalculatorPage() {
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
                  EV <span className="text-green-400">Charging</span>
                </span>
                <p className="text-xs text-slate-400">Electric Vehicle Cost Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#ev-savings" className="text-slate-300 hover:text-white transition-colors">EV Savings</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            EV Charging Cost Calculator
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your <strong>electric vehicle charging costs</strong> accurately. Compare EV vs petrol/diesel costs and understand your electricity expenses.
          </p>
          <p className="text-sm text-slate-500">
            Free EV charging calculator for electric vehicle owners and those considering going electric.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-500/10 border-2 border-green-500/50 rounded-2xl p-8 text-center">
            <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-2">EV Charging Calculator Coming Soon</h2>
            <p className="text-slate-300 mb-6">
              We're developing a specialized EV charging cost calculator that accounts for electricity prices, charging efficiency, battery size, and different charging methods (home, workplace, public).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">⚡</div>
                <p className="text-sm text-slate-400">Electricity Rate Input</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">🔋</div>
                <p className="text-sm text-slate-400">Battery Size Calculator</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">📊</div>
                <p className="text-sm text-slate-400">EV vs Petrol Comparison</p>
              </div>
            </div>

            <p className="text-slate-400 mb-6">
              In the meantime, use our petrol and diesel calculators to compare costs with electric vehicles.
            </p>
            <a href="/petrol-expense-calculator" className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
              Compare with Petrol Costs
            </a>
          </div>
        </div>
      </section>

      {/* Benefits of EV Section */}
      <section id="ev-savings" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Consider an Electric Vehicle?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lower Running Costs</h3>
              <p className="text-sm text-slate-400">
                Electricity is typically 60-70% cheaper than petrol per mile. A full charge costs £2-4 depending on your local electricity rates.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Minimal Maintenance</h3>
              <p className="text-sm text-slate-400">
                EVs have no oil changes, fewer moving parts, and regenerative braking means brake pads last much longer. Service costs are 40% lower than petrol cars.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Government Incentives</h3>
              <p className="text-sm text-slate-400">
                Reduced road tax, potential grants, and HOV lane access in some areas. Lower company car tax for electric vehicles.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H7zm6 4v2m0 0v2m0-2h2m-2 0h-2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Environmental Benefits</h3>
              <p className="text-sm text-slate-400">
                Zero tailpipe emissions and potentially carbon-neutral if charged with renewable electricity. Lower environmental impact over vehicle lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            EV Charging - FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does it cost to charge an electric car in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Charging costs depend on: (1) Your electricity rate - typically 24-35p per kWh for home charging, (2) Battery size - most EVs use 50-100 kWh, (3) Charging efficiency - about 85-90% efficiency. A typical 60 kWh EV costs £12-18 for a full charge at home. Fast public charging costs 30-50p per kWh. Our EV calculator will help you estimate exact costs.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Are electric cars cheaper than petrol cars to run?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, significantly. EVs cost 60-70% less per mile than petrol cars. Electricity is cheaper than petrol, and EVs have lower maintenance (no oil changes, brake fluid, spark plugs). Over 5 years, an EV can save £3,000-5,000 in fuel and maintenance compared to petrol. However, higher purchase price can offset these savings depending on annual mileage.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between home and public EV charging costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Home charging is cheapest: (1) Cost per kWh is typically 24-35p, (2) Off-peak rates can be 15-20p per kWh if you have time-based pricing, (3) No network fees. Public rapid charging costs 30-50p per kWh due to network operator fees and faster delivery. AC public chargers cost 20-30p per kWh. For regular commuting, home charging is most economical.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How long does it take to charge an EV at home?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Home charging times: (1) Standard 3-pin socket - 24-30 hours for full charge (7 kW), (2) Fast 7kW wallbox - 8-12 hours for full charge, (3) 22kW charger - 4-6 hours for full charge. Most EV owners charge overnight using a 7kW wallbox, which adds 25-30 miles of range per hour. Fast public chargers add 200+ miles in 20-30 minutes.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I install a home EV charging point?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most EV owners can install home chargers: (1) You need off-street parking and a safe location for the charger, (2) Installation cost is typically £400-1,000 for a 7kW wallbox, (3) Government grants (OLEV) provided up to £500 towards installation, (4) Check your electrical supply can handle a 32A connection. Renters may face challenges but many landlords now support charger installation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Compare EV Costs with Other Fuels</h2>
          <p className="text-slate-400 mb-8">
            Use our fuel calculators to compare electric vehicle costs with petrol and diesel alternatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/petrol-expense-calculator" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Compare Petrol Costs
            </a>
            <a href="/diesel-calculator" className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
              Compare Diesel Costs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">EV Charging Calculator</h4>
              <p className="text-sm text-slate-400">
                Coming soon: Free UK EV charging cost calculator for comparing electric vehicle costs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Fuel Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-green-400">Home</a></li>
                <li><a href="/petrol-expense-calculator" className="hover:text-blue-400">Petrol Costs</a></li>
                <li><a href="/diesel-calculator" className="hover:text-orange-400">Diesel Costs</a></li>
                <li><a href="/journey-cost-calculator" className="hover:text-green-400">Journey Costs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/about" className="hover:text-green-400">About</a></li>
                <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
                <li><a href="/privacy" className="hover:text-green-400">Privacy</a></li>
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
