import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jack Russell Dog Insurance UK 2025 | Compare Terrier Pet Insurance',
  description: 'Compare Jack Russell dog insurance quotes from UK pet insurers. Get affordable Jack Russell Terrier insurance with lifetime cover from £15/month. Find the best pet insurance for your Jack Russell puppy.',
  keywords: 'jack russell dog insurance, jack russell insurance, jack russell terrier insurance, jack russell pet insurance, jack russell puppy insurance, terrier dog insurance, jack russell insurance cost, cheap jack russell insurance',
  openGraph: {
    title: 'Jack Russell Dog Insurance UK 2025 | Terrier Pet Insurance',
    description: 'Compare Jack Russell dog insurance quotes. Find affordable cover for your Jack Russell Terrier.',
    type: 'website',
    url: 'https://puppyinsurance.quest/jack-russell-insurance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Russell Dog Insurance UK',
    description: 'Compare Jack Russell Terrier insurance quotes from UK insurers.',
  },
  alternates: {
    canonical: 'https://puppyinsurance.quest/jack-russell-insurance',
  },
}

const jackRussellFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is Jack Russell dog insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jack Russell dog insurance typically costs between £15-£30 per month for comprehensive lifetime cover in the UK. Accident-only cover can be as low as £8-£12/month. Jack Russells are generally healthy dogs, so insurance premiums are usually affordable compared to larger or brachycephalic breeds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What health conditions are Jack Russells prone to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jack Russell Terriers can be prone to patellar luxation (kneecap dislocation), eye conditions like lens luxation and cataracts, deafness, and Legg-Calve-Perthes disease (hip joint condition). Despite these potential issues, they are generally a healthy breed with a lifespan of 13-16 years.',
      },
    },
  ],
}

