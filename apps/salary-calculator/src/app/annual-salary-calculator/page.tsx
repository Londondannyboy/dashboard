import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Annual Salary Calculator UK 2025 | Yearly Salary Calculator',
  description: 'Free annual salary calculator UK. Calculate your yearly salary, take home pay and tax. Work out your annual wage from monthly, weekly or hourly rates. Updated 2025/26 tax rates.',
  keywords: 'annual salary calculator, annual salary calculator uk, yearly salary calculator uk, annual wage calculator uk, calculate annual salary uk, uk annual salary calculator, yearly pay calculator uk, annual pay calculator, calculate yearly salary uk, yearly wage calculator uk',
  openGraph: {
    title: 'Annual Salary Calculator UK 2025 | Yearly Salary Calculator',
    description: 'Calculate your annual salary and yearly take home pay with our free UK salary calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/annual-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/annual-salary-calculator',
  },
}

export default function AnnualSalaryCalculatorPage() {
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
                <span className="text-xl font-bold text-white">Salary <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">UK Take Home Pay Calculator</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="/wage-calculator" className="text-slate-300 hover:text-white transition-colors">Wage Calculator</a>
              <a href="/average-salary-uk" className="text-slate-300 hover:text-white transition-colors">Average Salary</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Annual Salary Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>annual salary calculator UK</strong> to work out your yearly take home pay. Calculate your annual salary after tax, National Insurance, student loans and pension contributions.
          </p>
          <p className="text-sm text-slate-500">
            Our yearly salary calculator uses the latest 2025/26 HMRC tax rates.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* Annual Salary Info Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            How to Calculate Annual Salary UK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">From Monthly Salary</h3>
              <p className="text-slate-400 text-sm mb-3">
                To calculate your annual salary from a monthly figure, simply multiply your monthly salary by 12.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm">Annual Salary = Monthly Salary × 12</p>
                <p className="text-slate-500 text-xs mt-2">Example: £3,000/month × 12 = £36,000/year</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">From Weekly Wage</h3>
              <p className="text-slate-400 text-sm mb-3">
                To calculate your annual wage from a weekly figure, multiply your weekly wage by 52.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm">Annual Salary = Weekly Wage × 52</p>
                <p className="text-slate-500 text-xs mt-2">Example: £700/week × 52 = £36,400/year</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">From Hourly Rate</h3>
              <p className="text-slate-400 text-sm mb-3">
                To calculate your annual salary from an hourly rate, multiply by hours per week, then by 52.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm">Annual = Hourly × Hours × 52</p>
                <p className="text-slate-500 text-xs mt-2">Example: £17.50/hr × 40hrs × 52 = £36,400/year</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">From Daily Rate</h3>
              <p className="text-slate-400 text-sm mb-3">
                To calculate your annual salary from a daily rate, multiply by working days (usually 260).
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm">Annual = Daily Rate × 260</p>
                <p className="text-slate-500 text-xs mt-2">Example: £140/day × 260 = £36,400/year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Annual Salary Calculator UK FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my annual salary UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your annual salary in the UK, enter your gross yearly salary into our annual salary calculator. The calculator will automatically work out your take home pay after deducting income tax, National Insurance, student loans (if applicable), and pension contributions. You can also convert from monthly, weekly, or hourly rates.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How to calculate yearly salary from monthly UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your yearly salary from a monthly amount, multiply your monthly salary by 12. For example, if you earn £3,000 per month, your annual salary would be £3,000 × 12 = £36,000. Use our yearly salary calculator UK to see your full take home pay breakdown.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the annual pay calculator used for?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                An annual pay calculator is used to work out your yearly earnings and take home pay after tax. It's useful for understanding your total compensation, comparing job offers, budgeting for the year ahead, and calculating how much tax you'll pay annually. Our UK annual salary calculator includes all current tax rates and deductions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my annual wage after tax?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your annual wage after tax in the UK, you need to subtract income tax and National Insurance from your gross salary. Income tax rates are 20% (basic), 40% (higher), and 45% (additional). NI is 8% up to £50,270 then 2% above. Our annual wage calculator UK does all these calculations automatically for you.
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
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Related Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Annual salary calculator using 2025/26 tax rates. Visit{' '}
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for official guidance.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Annual Salary Calculator UK - Calculate your yearly take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
