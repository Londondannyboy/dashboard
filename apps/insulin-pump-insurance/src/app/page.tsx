import { Metadata } from 'next'
import Image from 'next/image'
import { InsulinPumpQuoteForm } from '../components/InsulinPumpQuoteForm'

export const metadata: Metadata = {
  title: 'Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover',
  description: 'Compare insulin pump insurance quotes from UK specialist insurers. Get comprehensive cover for your insulin pump, CGM, and diabetes technology. Protect against loss, theft, and accidental damage from just £6.95/month.',
  keywords: 'insulin pump insurance, insulin pump insurance uk, diabetes pump insurance, cgm insurance, continuous glucose monitor insurance, omnipod insurance, medtronic pump insurance, medtronic insulin pump insurance coverage, tandem tslim insurance, tandem insulin pump insurance coverage, t slim insulin pump insurance coverage, dexcom insurance, freestyle libre insurance, diabetes technology insurance, pump cover uk, insulin pump cover, nhs insulin pump insurance, pump insurance, insurance for insulin pump, are insulin pumps covered by insurance, insulin pump insurance coverage, insurance 4 insulin pumps, insulin pump insurance diabetes uk',
  openGraph: {
    title: 'Insulin Pump Insurance UK 2025 | Diabetes Device Cover',
    description: 'Compare insulin pump insurance quotes from UK specialist insurers. Protect your diabetes technology.',
    type: 'website',
    url: 'https://insulinpumpinsurance.quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insulin Pump Insurance UK 2025 | Diabetes Device Cover',
    description: 'Compare insulin pump insurance quotes from UK specialist insurers.',
  },
  alternates: {
    canonical: 'https://insulinpumpinsurance.quest',
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png"
                  alt="Insulin Pump Insurance UK - Syringe logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Insulin Pump <span className="text-cyan-400">Insurance</span>
                </span>
                <p className="text-xs text-slate-400">UK Diabetes Device Cover</p>
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#calculator" className="text-slate-300 hover:text-white transition-colors">Get Quote</a>
              <a href="#coverage" className="text-slate-300 hover:text-white transition-colors">Coverage</a>
              <a href="#devices" className="text-slate-300 hover:text-white transition-colors">Devices</a>
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
              src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png"
              alt="Insulin pump insurance UK"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Insulin Pump Insurance
            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>insulin pump insurance</strong> quotes from specialist UK insurers. Protect your <strong>diabetes technology</strong> against loss, theft, and accidental damage from just £6.95/month.
          </p>
          <p className="text-sm text-slate-500">
            Cover for <strong>insulin pumps</strong>, <strong>CGM systems</strong>, and accessories. Whether your pump is NHS-funded or self-purchased, comprehensive insurance gives you peace of mind.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="calculator" className="py-8 px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Insulin Pump Insurance Calculator</h2>
          <p className="text-slate-400">Get an instant <strong>insulin pump insurance</strong> estimate - free and no obligation</p>
        </div>
        <InsulinPumpQuoteForm />
      </section>

      {/* Why Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Insulin Pump Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Your <strong>insulin pump</strong> is essential for managing your diabetes. Here's why specialist <strong>insulin pump insurance UK</strong> is important:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/money-bag_1f4b0.png"
                  alt="Insulin pump replacement cost"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Replacement Cost</h3>
              <p className="text-sm text-slate-400">
                Insulin pumps cost £2,000-£6,000 to replace. Even NHS-funded pumps may take time to replace if lost or damaged. <strong>Insulin pump insurance</strong> ensures rapid replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/adhesive-bandage_1fa79.png"
                  alt="Accidental damage cover"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accidental Damage</h3>
              <p className="text-sm text-slate-400">
                Pumps can be dropped, knocked, or damaged accidentally. <strong>Diabetes pump insurance</strong> covers accidental damage that manufacturer warranties don't cover.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/locked_1f512.png"
                  alt="Theft protection insulin pump"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Theft Protection</h3>
              <p className="text-sm text-slate-400">
                Pumps can be stolen from bags, homes, or cars. <strong>Insulin pump cover</strong> protects against theft, ensuring you're not left without your essential diabetes technology.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/droplet_1f4a7.png"
                  alt="Liquid damage insulin pump insurance"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Liquid Damage</h3>
              <p className="text-sm text-slate-400">
                Despite water resistance ratings, pumps can be damaged by water or other liquids. Comprehensive <strong>pump insurance UK</strong> covers liquid damage incidents.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/globe-showing-europe-africa_1f30d.png"
                  alt="Worldwide insulin pump cover"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Worldwide Cover</h3>
              <p className="text-sm text-slate-400">
                Travelling with diabetes? Most <strong>insulin pump insurance</strong> policies include 90 days worldwide cover, protecting your device wherever you go.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Image
                  src="https://em-content.zobj.net/source/apple/391/high-voltage_26a1.png"
                  alt="Fast claims insulin pump"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Claims</h3>
              <p className="text-sm text-slate-400">
                Specialist insurers understand the urgency. Most claims are processed within 24 hours, with 98%+ approval rates. Don't wait weeks for an NHS replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            What Does Insulin Pump Insurance Cover?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive <strong>insulin pump insurance UK</strong> provides extensive protection for your diabetes technology:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">&#x2713;</span> What's Covered
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png" alt="Insulin pump cover" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Insulin pumps</strong> - All major brands including Medtronic, Omnipod, Tandem</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/chart-increasing_1f4c8.png" alt="CGM insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>CGM devices</strong> - Dexcom, FreeStyle Libre, Medtronic Guardian</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/mobile-phone_1f4f1.png" alt="PDM handset insurance" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>PDM/Handsets</strong> - Controllers and personal diabetes managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/adhesive-bandage_1fa79.png" alt="Accidental damage" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Accidental damage</strong> - Drops, knocks, and mishaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/locked_1f512.png" alt="Theft cover" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Theft</strong> - From home, car, or while out</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/mag_1f50d.png" alt="Loss cover" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Loss</strong> - Misplaced or lost devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/droplet_1f4a7.png" alt="Liquid damage" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Liquid damage</strong> - Water and other liquids</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/globe-showing-europe-africa_1f30d.png" alt="Worldwide cover" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Worldwide cover</strong> - Up to 90 days per year</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-red-400">&#x2717;</span> What's Usually Excluded
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/warning_26a0-fe0f.png" alt="Pre-existing damage" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Pre-existing damage</strong> - Damage before policy starts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/wrench_1f527.png" alt="Wear and tear" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Wear and tear</strong> - Normal degradation over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/factory_1f3ed.png" alt="Manufacturer defects" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Manufacturer defects</strong> - Covered by warranty</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/package_1f4e6.png" alt="Consumables" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Consumables</strong> - Insulin, test strips (check policy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Image src="https://em-content.zobj.net/source/apple/391/no-entry_26d4.png" alt="Intentional damage" width={20} height={20} className="w-5 h-5 mt-0.5" />
                  <span className="text-slate-300"><strong>Intentional damage</strong> - Deliberate damage to device</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Devices We Cover
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Insulin pump insurance</strong> covers all major diabetes technology brands and devices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Insulin Pumps */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Insulin Pumps</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Medtronic</strong> - 780G, 670G, 640G
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Omnipod</strong> - Dash, 5
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Tandem</strong> - t:slim X2
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Ypsomed</strong> - mylife YpsoPump
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Roche</strong> - Accu-Chek Combo, Spirit
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Average value: £2,500-£5,000</p>
            </div>

            {/* CGM Systems */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">CGM Systems</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Dexcom</strong> - G6, G7
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Abbott</strong> - FreeStyle Libre 2, Libre 3
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Medtronic</strong> - Guardian 4
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Senseonics</strong> - Eversense
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Average value: £800-£1,500</p>
            </div>

            {/* Accessories */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Accessories & More</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Transmitters</strong> - CGM transmitters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>PDM/Controllers</strong> - Handsets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Readers</strong> - FreeStyle Libre reader
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">&#x2022;</span>
                  <strong>Loan equipment</strong> - Temporary pumps
                </li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">Often included in policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Insulin Pump Insurance Cost 2025
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Insulin pump insurance</strong> is affordable, with specialist policies starting from just £6.95/month:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">£6.95</div>
              <div className="text-white font-medium mb-1">From per month</div>
              <p className="text-xs text-slate-400">Comprehensive pump cover</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30 text-center relative">
              <div className="absolute -top-3 right-4 px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                Most Popular
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">£5,000</div>
              <div className="text-white font-medium mb-1">Coverage limit</div>
              <p className="text-xs text-slate-400">Covers most pump + CGM setups</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">£0</div>
              <div className="text-white font-medium mb-1">Excess option</div>
              <p className="text-xs text-slate-400">Many policies offer zero excess</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Insurance vs Replacement Cost
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-slate-300">Device</th>
                    <th className="text-center py-3 px-4 text-slate-300">Replacement Cost</th>
                    <th className="text-center py-3 px-4 text-slate-300">Annual Insurance</th>
                    <th className="text-center py-3 px-4 text-slate-300">You Save</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-3 px-4 text-white">Medtronic 780G</td>
                    <td className="py-3 px-4 text-center text-red-400">£4,000+</td>
                    <td className="py-3 px-4 text-center text-cyan-400">~£84/year</td>
                    <td className="py-3 px-4 text-center text-green-400">£3,916</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Tandem t:slim X2</td>
                    <td className="py-3 px-4 text-center text-red-400">£4,500+</td>
                    <td className="py-3 px-4 text-center text-cyan-400">~£84/year</td>
                    <td className="py-3 px-4 text-center text-green-400">£4,416</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Omnipod PDM</td>
                    <td className="py-3 px-4 text-center text-red-400">£2,500+</td>
                    <td className="py-3 px-4 text-center text-cyan-400">~£72/year</td>
                    <td className="py-3 px-4 text-center text-green-400">£2,428</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Dexcom G7</td>
                    <td className="py-3 px-4 text-center text-red-400">£1,500+</td>
                    <td className="py-3 px-4 text-center text-cyan-400">~£60/year</td>
                    <td className="py-3 px-4 text-center text-green-400">£1,440</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              *Prices are indicative. Actual costs vary based on coverage level and device.
            </p>
          </div>
        </div>
      </section>

      {/* NHS vs Insurance Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            NHS Pump vs Insurance - Do I Need Both?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Even if your pump is NHS-funded, <strong>insulin pump insurance</strong> provides additional protection:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Faster Replacement</h3>
                  <p className="text-sm text-slate-400">
                    NHS replacements can take weeks due to funding approval and ordering processes. Insurance claims are typically processed within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Loss Coverage</h3>
                  <p className="text-sm text-slate-400">
                    The NHS may not replace lost pumps immediately, and you might face questions about the circumstances. Insurance covers loss without complications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Responsibility Protection</h3>
                  <p className="text-sm text-slate-400">
                    You may be held financially responsible for an NHS pump if lost or damaged through negligence. Insurance protects against this liability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Travel Peace of Mind</h3>
                  <p className="text-sm text-slate-400">
                    NHS support doesn't extend abroad. Worldwide <strong>insulin pump cover</strong> ensures you're protected when travelling internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Insulin Pump Insurance FAQ
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-xl border border-cyan-500/30 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Are insulin pumps covered by insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, <strong>insulin pumps are covered by insurance</strong> through several options in the UK. You can get specialist <strong>pump insurance</strong> from providers like <strong>Insurance 4 Insulin Pumps</strong> (from £6.95/month), add your pump to home contents insurance, or in some cases rely on NHS/ICB replacement. Specialist insurers offer faster claims and better coverage. <a href="/are-insulin-pumps-covered-by-insurance" className="text-cyan-400 hover:underline">Read our complete guide →</a>
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How much does insulin pump insurance cost in the UK?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Insulin pump insurance UK</strong> typically costs between £6-£10 per month for comprehensive cover. This includes protection against accidental damage, theft, loss, and liquid damage. Many specialist insurers offer policies from £6.95/month with zero excess and worldwide cover up to 90 days.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Do I need insulin pump insurance if my pump is on the NHS?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                While the NHS provides your pump, <strong>insulin pump insurance</strong> is still recommended. NHS replacement can take weeks, and you may be held responsible for lost or damaged devices. Insurance provides faster replacement (typically 24 hours), loss coverage, and worldwide protection that NHS support doesn't offer.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What devices can I insure?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                <strong>Diabetes device insurance</strong> covers most diabetes technology including insulin pumps (Medtronic, Omnipod, Tandem, Ypsomed), CGM systems (Dexcom, FreeStyle Libre, Medtronic Guardian), PDM handsets, controllers, transmitters, and often loan equipment. Check your policy for specific device coverage.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                How quickly are claims processed?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Specialist <strong>insulin pump insurance</strong> providers understand the medical urgency. Most claims are assessed within one working day, with replacements ordered within 24 hours of claim approval. Claims approval rates are typically 98%+, ensuring you're not left without your essential diabetes technology.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Can I add my pump to home insurance instead?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                You can add your insulin pump as a "specified item" to home contents insurance. However, specialist <strong>insulin pump insurance</strong> often provides better value with: faster claims processing, no impact on your home insurance no-claims bonus, worldwide cover, and specialist understanding of diabetes technology. Home insurance claims may take longer and affect future premiums.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Is there an age limit for insulin pump insurance?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Most <strong>insulin pump insurance</strong> providers cover people of all ages, including children. There's typically no upper age limit. The policy covers the device rather than the person, so age doesn't affect eligibility or pricing. Both adults and children with Type 1 diabetes can get comprehensive cover.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                Does insulin pump insurance cover worldwide travel?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Yes, most <strong>insulin pump insurance</strong> policies include automatic worldwide cover for up to 90 days per year. This means your pump, CGM, and accessories are protected wherever you travel. This is particularly important as NHS support and manufacturer warranties may not apply abroad.
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer text-white font-medium flex items-center justify-between">
                What excess do I pay on a claim?
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-slate-400">
                Many specialist <strong>insulin pump insurance</strong> providers offer zero excess policies, meaning you pay nothing towards a claim. Some policies offer options to add an excess (£25, £50, or £100) in exchange for a lower monthly premium. Check the policy details before purchasing.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="https://em-content.zobj.net/source/apple/391/syringe_1f489.png"
            alt="Get insulin pump insurance quote"
            width={80}
            height={80}
            className="w-20 h-20 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Protect Your Insulin Pump Today
          </h2>
          <p className="text-slate-300 mb-8">
            Compare <strong>insulin pump insurance</strong> quotes from specialist UK insurers. Get comprehensive cover for your diabetes technology from just £6.95/month.
          </p>
          <a
            href="#calculator"
            className="inline-block px-8 py-4 rounded-xl font-semibold bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
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
              <h4 className="text-white font-semibold mb-3">Insulin Pump Insurance UK</h4>
              <p className="text-sm text-slate-400">
                Compare <strong>insulin pump insurance</strong> and <strong>diabetes device cover</strong> quotes from specialist UK insurers. Protect your essential diabetes technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="#calculator" className="hover:text-cyan-400">Get Quote</a></li>
                <li><a href="#coverage" className="hover:text-cyan-400">Coverage</a></li>
                <li><a href="#devices" className="hover:text-cyan-400">Devices</a></li>
                <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
                <li><a href="/are-insulin-pumps-covered-by-insurance" className="hover:text-cyan-400">Insurance Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Devices Covered</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>Medtronic Pumps</li>
                <li>Omnipod Systems</li>
                <li>Tandem t:slim</li>
                <li>Dexcom CGM</li>
                <li>FreeStyle Libre</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                <li><a href="https://breakthrought1d.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Breakthrough T1D</a></li>
                <li><a href="https://www.diabetes.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Diabetes UK</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700/50 text-center">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Insulin Pump Insurance UK. Compare <strong>insulin pump insurance</strong> quotes from UK specialist insurers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
