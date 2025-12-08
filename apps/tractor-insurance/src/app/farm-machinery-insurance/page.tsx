import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Farm Machinery Insurance UK 2025 | Agricultural Equipment Cover',
  description: 'Compare farm machinery insurance quotes from specialist UK agricultural insurers. Cover for tractors, combine harvesters, telehandlers & all agricultural machinery. Get cheap farm machinery insurance quotes today.',
  keywords: 'farm machinery insurance, agricultural machinery insurance, agricultural vehicle insurance, farm equipment insurance, farm tractor insurance, agricultural equipment insurance, farm vehicle insurance, farming machinery insurance, agricultural plant insurance, farm machinery insurance uk',
  openGraph: {
    title: 'Farm Machinery Insurance UK 2025 | Agricultural Equipment Cover',
    description: 'Compare farm machinery insurance from specialist UK agricultural insurers. Protect your tractors, harvesters, and farm equipment.',
    type: 'website',
    url: 'https://tractorinsurance.quest/farm-machinery-insurance',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest/farm-machinery-insurance',
  },
}

const MACHINERY_TYPES = [
  { name: 'Tractors', description: 'All makes and models from compact to high-horsepower', icon: '🚜' },
  { name: 'Combine Harvesters', description: 'Seasonal and year-round cover for all combines', icon: '🌾' },
  { name: 'Telehandlers', description: 'JCB, Merlo, Manitou and other handlers', icon: '🏗️' },
  { name: 'Sprayers', description: 'Self-propelled and trailed crop sprayers', icon: '💧' },
  { name: 'Balers', description: 'Round balers, square balers, and wrapper combinations', icon: '🎯' },
  { name: 'Forage Harvesters', description: 'Self-propelled and trailed foragers', icon: '🌿' },
  { name: 'Drills & Planters', description: 'Seed drills, precision planters, and cultivators', icon: '🌱' },
  { name: 'Trailers', description: 'Grain trailers, silage trailers, livestock trailers', icon: '🚛' },
  { name: 'ATVs & UTVs', description: 'Quad bikes and utility vehicles for farm use', icon: '🏍️' },
  { name: 'Loaders', description: 'Skid steers, wheel loaders, and mini loaders', icon: '⚙️' },
  { name: 'Mowers', description: 'Disc mowers, drum mowers, and mower conditioners', icon: '🌿' },
  { name: 'Implements', description: 'Ploughs, cultivators, rollers, and attachments', icon: '🔧' },
]

