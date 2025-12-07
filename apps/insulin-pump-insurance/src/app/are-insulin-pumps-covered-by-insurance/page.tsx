import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Are Insulin Pumps Covered by Insurance? | UK Guide 2025',
  description: 'Find out if insulin pumps are covered by insurance in the UK. Learn about NHS pump coverage, home insurance options, specialist insulin pump insurance, Medtronic & Tandem t:slim coverage, and how to protect your diabetes technology.',
  keywords: 'are insulin pumps covered by insurance, insulin pump insurance coverage, medtronic insulin pump insurance coverage, tandem insulin pump insurance coverage, t slim insulin pump insurance coverage, insulin pump insurance diabetes uk, pump insurance, insurance for insulin pump, diabetes pump insurance',
  openGraph: {
    title: 'Are Insulin Pumps Covered by Insurance? | UK Guide 2025',
    description: 'Complete guide to insulin pump insurance coverage in the UK. NHS, home insurance, and specialist options explained.',
    type: 'article',
    url: 'https://insulinpumpinsurance.quest/are-insulin-pumps-covered-by-insurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Are Insulin Pumps Covered by Insurance? | UK Guide',
    description: 'Find out how to insure your insulin pump in the UK.',
  },
  alternates: {
    canonical: 'https://insulinpumpinsurance.quest/are-insulin-pumps-covered-by-insurance',
  },
}

export default function AreInsulinPumpsCoveredPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png"
                  alt="Insulin Pump Insurance UK"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Insulin Pump <span className="text-cyan-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Diabetes Device Cover</p>
              </div>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <Link href="/#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</Link>
              <Link href="/#coverage" className="text-slate-300 hover:text-white transition-colors">Coverage</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-cyan-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Are Insulin Pumps Covered by Insurance?</span>
          </nav>

          <div className="text-center mb-8">
            <Image
              src="https://em-content.zobj.net/source/apple/391/thinking-face_1f914.png"
              alt="Are insulin pumps covered by insurance"
              width={80}
              height={80}
              className="w-20 h-20 mx-auto mb-4"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Are Insulin Pumps Covered by Insurance?
            <span className="block text-lg sm:text-xl font-normal text-cyan-400 mt-2">UK Guide 2025</span>
          </h1>

          <p className="text-lg text-slate-300 text-center mb-8">
            Yes, <strong>insulin pumps can be covered by insurance</strong> in the UK through several options: specialist <strong>insulin pump insurance</strong>, home contents insurance, or dedicated diabetes technology cover. Here's everything you need to know about protecting your pump.
          </p>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">Quick Answer</h2>
            <p className="text-slate-300">
              <strong>Insulin pump insurance</strong> is available from specialist providers like <strong>Insurance 4 Insulin Pumps</strong> from around £6.95/month. You can also add your pump to home contents insurance as a specified item, though specialist cover often provides better protection and faster claims.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Options Section */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            Insulin Pump Insurance Coverage Options
          </h2>

          <div className="space-y-6">
            {/* Option 1: Specialist Insurance */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/shield_1f6e1-fe0f.png"
                    alt="Specialist insulin pump insurance"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Specialist Insulin Pump Insurance</h3>
                    <span className="px-2 py-0.5 bg-cyan-500 text-white text-xs font-semibold rounded-full">Recommended</span>
                  </div>
                  <p className="text-slate-400 mb-4">
                    Dedicated <strong>pump insurance</strong> providers like <strong>Insurance 4 Insulin Pumps</strong> and CoverMe4 offer comprehensive cover specifically designed for diabetes technology.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Pros</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Fast claims (24 hours)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> £0 excess options
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Worldwide cover included
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Covers CGM & accessories
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> No impact on home insurance
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Cost</h4>
                      <p className="text-2xl font-bold text-white">£6.95<span className="text-sm font-normal text-slate-400">/month</span></p>
                      <p className="text-xs text-slate-500">Up to £5,000 coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Home Insurance */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/house_1f3e0.png"
                    alt="Home insurance insulin pump cover"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Home Contents Insurance</h3>
                  <p className="text-slate-400 mb-4">
                    You can add your insulin pump as a "specified item" or "personal possession" to your existing home contents insurance for all-risks cover.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-slate-400 mb-2">Pros</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> May cost nothing extra
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Single policy for everything
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-400 mb-2">Cons</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="text-red-400">✗</span> Claims affect no-claims bonus
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-400">✗</span> Slower claims process
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-400">✗</span> Higher excess typically
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-400">✗</span> May increase premiums
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 3: NHS */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/hospital_1f3e5.png"
                    alt="NHS insulin pump coverage"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">NHS / ICB Funding</h3>
                  <p className="text-slate-400 mb-4">
                    If your pump is NHS-funded through your Integrated Care Board (ICB), they may replace it if damaged or lost - but this isn't guaranteed and can take weeks.
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <p className="text-sm text-amber-200">
                      <strong>Important:</strong> Even with NHS pumps, you may be held financially responsible for lost or damaged devices. The NHS doesn't provide "insurance" - it's funding for treatment. Many NHS pump users also get specialist <strong>insulin pump insurance</strong> for peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Coverage Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            Insulin Pump Insurance Coverage by Brand
          </h2>
          <p className="text-slate-400 mb-8">
            All major insulin pump brands can be covered by specialist <strong>insulin pump insurance</strong>. Here's what you need to know about coverage for each:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medtronic */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Medtronic Insulin Pump Insurance Coverage</h3>
              <p className="text-sm text-slate-400 mb-4">
                <strong>Medtronic pumps</strong> (780G, 770G, 640G) are fully covered by specialist insurers. Coverage includes:
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Main pump unit (up to £5,000+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Guardian CGM sensors & transmitters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Remote controller devices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Worldwide travel cover
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Typical <strong>Medtronic insulin pump insurance coverage</strong> costs from £6.95/month
              </p>
            </div>

            {/* Tandem t:slim */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Tandem t:slim Insulin Pump Insurance Coverage</h3>
              <p className="text-sm text-slate-400 mb-4">
                <strong>Tandem t:slim X2</strong> pumps with Control-IQ are covered by all major specialist insurers:
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> t:slim X2 pump unit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Dexcom CGM integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Accidental damage & theft
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Liquid damage cover
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                <strong>T:slim insulin pump insurance coverage</strong> typically £7-10/month
              </p>
            </div>

            {/* Omnipod */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Omnipod Insurance Coverage</h3>
              <p className="text-sm text-slate-400 mb-4">
                <strong>Omnipod</strong> (Dash, 5) PDM controllers and systems are covered:
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> PDM (Personal Diabetes Manager)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Controller handsets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Loss & theft protection
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Note: Individual pods are consumables and typically not covered
              </p>
            </div>

            {/* Ypsomed */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Ypsomed mylife Insurance Coverage</h3>
              <p className="text-sm text-slate-400 mb-4">
                <strong>Ypsomed mylife YpsoPump</strong> and CamAPS FX systems:
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> YpsoPump device
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> mylife app controller
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Compatible CGM devices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CGM Coverage */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            CGM Insurance Coverage
          </h2>
          <p className="text-slate-400 mb-8">
            Continuous Glucose Monitors (CGMs) can also be insured alongside or separately from your insulin pump:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h4 className="font-semibold text-white mb-2">Dexcom G6/G7</h4>
              <p className="text-sm text-slate-400">Transmitters and receivers covered. Sensors are consumables.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h4 className="font-semibold text-white mb-2">FreeStyle Libre 2/3</h4>
              <p className="text-sm text-slate-400">Reader device covered. Sensors typically not covered.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <h4 className="font-semibold text-white mb-2">Medtronic Guardian</h4>
              <p className="text-sm text-slate-400">Transmitters covered as part of pump system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Covered */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            How to Get Your Insulin Pump Covered
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Get Your Device Details Ready</h3>
                  <p className="text-sm text-slate-400">
                    You'll need your pump make, model, serial number, and approximate value. If NHS-funded, get a certificate of value from your diabetes team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Compare Insurance Options</h3>
                  <p className="text-sm text-slate-400">
                    Use our <Link href="/#calculator" className="text-cyan-400 hover:underline">insulin pump insurance calculator</Link> to compare quotes. Consider specialist providers vs home insurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Choose Your Coverage Level</h3>
                  <p className="text-sm text-slate-400">
                    Select coverage amount (at least matching your pump's value), excess level, and any extras like worldwide cover or accessory protection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Get Instant Cover</h3>
                  <p className="text-sm text-slate-400">
                    Most specialist <strong>insulin pump insurance</strong> providers offer instant online activation. Your pump is covered from the moment you complete your purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">
            Insulin Pump Insurance Coverage FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is my insulin pump covered by the NHS?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                If your pump is NHS-funded, your ICB (Integrated Care Board) technically owns it and may replace it if lost or damaged. However, this isn't "insurance" - there's no guarantee of replacement, and you may be asked to pay for a new pump if it was lost through negligence. Many NHS pump users get separate <strong>insulin pump insurance</strong> for this reason.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I add my insulin pump to my home insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, most home contents insurance policies allow you to add your insulin pump as a "specified item" for all-risks cover. This may cost little or nothing extra. However, claims will affect your no-claims bonus and may increase future premiums. Specialist <strong>pump insurance</strong> keeps your home insurance separate.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's not covered by insulin pump insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most <strong>insulin pump insurance coverage</strong> excludes: consumables (insulin, reservoirs, infusion sets, CGM sensors), manufacturer defects (covered by warranty), pre-existing damage, wear and tear, and intentional damage. Check your specific policy for full exclusions.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does insulin pump insurance cost?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Specialist <strong>insulin pump insurance UK</strong> costs from around £6.95/month for comprehensive cover up to £5,000. This typically includes accidental damage, theft, loss, worldwide cover, and £0 excess. Coverage for higher-value setups (pump + CGM) may cost £8-12/month.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need insulin pump insurance if I have private health insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Private health insurance typically covers medical treatment, not equipment. Your insulin pump is unlikely to be covered for loss, theft, or accidental damage by private medical insurance. You'd still need separate <strong>diabetes pump insurance</strong> to protect the device itself.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center">
            <Image
              src="https://em-content.zobj.net/source/apple/391/shield_1f6e1-fe0f.png"
              alt="Get insulin pump insurance"
              width={64}
              height={64}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Your Insulin Pump Covered Today
            </h2>
            <p className="text-slate-300 mb-6">
              Compare <strong>insulin pump insurance</strong> quotes and protect your diabetes technology from just £6.95/month.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-8 py-4 rounded-xl font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h4 className="font-semibold text-white mb-1">Diabetes UK</h4>
              <p className="text-sm text-slate-400">Official guidance on insulin pumps</p>
            </a>
            <a href="https://breakthrought1d.org.uk/knowledge-support/managing-type-1-diabetes/guide-to-type-1-diabetes-technology/insurance-for-diabetes-technology/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
              <h4 className="font-semibold text-white mb-1">Breakthrough T1D</h4>
              <p className="text-sm text-slate-400">Insurance for diabetes technology guide</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-400 mb-4">
            Looking for <strong>insulin pump insurance</strong>? Compare quotes from UK specialist insurers.
          </p>
          <Link href="/" className="text-cyan-400 hover:underline">
            ← Back to Insulin Pump Insurance UK
          </Link>
          <p className="text-xs text-slate-500 mt-8">
            © {new Date().getFullYear()} Insulin Pump Insurance UK
          </p>
        </div>
      </footer>
    </div>
  )
}
