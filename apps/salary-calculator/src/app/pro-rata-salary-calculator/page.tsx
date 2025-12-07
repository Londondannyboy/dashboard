import { Metadata } from 'next'
import { ProRataCalculator } from '../../components/ProRataCalculator'

export const metadata: Metadata = {
  title: 'Pro Rata Salary Calculator UK 2025 | Calculate Part-Time Salary',
  description: 'Free pro rata salary calculator UK. Calculate your part-time salary from a full-time equivalent. Work out pro rata pay for reduced hours, job shares and part-time contracts.',
  keywords: 'pro rata salary calculator, pro rata calculator, pro rata salary, calculate pro rata salary, part time salary calculator, pro rata pay calculator, pro rata wage calculator, job share salary calculator, reduced hours salary',
  openGraph: {
    title: 'Pro Rata Salary Calculator UK 2025 | Calculate Part-Time Salary',
    description: 'Calculate your pro rata salary for part-time work with our free UK calculator.',
    type: 'website',
    url: 'https://salarycalculator.quest/pro-rata-salary-calculator',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/pro-rata-salary-calculator',
  },
}

export default function ProRataSalaryCalculatorPage() {
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
                <span className="text-xl font-bold text-white">Pro Rata <span className="text-emerald-400">Calculator</span></span>
                <p className="text-xs text-slate-400">Part-Time Salary Calculator</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/hourly-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Hourly Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Pro Rata Salary Calculator
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>pro rata salary calculator</strong> to work out your part-time salary from a full-time equivalent. Calculate pro rata pay for reduced hours, job shares and part-time contracts.
          </p>
          <p className="text-sm text-slate-500">
            Instantly see your pro rata salary and take home pay after tax.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <ProRataCalculator />
      </section>

      {/* How Pro Rata Works Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            How to Calculate Pro Rata Salary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">The Pro Rata Formula</h3>
              <p className="text-slate-400 text-sm mb-4">
                Pro rata means "in proportion". To calculate your pro rata salary:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-emerald-400 font-mono text-sm mb-2">
                  Pro Rata = Full-Time Salary × (Your Hours ÷ Full-Time Hours)
                </p>
                <p className="text-slate-500 text-xs mt-2">
                  Example: £35,000 × (24 ÷ 37.5) = £22,400
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Common Working Patterns</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex justify-between">
                  <span>Full-time (37.5 hrs)</span>
                  <span className="text-emerald-400">100%</span>
                </li>
                <li className="flex justify-between">
                  <span>4 days (30 hrs)</span>
                  <span className="text-emerald-400">80%</span>
                </li>
                <li className="flex justify-between">
                  <span>3 days (22.5 hrs)</span>
                  <span className="text-emerald-400">60%</span>
                </li>
                <li className="flex justify-between">
                  <span>Half-time (18.75 hrs)</span>
                  <span className="text-emerald-400">50%</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Rata Examples Table */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Pro Rata Salary Examples</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-700">
                    <th className="text-left py-2 px-3">Full-Time Salary</th>
                    <th className="text-right py-2 px-3">4 Days (80%)</th>
                    <th className="text-right py-2 px-3">3 Days (60%)</th>
                    <th className="text-right py-2 px-3">Half-Time (50%)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£25,000</td>
                    <td className="text-right py-2 px-3">£20,000</td>
                    <td className="text-right py-2 px-3">£15,000</td>
                    <td className="text-right py-2 px-3">£12,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£35,000</td>
                    <td className="text-right py-2 px-3">£28,000</td>
                    <td className="text-right py-2 px-3">£21,000</td>
                    <td className="text-right py-2 px-3">£17,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-2 px-3">£45,000</td>
                    <td className="text-right py-2 px-3">£36,000</td>
                    <td className="text-right py-2 px-3">£27,000</td>
                    <td className="text-right py-2 px-3">£22,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">£60,000</td>
                    <td className="text-right py-2 px-3">£48,000</td>
                    <td className="text-right py-2 px-3">£36,000</td>
                    <td className="text-right py-2 px-3">£30,000</td>
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
            Pro Rata Salary Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What does pro rata salary mean?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Pro rata means "in proportion" in Latin. A pro rata salary is the proportional amount you earn when working fewer hours than a full-time equivalent. For example, if a full-time role pays £40,000 and you work 3 days instead of 5, your pro rata salary would be £24,000 (60% of the full-time salary).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I calculate my pro rata salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To calculate your pro rata salary, divide your working hours by the full-time hours, then multiply by the full-time salary. For example: If full-time is 37.5 hours at £30,000 and you work 22.5 hours: (22.5 ÷ 37.5) × £30,000 = £18,000 pro rata salary.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is holiday entitlement pro rata too?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, holiday entitlement is also calculated pro rata. If full-time employees get 28 days holiday and you work 60% of full-time hours, you'd get 16.8 days (28 × 0.6). This includes bank holidays. The minimum statutory entitlement is 5.6 weeks pro rata.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What are full-time hours in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                There's no legal definition, but typical full-time hours in the UK are 35-40 hours per week. Common standards are 37.5 hours (7.5 hours × 5 days) or 40 hours (8 hours × 5 days). Some industries use different standards - always check with your employer what they consider full-time hours.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How does tax work on pro rata salary?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Tax on a pro rata salary works the same as any other salary - you get the full personal allowance (£12,570) and pay tax on earnings above that. Part-time workers often pay less tax overall because their annual earnings are lower. Our calculator shows your exact take home pay after tax.
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
                <li><a href="/pro-rata-salary-calculator" className="hover:text-emerald-400">Pro Rata Calculator</a></li>
                <li><a href="/hourly-salary-calculator" className="hover:text-emerald-400">Hourly Salary Calculator</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
                <li><a href="/nhs-salary-calculator" className="hover:text-emerald-400">NHS Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <p className="text-sm text-slate-400">
                Pro rata salary calculator using 2025/26 tax rates. Visit{' '}
                <a href="https://www.gov.uk/part-time-worker-rights" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">GOV.UK</a>
                {' '}for part-time worker rights.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Pro Rata Salary Calculator UK - Calculate your part-time salary
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
