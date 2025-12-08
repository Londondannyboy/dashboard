import { Metadata } from 'next'
import { QuoteForm } from '../components/QuoteForm'

export const metadata: Metadata = {
  title: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
  description: 'Compare mobility scooter insurance quotes from UK specialist insurers. Get cheap mobility scooter insurance, disability scooter cover & electric wheelchair insurance. Best mobility scooter insurance comparison - free quotes, comprehensive cover.',
  keywords: 'mobility scooter insurance, mobility scooter insurance uk, electric scooter insurance, disability scooter insurance, mobility scooter cover, cheap mobility scooter insurance, best mobility scooter insurance, compare mobility scooter insurance',
  openGraph: {
    title: 'Mobility Scooter Insurance UK 2025 | Compare Quotes & Save',
    description: 'Compare mobility scooter insurance quotes from specialist UK insurers. Free quotes - save on your mobility equipment insurance today.',
    type: 'website',
    url: 'https://mobilityscooterinsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobility Scooter Insurance UK 2025',
    description: 'Compare mobility scooter insurance quotes from UK specialist insurers.',
  },
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center" role="img" aria-label="Mobility Scooter Insurance UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Mobility Scooter <span className="text-blue-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Specialist Cover</p>
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
            Mobility Scooter Insurance
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>mobility scooter insurance quotes</strong> from specialist UK insurers. Find the <strong>best mobility scooter insurance</strong> for your needs - comprehensive cover for electric scooters, powerchairs and mobility aids.
          </p>
          <p className="text-sm text-slate-500">
            Get a <strong>mobility scooter insurance quote</strong> in minutes. <strong>Cheap mobility scooter insurance</strong> options available with theft, accidental damage & breakdown cover.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteForm />
      </section>

      {/* Why Mobility Scooter Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Mobility Scooter Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Mobility scooter insurance</strong> protects your essential mobility equipment from theft, damage and breakdown. With scooter thefts on the rise, the right insurance provides peace of mind and financial protection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Theft Protection</h3>
              <p className="text-sm text-slate-400">
                Mobility scooter theft is increasing. Insurance covers replacement costs if your scooter is stolen from home, in public, or from your vehicle.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Protect Your Investment</h3>
              <p className="text-sm text-slate-400">
                Quality mobility scooters cost £1,000 to £5,000+. Insurance protects this significant investment against accidental damage, vandalism and mechanical breakdown.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability</h3>
              <p className="text-sm text-slate-400">
                Third party liability cover protects you if your scooter causes injury to someone or damages their property while you're out and about.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Breakdown Cover</h3>
              <p className="text-sm text-slate-400">
                Get roadside assistance if your scooter breaks down. Some policies include recovery to your home or a repair centre if needed.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personal Accident</h3>
              <p className="text-sm text-slate-400">
                Some policies include personal accident cover, providing financial support if you're injured while using your mobility scooter.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accessory Cover</h3>
              <p className="text-sm text-slate-400">
                Cover for accessories like baskets, canopies, and battery chargers. Protect all your mobility equipment under one policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cover Section */}
      <section id="types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Mobility Scooter Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Class 2 Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                For pavement-only scooters with max speed of 4mph. These don't require registration but still benefit from comprehensive insurance cover.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Theft from home or public places
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Accidental damage cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Public liability optional
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Class 3 Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                For road-legal scooters up to 8mph. Must be registered with DVLA and have rear lights, indicators and a horn.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Comprehensive road use cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Third party liability included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Breakdown assistance available
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Electric Wheelchair Insurance</h3>
              <p className="text-slate-400 mb-4">
                Specialist cover for powerchairs and electric wheelchairs. Protects your essential mobility equipment.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Indoor and outdoor use cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Battery and charger included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Hire chair while yours is repaired
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Multi-Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                Cover multiple mobility scooters or wheelchairs under one policy. Ideal for couples or households with multiple users.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Discounted multi-vehicle rates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Single renewal date
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Mix of scooter types allowed
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
            Mobility Scooter Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I legally need mobility scooter insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                No, mobility scooter insurance is not a legal requirement in the UK. However, it's highly recommended to protect your investment. Class 3 scooters (road-legal, up to 8mph) must be registered with DVLA but don't require compulsory insurance like cars do. That said, insurance provides valuable protection against theft, damage, and third-party liability claims.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does mobility scooter insurance cost?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Mobility scooter insurance typically costs between £50 and £150 per year, depending on the scooter's value, the level of cover chosen, and where you live. Comprehensive policies including theft, accidental damage, and breakdown cover will be at the higher end, while basic theft-only cover can be much cheaper.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What's the difference between Class 2 and Class 3 scooters?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Class 2 scooters have a maximum speed of 4mph and are designed for pavement use only. They don't need to be registered. Class 3 scooters can travel up to 8mph on roads (4mph on pavements), must be registered with DVLA, and need lights, indicators, a horn, and rear reflectors. Class 3 scooters can use the road but not motorways or cycle lanes.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Will my home insurance cover my mobility scooter?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Some home insurance policies include limited cover for mobility scooters, but it's often restricted to theft from your home only. Cover for use away from home, accidental damage, and breakdown is typically not included. Specialist mobility scooter insurance provides more comprehensive protection and is usually better value than adding to your home insurance.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I insure a second-hand mobility scooter?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, most insurers will cover second-hand mobility scooters. You'll need to provide details of the scooter's age, value, and condition. Some insurers may have maximum age limits (e.g., 10 years) or require a recent service history. The insurance will be based on the current market value rather than the original purchase price.
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
              <h3 className="text-white font-bold mb-4">Mobility Scooter Insurance UK</h3>
              <p className="text-slate-400 text-sm">Compare mobility scooter insurance quotes from specialist UK insurers.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Class 2 Scooter Insurance</a></li>
                <li><a href="#" className="hover:text-white">Class 3 Scooter Insurance</a></li>
                <li><a href="#" className="hover:text-white">Electric Wheelchair Insurance</a></li>
                <li><a href="#" className="hover:text-white">Powerchair Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Insurance Guide</a></li>
                <li><a href="#" className="hover:text-white">Scooter Classes Explained</a></li>
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
            <p>© 2025 Mobility Scooter Insurance UK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
