import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  async redirects() {
    // Redirect old URL patterns to new structure
    const regions = [
      'us',
      'uk',
      'europe',
      'asia-pacific',
      'north-america',
      'latin-america',
      'middle-east',
      'africa',
      'singapore',
    ]

    return regions.map((region) => ({
      source: `/top-private-equity-placement-agents-${region}`,
      destination: `/top-private-equity-placement-agents/${region}`,
      permanent: true,
    }))
  },
}

export default nextConfig
