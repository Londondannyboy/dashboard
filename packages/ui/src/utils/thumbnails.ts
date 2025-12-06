/**
 * Shared thumbnail/image utilities for Quest apps
 */

export interface ArticleForThumbnail {
  video_playback_id?: string | null
  featured_asset_url?: string | null
}

export interface CompanyForImage {
  logo_url?: string | null
  featured_asset_url?: string | null
  name?: string
}

export function getThumbnail(article: ArticleForThumbnail): string | null {
  if (article.video_playback_id) {
    return `https://image.mux.com/${article.video_playback_id}/thumbnail.webp?time=1&width=400`
  }
  return article.featured_asset_url || null
}

export function getCompanyImage(company: CompanyForImage): { url: string | null; type: 'logo' | 'image' | 'placeholder' } {
  if (company.logo_url) return { url: company.logo_url, type: 'logo' }
  if (company.featured_asset_url) return { url: company.featured_asset_url, type: 'image' }
  return { url: null, type: 'placeholder' }
}
