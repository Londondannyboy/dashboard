import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'
import { sql } from '@/lib/db'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

interface RegionConfig {
  name: string
  title: string
  metaDescription: string
  h1: string
  subtitle: string
  heroDescription: string
  mainContent: string[]
  whyChoose: string[]
  cityHighlight?: { name: string; description: string }
  filter: { country?: string; region?: string }
}

const REGIONS: Record<string, RegionConfig> = {
  'uk': {
    name: 'United Kingdom',
    title: 'Top Private Equity Placement Agents UK',
    metaDescription: 'Discover the top private equity placement agents in the UK. Leading London-based PE fundraising firms specializing in connecting fund managers with global institutional investors.',
    h1: 'Top Private Equity Placement Agents UK',
    subtitle: 'Directory of Leading UK PE Fundraising Firms',
    heroDescription: 'Finding the top private equity placement agents in the UK is critical for successful fundraising. London-based placement agents dominate European and global capital raising, connecting fund managers with institutional investors across all major markets.',
    mainContent: [
      'London serves as the undisputed European hub for private equity fundraising and the second-largest PE market globally. The top private equity placement agents in the UK lead cross-border capital raising activity, connecting fund managers worldwide with European, Middle Eastern, and Asian institutional investors. The city\'s status as a global financial center provides unparalleled access to international capital, making these firms essential partners for successful fundraising campaigns.',
      'UK placement agents have established themselves as global leaders in private equity fundraising, with many firms managing billions in capital commitments annually. Their expertise spans buyout funds, growth equity, venture capital, and infrastructure investments. The regulatory framework under the Financial Conduct Authority (FCA) ensures these firms operate with the highest standards of professionalism and transparency.',
    ],
    whyChoose: [
      'The top private equity placement agents based in London offer unique advantages for international fundraising. These premier firms navigate complex FCA regulations, maintain deep relationships across European pension funds and Middle Eastern sovereign wealth funds, and possess sophisticated understanding of cross-border fund structures and investor preferences across multiple jurisdictions. Their established track records in successfully closing multi-billion pound fundraises demonstrate proven expertise that fund managers rely on during critical capital-raising campaigns.',
      'Leading British placement agencies typically maintain relationships with 400-800+ institutional investors globally, including major UK pension schemes (USS, LGPS), European insurance companies, Middle Eastern sovereign funds, and Asian family offices managing trillions in combined assets. This extensive network enables fund managers to access the right institutional capital for their specific investment strategies and target returns.',
      'These firms provide comprehensive fundraising services including investor identification, presentation preparation, due diligence coordination, and closing support. Their market intelligence and relationships often prove invaluable during challenging market conditions when institutional investors become more selective about new commitments.',
    ],
    cityHighlight: {
      name: 'London, UK',
      description: 'Global financial center and European PE headquarters. Home to major placement agents serving UK pension schemes (USS, LGPS with £300B+ combined), European insurance companies, Middle Eastern sovereign wealth funds, and international family offices. Unrivaled cross-border fundraising expertise with FCA-regulated firms navigating complex international fund structures.',
    },
    filter: { country: 'United Kingdom' }
  },
  'us': {
    name: 'United States',
    title: 'Top Private Equity Placement Agents US',
    metaDescription: 'Leading private equity placement agents in the United States. Premier US-based PE fundraising agencies with deep relationships across American pension funds, endowments, and institutional investors.',
    h1: 'Top Private Equity Placement Agents US',
    subtitle: 'Directory of Leading US PE Fundraising Firms',
    heroDescription: 'The United States hosts the world\'s largest private equity market, with top placement agents managing access to trillions in institutional capital. These firms connect fund managers with American pension funds, endowments, foundations, and family offices.',
    mainContent: [
      'The United States represents the largest private equity market globally, with institutional investors managing over $30 trillion in assets. Top private equity placement agents in the US serve as critical intermediaries between fund managers and sophisticated investors including CalPERS, CalSTRS, state pension systems, university endowments, and corporate pension plans.',
      'American placement agents have developed deep expertise across all alternative asset classes including buyout, growth equity, venture capital, real estate, and infrastructure. Their relationships with investment consultants and gatekeepers at major institutional investors provide fund managers with strategic access to committed capital.',
    ],
    whyChoose: [
      'US-based placement agents offer unparalleled access to the world\'s deepest pool of institutional capital. These firms maintain relationships with hundreds of pension funds, endowments, and foundations collectively managing tens of trillions in assets.',
      'Leading American placement agencies navigate complex SEC regulations and provide comprehensive fundraising support including investor targeting, due diligence management, and closing coordination.',
    ],
    filter: { country: 'United States' }
  },
  'europe': {
    name: 'Europe',
    title: 'Top Private Equity Placement Agents Europe',
    metaDescription: 'Premier European private equity placement agents. Pan-European fundraising specialists serving continental pension funds, family offices, and sovereign wealth funds.',
    h1: 'Top Private Equity Placement Agents Europe',
    subtitle: 'Directory of Leading European PE Fundraising Firms',
    heroDescription: 'European placement agents connect fund managers with the continent\'s largest institutional investors, including pension funds from the Netherlands, Nordic countries, and Germany, as well as insurance companies and family offices across the region.',
    mainContent: [
      'Europe represents a diverse and sophisticated private equity market, with institutional investors across the continent allocating billions to alternative investments annually. Top placement agents in Europe maintain relationships with major pension funds in the Netherlands, Denmark, Sweden, and other Nordic countries.',
      'European placement agents navigate complex cross-border regulations including AIFMD requirements while providing access to investors ranging from German insurance companies to Swiss family offices and French institutional investors.',
    ],
    whyChoose: [
      'Pan-European placement agents offer unique expertise in navigating diverse regulatory environments and investor preferences across multiple jurisdictions.',
      'These firms maintain deep relationships with European institutional investors and provide culturally nuanced approaches to investor engagement across different markets.',
    ],
    filter: { region: 'Europe' }
  },
  'asia-pacific': {
    name: 'Asia Pacific',
    title: 'Top Private Equity Placement Agents Asia Pacific',
    metaDescription: 'Leading private equity placement agents across Asia Pacific. Regional specialists with deep LP relationships in Australia, Japan, Korea, and emerging Asian markets.',
    h1: 'Top Private Equity Placement Agents Asia Pacific',
    subtitle: 'Directory of Leading APAC PE Fundraising Firms',
    heroDescription: 'Asia Pacific placement agents provide access to rapidly growing pools of institutional capital across Australia, Japan, Korea, and Southeast Asia. These specialists understand the unique preferences and requirements of regional investors.',
    mainContent: [
      'The Asia Pacific region has emerged as a major source of private equity capital, with sovereign wealth funds, pension systems, and family offices allocating increasing amounts to alternative investments. Top placement agents in APAC maintain relationships with major investors including Australian superannuation funds, Japanese insurance companies, and Korean pension funds.',
    ],
    whyChoose: [
      'Regional placement agents offer deep expertise in Asian investor preferences and regulatory requirements across multiple jurisdictions.',
      'These firms provide access to growing pools of institutional capital and family office wealth across the Asia Pacific region.',
    ],
    filter: { region: 'Asia Pacific' }
  },
  'north-america': {
    name: 'North America',
    title: 'Top Private Equity Placement Agents North America',
    metaDescription: 'Top private equity placement agents in North America. Full-service fundraising advisors covering US and Canadian institutional investors.',
    h1: 'Top Private Equity Placement Agents North America',
    subtitle: 'Directory of Leading North American PE Fundraising Firms',
    heroDescription: 'North American placement agents provide access to the world\'s largest concentration of institutional capital, covering both US and Canadian investors including major pension plans and endowments.',
    mainContent: [
      'North America hosts the world\'s largest private equity market, with US and Canadian institutional investors allocating hundreds of billions to alternative investments. Top placement agents across the region maintain relationships with pension funds, endowments, foundations, and family offices.',
    ],
    whyChoose: [
      'North American placement agents offer comprehensive coverage of the world\'s deepest pools of institutional capital.',
    ],
    filter: { region: 'North America' }
  },
  'latin-america': {
    name: 'Latin America',
    title: 'Top Private Equity Placement Agents Latin America',
    metaDescription: 'Premier private equity placement agents in Latin America. Regional experts with connections to Brazilian, Mexican, and Latin American pension funds.',
    h1: 'Top Private Equity Placement Agents Latin America',
    subtitle: 'Directory of Leading LATAM PE Fundraising Firms',
    heroDescription: 'Latin American placement agents connect fund managers with regional institutional investors including Brazilian and Mexican pension funds, as well as development finance institutions focused on the region.',
    mainContent: [
      'Latin America represents a growing market for private equity investment, with pension funds in Brazil, Mexico, Chile, and Colombia allocating increasing amounts to alternative investments.',
    ],
    whyChoose: [
      'Regional specialists understand the unique regulatory environment and investor preferences across Latin American markets.',
    ],
    filter: { region: 'Latin America' }
  },
  'middle-east': {
    name: 'Middle East',
    title: 'Top Private Equity Placement Agents Middle East',
    metaDescription: 'Leading private equity placement agents in the Middle East. Specialists with relationships across Gulf sovereign wealth funds and family offices.',
    h1: 'Top Private Equity Placement Agents Middle East',
    subtitle: 'Directory of Leading Middle Eastern PE Fundraising Firms',
    heroDescription: 'Middle Eastern placement agents provide access to some of the world\'s largest sovereign wealth funds and family offices, including major investors in the UAE, Saudi Arabia, and other Gulf states.',
    mainContent: [
      'The Middle East hosts some of the world\'s largest pools of institutional capital, with sovereign wealth funds in Abu Dhabi, Kuwait, Qatar, and Saudi Arabia managing trillions in assets.',
    ],
    whyChoose: [
      'Specialists in Middle Eastern fundraising maintain deep relationships with sovereign wealth funds and understand the unique requirements of regional investors.',
    ],
    filter: { region: 'Middle East' }
  },
  'africa': {
    name: 'Africa',
    title: 'Top Private Equity Placement Agents Africa',
    metaDescription: 'Top private equity placement agents in Africa. Regional specialists focused on pan-African institutional investors and development finance institutions.',
    h1: 'Top Private Equity Placement Agents Africa',
    subtitle: 'Directory of Leading African PE Fundraising Firms',
    heroDescription: 'African placement agents connect fund managers with development finance institutions, pension funds, and family offices focused on the continent\'s growing economies.',
    mainContent: [
      'Africa represents an emerging market for private equity investment, with growing institutional investor bases in South Africa, Nigeria, Kenya, and other major economies.',
    ],
    whyChoose: [
      'Regional specialists understand the unique opportunities and challenges of fundraising across African markets.',
    ],
    filter: { region: 'Africa' }
  },
  'singapore': {
    name: 'Singapore',
    title: 'Top Private Equity Placement Agents Singapore',
    metaDescription: 'Premier private equity placement agents in Singapore. Southeast Asian specialists with strong ties to Singaporean sovereign wealth funds and regional LPs.',
    h1: 'Top Private Equity Placement Agents Singapore',
    subtitle: 'Directory of Leading Singapore PE Fundraising Firms',
    heroDescription: 'Singapore-based placement agents provide access to major Southeast Asian investors including GIC, Temasek, and regional family offices, serving as a hub for Asia-focused fundraising.',
    mainContent: [
      'Singapore serves as a major hub for private equity activity in Southeast Asia, hosting significant sovereign wealth funds and serving as a base for regional family offices and institutional investors.',
    ],
    whyChoose: [
      'Singapore-based specialists offer deep relationships with major regional investors and expertise in Southeast Asian market dynamics.',
    ],
    filter: { country: 'Singapore' }
  },
}

