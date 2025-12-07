import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vintage Tractor Insurance UK | Classic & Antique Tractor Cover',
  description: 'Specialist vintage tractor insurance UK for classic and antique tractors. Get agreed value cover, road run protection, and show cover. Compare vintage tractor insurance quotes from specialist insurers.',
  keywords: 'vintage tractor insurance, vintage tractor insurance uk, classic tractor insurance, classic tractor insurance uk, antique tractor insurance, vintage tractor insurance cost, vintage tractor insurance online, vintage tractor insurance northern ireland, old tractor insurance, heritage tractor insurance, vintage tractor road run insurance',
  openGraph: {
    title: 'Vintage Tractor Insurance UK | Classic & Antique Tractor Cover',
    description: 'Specialist vintage tractor insurance for classic and antique tractors. Agreed value cover, road runs, shows and rallies.',
    type: 'website',
    url: 'https://tractorinsurance.quest/vintage-tractor-insurance',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/vintage-tractor-insurance',
  },
}

const CLASSIC_MAKES = [
  { name: 'Ferguson', models: ['TE20', 'TEA20', 'TED20', 'TEF20', 'FE35'] },
  { name: 'Fordson', models: ['Major', 'Dexta', 'Super Major', 'Power Major', 'N'] },
  { name: 'David Brown', models: ['880', '990', '995', '996', '1210', '1212'] },
  { name: 'Massey Ferguson', models: ['35', '65', '135', '165', '175', '185'] },
  { name: 'International Harvester', models: ['B250', 'B275', 'B414', '434', '444'] },
  { name: 'Nuffield', models: ['Universal', '10/42', '10/60', '4/65'] },
  { name: 'Field Marshall', models: ['Series I', 'Series II', 'Series III'] },
  { name: 'John Deere', models: ['1020', '2020', '3020', '4020', 'Lanz'] },
  { name: 'Ford', models: ['2000', '3000', '4000', '5000', '7000'] },
  { name: 'Leyland', models: ['154', '245', '255', '270', '344'] },
]

export default function VintageTractorInsurancePage() {
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
              <Link href="/vintage-tractor-insurance" className="text-green-400 font-medium">Vintage</Link>
              <Link href="/tractor-insurance-cost" className="text-slate-300 hover:text-white transition-colors">Costs</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full text-amber-300 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Specialist Heritage Cover
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Vintage Tractor Insurance
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> UK</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            Specialist <strong>vintage tractor insurance</strong> and <strong>classic tractor insurance UK</strong> for collectors, enthusiasts, and working restorations. Protect your heritage machinery with cover designed for classic tractors.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Compare <strong>vintage tractor insurance</strong> quotes online. Cover for <strong>antique tractors</strong>, road runs, shows, and agricultural use.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            Get Vintage Tractor Quote
          </Link>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What Does Vintage Tractor Insurance Cover?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Classic tractor insurance</strong> provides specialist cover designed for the unique needs of vintage tractor owners. Unlike standard agricultural policies, vintage cover understands the true value of heritage machinery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agreed Value Cover</h3>
              <p className="text-sm text-slate-400">
                Unlike market value policies, <strong>vintage tractor insurance</strong> offers agreed value - your classic is insured for its true worth, not a depreciated amount. Essential for rare and restored tractors.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Road Runs & Rallies</h3>
              <p className="text-sm text-slate-400">
                Cover for road runs, tractor rallies, ploughing matches, and vintage shows. <strong>Classic tractor insurance UK</strong> policies understand enthusiast activities.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Restoration Cover</h3>
              <p className="text-sm text-slate-400">
                Protection during restoration projects. Cover your <strong>antique tractor</strong> while it's being rebuilt or stored awaiting restoration.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Spare Parts Cover</h3>
              <p className="text-sm text-slate-400">
                Protect your collection of vintage parts and spares. Original parts for classic tractors can be valuable and hard to replace.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Club Member Discounts</h3>
              <p className="text-sm text-slate-400">
                Many <strong>vintage tractor insurance UK</strong> providers offer discounts for tractor club members. Your club membership could save you money.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Light Agricultural Use</h3>
              <p className="text-sm text-slate-400">
                Some policies cover light agricultural work on your own land. Use your classic for hay making, small-scale farming, or estate work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classic Makes Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Classic Tractor Makes We Insure
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Our specialist <strong>vintage tractor insurance</strong> covers all classic and heritage makes. From grey Fergies to Field Marshalls, we can find cover for your classic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSIC_MAKES.map((make) => (
              <div key={make.name} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{make.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {make.models.map((model) => (
                    <span key={model} className="px-2 py-1 bg-amber-500/10 text-amber-300 rounded text-xs">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Plus many more including Allis-Chalmers, Case, Zetor, Renault, Fiat, Same, and other classic makes.
          </p>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Vintage Tractor Insurance Cost
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            How much does <strong>vintage tractor insurance cost</strong>? Classic tractors are often cheaper to insure than modern machines due to lower values and limited use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£80-£150</div>
              <div className="text-white font-medium mb-2">Show & Display Only</div>
              <p className="text-xs text-slate-400">Third party cover for static display, occasional road runs to shows, no agricultural use</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-500/30 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£150-£300</div>
              <div className="text-white font-medium mb-2">Road Runs & Light Use</div>
              <p className="text-xs text-slate-400">Comprehensive cover for road runs, rallies, ploughing matches, and light agricultural work</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-500/30 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">£250-£500</div>
              <div className="text-white font-medium mb-2">Working Vintage</div>
              <p className="text-xs text-slate-400">Full cover for vintage tractors used regularly for agricultural work on your own land</p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            *Indicative prices. Actual <strong>vintage tractor insurance cost</strong> depends on value, use, and individual circumstances.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Vintage Tractor Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What counts as a vintage tractor?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most insurers class tractors over 25-40 years old as vintage or classic. However, definitions vary - some focus on age, others on the tractor no longer being in regular production. Post-war tractors from the 1940s-1980s typically qualify for vintage tractor insurance.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use my vintage tractor on the road?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, with the right insurance. Most vintage tractor insurance policies include cover for road runs and travel to shows. You'll need at least third party cover for road use. Many classic tractors are exempt from MOT if built before 1960, but still need insurance and road tax (often free for agricultural vehicles).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is vintage tractor insurance cheaper than modern?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Often yes. Vintage tractors typically have lower values than modern machines, are used less frequently, and are driven more carefully by enthusiast owners. This means vintage tractor insurance cost is often lower than covering a £50,000+ modern tractor. However, rare or fully restored classics with high agreed values may cost more.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I get vintage tractor insurance online?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, you can get vintage tractor insurance online. Many specialist insurers offer online quotes and purchasing. Our comparison service lets you get multiple vintage tractor insurance quotes quickly and easily, helping you find the best cover for your classic.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need insurance for a tractor in a barn?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                While not legally required for a non-road-going tractor, insurance is strongly recommended. Your vintage tractor could be stolen, damaged by fire, or affected by flooding. Many vintage tractors are valuable collector's items worth protecting with comprehensive cover even when stored.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Vintage Tractor Insurance Quote
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>vintage tractor insurance UK</strong> quotes from specialist classic vehicle insurers. Protect your heritage machinery today.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
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
                Specialist vintage and classic tractor insurance from leading UK insurers.
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
              © {new Date().getFullYear()} Tractor Insurance UK. Vintage tractor insurance quotes from specialist UK insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
