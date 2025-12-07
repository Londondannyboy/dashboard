import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'em-content.zobj.net',
        pathname: '/source/apple/**',
      },
    ],
  },
}

export default nextConfig
