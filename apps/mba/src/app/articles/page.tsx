import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MBA Articles & Guides | Expert Advice for Business School | MBA Quest',
  description: 'Expert articles, guides, and resources for MBA applicants. Learn about GMAT prep, application tips, career outcomes, and how to choose the right MBA program.',
  keywords: 'MBA articles, MBA guides, GMAT preparation, MBA application tips, business school advice, MBA career guide, MBA salary guide',
}

const articles = [
  {
    slug: 'online-mba-vs-campus-mba',
    title: 'Online MBA vs Campus MBA: Which Is Right for You?',
    excerpt: 'A comprehensive comparison of online and traditional MBA programs, examining career outcomes, networking, costs, and learning experience.',
    category: 'Comparison',
    readTime: '8 min read',
    date: 'December 2024',
    featured: true,
  },
  {
    slug: 'mba-accreditations-guide',
    title: 'Understanding MBA Accreditations: AACSB, AMBA, and EQUIS',
    excerpt: 'Learn what business school accreditations mean and why they matter for your MBA decision.',
    category: 'Guide',
    readTime: '6 min read',
    date: 'December 2024',
    featured: true,
  },
  {
    slug: 'best-online-mba-uk-2025',
    title: 'Best Online MBA Programs in the UK for 2025',
    excerpt: 'Our definitive ranking of the top online MBA programs available from UK business schools.',
    category: 'Rankings',
    readTime: '10 min read',
    date: 'December 2024',
    featured: true,
  },
  {
    slug: 'mba-salary-guide',
    title: 'MBA Salary Guide 2025: Expected Earnings by Industry',
    excerpt: 'Detailed breakdown of MBA salaries across industries, roles, and regions worldwide.',
    category: 'Career',
    readTime: '7 min read',
    date: 'November 2024',
    featured: false,
  },
  {
    slug: 'gmat-guide',
    title: 'Complete GMAT Preparation Guide for MBA Applicants',
    excerpt: 'Everything you need to know about GMAT preparation, scoring, and whether you need it.',
    category: 'Admissions',
    readTime: '12 min read',
    date: 'November 2024',
    featured: false,
  },
  {
    slug: 'mba-application-tips',
    title: 'MBA Application Tips: How to Stand Out',
    excerpt: 'Expert advice on essays, recommendations, interviews, and building a compelling application.',
    category: 'Admissions',
    readTime: '9 min read',
    date: 'November 2024',
    featured: false,
  },
  {
    slug: 'executive-mba-guide',
    title: 'Executive MBA Guide: Is an EMBA Right for You?',
    excerpt: 'Understand the differences between Executive MBA and traditional MBA programs.',
    category: 'Guide',
    readTime: '7 min read',
    date: 'October 2024',
    featured: false,
  },
  {
    slug: 'mba-financing-options',
    title: 'How to Finance Your MBA: Scholarships, Loans, and Employer Sponsorship',
    excerpt: 'Comprehensive guide to funding your MBA education without breaking the bank.',
    category: 'Finance',
    readTime: '8 min read',
    date: 'October 2024',
    featured: false,
  },
  {
    slug: 'mba-career-change',
    title: 'Using Your MBA for a Career Change: Success Stories and Strategies',
    excerpt: 'How to leverage your MBA to pivot into a new industry or function.',
    category: 'Career',
    readTime: '6 min read',
    date: 'October 2024',
    featured: false,
  },
]

const categories = ['All', 'Guide', 'Rankings', 'Career', 'Admissions', 'Finance', 'Comparison']

export default function ArticlesPage() {
  const featuredArticles = articles.filter(a => a.featured)
  const otherArticles = articles.filter(a => !a.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-blue-900">MBA</span>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Quest</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
              <Link href="/programs" className="text-gray-700 hover:text-blue-900 font-medium">All Programs</Link>
              <Link href="/compare" className="text-gray-700 hover:text-blue-900 font-medium">Compare</Link>
              <Link href="/articles" className="text-blue-900 font-semibold">Articles</Link>
            </div>

            <Link href="/programs" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg transition">
              Find Your MBA
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        {/* Page Header */}
        <section className="bg-gray-50 py-12 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              MBA Articles & Guides
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Expert insights, comprehensive guides, and the latest news to help you navigate
              your MBA journey from application to graduation.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    category === 'All'
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                    <span className="text-white/30 text-6xl font-black">MBA</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-900 transition mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                    <p className="text-gray-400 text-xs mt-4">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">All Articles</h2>
            <div className="space-y-4">
              {otherArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="flex flex-col md:flex-row md:items-center gap-4 bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 hover:text-blue-900 transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{article.excerpt}</p>
                  </div>
                  <div className="text-gray-400 text-sm md:text-right shrink-0">
                    {article.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-blue-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Stay Updated on MBA Insights
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for the latest MBA rankings, application tips, and career advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-400 focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black text-white">MBA</span>
              <span className="text-xl font-black text-amber-400">Quest</span>
            </Link>
            <p className="text-gray-400 text-sm">
              &copy; 2025 MBA Quest. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
