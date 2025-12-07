import { Metadata } from 'next'
import { SalaryCalculator } from '../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
  description: 'Free UK salary calculator 2025/26. Calculate your take home pay after tax, National Insurance, student loan and pension. Updated with the latest HMRC tax rates for England, Wales, Scotland and NI.',
  keywords: 'salary calculator, salary calculator uk, uk salary calculator, take home pay calculator, tax calculator uk, income tax calculator, national insurance calculator, net salary calculator, gross to net calculator, after tax calculator, wage calculator, pay calculator uk, earnings calculator, what is my take home pay',
  openGraph: {
    title: 'Salary Calculator UK 2025 | Free Take Home Pay Calculator',
    description: 'Calculate your UK take home pay instantly. Free salary calculator with 2025/26 tax rates.',
    type: 'website',
    url: 'https://salarycalculator.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Calculator UK 2025',
    description: 'Calculate your UK take home pay with our free salary calculator.',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center" role="img" aria-label="Salary Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Salary <span className="text-emerald-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Take Home Pay Calculator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#rates" className="text-slate-300 hover:text-white transition-colors">Tax Rates</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Salary Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>UK salary calculator</strong> to work out your take home pay. Our salary calculator shows exactly how much you'll earn after tax, National Insurance, student loan and pension deductions.
          </p>
          <p className="text-sm text-slate-500">
            Updated with 2025/26 tax rates for England, Wales, Scotland and Northern Ireland.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <SalaryCalculator />
      </section>

      {/* Tax Rates Section */}
      <section id="rates" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            UK Tax Rates 2025/26
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Income Tax England Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Income Tax (England, Wales, NI)</h3>
              <p className="text-sm text-slate-400 mb-4">
                Standard UK income tax rates apply to earnings in England, Wales and Northern Ireland.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Personal Allowance (up to £12,570)</span>
                  <span className="text-emerald-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Basic Rate (£12,571 - £50,270)</span>
                  <span className="text-emerald-400 font-medium">20%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Higher Rate (£50,271 - £125,140)</span>
                  <span className="text-emerald-400 font-medium">40%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Additional Rate (over £125,140)</span>
                  <span className="text-emerald-400 font-medium">45%</span>
                </li>
              </ul>
            </div>

            {/* Scottish Tax Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/30">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scottish Income Tax Rates</h3>
              <p className="text-sm text-slate-400 mb-4">
                Scotland has its own income tax bands with more progressive rates.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Starter (£12,571 - £15,397)</span>
                  <span className="text-blue-400 font-medium">19%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Basic (£15,398 - £27,491)</span>
                  <span className="text-blue-400 font-medium">20%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Intermediate (£27,492 - £43,662)</span>
                  <span className="text-blue-400 font-medium">21%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Higher (£43,663 - £75,000)</span>
                  <span className="text-blue-400 font-medium">42%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Advanced (£75,001 - £125,140)</span>
                  <span className="text-blue-400 font-medium">45%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Top (over £125,140)</span>
                  <span className="text-blue-400 font-medium">48%</span>
                </li>
              </ul>
            </div>

            {/* National Insurance Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">National Insurance Rates</h3>
              <p className="text-sm text-slate-400 mb-4">
                Employee National Insurance contributions for 2025/26 tax year.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Below threshold (up to £12,570)</span>
                  <span className="text-amber-400 font-medium">0%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Main rate (£12,571 - £50,270)</span>
                  <span className="text-amber-400 font-medium">8%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Upper rate (over £50,270)</span>
                  <span className="text-amber-400 font-medium">2%</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Note: NI rate reduced from 10% to 8% in April 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Loans Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Student Loan Repayment Thresholds
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our salary calculator includes all student loan plans with current repayment thresholds
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Plan 1</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">£24,990</p>
              <p className="text-sm text-slate-400">9% above threshold</p>
              <p className="text-xs text-slate-500 mt-2">Pre-Sept 2012 England/Wales or Scotland/NI</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Plan 2</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">£27,295</p>
              <p className="text-sm text-slate-400">9% above threshold</p>
              <p className="text-xs text-slate-500 mt-2">Post-Sept 2012 England/Wales</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Plan 4</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">£31,395</p>
              <p className="text-sm text-slate-400">9% above threshold</p>
              <p className="text-xs text-slate-500 mt-2">Scottish students</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Plan 5</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">£25,000</p>
              <p className="text-sm text-slate-400">9% above threshold</p>
              <p className="text-xs text-slate-500 mt-2">Post-Aug 2023 England</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Postgraduate</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">£21,000</p>
              <p className="text-sm text-slate-400">6% above threshold</p>
              <p className="text-xs text-slate-500 mt-2">Masters/PhD loans</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Salary Calculator UK - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How does the UK salary calculator work?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Our UK salary calculator uses the official HMRC tax rates and thresholds for 2025/26 to calculate your take home pay. Simply enter your annual gross salary, select your tax region (England/Wales/NI or Scotland), set your pension contribution, and choose any applicable student loan plan. The salary calculator instantly shows your net pay after all deductions including income tax, National Insurance, student loan repayments and pension contributions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my take home pay UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your take home pay in the UK, you need to deduct income tax, National Insurance, any student loan repayments, and pension contributions from your gross salary. Our salary calculator does this automatically. For example, on a £35,000 salary with standard settings, you'd take home approximately £2,299 per month after all deductions. The exact amount depends on your tax code, region, and personal circumstances.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the personal allowance for 2025/26?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The personal allowance for 2025/26 is £12,570. This is the amount you can earn before paying any income tax. However, your personal allowance reduces by £1 for every £2 you earn above £100,000, meaning it's completely removed at £125,140. Our salary calculator automatically accounts for this taper when calculating your take home pay.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much tax will I pay on £50,000 salary UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                On a £50,000 salary in England, Wales or Northern Ireland, you would pay approximately £7,486 in income tax (20% on earnings between £12,571 and £50,000). You would also pay around £2,996 in National Insurance. Use our salary calculator to see the exact breakdown including any pension contributions or student loan repayments you may have.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the 60% tax trap?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The 60% tax trap affects earners between £100,000 and £125,140. In this bracket, your personal allowance is gradually withdrawn (£1 for every £2 earned over £100k), effectively creating a 60% marginal tax rate (40% income tax + 20% effective rate from lost allowance). Our salary calculator shows your marginal tax rate so you can see this effect. Contributing more to your pension can help avoid this trap.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the difference between Scottish and English tax rates?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Scotland has its own income tax rates with more bands than the rest of the UK. Scottish taxpayers have a 19% starter rate, 20% basic rate, 21% intermediate rate, 42% higher rate, 45% advanced rate, and 48% top rate. This means higher earners in Scotland generally pay more tax than in England, while lower earners may pay slightly less. Our salary calculator lets you switch between regions to compare.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do pension contributions affect my take home pay?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Pension contributions through salary sacrifice reduce your taxable income, meaning you pay less income tax and National Insurance. For example, a 5% pension contribution on a £40,000 salary saves you approximately £500 per year in tax and NI, while putting £2,000 into your pension. Our salary calculator shows how different pension percentages affect your take home pay and total deductions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Which student loan plan am I on?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Plan 1 is for students who started before September 2012 in England/Wales, or any time in Scotland/Northern Ireland. Plan 2 is for those who started September 2012 or later in England/Wales. Plan 4 is specifically for Scottish students. Plan 5 is for courses starting August 2023 or later in England. Check your student loan statement or Student Loans Company account to confirm your plan.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is a good salary in the UK 2025?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The UK median salary is approximately £35,000 per year. A salary above £50,000 would put you in the top 25% of earners, while £75,000+ puts you in the top 10%. What constitutes a "good" salary depends on your location (London requires higher salaries due to cost of living), your career stage, and personal circumstances. Use our salary calculator to see what different salary levels mean in terms of actual take home pay.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is this salary calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Our UK salary calculator uses the official 2025/26 HMRC tax rates and thresholds, providing highly accurate estimates for most employees. However, your actual take home pay may vary slightly due to factors like your specific tax code, benefits in kind, salary sacrifice schemes other than pension, or other personal circumstances. For precise figures, consult your payslip or speak to your employer's payroll department.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Use the UK Salary Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Enter Salary</h3>
              <p className="text-sm text-slate-400">
                Type your annual gross salary or use the quick presets
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Select Region</h3>
              <p className="text-sm text-slate-400">
                Choose England/Wales/NI or Scotland for correct tax rates
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Add Deductions</h3>
              <p className="text-sm text-slate-400">
                Set pension % and student loan plan if applicable
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-emerald-400">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">View Results</h3>
              <p className="text-sm text-slate-400">
                See your take home pay breakdown by year, month, week or day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Salary Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free UK salary calculator to work out your take home pay. Calculate tax, National Insurance, student loan and pension deductions instantly.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-emerald-400">Salary Calculator</a></li>
                <li><a href="#rates" className="hover:text-emerald-400">UK Tax Rates 2025/26</a></li>
                <li><a href="#faq" className="hover:text-emerald-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Resources</h4>
              <p className="text-sm text-slate-400">
                Tax rates updated for 2025/26 tax year. For official guidance visit{' '}
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  GOV.UK
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Salary Calculator UK - Free take home pay calculator for England, Wales, Scotland and Northern Ireland
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