export default function FarmMachineryInsurancePage() {
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
              <Link href="/farm-machinery-insurance" className="text-green-400 font-medium">Farm Machinery</Link>
              <Link href="/tractor-insurance-cost" className="text-slate-300 hover:text-white transition-colors">Costs</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full text-green-300 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Complete Agricultural Cover
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Farm Machinery Insurance
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            Compare <strong>farm machinery insurance</strong> quotes from specialist UK agricultural insurers. Comprehensive cover for tractors, combine harvesters, telehandlers, and all your <strong>agricultural machinery</strong>.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Protect your <strong>agricultural equipment</strong> with policies designed for farming. <strong>Agricultural vehicle insurance</strong> from insurers who understand agriculture.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Get Farm Machinery Quote
          </Link>
        </div>
      </section>

      {/* What is Farm Machinery Insurance */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What is Farm Machinery Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Farm machinery insurance</strong> (also called <strong>agricultural machinery insurance</strong>) protects your farming equipment against theft, accidental damage, fire, and third party liability. Unlike standard vehicle insurance, it's designed specifically for agricultural use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accidental Damage</h3>
              <p className="text-sm text-slate-400">
                Cover for accidental damage to your <strong>farm machinery</strong> whether in the field, farmyard, or on the road. Includes collision, overturning, and operator error.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Theft Protection</h3>
              <p className="text-sm text-slate-400">
                Farm theft is a growing problem in the UK. <strong>Agricultural machinery insurance</strong> protects against theft of tractors, quad bikes, and valuable equipment from farms.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fire & Weather</h3>
              <p className="text-sm text-slate-400">
                Protection against fire, lightning, storm damage, and flood. Essential for <strong>agricultural equipment</strong> that may be stored outdoors or in barns.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Third Party Liability</h3>
              <p className="text-sm text-slate-400">
                Cover for damage or injury caused to others by your <strong>agricultural vehicles</strong>. Required by law for road use - essential for all farm operations.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Breakdown Cover</h3>
              <p className="text-sm text-slate-400">
                Agricultural breakdown assistance when you need it most. Get help during harvest or critical farming operations with specialist farm vehicle recovery.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hire-In Cover</h3>
              <p className="text-sm text-slate-400">
                Some policies include cover for hired-in machinery. Protect equipment you've rented for seasonal work like harvesting or silaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Agricultural Machinery We Cover
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Our <strong>farm machinery insurance</strong> covers all types of <strong>agricultural equipment</strong> and <strong>farm vehicles</strong>. From tractors to combines, we can protect your farming investment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MACHINERY_TYPES.map((type) => (
              <div key={type.name} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="text-2xl mb-2">{type.icon}</div>
                <h3 className="text-white font-medium text-sm mb-1">{type.name}</h3>
                <p className="text-xs text-slate-400">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Machinery vs Tractor Insurance */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Farm Machinery Insurance vs Tractor Insurance
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            What's the difference between <strong>farm machinery insurance</strong> and tractor insurance? Here's how they compare:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🚜</span> Tractor Insurance
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Covers individual tractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Good for smallholders with 1-2 tractors</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">May include attached implements</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Standalone or fleet policies available</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-emerald-500/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🌾</span> Farm Machinery Insurance
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Covers all agricultural equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Ideal for farms with multiple machines</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Includes combines, sprayers, harvesters</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Often part of whole-farm insurance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
            <p className="text-center text-slate-300">
              <strong>Tip:</strong> If you have multiple pieces of <strong>agricultural machinery</strong>, a comprehensive farm machinery policy is often more cost-effective than insuring each item separately.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Farm Machinery Insurance Cost Guide
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            How much does <strong>farm machinery insurance</strong> cost? Prices vary based on the value and type of equipment, but here's a typical guide:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£300-£600</div>
              <div className="text-white font-medium mb-1">Small Farm</div>
              <p className="text-xs text-slate-400">1-2 tractors, basic implements, small acreage</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£800-£1,500</div>
              <div className="text-white font-medium mb-1">Medium Farm</div>
              <p className="text-xs text-slate-400">3-5 tractors, telehandler, various implements</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£2,000-£5,000</div>
              <div className="text-white font-medium mb-1">Large Farm</div>
              <p className="text-xs text-slate-400">Fleet of tractors, combine, sprayer, full equipment</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£5,000+</div>
              <div className="text-white font-medium mb-1">Contractor</div>
              <p className="text-xs text-slate-400">Multiple combines, large fleet, high-value equipment</p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            *Indicative prices only. Actual premiums depend on equipment values, location, and security measures.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Farm Machinery Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the difference between farm machinery insurance and farm insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Farm machinery insurance</strong> specifically covers your agricultural equipment and vehicles. Farm insurance (or whole-farm insurance) is a broader policy that may include buildings, livestock, crops, and public liability as well as machinery. Many farmers have farm machinery insurance as part of a comprehensive farm policy.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need separate insurance for each piece of farm machinery?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No, most <strong>agricultural machinery insurance</strong> policies cover multiple items under one policy. You'll typically provide a schedule of all your equipment with values, and everything is covered under one premium. This is usually more cost-effective than individual policies.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is my farm machinery covered when working on other people's land?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This depends on your policy. If you're an agricultural contractor, you need to ensure your <strong>farm machinery insurance</strong> covers contracting work. Standard farm policies may only cover work on your own land. Always check your policy wording or ask your insurer about contractor use.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Are implements and attachments automatically covered?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Not always. Some policies include attached implements automatically, while others require you to list and value implements separately. Expensive items like precision drills, sprayers, and front loaders should definitely be specifically listed on your <strong>agricultural equipment insurance</strong> schedule.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What security measures can reduce my farm machinery insurance cost?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Several security measures can reduce premiums: storing machinery in locked buildings, fitting approved immobilisers and trackers (like CESAR marking), installing CCTV and alarms, secure fuel storage, and good perimeter fencing. Some insurers require certain security measures for high-value equipment.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Farm Machinery Insurance Quote
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>farm machinery insurance</strong> and <strong>agricultural machinery insurance</strong> quotes from specialist UK farm insurers. Protect your agricultural investment today.
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
                Specialist farm machinery and agricultural vehicle insurance from leading UK insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insurance Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/" className="hover:text-green-400">Tractor Insurance</Link></li>
                <li><Link href="/farm-machinery-insurance" className="hover:text-green-400">Farm Machinery Insurance</Link></li>
                <li><Link href="/vintage-tractor-insurance" className="hover:text-green-400">Vintage Tractor Insurance</Link></li>
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
                <li><Link href="/articles" className="hover:text-green-400">Farming News</Link></li>
                <li><Link href="/#faq" className="hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tractor Insurance UK. Farm machinery insurance quotes from specialist UK agricultural insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
