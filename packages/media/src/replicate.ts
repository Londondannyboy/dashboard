/**
 * Replicate AI image generation integration.
 */

import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
})

export interface GenerateImageOptions {
  prompt: string
  negativePrompt?: string
  width?: number
  height?: number
  model?: string
  numOutputs?: number
}

export interface GeneratedImage {
  url: string
  width: number
  height: number
}

/**
 * Generate an image using Replicate's FLUX model.
 */
export async function generateImage(options: GenerateImageOptions): Promise<GeneratedImage[]> {
  const {
    prompt,
    negativePrompt,
    width = 1024,
    height = 1024,
    model = 'black-forest-labs/flux-schnell',
    numOutputs = 1,
  } = options

  try {
    const output = await replicate.run(model as `${string}/${string}`, {
      input: {
        prompt,
        negative_prompt: negativePrompt,
        width,
        height,
        num_outputs: numOutputs,
      },
    })

    // Output is typically an array of URLs
    const urls = Array.isArray(output) ? output : [output]

    return urls.map((url) => ({
      url: String(url),
      width,
      height,
    }))
  } catch (error) {
    console.error('Replicate image generation error:', error)
    throw error
  }
}

/**
 * Generate a profile avatar using Replicate.
 */
export async function generateAvatar(name: string): Promise<GeneratedImage> {
  const prompt = `Professional headshot portrait of a person named ${name}, photorealistic, high quality, studio lighting, neutral background`

  const images = await generateImage({
    prompt,
    width: 512,
    height: 512,
    numOutputs: 1,
  })

  return images[0]
}

/**
 * Generate an article hero image.
 */
export async function generateArticleImage(
  title: string,
  description?: string
): Promise<GeneratedImage> {
  const prompt = `Professional editorial photograph for article: "${title}". ${description || ''} High quality, professional photography, suitable for news article.`

  const images = await generateImage({
    prompt,
    width: 1200,
    height: 630, // OG image dimensions
    numOutputs: 1,
  })

  return images[0]
}

/**
 * Check if Replicate is configured.
 */
export function isReplicateConfigured(): boolean {
  return Boolean(process.env.REPLICATE_API_TOKEN)
}
