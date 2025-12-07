import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pug Puppy Insurance UK 2025 | Compare Pug Pet Insurance Quotes',
  description: 'Compare Pug puppy insurance quotes from UK pet insurers. Get specialist Pug insurance with BOAS cover, breathing condition protection, and lifetime cover from £40/month. Find the best pet insurance for your Pug.',
  keywords: 'pug puppy insurance, pug insurance, pug pet insurance, pug dog insurance, pug insurance uk, pug insurance cost, brachycephalic dog insurance, flat faced dog insurance, pug health insurance',
  openGraph: {
    title: 'Pug Puppy Insurance UK 2025 | Pug Pet Insurance',
    description: 'Compare Pug puppy insurance quotes. Find specialist cover for your flat-faced friend.',
    type: 'website',
    url: 'https://puppyinsurance.quest/pug-insurance',
  },
  alternates: {
    canonical: 'https://puppyinsurance.quest/pug-insurance',
  },
}

const pugFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is Pug puppy insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pug puppy insurance typically costs between £40-£70 per month for comprehensive lifetime cover in the UK. This is higher than many breeds because Pugs are brachycephalic (flat-faced) and prone to expensive health conditions like BOAS, eye problems, and spinal issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Pug insurance so expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pug insurance is more expensive because Pugs are prone to multiple health conditions including Brachycephalic Obstructive Airway Syndrome (BOAS), eye problems, skin fold infections, and spinal issues. These conditions often require expensive surgery or ongoing treatment, so insurers charge higher premiums.',
      },
    },
  ],
}

