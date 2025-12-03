import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: [
    '@quest/db',
    '@quest/auth',
    '@quest/ai',
    '@quest/ui',
    '@quest/media',
  ],
}

export default nextConfig