interface Company {
  id: number
  name: string
  display_name: string
  slug: string
  description: string | null
  logo_url: string | null
  featured_asset_url: string | null
  headquarters: string | null
  specializations: string[] | null
  global_rank: number | null
  primary_country: string | null
  primary_region: string | null
}

async function getCompaniesByRegion(filter: { country?: string; region?: string }): Promise<Company[]> {
  try {
    let companies: Company[]

    if (filter.country) {
      companies = await sql`
        SELECT
          id,
          name,
          COALESCE(display_name, name) as display_name,
          slug,
          description,
          logo_url,
          featured_asset_url,
          headquarters,
          specializations,
          global_rank,
          primary_country,
          primary_region
        FROM companies
        WHERE company_type = 'placement_agent'
          AND status = 'published'
          AND primary_country = ${filter.country}
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
      ` as Company[]
    } else if (filter.region) {
      companies = await sql`
        SELECT
          id,
          name,
          COALESCE(display_name, name) as display_name,
          slug,
          description,
          logo_url,
          featured_asset_url,
          headquarters,
          specializations,
          global_rank,
          primary_country,
          primary_region
        FROM companies
        WHERE company_type = 'placement_agent'
          AND status = 'published'
          AND primary_region = ${filter.region}
        ORDER BY
          CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
          global_rank ASC NULLS LAST,
          name ASC
      ` as Company[]
    } else {
      companies = []
    }

    return companies
  } catch (error) {
    console.error('Error fetching companies:', error)
    return []
  }
}

