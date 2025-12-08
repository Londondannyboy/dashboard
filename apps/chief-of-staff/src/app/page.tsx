import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'

export const metadata: Metadata = {
  title: 'Chief of Staff Recruitment Agencies UK 2025 | Executive Assistant Jobs London',
  description: 'Find the best chief of staff recruitment agencies in the UK. Browse executive assistant jobs in London, connect with leading recruiters, and discover C-suite support opportunities.',
  keywords: 'chief of staff recruitment agencies, chief of staff recruitment, executive assistant recruitment, EA jobs London, chief of staff jobs UK, C-suite support recruitment',
}

const services = [
  { name: 'Executive Search', icon: '🎯', description: 'Find exceptional Chief of Staff and EA candidates' },
  { name: 'Leadership Assessment', icon: '📊', description: 'Evaluate candidates for C-suite support roles' },
  { name: 'Talent Advisory', icon: '💡', description: 'Strategic hiring guidance for executive support' },
  { name: 'Market Insights', icon: '📈', description: 'Salary benchmarks and hiring trends' },
  { name: 'Succession Planning', icon: '🔄', description: 'Build your executive support pipeline' },
  { name: 'Onboarding Support', icon: '🤝', description: 'Ensure successful placements' },
]

const benefits = [
  {
    icon: '🏆',
    title: 'Handpicked Agencies',
    description: 'Only the most reputable chief of staff recruitment agencies in the UK, vetted for quality and track record.',
  },
  {
    icon: '💷',
    title: 'Salary Benchmarks',
    description: 'Access comprehensive salary data for Chief of Staff and Executive Assistant roles across London and the UK.',
  },
  {
    icon: '🎓',
    title: 'Career Guidance',
    description: 'Expert advice on building your career in executive support, from EA to Chief of Staff.',
  },
  {
    icon: '🌍',
    title: 'International Reach',
    description: 'Connect with agencies placing candidates in global organisations with UK headquarters.',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Browse Agencies',
    description: 'Explore our directory of leading chief of staff recruitment agencies across the UK.',
  },
  {
    step: 2,
    title: 'Compare Specialists',
    description: 'Find agencies that specialise in your sector, whether finance, tech, or professional services.',
  },
  {
    step: 3,
    title: 'Connect Directly',
    description: 'Reach out to agencies that match your requirements and experience level.',
  },
  {
    step: 4,
    title: 'Land Your Role',
    description: 'Work with expert recruiters who understand the Chief of Staff and EA market.',
  },
]

const faqs = [
  {
    q: 'What is a Chief of Staff role?',
    a: 'A Chief of Staff is a senior executive support role that acts as a strategic partner to the CEO or C-suite. They manage key initiatives, coordinate across departments, and handle high-level administrative and strategic tasks. The role has grown significantly in the UK, particularly in tech, finance, and professional services.',
  },
  {
    q: 'How much do Chief of Staff roles pay in the UK?',
    a: 'Chief of Staff salaries in the UK typically range from £70,000 to £150,000+ depending on the organisation size, sector, and location. London-based roles at large corporations or PE-backed companies can exceed £200,000 with bonuses.',
  },
  {
    q: 'What\'s the difference between a Chief of Staff and Executive Assistant?',
    a: 'While both support senior executives, a Chief of Staff typically handles strategic projects, stakeholder management, and decision-making support. Executive Assistants focus more on diary management, travel, and administrative tasks. Many EAs progress to Chief of Staff roles.',
  },
  {
    q: 'Which recruitment agencies specialise in Chief of Staff roles?',
    a: 'Several UK agencies specialise in Chief of Staff and executive support recruitment, including Bain and Gray, Oriel Partners, Attic Recruitment, and others. Our directory helps you find the right agency for your sector and experience level.',
  },
  {
    q: 'Do I need experience to become a Chief of Staff?',
    a: 'Most Chief of Staff roles require 5-10+ years of experience, often from consulting, investment banking, or senior EA positions. However, some organisations hire high-potential candidates with strong project management and communication skills.',
  },
  {
    q: 'Are Chief of Staff roles only in London?',
    a: 'While London has the highest concentration of Chief of Staff roles, opportunities exist across the UK in Manchester, Birmingham, Edinburgh, and other cities. Many roles also offer hybrid or remote working arrangements.',
  },
]

