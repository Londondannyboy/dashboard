import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { StaticHeader } from '@/components/StaticHeader'
import { StaticFooter } from '@/components/StaticFooter'

export const metadata: Metadata = {
  title: 'Country Relocation Guides | Move Abroad with Confidence | Relocation Quest',
  description: 'Comprehensive guides for moving abroad. Visa requirements, cost of living, healthcare, and expert tips for relocating to Costa Rica, Thailand, Mexico, UK, Germany, Spain, Portugal and more.',
  keywords: [
    'moving abroad guide',
    'relocate to another country',
    'expat guides',
    'cost of living abroad',
    'best countries to move to',
    'digital nomad destinations',
  ],
  alternates: {
    canonical: 'https://relocation.quest/guides',
  },
  openGraph: {
    title: 'Country Relocation Guides - Move Abroad with Confidence',
    description: 'Comprehensive guides for moving to Costa Rica, Thailand, Mexico, UK, Germany, Spain, Portugal and more.',
    type: 'website',
    url: 'https://relocation.quest/guides',
  },
}

interface Guide {
  id: number
  slug: string
  title: string
  excerpt: string | null
  hero_asset_url: string | null
  country: string | null
  country_code: string | null
  target_keyword: string | null
  keyword_volume: number | null
  keyword_difficulty: number | null
}

const COUNTRY_FLAGS: Record<string, string> = {
  'CR': '🇨🇷', 'TH': '🇹🇭', 'MX': '🇲🇽', 'GB': '🇬🇧',
  'DE': '🇩🇪', 'ES': '🇪🇸', 'PT': '🇵🇹',
}

async function getGuides(): Promise<Guide[]> {
  if (!process.env.DATABASE_URL) return []

  try {
    const sql = neon(process.env.DATABASE_URL)
    const results = await sql`
      SELECT id, slug, title, excerpt, hero_asset_url, country, country_code,
             target_keyword, keyword_volume, keyword_difficulty
      FROM articles
      WHERE guide_type = 'country'
      AND status = 'published'
      AND app = 'relocation'
      ORDER BY keyword_difficulty ASC
    `
    return results as Guide[]
  } catch (error) {
    console.error('Failed to fetch guides:', error)
    return []
  }
}

export default async function GuidesPage() {
  const guides = await getGuides()

  return (
    <main className="min-h-screen bg-white">
      <StaticHeader
        brandName="Relocation"
        brandAccent="Quest"
        brandGradient="from-amber-400 to-orange-500"
        signInGradient="from-amber-500 to-orange-600"
        navItems={[
          { href: '/guides', label: 'Guides', highlight: true },
          { href: '/articles', label: 'Articles' },
          { href: '/chat', label: 'Chat' },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
              Country Guides
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Your Complete Guide to{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Moving Abroad
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert guides covering visa requirements, cost of living, healthcare, and everything
              you need to know about relocating to a new country.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25"
              >
                Get Personalized Advice
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-50 transition"
              >
                Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Popular Destinations for Americans
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These guides are ranked by SEO difficulty, starting with the easiest opportunities
            for relocation seekers.
          </p>

          {guides.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => {
                const flag = guide.country_code ? COUNTRY_FLAGS[guide.country_code] : null
                return (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-video bg-gray-100">
                      {guide.hero_asset_url ? (
                        <Image
                          src={guide.hero_asset_url}
                          alt={guide.country || guide.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
                          <span className="text-6xl">{flag || '🌍'}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Overlay Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          {flag && <span className="text-3xl drop-shadow-lg">{flag}</span>}
                          <span className="text-white font-bold text-xl drop-shadow-lg">
                            {guide.country}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 text-sm">
                          <span className="px-2 py-0.5 bg-white/20 rounded">
                            KD: {guide.keyword_difficulty}
                          </span>
                          <span className="px-2 py-0.5 bg-white/20 rounded">
                            {guide.keyword_volume?.toLocaleString()} searches/mo
                          </span>
                        </div>
                      </div>

                      {/* Rank Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      {guide.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {guide.excerpt}
                        </p>
                      )}
                      <div className="mt-4 flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Read Guide <span className="ml-1">→</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No guides available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Guides Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛂', title: 'Visa Requirements', desc: 'Work visas, digital nomad visas, retirement options, and residency paths' },
              { icon: '💰', title: 'Cost of Living', desc: 'Real budgets for rent, food, healthcare, and daily expenses' },
              { icon: '🏥', title: 'Healthcare', desc: 'Public and private healthcare options, insurance requirements' },
              { icon: '🏙️', title: 'Best Cities', desc: 'Top locations for expats with pros and cons of each' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-2xl border border-gray-200">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Move?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our AI assistant can help you find the perfect destination based on your budget,
            lifestyle preferences, and career goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Chat with AI Assistant
            </Link>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Voice Assistant
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
          { href: '/articles', label: 'Articles' },
          { href: '/calculator', label: 'Calculator' },
          { href: '/privacy', label: 'Privacy' },
        ]}
      />
    </main>
  )
}