export function generateStaticParams() {
  return Object.keys(REGIONS).map((region) => ({ region }))
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params
  const config = REGIONS[region]

  if (!config) {
    return { title: 'Not Found' }
  }

  return {
    title: config.title,
    description: config.metaDescription,
    openGraph: {
      title: config.title,
      description: config.metaDescription,
    },
  }
}

export default async function RegionalPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const config = REGIONS[region]

  if (!config) {
    notFound()
  }

  const companies = await getCompaniesByRegion(config.filter)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <GlobalHeader
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        signInGradient="from-blue-500 to-indigo-500"
        navItems={[
          { href: '/private-equity-placement-agent-news', label: 'News' },
          { href: '/private-equity-placement-agents-list', label: 'Directory' },
          { href: '/ecosystem', label: 'Network' },
          { href: '/momentum', label: 'Momentum' },
        ]}
      />

      <main className="flex-1 pt-16">
        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li>/</li>
            <li><Link href="/private-equity-placement-agents-list" className="hover:text-white transition">Private Equity Placement Agents</Link></li>
            <li>/</li>
            <li className="text-white">{config.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {config.h1}
            </h1>
            <p className="text-lg text-gray-400 mb-4">{config.subtitle}</p>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {config.heroDescription}
            </p>

            {/* Region Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link href="/private-equity-placement-agents-list" className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition">
                All Regions
              </Link>
              {Object.entries(REGIONS).slice(0, 6).map(([slug, { name }]) => (
                <Link
                  key={slug}
                  href={`/top-private-equity-placement-agents/${slug}`}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    slug === region
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">Top Private Equity Placement Agents List</h2>
            {config.mainContent.map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-6">{paragraph}</p>
            ))}

            <h3 className="text-2xl font-bold mt-12 mb-4 text-white">Why Choose Top Private Equity Placement Agents in the {config.name}</h3>
            {config.whyChoose.map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-6">{paragraph}</p>
            ))}

            {config.cityHighlight && (
              <>
                <h3 className="text-2xl font-bold mt-12 mb-6 text-white" id="london">
                  {config.cityHighlight.name}: European PE Fundraising Capital
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    📍 {config.cityHighlight.name}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{config.cityHighlight.description}</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-12 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Top Private Equity Placement Agents in the {config.name} ({companies.length})
            </h2>

            {companies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    href={`/private-equity-placement-agents-list/${company.slug}`}
                    className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300"
                  >
                    {company.featured_asset_url && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={company.featured_asset_url}
                          alt={`${company.display_name} - Top private equity placement agents ${config.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                        {company.display_name}
                      </h4>
                      {company.primary_country && (
                        <p className="text-sm text-gray-500 mb-2">
                          🌍 {company.primary_country} · {company.primary_region}
                        </p>
                      )}
                      {company.global_rank && (
                        <p className="text-sm text-gray-500 mb-3">🏆 Rank #{company.global_rank}</p>
                      )}
                      {company.description && (
                        <p className="text-sm text-gray-400 line-clamp-3 mb-4">{company.description}</p>
                      )}
                      <span className="text-blue-400 font-semibold text-sm">View Profile →</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 mb-6">We're building our database for {config.name}.</p>
                <Link
                  href="/private-equity-placement-agents-list"
                  className="inline-flex px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition"
                >
                  View All Agents
                </Link>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                href="/private-equity-placement-agents-list"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-xl font-bold transition"
              >
                View All Regions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter
        brandName="Rainmakrr"
        brandAccent="Quest"
        brandGradient="from-blue-400 to-indigo-500"
        brandDescription="Your comprehensive guide to private equity placement agents worldwide."
        productLinks={[
          { label: 'All Placement Agents', href: '/private-equity-placement-agents-list' },
          { label: 'Network', href: '/ecosystem' },
          { label: 'News', href: '/private-equity-placement-agent-news' },
        ]}
        companyLinks={[
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]}
      />
    </div>
  )
}
