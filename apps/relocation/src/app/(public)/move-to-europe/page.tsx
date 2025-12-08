import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Move to Europe from the US | Complete Guide for Americans 2025',
  description: 'How to move to Europe from the US. Easiest countries, visa options, cost of living, and step-by-step guide for Americans relocating to Europe in 2025.',
  keywords: [
    'move to europe from us',
    'move to europe',
    'how to move to europe as an american',
    'easiest country to move to in europe',
    'best place to move in europe',
    'relocate to europe',
    'american expat in europe',
    'retire in europe from us',
  ],
  alternates: {
    canonical: 'https://relocation.quest/move-to-europe',
  },
  openGraph: {
    title: 'Move to Europe from the US - Complete Guide for Americans 2025',
    description: 'Everything Americans need to know about moving to Europe. Visa options, easiest countries, costs, and more.',
    type: 'website',
    url: 'https://relocation.quest/move-to-europe',
  },
}

interface EuropeGuide {
  id: number
  slug: string
  title: string
  excerpt: string | null
  hero_asset_url: string | null
  country: string | null
  country_code: string | null
}

const COUNTRY_FLAGS: Record<string, string> = {
  'GB': '🇬🇧', 'DE': '🇩🇪', 'ES': '🇪🇸', 'PT': '🇵🇹', 'FR': '🇫🇷',
  'IT': '🇮🇹', 'NL': '🇳🇱', 'GR': '🇬🇷', 'CY': '🇨🇾', 'MT': '🇲🇹',
  'SI': '🇸🇮', 'CH': '🇨🇭', 'HR': '🇭🇷', 'CZ': '🇨🇿', 'PL': '🇵🇱',
  'IE': '🇮🇪', 'AT': '🇦🇹', 'BE': '🇧🇪', 'SE': '🇸🇪', 'NO': '🇳🇴',
}

const EUROPE_COUNTRIES = ['GB', 'DE', 'ES', 'PT', 'FR', 'IT', 'NL', 'GR', 'CY', 'MT', 'SI', 'CH']

async function getEuropeGuides(): Promise<EuropeGuide[]> {
  if (!process.env.DATABASE_URL) return []

  try {
    const sql = neon(process.env.DATABASE_URL)
    const results = await sql`
      SELECT id, slug, title, excerpt, hero_asset_url, country, country_code
      FROM articles
      WHERE (guide_type IN ('country', 'country_comprehensive')
             OR slug LIKE '%uk%' OR slug LIKE '%germany%' OR slug LIKE '%spain%'
             OR slug LIKE '%portugal%' OR slug LIKE '%france%' OR slug LIKE '%italy%'
             OR slug LIKE '%netherlands%' OR slug LIKE '%greece%' OR slug LIKE '%cyprus%')
      AND status = 'published'
      AND app = 'relocation'
      AND (country_code IN ('GB', 'DE', 'ES', 'PT', 'FR', 'IT', 'NL', 'GR', 'CY', 'MT', 'SI', 'CH')
           OR slug LIKE '%europe%' OR slug LIKE '%uk%' OR slug LIKE '%germany%')
      ORDER BY title ASC
      LIMIT 12
    `
    return results as EuropeGuide[]
  } catch (error) {
    console.error('Failed to fetch Europe guides:', error)
    return []
  }
}

// Easiest countries to move to as an American
const EASIEST_COUNTRIES = [
  {
    country: 'Portugal',
    flag: '🇵🇹',
    difficulty: 'Easy',
    visaOptions: ['D7 Passive Income', 'Digital Nomad', 'Golden Visa'],
    minIncome: '€760/month',
    highlight: 'Most American-friendly, English widely spoken, path to EU citizenship',
    slug: 'moving-to-portugal',
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    difficulty: 'Easy',
    visaOptions: ['Non-Lucrative', 'Digital Nomad', 'Golden Visa'],
    minIncome: '€2,400/month',
    highlight: 'Great weather, affordable, large expat community',
    slug: 'moving-to-spain',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    difficulty: 'Medium',
    visaOptions: ['Job Seeker', 'Freelance', 'EU Blue Card'],
    minIncome: 'Employment contract',
    highlight: 'Strong job market, central location, no tuition fees',
    slug: 'moving-to-germany',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    difficulty: 'Medium',
    visaOptions: ['DAFT Treaty', 'Highly Skilled Migrant', 'Startup'],
    minIncome: '€4,500 (DAFT)',
    highlight: 'Special treaty for Americans (DAFT), very English-friendly',
    slug: 'netherlands-relocation-guide',
  },
  {
    country: 'Italy',
    flag: '🇮🇹',
    difficulty: 'Medium',
    visaOptions: ['Elective Residence', 'Digital Nomad', 'Self-Employment'],
    minIncome: '€31,000/year',
    highlight: 'Rich culture, affordable south, excellent food',
    slug: 'italy-relocation-guide',
  },
  {
    country: 'Greece',
    flag: '🇬🇷',
    difficulty: 'Easy',
    visaOptions: ['Digital Nomad', 'Financial Independence', 'Golden Visa'],
    minIncome: '€3,500/month',
    highlight: 'Islands, low cost, 7% flat tax option',
    slug: 'greece-relocation-guide',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Can Americans move to Europe permanently?',
    answer: 'Yes, Americans can move to Europe permanently through various visa pathways. Most EU countries offer long-term residence permits after 5 years of legal residency, which can lead to permanent residency or citizenship. Popular routes include work visas, digital nomad visas, retirement visas, and investment-based visas like Golden Visas.',
  },
  {
    question: 'What is the easiest European country for Americans to move to?',
    answer: 'Portugal and the Netherlands are often considered the easiest. Portugal has flexible D7 and digital nomad visas with low income requirements. The Netherlands offers the DAFT (Dutch American Friendship Treaty) visa, specifically for American entrepreneurs, requiring only €4,500 to start a business. Spain and Greece also have accessible digital nomad visa programs.',
  },
  {
    question: 'How much money do you need to move to Europe from the US?',
    answer: 'Costs vary significantly by country. Budget €5,000-15,000 for initial setup (flights, deposits, first months rent, visa fees). Monthly costs range from €1,500-2,000 in Portugal/Spain/Greece to €3,000-4,000 in Germany/Netherlands. Most visas require proof of income between €1,000-4,000/month depending on the country.',
  },
  {
    question: 'Can I move to Europe without a job?',
    answer: 'Yes, several visa categories dont require employment: passive income visas (D7 in Portugal), digital nomad visas (work for non-EU employer), retirement visas (proof of pension/savings), Golden Visas (investment), and some freelance visas. You will need to prove sufficient income or savings to support yourself.',
  },
  {
    question: 'Do I need to speak the local language to move to Europe?',
    answer: 'Not initially for most countries, especially in tourist areas and major cities. However, learning the language significantly improves your experience and is often required for permanent residency or citizenship. The Netherlands, Germany, and Scandinavian countries have high English proficiency. Portugal, Spain, and France have larger expat communities where English is common.',
  },
  {
    question: 'What about healthcare in Europe as an American?',
    answer: 'Most European countries have excellent public healthcare systems. As a resident visa holder, you typically gain access to the public system (sometimes after a waiting period). Private health insurance is usually required for visa applications and costs €100-300/month. Many Americans find European healthcare more affordable and accessible than the US system.',
  },
]

