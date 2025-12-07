import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Massey Ferguson Tractor Insurance UK | MF Agricultural Insurance',
  description: 'Specialist Massey Ferguson tractor insurance for UK farmers. Get quotes for all MF models from compact to high-horsepower tractors. Compare Massey Ferguson insurance prices today.',
  keywords: 'massey ferguson tractor insurance, massey ferguson insurance, mf tractor insurance, massey ferguson agricultural insurance, massey ferguson farm insurance, massey ferguson uk insurance',
  openGraph: {
    title: 'Massey Ferguson Tractor Insurance UK | MF Agricultural Insurance',
    description: 'Specialist Massey Ferguson tractor insurance for UK farmers. Compare quotes for all models.',
    type: 'website',
    locale: 'en_GB',
  },
}

const masseyFergusonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Massey Ferguson Tractor Insurance UK',
  description: 'Specialist insurance for Massey Ferguson tractors in the United Kingdom',
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

export default function MasseyFergusonTractorInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(masseyFergusonJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
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
        <section className="bg-red-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Massey Ferguson Tractor Insurance UK
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Specialist <strong>Massey Ferguson tractor insurance</strong> for UK farmers and agricultural businesses.
              Get comprehensive cover for your MF machinery from leading UK insurers.
            </p>
            <Link
              href="/#quote-form"
              className="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors"
            >
              Get Your MF Quote
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-12">

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Insuring Your Massey Ferguson Tractor
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                <strong>Massey Ferguson</strong> has been a cornerstone of British farming since 1958, with roots
                going back to Harry Ferguson's revolutionary three-point hitch system. As one of the most popular
                tractor brands in the UK, MF tractors are trusted by farmers nationwide. Our specialist
                <strong> Massey Ferguson tractor insurance</strong> provides comprehensive cover tailored to
                these reliable workhorses of British agriculture.
              </p>
              <p className="text-gray-700 mb-4">
                From the compact MF 1500 Series for smallholdings to the powerful MF 8S Series for large arable
                farms, we can help you find the right insurance at competitive prices. Massey Ferguson's
                reputation for value, reliability, and after-sales support makes them a popular choice - and
                your insurance should reflect the quality protection your MF deserves.
              </p>
            </div>
          </section>

          {/* Massey Ferguson Model Series */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Massey Ferguson Tractor Series We Insure
            </h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 1500 Series Compact</h3>
                <p className="text-gray-600 mb-3">
                  Compact tractors perfect for smallholdings, equestrian centres and groundscare work.
                  Affordable to buy and economical to insure.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 1520, 1525, 1531, 1540 (21-40hp)</li>
                  <li>• Hydrostatic and mechanical transmission options</li>
                  <li>• Typical value: £12,000 - £28,000</li>
                  <li>• Common use: Smallholdings, equestrian, estates</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 3 Series Compact</h3>
                <p className="text-gray-600 mb-3">
                  Versatile compact tractors ideal for livestock farms, dairy operations
                  and general agricultural work.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 3640, 3650, 3660, 3670 (36-75hp)</li>
                  <li>• Dyna-2 powershift transmission</li>
                  <li>• Typical value: £25,000 - £45,000</li>
                  <li>• Common use: Livestock, dairy, mixed farming</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 4700 Series Utility</h3>
                <p className="text-gray-600 mb-3">
                  The affordable utility range offering excellent value for money with
                  proven reliability for everyday farm tasks.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 4707, 4708, 4709 (72-92hp)</li>
                  <li>• Simple, robust mechanical design</li>
                  <li>• Typical value: £35,000 - £55,000</li>
                  <li>• Common use: General farm work, loading</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 5S & 5M Series</h3>
                <p className="text-gray-600 mb-3">
                  Mid-range tractors combining power with versatility - the backbone of
                  many UK farming operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 5S.105, 5S.115, 5S.125, 5S.135, 5S.145 (105-145hp)</li>
                  <li>• Dyna-4 and Dyna-6 transmissions</li>
                  <li>• Typical value: £60,000 - £95,000</li>
                  <li>• Common use: Mixed farming, contracting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 6S & 7S Series</h3>
                <p className="text-gray-600 mb-3">
                  Premium mid-to-high horsepower tractors with advanced technology
                  for demanding agricultural work.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 6S.155, 6S.180 (145-180hp)</li>
                  <li>• MF 7S.155, 7S.180, 7S.210 (155-210hp)</li>
                  <li>• Typical value: £100,000 - £180,000</li>
                  <li>• Common use: Arable, heavy cultivation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">MF 8S Series Flagship</h3>
                <p className="text-gray-600 mb-3">
                  The flagship range delivering high horsepower with class-leading
                  fuel efficiency and operator comfort.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 8S.205, 8S.225, 8S.245, 8S.265, 8S.305 (205-305hp)</li>
                  <li>• Dyna-VT CVT transmission</li>
                  <li>• Typical value: £180,000 - £280,000</li>
                  <li>• Common use: Large arable farms, contractors</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">Vintage & Classic MF</h3>
                <p className="text-gray-600 mb-3">
                  Classic Massey Ferguson models remain popular for working and collecting.
                  We offer specialist vintage cover.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ferguson TE20 "Grey Fergie"</li>
                  <li>• MF 35, 135, 165, 175, 185</li>
                  <li>• MF 390, 399, 3000 Series classics</li>
                  <li>• Value varies by condition and rarity</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-700 mb-3">Specialist MF Tractors</h3>
                <p className="text-gray-600 mb-3">
                  From narrow vineyard tractors to high-clearance models, we cover
                  all specialist MF variants.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• MF 3GE narrow/orchard variants</li>
                  <li>• MF 5S narrow cab versions</li>
                  <li>• High-clearance crop sprayer variants</li>
                  <li>• Common use: Orchards, vineyards, vegetables</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Massey Ferguson Insurance */}
          <section className="mb-12 bg-red-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Why Specialist Massey Ferguson Insurance?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-3">UK's Most Popular Brand</h3>
                <p className="text-gray-700">
                  Massey Ferguson remains one of the best-selling tractor brands in the UK with an
                  extensive dealer network. Our insurers understand MF values and specifications,
                  ensuring your tractor is properly valued and covered.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-3">Excellent Residual Values</h3>
                <p className="text-gray-700">
                  MF tractors hold their value well in the UK market. Our agreed value policies
                  ensure you receive fair compensation in the event of a total loss, based on
                  current market values rather than depreciated book values.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-3">Modern Technology Cover</h3>
                <p className="text-gray-700">
                  New MF tractors feature sophisticated technology including Datatronic displays,
                  MF Guide auto-steering, and TaskDoc data management. Ensure these systems are
                  properly covered under your policy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-3">Strong Dealer Support</h3>
                <p className="text-gray-700">
                  AGCO's UK dealer network provides excellent parts and service support. In the
                  event of a claim, our insurers work with approved repairers familiar with MF
                  machinery to get you back working quickly.
                </p>
              </div>
            </div>
          </section>

          {/* Insurance Cost Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Massey Ferguson Tractor Insurance Costs
            </h2>
            <p className="text-gray-700 mb-6">
              Insurance costs for Massey Ferguson tractors vary based on model, value, usage and your claims history.
              Here's a general guide to what you might expect to pay:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-red-700 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">MF Model Series</th>
                    <th className="px-6 py-3 text-left">Typical Value</th>
                    <th className="px-6 py-3 text-left">Comprehensive Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 1500 Compact</td>
                    <td className="px-6 py-4">£12,000 - £28,000</td>
                    <td className="px-6 py-4">£150 - £300/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 3 Series</td>
                    <td className="px-6 py-4">£25,000 - £45,000</td>
                    <td className="px-6 py-4">£250 - £450/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 4700 Series</td>
                    <td className="px-6 py-4">£35,000 - £55,000</td>
                    <td className="px-6 py-4">£350 - £550/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 5S Series</td>
                    <td className="px-6 py-4">£60,000 - £95,000</td>
                    <td className="px-6 py-4">£500 - £850/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 6S/7S Series</td>
                    <td className="px-6 py-4">£100,000 - £180,000</td>
                    <td className="px-6 py-4">£800 - £1,400/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">MF 8S Series</td>
                    <td className="px-6 py-4">£180,000 - £280,000</td>
                    <td className="px-6 py-4">£1,400 - £2,200/year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Vintage MF (TE20, 135, etc.)</td>
                    <td className="px-6 py-4">£2,000 - £15,000</td>
                    <td className="px-6 py-4">£80 - £200/year</td>
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
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Massey Ferguson Insurance Cover Options
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">Comprehensive Cover</h3>
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
                <h3 className="text-xl font-bold text-red-700 mb-3">Optional Extras</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ GPS & guidance technology</li>
                  <li>✓ Attached implements cover</li>
                  <li>✓ Breakdown & recovery</li>
                  <li>✓ Hire-in costs cover</li>
                  <li>✓ Operator personal accident</li>
                  <li>✓ Public & employers liability</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">Specialist Add-ons</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ MF Guide auto-steer cover</li>
                  <li>✓ Datatronic display protection</li>
                  <li>✓ TaskDoc system cover</li>
                  <li>✓ Loader & attachments</li>
                  <li>✓ Front linkage & PTO</li>
                  <li>✓ Contract hire protection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Classic Grey Ferguson Section */}
          <section className="mb-12 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Classic Ferguson & Vintage MF Insurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  The Ferguson TE20 "Grey Fergie" revolutionised British farming and remains hugely
                  popular with collectors and working enthusiasts. We offer specialist vintage
                  insurance for all classic Ferguson and early Massey Ferguson tractors.
                </p>
                <h3 className="text-xl font-semibold text-red-700 mb-3">Popular Classic Models:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ferguson TE20, TEA20, TED20 (1946-1956)</li>
                  <li>• Ferguson FE35 "Gold Belly" (1956-1958)</li>
                  <li>• Massey Ferguson 35 & 35X (1958-1964)</li>
                  <li>• MF 65, 135, 165, 175, 185 (1960s-1980s)</li>
                  <li>• MF 390, 398, 399 (1980s-1990s)</li>
                  <li>• MF 3000 & 3100 Series classics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-3">Vintage Cover Features:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Agreed value based on current market</li>
                  <li>✓ Cover for shows and rallies</li>
                  <li>✓ Limited road use included</li>
                  <li>✓ Restoration project cover available</li>
                  <li>✓ Spare parts and memorabilia cover</li>
                  <li>✓ Multi-tractor discounts</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  See our dedicated <Link href="/vintage-tractor-insurance" className="text-red-600 hover:underline">
                  vintage tractor insurance</Link> page for more information on classic cover.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              Massey Ferguson Insurance FAQs
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-red-700 cursor-pointer">
                  Is Massey Ferguson tractor insurance expensive?
                </summary>
                <p className="mt-4 text-gray-600">
                  Massey Ferguson tractors are generally competitively priced to insure. MF's reputation
                  for reliability and the widespread dealer network mean good parts availability and
                  reasonable repair costs. As with all tractors, premiums depend on value, use, and
                  claims history rather than brand alone.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-red-700 cursor-pointer">
                  Can I insure multiple Massey Ferguson tractors on one policy?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, most agricultural insurers offer fleet policies covering multiple tractors and
                  farm machinery. This often provides better value than insuring each machine separately.
                  You can mix different MF models and other brands on the same policy.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-red-700 cursor-pointer">
                  Does insurance cover MF Guide and precision farming equipment?
                </summary>
                <p className="mt-4 text-gray-600">
                  Factory-fitted guidance systems are usually covered under standard policies, but
                  aftermarket additions like MF Guide auto-steering, external GPS receivers, and
                  precision farming displays should be declared separately. These can add significant
                  value to your tractor.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-red-700 cursor-pointer">
                  What about cover for my MF on HP or finance?
                </summary>
                <p className="mt-4 text-gray-600">
                  We can arrange insurance for Massey Ferguson tractors on hire purchase or finance
                  agreements. Your finance company will need to be noted as an interested party. Most
                  finance agreements require comprehensive cover, which we can provide with agreed values.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-red-700 cursor-pointer">
                  Do you cover old MF tractors still in use?
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely. Many classic Massey Ferguson tractors like the 135, 165, and 390 series
                  are still working hard on UK farms. We can provide either agricultural working cover
                  or specialist <Link href="/vintage-tractor-insurance" className="text-red-600 hover:underline">
                  vintage tractor insurance</Link> depending on how you use your machine.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-red-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Massey Ferguson Insurance Quote</h2>
            <p className="text-xl mb-6">
              Compare specialist <strong>Massey Ferguson tractor insurance</strong> quotes from leading UK agricultural insurers
            </p>
            <Link
              href="/#quote-form"
              className="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 transition-colors"
            >
              Get Your Free Quote
            </Link>
          </section>

          {/* Related Pages */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-red-800 mb-6">Related Insurance Pages</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/john-deere-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">John Deere Insurance</h3>
                <p className="text-sm text-gray-600">Specialist JD tractor cover</p>
              </Link>
              <Link href="/kubota-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Kubota Insurance</h3>
                <p className="text-sm text-gray-600">Kubota tractor insurance quotes</p>
              </Link>
              <Link href="/vintage-tractor-insurance" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Vintage Insurance</h3>
                <p className="text-sm text-gray-600">Classic tractor cover</p>
              </Link>
              <Link href="/tractor-insurance-cost" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-red-700">Insurance Costs</h3>
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
