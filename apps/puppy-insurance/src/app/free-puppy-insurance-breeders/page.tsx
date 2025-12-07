import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Puppy Insurance for Breeders UK 2025 | Breeder Insurance Schemes',
  description: 'Get free puppy insurance for breeders in the UK. Learn about 4-6 weeks free puppy insurance schemes, breeder partnerships, and how to offer insurance vouchers to puppy buyers. Essential guide for UK dog breeders.',
  keywords: 'free puppy insurance for breeders, breeder puppy insurance, puppy insurance vouchers, kennel club puppy insurance, free puppy insurance, 4 weeks free puppy insurance, breeder insurance schemes, puppy insurance breeders uk',
  openGraph: {
    title: 'Free Puppy Insurance for Breeders UK 2025',
    description: 'Guide to free puppy insurance schemes for breeders. Offer insurance vouchers to puppy buyers.',
    type: 'website',
    url: 'https://puppyinsurance.quest/free-puppy-insurance-breeders',
  },
  alternates: {
    canonical: 'https://puppyinsurance.quest/free-puppy-insurance-breeders',
  },
}

export default function FreeBreederInsurancePage() {
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
          <li className="text-white">Free Insurance for Breeders</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Image
              src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
              alt="Free puppy insurance for breeders"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
              alt="Breeder puppy insurance UK"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <Image
              src="https://em-content.zobj.net/source/apple/391/poodle_1f429.png"
              alt="Free insurance vouchers for breeders"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Free Puppy Insurance
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> for Breeders</span>
          </h1>
          <p className="text-lg text-slate-400 mb-4">
            As a breeder, you can offer <strong>free puppy insurance</strong> to your puppy buyers at no cost to you. Learn about <strong>4 weeks free puppy insurance</strong>, breeder partnership schemes, and how to add value to your puppies.
          </p>
          <p className="text-sm text-slate-500">
            Comprehensive guide to <strong>free puppy insurance for breeders</strong> in the UK.
          </p>
        </div>
      </section>

      {/* Benefits for Breeders */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Offer Free Puppy Insurance to Buyers?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Partnering with pet insurers to offer <strong>free puppy insurance for breeders</strong> benefits everyone - you, your puppies, and their new families.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/star_2b50.png"
                  alt="Professional breeder reputation"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Adds Professional Value</h3>
              <p className="text-sm text-slate-400">
                Offering <strong>free puppy insurance</strong> with your puppies shows you're a responsible breeder who cares about their welfare beyond the sale. It sets you apart from backyard breeders.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/shield_1f6e1-fe0f.png"
                  alt="Puppy protection insurance"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Protects Your Puppies</h3>
              <p className="text-sm text-slate-400">
                Insurance ensures new owners can afford vet care if problems arise. This means better outcomes for the puppies you've carefully bred and raised.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/money-bag_1f4b0.png"
                  alt="Free insurance scheme for breeders"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Completely Free to You</h3>
              <p className="text-sm text-slate-400">
                <strong>Free puppy insurance for breeders</strong> schemes cost you nothing. Insurers provide vouchers free of charge, hoping buyers will continue with paid policies after the free period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How Free Puppy Insurance for Breeders Works
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Register with an Insurance Partner</h3>
                  <p className="text-sm text-slate-400">
                    Sign up for a breeder partnership scheme with one or more pet insurers. Popular options include Petplan Breeder, Agria Breeder Club, and the Kennel Club scheme. Registration is free.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Receive Free Insurance Vouchers</h3>
                  <p className="text-sm text-slate-400">
                    The insurer provides you with voucher codes or certificates - typically offering <strong>4 weeks free puppy insurance</strong>, <strong>5 weeks free</strong>, or <strong>6 weeks free</strong> depending on the scheme.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Give to Puppy Buyers</h3>
                  <p className="text-sm text-slate-400">
                    When a puppy goes to their new home, include the insurance voucher in their puppy pack. New owners activate it online or by phone to start their free cover immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Buyers Get Immediate Protection</h3>
                  <p className="text-sm text-slate-400">
                    The new owner has cover from day one - the most important time when puppies are settling into new environments and at higher risk of accidents or illness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Schemes */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Free Puppy Insurance Schemes for Breeders
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Several UK pet insurers offer <strong>free puppy insurance for breeders</strong>. Here are some popular options:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-white mb-3">Kennel Club Pet Insurance</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>5 weeks free</strong> for KC registered puppies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic with KC registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Up to £3,000 vet fee cover</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Kennel Club registered breeders</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Petplan Breeder Scheme</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>4 weeks free puppy insurance</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free breeder registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Well-known brand trusted by buyers</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Established breeders of any breed</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Agria Breeder Club</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>5 weeks free</strong> for puppy buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Breeder support resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lifetime cover option for buyers</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Breed club affiliated breeders</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Other Insurer Schemes</h3>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Animal Friends, Bought By Many, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>4-6 weeks free</strong> varies by provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contact insurers directly for schemes</span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">Best for: Exploring multiple options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Breeders */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tips for Breeders Offering Free Insurance
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Include in Your Puppy Pack</h3>
              <p className="text-sm text-slate-400">
                Always include the insurance voucher prominently in the documentation you give to buyers. Explain what it is and encourage them to activate it immediately.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Explain the Importance</h3>
              <p className="text-sm text-slate-400">
                Tell buyers that the <strong>free puppy insurance</strong> period is the perfect time to try cover risk-free, and stress the importance of continuing with permanent insurance afterward.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Consider Multiple Schemes</h3>
              <p className="text-sm text-slate-400">
                You can register with more than one insurer scheme. This lets you offer buyers a choice or have backup vouchers if one scheme runs out.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-2">Advertise It</h3>
              <p className="text-sm text-slate-400">
                Mention that you offer <strong>free puppy insurance</strong> in your puppy listings. "Includes 5 weeks free pet insurance" is a selling point that shows you're a professional, caring breeder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Free Puppy Insurance for Breeders FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is free puppy insurance for breeders really free?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, <strong>free puppy insurance for breeders</strong> is genuinely free with no catch for you or the puppy buyer. Insurers offer these schemes hoping that new owners will continue with a paid policy after the free period ends. You don't pay anything, and the buyer gets free cover.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I register for breeder insurance schemes?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Visit the insurer's website and look for their "Breeder" or "Breeder Scheme" section. You'll typically need to provide your name, address, and some details about your breeding activities. Registration is usually instant or within a few days.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What does the free insurance cover?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Free puppy insurance</strong> typically covers vet fees for accidents and illness during the trial period (usually £2,000-£4,000 limit). Some also include third party liability and death benefit. Coverage levels vary between schemes, so check the details when you register.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I use multiple breeder schemes?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, you can register with multiple insurers and offer different vouchers to different puppy buyers. However, each individual puppy should only have one free insurance policy activated - buyers shouldn't try to claim on multiple free policies simultaneously.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4">
            <Image
              src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
              alt="Free puppy insurance for breeders"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Looking for Puppy Insurance as a Buyer?
          </h2>
          <p className="text-slate-300 mb-8">
            If you're getting a new puppy and want to compare insurance quotes, use our calculator to find the best cover for your new family member.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            Compare Puppy Insurance Quotes
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-amber-400 hover:underline">Puppy Insurance UK</Link> - Guide to <strong>free puppy insurance for breeders</strong>.
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Puppy Insurance UK. Resources for responsible breeders.
          </p>
        </div>
      </footer>
    </div>
  )
}
