import { Metadata } from 'next'
import { NHSSalaryCalculator } from '../../components/NHSSalaryCalculator'

export const metadata: Metadata = {
  title: 'NHS Salary Calculator 2025 | NHS Pay Bands & Take Home Pay',
  description: 'Free NHS salary calculator. Calculate your NHS take home pay using Agenda for Change pay bands. See NHS salaries for Bands 1-9 with pension and tax deductions. Updated 2025/26.',
  keywords: 'nhs salary calculator, nhs pay calculator, nhs pay bands, agenda for change salary, nhs wage calculator, nhs take home pay, nhs band salary, nhs pension calculator, nhs salary bands 2025',
  openGraph: {
    title: 'NHS Salary Calculator 2025 | NHS Pay Bands & Take Home Pay',
    description: 'Calculate your NHS salary and take home pay with our free NHS pay calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/nhs-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/nhs-salary-calculator',
  },
}

export default function NHSSalaryCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">NHS <span className="text-cyan-400">Salary Calculator</span></span>
                <p className="text-xs text-slate-400">Agenda for Change Pay Bands</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/scotland-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Scotland</a>
              <a href="/average-salary-uk" className="text-slate-300 hover:text-white transition-colors">Average Salary</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            NHS Salary Calculator
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> 2025/26</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>NHS salary calculator</strong> to work out your take home pay. Select your Agenda for Change pay band and see your NHS salary after tax, National Insurance and pension.
          </p>
          <p className="text-sm text-slate-500">
            Updated with 2024/25 NHS pay bands and 2025/26 tax rates.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <NHSSalaryCalculator />
      </section>

      {/* NHS Pay Bands Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            NHS Agenda for Change Pay Bands 2024/25
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-slate-800/50 rounded-xl border border-slate-700/50">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3 px-4">Band</th>
                  <th className="text-left py-3 px-4">Entry Point</th>
                  <th className="text-right py-3 px-4">Top of Band</th>
                  <th className="text-left py-3 px-4 hidden md:table-cell">Example Roles</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 2</td>
                  <td className="py-3 px-4">£23,615</td>
                  <td className="text-right py-3 px-4">£23,615</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Healthcare Assistant, Porter</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 3</td>
                  <td className="py-3 px-4">£24,071</td>
                  <td className="text-right py-3 px-4">£25,674</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Senior HCA, Phlebotomist</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 4</td>
                  <td className="py-3 px-4">£26,530</td>
                  <td className="text-right py-3 px-4">£29,114</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Assistant Practitioner, Secretary</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 5</td>
                  <td className="py-3 px-4">£29,970</td>
                  <td className="text-right py-3 px-4">£36,483</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Newly Qualified Nurse, Paramedic</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 6</td>
                  <td className="py-3 px-4">£37,338</td>
                  <td className="text-right py-3 px-4">£44,962</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Senior Nurse, Physiotherapist</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 7</td>
                  <td className="py-3 px-4">£46,148</td>
                  <td className="text-right py-3 px-4">£52,809</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Ward Manager, Team Leader</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 8a</td>
                  <td className="py-3 px-4">£53,755</td>
                  <td className="text-right py-3 px-4">£60,504</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Service Manager, Principal</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 8b</td>
                  <td className="py-3 px-4">£62,215</td>
                  <td className="text-right py-3 px-4">£72,293</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Head of Department</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 8c</td>
                  <td className="py-3 px-4">£74,290</td>
                  <td className="text-right py-3 px-4">£86,893</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Associate Director</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 8d</td>
                  <td className="py-3 px-4">£89,168</td>
                  <td className="text-right py-3 px-4">£104,071</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Deputy Director</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-cyan-400">Band 9</td>
                  <td className="py-3 px-4">£107,637</td>
                  <td className="text-right py-3 px-4">£126,281</td>
                  <td className="py-3 px-4 text-slate-400 hidden md:table-cell">Director, Chief Nurse</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">NHS Pension</h3>
              <p className="text-sm text-slate-400">
                NHS pension contributions are tiered based on salary, ranging from 5.1% to 13.5%. Our calculator uses the 2015 scheme rates.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Pay Progression</h3>
              <p className="text-sm text-slate-400">
                NHS staff progress through pay points within their band annually, typically moving up one point each year until reaching the top of their band.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            NHS Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is Agenda for Change?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Agenda for Change (AfC) is the NHS pay system that covers most NHS staff in England, Wales and Northern Ireland. It places jobs in pay bands (1-9) based on knowledge, skills and responsibilities. Scotland has a similar system. Medical and dental staff have separate pay scales.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is NHS pension contribution?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                NHS pension contributions are tiered: 5.1% on earnings up to £13,246, 5.7% up to £16,831, 6.1% up to £22,879, 6.8% up to £23,948, 7.7% up to £28,223, 8.8% up to £29,179, 9.8% up to £43,805, 10.0% up to £49,245, 11.6% up to £56,163, 12.5% up to £72,030, and 13.5% above that.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What band is a nurse in the NHS?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Newly qualified nurses typically start at Band 5 (£29,970 - £36,483). With experience, nurses can progress to Band 6 (£37,338 - £44,962) as senior nurses or specialists. Ward managers and nurse consultants may be Band 7 or higher.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do NHS staff get London weighting?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, NHS staff in London receive High Cost Area Supplements. Inner London gets 20% of salary (min £5,274, max £7,770), Outer London gets 15% (min £4,655, max £6,076), and the Fringe area gets 5% (min £1,212, max £2,047).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                When do NHS pay rises happen?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                NHS pay rises typically take effect from April each year. The NHS Pay Review Body recommends annual increases, which the government then decides whether to implement. Individual pay point progression (increments) happens on your anniversary date.
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
                <li><a href="/nhs-salary-calculator" className="hover:text-cyan-400">NHS Salary Calculator</a></li>
                <li><a href="/scotland-salary-calculator" className="hover:text-emerald-400">Scotland Salary Calculator</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/pro-rata-salary-calculator" className="hover:text-emerald-400">Pro Rata Calculator</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
                <li><a href="/hourly-salary-calculator" className="hover:text-emerald-400">Hourly Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                NHS pay bands from{' '}
                <a href="https://www.nhsemployers.org/articles/pay-scales-202425" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">NHS Employers</a>
                {' '}and{' '}
                <a href="https://www.healthcareers.nhs.uk/working-health/working-nhs/nhs-pay-and-benefits" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">NHS Careers</a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              NHS Salary Calculator - Calculate your NHS take home pay
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
