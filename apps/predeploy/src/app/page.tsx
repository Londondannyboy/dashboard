import { Metadata } from 'next'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Forward Deployed Engineer Recruitment Agency UK 2025',
  description: 'Forward deployed engineer recruitment agency directory for the UK. Find the best forward deployed engineer jobs and FDE recruitment agencies in London and across Britain.',
  keywords: 'forward deployed engineer recruitment agency, forward deployed engineer jobs, FDE recruitment, forward deployed engineer UK, technical recruitment London',
}

const services = [
  { name: 'FDE Placement', icon: '🚀', description: 'Find exceptional Forward Deployed Engineers' },
  { name: 'Technical Assessment', icon: '💻', description: 'Evaluate candidates for client-facing technical roles' },
  { name: 'Startup Matching', icon: '🎯', description: 'Connect FDEs with high-growth companies' },
  { name: 'Salary Insights', icon: '📈', description: 'FDE salary benchmarks and market data' },
  { name: 'Career Advisory', icon: '💡', description: 'Strategic guidance for FDE careers' },
  { name: 'Onboarding Support', icon: '🤝', description: 'Ensure successful FDE placements' },
]

const benefits = [
  {
    icon: '🏆',
    title: 'Specialist Agencies',
    description: 'Only the most reputable forward deployed engineer recruitment agencies in the UK, vetted for quality and track record.',
  },
  {
    icon: '💷',
    title: 'Salary Benchmarks',
    description: 'Access comprehensive salary data for Forward Deployed Engineer roles across London and the UK tech sector.',
  },
  {
    icon: '🎓',
    title: 'Career Guidance',
    description: 'Expert advice on building your career as a Forward Deployed Engineer at top tech companies.',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Connect with agencies placing FDEs at Palantir, Scale AI, and other leading tech companies.',
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Browse Agencies',
    description: 'Explore our directory of leading forward deployed engineer recruitment agencies across the UK.',
  },
  {
    step: 2,
    title: 'Compare Specialists',
    description: 'Find agencies that specialise in FDE roles at enterprise software, AI, and deep tech companies.',
  },
  {
    step: 3,
    title: 'Connect Directly',
    description: 'Reach out to agencies that match your technical skills and experience level.',
  },
  {
    step: 4,
    title: 'Land Your Role',
    description: 'Work with expert recruiters who understand the Forward Deployed Engineer market.',
  },
]

const faqs = [
  {
    q: 'What is a Forward Deployed Engineer?',
    a: 'A Forward Deployed Engineer (FDE) is a technical role that combines software engineering with client-facing work. FDEs work directly with enterprise customers to implement, customise, and deploy software solutions. The role was pioneered by Palantir and has since been adopted by many tech companies including Scale AI, Anduril, and others.',
  },
  {
    q: 'How much do Forward Deployed Engineers earn in the UK?',
    a: 'Forward Deployed Engineer salaries in the UK typically range from £80,000 to £180,000+ depending on experience, company, and location. London-based FDE roles at companies like Palantir or Scale AI can exceed £200,000 with equity and bonuses included.',
  },
  {
    q: 'What skills do Forward Deployed Engineers need?',
    a: 'FDEs need strong software engineering skills (Python, Java, SQL), excellent communication abilities, and problem-solving aptitude. They must be comfortable working directly with clients, understanding business requirements, and translating them into technical solutions.',
  },
  {
    q: 'Which companies hire Forward Deployed Engineers?',
    a: 'Major employers of FDEs include Palantir, Scale AI, Anduril, Databricks, and other enterprise software and AI companies. Many UK-based tech firms are also creating FDE roles as they recognise the value of technical customer success.',
  },
  {
    q: 'How is an FDE different from a Solutions Engineer?',
    a: 'While similar, FDEs typically have deeper engineering responsibilities and often write production code for client deployments. Solutions Engineers focus more on pre-sales and demonstrations, while FDEs are embedded with customers for implementation and ongoing development.',
  },
  {
    q: 'Are Forward Deployed Engineer roles only in London?',
    a: 'While London has the highest concentration of FDE roles in the UK, opportunities exist across the country. Many FDE positions offer hybrid or remote working, though client travel may be required.',
  },
]

