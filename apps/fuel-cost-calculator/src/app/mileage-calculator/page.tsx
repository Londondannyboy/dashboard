import { Metadata } from 'next'
import Link from 'next/link'
import { FuelCostCalculator } from '../../components/FuelCostCalculator'

export const metadata: Metadata = {
  title: 'Mileage Calculator UK | Calculate Cost Per Mile & Business Mileage',
  description: 'Free UK mileage calculator. Calculate cost per mile, business mileage expenses, and HMRC allowance claims. Perfect for freelancers, contractors, and employees.',
  keywords: 'mileage calculator uk, cost per mile calculator, business mileage calculator, mileage cost calculator, mileage expense calculator',
  openGraph: {
    title: 'Mileage Calculator UK',
    description: 'Calculate your mileage costs and HMRC business mileage allowance claims instantly.',
    type: 'website',
    url: 'https://fuelcostcalculator.quest/mileage-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mileage Calculator UK',
    description: 'Free mileage cost and business allowance calculator.',
  },
  alternates: {
    canonical: 'https://fuelcostcalculator.quest/mileage-calculator',
  },
}

export default function MileageCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Mileage <span className="text-indigo-400">Calculator</span>
                </span>
                <p className="text-xs text-slate-400">Cost Per Mile Tracker</p>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Calculator</a>
              <a href="#guide" className="text-slate-300 hover:text-white transition-colors">Guide</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Mileage Calculator
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Calculate your cost per mile, track business mileage expenses, and claim HMRC allowances instantly.
          </p>
          <p className="text-sm text-slate-500">
            Free mileage calculator for freelancers, contractors, and business drivers.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-3">How to Use This Calculator</h2>
            <p className="text-slate-300 text-sm mb-3">
              Enter your mileage, fuel consumption, and fuel price to calculate:
            </p>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>✓ Cost per mile (actual running costs)</li>
              <li>✓ Total journey cost</li>
              <li>✓ Comparison with HMRC allowance rates (45p/25p per mile)</li>
            </ul>
          </div>
          <FuelCostCalculator />
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Mileage Calculator Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Cost Per Mile</h3>
              <p className="text-slate-300 text-sm mb-4">
                Calculate your actual fuel cost per mile by dividing total fuel cost by distance traveled.
              </p>
              <div className="bg-slate-700/30 p-3 rounded text-sm text-slate-300">
                <p className="mb-2"><strong>Example:</strong></p>
                <p>Distance: 100 miles</p>
                <p>Fuel cost: £12</p>
                <p className="text-blue-400 font-semibold">Cost per mile: 12p</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">HMRC Rates</h3>
              <p className="text-slate-300 text-sm mb-4">
                Compare your actual cost to HMRC's official mileage allowance payment rates.
              </p>
              <div className="bg-slate-700/30 p-3 rounded text-sm text-slate-300">
                <p className="mb-2"><strong>Official Rates 2025:</strong></p>
                <p>First 10,000 miles: <strong>45p/mile</strong></p>
                <p>Additional miles: <strong>25p/mile</strong></p>
                <p className="text-green-400 text-xs mt-2">Tax relief available</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">When to Use This Calculator</h3>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>✓ <strong>Freelancers & Contractors:</strong> Calculate business mileage expenses for tax claims</li>
              <li>✓ <strong>Employees:</strong> Track business driving costs for reimbursement requests</li>
              <li>✓ <strong>Self-Employed:</strong> Determine actual running costs vs. HMRC allowance claims</li>
              <li>✓ <strong>Fleet Managers:</strong> Monitor vehicle running costs and efficiency</li>
              <li>✓ <strong>Commuters:</strong> Calculate work journey expenses</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">45p</div>
              <p className="text-slate-300 text-sm">First 10,000 miles per year</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25p</div>
              <p className="text-slate-300 text-sm">After 10,000 miles per year</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">£5,750+</div>
              <p className="text-slate-300 text-sm">Potential annual claim at 15k miles</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Mileage Calculator FAQ
          </h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>How do I calculate cost per mile?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Divide the total fuel cost by the distance traveled: <strong>Cost ÷ Miles = Cost Per Mile</strong></p>
                <p>Example: £50 fuel for 200 miles = 25p per mile</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Can I claim HMRC mileage allowance?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>Yes, if you're self-employed, freelance, or use your car for work. Visit our <Link href="/blog/uk-mileage-rates" className="text-blue-400 hover:text-blue-300 underline">UK Mileage Rates guide</Link> for complete details.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>What's the difference between actual cost and HMRC rate?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p><strong>Actual cost:</strong> Your real fuel, maintenance, and insurance expenses per mile</p>
                <p><strong>HMRC rate:</strong> Government-set allowance (45p/25p) - you claim this for tax relief regardless of actual costs</p>
                <p>If your actual cost exceeds HMRC rate, you can claim the higher amount.</p>
              </div>
            </details>

            <details className="group bg-slate-800/50 rounded-lg border border-slate-700/50 cursor-pointer">
              <summary className="p-4 font-semibold text-white flex justify-between items-center">
                <span>Is this calculator HMRC approved?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-300 text-sm space-y-2">
                <p>This calculator uses official HMRC mileage allowance rates. Use your results to support your tax claims. Always keep detailed mileage records for HMRC verification.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 border-t border-slate-700/50 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-4">Need More Fuel Cost Tools?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Fuel Cost Calculator</h4>
              <p className="text-xs text-slate-400">Main calculator</p>
            </Link>
            <Link href="/fuel-economy-calculator" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Fuel Economy</h4>
              <p className="text-xs text-slate-400">Calculate MPG</p>
            </Link>
            <Link href="/blog/uk-mileage-rates" className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h4 className="font-semibold text-white text-sm mb-1">Mileage Rates</h4>
              <p className="text-xs text-slate-400">Tax guide</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