export default async function MoveToEuropePage() {
  const europeGuides = await getEuropeGuides()

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Guide for Americans
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              How to Move to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Europe from the US
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything Americans need to know about relocating to Europe. Discover the easiest countries,
              visa options, cost of living, and step-by-step guidance for your European adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-blue-500/25"
              >
                Get Personalized Advice
              </Link>
              <Link
                href="#easiest"
                className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition"
              >
                Easiest Countries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Europe */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Americans Are Moving to Europe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'Better Healthcare', desc: 'Universal healthcare at a fraction of US costs' },
              { icon: '⚖️', title: 'Work-Life Balance', desc: 'More vacation days, shorter work weeks, better quality of life' },
              { icon: '💰', title: 'Lower Cost of Living', desc: 'Many European cities cost less than major US metros' },
              { icon: '🌍', title: 'Travel & Culture', desc: 'Easy access to dozens of countries and rich history' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-2xl text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easiest Countries */}
      <section id="easiest" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Easiest European Countries for Americans to Move To
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ranked by visa accessibility, English friendliness, and expat community support.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EASIEST_COUNTRIES.map((country, idx) => (
              <div
                key={country.country}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{country.country}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        country.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {country.difficulty}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-300">#{idx + 1}</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Visa Options</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {country.visaOptions.map((visa) => (
                        <span key={visa} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {visa}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Min. Income</span>
                    <span className="font-medium text-gray-900">{country.minIncome}</span>
                  </div>
                </div>

                <p className="text-sm text-blue-600 font-medium mb-4">{country.highlight}</p>

                <Link
                  href={`/articles/${country.slug}`}
                  className="block text-center py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition"
                >
                  View Full Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Guides from DB */}
      {europeGuides.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  European Country Guides
                </h2>
                <p className="text-gray-600">
                  Detailed guides for each European destination.
                </p>
              </div>
              <Link href="/guides" className="text-blue-600 hover:text-blue-500 font-medium text-sm hidden md:block">
                View all guides →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {europeGuides.map((guide) => {
                const flag = guide.country_code ? COUNTRY_FLAGS[guide.country_code] : '🇪🇺'
                return (
                  <Link
                    key={guide.id}
                    href={guide.slug.includes('moving-to') ? `/guides/${guide.slug}` : `/articles/${guide.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
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
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
                          <span className="text-5xl">{flag}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="text-2xl">{flag}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <div className="mt-2 text-blue-600 text-sm font-medium">
                        Read guide →
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Step by Step */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Move to Europe: Step by Step
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Research Your Destination', desc: 'Compare countries based on visa options, cost of living, language, job market, and lifestyle. Consider visiting first.' },
              { step: 2, title: 'Check Visa Requirements', desc: 'Americans can stay 90 days visa-free in Schengen. For longer stays, apply for the appropriate visa (work, digital nomad, retirement, etc.).' },
              { step: 3, title: 'Gather Documents', desc: 'Typically: passport, proof of income/savings, health insurance, background check, and accommodation proof. Requirements vary by country.' },
              { step: 4, title: 'Apply for Your Visa', desc: 'Apply at the consulate in the US or upon arrival (varies by visa type). Processing takes 2-12 weeks typically.' },
              { step: 5, title: 'Plan Your Move', desc: 'Book flights, arrange housing, set up banking, and organize shipping. Consider selling vs. storing belongings.' },
              { step: 6, title: 'Register Upon Arrival', desc: 'Register with local authorities, get a residence card, set up healthcare, and open a local bank account.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Moving to Europe FAQ
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
                  <span className="text-blue-500 group-open:rotate-180 transition-transform flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your European Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help you find the best country and visa option based on your
            situation, budget, and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Chat with AI Assistant
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Cost Calculator
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
          { href: '/move-to-europe', label: 'Move to Europe' },
          { href: '/digital-nomad-visa', label: 'Digital Nomad Visas' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
