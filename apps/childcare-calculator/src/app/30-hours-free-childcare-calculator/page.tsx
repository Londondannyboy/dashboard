import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30 Hours Free Childcare Calculator UK 2025 | Check Eligibility',
  description: 'Free 30 hours childcare eligibility calculator for UK parents. Check if you qualify for 30 hours free childcare for 3-4 year olds. Calculate savings of up to £6,000 per year.',
  keywords: '30 hours free childcare calculator, 30 hours free childcare eligibility calculator, 30 free hours childcare calculator, 30 hours childcare calculator, 15 hours free childcare calculator, free childcare calculator, extended free childcare, working parents childcare',
  openGraph: {
    title: '30 Hours Free Childcare Calculator UK 2025',
    description: 'Check your eligibility for 30 hours free childcare and calculate your potential savings.',
    type: 'website',
    url: 'https://childcarecalculator.quest/30-hours-free-childcare-calculator',
  },
  alternates: {
    canonical: 'https://childcarecalculator.quest/30-hours-free-childcare-calculator',
  },
}

export default function ThirtyHoursFreeChildcarePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Childcare <span className="text-pink-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">UK Childcare Cost Calculator</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="/tax-free-childcare-calculator" className="text-slate-300 hover:text-white transition-colors">Tax-Free</a>
              <a href="/nursery-cost-calculator" className="text-slate-300 hover:text-white transition-colors">Nursery</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            30 Hours Free Childcare
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Check your eligibility for <strong>30 hours free childcare</strong> and see how much you could save. Working parents with 3-4 year olds could save up to £6,000 per year.
          </p>
          <p className="text-sm text-slate-500">
            Updated for 2025 with the latest eligibility criteria and new entitlements for under 3s.
          </p>
        </div>
      </section>

      {/* Eligibility Calculator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">30 Hours Free Childcare Eligibility Checker</h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">You are eligible for 30 hours if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Your child is 3 or 4 years old (from the term after their 3rd birthday)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Both parents are working (or you're a single working parent)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Each parent earns at least £183.70 per week (equivalent to 16 hours at National Living Wage)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">Neither parent earns over £100,000 per year</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/30">
                  <h4 className="text-white font-semibold mb-2">If You're Eligible</h4>
                  <p className="text-3xl font-bold text-green-400 mb-2">30 hours/week</p>
                  <p className="text-sm text-slate-400">38 weeks per year (term time)</p>
                  <p className="text-sm text-slate-400 mt-2">Total: 1,140 free hours per year</p>
                  <p className="text-lg font-semibold text-green-400 mt-4">Save up to £6,000/year</p>
                </div>

                <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">Universal Entitlement</h4>
                  <p className="text-3xl font-bold text-blue-400 mb-2">15 hours/week</p>
                  <p className="text-sm text-slate-400">Available to ALL 3-4 year olds</p>
                  <p className="text-sm text-slate-400 mt-2">Total: 570 free hours per year</p>
                  <p className="text-lg font-semibold text-blue-400 mt-4">Save up to £3,000/year</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.gov.uk/apply-30-hours-free-childcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Apply for 30 Hours Free Childcare
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            How Much Could You Save with 30 Free Hours?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            The exact savings depend on your childcare costs, but here's what typical families save:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-white font-semibold mb-2">London</h3>
              <p className="text-sm text-slate-400 mb-4">Average nursery rate: £8.50/hr</p>
              <div className="space-y-2">
                <p className="text-slate-300">15 hours: <span className="text-blue-400 font-semibold">£4,845/year</span></p>
                <p className="text-slate-300">30 hours: <span className="text-green-400 font-semibold">£9,690/year</span></p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-white font-semibold mb-2">South East</h3>
              <p className="text-sm text-slate-400 mb-4">Average nursery rate: £7.00/hr</p>
              <div className="space-y-2">
                <p className="text-slate-300">15 hours: <span className="text-blue-400 font-semibold">£3,990/year</span></p>
                <p className="text-slate-300">30 hours: <span className="text-green-400 font-semibold">£7,980/year</span></p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-white font-semibold mb-2">North / Midlands</h3>
              <p className="text-sm text-slate-400 mb-4">Average nursery rate: £5.50/hr</p>
              <div className="space-y-2">
                <p className="text-slate-300">15 hours: <span className="text-blue-400 font-semibold">£3,135/year</span></p>
                <p className="text-slate-300">30 hours: <span className="text-green-400 font-semibold">£6,270/year</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Entitlements 2024/2025 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            New Free Childcare Entitlements 2024/2025
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            The government is expanding free childcare to younger children. Here's the timeline:
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">NOW AVAILABLE</span>
                <span className="text-white font-semibold">April 2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">15 Hours Free for 2 Year Olds</h3>
              <p className="text-slate-400">Working parents with 2 year olds can now access 15 hours of free childcare per week.</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">NOW AVAILABLE</span>
                <span className="text-white font-semibold">September 2024</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">15 Hours Free from 9 Months</h3>
              <p className="text-slate-400">Working parents with children from 9 months old can access 15 hours of free childcare per week.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">COMING SOON</span>
                <span className="text-white font-semibold">September 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">30 Hours Free from 9 Months</h3>
              <p className="text-slate-400">Working parents will be able to access 30 hours free childcare from when their child is 9 months until they start school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            30 Hours Free Childcare - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I apply for 30 hours free childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Apply through the Government's Childcare Service at gov.uk/apply-30-hours-free-childcare. You'll need to create a childcare account, provide details about your work and income, and you'll receive an eligibility code within a few days. Give this code to your childcare provider along with your National Insurance number and child's date of birth. You must reconfirm your eligibility every 3 months.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                When can I start using 30 hours free childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Your child can start getting 30 hours from the term after they turn 3 AND after you receive your eligibility code. The terms start on 1 January, 1 April, and 1 September. For example, if your child turns 3 in February and you get your code in March, they can start from 1 April.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use 30 hours at any childcare provider?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can use the free hours at any Ofsted-registered provider that has signed up to offer the scheme, including nurseries, childminders, and some school nurseries. You can split the hours between up to 2 providers. Not all providers offer 30 hours, so check with them first.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What counts as "working" for 30 hours eligibility?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You're considered working if you're employed, self-employed, or on zero-hours contract and earn at least £183.70 per week on average (equivalent to 16 hours at National Living Wage). You're also eligible if you're on maternity/paternity/adoption leave, sick leave, or annual leave. If one parent doesn't work, you may still qualify if they receive certain disability benefits or are a foster parent.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use 30 hours with Tax-Free Childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! You can use both 30 hours free childcare AND Tax-Free Childcare together. Use the 30 free hours for your basic entitlement, then use Tax-Free Childcare to pay for any additional hours, meals, or extras. This combination provides maximum savings for working families.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between 15 and 30 hours free childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The 15 hours universal entitlement is available to ALL 3-4 year olds, regardless of whether parents work. The additional 15 hours (making 30 total) is only for working families who meet the eligibility criteria. Some 2 year olds from disadvantaged backgrounds also get 15 hours. From 2024, working parents of 2 year olds and children from 9 months also qualify for 15 hours.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What happens if I lose my job?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                If you stop working or your income drops below the threshold, you have a "grace period" to continue using the 30 hours while you look for new work. The grace period lasts until the end of the current term plus one more term. After that, you'll revert to the 15 hours universal entitlement which is available to all 3-4 year olds.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I stretch my 30 hours over more weeks?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, many providers allow you to "stretch" your hours across more weeks. Instead of 30 hours over 38 weeks, you could take fewer hours over 52 weeks (around 22 hours per week). This is useful if you need year-round childcare. Discuss stretching options with your provider - not all offer it.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Calculate Your Full Childcare Costs
          </h2>
          <p className="text-slate-400 mb-8">
            Use our comprehensive childcare calculator to see your total costs after applying 30 free hours and other government support.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Go to Full Calculator
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Childcare Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free UK childcare calculator including 30 hours free childcare eligibility checker and cost calculator.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Calculators</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/" className="hover:text-pink-400">Childcare Calculator</a></li>
                <li><a href="/30-hours-free-childcare-calculator" className="hover:text-pink-400">30 Hours Calculator</a></li>
                <li><a href="/tax-free-childcare-calculator" className="hover:text-pink-400">Tax-Free Childcare</a></li>
                <li><a href="/nursery-cost-calculator" className="hover:text-pink-400">Nursery Costs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Support Schemes</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/universal-credit-childcare-calculator" className="hover:text-pink-400">Universal Credit</a></li>
                <li><a href="/cost-of-raising-a-child" className="hover:text-pink-400">Cost of Raising a Child</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Resources</h4>
              <p className="text-sm text-slate-400">
                Apply for 30 hours at{' '}
                <a
                  href="https://www.gov.uk/apply-30-hours-free-childcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300"
                >
                  GOV.UK
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              30 Hours Free Childcare Calculator UK - Check eligibility and calculate savings
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
