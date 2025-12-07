import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tractor Insurance Cost UK 2025 | How Much Is Tractor Insurance?',
  description: 'How much is tractor insurance UK? Complete guide to tractor insurance cost in 2025. Compare prices from £150-£1,000+ depending on your tractor and use. Get cheap tractor insurance quotes.',
  keywords: 'tractor insurance cost, how much is tractor insurance, how much is tractor insurance uk, tractor insurance prices, cheap tractor insurance, tractor insurance cost uk, average tractor insurance cost, tractor insurance rates, affordable tractor insurance, tractor insurance premium',
  openGraph: {
    title: 'Tractor Insurance Cost UK 2025 | How Much Is Tractor Insurance?',
    description: 'Complete guide to tractor insurance cost UK. Find out how much tractor insurance costs and get cheap quotes.',
    type: 'website',
    url: 'https://tractorinsurance.quest/tractor-insurance-cost',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/tractor-insurance-cost',
  },
}

const COST_FACTORS = [
  {
    title: 'Tractor Value',
    description: 'The most significant factor. A £10,000 compact tractor costs less to insure than a £150,000 modern John Deere.',
    impact: 'High',
    icon: '💰',
  },
  {
    title: 'Type of Use',
    description: 'Smallholder/hobby use is cheapest. Agricultural contractors face higher premiums due to increased risk.',
    impact: 'High',
    icon: '🚜',
  },
  {
    title: 'Road Use',
    description: 'Tractors used extensively on public roads cost more. Declare if you travel more than 100 road miles per year.',
    impact: 'Medium',
    icon: '🛣️',
  },
  {
    title: 'Cover Level',
    description: 'Comprehensive costs more than Third Party Fire & Theft. TPO is cheapest but offers minimal protection.',
    impact: 'Medium',
    icon: '🛡️',
  },
  {
    title: 'Security',
    description: 'Locked building storage, trackers, and immobilisers can reduce premiums by 5-15%.',
    impact: 'Medium',
    icon: '🔒',
  },
  {
    title: 'Location',
    description: 'Rural areas with low crime rates may have lower premiums than high-theft areas.',
    impact: 'Low',
    icon: '📍',
  },
  {
    title: 'Claims History',
    description: 'A clean record helps. Some insurers offer no-claims discounts for tractors.',
    impact: 'Low',
    icon: '📋',
  },
  {
    title: 'Driver Age/Experience',
    description: 'Young or inexperienced operators may face higher premiums.',
    impact: 'Low',
    icon: '👤',
  },
]

