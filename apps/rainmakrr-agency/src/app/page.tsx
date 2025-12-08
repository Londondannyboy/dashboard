import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'

export const metadata: Metadata = {
  title: 'Startup Jobs UK 2025 | Best Startup Recruitment Agencies',
  description: 'Find the best startup jobs and recruitment agencies in the UK. Connect with specialist recruiters for startup, scale-up, and tech roles in London and across Britain.',
  keywords: 'startup jobs UK, startup recruitment agency, tech startup jobs London, scale-up careers, startup hiring UK',
}

const services = [
  { name: 'Tech Recruitment', icon: '💻', description: 'Software engineers, CTOs, and tech leads for startups' },
  { name: 'Commercial Roles', icon: '📈', description: 'Sales, marketing, and growth specialists' },
  { name: 'Operations', icon: '⚙️', description: 'COOs, ops managers, and process experts' },
  { name: 'Product', icon: '🎯', description: 'Product managers and designers' },
  { name: 'Finance', icon: '💰', description: 'CFOs, finance directors, and controllers' },
  { name: 'People & Culture', icon: '🤝', description: 'HR, talent, and culture leads' },
]

const benefits = [
  {
    icon: '🚀',
    title: 'Startup Specialists',
    description: 'Agencies that truly understand the startup ecosystem, from seed to Series C and beyond.',
  },
  {
    icon: '💷',
    title: 'Equity & Salary Data',
    description: 'Access comprehensive compensation data including equity packages for UK startup roles.',
  },
  {
    icon: '🎓',
    title: 'Career Guidance',
    description: 'Expert advice on transitioning from corporate to startup, or scaling your startup career.',
  },
  {
    icon: '🌍',
    title: 'London & Beyond',
    description: 'Find opportunities across London, Manchester, Bristol, Edinburgh, and remote-first startups.',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Browse Agencies',
    description: 'Explore our directory of leading startup recruitment agencies across the UK.',
  },
  {
    step: 2,
    title: 'Find Your Niche',
    description: 'Filter by stage (seed, Series A+), sector (fintech, healthtech, SaaS), or role type.',
  },
  {
    step: 3,
    title: 'Connect Directly',
    description: 'Reach out to agencies that match your experience and startup ambitions.',
  },
  {
    step: 4,
    title: 'Land Your Role',
    description: 'Work with specialist recruiters who have exclusive access to startup opportunities.',
  },
]

const faqs = [
  {
    q: 'What is a startup recruitment agency?',
    a: 'A startup recruitment agency specialises in placing candidates at early-stage and high-growth companies. They understand the unique culture, equity structures, and pace of startups, making them ideal partners for both candidates and hiring companies.',
  },
  {
    q: 'How much do startup jobs pay in the UK?',
    a: 'Startup salaries vary widely based on stage, funding, and role. Entry-level roles at seed-stage startups might pay £30-50k, while senior roles at well-funded scale-ups can exceed £150k plus significant equity. London typically pays 10-20% more than other UK cities.',
  },
  {
    q: 'What\'s the difference between a startup and scale-up?',
    a: 'Startups are typically early-stage companies (pre-seed to Series A) still finding product-market fit. Scale-ups are companies post-Series A that have proven their model and are focused on rapid growth. Recruitment needs differ significantly between the two.',
  },
  {
    q: 'Should I work at a startup or a big company?',
    a: 'Startups offer faster learning, broader responsibilities, equity upside, and more impact. Big companies offer stability, structured progression, and established processes. Many successful professionals alternate between both throughout their careers.',
  },
  {
    q: 'How do I find startup jobs in London?',
    a: 'Use specialist startup recruitment agencies (like those in our directory), job boards like Otta, Workable, and LinkedIn, attend startup events, and leverage your network. Many startup roles are never publicly advertised.',
  },
  {
    q: 'Do startup recruitment agencies charge candidates?',
    a: 'No, reputable recruitment agencies never charge candidates. They are paid by the hiring company, typically a percentage of the placed candidate\'s first-year salary (usually 15-25%).',
  },
]

