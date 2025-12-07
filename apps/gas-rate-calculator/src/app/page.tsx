import { Metadata } from 'next'
import { GasRateCalculator } from '../components/GasRateCalculator'

export const metadata: Metadata = {
  title: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
  description: 'Free UK gas rate calculator for gas engineers. Calculate gas appliance heat input in kW from meter readings or test dial. Essential tool for gas safe registered engineers. Supports metric and imperial measurements.',
  keywords: 'gas rate calculator, gas rate calculator uk, heat input calculator, gas appliance calculator, gas engineer calculator, gas safe calculator, kW calculator, gas consumption calculator, gas flow rate, burner pressure, gas meter calculator, test dial calculator',
  openGraph: {
    title: 'Gas Rate Calculator UK | Free Gas Appliance Heat Input Calculator',
    description: 'Calculate gas appliance heat input instantly. Free gas rate calculator for UK gas engineers.',
    type: 'website',
    url: 'https://gasratecalculator.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gas Rate Calculator UK',
    description: 'Calculate gas appliance heat input with our free gas rate calculator.',
  },
  alternates: {
    canonical: 'https://gasratecalculator.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center" role="img" aria-label="Gas Rate Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Gas Rate <span className="text-orange-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Heat Input Calculator</p>
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
            Gas Rate Calculator
            <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Free <strong>gas rate calculator</strong> for UK gas engineers. Calculate appliance heat input in kW from meter readings or test dial measurements. Essential for commissioning, servicing and fault finding.
          </p>
          <p className="text-sm text-slate-500">
            Supports both metric (m³) and imperial (cu ft) measurements. Gas Safe compliant calculations.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <GasRateCalculator />
      </section>

      {/* Formula Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Gas Rate Calculation Formulas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Metric Formula</h3>
              <p className="text-sm text-slate-400 mb-4">
                For meter reading method using cubic metres:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-orange-300">
                <p>Volume (m³) = End Reading - Start Reading</p>
                <p className="mt-2">Corrected Vol = Volume × 1.02264</p>
                <p className="mt-2">m³/h = (Corrected Vol ÷ Seconds) × 3600</p>
                <p className="mt-2">Gross kW = (m³/h × 39.5) ÷ 3.6</p>
                <p className="mt-2">Net kW = Gross kW ÷ 1.11</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Imperial Formula</h3>
              <p className="text-sm text-slate-400 mb-4">
                For test dial method using cubic feet:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-amber-300">
                <p>Volume (m³) = Test Dial (cu ft) × 0.0283168</p>
                <p className="mt-2">Corrected Vol = Volume × 1.02264</p>
                <p className="mt-2">m³/h = (Corrected Vol ÷ Seconds) × 3600</p>
                <p className="mt-2">Gross kW = (m³/h × 39.5) ÷ 3.6</p>
                <p className="mt-2">Net kW = Gross kW ÷ 1.11</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Key Values Used</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-slate-900/50 rounded-xl">
                <p className="text-slate-400 mb-1">Calorific Value (CV)</p>
                <p className="text-xl font-bold text-orange-400">39.5 MJ/m³</p>
                <p className="text-xs text-slate-500 mt-1">Typical UK natural gas</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl">
                <p className="text-slate-400 mb-1">Correction Factor</p>
                <p className="text-xl font-bold text-orange-400">1.02264</p>
                <p className="text-xs text-slate-500 mt-1">Volume correction for pressure/temperature</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl">
                <p className="text-slate-400 mb-1">Gross to Net Ratio</p>
                <p className="text-xl font-bold text-orange-400">1.11</p>
                <p className="text-xs text-slate-500 mt-1">Divide gross by 1.11 for net kW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Use the Gas Rate Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-4">Metric Method (Meter Reading)</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-400">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Turn off all other gas appliances</p>
                    <p className="text-sm text-slate-400">Ensure only the appliance you're testing is using gas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-400">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Note the start meter reading</p>
                    <p className="text-sm text-slate-400">Include all decimal places shown on the meter</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-400">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Turn on the appliance at full rate</p>
                    <p className="text-sm text-slate-400">Start the timer when the appliance fires up</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-400">4</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Wait at least 2 minutes</p>
                    <p className="text-sm text-slate-400">Longer timing periods give more accurate results</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-400">5</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Note the end reading and time</p>
                    <p className="text-sm text-slate-400">Enter both values into the calculator</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-4">Imperial Method (Test Dial)</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Turn off all other gas appliances</p>
                    <p className="text-sm text-slate-400">Ensure only the appliance you're testing is using gas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Identify the test dial size</p>
                    <p className="text-sm text-slate-400">Common sizes: ½, 1, 2, or 5 cubic feet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Turn on the appliance at full rate</p>
                    <p className="text-sm text-slate-400">Wait for the dial to reach a starting point</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">4</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Time one complete revolution</p>
                    <p className="text-sm text-slate-400">Start timing as the dial passes your reference point</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">5</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Enter the values</p>
                    <p className="text-sm text-slate-400">Select dial size and enter time in seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gross vs Net Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Gross vs Net kW Explained
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Understanding the difference between gross and net heat input is essential for gas engineers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Gross kW (Higher)</h3>
              <p className="text-slate-300 mb-4">
                Gross kW represents the total heat energy in the gas, including the latent heat contained in water vapour produced during combustion.
              </p>
              <ul className="text-sm text-slate-400 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Includes all heat energy in the fuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Used in gas rate calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Higher value than net</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-amber-400 mb-3">Net kW (Lower)</h3>
              <p className="text-slate-300 mb-4">
                Net kW is the usable heat after excluding the latent heat in water vapour. This is what appears on most appliance data plates.
              </p>
              <ul className="text-sm text-slate-400 space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compare this to the data plate rating</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Net = Gross ÷ 1.11</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard for UK appliance ratings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <h4 className="text-lg font-semibold text-white mb-3">Acceptable Tolerance</h4>
            <p className="text-slate-400">
              When comparing your calculated gas rate to the appliance data plate, a tolerance of <strong className="text-orange-400">±5%</strong> is generally acceptable. If the gas rate is outside this range, it may indicate issues with the gas supply pressure, burner injectors, or heat exchanger that require further investigation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Gas Rate Calculator - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is a gas rate calculator used for?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A gas rate calculator is used by gas engineers to determine the heat input of gas appliances in kilowatts (kW). This is essential for commissioning new appliances, servicing, and fault finding. By calculating the actual gas consumption and comparing it to the manufacturer's data plate, engineers can verify the appliance is operating correctly and safely within Gas Safe regulations.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate gas rate from meter readings?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate gas rate from meter readings: (1) Turn off all other gas appliances, (2) Note the meter start reading including decimals, (3) Turn on the appliance at full rate and start timing, (4) After at least 2 minutes, note the end reading and time, (5) Enter these values into the calculator. The formula used is: Gas rate (m³/h) = (Volume difference × Correction factor ÷ Time in seconds) × 3600, then converted to kW using the calorific value.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the difference between gross and net kW?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Gross kW includes all the heat energy in the gas, including latent heat in water vapour from combustion. Net kW excludes this latent heat and represents the usable heat output. Net kW is approximately 10% less than gross (divide by 1.11). Most UK appliance data plates show net kW ratings, so you should compare your calculated net kW with the data plate to verify correct operation.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What calorific value should I use?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This calculator uses 39.5 MJ/m³ as a typical calorific value for UK natural gas. The actual CV varies slightly depending on the gas composition and can be found on your gas bill or from your gas supplier. For most practical purposes, values between 38-40 MJ/m³ are used. The CV affects the accuracy of kW calculations but using 39.5 provides results accurate enough for commissioning and servicing purposes.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How long should I time the gas consumption?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                For meter reading method, a minimum of 2 minutes (120 seconds) is recommended. Longer timing periods provide more accurate results as they reduce the impact of reading errors. For the test dial method, time one complete revolution of the dial. Very fast dial speeds (under 30 seconds) may indicate high gas consumption, while very slow speeds may require longer observation times.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the correction factor for?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The correction factor (1.02264) adjusts the meter reading to account for temperature and pressure variations. Gas meters measure volume at actual conditions, but calculations need to be based on standard conditions. This correction factor normalises the volume to provide accurate heat input calculations regardless of ambient conditions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What if my gas rate is different from the data plate?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A tolerance of ±5% from the data plate rating is generally acceptable. If outside this range, investigate: (1) Gas supply pressure - check working and standing pressure, (2) Burner pressure - may need adjustment, (3) Injector size - verify correct injectors are fitted, (4) Heat exchanger - check for blockages or damage, (5) Other appliances - ensure all other gas appliances are off during the test. Always refer to manufacturer's instructions for specific guidance.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use this calculator for LPG appliances?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This calculator is designed for natural gas (methane) using a calorific value of 39.5 MJ/m³. LPG (propane/butane) has a different calorific value (approximately 93.2 MJ/m³ for propane and 121.7 MJ/m³ for butane). For LPG calculations, you would need to adjust the calorific value accordingly or use an LPG-specific calculator.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need to be Gas Safe registered to use this calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                While anyone can use this calculator for educational purposes or to check their own gas consumption, only Gas Safe registered engineers are legally permitted to work on gas appliances in the UK. If your gas rate check reveals a problem with your appliance, you must contact a Gas Safe registered engineer to investigate and rectify the issue. Working on gas appliances without proper qualification is illegal and dangerous.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is this gas rate calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This calculator uses standard UK gas industry formulas and values (CV of 39.5 MJ/m³, correction factor of 1.02264). Accuracy depends on: (1) Precision of your meter readings, (2) Accuracy of your timing, (3) Ensuring all other gas appliances are off, (4) The actual calorific value of your gas supply (which varies slightly). For commissioning and servicing purposes, this calculator provides sufficiently accurate results for practical use.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Gas Safe Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Gas Safe Registered Engineers
          </h2>
          <p className="text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            All gas work in the UK must be carried out by a Gas Safe registered engineer
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Legal Requirement</h3>
              <p className="text-sm text-slate-400">
                By law, all gas work must be done by Gas Safe registered engineers
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Check ID Cards</h3>
              <p className="text-sm text-slate-400">
                Always ask to see the engineer's Gas Safe ID card before work begins
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Find an Engineer</h3>
              <p className="text-sm text-slate-400">
                Search the Gas Safe Register online to find registered engineers
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.gassaferegister.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors"
            >
              Visit Gas Safe Register
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Gas Rate Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free gas rate calculator for UK gas engineers. Calculate gas appliance heat input in kW from meter readings or test dial measurements. Essential tool for commissioning, servicing and fault finding.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-orange-400">Gas Rate Calculator</a></li>
                <li><a href="#how-it-works" className="hover:text-orange-400">How It Works</a></li>
                <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Resources</h4>
              <p className="text-sm text-slate-400">
                For official gas safety guidance visit{' '}
                <a
                  href="https://www.gassaferegister.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Gas Safe Register
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Gas Rate Calculator UK - Free heat input calculator for gas engineers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