export default function TractorInsuranceCostPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Tractor <span className="text-green-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Agricultural Cover</p>
              </div>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <Link href="/#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</Link>
              <Link href="/vintage-tractor-insurance" className="text-slate-300 hover:text-white transition-colors">Vintage</Link>
              <Link href="/tractor-insurance-cost" className="text-green-400 font-medium">Costs</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            How Much Is Tractor Insurance
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> UK?</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            <strong>Tractor insurance cost</strong> in the UK typically ranges from £150 to over £1,000 per year. The exact price depends on your tractor's value, how you use it, and the level of cover you need.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Get a personalised quote to find out exactly <strong>how much is tractor insurance</strong> for your specific situation.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Get Your Personalised Quote
          </Link>
        </div>
      </section>

      {/* Quick Cost Guide */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Tractor Insurance Cost UK 2025
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Here's a guide to typical <strong>tractor insurance prices</strong> based on use type. These are indicative costs - your actual premium depends on individual factors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/30">
              <div className="text-4xl font-bold text-green-400 mb-2">£150-£300</div>
              <h3 className="text-lg font-semibold text-white mb-2">Smallholder / Hobby</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Low value tractor (under £15k)</li>
                <li>• Occasional use on own land</li>
                <li>• Minimal road use</li>
                <li>• Third party or basic comprehensive</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
              <div className="text-4xl font-bold text-emerald-400 mb-2">£300-£500</div>
              <h3 className="text-lg font-semibold text-white mb-2">Farm Use (Own Land)</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Medium value tractor (£15k-£40k)</li>
                <li>• Regular farm work</li>
                <li>• Some road travel</li>
                <li>• Comprehensive cover</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="text-4xl font-bold text-amber-400 mb-2">£500-£800</div>
              <h3 className="text-lg font-semibold text-white mb-2">Agricultural Contractor</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Higher value tractor (£40k-£80k)</li>
                <li>• Work on other farms</li>
                <li>• Regular road travel</li>
                <li>• Full comprehensive + liability</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-orange-500/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">£800-£1,500+</div>
              <h3 className="text-lg font-semibold text-white mb-2">High Value / Fleet</h3>
              <ul className="text-sm text-slate-400 space-y-1">
                <li>• Premium tractors (£80k+)</li>
                <li>• Multiple vehicles</li>
                <li>• Heavy commercial use</li>
                <li>• Maximum cover levels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Value */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Tractor Insurance Cost by Vehicle Value
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>How much is tractor insurance UK</strong> for different tractor values? Here's a breakdown assuming comprehensive cover for farm use.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Tractor Value</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Typical Annual Premium</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Example Tractors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr>
                  <td className="px-6 py-4 text-slate-300">Under £5,000</td>
                  <td className="px-6 py-4 text-green-400 font-semibold">£100-£200</td>
                  <td className="px-6 py-4 text-slate-400">Older compact tractors, vintage models</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">£5,000 - £15,000</td>
                  <td className="px-6 py-4 text-green-400 font-semibold">£150-£300</td>
                  <td className="px-6 py-4 text-slate-400">Used Kubota, older Massey Ferguson</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">£15,000 - £30,000</td>
                  <td className="px-6 py-4 text-green-400 font-semibold">£250-£400</td>
                  <td className="px-6 py-4 text-slate-400">Mid-range Kubota, used New Holland</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">£30,000 - £50,000</td>
                  <td className="px-6 py-4 text-amber-400 font-semibold">£350-£550</td>
                  <td className="px-6 py-4 text-slate-400">New compact tractors, used John Deere</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">£50,000 - £80,000</td>
                  <td className="px-6 py-4 text-amber-400 font-semibold">£450-£700</td>
                  <td className="px-6 py-4 text-slate-400">Mid-range John Deere, New Holland, Fendt</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">£80,000 - £120,000</td>
                  <td className="px-6 py-4 text-orange-400 font-semibold">£600-£900</td>
                  <td className="px-6 py-4 text-slate-400">Large John Deere, Case IH, Fendt</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300">Over £120,000</td>
                  <td className="px-6 py-4 text-orange-400 font-semibold">£800-£1,500+</td>
                  <td className="px-6 py-4 text-slate-400">Premium Fendt, large Case IH, Claas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What Affects Tractor Insurance Cost?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Understanding what influences <strong>tractor insurance prices</strong> helps you find ways to reduce your premium.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COST_FACTORS.map((factor) => (
              <div key={factor.title} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{factor.icon}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    factor.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                    factor.impact === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">{factor.title}</h3>
                <p className="text-xs text-slate-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Cheap Tractor Insurance */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            How to Get Cheap Tractor Insurance
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Tips to reduce your <strong>tractor insurance cost</strong> without compromising on cover.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Compare Quotes</h3>
                  <p className="text-sm text-slate-400">
                    Don't accept the first quote. Use our comparison tool to get multiple tractor insurance quotes and find the best deal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Improve Security</h3>
                  <p className="text-sm text-slate-400">
                    Store your tractor in a locked building. Fit an approved tracker or immobiliser. Some insurers offer up to 15% discount for good security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Increase Your Excess</h3>
                  <p className="text-sm text-slate-400">
                    A higher voluntary excess (the amount you pay in a claim) can reduce your premium. Only do this if you can afford the excess.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Pay Annually</h3>
                  <p className="text-sm text-slate-400">
                    Monthly payments usually include interest. Paying annually upfront can save 10-15% on your total premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Limit Road Use</h3>
                  <p className="text-sm text-slate-400">
                    If possible, keep road miles under 100 per year. Heavy road use increases premiums significantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Bundle Multiple Vehicles</h3>
                  <p className="text-sm text-slate-400">
                    If you have multiple tractors or farm vehicles, fleet insurance may offer better value than insuring each separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tractor Insurance Cost FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group" open>
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is tractor insurance per month?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Monthly tractor insurance typically ranges from £15-£100+ per month, depending on your tractor and use. However, paying monthly usually costs more overall due to interest charges. A £300 annual premium might cost £330-£360 if paid monthly.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is tractor insurance so expensive?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Tractor insurance can seem expensive because modern tractors are high-value assets (£50,000-£200,000+), farm theft is increasing, and agricultural machinery requires specialist cover. However, compared to the cost of replacing an uninsured tractor, insurance represents good value.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is vintage tractor insurance cheaper?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Often yes. Vintage tractors typically have lower values, are used less frequently, and are driven carefully by enthusiasts. Basic vintage tractor insurance can start from £80-£150 for show and road run use. However, rare or fully restored classics with high agreed values may cost more.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does tractor insurance cost more for contractors?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, agricultural contractor insurance typically costs more than farming on your own land. Contractors face higher risks from working on unfamiliar sites, more road travel, and working with multiple clients. Expect to pay 30-50% more than standard farm use premiums.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How can I get the cheapest tractor insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To find cheap tractor insurance: compare multiple quotes, improve security (locked storage, tracker), increase your voluntary excess, pay annually, limit road miles, and consider whether you need comprehensive or if TPFT would suffice. Maintain a claims-free record and shop around at renewal.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Find Out Your Tractor Insurance Cost
          </h2>
          <p className="text-slate-300 mb-8">
            Get a personalised quote to find out exactly <strong>how much is tractor insurance</strong> for your specific situation. Compare prices and save.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Tractor Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare tractor insurance costs from specialist UK agricultural insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insurance Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/" className="hover:text-green-400">Tractor Insurance</Link></li>
                <li><Link href="/vintage-tractor-insurance" className="hover:text-green-400">Vintage Tractor Insurance</Link></li>
                <li><Link href="/tractor-insurance-cost" className="hover:text-green-400">Tractor Insurance Cost</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">By Make</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/john-deere-tractor-insurance" className="hover:text-green-400">John Deere Insurance</Link></li>
                <li><Link href="/massey-ferguson-tractor-insurance" className="hover:text-green-400">Massey Ferguson Insurance</Link></li>
                <li><Link href="/kubota-tractor-insurance" className="hover:text-green-400">Kubota Insurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/articles" className="hover:text-green-400">Farming News</Link></li>
                <li><Link href="/#faq" className="hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tractor Insurance UK. Tractor insurance cost guide for UK farmers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
