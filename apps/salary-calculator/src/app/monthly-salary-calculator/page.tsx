import { Metadata } from 'next'
import { MonthlySalaryCalculator } from '../../components/MonthlySalaryCalculator'

export const metadata: Metadata = {
  title: 'Monthly Salary Calculator UK 2025 | Calculate Monthly Take Home Pay',
  description: 'Free monthly salary calculator UK. Calculate your monthly take home pay after tax and NI. Convert monthly salary to annual or see net pay from gross. Updated 2025/26.',
  keywords: 'monthly salary calculator, monthly salary calculator uk, calculate monthly salary, monthly take home pay, monthly net salary, monthly wage calculator, monthly pay calculator, gross to net monthly',
  openGraph: {
    title: 'Monthly Salary Calculator UK 2025 | Calculate Monthly Take Home Pay',
    description: 'Calculate your monthly take home pay after tax with our free UK calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/monthly-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/monthly-salary-calculator',
  },
}

export default function MonthlySalaryCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Monthly <span className="text-violet-400">Calculator</span></span>
                <p className="text-xs text-slate-400">Monthly Take Home Pay</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual</a>
              <a href="/hourly-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Hourly</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Monthly Salary Calculator
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>monthly salary calculator</strong> to calculate your monthly take home pay after tax, NI, and pension deductions.
          </p>
          <p className="text-sm text-slate-500">
            Enter your gross monthly salary to see your net monthly pay instantly.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <MonthlySalaryCalculator />
      </section>

      {/* Monthly Salary Reference Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Monthly Salary to Annual Reference
          </h2>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3 px-3">Monthly Gross</th>
                  <th className="text-right py-3 px-3">Annual Salary</th>
                  <th className="text-right py-3 px-3">Monthly Net (approx)</th>
                  <th className="text-right py-3 px-3">Annual Net (approx)</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£2,000</td>
                  <td className="text-right py-3 px-3">£24,000</td>
                  <td className="text-right py-3 px-3">£1,703</td>
                  <td className="text-right py-3 px-3">£20,436</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£2,500</td>
                  <td className="text-right py-3 px-3">£30,000</td>
                  <td className="text-right py-3 px-3">£2,055</td>
                  <td className="text-right py-3 px-3">£24,660</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-violet-500/5">
                  <td className="py-3 px-3 font-medium text-violet-400">£3,000 (UK avg)</td>
                  <td className="text-right py-3 px-3">£36,000</td>
                  <td className="text-right py-3 px-3">£2,392</td>
                  <td className="text-right py-3 px-3">£28,710</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£3,500</td>
                  <td className="text-right py-3 px-3">£42,000</td>
                  <td className="text-right py-3 px-3">£2,722</td>
                  <td className="text-right py-3 px-3">£32,665</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£4,000</td>
                  <td className="text-right py-3 px-3">£48,000</td>
                  <td className="text-right py-3 px-3">£3,038</td>
                  <td className="text-right py-3 px-3">£36,460</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£5,000</td>
                  <td className="text-right py-3 px-3">£60,000</td>
                  <td className="text-right py-3 px-3">£3,618</td>
                  <td className="text-right py-3 px-3">£43,415</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£6,000</td>
                  <td className="text-right py-3 px-3">£72,000</td>
                  <td className="text-right py-3 px-3">£4,158</td>
                  <td className="text-right py-3 px-3">£49,900</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">£8,000</td>
                  <td className="text-right py-3 px-3">£96,000</td>
                  <td className="text-right py-3 px-3">£5,237</td>
                  <td className="text-right py-3 px-3">£62,850</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-4">
              Approximate values based on 5% pension contribution, no student loan, England/Wales tax rates.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Monthly Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my monthly salary from annual?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate monthly salary from annual, simply divide your annual salary by 12. For example, £36,000 annual salary ÷ 12 = £3,000 monthly gross salary. To find your monthly take home pay, you'll need to deduct tax, National Insurance, and pension contributions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the average monthly salary UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The average monthly salary in the UK is approximately £3,000 gross (based on a £36,000 annual salary). After tax and NI, this works out to around £2,392 take home pay per month. London salaries are typically higher, with an average around £4,000 monthly gross.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much tax do I pay on £3,000 a month?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                On £3,000 per month (£36,000 annual), you'd pay approximately £388 monthly in Income Tax and £172 monthly in National Insurance (2025/26 rates). That's a total of around £560 in monthly deductions before pension, leaving approximately £2,440 take home pay.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is £4,000 a month after tax UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                £4,000 per month (£48,000 annual) gives you approximately £3,038 monthly take home pay after tax and NI. This includes about £588 monthly Income Tax and £268 National Insurance. With a 5% pension contribution, your take home would be around £2,838.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is monthly salary gross or net?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                When job adverts quote a salary, it's almost always the gross (before tax) amount. Your gross monthly salary is what your employer pays you before any deductions. Net (or take home) salary is what you actually receive in your bank account after tax, NI, and pension deductions.
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
                <li><a href="/" className="hover:text-violet-400">UK Salary Calculator</a></li>
                <li><a href="/monthly-salary-calculator" className="hover:text-violet-400">Monthly Salary Calculator</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-violet-400">Annual Salary Calculator</a></li>
                <li><a href="/hourly-salary-calculator" className="hover:text-violet-400">Hourly Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/pro-rata-salary-calculator" className="hover:text-violet-400">Pro Rata Calculator</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-violet-400">Daily Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-violet-400">Salary Converter</a></li>
                <li><a href="/scotland-salary-calculator" className="hover:text-violet-400">Scotland Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Monthly salary calculator using 2025/26 UK tax rates. Visit{' '}
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">GOV.UK</a>
                {' '}for official tax information.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Monthly Salary Calculator UK - Calculate your monthly take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
