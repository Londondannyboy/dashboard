import { Metadata } from 'next'
import { HomepageLayout } from '@quest/ui/homepage'
import type { HomepageConfig, HomepageData, HomepageSection, Article, Company } from '@quest/ui/homepage'
import { sql } from '../lib/db'

export const metadata: Metadata = {
  title: 'Private Equity Placement Agents | Rainmakrr - The Insider Guide',
  description: 'The insider guide to private equity placement agents. Top PE placement agent rankings, fund placement news, deal flow intelligence, and market insights for fund managers and investors.',
  openGraph: {
    title: 'Private Equity Placement Agents | Rainmakrr',
    description: 'The insider guide to private equity placement agents. Rankings, news, and market intelligence.',
  },
}

const config: HomepageConfig = {
  site: 'rainmakrr',
  brandName: 'Rainmakrr',
  brandAccent: 'Quest',
  brandGradient: 'from-blue-400 to-indigo-500',
  signInGradient: 'from-blue-500 to-indigo-500',
  accentColor: 'blue',
  brandDescription: 'The insider guide to private equity placement agents',
  directoryPath: '/private-equity-placement-agents-list',
  navItems: [
    { href: '/private-equity-placement-agent-news', label: 'News' },
    { href: '/private-equity-placement-agents-list', label: 'Directory' },
    { href: '/complete-guide-private-equity-placement-agents-2025', label: 'Guides' },
    { href: '/ecosystem', label: 'Network' },
  ],
  productLinks: [
    { label: 'Placement Agent Directory', href: '/private-equity-placement-agents-list' },
    { label: 'Top Placement Agents', href: '/top-private-equity-placement-agents-2025' },
    { label: 'Placement Agent Fees', href: '/placement-agent-fees-private-equity' },
    { label: 'PE Firms London', href: '/largest-private-equity-firms-london' },
    { label: 'Top 100 PE Firms UK', href: '/top-100-private-equity-firms-uk-2025' },
    { label: 'Mid-Market PE Europe', href: '/mid-market-private-equity-firms-europe' },
  ],
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
}

async function fetchHomepageData(): Promise<HomepageData> {
  const homepageContent = await sql`
    SELECT section_type, title, subtitle, content
    FROM homepage_content
    WHERE site = 'rainmakrr' AND is_active = true
    ORDER BY section_order ASC
  ` as HomepageSection[]

  const sections = {
    intro: homepageContent.find(s => s.section_type === 'intro'),
    role: homepageContent.find(s => s.section_type === 'role'),
    top_agents: homepageContent.find(s => s.section_type === 'top_agents'),
    how_it_works: homepageContent.find(s => s.section_type === 'how_it_works'),
    fee_structures: homepageContent.find(s => s.section_type === 'fee_structures'),
    selection: homepageContent.find(s => s.section_type === 'selection'),
    trends: homepageContent.find(s => s.section_type === 'trends'),
    why_use: homepageContent.find(s => s.section_type === 'why_use'),
    faq: homepageContent.find(s => s.section_type === 'faq'),
  }

  const leadArticles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published' AND is_featured = true
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 2
  ` as Article[]

  const leadArticle = leadArticles[1] || leadArticles[0] || null

  const featuredArticles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published' AND is_featured = true
      ${leadArticle ? sql`AND id != ${leadArticle.id}` : sql``}
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 2
  ` as Article[]

  const articles = await sql`
    SELECT id, title, excerpt, slug, published_at, created_at,
      article_angle, featured_asset_url, video_playback_id
    FROM articles
    WHERE app = 'rainmakrr' AND status = 'published'
      AND (is_featured = false OR is_featured IS NULL)
    ORDER BY COALESCE(published_at, created_at) DESC
    LIMIT 12
  ` as Article[]

  const companies = await sql`
    SELECT id, name, slug, description, logo_url, headquarters, specializations, global_rank, featured_asset_url
    FROM companies
    WHERE status = 'published' AND company_type = 'placement_agent'
    ORDER BY CASE WHEN global_rank IS NOT NULL THEN 0 ELSE 1 END, global_rank ASC NULLS LAST, name ASC
  ` as Company[]

  return {
    sections,
    leadArticle,
    featuredArticles,
    articles,
    companies,
  }
}

export default async function HomePage() {
  const data = await fetchHomepageData()
  return <HomepageLayout config={config} data={data} />
}