async function getHomepageData() {
  const sql = neon(process.env.DATABASE_URL!)

  const [homepageContent, companies, articles] = await Promise.all([
    sql`
      SELECT section_type, title, subtitle, content
      FROM homepage_content
      WHERE site = 'chief-of-staff' AND is_active = true
      ORDER BY section_order ASC
    `,
    sql`
      SELECT id, name, slug, description, headquarters, logo_url, specializations, global_rank
      FROM companies
      WHERE app = 'chief-of-staff' AND status = 'published'
      ORDER BY
        CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
        global_rank ASC NULLS LAST,
        name ASC
      LIMIT 9
    `,
    sql`
      SELECT id, title, excerpt, slug, published_at, created_at, article_angle, featured_asset_url, featured_asset_alt
      FROM articles
      WHERE app = 'chief-of-staff' AND status = 'published'
      ORDER BY published_at DESC NULLS LAST, created_at DESC
      LIMIT 6
    `,
  ])

  return {
    sections: {
      hero: homepageContent.find((s: any) => s.section_type === 'hero'),
      intro: homepageContent.find((s: any) => s.section_type === 'intro'),
      role: homepageContent.find((s: any) => s.section_type === 'role'),
      howItWorks: homepageContent.find((s: any) => s.section_type === 'how_it_works'),
      faq: homepageContent.find((s: any) => s.section_type === 'faq'),
    },
    companies,
    articles,
  }
}

