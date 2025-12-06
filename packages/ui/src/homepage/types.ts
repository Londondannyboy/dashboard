/**
 * Shared types for Quest homepage components
 */

export interface HomepageConfig {
  site: 'rainmakrr' | 'placement' | 'pvc'
  brandName: string
  brandAccent: string
  brandGradient: string
  signInGradient: string
  accentColor: 'indigo' | 'emerald' | 'blue'
  heroPlaybackId?: string
  navItems: Array<{ href: string; label: string; highlight?: boolean }>
  productLinks: Array<{ href: string; label: string }>
  companyLinks: Array<{ href: string; label: string }>
  brandDescription: string
  directoryPath: string // e.g. '/private-equity-placement-agents-list' or '/directory'
}

export interface HomepageSection {
  section_type: string
  title: string
  subtitle: string
  content: any
}

export interface Article {
  id: number
  title: string
  excerpt: string
  slug: string
  published_at: string
  created_at: string
  article_angle: string
  featured_asset_url: string
  video_playback_id: string
}

export interface Company {
  id: number
  name: string
  slug: string
  description: string
  logo_url: string
  headquarters: string
  specializations: string[]
  global_rank: number
  featured_asset_url: string
}

export interface HomepageData {
  sections: {
    intro?: HomepageSection
    role?: HomepageSection
    top_agents?: HomepageSection
    how_it_works?: HomepageSection
    fee_structures?: HomepageSection
    selection?: HomepageSection
    trends?: HomepageSection
    why_use?: HomepageSection
    faq?: HomepageSection
  }
  leadArticle: Article | null
  featuredArticles: Article[]
  articles: Article[]
  companies: Company[]
}
