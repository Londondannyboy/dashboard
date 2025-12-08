import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Tractor Insurance UK 2025 | Best Tractor Insurance Comparison',
  description: 'Compare tractor insurance quotes from leading UK agricultural insurers. Find the best tractor insurance deals with our free comparison service. Cheap tractor insurance quotes in minutes.',
  keywords: 'compare tractor insurance, tractor insurance comparison, best tractor insurance, cheap tractor insurance, tractor insurance quotes, compare agricultural insurance, best agricultural tractor insurance, tractor insurance deals, cheapest tractor insurance uk',
  openGraph: {
    title: 'Compare Tractor Insurance UK 2025 | Best Deals & Quotes',
    description: 'Compare tractor insurance from specialist UK agricultural insurers. Find the best deals and cheapest quotes.',
    type: 'website',
    url: 'https://tractorinsurance.quest/compare-tractor-insurance',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/compare-tractor-insurance',
  },
}

const COMPARISON_FACTORS = [
  {
    factor: 'Cover Level',
    comprehensive: 'Full accidental damage, theft, fire, third party',
    tpft: 'Theft, fire, third party only',
    tpo: 'Third party only - legal minimum',
  },
  {
    factor: 'Typical Cost',
    comprehensive: '£400-£1,000+/year',
    tpft: '£250-£500/year',
    tpo: '£150-£300/year',
  },
  {
    factor: 'Best For',
    comprehensive: 'High-value tractors, regular use',
    tpft: 'Mid-value tractors, secure storage',
    tpo: 'Low-value or off-road only tractors',
  },
  {
    factor: 'Accidental Damage',
    comprehensive: '✓ Covered',
    tpft: '✗ Not covered',
    tpo: '✗ Not covered',
  },
  {
    factor: 'Theft Cover',
    comprehensive: '✓ Covered',
    tpft: '✓ Covered',
    tpo: '✗ Not covered',
  },
  {
    factor: 'Fire Damage',
    comprehensive: '✓ Covered',
    tpft: '✓ Covered',
    tpo: '✗ Not covered',
  },
]

const INSURERS = [
  { name: 'NFU Mutual', specialty: 'Whole-farm policies, local agents', rating: 4.5 },
  { name: 'Farmers & Mercantile', specialty: 'Agricultural specialists', rating: 4.3 },
  { name: 'Rural Insurance Group', specialty: 'Competitive pricing, online quotes', rating: 4.2 },
  { name: 'Cornish Mutual', specialty: 'Southwest focus, mutual benefits', rating: 4.4 },
  { name: 'Agricultural Insurance Services', specialty: 'Contractor cover specialists', rating: 4.1 },
  { name: 'Lycetts', specialty: 'High-value machinery, estates', rating: 4.3 },
]

