import { Metadata } from 'next'
import { GasCostCalculator } from '../../components/GasCostCalculator'

export const metadata: Metadata = {
  title: 'Gas Cost Calculator UK | Estimate Your Gas Costs',
  description: 'Free UK gas cost calculator. Estimate your gas costs based on usage. Calculate daily, weekly, monthly and yearly gas expenses with current energy prices. Gas cost estimator with UK Energy Price Cap rates.',
  keywords: 'gas cost calculator uk, gas cost estimator, gas calculator cost, gas price calculator, cost of gas calculator, gas usage calculator, calculate gas cost, gas costs calculator, gas price calculator uk, gas calculator uk, gas consumption calculator uk, gas energy calculator',
  openGraph: {
    title: 'Gas Cost Calculator UK | Estimate Your Gas Costs',
    description: 'Estimate your UK gas costs based on usage. Free gas cost calculator with current energy prices.',
    type: 'website',
    url: 'https://gasratecalculator.quest/gas-cost-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Cost Calculator UK',
    description: 'Estimate your UK gas costs with our free calculator.',
  },
  alternates: {
    canonical: 'https://gasratecalculator.quest/gas-cost-calculator',
  },
}

export default function GasCostCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Gas Cost <span className="text-cyan-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Gas Cost Estimator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Gas Rate Calculator</a>
              <a href="/gas-bill-calculator" className="text-slate-300 hover:text-white transition-colors">Bill Calculator</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Gas Cost Calculator
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Free <strong>UK gas cost calculator</strong> to estimate your gas expenses. Enter your gas usage to see daily, weekly, monthly and yearly costs with current energy prices.
          </p>
          <p className="text-sm text-slate-500">
            Updated with UK Energy Price Cap rates. Quick estimates for budgeting your energy costs.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <GasCostCalculator />
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tips to Reduce Your Gas Costs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Turn Down the Thermostat</h3>
              <p className="text-sm text-slate-400">
                Reducing your thermostat by just 1°C can cut your heating bill by up to 10%. Aim for 18-21°C for living areas.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Use Heating Timers</h3>
              <p className="text-sm text-slate-400">
                Programme your heating to come on 30 minutes before you wake up and turn off 30 minutes before bed. Only heat when you need it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Improve Insulation</h3>
              <p className="text-sm text-slate-400">
                Loft insulation, cavity wall insulation, and draught-proofing can significantly reduce heat loss and lower your gas usage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Service Your Boiler</h3>
              <p className="text-sm text-slate-400">
                Annual boiler servicing keeps it running efficiently. An inefficient boiler can waste significant amounts of gas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Price Cap Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            UK Energy Price Cap Rates
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            The Energy Price Cap is set by Ofgem and reviewed quarterly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Gas Unit Rate</h3>
              <p className="text-4xl font-bold text-white mb-2">6.24p</p>
              <p className="text-slate-400">per kWh</p>
              <p className="text-xs text-slate-500 mt-4">
                This is the price you pay for each kilowatt hour of gas you use
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Standing Charge</h3>
              <p className="text-4xl font-bold text-white mb-2">31.66p</p>
              <p className="text-slate-400">per day</p>
              <p className="text-xs text-slate-500 mt-4">
                Fixed daily charge regardless of how much gas you use
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <p className="text-sm text-slate-400">
              <strong className="text-white">Note:</strong> The Energy Price Cap sets the maximum rates suppliers can charge for default tariffs. Your actual rates may be lower if you're on a fixed deal. Rates shown are approximate and subject to quarterly changes by Ofgem. All domestic energy bills include 5% VAT.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Gas Cost Calculator - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does gas cost per kWh in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Under the current UK Energy Price Cap, gas costs approximately 6.24p per kWh for households on standard variable tariffs. This rate is reviewed and adjusted quarterly by Ofgem. Fixed rate tariffs may offer different rates - check with your supplier for your exact unit rate.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I estimate my gas costs?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To estimate gas costs: (1) Find your annual gas usage in kWh from a recent bill or use average figures (8,000-17,000 kWh), (2) Multiply by the unit rate (6.24p/kWh), (3) Add the annual standing charge (365 × 31.66p = £115.56), (4) Add 5% VAT. Our gas cost calculator does this automatically.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is typical gas usage for a UK home?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Ofgem classifies typical domestic gas consumption as: Low usage - 8,000 kWh/year (small flat, 1-2 people), Medium usage - 12,000 kWh/year (average home, 2-3 bedrooms), High usage - 17,000 kWh/year (large house, 4+ bedrooms). Your usage depends on property size, insulation, occupancy, and heating habits.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much should I budget for gas per month?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Based on current Energy Price Cap rates and typical usage: Low usage households (8,000 kWh/yr) should budget around £52/month, Medium usage (12,000 kWh/yr) around £76/month, High usage (17,000 kWh/yr) around £106/month. These are averages - winter months will be higher and summer months lower.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why do gas prices change?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Gas prices are influenced by wholesale energy costs, which fluctuate based on global supply and demand, geopolitical events, weather conditions, and storage levels. In the UK, Ofgem reviews the Energy Price Cap every quarter (January, April, July, October) and adjusts rates based on wholesale costs.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is gas or electricity cheaper for heating?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Gas is currently much cheaper than electricity for heating. At approximately 6.24p/kWh for gas versus 24.50p/kWh for electricity, gas costs about 4 times less per unit of energy. However, heat pumps can be 3-4 times more efficient than gas boilers, which can make them cost-competitive despite higher electricity prices.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* More Calculators Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            More Gas Calculators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/" className="bg-slate-800/50 rounded-xl p-5 border border-orange-500/30 hover:border-orange-500/50 transition-all group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400">Gas Rate Calculator</h3>
              <p className="text-sm text-slate-400">
                Calculate gas appliance heat input in kW for gas engineers and commissioning.
              </p>
            </a>

            <a href="/gas-bill-calculator" className="bg-slate-800/50 rounded-xl p-5 border border-emerald-500/30 hover:border-emerald-500/50 transition-all group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-400">Gas Bill Calculator</h3>
              <p className="text-sm text-slate-400">
                Calculate your gas bill from meter readings with kWh conversion.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Gas Cost Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free gas cost estimator to budget your energy expenses. Updated with current UK energy prices.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Our Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-cyan-400">Gas Rate Calculator</a></li>
                <li><a href="/gas-bill-calculator" className="hover:text-cyan-400">Gas Bill Calculator</a></li>
                <li><a href="/gas-cost-calculator" className="hover:text-cyan-400">Gas Cost Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Energy Advice</h4>
              <p className="text-sm text-slate-400">
                For energy saving advice visit{' '}
                <a
                  href="https://www.ofgem.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Ofgem
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Gas Cost Calculator UK - Estimate your gas costs with current energy prices
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
