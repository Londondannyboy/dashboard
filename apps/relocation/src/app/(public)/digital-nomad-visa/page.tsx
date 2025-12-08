import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Digital Nomad Visa Guide 2025 | Best Countries for Remote Workers',
  description: 'Complete guide to digital nomad visas worldwide. Compare requirements, costs, and benefits for Spain, Portugal, Germany, Thailand, and 40+ countries offering remote work visas.',
  keywords: [
    'digital nomad visa',
    'digital nomad visa spain',
    'portugal digital nomad visa',
    'digital nomad visa germany',
    'remote work visa',
    'best digital nomad visa 2025',
    'work remotely abroad',
    'digital nomad visa requirements',
  ],
  alternates: {
    canonical: 'https://relocation.quest/digital-nomad-visa',
  },
  openGraph: {
    title: 'Digital Nomad Visa Guide 2025 - Best Countries for Remote Workers',
    description: 'Compare digital nomad visas from 40+ countries. Requirements, costs, duration, and tax implications.',
    type: 'website',
    url: 'https://relocation.quest/digital-nomad-visa',
  },
}

interface NomadGuide {
  id: number
  slug: string
  title: string
  excerpt: string | null
  hero_asset_url: string | null
  country: string | null
}

const COUNTRY_FLAGS: Record<string, string> = {
  'spain': '🇪🇸', 'portugal': '🇵🇹', 'germany': '🇩🇪', 'france': '🇫🇷',
  'italy': '🇮🇹', 'greece': '🇬🇷', 'croatia': '🇭🇷', 'malta': '🇲🇹',
  'netherlands': '🇳🇱', 'czech': '🇨🇿', 'estonia': '🇪🇪', 'hungary': '🇭🇺',
  'thailand': '🇹🇭', 'indonesia': '🇮🇩', 'malaysia': '🇲🇾', 'japan': '🇯🇵',
  'costa rica': '🇨🇷', 'mexico': '🇲🇽', 'colombia': '🇨🇴', 'brazil': '🇧🇷',
  'cyprus': '🇨🇾', 'slovenia': '🇸🇮', 'switzerland': '🇨🇭', 'norway': '🇳🇴',
  'latvia': '🇱🇻',
}

function getFlagFromSlug(slug: string): string {
  for (const [country, flag] of Object.entries(COUNTRY_FLAGS)) {
    if (slug.toLowerCase().includes(country)) return flag
  }
  return '🌍'
}

async function getNomadGuides(): Promise<NomadGuide[]> {
  if (!process.env.DATABASE_URL) return []

  try {
    const sql = neon(process.env.DATABASE_URL)
    const results = await sql`
      SELECT id, slug, title, excerpt, hero_asset_url, country
      FROM articles
      WHERE (guide_type = 'country_nomad' OR slug LIKE '%digital-nomad%' OR slug LIKE '%nomad-visa%')
      AND status = 'published'
      AND app = 'relocation'
      ORDER BY title ASC
    `
    return results as NomadGuide[]
  } catch (error) {
    console.error('Failed to fetch nomad guides:', error)
    return []
  }
}

// Popular digital nomad visa destinations with key info
const POPULAR_VISAS = [
  {
    country: 'Spain',
    flag: '🇪🇸',
    duration: '1 year (renewable)',
    income: '€2,334/month',
    tax: '24% flat rate',
    highlight: 'EU access, great weather',
    slug: 'digital-nomad-visa-spain',
  },
  {
    country: 'Portugal',
    flag: '🇵🇹',
    duration: '1 year (renewable)',
    income: '€3,040/month',
    tax: 'NHR scheme available',
    highlight: 'Path to EU residency',
    slug: 'portugal-digital-nomad-visa',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    duration: '6 months - 3 years',
    income: 'Proof of contracts',
    tax: 'Progressive rates',
    highlight: 'Strong economy, central location',
    slug: 'digital-nomad-visa-germany',
  },
  {
    country: 'Thailand',
    flag: '🇹🇭',
    duration: '5 years (DTV)',
    income: '$500k assets OR $80k income',
    tax: 'Territorial taxation',
    highlight: 'Low cost, great food',
    slug: 'digital-nomad-visa-thailand',
  },
  {
    country: 'Greece',
    flag: '🇬🇷',
    duration: '1 year (renewable)',
    income: '€3,500/month',
    tax: '7% flat for 7 years',
    highlight: 'Islands, history, EU access',
    slug: 'greece-relocation-guide-nomad',
  },
  {
    country: 'Croatia',
    flag: '🇭🇷',
    duration: '1 year',
    income: '€2,539/month',
    tax: 'No local income tax',
    highlight: 'Adriatic coast, EU member',
    slug: 'croatia-digital-nomad-visa',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is a digital nomad visa?',
    answer: 'A digital nomad visa is a special type of visa that allows remote workers to live and work legally in a foreign country while employed by companies outside that country. Unlike tourist visas, digital nomad visas typically allow longer stays (1-2 years), the legal right to work remotely, and often provide a path to tax residency.',
  },
  {
    question: 'What are the typical requirements for a digital nomad visa?',
    answer: 'Most digital nomad visas require: proof of remote employment or freelance income (typically €2,000-4,000/month), health insurance valid in the destination country, a clean criminal background, and proof of accommodation. Some countries also require proof of savings or a minimum contract duration with your employer.',
  },
  {
    question: 'Which country has the easiest digital nomad visa to get?',
    answer: 'Portugal, Croatia, and Estonia are often considered the easiest countries for digital nomad visas due to their straightforward application processes and reasonable income requirements. Portugal is popular for its NHR tax regime, while Estonia offers a fully digital application through their e-Residency program.',
  },
  {
    question: 'Do I have to pay taxes on a digital nomad visa?',
    answer: 'Tax obligations vary by country. Some countries like Croatia offer tax exemptions for digital nomads, while others like Spain have flat tax rates (24%). Portugal offers the NHR (Non-Habitual Resident) regime with favorable rates. Always consult a tax professional as you may still have obligations in your home country.',
  },
  {
    question: 'Can I bring my family on a digital nomad visa?',
    answer: 'Most countries allow digital nomads to bring dependents (spouse and children) on their visa. Family members are typically included in the main application, though you may need to show additional income to support them. Countries like Spain and Portugal have family-friendly policies.',
  },
  {
    question: 'What is the best digital nomad visa for Americans?',
    answer: 'Popular choices for Americans include Portugal (path to EU residency, English-friendly), Spain (great lifestyle, EU access), Thailand (low cost, easy timezone overlap with US West Coast), and Mexico (proximity, no visa needed for short stays). The best choice depends on your priorities: cost, timezone, language, or potential permanent residency.',
  },
]

