// Pexels API Client
// API Key: PEXELS_API_KEY environment variable
// Docs: https://www.pexels.com/api/documentation/

const PEXELS_BASE_URL = 'https://api.pexels.com'

interface PexelsVideo {
  id: number
  width: number
  height: number
  duration: number
  url: string
  image: string
  user: {
    name: string
    url: string
  }
  video_files: Array<{
    id: number
    quality: string
    file_type: string
    width: number
    height: number
    link: string
  }>
  video_pictures: Array<{
    id: number
    picture: string
  }>
}

interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  alt: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
}

interface PexelsVideoResponse {
  page: number
  per_page: number
  total_results: number
  videos: PexelsVideo[]
}

interface PexelsPhotoResponse {
  page: number
  per_page: number
  total_results: number
  photos: PexelsPhoto[]
}

function getApiKey(): string {
  const key = process.env.PEXELS_API_KEY
  if (!key) {
    throw new Error('PEXELS_API_KEY environment variable is not set')
  }
  return key
}

export async function searchPexelsVideos(
  query: string,
  options: { perPage?: number; orientation?: 'landscape' | 'portrait' | 'square' } = {}
): Promise<PexelsVideo[]> {
  const { perPage = 5, orientation = 'landscape' } = options

  const params = new URLSearchParams({
    query,
    per_page: String(perPage),
    orientation,
  })

  const res = await fetch(`${PEXELS_BASE_URL}/videos/search?${params}`, {
    headers: { Authorization: getApiKey() },
    next: { revalidate: 86400 }, // Cache for 24 hours
  })

  if (!res.ok) {
    console.error(`Pexels video search failed: ${res.status}`)
    return []
  }

  const data: PexelsVideoResponse = await res.json()
  return data.videos || []
}

export async function searchPexelsPhotos(
  query: string,
  options: { perPage?: number; orientation?: 'landscape' | 'portrait' | 'square' } = {}
): Promise<PexelsPhoto[]> {
  const { perPage = 10, orientation = 'landscape' } = options

  const params = new URLSearchParams({
    query,
    per_page: String(perPage),
    orientation,
  })

  const res = await fetch(`${PEXELS_BASE_URL}/v1/search?${params}`, {
    headers: { Authorization: getApiKey() },
    next: { revalidate: 86400 }, // Cache for 24 hours
  })

  if (!res.ok) {
    console.error(`Pexels photo search failed: ${res.status}`)
    return []
  }

  const data: PexelsPhotoResponse = await res.json()
  return data.photos || []
}

// Get best video URL (prefer HD quality)
export function getBestVideoUrl(video: PexelsVideo): string {
  const hdFile = video.video_files.find(
    (f) => f.quality === 'hd' && f.file_type === 'video/mp4'
  )
  const sdFile = video.video_files.find(
    (f) => f.quality === 'sd' && f.file_type === 'video/mp4'
  )
  return hdFile?.link || sdFile?.link || video.video_files[0]?.link || ''
}

// Get video thumbnail
export function getVideoThumbnail(video: PexelsVideo): string {
  return video.image || video.video_pictures[0]?.picture || ''
}

// Helper to get media for a country - tries video first, falls back to photos
export async function getCountryMedia(countryName: string): Promise<{
  type: 'video' | 'photo'
  url: string
  thumbnailUrl: string
  alt: string
  photographer: string
  photographerUrl: string
}> {
  // Try videos first (preferred)
  const videos = await searchPexelsVideos(`${countryName} landscape aerial`, { perPage: 3 })
  if (videos.length > 0) {
    const video = videos[0]
    return {
      type: 'video',
      url: getBestVideoUrl(video),
      thumbnailUrl: getVideoThumbnail(video),
      alt: `${countryName} landscape footage`,
      photographer: video.user.name,
      photographerUrl: video.user.url,
    }
  }

  // Fall back to photos
  const photos = await searchPexelsPhotos(`${countryName} landscape travel`, { perPage: 5 })
  if (photos.length > 0) {
    const photo = photos[0]
    return {
      type: 'photo',
      url: photo.src.large2x || photo.src.large,
      thumbnailUrl: photo.src.medium,
      alt: photo.alt || `${countryName} landscape`,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    }
  }

  // Last resort - generic relocation image
  return {
    type: 'photo',
    url: '',
    thumbnailUrl: '',
    alt: countryName,
    photographer: '',
    photographerUrl: '',
  }
}

export type { PexelsVideo, PexelsPhoto }
