import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'John Deere Tractor Insurance UK | Agricultural Insurance Quotes',
  description: 'Specialist John Deere tractor insurance for UK farmers. Get quotes for all John Deere models from compact utility to large agricultural tractors. Compare John Deere insurance prices today.',
  keywords: 'john deere tractor insurance, john deere insurance, john deere agricultural insurance, john deere farm insurance, john deere tractor cover, insure john deere tractor, john deere uk insurance',
  openGraph: {
    title: 'John Deere Tractor Insurance UK | Agricultural Insurance Quotes',
    description: 'Specialist John Deere tractor insurance for UK farmers. Compare quotes for all models.',
    type: 'website',
    locale: 'en_GB',
  },
}

const johnDeereJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'John Deere Tractor Insurance UK',
  description: 'Specialist insurance for John Deere tractors in the United Kingdom',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'Agricultural Tractor Insurance UK',
    url: 'https://tractorinsurance.quest',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: 'Agricultural Tractor Insurance',
}

export default function JohnDeereTractorInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(johnDeereJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Header */}
        <header className="bg-green-800 text-white py-4">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              🚜 Tractor Insurance UK
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200">Home</Link>
              <Link href="/tractor-insurance-cost" className="hover:text-green-200">Insurance Costs</Link>
              <Link href="/vintage-tractor-insurance" className="hover:text-green-200">Vintage Tractors</Link>
              <Link href="/articles" className="hover:text-green-200">Farming News</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-green-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              John Deere Tractor Insurance UK
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Specialist <strong>John Deere tractor insurance</strong> for UK farmers and agricultural businesses.
              Get comprehensive cover for your John Deere machinery from leading UK insurers.
            </p>
            <Link
              href="/#quote-form"
              className="inline-block bg-yellow-500 text-green-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors"
            >
              Get Your John Deere Quote
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Insuring Your John Deere Tractor
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>John Deere</strong> is one of the world's most recognised names in agricultural machinery,
                with a heritage dating back to 1837. As a UK farmer or contractor, your John Deere tractor represents
                a significant investment that deserves proper protection. Our specialist <strong>John Deere tractor
                insurance</strong> provides comprehensive cover tailored to the unique value and specifications of
                these premium agricultural machines.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you own a compact 1 Series for smallholding work or a powerful 9R Series for large-scale
                arable farming, we can help you find the right insurance at competitive prices. John Deere tractors
                are known for their reliability and advanced technology, and your insurance should reflect the
                quality of your machinery.
              </p>
            </div>
          </section>

          {/* John Deere Model Series */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              John Deere Tractor Series We Insure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">1 Series & 2 Series Compact</h3>
                <p className="text-gray-600 mb-3">
                  Perfect for smallholdings, estates and groundscare. These compact utility tractors
                  offer versatility with lower insurance premiums.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1025R, 1026R Sub-Compact (23-26hp)</li>
                  <li>• 2025R, 2032R, 2038R Compact (25-38hp)</li>
                  <li>• Typical value: £15,000 - £35,000</li>
                  <li>• Common use: Groundscare, smallholdings, estates</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">3 Series & 4 Series Utility</h3>
                <p className="text-gray-600 mb-3">
                  Versatile utility tractors ideal for mixed farming operations, livestock work
                  and loader applications.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 3025E, 3038E, 3046R (25-46hp)</li>
                  <li>• 4044M, 4052M, 4066M (44-66hp)</li>
                  <li>• Typical value: £25,000 - £55,000</li>
                  <li>• Common use: Livestock farms, dairy, mixed farming</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">5 Series & 6 Series Utility</h3>
                <p className="text-gray-600 mb-3">
                  The backbone of UK farming - versatile mid-range tractors suitable for most
                  agricultural tasks and operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5075E, 5090M, 5125R (75-125hp)</li>
                  <li>• 6120M, 6155M, 6195M (120-195hp)</li>
                  <li>• Typical value: £50,000 - £120,000</li>
                  <li>• Common use: Arable, mixed farming, contracting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">7R & 8R Series Premium</h3>
                <p className="text-gray-600 mb-3">
                  High-horsepower tractors for demanding arable work, heavy cultivation
                  and large-scale farming operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 7R 210, 7R 270, 7R 350 (210-350hp)</li>
                  <li>• 8R 280, 8R 340, 8R 410 (280-410hp)</li>
                  <li>• Typical value: £150,000 - £350,000</li>
                  <li>• Common use: Large arable, heavy cultivation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">9R & 9RX Series Flagship</h3>
                <p className="text-gray-600 mb-3">
                  The pinnacle of John Deere engineering - articulated and tracked tractors
                  for the largest UK farming operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 9R 440, 9R 540, 9R 640 (440-640hp)</li>
                  <li>• 9RX tracked variants for reduced compaction</li>
                  <li>• Typical value: £300,000 - £500,000+</li>
                  <li>• Common use: Large estates, contractors</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-700 mb-3">Specialist & Vintage John Deere</h3>
                <p className="text-gray-600 mb-3">
                  From narrow tractors to classic vintage models, we provide specialist
                  cover for all John Deere variants.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5G & 6M Series narrow/orchard variants</li>
                  <li>• Classic models: 2030, 3130, 4020, 6400</li>
                  <li>• Value varies by condition and rarity</li>
                  <li>• Common use: Orchards, vineyards, collections</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why John Deere Insurance */}
          <section className="mb-12 bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Why Specialist John Deere Insurance?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">Premium Brand Value</h3>
                <p className="text-gray-700">
                  John Deere tractors hold their value exceptionally well, and generic agricultural
                  policies may undervalue your machine. Our specialist insurers understand the true
                  market value of John Deere equipment and will provide appropriate agreed value cover.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">Advanced Technology Cover</h3>
                <p className="text-gray-700">
                  Modern John Deere tractors feature sophisticated technology including AutoTrac GPS
                  guidance, JDLink telematics, and precision farming systems. Ensure these valuable
                  systems are properly covered in your policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">Genuine Parts Replacement</h3>
                <p className="text-gray-700">
                  In the event of a claim, our recommended policies specify genuine John Deere parts
                  for repairs, maintaining your tractor's performance, warranty status, and resale value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">Dealer Network Support</h3>
                <p className="text-gray-700">
                  John Deere's extensive UK dealer network means quick access to parts and service.
                  Our insurers work with approved repairers who understand John Deere machinery.
                </p>
              </div>
            </div>
          </section>

          {/* Insurance Cost Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              John Deere Tractor Insurance Costs
            </h2>
            <p className="text-gray-700 mb-6">
              Insurance costs for John Deere tractors vary based on model, value, usage and your claims history.
              Here's a general guide to what you might expect to pay:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">John Deere Model</th>
                    <th className="px-6 py-3 text-left">Typical Value</th>
                    <th className="px-6 py-3 text-left">Comprehensive Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">1-2 Series Compact</td>
                    <td className="px-6 py-4">£15,000 - £35,000</td>
                    <td className="px-6 py-4">£180 - £350/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">3-4 Series Utility</td>
                    <td className="px-6 py-4">£25,000 - £55,000</td>
                    <td className="px-6 py-4">£280 - £500/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">5 Series</td>
                    <td className="px-6 py-4">£50,000 - £80,000</td>
                    <td className="px-6 py-4">£400 - £700/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">6 Series</td>
                    <td className="px-6 py-4">£80,000 - £120,000</td>
                    <td className="px-6 py-4">£600 - £1,000/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">7R Series</td>
                    <td className="px-6 py-4">£150,000 - £250,000</td>
                    <td className="px-6 py-4">£1,000 - £1,800/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">8R Series</td>
                    <td className="px-6 py-4">£200,000 - £350,000</td>
                    <td className="px-6 py-4">£1,500 - £2,500/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">9R/9RX Series</td>
                    <td className="px-6 py-4">£300,000 - £500,000+</td>
                    <td className="px-6 py-4">£2,200 - £4,000+/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Premiums are indicative for comprehensive agricultural use. Actual quotes depend on individual circumstances.
            </p>
          </section>

          {/* Cover Options */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              John Deere Insurance Cover Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-3">Comprehensive Cover</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Accidental damage protection</li>
                  <li>✓ Fire and theft cover</li>
                  <li>✓ Third party liability</li>
                  <li>✓ Vandalism and malicious damage</li>
                  <li>✓ Storm and flood damage</li>
                  <li>✓ Agreed value settlement</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-3">Optional Extras</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ GPS & precision ag technology</li>
                  <li>✓ Attached implements cover</li>
                  <li>✓ Breakdown & recovery</li>
                  <li>✓ Hire-in costs cover</li>
                  <li>✓ Operator personal accident</li>
                  <li>✓ Public & employers liability</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-3">Specialist Add-ons</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ JDLink telematics cover</li>
                  <li>✓ AutoTrac guidance systems</li>
                  <li>✓ StarFire receiver cover</li>
                  <li>✓ CommandCenter display</li>
                  <li>✓ Loader & attachments</li>
                  <li>✓ Contract hire protection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              John Deere Insurance FAQs
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-green-700 cursor-pointer">
                  Is John Deere tractor insurance more expensive than other brands?
                </summary>
                <p className="mt-4 text-gray-600">
                  John Deere tractors typically cost slightly more to insure due to their higher
                  purchase price and replacement parts costs. However, their excellent reliability
                  record and strong residual values mean that overall insurance costs remain competitive.
                  The key is ensuring you have the correct agreed value to avoid being underinsured.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-green-700 cursor-pointer">
                  Does my insurance cover John Deere precision farming technology?
                </summary>
                <p className="mt-4 text-gray-600">
                  Standard policies may not fully cover expensive precision farming equipment like
                  AutoTrac, StarFire receivers, or Generation 4 displays. We recommend declaring
                  all technology additions separately and considering specialist technology cover.
                  This equipment can add £20,000+ to a tractor's value.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-green-700 cursor-pointer">
                  Can I get insurance for a John Deere on finance?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we can arrange insurance for financed John Deere tractors. Your finance
                  company will need to be noted as an interested party on the policy. Some finance
                  agreements require comprehensive cover with an agreed value, which we can provide.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-green-700 cursor-pointer">
                  What about warranty and insurance together?
                </summary>
                <p className="mt-4 text-gray-600">
                  Insurance and warranty are separate. Your John Deere PowerGard warranty covers
                  mechanical breakdown, while insurance covers accidents, theft, and third-party
                  damage. Having both provides complete protection. Ensure any repairs under
                  insurance use genuine John Deere parts to maintain warranty validity.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-green-700 cursor-pointer">
                  Are vintage John Deere tractors covered?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we can arrange <Link href="/vintage-tractor-insurance" className="text-green-600 hover:underline">
                  vintage tractor insurance</Link> for classic John Deere models. Popular classics
                  like the 4020, 3130, and older letter-series tractors can be covered on agreed
                  value policies. See our vintage tractor insurance page for more details.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-green-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your John Deere Insurance Quote</h2>
            <p className="text-xl mb-6">
              Compare specialist <strong>John Deere tractor insurance</strong> quotes from leading UK agricultural insurers
            </p>
            <Link
              href="/#quote-form"
              className="inline-block bg-yellow-500 text-green-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </section>

          {/* Related Pages */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Related Insurance Pages</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/kubota-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-700">Kubota Insurance</h3>
                <p className="text-sm text-gray-600">Specialist Kubota tractor cover</p>
              </Link>
              <Link href="/massey-ferguson-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-700">Massey Ferguson Insurance</h3>
                <p className="text-sm text-gray-600">MF tractor insurance quotes</p>
              </Link>
              <Link href="/vintage-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-700">Vintage Insurance</h3>
                <p className="text-sm text-gray-600">Classic tractor cover</p>
              </Link>
              <Link href="/tractor-insurance-cost" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-700">Insurance Costs</h3>
                <p className="text-sm text-gray-600">Price guide and calculator</p>
              </Link>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Tractor Insurance UK</h3>
                <p className="text-green-200 text-sm">
                  Specialist agricultural tractor insurance comparison for UK farmers and contractors.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Insurance Types</h3>
                <ul className="space-y-2 text-sm text-green-200">
                  <li><Link href="/" className="hover:text-white">Agricultural Insurance</Link></li>
                  <li><Link href="/vintage-tractor-insurance" className="hover:text-white">Vintage Tractor Insurance</Link></li>
                  <li><Link href="/tractor-insurance-cost" className="hover:text-white">Insurance Costs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Tractor Brands</h3>
                <ul className="space-y-2 text-sm text-green-200">
                  <li><Link href="/john-deere-tractor-insurance" className="hover:text-white">John Deere</Link></li>
                  <li><Link href="/kubota-tractor-insurance" className="hover:text-white">Kubota</Link></li>
                  <li><Link href="/massey-ferguson-tractor-insurance" className="hover:text-white">Massey Ferguson</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-green-200">
                  <li><Link href="/articles" className="hover:text-white">Farming News</Link></li>
                  <li><Link href="/#faq" className="hover:text-white">FAQs</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-200">
              <p>© 2025 Tractor Insurance UK. Compare agricultural tractor insurance quotes.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
