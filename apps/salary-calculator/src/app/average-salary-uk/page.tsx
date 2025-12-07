import { Metadata } from 'next'
import { SalaryCalculator } from '../../components/SalaryCalculator'

export const metadata: Metadata = {
  title: 'Average Salary UK 2025 | UK Average Salary Calculator',
  description: 'What is the average salary in the UK? Use our average salary calculator to compare your earnings. UK average salary is £35,464. See average wages by age, region and industry.',
  keywords: 'average salary calculator, average salary uk, average salary uk calculator, uk average salary calculator, average wage calculator, average salary calculator uk, uk average salary, average pay calculator, average earnings uk, median salary uk, salary comparison calculator uk',
  openGraph: {
    title: 'Average Salary UK 2025 | UK Average Salary Calculator',
    description: 'Compare your salary to the UK average. Use our average salary calculator to see how you compare.',
    type: 'website',
    url: 'https://salarycalculator.quest/average-salary-uk',
  },
  alternates: {
    canonical: 'https://salarycalculator.quest/average-salary-uk',
  },
}

const AVERAGE_SALARIES = {
  overall: { median: 35464, mean: 43800 },
  byAge: [
    { age: '18-21', median: 22547 },
    { age: '22-29', median: 31461 },
    { age: '30-39', median: 38131 },
    { age: '40-49', median: 40040 },
    { age: '50-59', median: 37546 },
    { age: '60+', median: 33825 },
  ],
  byRegion: [
    { region: 'London', median: 44370 },
    { region: 'South East', median: 36432 },
    { region: 'East of England', median: 34753 },
    { region: 'Scotland', median: 34584 },
    { region: 'South West', median: 33098 },
    { region: 'North West', median: 32793 },
    { region: 'West Midlands', median: 32469 },
    { region: 'East Midlands', median: 31878 },
    { region: 'Yorkshire', median: 31766 },
    { region: 'Wales', median: 31461 },
    { region: 'North East', median: 31140 },
    { region: 'Northern Ireland', median: 30810 },
  ],
}

export default function AverageSalaryUKPage() {
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
                <span className="text-xl font-bold text-white">Average <span className="text-emerald-400">Salary UK</span></span>
                <p className="text-xs text-slate-400">UK Salary Comparison</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Salary Calculator</a>
              <a href="/wage-calculator" className="text-slate-300 hover:text-white transition-colors">Wage Calculator</a>
              <a href="/annual-salary-calculator" className="text-slate-300 hover:text-white transition-colors">Annual Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Average Salary
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-6">
            The <strong>UK average salary</strong> is £35,464 (median). Use our average salary calculator to compare your earnings and see how your salary ranks.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/30">
              <div className="text-3xl font-bold text-emerald-400">£35,464</div>
              <div className="text-sm text-slate-400">Median Salary</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-3xl font-bold text-white">£43,800</div>
              <div className="text-sm text-slate-400">Mean Salary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Compare Your Salary</h2>
          <p className="text-slate-400 text-sm">Enter your salary below to see how you compare to the UK average</p>
        </div>
        <SalaryCalculator />
      </section>

      {/* Average Salary Data Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            UK Average Salary by Category
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* By Age */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Average Salary by Age</h3>
              <div className="space-y-3">
                {AVERAGE_SALARIES.byAge.map((item) => (
                  <div key={item.age} className="flex items-center justify-between">
                    <span className="text-slate-400">{item.age}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${(item.median / 45000) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-medium w-20 text-right">£{item.median.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">Source: ONS Annual Survey of Hours and Earnings 2024</p>
            </div>

            {/* By Region */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Average Salary by Region</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {AVERAGE_SALARIES.byRegion.map((item) => (
                  <div key={item.region} className="flex items-center justify-between">
                    <span className="text-slate-400">{item.region}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${(item.median / 50000) * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-medium w-20 text-right">£{item.median.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">Source: ONS Annual Survey of Hours and Earnings 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Percentiles */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            UK Salary Percentiles
          </h2>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <p className="text-slate-400 text-sm mb-6 text-center">
              See where your salary ranks compared to all UK workers
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Top 1%</span>
                <span className="text-white font-medium">£180,000+</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Top 5%</span>
                <span className="text-white font-medium">£87,000+</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Top 10%</span>
                <span className="text-white font-medium">£62,000+</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Top 25%</span>
                <span className="text-emerald-400 font-medium">£46,000+</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50 bg-emerald-500/10 -mx-4 px-4">
                <span className="text-emerald-400 font-medium">Median (50%)</span>
                <span className="text-emerald-400 font-bold">£35,464</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                <span className="text-slate-400">Bottom 25%</span>
                <span className="text-white font-medium">£26,000 or less</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400">Bottom 10%</span>
                <span className="text-white font-medium">£19,000 or less</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Average Salary UK FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the average salary in the UK 2025?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The average salary in the UK for 2025 is £35,464 (median) or £43,800 (mean). The median is generally considered more representative as it's not skewed by extremely high earners. This varies significantly by age, region, and industry. London has the highest average at £44,370.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is a good salary in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                A "good" salary depends on your circumstances and location. Generally, anything above £46,000 puts you in the top 25% of UK earners. In London, you'd need closer to £55,000 for the same standard of living. A salary of £62,000+ puts you in the top 10% nationally.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I compare my salary to the UK average?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Use our average salary calculator above to compare your earnings. Enter your annual salary and compare it to the UK median of £35,464. You can also compare by age group and region to get a more accurate picture. Remember to consider factors like experience, qualifications, and industry.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is the mean salary higher than the median?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The mean (£43,800) is higher than the median (£35,464) because it's pulled up by very high earners. A small number of people earning £500,000+ significantly increases the average. The median gives a better picture of what a "typical" person earns, as it's the middle point where 50% earn more and 50% earn less.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What salary is top 10% in UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To be in the top 10% of UK earners, you need to earn approximately £62,000 or more per year. This puts you in the higher rate tax bracket (40%). The top 5% earn £87,000+ and the top 1% earn £180,000+. These figures are based on full-time employee data.
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
                <li><a href="/average-salary-uk" className="hover:text-emerald-400">Average Salary UK</a></li>
                <li><a href="/wage-calculator" className="hover:text-emerald-400">Wage Calculator UK</a></li>
                <li><a href="/annual-salary-calculator" className="hover:text-emerald-400">Annual Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">More Tools</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/pay-calculator" className="hover:text-emerald-400">Pay Calculator UK</a></li>
                <li><a href="/daily-salary-calculator" className="hover:text-emerald-400">Daily Salary Calculator</a></li>
                <li><a href="/salary-converter" className="hover:text-emerald-400">Salary Converter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Data Sources</h4>
              <p className="text-sm text-slate-400">
                Average salary data from ONS Annual Survey of Hours and Earnings. Visit{' '}
                <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">ONS</a>
                {' '}for official statistics.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Average Salary UK - Compare your earnings to the UK average
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