async function getHomepageData() {
  const sql = neon(process.env.DATABASE_URL!)

  const [homepageContent, companies, articles] = await Promise.all([
    sql`
      SELECT section_type, title, subtitle, content
      FROM homepage_content
      WHERE site = 'predeploy' AND is_active = true
      ORDER BY section_order ASC
    `,
    sql`
      SELECT id, name, slug, description, headquarters, logo_url, specializations, global_rank
      FROM companies
      WHERE app = 'predeploy' AND status = 'published'
      ORDER BY
        CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END,
        global_rank ASC NULLS LAST,
        name ASC
      LIMIT 9
    `,
    sql`
      SELECT id, title, excerpt, slug, published_at, created_at, article_angle, featured_asset_url, featured_asset_alt
      FROM articles
      WHERE app = 'predeploy' AND status = 'published'
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
              <span className="text-2xl font-black text-violet-900">Predeploy</span>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Quest</span>
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
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {companies.length}+ Top Recruitment Agencies Listed
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Forward Deployed Engineer Recruitment Agency
              </h1>
              <p className="text-xl text-violet-100 max-w-3xl mx-auto mb-10">
                {sections.hero?.subtitle || 'Find the best forward deployed engineer recruitment agency in the UK. Connect with specialist recruiters for FDE roles at Palantir, Scale AI, and leading tech companies.'}
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Search Forward Deployed Engineer Jobs</label>
                  <input
                    type="text"
                    placeholder="e.g. Forward Deployed Engineer, FDE, Solutions Engineer"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-end">
                  <Link href="/agencies" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-gray-500">Popular:</span>
                <Link href="/agencies" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">FDE Agencies</Link>
                <Link href="/agencies" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">Palantir Recruitment</Link>
                <Link href="/articles" className="text-sm text-violet-600 hover:text-violet-800 hover:underline">FDE Salary Guide</Link>
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
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">200+</div>
                <div className="text-gray-600 font-medium">FDE Roles Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">£120k</div>
                <div className="text-gray-600 font-medium">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-violet-900 mb-2">London</div>
                <div className="text-gray-600 font-medium">& UK Wide</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Forward Deployed Engineer Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What is a Forward Deployed Engineer?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A Forward Deployed Engineer (FDE) combines deep technical expertise with client-facing skills,
                working directly with enterprise customers to implement and customise software solutions. The role
                was pioneered by Palantir and has become highly sought-after across the tech industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Expert</h3>
                <p className="text-gray-600">Build and deploy production software solutions for enterprise clients with complex requirements.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Partner</h3>
                <p className="text-gray-600">Work embedded with customers to understand business needs and translate them into technical solutions.</p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center card-hover">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Accelerator</h3>
                <p className="text-gray-600">A launchpad to senior technical roles, product management, or founding your own startup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Forward Deployed Engineer Recruitment Agency Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A leading forward deployed engineer recruitment agency offers comprehensive services to match
                exceptional technical talent with outstanding tech companies across the UK.
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
                    Leading Forward Deployed Engineer Recruitment Agencies
                  </h2>
                  <p className="text-gray-600">Top agencies specialising in FDE and technical recruitment in the UK</p>
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
                          alt={`${company.name} - Forward deployed engineer recruitment agency`}
                          title="Forward deployed engineer recruitment agency"
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
                We&apos;ve done the research so you don&apos;t have to. Find the right recruitment agency for your Forward Deployed Engineer search.
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
                Your journey to finding the perfect forward deployed engineer recruitment agency starts here.
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
                  <p className="text-gray-600">Industry insights and career guidance for Forward Deployed Engineers</p>
                </div>
                <Link href="/articles" className="text-violet-600 hover:text-violet-800 font-semibold">
                  View all articles &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article: any) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {article.featured_asset_url && (
                      <img src={article.featured_asset_url} alt={`${article.featured_asset_alt || article.title} - Forward deployed engineer recruitment agency`} title="Forward deployed engineer recruitment agency article" className="w-full h-48 object-cover" />
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
              Forward Deployed Engineer Recruitment Agency Guide
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                A <strong>forward deployed engineer recruitment agency</strong> specialises in placing candidates in one of the most
                demanding and rewarding roles in tech. Forward Deployed Engineers combine exceptional software engineering skills
                with client-facing abilities, working directly with enterprise customers to solve complex technical challenges.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Why Use a Forward Deployed Engineer Recruitment Agency?
              </h3>
              <p className="mb-4">
                <strong>Forward Deployed Engineer roles</strong> are highly specialised, and generic recruiters often lack
                the network and expertise to source the best candidates. A specialist <strong>forward deployed engineer recruitment agency</strong> understands the unique requirements of FDE positions
                at companies like Palantir, Scale AI, and Anduril.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Forward Deployed Engineer Jobs London
              </h3>
              <p className="mb-4">
                <strong>London</strong> is the UK&apos;s primary hub for <strong>forward deployed engineer jobs</strong>, with strong
                demand from defence tech, enterprise software, and AI companies. Every leading <strong>forward deployed
                engineer recruitment agency</strong> in the UK has a London presence to serve this market.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Technical Recruitment for FDEs
              </h3>
              <p className="mb-4">
                Many <strong>forward deployed engineer recruitment agency</strong> firms also specialise in related roles like
                Solutions Engineers, Technical Account Managers, and Field Engineers. These roles share similar skill requirements
                and career paths, making specialist recruiters valuable partners.
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
              Browse our directory and find the best forward deployed engineer recruitment agency for your FDE job search.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/agencies" className="bg-white text-violet-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition">
                Browse Agencies
              </Link>
              <Link href="/articles" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg transition">
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
                <span className="text-2xl font-black text-white">Predeploy</span>
                <span className="text-2xl font-black text-cyan-400">Quest</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted directory for forward deployed engineer recruitment agencies across the UK.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Recruitment</h4>
              <ul className="space-y-2">
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">FDE Agencies</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">Technical Recruitment</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">London Agencies</Link></li>
                <li><Link href="/agencies" className="text-gray-400 hover:text-white transition">All Agencies</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">Articles & Guides</Link></li>
                <li><Link href="/articles" className="text-gray-400 hover:text-white transition">FDE Salary Guide</Link></li>
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
                &copy; 2025 Predeploy Quest. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Forward Deployed Engineer Recruitment Agencies UK
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