export default async function DigitalNomadVisaPage() {
  const nomadGuides = await getNomadGuides()

  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-amber-500 to-orange-600"
        navItems={[
          { href: '/guides', label: 'Guides' },
          { href: '/articles', label: 'Articles' },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              Digital Nomad Visas
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Work Remotely from{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Anywhere in the World
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Compare digital nomad visas from 40+ countries. Find the perfect destination based on
              income requirements, tax benefits, duration, and lifestyle factors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-indigo-500/25"
              >
                Find Your Ideal Visa
              </Link>
              <Link
                href="#compare"
                className="inline-flex items-center gap-2 border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition"
              >
                Compare Countries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-indigo-600">40+</div>
              <div className="text-gray-600 text-sm">Countries with DN Visas</div>
            </div>
            <div>
              <div className="text-4xl font-black text-indigo-600">€2-4k</div>
              <div className="text-gray-600 text-sm">Typical Income Required</div>
            </div>
            <div>
              <div className="text-4xl font-black text-indigo-600">1-5</div>
              <div className="text-gray-600 text-sm">Years Visa Duration</div>
            </div>
            <div>
              <div className="text-4xl font-black text-indigo-600">0-24%</div>
              <div className="text-gray-600 text-sm">Tax Rates Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Visas Comparison */}
      <section id="compare" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Most Popular Digital Nomad Visas in 2025
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Quick comparison of the most sought-after digital nomad visa programs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_VISAS.map((visa) => (
              <div
                key={visa.country}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{visa.flag}</span>
                  <h3 className="text-xl font-bold text-gray-900">{visa.country}</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium text-gray-900">{visa.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min. Income</span>
                    <span className="font-medium text-gray-900">{visa.income}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tax Rate</span>
                    <span className="font-medium text-gray-900">{visa.tax}</span>
                  </div>
                </div>
                <p className="text-sm text-indigo-600 font-medium mb-4">{visa.highlight}</p>
                <Link
                  href={`/articles/${visa.slug}`}
                  className="block text-center py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium hover:bg-indigo-100 transition"
                >
                  View Full Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Guides from DB */}
      {nomadGuides.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Digital Nomad Guides by Country
            </h2>
            <p className="text-gray-600 mb-8">
              In-depth guides covering visa applications, cost of living, and nomad communities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nomadGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/articles/${guide.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-video bg-gray-100">
                    {guide.hero_asset_url ? (
                      <Image
                        src={guide.hero_asset_url}
                        alt={guide.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
                        <span className="text-5xl">{getFlagFromSlug(guide.slug)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <div className="mt-2 text-indigo-600 text-sm font-medium">
                      Read guide →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How to Choose */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How to Choose Your Digital Nomad Visa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💰',
                title: 'Income Requirements',
                desc: 'Most visas require €2,000-4,000/month. Some accept savings as alternative proof.',
              },
              {
                icon: '📍',
                title: 'Location & Timezone',
                desc: 'Consider proximity to clients, flight connections, and timezone overlap for meetings.',
              },
              {
                icon: '🏛️',
                title: 'Tax Implications',
                desc: 'Some countries offer tax-free status, others have flat rates. Plan accordingly.',
              },
              {
                icon: '🛤️',
                title: 'Path to Residency',
                desc: 'If long-term stay matters, check if the visa can lead to permanent residency.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white border border-gray-200 rounded-2xl">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Digital Nomad Visa FAQ
          </h2>
          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50">
                  <span className="font-medium text-gray-900 pr-4" itemProp="name">
                    {item.question}
                  </span>
                  <span className="text-indigo-500 group-open:rotate-180 transition-transform flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <div
                  className="px-5 pb-5 text-gray-700"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{item.answer}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Visa is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help you find the perfect digital nomad visa based on your income,
            preferences, and long-term goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Chat with AI Assistant
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        links={[
          { href: '/guides', label: 'Country Guides' },
          { href: '/digital-nomad-visa', label: 'Digital Nomad Visas' },
          { href: '/calculator', label: 'Calculator' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
