/**
 * Cloudinary image storage and CDN integration.
 */

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || ''
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || ''
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || ''
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET || ''

export interface ImageTransforms {
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'crop'
  quality?: number | 'auto'
  format?: 'auto' | 'webp' | 'png' | 'jpg'
  gravity?: 'auto' | 'face' | 'center'
}

export interface UploadResult {
  publicId: string
  url: string
  secureUrl: string
  width: number
  height: number
  format: string
}

/**
 * Upload an image from a URL to Cloudinary.
 */
export async function uploadFromUrl(
  imageUrl: string,
  options?: {
    folder?: string
    publicId?: string
    tags?: string[]
  }
): Promise<UploadResult> {
  const formData = new FormData()
  formData.append('file', imageUrl)
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

  if (options?.folder) {
    formData.append('folder', options.folder)
  }
  if (options?.publicId) {
    formData.append('public_id', options.publicId)
  }
  if (options?.tags) {
    formData.append('tags', options.tags.join(','))
  }

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error(`Cloudinary upload failed: ${response.statusText}`)
  }

  const data = await response.json()

  return {
    publicId: data.public_id,
    url: data.url,
    secureUrl: data.secure_url,
    width: data.width,
    height: data.height,
    format: data.format,
  }
}

/**
 * Upload an image buffer to Cloudinary.
 */
export async function uploadBuffer(
  buffer: Buffer,
  options?: {
    folder?: string
    publicId?: string
    tags?: string[]
  }
): Promise<UploadResult> {
  const base64 = buffer.toString('base64')
  const dataUri = `data:image/png;base64,${base64}`
  return uploadFromUrl(dataUri, options)
}

/**
 * Generate a Cloudinary URL with transformations.
 */
export function getImageUrl(publicId: string, transforms?: ImageTransforms): string {
  const transformations: string[] = []

  if (transforms?.width) {
    transformations.push(`w_${transforms.width}`)
  }
  if (transforms?.height) {
    transformations.push(`h_${transforms.height}`)
  }
  if (transforms?.crop) {
    transformations.push(`c_${transforms.crop}`)
  }
  if (transforms?.quality) {
    transformations.push(`q_${transforms.quality}`)
  }
  if (transforms?.format) {
    transformations.push(`f_${transforms.format}`)
  }
  if (transforms?.gravity) {
    transformations.push(`g_${transforms.gravity}`)
  }

  const transformString = transformations.length > 0
    ? transformations.join(',') + '/'
    : ''

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}${publicId}`
}

/**
 * Get an optimized image URL for web.
 */
export function getOptimizedImageUrl(publicId: string, width?: number): string {
  return getImageUrl(publicId, {
    width,
    quality: 'auto',
    format: 'auto',
  })
}

/**
 * Get a thumbnail URL.
 */
export function getThumbnailUrl(publicId: string, size = 200): string {
  return getImageUrl(publicId, {
    width: size,
    height: size,
    crop: 'fill',
    gravity: 'auto',
    quality: 'auto',
    format: 'auto',
  })
}

/**
 * Get an OG image URL (1200x630).
 */
export function getOgImageUrl(publicId: string): string {
  return getImageUrl(publicId, {
    width: 1200,
    height: 630,
    crop: 'fill',
    quality: 'auto',
    format: 'auto',
  })
}

/**
 * Delete an image from Cloudinary.
 */
export async function deleteImage(publicId: string): Promise<boolean> {
  const timestamp = Math.round(Date.now() / 1000)
  const signature = await generateSignature(publicId, timestamp)

  const formData = new FormData()
  formData.append('public_id', publicId)
  formData.append('signature', signature)
  formData.append('api_key', CLOUDINARY_API_KEY)
  formData.append('timestamp', timestamp.toString())

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/destroy`,
    {
      method: 'POST',
      body: formData,
    }
  )

  return response.ok
}

/**
 * Generate a signature for authenticated requests.
 */
async function generateSignature(publicId: string, timestamp: number): Promise<string> {
  const str = `public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`

  // Use Web Crypto API for hashing
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hashBuffer = await crypto.subtle.digest('SHA-1', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Check if Cloudinary is configured.
 */
export function isCloudinaryConfigured(): boolean {
  return Boolean(CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET)
}