export default function CompareTractorInsurancePage() {
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
              <Link href="/compare-tractor-insurance" className="text-green-400 font-medium">Compare</Link>
              <Link href="/tractor-insurance-cost" className="text-slate-300 hover:text-white transition-colors">Costs</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Compare & Save
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Compare Tractor Insurance
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            <strong>Compare tractor insurance</strong> quotes from leading UK agricultural insurers. Our <strong>tractor insurance comparison</strong> helps you find the <strong>best tractor insurance</strong> at the right price.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Find <strong>cheap tractor insurance</strong> without compromising on cover. Compare quotes in minutes and save on your agricultural insurance.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Compare Quotes Now
          </Link>
        </div>
      </section>

      {/* How to Compare */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            How to Compare Tractor Insurance
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Getting the <strong>best tractor insurance</strong> deal requires comparing like-for-like. Here's how our <strong>tractor insurance comparison</strong> works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Enter Details</h3>
              <p className="text-sm text-slate-400">Tell us about your tractor - make, model, value, and how you use it</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Get Quotes</h3>
              <p className="text-sm text-slate-400">We search our panel of specialist agricultural insurers for quotes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Compare Options</h3>
              <p className="text-sm text-slate-400">See prices and cover levels side-by-side to find your best option</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Buy & Save</h3>
              <p className="text-sm text-slate-400">Choose your policy and complete your purchase - often saving hundreds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Level Comparison Table */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Tractor Insurance Comparison: Cover Levels
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            When you <strong>compare tractor insurance</strong>, understanding cover levels is essential. Here's how the three main types compare:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700/50">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left p-4 text-slate-400 font-medium">Factor</th>
                  <th className="text-center p-4 text-green-400 font-medium">Comprehensive</th>
                  <th className="text-center p-4 text-amber-400 font-medium">Third Party F&T</th>
                  <th className="text-center p-4 text-slate-400 font-medium">Third Party Only</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FACTORS.map((row, i) => (
                  <tr key={row.factor} className={i < COMPARISON_FACTORS.length - 1 ? 'border-b border-slate-700/30' : ''}>
                    <td className="p-4 text-white font-medium">{row.factor}</td>
                    <td className="p-4 text-center text-slate-300 text-sm">{row.comprehensive}</td>
                    <td className="p-4 text-center text-slate-300 text-sm">{row.tpft}</td>
                    <td className="p-4 text-center text-slate-300 text-sm">{row.tpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Tractor Insurance Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What Makes the Best Tractor Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            The <strong>best tractor insurance</strong> isn't always the cheapest. Here's what to look for when comparing policies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Adequate Cover Level</h3>
              <p className="text-sm text-slate-400">
                The <strong>best tractor insurance</strong> matches your actual needs. Don't over-insure a low-value tractor, but don't skimp on cover for expensive machinery.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fair Excess</h3>
              <p className="text-sm text-slate-400">
                Check the excess (the amount you pay towards any claim). A very low premium might come with a high excess that makes small claims uneconomical.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Driver Cover</h3>
              <p className="text-sm text-slate-400">
                Check who's covered to drive. Named driver policies are cheaper, but any driver cover may be needed for farms with employees or contractors.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Road Use Included</h3>
              <p className="text-sm text-slate-400">
                If you use your tractor on public roads, ensure this is covered. Some policies limit road miles - check if you regularly travel between fields.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implement Cover</h3>
              <p className="text-sm text-slate-400">
                Check if attached implements are covered. Loaders, ploughs, and other equipment may need to be specifically listed for full protection.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Claims Service</h3>
              <p className="text-sm text-slate-400">
                The <strong>best tractor insurance</strong> providers have good claims handling. Read reviews and check if they understand agricultural claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Tractor Insurance Tips */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            How to Find Cheap Tractor Insurance
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Looking for <strong>cheap tractor insurance</strong>? These tips can help you save money on your agricultural insurance:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Compare Multiple Quotes</h3>
                  <p className="text-sm text-slate-400">
                    Don't accept the first quote. Use our <strong>tractor insurance comparison</strong> to see what different insurers offer - prices can vary by hundreds of pounds.
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
                    Store your tractor in a locked building, fit trackers and immobilisers. Good security can reduce premiums by 10-15%.
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
                    A higher voluntary excess means lower premiums. If you can afford to pay more towards a claim, you'll pay less upfront.
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
                    Monthly payments usually include interest charges. Paying your premium annually can save 5-10% on <strong>cheap tractor insurance</strong>.
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
                  <h3 className="text-white font-semibold mb-1">Bundle Policies</h3>
                  <p className="text-sm text-slate-400">
                    Insuring multiple tractors or combining with farm insurance often attracts multi-policy discounts from agricultural insurers.
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
                  <h3 className="text-white font-semibold mb-1">Limit Road Use</h3>
                  <p className="text-sm text-slate-400">
                    Policies with limited road mileage are often cheaper. If your tractor rarely leaves the farm, let your insurer know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Insurers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            UK Tractor Insurance Providers
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            When you <strong>compare tractor insurance</strong>, consider these specialist UK agricultural insurers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSURERS.map((insurer) => (
              <div key={insurer.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">{insurer.name}</h3>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-300">{insurer.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{insurer.specialty}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Our comparison service searches multiple insurers to find you the <strong>best tractor insurance</strong> deals.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tractor Insurance Comparison FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why should I compare tractor insurance quotes?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Prices for the same cover can vary significantly between insurers. By using a <strong>tractor insurance comparison</strong> service, you can see multiple quotes at once and ensure you're getting a competitive deal. Many farmers save hundreds of pounds by comparing rather than auto-renewing.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is cheap tractor insurance worth it?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Cheap tractor insurance</strong> can be good value, but check what you're getting. Very cheap policies might have high excesses, limited cover, or exclude important features. The <strong>best tractor insurance</strong> balances price with adequate protection for your needs.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What details do I need to compare tractor insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                To <strong>compare tractor insurance</strong> quotes, you'll typically need: tractor make and model, year of manufacture, current value, how it's used (farming, contracting, road mileage), where it's stored, security measures, and driver details. Having this information ready speeds up the quote process.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How often should I compare tractor insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Compare quotes at each renewal - don't auto-renew without checking. Insurance prices change, new insurers enter the market, and your circumstances may have changed. Annual comparison is the best way to ensure you're still getting the <strong>best tractor insurance</strong> deal.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Compare Tractor Insurance?
          </h2>
          <p className="text-slate-300 mb-8">
            <strong>Compare tractor insurance</strong> quotes from specialist UK agricultural insurers. Find the <strong>best tractor insurance</strong> at a price that works for you.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Compare Quotes Now
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
                Compare tractor insurance quotes from specialist UK agricultural insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insurance Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/" className="hover:text-green-400">Tractor Insurance</Link></li>
                <li><Link href="/compare-tractor-insurance" className="hover:text-green-400">Compare Insurance</Link></li>
                <li><Link href="/farm-machinery-insurance" className="hover:text-green-400">Farm Machinery</Link></li>
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
                <li><Link href="/tractor-insurance-cost" className="hover:text-green-400">Cost Guide</Link></li>
                <li><Link href="/vintage-tractor-insurance" className="hover:text-green-400">Vintage Insurance</Link></li>
                <li><Link href="/#faq" className="hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tractor Insurance UK. Compare tractor insurance quotes from specialist UK insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
