import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Salary Converter UK 2025 | Convert Salary Hourly Monthly Yearly',
  description: 'Free UK salary converter. Convert between hourly, daily, weekly, monthly and yearly salary. Our pay converter shows equivalent rates instantly. Updated 2025/26.',
  keywords: 'salary converter, salary converter uk, pay converter, salary conversion, wage converter, hourly to annual salary, monthly to yearly salary, daily rate to annual, income converter, earnings converter uk',
  openGraph: {
    title: 'Salary Converter UK 2025 | Convert Salary Hourly Monthly Yearly',
    description: 'Convert between different salary periods with our free UK salary converter.',
    type: 'website',
    url: 'https://salarycalculator.quest/salary-converter',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/salary-converter',
  },
}

export default function SalaryConverterPage() {
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
                <span className="text-xl font-bold text-white">Salary <span className="text-emerald-400">Converter</span></span>
                <p className="text-xs text-slate-400">UK Pay Converter</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
              <a href="/daily-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Daily Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Salary Converter
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>UK salary converter</strong> to convert between hourly, daily, weekly, monthly and yearly salary. See equivalent rates across all time periods.
          </p>
          <p className="text-sm text-slate-500">
            Our pay converter also calculates your take home pay after tax.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* Conversion Formulas Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Salary Conversion Formulas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Hourly to Annual</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Hourly × 40 × 52</p>
              <p className="text-slate-400 text-xs">Standard 40-hour week, 52 weeks</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Daily to Annual</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Daily × 260</p>
              <p className="text-slate-400 text-xs">260 working days per year</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Weekly to Annual</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Weekly × 52</p>
              <p className="text-slate-400 text-xs">52 weeks per year</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Monthly to Annual</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Monthly × 12</p>
              <p className="text-slate-400 text-xs">12 months per year</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Annual to Monthly</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Annual ÷ 12</p>
              <p className="text-slate-400 text-xs">Divide by 12 months</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Annual to Hourly</h3>
              <p className="text-emerald-400 font-mono text-sm mb-2">Annual ÷ 2080</p>
              <p className="text-slate-400 text-xs">40 hours × 52 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Quick Salary Conversion Reference
          </h2>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3 px-2">Annual</th>
                  <th className="text-right py-3 px-2">Monthly</th>
                  <th className="text-right py-3 px-2">Weekly</th>
                  <th className="text-right py-3 px-2">Daily</th>
                  <th className="text-right py-3 px-2">Hourly</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£20,000</td>
                  <td className="text-right py-3 px-2">£1,667</td>
                  <td className="text-right py-3 px-2">£385</td>
                  <td className="text-right py-3 px-2">£77</td>
                  <td className="text-right py-3 px-2">£9.62</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£25,000</td>
                  <td className="text-right py-3 px-2">£2,083</td>
                  <td className="text-right py-3 px-2">£481</td>
                  <td className="text-right py-3 px-2">£96</td>
                  <td className="text-right py-3 px-2">£12.02</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£30,000</td>
                  <td className="text-right py-3 px-2">£2,500</td>
                  <td className="text-right py-3 px-2">£577</td>
                  <td className="text-right py-3 px-2">£115</td>
                  <td className="text-right py-3 px-2">£14.42</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-emerald-500/10">
                  <td className="py-3 px-2 font-medium text-emerald-400">£35,000</td>
                  <td className="text-right py-3 px-2">£2,917</td>
                  <td className="text-right py-3 px-2">£673</td>
                  <td className="text-right py-3 px-2">£135</td>
                  <td className="text-right py-3 px-2">£16.83</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£40,000</td>
                  <td className="text-right py-3 px-2">£3,333</td>
                  <td className="text-right py-3 px-2">£769</td>
                  <td className="text-right py-3 px-2">£154</td>
                  <td className="text-right py-3 px-2">£19.23</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£50,000</td>
                  <td className="text-right py-3 px-2">£4,167</td>
                  <td className="text-right py-3 px-2">£962</td>
                  <td className="text-right py-3 px-2">£192</td>
                  <td className="text-right py-3 px-2">£24.04</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£60,000</td>
                  <td className="text-right py-3 px-2">£5,000</td>
                  <td className="text-right py-3 px-2">£1,154</td>
                  <td className="text-right py-3 px-2">£231</td>
                  <td className="text-right py-3 px-2">£28.85</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-2 font-medium">£75,000</td>
                  <td className="text-right py-3 px-2">£6,250</td>
                  <td className="text-right py-3 px-2">£1,442</td>
                  <td className="text-right py-3 px-2">£288</td>
                  <td className="text-right py-3 px-2">£36.06</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">£100,000</td>
                  <td className="text-right py-3 px-2">£8,333</td>
                  <td className="text-right py-3 px-2">£1,923</td>
                  <td className="text-right py-3 px-2">£385</td>
                  <td className="text-right py-3 px-2">£48.08</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-4">
              Based on 40 hours/week, 52 weeks/year, 260 working days/year. UK median salary (£35,000) highlighted.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Salary Converter FAQ
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
                To convert an hourly rate to annual salary, multiply the hourly rate by the number of hours worked per week, then multiply by 52 weeks. For a standard 40-hour week: Hourly Rate × 40 × 52 = Annual Salary. For example, £15/hour = £15 × 40 × 52 = £31,200/year.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I convert monthly salary to yearly?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To convert monthly salary to yearly salary, simply multiply by 12. For example, if you earn £3,000 per month, your annual salary is £3,000 × 12 = £36,000. Our salary converter shows all periods automatically when you enter any figure.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is a pay converter?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A pay converter (or salary converter) is a tool that converts salary between different time periods - hourly, daily, weekly, monthly, and yearly. It's useful for comparing job offers quoted in different formats or understanding what your pay equals in different periods.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How many working hours are in a year UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                For a standard full-time employee working 40 hours per week for 52 weeks, there are 2,080 working hours in a year. This is the standard figure used for hourly to annual salary conversions. Part-time hours would be calculated proportionally.
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
              <h4 className="text-white font-semibold mb-3">Salary Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-emerald-400">UK Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                UK salary converter using standard working hours (40/week, 52 weeks/year). Visit{' '}
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for official tax information.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Salary Converter UK - Convert between hourly, daily, weekly, monthly and yearly salary
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
