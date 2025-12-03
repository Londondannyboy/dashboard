// Replicate - AI image generation
export {
  generateImage,
  generateAvatar,
  generateArticleImage,
  isReplicateConfigured,
} from './replicate.js'
export type { GenerateImageOptions, GeneratedImage } from './replicate.js'

// Cloudinary - Image storage and CDN
export {
  uploadFromUrl,
  uploadBuffer,
  getImageUrl,
  getOptimizedImageUrl,
  getThumbnailUrl as getCloudinaryThumbnailUrl,
  getOgImageUrl,
  deleteImage,
  isCloudinaryConfigured,
} from './cloudinary.js'
export type { ImageTransforms, UploadResult } from './cloudinary.js'

// Mux - Video hosting
export {
  createUploadUrl,
  createAssetFromUrl,
  getAsset,
  deleteAsset,
  getVideoUrl,
  getThumbnailUrl as getMuxThumbnailUrl,
  getGifUrl,
  isMuxConfigured,
} from './mux.js'
export type { VideoAsset, UploadOptions } from './mux.js'
