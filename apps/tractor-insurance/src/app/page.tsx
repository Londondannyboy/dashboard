import { Metadata } from 'next'
import { TractorQuoteForm } from '../components/TractorQuoteForm'

export const metadata: Metadata = {
  title: 'Tractor Insurance UK 2025 | Compare Agricultural Vehicle Quotes',
  description: 'Compare tractor insurance quotes from specialist UK agricultural insurers. Get cover for tractors, farm vehicles and machinery. Comprehensive, third party fire & theft, and third party only options. Free quotes - save on your tractor insurance today.',
  keywords: 'tractor insurance, tractor insurance uk, agricultural insurance, farm vehicle insurance, tractor cover, compare tractor insurance, cheap tractor insurance, agricultural vehicle insurance, farm machinery insurance, tractor insurance quotes, smallholder insurance, agricultural contractor insurance, combine harvester insurance',
  openGraph: {
    title: 'Tractor Insurance UK 2025 | Compare Agricultural Vehicle Quotes',
    description: 'Compare tractor insurance quotes from specialist UK agricultural insurers. Free quotes - save on your tractor insurance today.',
    type: 'website',
    url: 'https://tractorinsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tractor Insurance UK 2025',
    description: 'Compare tractor insurance quotes from UK agricultural insurers.',
  },
  alternates: {
    canonical: 'https://tractorinsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center" role="img" aria-label="Tractor Insurance UK logo">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Tractor <span className="text-green-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Agricultural Cover</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</a>
              <a href="#cover-types" className="text-slate-300 hover:text-white transition-colors">Cover Types</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              <a href="/articles" className="text-slate-300 hover:text-white transition-colors">Farming News</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Tractor Insurance
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>tractor insurance</strong> quotes from specialist UK agricultural insurers. Get comprehensive cover for tractors, farm vehicles and agricultural machinery.
          </p>
          <p className="text-sm text-slate-500">
            Protect your agricultural investment with tailored tractor insurance. Quotes from leading UK farm insurers.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <TractorQuoteForm />
      </section>

      {/* Why Tractor Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Tractor Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Tractor insurance is essential for protecting your agricultural investment. Whether you're a smallholder, farmer, or agricultural contractor, the right tractor insurance policy provides peace of mind and financial protection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal Requirement</h3>
              <p className="text-sm text-slate-400">
                If your tractor is used on public roads, third party insurance is a legal requirement. Even for off-road use, comprehensive tractor insurance protects against theft, fire and accidental damage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Protect Your Investment</h3>
              <p className="text-sm text-slate-400">
                Modern tractors can cost £50,000 to £200,000+. Tractor insurance protects this significant investment against theft (farm theft is rising), vandalism, and accidental damage.
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
                Tractor insurance covers you if your vehicle causes injury to others or damages their property. Agricultural vehicles can cause significant damage - proper insurance is essential.
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
                Many tractor insurance policies can include cover for attached implements - ploughs, loaders, sprayers and other equipment. Protect your complete agricultural setup.
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
                Some tractor insurance policies include agricultural breakdown cover. Get help when you need it most - during harvest or critical farming operations.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Continuity</h3>
              <p className="text-sm text-slate-400">
                Comprehensive tractor insurance can include hire cover or loss of use payments, helping your farming operation continue if your tractor is off the road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Types Section */}
      <section id="cover-types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Tractor Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Comprehensive */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/30">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Tractor Insurance</h3>
              <p className="text-sm text-slate-400 mb-4">
                The highest level of protection for your tractor. Comprehensive cover includes:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Accidental damage to your tractor</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Theft and attempted theft</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Fire damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Third party liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Vandalism and malicious damage</span>
                </li>
              </ul>
            </div>

            {/* TPFT */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Third Party, Fire & Theft</h3>
              <p className="text-sm text-slate-400 mb-4">
                Mid-range protection that covers the essentials:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Third party liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Fire damage to your tractor</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Theft and attempted theft</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">Accidental damage NOT covered</span>
                </li>
              </ul>
            </div>

            {/* TPO */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-slate-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Third Party Only</h3>
              <p className="text-sm text-slate-400 mb-4">
                Legal minimum cover for road use:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Third party liability only</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">No cover for your tractor</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">No fire or theft cover</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">
                Only suitable for low-value tractors or those kept securely off-road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            How Much Does Tractor Insurance Cost?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Tractor insurance costs vary depending on the vehicle, its use, and your circumstances. Here's a guide to typical tractor insurance premiums in the UK.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£150-£300</div>
              <div className="text-white font-medium mb-1">Smallholder</div>
              <p className="text-xs text-slate-400">Basic third party cover for occasional use on a small plot</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£300-£600</div>
              <div className="text-white font-medium mb-1">Farm Use</div>
              <p className="text-xs text-slate-400">Comprehensive cover for farming on your own land</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£500-£1,000</div>
              <div className="text-white font-medium mb-1">Contractor</div>
              <p className="text-xs text-slate-400">Higher cover for agricultural contracting work</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">£800+</div>
              <div className="text-white font-medium mb-1">High Value</div>
              <p className="text-xs text-slate-400">Cover for tractors over £75,000 with full comprehensive</p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            *Indicative prices only. Actual premiums depend on individual circumstances, claims history, and insurer.
          </p>
        </div>
      </section>

      {/* Factors Affecting Premium */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            What Affects Your Tractor Insurance Premium?
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Vehicle Value</h3>
                  <p className="text-sm text-slate-400">
                    Higher value tractors cost more to insure. A £100,000 John Deere will have higher premiums than a £10,000 vintage Massey Ferguson.
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
                  <h3 className="text-white font-semibold mb-1">Type of Use</h3>
                  <p className="text-sm text-slate-400">
                    Agricultural contractors and plant hire operators face higher premiums due to increased risk. Smallholders and hobby farmers typically pay less.
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
                  <h3 className="text-white font-semibold mb-1">Road Use</h3>
                  <p className="text-sm text-slate-400">
                    Tractors that regularly travel on public roads (more than 100 miles per year) typically have higher premiums than those used only on private land.
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
                  <h3 className="text-white font-semibold mb-1">Security</h3>
                  <p className="text-sm text-slate-400">
                    Keeping your tractor in a locked building overnight can reduce premiums by up to 10%. Trackers and immobilisers may also attract discounts.
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
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-sm text-slate-400">
                    Rural areas with low crime rates may have lower premiums. Areas with high agricultural theft rates may face higher costs.
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
                  <h3 className="text-white font-semibold mb-1">Claims History</h3>
                  <p className="text-sm text-slate-400">
                    A clean claims record helps keep premiums down. Some insurers offer no-claims discounts similar to car insurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tractor Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need tractor insurance if I only use my tractor on private land?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                While tractor insurance isn't legally required for off-road use only, it's strongly recommended. Your tractor is a valuable asset at risk of theft, fire, and accidental damage. Comprehensive tractor insurance protects your investment even on private land.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is tractor insurance a legal requirement in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, if your tractor is used on public roads. Under the Road Traffic Act, any vehicle used on public roads must have at least third party insurance. This applies even for short journeys between fields. Penalties for driving without insurance include fines, penalty points, and potential vehicle seizure.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I insure a vintage or classic tractor?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, many specialist insurers offer vintage tractor insurance. These policies often include agreed value cover (rather than market value), coverage for road runs and rallies, and club member discounts. Classic tractors may actually be cheaper to insure if used primarily for shows rather than farm work.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does tractor insurance cover implements and attachments?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Not automatically. Implement cover is usually an optional extra on tractor insurance policies. This covers attached equipment like front loaders, ploughs, mowers, and sprayers. If you have valuable implements, make sure to add this cover to your policy.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Who can drive my tractor under my insurance policy?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                This depends on your policy type. Some policies cover named drivers only, while "any driver" policies allow anyone with a valid licence to drive. Agricultural contractors often need any driver cover for employees. Note that for road use, drivers must hold the appropriate licence category (usually category F for agricultural tractors).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the difference between agricultural and commercial tractor insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Agricultural tractor insurance is for farming purposes - working your own land or as an agricultural contractor. Commercial or plant insurance may be needed if you're using the tractor primarily for construction, landscaping, or hiring out to non-agricultural businesses. Make sure you have the right cover for your actual use.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I get multi-tractor or fleet insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, if you have multiple tractors or agricultural vehicles, fleet insurance can be more cost-effective. Fleet policies typically cover 3+ vehicles under one policy, simplifying administration and often providing volume discounts. This is popular with farms and agricultural contractors.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How can I reduce my tractor insurance premium?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Several factors can help reduce your tractor insurance costs: storing your tractor in a locked building overnight, fitting approved security devices (trackers, immobilisers), limiting road use, increasing your voluntary excess, paying annually rather than monthly, and maintaining a claims-free record. Shopping around and comparing quotes is also essential.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does tractor insurance cover theft?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Theft is covered under comprehensive and third party fire & theft policies. Farm theft is a significant problem in the UK, with tractors and agricultural machinery being prime targets. Make sure your policy provides adequate theft cover and consider security measures that may be required by your insurer.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What happens if I have an accident while contracting on someone else's farm?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                If you're an agricultural contractor, your policy should cover you for work on other people's land. Make sure your policy includes "agricultural contracting" use. Third party liability will cover damage to the client's property, while comprehensive cover protects your own tractor. Always check your policy wording to ensure you're covered for the work you do.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Agricultural Vehicles We Insure
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our panel of specialist agricultural insurers covers all types of farm vehicles and machinery
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🚜</div>
              <h3 className="text-white font-medium text-sm">Tractors</h3>
              <p className="text-xs text-slate-400">All makes & models</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🌾</div>
              <h3 className="text-white font-medium text-sm">Combine Harvesters</h3>
              <p className="text-xs text-slate-400">Seasonal & year-round</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="text-white font-medium text-sm">Telehandlers</h3>
              <p className="text-xs text-slate-400">JCB, Merlo, etc.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🏍️</div>
              <h3 className="text-white font-medium text-sm">Quad Bikes</h3>
              <p className="text-xs text-slate-400">ATVs & UTVs</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">🚛</div>
              <h3 className="text-white font-medium text-sm">Trailers</h3>
              <p className="text-xs text-slate-400">Agricultural trailers</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="text-white font-medium text-sm">Implements</h3>
              <p className="text-xs text-slate-400">Ploughs, loaders, etc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get a Tractor Insurance Quote?
          </h2>
          <p className="text-slate-300 mb-8">
            Compare quotes from specialist UK agricultural insurers. It only takes a few minutes.
          </p>
          <a
            href="#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Tractor Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare tractor and agricultural vehicle insurance quotes from specialist UK insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-green-400">Get Quote</a></li>
                <li><a href="#cover-types" className="hover:text-green-400">Cover Types</a></li>
                <li><a href="#faq" className="hover:text-green-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Insurance Types</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-green-400">Tractor Insurance</a></li>
                <li><a href="#" className="hover:text-green-400">Farm Insurance</a></li>
                <li><a href="#" className="hover:text-green-400">Agricultural Fleet</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/articles" className="hover:text-green-400">Farming News</a></li>
                <li><a href="#" className="hover:text-green-400">Insurance Guides</a></li>
                <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Tractor Insurance UK. Compare agricultural vehicle insurance quotes from specialist UK insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
