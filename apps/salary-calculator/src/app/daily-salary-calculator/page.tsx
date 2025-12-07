import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Daily Salary Calculator UK 2025 | Daily Rate Calculator',
  description: 'Free daily salary calculator UK. Calculate your daily rate from annual salary or convert daily rate to yearly earnings. See your daily take home pay after tax. Updated 2025/26.',
  keywords: 'daily salary calculator uk, daily rate calculator, daily wage calculator, day rate calculator uk, calculate daily salary, daily pay calculator, contractor daily rate calculator, daily earnings calculator',
  openGraph: {
    title: 'Daily Salary Calculator UK 2025 | Daily Rate Calculator',
    description: 'Calculate your daily salary and rate with our free UK daily rate calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/daily-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/daily-salary-calculator',
  },
}

export default function DailySalaryCalculatorPage() {
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
                <span className="text-xl font-bold text-white">Daily <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">Daily Rate Calculator UK</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
              <a href="/salary-converter" className="text-slate-300 hover:text-white transition-colors">Converter</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Daily Salary Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>daily salary calculator UK</strong> to work out your daily rate. Convert between annual salary and daily earnings, and see your take home pay per day.
          </p>
          <p className="text-sm text-slate-500">
            Perfect for contractors and freelancers calculating day rates.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* Daily Rate Conversion Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Daily Rate Conversions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Rate to Annual Salary</h3>
              <p className="text-sm text-slate-400 mb-4">
                Multiply your daily rate by the number of working days per year (typically 260 for 5 days/week, 52 weeks).
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm mb-2">Annual = Daily Rate × 260</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>£200/day = £52,000/year</p>
                  <p>£350/day = £91,000/year</p>
                  <p>£500/day = £130,000/year</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Annual Salary to Daily Rate</h3>
              <p className="text-sm text-slate-400 mb-4">
                Divide your annual salary by 260 working days to get your equivalent daily rate.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm mb-2">Daily Rate = Annual ÷ 260</p>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>£35,000/year = £135/day</p>
                  <p>£50,000/year = £192/day</p>
                  <p>£75,000/year = £288/day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Daily Rates Table */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Daily Rate Reference Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="text-left py-2 px-3">Daily Rate</th>
                    <th className="text-right py-2 px-3">Annual (260 days)</th>
                    <th className="text-right py-2 px-3">Monthly</th>
                    <th className="text-right py-2 px-3">Weekly</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£150</td>
                    <td className="text-right py-2 px-3">£39,000</td>
                    <td className="text-right py-2 px-3">£3,250</td>
                    <td className="text-right py-2 px-3">£750</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£200</td>
                    <td className="text-right py-2 px-3">£52,000</td>
                    <td className="text-right py-2 px-3">£4,333</td>
                    <td className="text-right py-2 px-3">£1,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£300</td>
                    <td className="text-right py-2 px-3">£78,000</td>
                    <td className="text-right py-2 px-3">£6,500</td>
                    <td className="text-right py-2 px-3">£1,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£400</td>
                    <td className="text-right py-2 px-3">£104,000</td>
                    <td className="text-right py-2 px-3">£8,667</td>
                    <td className="text-right py-2 px-3">£2,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£500</td>
                    <td className="text-right py-2 px-3">£130,000</td>
                    <td className="text-right py-2 px-3">£10,833</td>
                    <td className="text-right py-2 px-3">£2,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">£750</td>
                    <td className="text-right py-2 px-3">£195,000</td>
                    <td className="text-right py-2 px-3">£16,250</td>
                    <td className="text-right py-2 px-3">£3,750</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Daily Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my daily salary UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your daily salary, divide your annual salary by 260 (the standard number of working days in a year). For example, a £35,000 annual salary equals £135 per day. Our daily salary calculator shows this automatically along with your take home pay.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How many working days are in a year UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                There are typically 260 working days in a year in the UK (52 weeks × 5 days). This doesn't account for bank holidays (usually 8) or annual leave. If you work 4 days a week, you'd have 208 working days. Our calculator uses 260 days as the standard.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What daily rate equals £50,000 salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A £50,000 annual salary equals approximately £192 per day (£50,000 ÷ 260 days). However, contractors often charge more to account for the lack of benefits, pension contributions, and sick pay that permanent employees receive.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do contractors calculate their day rate?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Contractors typically add 20-40% to the equivalent permanent salary to account for: no holiday pay, no sick pay, no employer pension contributions, no benefits, admin costs, and gaps between contracts. So a £50k equivalent role might command a £250-350 day rate.
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
              <h4 className="text-white font-semibold mb-3">Salary Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-emerald-400">UK Salary Calculator</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Salary Calculator</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Daily salary calculator using 2025/26 tax rates. Visit{' '}
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for official guidance.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Daily Salary Calculator UK - Calculate your daily rate and take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
