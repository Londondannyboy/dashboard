import { Metadata } from 'next'
import { ChildcareCalculator } from '../components/ChildcareCalculator'

export const metadata: Metadata = {
  title: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
  description: 'Free UK childcare calculator 2025. Calculate nursery, childminder and nanny costs by region and age. Check eligibility for Tax-Free Childcare, 30 free hours, and other government support schemes.',
  keywords: 'childcare calculator, childcare costs uk, nursery costs, childminder costs, nanny costs, childcare calculator uk, cost of childcare, tax free childcare calculator, 30 hours free childcare, childcare costs by age, nursery fees calculator, how much is childcare uk, childcare budget planner',
  openGraph: {
    title: 'Childcare Calculator UK 2025 | Free Childcare Cost Calculator',
    description: 'Calculate UK childcare costs instantly. Compare nursery, childminder and nanny costs by region.',
    type: 'website',
    url: 'https://childcarecalculator.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Childcare Calculator UK 2025',
    description: 'Calculate UK childcare costs with our free calculator.',
  },
  alternates: {
    canonical: 'https://childcarecalculator.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center" role="img" aria-label="Childcare Calculator UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#costs" className="text-slate-300 hover:text-white transition-colors">Costs</a>
              <a href="#support" className="text-slate-300 hover:text-white transition-colors">Support</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Childcare Calculator
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Use our free <strong>UK childcare calculator</strong> to work out how much childcare will cost you. Compare nurseries, childminders, nannies and more across all UK regions.
          </p>
          <p className="text-sm text-slate-500">
            Check your eligibility for Tax-Free Childcare, 30 free hours, and other government support.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <ChildcareCalculator />
      </section>

      {/* Average Costs Section */}
      <section id="costs" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Average UK Childcare Costs 2025
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Childcare costs vary significantly by type, age group, and region. Here are the average weekly costs for full-time care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nursery Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Nursery / Day Nursery</h3>
              <p className="text-2xl font-bold text-pink-400 mb-2">£200 - £400/week</p>
              <p className="text-sm text-slate-400">
                Full-time nursery care (50 hours/week). Costs vary significantly by region, with Inner London averaging £370/week for under 2s.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">Under 2s typically cost 15-20% more due to higher staff ratios (1:3 vs 1:8 for over 3s)</p>
              </div>
            </div>

            {/* Childminder Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Childminder</h3>
              <p className="text-2xl font-bold text-purple-400 mb-2">£180 - £320/week</p>
              <p className="text-sm text-slate-400">
                Home-based care from a registered childminder. Often more flexible hours and smaller group sizes than nurseries.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">Childminders can care for max 6 children under 8 (max 3 under 5)</p>
              </div>
            </div>

            {/* Nanny Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Nanny (Private)</h3>
              <p className="text-2xl font-bold text-blue-400 mb-2">£400 - £700/week</p>
              <p className="text-sm text-slate-400">
                One-to-one care in your home. You become an employer and must handle tax, NI, and pension contributions.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">Costs shown are net; employer costs add ~15-20% for tax/NI</p>
              </div>
            </div>

            {/* Au Pair Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Au Pair</h3>
              <p className="text-2xl font-bold text-teal-400 mb-2">£85 - £150/week</p>
              <p className="text-sm text-slate-400">
                Live-in help in exchange for accommodation, food, and pocket money. Limited to 30 hours/week of childcare.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">Must provide private room, meals, and time for language classes</p>
              </div>
            </div>

            {/* After-School Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">After-School Club</h3>
              <p className="text-2xl font-bold text-amber-400 mb-2">£50 - £100/week</p>
              <p className="text-sm text-slate-400">
                Care after school hours (typically 3pm-6pm). Often run by schools or community organisations.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">Term-time only (38 weeks). Holiday clubs available separately.</p>
              </div>
            </div>

            {/* Holiday Club Card */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Holiday Club</h3>
              <p className="text-2xl font-bold text-green-400 mb-2">£150 - £300/week</p>
              <p className="text-sm text-slate-400">
                Full-day care during school holidays. Often includes activities, trips, and meals.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500">13 weeks of school holidays per year in England</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Support Section */}
      <section id="support" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Government Childcare Support 2025
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            There are several government schemes to help with childcare costs. Our calculator automatically checks your eligibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tax-Free Childcare */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tax-Free Childcare</h3>
                  <p className="text-2xl font-bold text-green-400 mb-2">Up to £2,000/year per child</p>
                  <p className="text-sm text-slate-400 mb-4">
                    For every £8 you pay into your childcare account, the government adds £2. Available for children under 12 (or 17 if disabled).
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><strong>Eligibility:</strong></p>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Both parents working (or single parent working)</li>
                      <li>Each parent earning at least £2,379/year (16 hrs at NMW)</li>
                      <li>Each parent earning under £100,000/year</li>
                      <li>Not receiving Tax Credits, Universal Credit, or childcare vouchers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 30 Hours Free Childcare */}
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">30 Hours Free Childcare</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-2">30 hours/week (term time)</p>
                  <p className="text-sm text-slate-400 mb-4">
                    Extended free childcare for 3-4 year olds of working parents. Worth approximately £6,000/year.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><strong>Eligibility:</strong></p>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Child is 3 or 4 years old</li>
                      <li>Both parents working 16+ hours/week</li>
                      <li>Each parent earning under £100,000/year</li>
                      <li>Starts from term after eligibility confirmed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 15 Hours Universal */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">15 Hours Free (Universal)</h3>
                  <p className="text-2xl font-bold text-purple-400 mb-2">15 hours/week (term time)</p>
                  <p className="text-sm text-slate-400 mb-4">
                    All 3-4 year olds are entitled to 15 hours of free early education, regardless of parental work status.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><strong>Eligibility:</strong></p>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Universal for all 3-4 year olds</li>
                      <li>Starts from term after 3rd birthday</li>
                      <li>38 weeks per year (term time)</li>
                      <li>Can be stretched over more weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* New Entitlements 2024 */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl p-6 border border-amber-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">New! Under 3s Free Hours</h3>
                  <p className="text-2xl font-bold text-amber-400 mb-2">15 hours from 9 months</p>
                  <p className="text-sm text-slate-400 mb-4">
                    From September 2024, working parents of children from 9 months can access 15 free hours. Expanding to 30 hours from September 2025.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-300"><strong>Timeline:</strong></p>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>April 2024: 15 hrs for 2 year olds (working parents)</li>
                      <li>Sept 2024: 15 hrs from 9 months</li>
                      <li>Sept 2025: 30 hrs from 9 months to school age</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Universal Credit Childcare */}
          <div className="mt-8 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">Universal Credit Childcare Element</h3>
            <p className="text-slate-400 mb-4">
              If you receive Universal Credit and pay for registered childcare, you can claim back up to 85% of your childcare costs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Maximum for 1 child</p>
                <p className="text-xl font-bold text-white">£1,014.63/month</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm">Maximum for 2+ children</p>
                <p className="text-xl font-bold text-white">£1,739.37/month</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Note: You cannot claim Universal Credit childcare support and Tax-Free Childcare at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Costs Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Childcare Costs by Region
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Childcare costs vary significantly across the UK, with London being the most expensive region.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Region</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Nursery (Under 2)</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">Childminder</th>
                  <th className="text-right py-3 px-4 text-slate-400 font-medium">After-School</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">Inner London</td>
                  <td className="py-3 px-4 text-right text-pink-400">£10.50/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£8.40/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£7.00/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">Outer London</td>
                  <td className="py-3 px-4 text-right text-pink-400">£9.38/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£7.50/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£6.25/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">South East</td>
                  <td className="py-3 px-4 text-right text-pink-400">£8.63/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£6.90/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£5.75/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">South West</td>
                  <td className="py-3 px-4 text-right text-pink-400">£7.50/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£6.00/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£5.00/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">East Midlands</td>
                  <td className="py-3 px-4 text-right text-pink-400">£7.13/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£5.70/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£4.75/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">North East</td>
                  <td className="py-3 px-4 text-right text-pink-400">£6.60/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£5.28/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£4.40/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">Scotland</td>
                  <td className="py-3 px-4 text-right text-pink-400">£7.13/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£5.70/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£4.75/hr</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 text-white">Wales</td>
                  <td className="py-3 px-4 text-right text-pink-400">£6.75/hr</td>
                  <td className="py-3 px-4 text-right text-purple-400">£5.40/hr</td>
                  <td className="py-3 px-4 text-right text-amber-400">£4.50/hr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Rates are indicative based on 2024 data. Actual costs vary by provider. Use the calculator above for personalised estimates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Childcare Calculator UK - Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does childcare cost in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The average cost of full-time nursery care in the UK is £269 per week for a child under 2, which equates to around £14,000 per year. However, costs vary significantly by region - Inner London averages over £370 per week, while the North East averages around £230. Childminders typically cost 10-20% less than nurseries, while nannies cost significantly more but offer one-to-one care.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is Tax-Free Childcare and am I eligible?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Tax-Free Childcare is a government scheme where for every £8 you pay into an online account, the government adds £2 - up to £2,000 per child per year (or £4,000 for disabled children). To be eligible, both parents must be working and earning at least £2,379 per year (equivalent to 16 hours at National Minimum Wage), but neither parent can earn over £100,000. You cannot use Tax-Free Childcare if you receive Tax Credits, Universal Credit, or childcare vouchers.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I get 30 hours free childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To get 30 hours free childcare for your 3 or 4 year old, both parents (or one parent in single-parent households) must be working at least 16 hours per week and earning below £100,000 each. You need to apply through the government's Childcare Service and will receive an eligibility code to give to your childcare provider. The entitlement starts from the term after your child turns 3 and after you receive your eligibility code.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between 15 and 30 free hours?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The 15 hours universal entitlement is available to ALL 3-4 year olds, regardless of whether parents work. The additional 15 hours (making 30 total) is only available to working families where both parents work at least 16 hours per week and earn under £100,000 each. The 15 hours universal entitlement is also available for some 2 year olds from disadvantaged backgrounds or on certain benefits.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use Tax-Free Childcare with 30 free hours?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes! You can use Tax-Free Childcare alongside the 30 hours free childcare entitlement. This is a great way to reduce costs further. For example, if your nursery charges for 50 hours per week, you'd get 30 hours free and could use Tax-Free Childcare to help pay for the remaining 20 hours, plus any additional fees like meals, nappies, or activities that aren't covered by the free hours.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What childcare costs more - nursery or childminder?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                On average, nurseries are more expensive than childminders. A full-time nursery place for an under 2 costs around £269/week nationally, while a childminder costs around £243/week. However, this varies by region and individual provider. Childminders often offer more flexible hours and a home-like environment, while nurseries typically have more structured educational activities and are available year-round with no cover needed for holidays.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is childcare for under 2s more expensive?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Childcare for under 2s is more expensive due to legal staff-to-child ratio requirements. In England, nurseries must have 1 staff member for every 3 children under 2 (1:3 ratio), compared to 1:4 for 2 year olds and 1:8 for children aged 3 and over. This means nurseries need more staff to care for younger children, increasing costs significantly. The difference can be 15-25% higher for under 2s compared to over 3s.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the new free childcare for under 3s?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The government is expanding free childcare to younger children. From April 2024, working parents of 2 year olds can access 15 free hours per week. From September 2024, this extends to children from 9 months old. By September 2025, eligible working parents will be able to access 30 free hours from when their child is 9 months until they start school. This could save families thousands of pounds per year.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much can I claim back on Universal Credit for childcare?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                If you receive Universal Credit, you can claim back up to 85% of your childcare costs, up to a maximum of £1,014.63 per month for one child or £1,739.37 for two or more children. You must be working (or have an offer of work starting within 31 days) and use registered childcare. Note that you cannot claim Universal Credit childcare support alongside Tax-Free Childcare - you must choose one or the other.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is an au pair cheaper than a nanny?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, au pairs are significantly cheaper than nannies. An au pair typically receives £85-£150 per week in pocket money, plus accommodation and food. A nanny costs £400-£700+ per week in salary alone, plus employer's National Insurance and pension contributions. However, au pairs can only work up to 30 hours per week and are not qualified childcarers - they're typically young people wanting to experience life in another country while providing some childcare help.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How accurate is this childcare calculator?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Our childcare calculator uses average costs from the 2024 Coram Family and Childcare Survey and official government support thresholds. It provides a good estimate for budgeting purposes, but actual costs vary significantly between providers, even in the same area. We recommend using this calculator to get a ballpark figure, then contacting local providers for accurate quotes. Government support eligibility is based on published criteria but final eligibility is determined by the official Childcare Service.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's not included in the free hours?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                The free hours cover basic childcare and early education only. Providers can charge additional fees for meals, snacks, nappies, sun cream, consumables, trips, and activities. Some providers also charge for "extras" like yoga, music classes, or forest school sessions. Additionally, if you need more than 38 weeks of care per year (the free hours are term-time only), you'll need to pay for the additional weeks, though some providers let you "stretch" your hours across more weeks.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Use the Childcare Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-pink-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Select Region</h3>
              <p className="text-sm text-slate-400">
                Choose your UK region to get accurate local cost estimates
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-pink-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Add Children</h3>
              <p className="text-sm text-slate-400">
                Enter each child's age, care type, and weekly hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-pink-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Check Support</h3>
              <p className="text-sm text-slate-400">
                Enter work status to see government support eligibility
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-pink-400">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">View Results</h3>
              <p className="text-sm text-slate-400">
                See your total costs and savings breakdown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Childcare Calculator UK</h4>
              <p className="text-sm text-slate-400">
                Free UK childcare calculator to estimate nursery, childminder and nanny costs. Check eligibility for government support including Tax-Free Childcare and free hours.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Childcare Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>Nursery / Day Nursery</li>
                <li>Childminder</li>
                <li>Nanny</li>
                <li>Au Pair</li>
                <li>After-School Club</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Government Support</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>Tax-Free Childcare</li>
                <li>30 Hours Free Childcare</li>
                <li>15 Hours Universal</li>
                <li>Universal Credit</li>
                <li>Childcare Vouchers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Official Resources</h4>
              <p className="text-sm text-slate-400">
                For official guidance and to apply for support visit{' '}
                <a
                  href="https://www.gov.uk/childcare-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300"
                >
                  GOV.UK Childcare Calculator
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              Childcare Calculator UK - Free childcare cost calculator for England, Wales, Scotland and Northern Ireland
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