async function getHomepageData() {
  const sql = neon(process.env.DATABASE_URL!)

  const [homepageContent, companies, articles] = await Promise.all([
    sql`
      SELECT section_type, title, subtitle, content
      FROM homepage_content
      WHERE site = 'rainmakrr-agency' AND is_active = true
      ORDER BY section_order ASC
    `,
    sql`
      SELECT id, name, slug, description, headquarters, logo_url, specializations, global_rank
      FROM companies
      WHERE app = 'rainmakrr-agency' AND status = 'published'
      ORDER BY
        CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
        global_rank ASC NULLS LAST,
        name ASC
      LIMIT 9
    `,
    sql`
      SELECT id, title, excerpt, slug, published_at, created_at, article_angle, featured_asset_url, featured_asset_alt
      FROM articles
      WHERE app = 'rainmakrr-agency' AND status = 'published'
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
              <span className="text-2xl font-black bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent">Rainmakrr</span>
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Agency</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-violet-600 font-medium">Home</Link>
              <Link href="/articles" className="text-gray-700 hover:text-violet-600 font-medium">Articles</Link>
              <Link href="/agencies" className="text-gray-700 hover:text-violet-600 font-medium">Agencies</Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/agencies" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded-lg transition">
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
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                {companies.length}+ Top Startup Recruitment Agencies Listed
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Startup Jobs UK
              </h1>
              <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-10">
                {sections.hero?.subtitle || 'Find the best startup recruitment agencies in the UK. Connect with specialist recruiters for tech, scale-up, and high-growth roles in London and beyond.'}
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Search Agencies or Roles</label>
                  <input
                    type="text"
                    placeholder="e.g. Tech Startup, Product Manager, Series A"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <Link href="/agencies" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <Link href="/agencies" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Tech Startups</Link>
                <Link href="/agencies" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Fintech Jobs</Link>
                <Link href="/articles" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Startup Salaries</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">{companies.length}+</div>
                <div className="text-gray-600 font-medium">Specialist Agencies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">5,000+</div>
                <div className="text-gray-600 font-medium">Startup Roles Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">£75k</div>
                <div className="text-gray-600 font-medium">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">London</div>
                <div className="text-gray-600 font-medium">& UK Wide</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Startup Recruitment Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Why Work at a Startup?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Startups offer unparalleled opportunities for growth, impact, and wealth creation.
                The UK has Europe&apos;s largest startup ecosystem, with London, Manchester, and Bristol
                leading the charge in fintech, healthtech, and SaaS innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accelerated Growth</h3>
                <p className="text-gray-600">Learn faster, take on more responsibility, and progress your career at 2-3x the pace of corporate roles.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Equity Upside</h3>
                <p className="text-gray-600">Share in the company&apos;s success with stock options that could be worth multiples of your salary.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Impact</h3>
                <p className="text-gray-600">See your work directly affect the product, customers, and company trajectory from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Startup Recruitment Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialist agencies cover every function within the startup ecosystem,
                from technical hiring to commercial and operational leadership.
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
                    Leading Startup Recruitment Agencies
                  </h2>
                  <p className="text-gray-600">Top agencies specialising in startup and scale-up recruitment in the UK</p>
                </div>
                <Link href="/agencies" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition">
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
                          alt={`${company.name} - Startup recruitment agency`}
                          title="Startup recruitment agency"
                          className="h-10 w-auto"
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 flex-1">
                        {company.name}
                      </h3>
                      {company.global_rank && (
                        <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-100 text-violet-800">
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
                We&apos;ve done the research so you don&apos;t have to. Find the right recruitment agency for your startup career or hiring needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-xl p-8 border border-gray-200 card-hover">
                  <div className="w-16 h-16 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
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
        <section className="py-20 px-4 bg-violet-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                How to Find the Right Agency
              </h2>
              <p className="text-lg text-violet-100 max-w-2xl mx-auto">
                Your journey to finding the perfect startup recruitment agency starts here.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-black text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-violet-100">{item.description}</p>
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
                  <p className="text-gray-600">Industry insights and career guidance for startup professionals</p>
                </div>
                <Link href="/articles" className="text-violet-600 hover:text-violet-800 font-semibold">
                  View all articles &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article: any) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {article.featured_asset_url && (
                      <img src={article.featured_asset_url} alt={`${article.featured_asset_alt || article.title} - Startup recruitment`} title="Startup recruitment article" className="w-full h-48 object-cover" />
                    )}
                    <div className="p-6">
                      {article.article_angle && (
                        <span className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-3">
                          {article.article_angle}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/${article.slug}`} className="hover:text-violet-600">
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
                        <Link href={`/${article.slug}`} className="text-violet-600 hover:text-violet-800 font-medium">
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
              Startup Recruitment Agency Guide UK
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                A <strong>startup recruitment agency</strong> specialises in placing candidates at early-stage,
                venture-backed, and high-growth companies. Unlike generalist recruiters, they understand the unique
                culture, compensation structures (including equity), and pace of the startup world.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Why Use a Startup Recruitment Agency?
              </h3>
              <p className="mb-4">
                <strong>Startup roles</strong> require a different approach to hiring. The best candidates often
                aren&apos;t actively looking, and the right fit depends on cultural alignment as much as skills.
                A specialist <strong>startup recruitment agency</strong> has networks in the ecosystem and understands
                what makes someone thrive in a fast-paced environment.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Startup Jobs London
              </h3>
              <p className="mb-4">
                <strong>London</strong> is home to Europe&apos;s largest startup ecosystem, with over 50 unicorns
                and thousands of funded startups across fintech, healthtech, edtech, and SaaS. The city attracts
                global talent and offers unparalleled opportunities for startup careers.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Scale-Up Recruitment
              </h3>
              <p className="mb-4">
                <strong>Scale-ups</strong> (post-Series A companies) have different hiring needs than early-stage
                startups. They need experienced operators who can build processes and lead teams while maintaining
                the agility that got them to this stage. Our directory includes agencies that specialise in both.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-900 to-violet-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Find Your Agency?
            </h2>
            <p className="text-xl text-violet-100 mb-10">
              Browse our directory and find the best startup recruitment agency for your career or hiring needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/agencies" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse Agencies
              </Link>
              <Link href="/articles" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition">
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
                    <span className="text-violet-600 group-open:rotate-45 transition-transform text-xl">+</span>
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
                <span className="text-2xl font-black text-white">Rainmakrr</span>
                <span className="text-2xl font-black text-orange-400">Agency</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted directory for startup recruitment agencies across the UK.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Recruitment</h4>
              <ul className="space-y-2">
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">Startup Agencies</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">Tech Recruitment</Link></li>
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
                &copy; 2025 Rainmakrr Agency. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Startup Recruitment Agencies UK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
