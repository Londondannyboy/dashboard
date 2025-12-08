import { Metadata } from 'next'
import { QuoteForm } from '../components/QuoteForm'

export const metadata: Metadata = {
  title: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
  description: 'Compare yoga teacher insurance quotes from UK specialist insurers. Get yoga instructor insurance, pilates teacher insurance & fitness professional cover. Best yoga insurance comparison - public liability, professional indemnity & treatment risk.',
  keywords: 'yoga teacher insurance, yoga instructor insurance, yoga insurance uk, yoga liability insurance, pilates teacher insurance, yoga professional indemnity, yoga public liability insurance, fitness instructor insurance',
  openGraph: {
    title: 'Yoga Teacher Insurance UK 2025 | Compare Instructor Insurance',
    description: 'Compare yoga teacher insurance quotes from specialist UK insurers. Professional cover for yoga instructors - get protected today.',
    type: 'website',
    url: 'https://yogainsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Teacher Insurance UK 2025',
    description: 'Compare yoga teacher insurance quotes from UK specialist insurers.',
  },
  alternates: {
    canonical: 'https://yogainsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center" role="img" aria-label="Yoga Teacher Insurance UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Yoga Teacher <span className="text-purple-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Professional Cover</p>
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
            Yoga Teacher Insurance
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>yoga teacher insurance quotes</strong> from specialist UK insurers. Find the <strong>best yoga instructor insurance</strong> for your practice - public liability, professional indemnity & treatment risk cover.
          </p>
          <p className="text-sm text-slate-500">
            Get a <strong>yoga insurance quote</strong> in minutes. <strong>Cheap yoga teacher insurance</strong> from £50/year with cover for all yoga styles including hot yoga, aerial yoga & yoga therapy.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteForm />
      </section>

      {/* Why Yoga Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Yoga Teacher Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Yoga teacher insurance</strong> protects you against claims if a student is injured during class or alleges your instruction caused them harm. Most studios and venues require proof of insurance before you can teach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability Cover</h3>
              <p className="text-sm text-slate-400">
                Protects you if a student is injured during your class or trips over your equipment. Covers legal costs and compensation claims up to £10M.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professional Indemnity</h3>
              <p className="text-sm text-slate-400">
                Covers claims arising from your professional advice or instruction. Essential if a student claims your teaching caused injury or their condition worsened.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Venue Requirement</h3>
              <p className="text-sm text-slate-400">
                Most gyms, studios, and community centres require proof of insurance before allowing you to teach. Insurance opens doors to more teaching opportunities.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Treatment Risk Cover</h3>
              <p className="text-sm text-slate-400">
                If you offer hands-on adjustments, massage, or therapeutic touch, treatment risk insurance covers claims arising from these physical interventions.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Equipment Cover</h3>
              <p className="text-sm text-slate-400">
                Protect your yoga mats, blocks, straps, bolsters and other teaching equipment against theft or damage with equipment insurance add-ons.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Worldwide Cover</h3>
              <p className="text-sm text-slate-400">
                Many policies offer worldwide teaching cover. Perfect if you lead yoga retreats abroad, teach internationally, or run destination workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cover Section */}
      <section id="types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Yoga Teacher Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Standard Yoga Insurance</h3>
              <p className="text-slate-400 mb-4">
                Core cover for teaching traditional yoga styles including Hatha, Vinyasa, Yin, Restorative, and Ashtanga.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Public liability £1M-£10M
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Professional indemnity included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  From £50/year
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Hot Yoga Insurance</h3>
              <p className="text-slate-400 mb-4">
                Specialist cover for teaching in heated environments - Bikram, Hot Vinyasa, and heated studio classes.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Heat-related injury cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Dehydration/fainting claims
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Higher liability limits available
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Aerial & Acro Yoga Insurance</h3>
              <p className="text-slate-400 mb-4">
                Extended cover for aerial yoga (hammocks/silks), AcroYoga, and partner-based yoga practices with higher risk.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Falls from height cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Equipment failure claims
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Partner practice liability
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Yoga Therapy Insurance</h3>
              <p className="text-slate-400 mb-4">
                For qualified yoga therapists offering one-to-one therapeutic sessions and working with specific conditions.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Treatment risk cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Medical conditions cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  Enhanced professional indemnity
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
            Yoga Teacher Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I legally need yoga teacher insurance?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                While not legally required in the UK, yoga teacher insurance is effectively essential for working professionally. Most studios, gyms, and venues require proof of insurance before allowing you to teach. If you're self-employed, insurance protects your personal assets if someone makes a claim against you. Professional bodies like Yoga Alliance also recommend or require insurance for membership.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does yoga teacher insurance cost?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Basic yoga teacher insurance starts from around £50-80 per year for standard styles. Policies including public liability (£5M), professional indemnity, and treatment risk typically cost £80-150 per year. Specialist cover for aerial yoga, hot yoga, or yoga therapy may cost more. Most insurers offer monthly payment options to spread the cost.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What yoga styles are typically covered?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Standard policies cover most common yoga styles including Hatha, Vinyasa, Ashtanga, Yin, Restorative, Iyengar, Kundalini, and prenatal yoga. You may need to declare or pay extra for higher-risk activities like hot yoga (Bikram), aerial yoga, AcroYoga, SUP yoga, or teaching specific populations like those with medical conditions.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Am I covered to teach online yoga classes?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Most modern yoga teacher insurance policies include cover for online and virtual teaching, including live-streamed classes and pre-recorded content. However, you should check your specific policy as terms vary. You may need to include appropriate disclaimers for online students and ensure your policy covers instruction given remotely.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I need insurance for yoga retreats abroad?
                <svg className="w-5 h-5 text-purple-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, if you're leading yoga retreats or teaching abroad, you need worldwide cover. Many UK yoga teacher insurance policies offer worldwide teaching cover as standard or as an add-on. Check that the policy covers all countries where you'll be teaching and consider local requirements. Some destinations may have specific insurance requirements.
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
              <h3 className="text-white font-bold mb-4">Yoga Teacher Insurance UK</h3>
              <p className="text-slate-400 text-sm">Compare yoga teacher insurance quotes from specialist UK insurers for instructors and studios.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white">Standard Yoga Insurance</a></li>
                <li><a href="#" className="hover:text-white">Hot Yoga Insurance</a></li>
                <li><a href="#" className="hover:text-white">Aerial Yoga Insurance</a></li>
                <li><a href="#" className="hover:text-white">Pilates Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#faq" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Insurance Guide</a></li>
                <li><a href="#" className="hover:text-white">Yoga Alliance Info</a></li>
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
            <p>© 2025 Yoga Teacher Insurance UK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
