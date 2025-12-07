import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Pay Calculator UK 2025 | Free UK Pay Calculator',
  description: 'Free pay calculator UK. Calculate your pay after tax, National Insurance and deductions. Our UK pay calculator shows your take home pay instantly. Updated 2025/26 rates.',
  keywords: 'pay calculator uk, uk pay calculator, pay calculator, calculate pay uk, calculate my pay, paycheck calculator uk, uk paycheck calculator, pay calculator salary, calculate your pay, pay rate calculator uk, pay salary calculator uk, pay income calculator',
  openGraph: {
    title: 'Pay Calculator UK 2025 | Free UK Pay Calculator',
    description: 'Calculate your UK pay and take home earnings with our free pay calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/pay-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/pay-calculator',
  },
}

export default function PayCalculatorPage() {
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
                <span className="text-xl font-bold text-white">Pay <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">UK Pay Calculator</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
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
            Pay Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>UK pay calculator</strong> to work out your take home pay. Calculate your pay after tax, National Insurance, student loans and pension deductions.
          </p>
          <p className="text-sm text-slate-500">
            Our pay calculator uses the latest 2025/26 HMRC tax rates and thresholds.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Calculate Your Pay UK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-emerald-400 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enter Your Gross Pay</h3>
              <p className="text-sm text-slate-400">
                Enter your annual gross pay (before any deductions) into the pay calculator. This is the total amount your employer pays you before tax.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-emerald-400 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Select Your Options</h3>
              <p className="text-sm text-slate-400">
                Choose your tax region (England or Scotland), pension contribution percentage, and any student loan plan you may have.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-emerald-400 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">View Your Take Home Pay</h3>
              <p className="text-sm text-slate-400">
                The pay calculator instantly shows your net pay after all deductions including income tax, National Insurance, and pension contributions.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <span className="text-emerald-400 font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">See Full Breakdown</h3>
              <p className="text-sm text-slate-400">
                View your pay breakdown by yearly, monthly, weekly and daily amounts. See exactly where your money goes with our detailed calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay Deductions Explained */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            UK Pay Deductions Explained
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Income Tax</h3>
              <p className="text-sm text-slate-400 mb-3">
                Income tax is deducted from your pay based on how much you earn. You have a personal allowance of £12,570 that's tax-free.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-emerald-400 font-medium">0%</div>
                  <div className="text-slate-500 text-xs">Up to £12,570</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-emerald-400 font-medium">20%</div>
                  <div className="text-slate-500 text-xs">£12,571 - £50,270</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-emerald-400 font-medium">40%</div>
                  <div className="text-slate-500 text-xs">£50,271 - £125,140</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-emerald-400 font-medium">45%</div>
                  <div className="text-slate-500 text-xs">Over £125,140</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">National Insurance</h3>
              <p className="text-sm text-slate-400 mb-3">
                National Insurance contributions are taken from your pay to fund state benefits and the NHS.
              </p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-amber-400 font-medium">0%</div>
                  <div className="text-slate-500 text-xs">Up to £12,570</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-amber-400 font-medium">8%</div>
                  <div className="text-slate-500 text-xs">£12,571 - £50,270</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="text-amber-400 font-medium">2%</div>
                  <div className="text-slate-500 text-xs">Over £50,270</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            UK Pay Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my pay UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your pay in the UK, enter your gross annual salary into our pay calculator. It will automatically calculate your take home pay after deducting income tax (20-45%), National Insurance (8-2%), and any other deductions like pension contributions or student loan repayments.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my take home pay?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Your take home pay is your gross pay minus all deductions. Use our UK pay calculator to work it out instantly. Simply enter your gross salary and we'll calculate your net pay after tax, National Insurance, pension, and any student loan repayments.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is a UK paycheck calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A UK paycheck calculator (or pay calculator) is a tool that helps you work out how much money you'll actually receive in your bank account after all deductions. It calculates your net pay from your gross salary, showing exactly what will be on your payslip.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much will I get paid after tax on £30,000?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                On a £30,000 salary with standard settings (no pension, no student loan), you'd take home approximately £24,638 per year or £2,053 per month. This is after income tax of £3,486 and National Insurance of £1,394. Use our pay calculator to see your exact figures.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is this pay calculator accurate?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, our UK pay calculator uses the official 2025/26 HMRC tax rates and thresholds. However, your actual take home pay may vary slightly due to your specific tax code, benefits in kind, or other factors. For the most accurate figure, check with your employer's payroll department.
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
              <h4 className="text-white font-semibold mb-3">Pay Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-emerald-400">UK Salary Calculator</a></li>
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Pay Calculator</a></li>
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
                UK pay calculator using 2025/26 rates. Visit{' '}
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for official guidance.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Pay Calculator UK - Calculate your take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
