import { Metadata } from 'next'
import { QuoteForm } from '../components/QuoteForm'

export const metadata: Metadata = {
  title: 'Drone Insurance UK 2025 | Compare UAV & Quadcopter Insurance',
  description: 'Compare drone insurance quotes from UK specialist insurers. Get UAV insurance, quadcopter insurance & commercial drone cover. Best drone insurance comparison - hobbyist and professional drone pilots, public liability & hull damage cover.',
  keywords: 'drone insurance, drone insurance uk, uav insurance, quadcopter insurance, commercial drone insurance, drone public liability insurance, fpv drone insurance, dji drone insurance, cheap drone insurance, best drone insurance uk',
  openGraph: {
    title: 'Drone Insurance UK 2025 | Compare UAV & Quadcopter Insurance',
    description: 'Compare drone insurance quotes from specialist UK insurers. Hobbyist and commercial UAV cover - get protected today.',
    type: 'website',
    url: 'https://droneinsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Insurance UK 2025',
    description: 'Compare drone insurance quotes from UK specialist insurers.',
  },
  alternates: {
    canonical: 'https://droneinsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center" role="img" aria-label="Drone Insurance UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Drone <span className="text-cyan-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK UAV Cover</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</a>
              <a href="#types" className="text-slate-300 hover:text-white transition-colors">Cover Types</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Drone Insurance
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>drone insurance quotes</strong> from specialist UK insurers. Find the <strong>best drone insurance</strong> for hobbyists and commercial pilots - public liability, hull damage & equipment cover.
          </p>
          <p className="text-sm text-slate-500">
            Get a <strong>drone insurance quote</strong> in minutes. <strong>Cheap drone insurance</strong> from £50/year for recreational flyers or comprehensive <strong>commercial drone insurance</strong> for professionals.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteForm />
      </section>

      {/* Why Drone Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Drone Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Drone insurance</strong> is essential for protecting yourself against liability claims and equipment damage. With UK drone regulations requiring operator IDs and flyer IDs, having the right insurance demonstrates responsible flying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability Cover</h3>
              <p className="text-sm text-slate-400">
                Drones can cause injury or damage to third parties. Public liability insurance covers legal costs and compensation claims - essential for commercial work and peace of mind for hobbyists.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Protect Your Equipment</h3>
              <p className="text-sm text-slate-400">
                Quality drones cost £500 to £10,000+. Hull insurance protects your investment against crashes, flyaways, water damage, and theft - whether it's a DJI Mini or a professional cinema rig.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Commercial Requirement</h3>
              <p className="text-sm text-slate-400">
                Most clients and venues require proof of insurance before allowing commercial drone work. Public liability cover of £1-10M is typically expected for paid drone operations.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Equipment & Accessories</h3>
              <p className="text-sm text-slate-400">
                Cover for cameras, gimbals, batteries, controllers, and ground equipment. Protect your complete drone kit under one comprehensive policy.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Worldwide Cover</h3>
              <p className="text-sm text-slate-400">
                Many policies offer worldwide cover for travelling drone pilots. Perfect for destination shoots, travel photography, or flying on holiday.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">FPV & Racing Cover</h3>
              <p className="text-sm text-slate-400">
                Specialist cover available for FPV racing drones and high-speed quadcopters. Protect your racing rig at events and practice sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cover Section */}
      <section id="types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Drone Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Recreational Drone Insurance</h3>
              <p className="text-slate-400 mb-4">
                For hobbyist pilots flying for fun. Covers drones under 25kg flown in accordance with UK drone code.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Public liability from £1M
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Optional hull damage cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  From £50/year
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Commercial Drone Insurance</h3>
              <p className="text-slate-400 mb-4">
                For professional drone pilots earning money from aerial work - photography, surveying, inspections, etc.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Public liability up to £10M
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Professional indemnity available
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Certificate for clients
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">A2 CofC Drone Insurance</h3>
              <p className="text-slate-400 mb-4">
                For pilots with A2 Certificate of Competency flying in the Open A2 category, closer to people.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Cover for flying closer to people
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Drones 500g-2kg covered
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Higher liability limits
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Fleet & Multi-Drone Insurance</h3>
              <p className="text-slate-400 mb-4">
                Cover multiple drones under one policy. Ideal for businesses with several aircraft or pilots with multiple platforms.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Discounted multi-aircraft rates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Add/remove drones easily
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Named pilot options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Drone Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I legally need drone insurance in the UK?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Drone insurance is not legally required for recreational flying in the UK, but it's highly recommended. For commercial operations, most clients and venues require proof of public liability insurance. EU regulations do require insurance for drones over 20kg, and this may affect UK rules in future. Many drone pilots choose to insure voluntarily for peace of mind.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does drone insurance cost?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Recreational drone insurance with public liability starts from around £50-80 per year. Adding hull/equipment cover typically costs £100-300 depending on your drone's value. Commercial policies with higher liability limits and equipment cover range from £150-500+ per year. Pay-as-you-fly options are also available from some insurers.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What does drone public liability insurance cover?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Public liability insurance covers claims made against you if your drone injures someone or damages their property. This includes legal defence costs and compensation payments. Cover levels typically range from £1M to £10M. It protects you if your drone crashes into a car, hits a person, or causes property damage during flight.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is my DJI drone covered by DJI Care?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                DJI Care Refresh is a product replacement plan, not insurance. It covers accidental damage to your drone with replacement units, but doesn't include public liability cover if your drone injures someone or damages property. Most pilots recommend having separate drone insurance alongside DJI Care for complete protection.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I get insurance for FPV racing drones?
                <svg className="w-5 h-5 text-cyan-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, several specialist insurers offer cover for FPV racing drones. This includes both liability cover and hull damage protection. Some policies cover racing events specifically, while others provide general FPV flying cover. Coverage for racing may have different terms than recreational flying, so check the policy details.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Drone Insurance UK</h3>
              <p className="text-slate-400 text-sm">Compare drone insurance quotes from specialist UK insurers for hobbyists and commercial pilots.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Recreational Insurance</a></li>
                <li><a href="#" className="hover:text-white">Commercial Insurance</a></li>
                <li><a href="#" className="hover:text-white">FPV Racing Cover</a></li>
                <li><a href="#" className="hover:text-white">Fleet Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">UK Drone Rules</a></li>
                <li><a href="#" className="hover:text-white">Flyer ID Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
            <p>© 2025 Drone Insurance UK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