export default async function HomePage() {
  const { sections, companies, articles } = await getHomepageData()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-900">Chief of Staff</span>
              <span className="text-2xl font-black bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-blue-600 font-medium">Home</Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-600 font-medium">Articles</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-blue-600 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/agencies" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition">
                Find Agencies
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-gradient pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                {companies.length}+ Top Recruitment Agencies Listed
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {sections.hero?.title || 'Chief of Staff Recruitment'}<br />
                <span className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent">Agencies UK</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                {sections.hero?.subtitle || 'Discover leading chief of staff recruitment agencies. Connect with specialist recruiters for Executive Assistant and C-suite support roles in London and across the UK.'}
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Search Agencies or Roles</label>
                  <input
                    type="text"
                    placeholder="e.g. Chief of Staff, Executive Assistant"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <Link href="/agencies" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <Link href="/agencies" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Chief of Staff Agencies</Link>
                <Link href="/agencies" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">EA Recruitment London</Link>
                <Link href="/articles" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Salary Guide</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">{companies.length}+</div>
                <div className="text-gray-600 font-medium">Specialist Agencies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">CoS Roles Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">£95k</div>
                <div className="text-gray-600 font-medium">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">London</div>
                <div className="text-gray-600 font-medium">& UK Wide</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Chief of Staff Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What is a Chief of Staff?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A Chief of Staff is a strategic partner to the CEO or senior executives, managing key initiatives,
                coordinating across departments, and ensuring organisational effectiveness. The role has grown
                significantly across the UK, particularly in tech, finance, and professional services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Partner</h3>
                <p className="text-gray-600">Work directly with C-suite executives on high-priority initiatives and company strategy.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Functional Leader</h3>
                <p className="text-gray-600">Coordinate across departments, manage stakeholders, and drive organisational alignment.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Accelerator</h3>
                <p className="text-gray-600">A launchpad to senior leadership roles like COO, VP, or general management positions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Recruitment Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leading chief of staff recruitment agencies offer comprehensive services to match
                exceptional candidates with outstanding organisations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="role-card"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Agencies Section */}
        {companies.length > 0 && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                    Leading Chief of Staff Recruitment Agencies
                  </h2>
                  <p className="text-gray-600">Top agencies specialising in Chief of Staff and Executive Assistant recruitment in the UK</p>
                </div>
                <Link href="/agencies" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                  View All Agencies
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company: any) => (
                  <Link
                    key={company.id}
                    href={`/agencies/${company.slug}`}
                    className="agency-card block"
                  >
                    {company.logo_url && (
                      <div className="mb-4 h-12 flex items-center">
                        <img
                          src={company.logo_url}
                          alt={`${company.name} logo`}
                          className="h-10 w-auto"
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 flex-1">
                        {company.name}
                      </h3>
                      {company.global_rank && (
                        <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                          #{company.global_rank}
                        </span>
                      )}
                    </div>

                    {company.headquarters && company.headquarters !== 'Unavailable from provided context' && (
                      <div className="text-sm text-gray-600 mb-3">
                        {company.headquarters}
                      </div>
                    )}

                    {company.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {company.description}
                      </p>
                    )}

                    {company.specializations && company.specializations.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {company.specializations.slice(0, 3).map((spec: string) => (
                          <span key={spec} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                            {spec}
                          </span>
                        ))}
                        {company.specializations.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-gray-500">
                            +{company.specializations.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Why Use Our Directory?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;ve done the research so you don&apos;t have to. Find the right recruitment agency for your Chief of Staff or EA search.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-xl p-8 border border-gray-200 card-hover">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-blue-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                How to Find the Right Agency
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Your journey to finding the perfect Chief of Staff recruitment agency starts here.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        {articles.length > 0 && (
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                    Latest Articles
                  </h2>
                  <p className="text-gray-600">Industry insights and career guidance for Chief of Staff professionals</p>
                </div>
                <Link href="/articles" className="text-blue-600 hover:text-blue-800 font-semibold">
                  View all articles &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article: any) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {article.featured_asset_url && (
                      <img src={article.featured_asset_url} alt={article.featured_asset_alt || article.title} className="w-full h-48 object-cover" />
                    )}
                    <div className="p-6">
                      {article.article_angle && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                          {article.article_angle}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/${article.slug}`} className="hover:text-blue-600">
                          {article.title}
                        </Link>
                      </h3>
                      {article.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <time dateTime={article.published_at || article.created_at}>
                          {new Date(article.published_at || article.created_at).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <Link href={`/${article.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SEO Content Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Chief of Staff Recruitment Agencies UK: Your Complete Guide
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                <strong>Chief of Staff recruitment agencies</strong> specialise in placing candidates in one of the most
                strategic roles in modern business. As the right-hand to CEOs and senior executives, a Chief of Staff
                requires a unique blend of strategic thinking, operational excellence, and interpersonal skills.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Why Use a Specialist Recruitment Agency?
              </h3>
              <p className="mb-4">
                <strong>Chief of Staff roles</strong> are highly specialised, and generic recruitment agencies often lack
                the network and expertise to source the best candidates. Specialist agencies understand the nuances of the
                role, from supporting PE portfolio company CEOs to working with founder-led tech startups.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Chief of Staff Recruitment in London
              </h3>
              <p className="mb-4">
                <strong>London</strong> remains the UK&apos;s primary market for Chief of Staff recruitment, with strong
                demand from private equity, venture capital-backed companies, and large corporates. Many <strong>chief of
                staff recruitment agencies</strong> are headquartered in London but place candidates across the UK.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Executive Assistant Recruitment
              </h3>
              <p className="mb-4">
                Many <strong>chief of staff recruitment agencies</strong> also specialise in <strong>Executive Assistant
                recruitment</strong>. These roles often serve as a pathway to Chief of Staff positions, making specialist
                EA recruiters valuable partners for career progression.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Find Your Agency?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Browse our directory of leading chief of staff recruitment agencies and find the perfect partner for your search.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/agencies" className="bg-white text-blue-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse Agencies
              </Link>
              <Link href="/articles" className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-lg transition">
                Read Articles
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl px-6 py-5 group border border-gray-200">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-gray-900">
                    {faq.q}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4 pt-4 border-t border-gray-200">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-black text-white">Chief of Staff</span>
                <span className="text-2xl font-black text-sky-400">Quest</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted directory for chief of staff recruitment agencies across the UK.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Recruitment</h4>
              <ul className="space-y-2">
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">Chief of Staff Agencies</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">EA Recruitment</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">London Agencies</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">All Agencies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Articles & Guides</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Salary Guide</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Career Advice</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Chief of Staff Quest. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Chief of Staff Recruitment Agencies UK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
