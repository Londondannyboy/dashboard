import { Metadata } from 'next'
import { GasBillCalculator } from '../../components/GasBillCalculator'

export const metadata: Metadata = {
  title: 'Gas Bill Calculator UK | Calculate Your Gas Bill from Meter Readings',
  description: 'Free UK gas bill calculator. Calculate your gas bill from meter readings instantly. Convert cubic metres to kWh and estimate your gas costs with current energy prices. Updated with UK Energy Price Cap rates.',
  keywords: 'gas bill calculator, gas bill calculator uk, calculate gas bill, british gas bill calculator, gas meter reading calculator, calculate my gas bill, gas bill estimator, estimate gas bill, uk gas bill calculator, gas bill calculation, how to calculate gas bill, gas metre reading calculator, calculate your gas bill',
  openGraph: {
    title: 'Gas Bill Calculator UK | Calculate Your Gas Bill from Meter Readings',
    description: 'Calculate your UK gas bill from meter readings. Free gas bill calculator with current energy prices.',
    type: 'website',
    url: 'https://gasratecalculator.quest/gas-bill-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Bill Calculator UK',
    description: 'Calculate your UK gas bill from meter readings instantly.',
  },
  alternates: {
    canonical: 'https://gasratecalculator.quest/gas-bill-calculator',
  },
}

export default function GasBillCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Gas Bill <span className="text-emerald-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Gas Cost Calculator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Gas Rate Calculator</a>
              <a href="/gas-cost-calculator" className="text-slate-300 hover:text-white transition-colors">Cost Estimator</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Gas Bill Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Free <strong>UK gas bill calculator</strong> to calculate your gas bill from meter readings. Convert your gas usage from cubic metres to kWh and estimate your gas costs with current energy prices.
          </p>
          <p className="text-sm text-slate-500">
            Updated with UK Energy Price Cap rates. Includes 5% VAT on domestic energy.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <GasBillCalculator />
      </section>

      {/* How Gas Bills Work Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How Your Gas Bill is Calculated
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Meter Reading Difference</h3>
              <p className="text-sm text-slate-400">
                Your gas meter measures usage in cubic metres (m³). The difference between your current and previous reading shows how much gas you've used.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Convert to kWh</h3>
              <p className="text-sm text-slate-400">
                Cubic metres are converted to kilowatt hours (kWh) using the formula: m³ × 1.02264 (correction factor) × 39.5 (calorific value) ÷ 3.6
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Apply Unit Rate</h3>
              <p className="text-sm text-slate-400">
                The kWh figure is multiplied by your unit rate (in pence per kWh) to calculate your gas usage cost. Check your bill for your exact rate.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-emerald-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Add Standing Charge + VAT</h3>
              <p className="text-sm text-slate-400">
                The daily standing charge is added for each day in the billing period. Finally, 5% VAT is applied to domestic energy bills.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">The Gas Bill Formula</h3>
            <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-emerald-300">
              <p>kWh = (Current Reading - Previous Reading) × 1.02264 × 39.5 ÷ 3.6</p>
              <p className="mt-2">Unit Cost = kWh × Unit Rate (p/kWh) ÷ 100</p>
              <p className="mt-2">Standing Charge = Days × Daily Charge (p/day) ÷ 100</p>
              <p className="mt-2">Total = (Unit Cost + Standing Charge) × 1.05 (VAT)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Average Usage Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Average UK Gas Usage
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Compare your gas usage to typical UK households
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-slate-400 mb-2">Low Usage</p>
              <p className="text-3xl font-bold text-emerald-400">8,000 kWh</p>
              <p className="text-sm text-slate-500 mt-2">1-2 bedroom flat</p>
              <p className="text-xs text-slate-600 mt-1">~£620/year</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-6 border border-emerald-500/30 text-center">
              <p className="text-emerald-400 mb-2">Medium Usage</p>
              <p className="text-3xl font-bold text-white">12,000 kWh</p>
              <p className="text-sm text-slate-400 mt-2">2-3 bedroom house</p>
              <p className="text-xs text-slate-500 mt-1">~£910/year</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <p className="text-slate-400 mb-2">High Usage</p>
              <p className="text-3xl font-bold text-emerald-400">17,000 kWh</p>
              <p className="text-sm text-slate-500 mt-2">4+ bedroom house</p>
              <p className="text-xs text-slate-600 mt-1">~£1,270/year</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Gas Bill Calculator - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my gas bill from meter readings?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your gas bill: (1) Take your current meter reading and subtract your previous reading to get the cubic metres used, (2) Convert to kWh by multiplying by 1.02264 × 39.5 ÷ 3.6, (3) Multiply kWh by your unit rate, (4) Add your daily standing charge × number of days, (5) Add 5% VAT. Our gas bill calculator does all this automatically.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the current UK gas price per kWh?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Under the UK Energy Price Cap, the current gas unit rate is approximately 6.24p per kWh, with a daily standing charge of around 31.66p. These rates are reviewed quarterly by Ofgem. Your actual rates may differ depending on your tariff and supplier - check your bill or energy account for exact figures.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I convert gas meter reading to kWh?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To convert gas from cubic metres (m³) to kWh: Multiply your usage in m³ by the volume correction factor (1.02264), then multiply by the calorific value (typically 39.5 MJ/m³), and divide by 3.6. The formula is: kWh = m³ × 1.02264 × 39.5 ÷ 3.6. This gives approximately 11.19 kWh per cubic metre.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the standing charge on gas bills?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The standing charge is a fixed daily fee that covers the cost of supplying gas to your property, maintaining the gas network, and meter reading costs. You pay this regardless of how much gas you use. Under the Energy Price Cap, the standing charge is around 31.66p per day (approximately £9.50 per month or £115 per year).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is my gas bill so high?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                High gas bills can be caused by: inefficient heating system or old boiler, poor home insulation, leaving heating on when not needed, heating unused rooms, incorrect thermostat settings, or an estimated bill being higher than actual usage. Check your meter readings match your bill and consider getting your boiler serviced annually for efficiency.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the calorific value used in gas calculations?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The calorific value (CV) measures the energy content of gas per cubic metre. UK gas typically has a CV of around 39.5 MJ/m³, though it varies slightly (between 37.5-43 MJ/m³) depending on the gas composition. Your actual CV is shown on your gas bill. This calculator uses 39.5 as a standard average.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does the average UK household spend on gas?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Based on Ofgem's typical domestic consumption values, an average UK household uses around 12,000 kWh of gas per year. At current Energy Price Cap rates (6.24p/kWh unit rate + 31.66p/day standing charge + 5% VAT), this works out to approximately £900-950 per year, or around £75-80 per month.
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

            <a href="/gas-cost-calculator" className="bg-slate-800/50 rounded-xl p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400">Gas Cost Calculator</h3>
              <p className="text-sm text-slate-400">
                Estimate your gas costs based on usage. Quick estimates for budgeting.
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
              <h4 className="text-white font-semibold mb-3">Gas Bill Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free gas bill calculator to work out your gas costs from meter readings. Updated with current UK energy prices.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Our Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-emerald-400">Gas Rate Calculator</a></li>
                <li><a href="/gas-bill-calculator" className="hover:text-emerald-400">Gas Bill Calculator</a></li>
                <li><a href="/gas-cost-calculator" className="hover:text-emerald-400">Gas Cost Calculator</a></li>
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
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Ofgem
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Gas Bill Calculator UK - Calculate your gas bill from meter readings
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
