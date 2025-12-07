import { Metadata } from 'next'
import { ScotlandSalaryCalculator } from '../../components/ScotlandSalaryCalculator'

export const metadata: Metadata = {
  title: 'Scotland Salary Calculator 2025 | Scottish Tax Calculator',
  description: 'Free Scotland salary calculator. Calculate your Scottish take home pay with Scottish income tax rates. See how Scottish tax bands affect your salary. Updated 2025/26.',
  keywords: 'salary calculator scotland, scottish salary calculator, scotland tax calculator, scottish income tax calculator, salary calculator scottish rates, scotland take home pay, scottish tax bands, scotland wage calculator',
  openGraph: {
    title: 'Scotland Salary Calculator 2025 | Scottish Tax Calculator',
    description: 'Calculate your Scottish salary and take home pay with Scottish income tax rates.',
    type: 'website',
    url: 'https://salarycalculator.quest/scotland-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/scotland-salary-calculator',
  },
}

export default function ScotlandSalaryCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Scotland <span className="text-blue-400">Salary Calculator</span></span>
                <p className="text-xs text-slate-400">Scottish Tax Rates 2025/26</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">UK Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
              <a href="/average-salary-uk" className="text-slate-300 hover:text-white transition-colors">Average Salary</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Scotland Salary Calculator
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> 2025/26</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>Scotland salary calculator</strong> to work out your take home pay using Scottish income tax rates. Scotland has different tax bands to the rest of the UK.
          </p>
          <p className="text-sm text-slate-500">
            Updated with the latest 2025/26 Scottish tax rates and thresholds.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <ScotlandSalaryCalculator />
      </section>

      {/* Scottish Tax Bands Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Scottish Income Tax Rates 2025/26
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Scottish Rates */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span> Scottish Tax Bands
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Personal Allowance</span>
                    <span className="text-xs text-slate-500 block">Up to £12,570</span>
                  </div>
                  <span className="text-blue-400 font-medium">0%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Starter Rate</span>
                    <span className="text-xs text-slate-500 block">£12,571 - £15,397</span>
                  </div>
                  <span className="text-blue-400 font-medium">19%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Basic Rate</span>
                    <span className="text-xs text-slate-500 block">£15,398 - £27,491</span>
                  </div>
                  <span className="text-blue-400 font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Intermediate Rate</span>
                    <span className="text-xs text-slate-500 block">£27,492 - £43,662</span>
                  </div>
                  <span className="text-blue-400 font-medium">21%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Higher Rate</span>
                    <span className="text-xs text-slate-500 block">£43,663 - £75,000</span>
                  </div>
                  <span className="text-blue-400 font-medium">42%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Advanced Rate</span>
                    <span className="text-xs text-slate-500 block">£75,001 - £125,140</span>
                  </div>
                  <span className="text-blue-400 font-medium">45%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <span className="text-slate-300">Top Rate</span>
                    <span className="text-xs text-slate-500 block">Over £125,140</span>
                  </div>
                  <span className="text-blue-400 font-medium">48%</span>
                </div>
              </div>
            </div>

            {/* Comparison with UK */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🇬🇧</span> Rest of UK Tax Bands
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Personal Allowance</span>
                    <span className="text-xs text-slate-500 block">Up to £12,570</span>
                  </div>
                  <span className="text-emerald-400 font-medium">0%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Basic Rate</span>
                    <span className="text-xs text-slate-500 block">£12,571 - £50,270</span>
                  </div>
                  <span className="text-emerald-400 font-medium">20%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                  <div>
                    <span className="text-slate-300">Higher Rate</span>
                    <span className="text-xs text-slate-500 block">£50,271 - £125,140</span>
                  </div>
                  <span className="text-emerald-400 font-medium">40%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <span className="text-slate-300">Additional Rate</span>
                    <span className="text-xs text-slate-500 block">Over £125,140</span>
                  </div>
                  <span className="text-emerald-400 font-medium">45%</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <p className="text-xs text-amber-400">
                  Scotland has 7 tax bands vs 4 in the rest of the UK. Higher earners in Scotland pay more tax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Scotland Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How is Scottish income tax different?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Scotland has had the power to set its own income tax rates since April 2017. Scottish taxpayers now have 7 tax bands compared to 4 in the rest of the UK. The rates are more progressive - lower earners pay slightly less, but higher earners pay more than their counterparts in England, Wales and Northern Ireland.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I pay Scottish tax rates?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You pay Scottish income tax if Scotland is where you live (your "main place of residence"). This applies even if you work elsewhere in the UK. Your tax code will start with 'S' if you're a Scottish taxpayer. Check your payslip or P60 to confirm.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I pay more tax in Scotland?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                It depends on your salary. Below about £28,000, you may pay slightly less tax in Scotland due to the 19% starter rate. Above this, you'll generally pay more. At £50,000, a Scottish taxpayer pays around £1,500 more than someone in England. The difference increases with higher salaries.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is National Insurance different in Scotland?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No, National Insurance is the same across the whole UK - only income tax rates are different in Scotland. NI is a reserved matter controlled by Westminster, so Scottish and English taxpayers pay the same NI rates (8% main rate, 2% upper rate).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the Scottish top rate of tax?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The Scottish top rate of tax is 48% on income over £125,140. This is 3% higher than the UK additional rate of 45%. Combined with the 2% upper NI rate, high earners in Scotland have an effective marginal rate of 50% on income above £125,140.
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
                <li><a href="/scotland-salary-calculator" className="hover:text-blue-400">Scotland Salary Calculator</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
                <li><a href="/nhs-salary-calculator" className="hover:text-emerald-400">NHS Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Scottish tax rates from{' '}
                <a href="https://www.gov.scot/policies/taxes/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Scottish Government</a>
                {' '}and{' '}
                <a href="https://www.gov.uk/scottish-income-tax" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GOV.UK</a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Scotland Salary Calculator - Calculate your Scottish take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
