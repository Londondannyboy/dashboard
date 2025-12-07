import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kubota Tractor Insurance UK | Compare Quotes for Kubota Tractors',
  description: 'Specialist Kubota tractor insurance from UK agricultural insurers. Get quotes for all Kubota models from compact B-Series to large M-Series. Compare Kubota insurance prices and save.',
  keywords: 'kubota tractor insurance, kubota insurance, kubota tractor insurance uk, kubota compact tractor insurance, kubota b series insurance, kubota m series insurance, kubota l series insurance',
  openGraph: {
    title: 'Kubota Tractor Insurance UK | Compare Quotes for Kubota Tractors',
    description: 'Specialist Kubota tractor insurance from UK agricultural insurers. Compare quotes and save.',
    type: 'website',
    url: 'https://tractorinsurance.quest/kubota-tractor-insurance',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/kubota-tractor-insurance',
  },
}

const KUBOTA_MODELS = [
  {
    series: 'B-Series (Compact)',
    models: ['B1241', 'B2261', 'B2311', 'B2631', 'B3150'],
    hp: '12-31 HP',
    value: '£8,000-£22,000',
    use: 'Smallholdings, groundskeeping, estates',
  },
  {
    series: 'L-Series (Utility)',
    models: ['L1501', 'L2501', 'L3301', 'L4701', 'L5460'],
    hp: '24-57 HP',
    value: '£18,000-£45,000',
    use: 'Small farms, contractors, livestock',
  },
  {
    series: 'M-Series (Standard)',
    models: ['M5001', 'M6001', 'M6-101', 'M6-131', 'M6-141'],
    hp: '52-143 HP',
    value: '£40,000-£95,000',
    use: 'Arable farming, dairy, large estates',
  },
  {
    series: 'M7-Series (Premium)',
    models: ['M7-131', 'M7-152', 'M7-172'],
    hp: '130-175 HP',
    value: '£85,000-£130,000',
    use: 'Large-scale arable, contractors',
  },
]

export default function KubotaTractorInsurancePage() {
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
              <Link href="/tractor-insurance-cost" className="text-slate-300 hover:text-white transition-colors">Costs</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full text-orange-300 text-sm mb-6">
            <span className="font-semibold">KUBOTA</span>
            Specialist Cover
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Kubota Tractor Insurance
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            Specialist <strong>Kubota tractor insurance</strong> for all models from compact B-Series to powerful M7-Series. Compare quotes from UK agricultural insurers who understand Kubota tractors.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Whether you have a Kubota compact for groundskeeping or an M-Series for commercial farming, we find the right cover.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            Get Kubota Insurance Quote
          </Link>
        </div>
      </section>

      {/* Model Range */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Kubota Models We Insure
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Our <strong>Kubota insurance</strong> covers the full range of Kubota tractors sold in the UK. From compact garden tractors to high-horsepower arable machines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KUBOTA_MODELS.map((range) => (
              <div key={range.series} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-400 text-lg">🚜</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{range.series}</h3>
                    <span className="text-sm text-orange-400">{range.hp}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {range.models.map((model) => (
                    <span key={model} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs">
                      {model}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Typical Value</span>
                    <p className="text-white font-medium">{range.value}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Common Use</span>
                    <p className="text-white font-medium">{range.use}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kubota */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Choose Specialist Kubota Insurance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accurate Valuations</h3>
              <p className="text-sm text-slate-400">
                Insurers who understand Kubota values. Your tractor insured for what it's actually worth, not a generic estimate.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Genuine Parts Cover</h3>
              <p className="text-sm text-slate-400">
                Policies that cover genuine Kubota parts for repairs, maintaining your tractor's value and reliability.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Compact Tractor Specialists</h3>
              <p className="text-sm text-slate-400">
                Kubota is the UK's leading compact tractor brand. Our insurers have specific experience with compact tractor cover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Kubota Tractor Insurance Cost
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            How much does <strong>Kubota tractor insurance</strong> cost? Here's a guide based on model series.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-green-500/30 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">£120-£250</div>
              <div className="text-white font-medium mb-1">B-Series</div>
              <p className="text-xs text-slate-400">Compact tractors for smallholdings and groundskeeping</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-emerald-500/30 text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">£200-£400</div>
              <div className="text-white font-medium mb-1">L-Series</div>
              <p className="text-xs text-slate-400">Utility tractors for small farms and contractors</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-amber-500/30 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-2">£350-£650</div>
              <div className="text-white font-medium mb-1">M-Series</div>
              <p className="text-xs text-slate-400">Standard tractors for commercial farming</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-orange-500/30 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">£550-£900</div>
              <div className="text-white font-medium mb-1">M7-Series</div>
              <p className="text-xs text-slate-400">Premium high-HP tractors for large operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500/20 to-red-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Kubota Insurance Quote
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>Kubota tractor insurance</strong> quotes from specialist agricultural insurers. Protect your Kubota today.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
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
                Specialist Kubota tractor insurance from UK agricultural insurers.
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
              © {new Date().getFullYear()} Tractor Insurance UK. Kubota tractor insurance quotes from specialist UK insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