export default function PugInsurancePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
                  alt="Puppy Insurance UK logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Puppy <span className="text-amber-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Pet Insurance Quotes</p>
              </div>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <Link href="/#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</Link>
              <Link href="/#breeds" className="text-slate-300 hover:text-white transition-colors">All Breeds</Link>
              <Link href="/#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-slate-400">
          <li><Link href="/" className="hover:text-amber-400">Puppy Insurance</Link></li>
          <li>/</li>
          <li className="text-white">Pug Insurance</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
            alt="Pug puppy insurance UK"
            width={96}
            height={96}
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Pug Puppy Insurance
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            Compare <strong>Pug puppy insurance</strong> quotes from leading UK pet insurers. Find specialist <strong>Pug insurance</strong> with BOAS cover, breathing condition protection, and lifetime cover for your flat-faced friend.
          </p>
          <p className="text-sm text-slate-500">
            <strong>Pug pet insurance</strong> from £40/month. Essential protection for brachycephalic breeds.
          </p>

          <div className="mt-8">
            <Link
              href="/#calculator"
              className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              Get Pug Insurance Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-500/20 border border-amber-500/50 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/warning_26a0-fe0f.png"
                  alt="Important Pug insurance information"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-white font-semibold mb-2">Why Pug Insurance is Essential</h2>
                <p className="text-sm text-slate-300">
                  Pugs are a brachycephalic (flat-faced) breed with significantly higher health risks than most dogs. <strong>Pug puppy insurance</strong> is not optional - it's essential. Without cover, you could face vet bills of £3,000-£7,000 for BOAS surgery alone. Many Pugs require ongoing treatment for breathing, eye, and skin conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Pug Puppy Insurance at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£40-£70</div>
              <div className="text-white font-medium mb-1">Monthly Premium</div>
              <p className="text-xs text-slate-400">Lifetime cover for Pugs</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">12-15</div>
              <div className="text-white font-medium mb-1">Years Lifespan</div>
              <p className="text-xs text-slate-400">With proper care</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">6-8kg</div>
              <div className="text-white font-medium mb-1">Adult Weight</div>
              <p className="text-xs text-slate-400">Small but stocky build</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-red-500/30 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">High</div>
              <div className="text-white font-medium mb-1">Insurance Risk</div>
              <p className="text-xs text-slate-400">Brachycephalic breed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Common Pug Health Conditions Your Insurance Should Cover
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Pugs are prone to several expensive health conditions. Make sure your <strong>Pug puppy insurance</strong> covers these common issues:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/wind-face_1f32c-fe0f.png"
                    alt="BOAS Pug insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">BOAS (Breathing Problems)</h3>
                  <span className="text-red-400 text-sm">Very Common</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Brachycephalic Obstructive Airway Syndrome affects most Pugs to some degree. Causes snoring, breathing difficulties, and exercise intolerance. Corrective surgery often needed.
              </p>
              <div className="text-xs text-amber-400">Surgery cost: £2,000 - £7,000</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/eye_1f441-fe0f.png"
                    alt="Pug eye problems insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Eye Problems</h3>
                  <span className="text-amber-400 text-sm">Very Common</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Prominent eyes make Pugs prone to corneal ulcers, dry eye, and eye injuries. Entropion (inward-rolling eyelids) often requires surgery.
              </p>
              <div className="text-xs text-amber-400">Treatment cost: £500 - £3,000</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/bone_1f9b4.png"
                    alt="Pug spinal problems insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Spinal Problems</h3>
                  <span className="text-purple-400 text-sm">Common</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Hemivertebrae (malformed vertebrae) can cause pain and mobility issues. Intervertebral disc disease (IVDD) is also seen in Pugs.
              </p>
              <div className="text-xs text-amber-400">Surgery cost: £3,000 - £8,000</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/adhesive-bandage_1fa79.png"
                    alt="Pug skin fold infections insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Skin Fold Infections</h3>
                  <span className="text-blue-400 text-sm">Common</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                The wrinkles that make Pugs cute can trap moisture and bacteria, leading to painful skin infections. Requires ongoing management.
              </p>
              <div className="text-xs text-amber-400">Ongoing treatment: £200 - £800/year</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/brain_1f9e0.png"
                    alt="Pug encephalitis insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Pug Dog Encephalitis (PDE)</h3>
                  <span className="text-green-400 text-sm">Breed-Specific</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                A serious inflammatory brain condition unique to Pugs. Causes seizures and can be fatal. No cure, but management possible with early detection.
              </p>
              <div className="text-xs text-amber-400">Treatment: Ongoing medication required</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/leg_1f9b5.png"
                    alt="Pug hip dysplasia insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Hip Dysplasia</h3>
                  <span className="text-orange-400 text-sm">Moderate Risk</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">
                Malformation of the hip joint causing pain and lameness. Can require surgery in severe cases. Weight management helps.
              </p>
              <div className="text-xs text-amber-400">Surgery cost: £2,000 - £5,000</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <p className="text-center text-slate-300">
              <strong>Important:</strong> Lifetime <strong>Pug pet insurance</strong> is essential for this breed. Many conditions are ongoing, and time-limited policies would stop covering them after 12 months.
            </p>
          </div>
        </div>
      </section>

      {/* Cover Options */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Pug Insurance Cover Options
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            For Pugs, we strongly recommend lifetime cover with a high vet fee limit. Here's what to expect for <strong>Pug puppy insurance</strong> pricing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30 relative">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                Essential for Pugs
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lifetime Cover</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">£40-£70/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Covers BOAS and breathing conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Ongoing conditions covered for life</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">We recommend £10,000+ vet fee limit</span>
                </li>
              </ul>
              <Link href="/#calculator" className="block w-full text-center py-3 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                Get Quote
              </Link>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 relative opacity-75">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-slate-500 text-white text-xs font-semibold rounded-full">
                Not Recommended
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Time Limited</h3>
              <div className="text-3xl font-bold text-slate-400 mb-4">£25-£45/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">BOAS becomes excluded after 12 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">Ongoing eye problems excluded</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">Poor value for brachycephalic breeds</span>
                </li>
              </ul>
              <p className="text-xs text-red-400 text-center">Not suitable for Pugs</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 relative opacity-75">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
                Avoid
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Accident Only</h3>
              <div className="text-3xl font-bold text-slate-400 mb-4">£15-£25/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">No BOAS cover at all</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">No illness cover</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">Leaves you exposed to major costs</span>
                </li>
              </ul>
              <p className="text-xs text-red-400 text-center">Do not choose for Pugs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Pug Puppy Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group" open>
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is Pug puppy insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Pug puppy insurance</strong> typically costs between £40-£70 per month for comprehensive lifetime cover in the UK. This is significantly higher than many breeds because Pugs are brachycephalic (flat-faced) and prone to expensive health conditions like BOAS, eye problems, and spinal issues. Cheaper policies exist but often exclude the conditions Pugs are most likely to need.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is Pug insurance so expensive?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Pug insurance</strong> is expensive because the breed has multiple inherited health problems. Most Pugs suffer from some degree of BOAS (breathing difficulties), many develop eye problems due to their prominent eyes, and skin fold infections are common. Insurers price based on claim frequency, and Pugs claim far more often than most breeds.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does Pug insurance cover BOAS surgery?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, most <strong>Pug pet insurance</strong> policies cover BOAS surgery if your Pug wasn't showing symptoms before the policy started. However, check the policy wording carefully. Some insurers have specific exclusions or waiting periods for brachycephalic conditions. Lifetime cover is essential - if you have time-limited cover, BOAS would become excluded after 12 months.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What vet fee limit do I need for a Pug?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                For Pugs, we recommend at least £10,000-£15,000 annual vet fee limit. BOAS surgery alone can cost £5,000-£7,000, and if your Pug develops multiple conditions (which is common), lower limits could leave you paying out of pocket. Unlimited cover is ideal if you can afford the higher premiums.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                When should I insure my Pug puppy?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Insure your <strong>Pug puppy</strong> the day you bring them home (from 8 weeks old). This is absolutely critical for Pugs because many develop symptoms of BOAS and other conditions early. If you wait and your Pug shows any signs of breathing difficulties before you get insurance, it becomes a pre-existing condition and won't be covered.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
            alt="Get Pug puppy insurance quote"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Protect Your Pug Today
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>Pug puppy insurance</strong> quotes and find lifetime cover with BOAS protection. Don't wait until health problems develop.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            Get Your Pug Insurance Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-amber-400 hover:underline">Puppy Insurance UK</Link> - Compare <strong>Pug puppy insurance</strong> quotes from UK pet insurers.
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Puppy Insurance UK. Specialist insurance for brachycephalic breeds.
          </p>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pugFaqJsonLd) }}
      />
    </div>
  )
}
