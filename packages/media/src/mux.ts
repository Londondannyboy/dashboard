/**
 * Mux video hosting integration.
 */

const MUX_TOKEN_ID = process.env.MUX_TOKEN_ID || ''
const MUX_TOKEN_SECRET = process.env.MUX_TOKEN_SECRET || ''
const MUX_API_BASE = 'https://api.mux.com'

function getHeaders(): Record<string, string> {
  const credentials = Buffer.from(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`).toString('base64')
  return {
    Authorization: `Basic ${credentials}`,
    'Content-Type': 'application/json',
  }
}

export interface VideoAsset {
  id: string
  status: 'preparing' | 'ready' | 'errored'
  playbackId: string
  duration: number
  aspectRatio: string
}

export interface UploadOptions {
  corsOrigin?: string
  newAssetSettings?: {
    playbackPolicy?: ('public' | 'signed')[]
    mp4Support?: 'none' | 'standard' | 'capped-1080p'
  }
}

/**
 * Create a direct upload URL for video upload.
 */
export async function createUploadUrl(options?: UploadOptions): Promise<{
  uploadUrl: string
  uploadId: string
}> {
  const response = await fetch(`${MUX_API_BASE}/video/v1/uploads`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      cors_origin: options?.corsOrigin || '*',
      new_asset_settings: {
        playback_policy: options?.newAssetSettings?.playbackPolicy || ['public'],
        mp4_support: options?.newAssetSettings?.mp4Support || 'standard',
      },
    }),
  })

  if (!response.ok) {
    throw new Error(`Mux upload creation failed: ${response.statusText}`)
  }

  const data = await response.json()

  return {
    uploadUrl: data.data.url,
    uploadId: data.data.id,
  }
}

/**
 * Create an asset from a URL.
 */
export async function createAssetFromUrl(
  videoUrl: string,
  options?: UploadOptions['newAssetSettings']
): Promise<VideoAsset> {
  const response = await fetch(`${MUX_API_BASE}/video/v1/assets`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      input: videoUrl,
      playback_policy: options?.playbackPolicy || ['public'],
      mp4_support: options?.mp4Support || 'standard',
    }),
  })

  if (!response.ok) {
    throw new Error(`Mux asset creation failed: ${response.statusText}`)
  }

  const data = await response.json()
  const asset = data.data

  return {
    id: asset.id,
    status: asset.status,
    playbackId: asset.playback_ids?.[0]?.id || '',
    duration: asset.duration || 0,
    aspectRatio: asset.aspect_ratio || '16:9',
  }
}

/**
 * Get an asset by ID.
 */
export async function getAsset(assetId: string): Promise<VideoAsset | null> {
  const response = await fetch(`${MUX_API_BASE}/video/v1/assets/${assetId}`, {
    headers: getHeaders(),
  })

  if (!response.ok) {
    if (response.status === 404) {
      return null
    }
    throw new Error(`Mux asset fetch failed: ${response.statusText}`)
  }

  const data = await response.json()
  const asset = data.data

  return {
    id: asset.id,
    status: asset.status,
    playbackId: asset.playback_ids?.[0]?.id || '',
    duration: asset.duration || 0,
    aspectRatio: asset.aspect_ratio || '16:9',
  }
}

/**
 * Delete an asset.
 */
export async function deleteAsset(assetId: string): Promise<boolean> {
  const response = await fetch(`${MUX_API_BASE}/video/v1/assets/${assetId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })

  return response.ok
}

/**
 * Get the video playback URL.
 */
export function getVideoUrl(playbackId: string): string {
  return `https://stream.mux.com/${playbackId}.m3u8`
}

/**
 * Get a video thumbnail URL.
 */
export function getThumbnailUrl(
  playbackId: string,
  options?: {
    time?: number
    width?: number
    height?: number
    fitMode?: 'preserve' | 'stretch' | 'crop' | 'smartcrop' | 'pad'
  }
): string {
  const params = new URLSearchParams()

  if (options?.time !== undefined) {
    params.set('time', options.time.toString())
  }
  if (options?.width) {
    params.set('width', options.width.toString())
  }
  if (options?.height) {
    params.set('height', options.height.toString())
  }
  if (options?.fitMode) {
    params.set('fit_mode', options.fitMode)
  }

  const queryString = params.toString()
  return `https://image.mux.com/${playbackId}/thumbnail.jpg${queryString ? `?${queryString}` : ''}`
}

/**
 * Get an animated GIF preview URL.
 */
export function getGifUrl(
  playbackId: string,
  options?: {
    start?: number
    end?: number
    width?: number
    fps?: number
  }
): string {
  const params = new URLSearchParams()

  if (options?.start !== undefined) {
    params.set('start', options.start.toString())
  }
  if (options?.end !== undefined) {
    params.set('end', options.end.toString())
  }
  if (options?.width) {
    params.set('width', options.width.toString())
  }
  if (options?.fps) {
    params.set('fps', options.fps.toString())
  }

  const queryString = params.toString()
  return `https://image.mux.com/${playbackId}/animated.gif${queryString ? `?${queryString}` : ''}`
}

/**
 * Check if Mux is configured.
 */
export function isMuxConfigured(): boolean {
  return Boolean(MUX_TOKEN_ID && MUX_TOKEN_SECRET)
}
