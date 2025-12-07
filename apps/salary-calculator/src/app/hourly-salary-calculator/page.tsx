import { Metadata } from 'next'
import { HourlySalaryCalculator } from '../../components/HourlySalaryCalculator'

export const metadata: Metadata = {
  title: 'Hourly Salary Calculator UK 2025 | Hourly to Annual Converter',
  description: 'Free hourly salary calculator UK. Convert hourly rate to annual salary and see your take home pay. Calculate salary from hourly rate instantly. Updated 2025/26.',
  keywords: 'hourly salary calculator, hourly to salary calculator, salary calculator hourly rate, hourly rate calculator uk, convert hourly to annual salary, hourly wage to salary, hourly pay calculator, hourly rate to yearly salary',
  openGraph: {
    title: 'Hourly Salary Calculator UK 2025 | Hourly to Annual Converter',
    description: 'Convert your hourly rate to annual salary with our free UK calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/hourly-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/hourly-salary-calculator',
  },
}

export default function HourlySalaryCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Hourly <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">Hourly to Salary Converter</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/salary-converter" className="text-slate-300 hover:text-white transition-colors">Converter</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Hourly Salary Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>hourly salary calculator</strong> to convert your hourly rate to annual salary. See what you'll take home after tax from any hourly wage.
          </p>
          <p className="text-sm text-slate-500">
            Instantly convert hourly, daily, weekly rates to annual salary with take home pay.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <HourlySalaryCalculator />
      </section>

      {/* Hourly Rate Reference Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Hourly Rate to Annual Salary Reference
          </h2>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3 px-3">Hourly Rate</th>
                  <th className="text-right py-3 px-3">Annual (40hrs)</th>
                  <th className="text-right py-3 px-3">Monthly</th>
                  <th className="text-right py-3 px-3">Weekly</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£10.00</td>
                  <td className="text-right py-3 px-3">£20,800</td>
                  <td className="text-right py-3 px-3">£1,733</td>
                  <td className="text-right py-3 px-3">£400</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-emerald-500/5">
                  <td className="py-3 px-3 font-medium text-emerald-400">£12.21 (NMW)</td>
                  <td className="text-right py-3 px-3">£25,397</td>
                  <td className="text-right py-3 px-3">£2,116</td>
                  <td className="text-right py-3 px-3">£488</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£15.00</td>
                  <td className="text-right py-3 px-3">£31,200</td>
                  <td className="text-right py-3 px-3">£2,600</td>
                  <td className="text-right py-3 px-3">£600</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£20.00</td>
                  <td className="text-right py-3 px-3">£41,600</td>
                  <td className="text-right py-3 px-3">£3,467</td>
                  <td className="text-right py-3 px-3">£800</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£25.00</td>
                  <td className="text-right py-3 px-3">£52,000</td>
                  <td className="text-right py-3 px-3">£4,333</td>
                  <td className="text-right py-3 px-3">£1,000</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£30.00</td>
                  <td className="text-right py-3 px-3">£62,400</td>
                  <td className="text-right py-3 px-3">£5,200</td>
                  <td className="text-right py-3 px-3">£1,200</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-3 font-medium">£40.00</td>
                  <td className="text-right py-3 px-3">£83,200</td>
                  <td className="text-right py-3 px-3">£6,933</td>
                  <td className="text-right py-3 px-3">£1,600</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">£50.00</td>
                  <td className="text-right py-3 px-3">£104,000</td>
                  <td className="text-right py-3 px-3">£8,667</td>
                  <td className="text-right py-3 px-3">£2,000</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-4">
              Based on 40 hours per week, 52 weeks per year. NMW = National Minimum Wage for 21+.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Hourly Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I convert hourly rate to annual salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To convert hourly rate to annual salary, multiply your hourly rate by the number of hours you work per week, then multiply by 52 weeks. Formula: Hourly Rate × Hours per Week × 52 = Annual Salary. For example, £15/hour × 40 hours × 52 weeks = £31,200 annual salary.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is £15 an hour annually UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                £15 per hour equals £31,200 annually based on a standard 40-hour week (£15 × 40 × 52). If you work 37.5 hours, it would be £29,250 annually. After tax and NI on £31,200, you'd take home approximately £25,300 per year or £2,108 per month.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How many hours is full-time UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                There's no legal definition in the UK, but full-time is typically considered 35-40 hours per week. Common standards are 37.5 hours (7.5 hrs × 5 days) or 40 hours (8 hrs × 5 days). The average UK full-time employee works around 36.4 hours per week.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the UK minimum wage per hour?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The UK National Minimum Wage from April 2025 is: £12.21/hour for ages 21+, £10.00/hour for ages 18-20, and £7.55/hour for under 18s and apprentices. At £12.21/hour working 40 hours, you'd earn £25,397 annually.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my hourly rate from salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your hourly rate from an annual salary, divide the salary by the total working hours in a year. Formula: Annual Salary ÷ (Hours per Week × 52) = Hourly Rate. For example, £35,000 ÷ (40 × 52) = £35,000 ÷ 2,080 = £16.83 per hour.
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
                <li><a href="/hourly-salary-calculator" className="hover:text-emerald-400">Hourly Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/pro-rata-salary-calculator" className="hover:text-emerald-400">Pro Rata Calculator</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Salary Calculator</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Hourly salary calculator using 2025/26 tax rates. Visit{' '}
                <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for minimum wage information.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Hourly Salary Calculator UK - Convert hourly rate to annual salary
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
