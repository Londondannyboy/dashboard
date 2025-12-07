import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Wage Calculator UK 2025 | Free UK Wages Calculator',
  description: 'Free wage calculator UK. Calculate your wages after tax, National Insurance and deductions. Our UK wages calculator shows your take home pay from any wage. Updated 2025/26 rates.',
  keywords: 'wage calculator uk, uk wage calculator, wages calculator uk, uk wages calculator, wage uk calculator, wages uk calculator, calculator wages uk, uk paycheck calculator, wage calculator, wages calculator, online wage calculator, pay wages calculator',
  openGraph: {
    title: 'Wage Calculator UK 2025 | Free UK Wages Calculator',
    description: 'Calculate your UK wages and take home pay with our free wage calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/wage-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/wage-calculator',
  },
}

export default function WageCalculatorPage() {
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
                <span className="text-xl font-bold text-white">Wage <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">UK Wages Calculator</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
              <a href="/pay-calculator" className="text-slate-300 hover:text-white transition-colors">Pay Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Wage Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>UK wage calculator</strong> to work out your wages after tax. Our wages calculator shows exactly how much you'll take home after deductions.
          </p>
          <p className="text-sm text-slate-500">
            Calculate your UK wages using the latest 2025/26 tax rates and NI thresholds.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* Wage Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Understanding UK Wages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Minimum Wage 2025</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>21 and over</span>
                  <span className="text-emerald-400 font-medium">£12.21/hr</span>
                </li>
                <li className="flex justify-between">
                  <span>18 to 20</span>
                  <span className="text-emerald-400 font-medium">£10.00/hr</span>
                </li>
                <li className="flex justify-between">
                  <span>Under 18</span>
                  <span className="text-emerald-400 font-medium">£7.55/hr</span>
                </li>
                <li className="flex justify-between">
                  <span>Apprentice</span>
                  <span className="text-emerald-400 font-medium">£7.55/hr</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Living Wage</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Real Living Wage (UK)</span>
                  <span className="text-emerald-400 font-medium">£12.60/hr</span>
                </li>
                <li className="flex justify-between">
                  <span>London Living Wage</span>
                  <span className="text-emerald-400 font-medium">£13.85/hr</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Living Wage rates are voluntary and set by the Living Wage Foundation.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Wage Conversions</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Hourly to Annual</span>
                  <span className="text-slate-300">× 2,080</span>
                </li>
                <li className="flex justify-between">
                  <span>Daily to Annual</span>
                  <span className="text-slate-300">× 260</span>
                </li>
                <li className="flex justify-between">
                  <span>Weekly to Annual</span>
                  <span className="text-slate-300">× 52</span>
                </li>
                <li className="flex justify-between">
                  <span>Monthly to Annual</span>
                  <span className="text-slate-300">× 12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            UK Wage Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How does the UK wage calculator work?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Our UK wage calculator takes your gross wage and calculates your take home pay after all deductions. It automatically applies income tax, National Insurance, student loan repayments and pension contributions using the latest 2025/26 tax rates. Simply enter your annual wage and see your net wages instantly.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my wages after tax UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your wages after tax in the UK, you need to deduct income tax (20-45% depending on your earnings) and National Insurance (8% up to £50,270, 2% above). Our wages calculator UK does this automatically, showing you exactly what you'll take home after all deductions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the difference between wage and salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Wages are typically paid based on hours worked, often weekly or bi-weekly, and are common for hourly workers. Salary is a fixed annual amount paid monthly regardless of hours worked. Both are subject to the same tax rules in the UK - our calculator works for both wages and salaries.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I convert hourly wage to annual salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To convert an hourly wage to annual salary, multiply your hourly rate by the number of hours you work per week, then multiply by 52 weeks. For a standard 40-hour week: Hourly Rate × 40 × 52 = Annual Salary. For example, £15/hour × 40 × 52 = £31,200 per year.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the UK paycheck calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A UK paycheck calculator (or wage calculator) helps you work out your take home pay after all deductions. It shows you exactly what will appear on your paycheck after income tax, National Insurance, pension contributions, and any student loan repayments are taken off. Our online wage calculator gives you instant results.
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
              <h4 className="text-white font-semibold mb-3">Wage Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-emerald-400">UK Salary Calculator</a></li>
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Wage Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Resources</h4>
              <p className="text-sm text-slate-400">
                UK wages calculator using 2025/26 rates. Visit{' '}
                <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for minimum wage information.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              UK Wage Calculator - Calculate your wages and take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