export default function JackRussellInsurancePage() {
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
          <li className="text-white">Jack Russell Insurance</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
            alt="Jack Russell dog insurance UK"
            width={96}
            height={96}
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Jack Russell Dog Insurance
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            Compare <strong>Jack Russell dog insurance</strong> quotes from leading UK pet insurers. Find affordable <strong>Jack Russell Terrier insurance</strong> with lifetime cover, accident protection, and vet fees up to unlimited.
          </p>
          <p className="text-sm text-slate-500">
            <strong>Jack Russell insurance</strong> from just £15/month. Protect your energetic terrier with comprehensive pet insurance.
          </p>

          <div className="mt-8">
            <Link
              href="/#calculator"
              className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              Get Jack Russell Insurance Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Jack Russell Dog Insurance at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£15-£30</div>
              <div className="text-white font-medium mb-1">Monthly Premium</div>
              <p className="text-xs text-slate-400">Typical cost for lifetime cover</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">13-16</div>
              <div className="text-white font-medium mb-1">Years Lifespan</div>
              <p className="text-xs text-slate-400">Generally a healthy breed</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">5-7kg</div>
              <div className="text-white font-medium mb-1">Adult Weight</div>
              <p className="text-xs text-slate-400">Small breed, lower vet costs</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">Low</div>
              <div className="text-white font-medium mb-1">Insurance Risk</div>
              <p className="text-xs text-slate-400">Healthy breed, affordable premiums</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Jack Russell Insurance Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Jack Russell Dog Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Jack Russell Terriers are energetic, adventurous dogs. While generally healthy, their active nature means accidents can happen. Here's why <strong>Jack Russell insurance</strong> is essential:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/person-running_1f3c3.png"
                  alt="Active Jack Russell dog insurance"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Highly Active Breed</h3>
              <p className="text-sm text-slate-400">
                Jack Russells are incredibly energetic and love to jump, dig, and explore. This adventurous nature can lead to accidents, sprains, and injuries that <strong>Jack Russell dog insurance</strong> can cover.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/leg_1f9b5.png"
                  alt="Jack Russell Terrier insurance patellar luxation"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Patellar Luxation Risk</h3>
              <p className="text-sm text-slate-400">
                Jack Russells can be prone to patellar luxation (kneecap dislocation). Surgery can cost £1,500-£3,000 per knee. <strong>Jack Russell pet insurance</strong> ensures you're covered for this common condition.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/eye_1f441-fe0f.png"
                  alt="Jack Russell insurance eye conditions"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Eye Conditions</h3>
              <p className="text-sm text-slate-400">
                Lens luxation, cataracts, and other eye problems can affect Jack Russells. Eye surgery can be expensive, making <strong>Jack Russell Terrier insurance</strong> important protection.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/old-man_1f474.png"
                  alt="Jack Russell dog insurance long lifespan"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Long Lifespan</h3>
              <p className="text-sm text-slate-400">
                Jack Russells live 13-16 years, meaning more potential for age-related conditions. Lifetime <strong>Jack Russell insurance</strong> ensures coverage throughout their long life.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/ear_1f442.png"
                  alt="Jack Russell pet insurance deafness"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Hearing Issues</h3>
              <p className="text-sm text-slate-400">
                Some Jack Russells can develop deafness, particularly those with more white coloring. Regular health checks covered by <strong>Jack Russell dog insurance</strong> help monitor for issues.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/money-bag_1f4b0.png"
                  alt="Affordable Jack Russell insurance"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Affordable Premiums</h3>
              <p className="text-sm text-slate-400">
                As a generally healthy small breed, <strong>Jack Russell insurance</strong> is typically more affordable than larger or brachycephalic breeds. Get comprehensive cover without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Common Jack Russell Health Conditions
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            While Jack Russells are generally healthy, there are some conditions that <strong>Jack Russell dog insurance</strong> should cover:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Patellar Luxation</h3>
              <p className="text-sm text-slate-400 mb-3">
                The kneecap slips out of place, causing lameness. Common in small breeds. Treatment can range from rest to surgery (£1,500-£3,000 per knee).
              </p>
              <div className="text-xs text-amber-400">Typical treatment cost: £500 - £3,000</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Lens Luxation</h3>
              <p className="text-sm text-slate-400 mb-3">
                The lens of the eye becomes displaced. Can lead to glaucoma and blindness if untreated. Requires urgent veterinary attention.
              </p>
              <div className="text-xs text-amber-400">Typical treatment cost: £1,000 - £2,500</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Legg-Calve-Perthes Disease</h3>
              <p className="text-sm text-slate-400 mb-3">
                Affects the hip joint in young dogs. The head of the femur degenerates, causing pain and lameness. Usually requires surgery.
              </p>
              <div className="text-xs text-amber-400">Typical treatment cost: £1,500 - £4,000</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Cataracts</h3>
              <p className="text-sm text-slate-400 mb-3">
                Cloudiness of the eye lens, common in older Jack Russells. Can lead to blindness. Surgery available to restore vision.
              </p>
              <div className="text-xs text-amber-400">Typical treatment cost: £1,500 - £3,000 per eye</div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            <strong>Jack Russell Terrier insurance</strong> with lifetime cover ensures these conditions remain covered throughout your dog's life.
          </p>
        </div>
      </section>

      {/* Cover Options Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Jack Russell Insurance Cover Options
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Choose the right level of <strong>Jack Russell dog insurance</strong> for your terrier:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30 relative">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lifetime Cover</h3>
              <div className="text-3xl font-bold text-amber-400 mb-4">£20-£30/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Vet fees reset annually</span>
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
                  <span className="text-slate-300">Best for long-lived Jack Russells</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Ideal for Jack Russells given their 13-16 year lifespan
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Time Limited</h3>
              <div className="text-3xl font-bold text-purple-400 mb-4">£12-£20/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">12-month cover per condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">More affordable premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">Ongoing conditions excluded after 12mo</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Budget-friendly but limited for chronic conditions
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-2">Accident Only</h3>
              <div className="text-3xl font-bold text-slate-400 mb-4">£8-£12/mo</div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Covers accidents only</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Lowest monthly cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-slate-500">No illness cover</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Good for active Jack Russells but limited protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Jack Russell Dog Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is Jack Russell dog insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Jack Russell dog insurance</strong> typically costs between £15-£30 per month for comprehensive lifetime cover in the UK. Accident-only cover can be as low as £8-£12/month. Jack Russells are generally healthy dogs with affordable premiums compared to larger or brachycephalic breeds.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What health problems do Jack Russells have?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Jack Russells can be prone to patellar luxation, lens luxation, cataracts, Legg-Calve-Perthes disease, and some may develop deafness. Despite these potential issues, they're generally a healthy breed. <strong>Jack Russell Terrier insurance</strong> ensures you're covered for any conditions that develop.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is Jack Russell insurance expensive?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No, <strong>Jack Russell insurance</strong> is generally affordable. As a healthy small breed without significant breathing or joint issues like larger breeds, premiums are typically lower. You can expect to pay £15-£30/month for comprehensive cover, making it one of the more affordable breeds to insure.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do Jack Russells live a long time?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, Jack Russells are known for their longevity, typically living 13-16 years, with some reaching 18+. This long lifespan means lifetime <strong>Jack Russell pet insurance</strong> is particularly important to cover any age-related conditions that may develop over their many years.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Should I get lifetime cover for my Jack Russell?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, we recommend lifetime <strong>Jack Russell dog insurance</strong> for this breed. Given their long lifespan of 13-16 years, there's more potential for chronic conditions to develop. Lifetime cover ensures any ongoing conditions like patellar luxation or eye problems remain covered throughout their life.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
            alt="Get Jack Russell dog insurance quote"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Jack Russell Dog Insurance Quote
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>Jack Russell Terrier insurance</strong> quotes from UK insurers. Find affordable cover for your energetic terrier in minutes.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            Compare Jack Russell Insurance Quotes
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-3">Puppy Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare <strong>Jack Russell dog insurance</strong> and puppy insurance quotes from leading UK pet insurers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><Link href="/#calculator" className="hover:text-amber-400">Get Quote</Link></li>
                <li><Link href="/#breeds" className="hover:text-amber-400">All Breeds</Link></li>
                <li><Link href="/#faq" className="hover:text-amber-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Jack Russell Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-amber-400">Jack Russell Health Guide</a></li>
                <li><a href="#" className="hover:text-amber-400">Terrier Insurance Tips</a></li>
                <li><Link href="/" className="hover:text-amber-400">All Puppy Insurance</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Puppy Insurance UK. Compare <strong>Jack Russell Terrier insurance</strong> quotes from UK pet insurers.
            </p>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jackRussellFaqJsonLd) }}
      />
    </div>
  )
}
