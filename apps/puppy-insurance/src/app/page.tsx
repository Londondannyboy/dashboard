import { Metadata } from 'next'
import Image from 'next/image'
import { PuppyQuoteForm } from '../components/PuppyQuoteForm'

export const metadata: Metadata = {
  title: 'Puppy Insurance UK 2025 | Compare Pet Insurance for Puppies & Dogs',
  description: 'Compare puppy pet insurance quotes from UK insurers. Get pet insurance for puppies with lifetime cover, vet fees from £1,000 to unlimited. Free puppy insurance calculator - find the best dog insurance for puppies today.',
  keywords: 'puppy insurance, puppy pet insurance, pet insurance puppy, puppy dog insurance, insurance for puppy, pet insurance puppies, insurance for puppies, dog insurance for puppies, pet insurance for puppies, new puppy insurance uk, pet insurance for a puppy, insuring a dog, can you get dog insurance, jack russell dog insurance, pug puppy insurance, puppy insurance prices, puppy insurance cost, free puppy insurance, 4 weeks free puppy insurance, how much is puppy insurance',
  openGraph: {
    title: 'Puppy Insurance UK 2025 | Pet Insurance for Puppies',
    description: 'Compare puppy pet insurance quotes from UK insurers. Find dog insurance for puppies with lifetime cover.',
    type: 'website',
    url: 'https://puppyinsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Insurance UK 2025 | Pet Insurance Puppies',
    description: 'Compare pet insurance for puppies from UK insurers.',
  },
  alternates: {
    canonical: 'https://puppyinsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
                  alt="Puppy Insurance UK - Dog face logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Puppy <span className="text-amber-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Pet Insurance for Puppies</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</a>
              <a href="#cover-types" className="text-slate-300 hover:text-white transition-colors">Cover Types</a>
              <a href="#breeds" className="text-slate-300 hover:text-white transition-colors">Breed Guide</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
              alt="Puppy dog insurance UK"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Puppy Insurance
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>puppy pet insurance</strong> quotes from leading UK insurers. Find the <strong>best pet insurance for puppies</strong> - lifetime cover, accident & illness protection, and vet fee limits up to unlimited.
          </p>
          <p className="text-sm text-slate-500">
            Get <strong>dog insurance for puppies</strong> in minutes. <strong>Pet insurance puppy</strong> options from just £10/month. Whether you're <strong>insuring a dog</strong> for the first time or switching providers, we'll help you find the right cover.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Puppy Pet Insurance Calculator</h2>
          <p className="text-slate-400">Get an instant <strong>pet insurance for a puppy</strong> estimate - free and no obligation</p>
        </div>
        <PuppyQuoteForm />
      </section>

      {/* Why Puppy Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Pet Insurance for Puppies?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Puppy pet insurance</strong> is essential for protecting both your new pet and your finances. Puppies are curious and prone to accidents, and vet bills can quickly add up. Here's why <strong>insurance for puppies</strong> matters:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/hospital_1f3e5.png"
                  alt="Pet insurance puppy vet costs"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rising Vet Costs</h3>
              <p className="text-sm text-slate-400">
                Vet bills have increased significantly. A simple operation can cost £1,000+, and complex treatments can reach £5,000-£10,000. <strong>Pet insurance puppies</strong> helps cover these unexpected costs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/adhesive-bandage_1fa79.png"
                  alt="Puppy dog insurance accidents"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Puppies Have Accidents</h3>
              <p className="text-sm text-slate-400">
                Young dogs are curious explorers. Swallowed objects, broken bones, and cuts are common puppy emergencies. <strong>Dog insurance for puppies</strong> ensures you never have to choose between treatment and cost.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png"
                  alt="Insurance for puppy illness protection"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Illness Protection</h3>
              <p className="text-sm text-slate-400">
                From minor infections to serious conditions like parvovirus, puppies can fall ill unexpectedly. Good <strong>pet insurance for puppies</strong> covers diagnosis, treatment, and medication.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/warning_26a0-fe0f.png"
                  alt="New puppy insurance UK pre-existing conditions"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No Pre-Existing Conditions</h3>
              <p className="text-sm text-slate-400">
                Get <strong>new puppy insurance UK</strong> as early as possible before any health issues develop. Pre-existing conditions are excluded from most policies, so don't delay getting cover.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/house_1f3e0.png"
                  alt="Puppy pet insurance third party liability"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Third Party Liability</h3>
              <p className="text-sm text-slate-400">
                If your dog causes injury or damage to others, you could be liable. Most <strong>puppy dog insurance</strong> includes third party cover up to £1-3 million.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/money-bag_1f4b0.png"
                  alt="Insurance for puppies peace of mind"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Peace of Mind</h3>
              <p className="text-sm text-slate-400">
                Focus on enjoying life with your new puppy, not worrying about potential vet bills. <strong>Insurance for puppy</strong> owners gives you financial peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Types Section */}
      <section id="cover-types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Types of Pet Insurance for Puppies
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Understanding the different types of <strong>puppy pet insurance</strong> helps you choose the right policy. Whether you're looking for <strong>pet insurance for a puppy</strong> or an older dog, here are the main options:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lifetime */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30 relative">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                Recommended
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/star_2b50.png"
                    alt="Lifetime puppy insurance cover"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">Lifetime Cover</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                The most comprehensive <strong>pet insurance puppy</strong> option. Your vet fee limit resets each year, meaning ongoing conditions remain covered throughout your dog's life.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Vet fee limit renews annually</span>
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
                  <span className="text-slate-300">Best for chronic conditions like allergies</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="text-amber-400 font-semibold">From £25/month</span>
              </div>
            </div>

            {/* Maximum Benefit */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/gem-stone_1f48e.png"
                    alt="Maximum benefit dog insurance for puppies"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">Maximum Benefit</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                A set amount per condition with no time limit. Once you hit the limit for a condition, it's no longer covered, but you have unlimited time to claim.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Fixed amount per condition (e.g., £4,000)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">No time limit for treatment</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="text-blue-400 font-semibold">From £18/month</span>
              </div>
            </div>

            {/* Time Limited */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/alarm-clock_23f0.png"
                    alt="Time limited insurance for puppies"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">Time Limited (12 Months)</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Cover for each condition lasts 12 months from the first treatment date. A more affordable <strong>pet insurance puppies</strong> option.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Good for short-term conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">More affordable than lifetime</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="text-purple-400 font-semibold">From £12/month</span>
              </div>
            </div>

            {/* Accident Only */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-500/20 flex items-center justify-center">
                  <Image
                    src="https://em-content.zobj.net/source/apple/391/ambulance_1f691.png"
                    alt="Accident only puppy dog insurance"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">Accident Only</h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Budget-friendly <strong>insurance for puppy</strong> owners. Covers accidents only - no illness cover, making it suitable as basic protection.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Covers accidents and injuries</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">Most affordable option</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <span className="text-slate-400 font-semibold">From £5/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Puppy Insurance Prices Section */}
      <section id="prices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Puppy Insurance Prices 2025 - How Much Does It Cost?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Puppy insurance prices</strong> vary based on breed, age, location, and cover level. Here's a comprehensive guide to <strong>puppy insurance cost</strong> in the UK:
          </p>

          {/* Price by Cover Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£5-£15</div>
              <div className="text-white font-medium mb-1">Accident Only</div>
              <p className="text-xs text-slate-400">Basic accident cover for healthy dogs</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£12-£30</div>
              <div className="text-white font-medium mb-1">Time Limited</div>
              <p className="text-xs text-slate-400">12-month condition limits</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£20-£50</div>
              <div className="text-white font-medium mb-1">Lifetime Cover</div>
              <p className="text-xs text-slate-400">Comprehensive ongoing cover</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">£50-£100</div>
              <div className="text-white font-medium mb-1">High-Risk Breeds</div>
              <p className="text-xs text-slate-400">Pugs, French Bulldogs, etc.</p>
            </div>
          </div>

          {/* Detailed Price Table */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-8">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Puppy Insurance Prices by Breed (Monthly)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-slate-300">Breed</th>
                    <th className="text-center py-3 px-4 text-slate-300">Accident Only</th>
                    <th className="text-center py-3 px-4 text-slate-300">Time Limited</th>
                    <th className="text-center py-3 px-4 text-slate-300">Lifetime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-3 px-4 text-white">Mixed Breed / Crossbreed</td>
                    <td className="py-3 px-4 text-center text-slate-400">£5-£10</td>
                    <td className="py-3 px-4 text-center text-slate-400">£10-£20</td>
                    <td className="py-3 px-4 text-center text-amber-400">£15-£30</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Labrador Retriever</td>
                    <td className="py-3 px-4 text-center text-slate-400">£8-£12</td>
                    <td className="py-3 px-4 text-center text-slate-400">£15-£25</td>
                    <td className="py-3 px-4 text-center text-amber-400">£20-£40</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Cockapoo / Labradoodle</td>
                    <td className="py-3 px-4 text-center text-slate-400">£7-£12</td>
                    <td className="py-3 px-4 text-center text-slate-400">£12-£22</td>
                    <td className="py-3 px-4 text-center text-amber-400">£18-£35</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Jack Russell Terrier</td>
                    <td className="py-3 px-4 text-center text-slate-400">£5-£10</td>
                    <td className="py-3 px-4 text-center text-slate-400">£10-£18</td>
                    <td className="py-3 px-4 text-center text-amber-400">£15-£30</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">German Shepherd</td>
                    <td className="py-3 px-4 text-center text-slate-400">£10-£15</td>
                    <td className="py-3 px-4 text-center text-slate-400">£18-£30</td>
                    <td className="py-3 px-4 text-center text-amber-400">£25-£50</td>
                  </tr>
                  <tr className="bg-amber-500/10">
                    <td className="py-3 px-4 text-white font-medium">Pug</td>
                    <td className="py-3 px-4 text-center text-slate-400">£15-£25</td>
                    <td className="py-3 px-4 text-center text-slate-400">£30-£50</td>
                    <td className="py-3 px-4 text-center text-amber-400">£40-£70</td>
                  </tr>
                  <tr className="bg-amber-500/10">
                    <td className="py-3 px-4 text-white font-medium">French Bulldog</td>
                    <td className="py-3 px-4 text-center text-slate-400">£20-£30</td>
                    <td className="py-3 px-4 text-center text-slate-400">£35-£55</td>
                    <td className="py-3 px-4 text-center text-amber-400">£50-£80</td>
                  </tr>
                  <tr className="bg-amber-500/10">
                    <td className="py-3 px-4 text-white font-medium">English Bulldog</td>
                    <td className="py-3 px-4 text-center text-slate-400">£25-£40</td>
                    <td className="py-3 px-4 text-center text-slate-400">£45-£70</td>
                    <td className="py-3 px-4 text-center text-amber-400">£60-£100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              *<strong>Puppy insurance prices</strong> shown are indicative. Actual premiums depend on age, location, and vet fee limit chosen.
            </p>
          </div>

          {/* Factors Affecting Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">Breed</h4>
              <p className="text-sm text-slate-400">
                Brachycephalic breeds (Pugs, Bulldogs) cost 2-3x more due to higher health risks. Mixed breeds are typically cheapest.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">Age</h4>
              <p className="text-sm text-slate-400">
                Puppies under 1 year often cost slightly more due to accident risk. <strong>Puppy insurance cost</strong> increases as dogs age.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-2">Vet Fee Limit</h4>
              <p className="text-sm text-slate-400">
                Higher limits (£10,000+) increase premiums. We recommend at least £5,000 for adequate <strong>puppy insurance</strong> cover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breed Guide Section */}
      <section id="breeds" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Dog Insurance for Puppies by Breed
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Different breeds have different <strong>pet insurance puppy</strong> costs based on their health risks. Here's a guide to typical monthly premiums for <strong>puppy and dog insurance</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/guide-dog_1f9ae.png"
                  alt="Labrador Retriever puppy pet insurance"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Labrador Retriever</h3>
                  <p className="text-sm text-amber-400">£20-£40/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Popular family breed. Prone to hip dysplasia and joint issues. Lifetime <strong>pet insurance for puppies</strong> recommended for potential ongoing treatment.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
                  alt="French Bulldog puppy dog insurance"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">French Bulldog</h3>
                  <p className="text-sm text-amber-400">£40-£80/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Brachycephalic breed with higher health risks. Breathing problems, skin conditions, and spinal issues are common. Higher <strong>insurance for puppy</strong> premiums reflect this.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/poodle_1f429.png"
                  alt="Cockapoo pet insurance puppies"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Cockapoo</h3>
                  <p className="text-sm text-amber-400">£18-£35/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Popular crossbreed with generally good health. May inherit conditions from parent breeds. Usually mid-range <strong>pet insurance puppies</strong> premiums.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
                  alt="German Shepherd dog insurance for puppies"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">German Shepherd</h3>
                  <p className="text-sm text-amber-400">£25-£50/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Large breed prone to hip and elbow dysplasia. Also susceptible to digestive issues. Mid to high <strong>puppy pet insurance</strong> premiums typical.
              </p>
            </div>

            {/* Pug - NEW for SEO */}
            <a href="/pug-insurance" className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-colors block">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog-face_1f436.png"
                  alt="Pug puppy insurance UK"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Pug</h3>
                  <p className="text-sm text-amber-400">£40-£70/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Brachycephalic breed with specific health needs. Breathing issues and eye problems common. <strong>Pug puppy insurance</strong> is essential.
              </p>
              <span className="text-xs text-amber-400 mt-2 inline-block">View Pug Insurance Guide →</span>
            </a>

            {/* Jack Russell */}
            <a href="/jack-russell-insurance" className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-colors block">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/dog_1f415.png"
                  alt="Jack Russell dog insurance UK"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Jack Russell Terrier</h3>
                  <p className="text-sm text-amber-400">£15-£30/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Energetic small breed with good overall health. Can be prone to patellar luxation and eye conditions. Affordable <strong>Jack Russell dog insurance</strong> available.
              </p>
              <span className="text-xs text-amber-400 mt-2 inline-block">View Jack Russell Insurance Guide →</span>
            </a>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/paw-prints_1f43e.png"
                  alt="Mixed breed puppy insurance UK"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">Mixed Breed</h3>
                  <p className="text-sm text-amber-400">£15-£30/month</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Often healthier due to genetic diversity. Usually the most affordable to insure. Still important to have <strong>insurance for puppies</strong> for accidents and illness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            What Does Puppy Pet Insurance Cover?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-amber-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span> Usually Covered
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/hospital_1f3e5.png" alt="Vet fees pet insurance puppy" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Vet fees</strong> - Treatment for accidents and illnesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/microscope_1f52c.png" alt="Diagnostic tests puppy insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Diagnostic tests</strong> - X-rays, scans, blood tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/pill_1f48a.png" alt="Medication insurance for puppies" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Medication</strong> - Prescription drugs and treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/wrench_1f527.png" alt="Surgery dog insurance for puppies" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Surgery</strong> - Operations and post-operative care</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/house_1f3e0.png" alt="Third party liability puppy dog insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Third party liability</strong> - If your dog injures someone</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/globe-showing-europe-africa_1f30d.png" alt="Travel cover pet insurance for puppies" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Travel cover</strong> - Treatment abroad (check limits)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">✗</span> Usually Excluded
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/warning_26a0-fe0f.png" alt="Pre-existing conditions puppy insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Pre-existing conditions</strong> - Anything before cover started</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/hourglass-not-done_23f3.png" alt="Waiting period pet insurance puppies" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Waiting period claims</strong> - Usually 14 days for illness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png" alt="Vaccinations insurance for puppy" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Routine vaccinations</strong> - Preventative treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/scissors_2702-fe0f.png" alt="Neutering puppy pet insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Neutering/spaying</strong> - Unless medically necessary</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/tooth_1f9b7.png" alt="Dental pet insurance for a puppy" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Dental (routine)</strong> - Unless caused by accident</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/meat-on-bone_1f356.png" alt="Food supplements puppy dog insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Food and supplements</strong> - Prescription diets (some policies)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Tips for Cheaper Pet Insurance for Puppies
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Insure Early - Get New Puppy Insurance UK</h3>
                  <p className="text-sm text-slate-400">
                    Get <strong>new puppy insurance UK</strong> as soon as you get your dog (from 8 weeks). This ensures no pre-existing conditions are excluded and locks in lower premiums before age increases costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Consider Higher Excess</h3>
                  <p className="text-sm text-slate-400">
                    Choosing a higher excess can significantly reduce your monthly <strong>pet insurance puppy</strong> premium. Just ensure you can afford the excess if needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Pay Annually</h3>
                  <p className="text-sm text-slate-400">
                    Most insurers offer a discount (typically 5-10%) on <strong>dog insurance for puppies</strong> if you pay for the full year upfront rather than monthly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Compare Quotes</h3>
                  <p className="text-sm text-slate-400">
                    Don't just accept the first quote. Prices for <strong>puppy pet insurance</strong> vary significantly between insurers, so use our comparison tool to find the best deal.
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
            Pet Insurance for Puppies FAQ
          </h2>

          <div className="space-y-4">
            {/* New FAQ: Can you get dog insurance? */}
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can you get dog insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, you can get dog insurance for dogs of almost any age, from puppies as young as 8 weeks old to senior dogs. Most UK insurers offer <strong>pet insurance for puppies</strong> and adult dogs. The earlier you get <strong>dog insurance for puppies</strong>, the better, as pre-existing conditions won't be covered. Some insurers have upper age limits (typically 8-10 years for new policies), but many offer cover for older dogs too.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much is puppy pet insurance in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Puppy pet insurance</strong> in the UK typically costs between £15-£50 per month for lifetime cover, depending on breed, age, and location. Accident-only <strong>pet insurance puppies</strong> cover can be as low as £5-£10/month, while brachycephalic breeds like French Bulldogs may cost £50-£80/month due to higher health risks.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What age can you get pet insurance for a puppy?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most insurers offer <strong>pet insurance for a puppy</strong> from 8 weeks old, which is when they typically leave their mother. We recommend getting <strong>insurance for puppy</strong> as soon as you bring them home to ensure any conditions that develop later are covered.
              </div>
            </details>

            {/* New FAQ: Insuring a dog */}
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What do I need to know about insuring a dog?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                When <strong>insuring a dog</strong>, you'll need to provide your dog's breed, age, and your postcode. Consider what level of cover you need - lifetime cover is best for ongoing conditions, while time-limited is more affordable. Check the vet fee limits, excess amounts, and any breed-specific exclusions. Getting <strong>puppy dog insurance</strong> early means fewer exclusions for pre-existing conditions.
              </div>
            </details>

            {/* New FAQ: 5 year old dog */}
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I get pet insurance for a 5 year old dog?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, you can get <strong>pet insurance for 5 year old dog</strong> from most UK insurers. At 5 years old, your dog is still relatively young and you should be able to find good <strong>puppy and dog insurance</strong> options. However, any conditions your dog has already been treated for will likely be excluded as pre-existing conditions. Premiums may be slightly higher than for puppies, but comprehensive cover is still available.
              </div>
            </details>

            {/* New FAQ: New puppy insurance UK */}
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Where can I get new puppy insurance UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can get <strong>new puppy insurance UK</strong> from comparison sites like ours, direct from insurers like PetPlan, More Than, or Animal Friends, or through your vet. We recommend comparing quotes from multiple providers to find the best <strong>pet insurance for puppies</strong>. Use our calculator above to get instant estimates and compare cover options.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is puppy dog insurance worth it?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, <strong>puppy dog insurance</strong> is generally worth it. A single vet emergency can easily cost £1,000-£5,000+, while complex conditions like cruciate ligament surgery can exceed £5,000. Monthly premiums of £20-£40 for <strong>pet insurance puppies</strong> provide financial protection and peace of mind.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is the difference between lifetime and time-limited cover?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Lifetime <strong>pet insurance puppy</strong> cover renews your vet fee limit each policy year, so ongoing conditions remain covered for your dog's entire life. Time-limited <strong>insurance for puppies</strong> only covers each condition for 12 months from first treatment - after that, it becomes a pre-existing condition and is excluded.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does pet insurance for puppies cover vaccinations?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                No, standard <strong>pet insurance for puppies</strong> doesn't cover vaccinations, microchipping, or routine preventative treatments. These are considered routine healthcare costs. However, some insurers offer optional "wellness" add-ons that cover vaccinations and annual check-ups.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How long is the waiting period for insurance for puppy?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most <strong>insurance for puppy</strong> policies have a waiting period of 14 days for illness claims and 48 hours for accident claims. Some policies have longer waiting periods for specific conditions like cruciate ligament problems (often 6 months).
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Why is French Bulldog insurance so expensive?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                French Bulldogs and other brachycephalic breeds have significantly higher health risks. They're prone to BOAS, skin fold infections, spinal problems, and eye issues. <strong>Puppy pet insurance</strong> premiums are higher for these breeds to cover the increased risk of expensive treatments.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What's the best pet insurance puppies option for first-time owners?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                For first-time owners, we recommend lifetime <strong>pet insurance puppies</strong> cover with at least £5,000-£7,500 vet fee limit. Look for policies with good third party liability (£1M+), 24/7 vet helplines, and clear terms. Avoid the cheapest accident-only <strong>dog insurance for puppies</strong> unless budget is very tight.
              </div>
            </details>

            {/* Free Puppy Insurance FAQs */}
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I get free puppy insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, many insurers offer <strong>free puppy insurance</strong> for a limited period when you get a new puppy. This is typically <strong>4 weeks free puppy insurance</strong>, <strong>5 weeks free puppy insurance</strong>, or even <strong>6 weeks free puppy insurance</strong> depending on the provider. Breeders often provide these vouchers with new puppies, and some vets offer them too. This free period lets you try the cover before committing to a paid policy.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What is 4 weeks free puppy insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>4 weeks free puppy insurance</strong> is a promotional offer from pet insurers that gives new puppy owners 4 weeks of cover at no cost. Many breeders provide these vouchers when you collect your puppy. It typically includes vet fee cover for accidents and illness during the trial period. After 4 weeks, you can continue with a paid policy or switch to another provider - but remember any conditions that develop would become pre-existing.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How do I get 5 or 6 weeks free puppy insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>5 weeks free puppy insurance</strong> and <strong>6 weeks free puppy insurance</strong> offers are available from various insurers. You can get these through: (1) Breeder vouchers - ask your breeder if they partner with an insurer; (2) Vet promotions - many vets offer free insurance to new puppy registrations; (3) Kennel Club - if your puppy is KC registered, you may get free cover; (4) Direct from insurers - some offer online signup promotions. Compare what's included, as cover levels vary.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is free puppy insurance worth it?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Free puppy insurance</strong> is absolutely worth activating as it provides immediate cover when your puppy first comes home - a high-risk time for accidents and illness. However, don't rely on it long-term. The free period is short (4-6 weeks), and you should arrange permanent <strong>puppy pet insurance</strong> before it expires. If your puppy develops any conditions during the free period, continuing with the same insurer ensures they remain covered.
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
            alt="Get puppy pet insurance quote"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Pet Insurance for Your Puppy?
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>puppy pet insurance</strong> quotes from UK insurers. It only takes a few minutes to find the right <strong>dog insurance for puppies</strong> for your new best friend.
          </p>
          <a
            href="#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
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
              <h4 className="text-white font-semibold mb-3">Puppy Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare <strong>puppy pet insurance</strong> and <strong>dog insurance for puppies</strong> quotes from leading UK pet insurers. Find the best cover for your furry friend.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-amber-400">Get Quote</a></li>
                <li><a href="#cover-types" className="hover:text-amber-400">Cover Types</a></li>
                <li><a href="#breeds" className="hover:text-amber-400">Breed Guide</a></li>
                <li><a href="#faq" className="hover:text-amber-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Popular Breeds</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="/pug-insurance" className="hover:text-amber-400">Pug Insurance</a></li>
                <li><a href="/jack-russell-insurance" className="hover:text-amber-400">Jack Russell Insurance</a></li>
                <li><a href="#breeds" className="hover:text-amber-400">French Bulldog Insurance</a></li>
                <li><a href="#breeds" className="hover:text-amber-400">Labrador Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#prices" className="hover:text-amber-400">Puppy Insurance Prices</a></li>
                <li><a href="/free-puppy-insurance-breeders" className="hover:text-amber-400">Free Insurance for Breeders</a></li>
                <li><a href="#cover-types" className="hover:text-amber-400">Cover Types Explained</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Puppy Insurance UK. Compare <strong>pet insurance for puppies</strong> quotes from UK pet insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
