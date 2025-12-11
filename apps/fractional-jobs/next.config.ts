import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@quest/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Role pages - 301 redirects from old URLs to new SEO-friendly URLs
      { source: '/cfo', destination: '/fractional-cfo-jobs', permanent: true },
      { source: '/cmo', destination: '/fractional-cmo-jobs', permanent: true },
      { source: '/cto', destination: '/fractional-cto-jobs', permanent: true },
      { source: '/coo', destination: '/fractional-coo-jobs', permanent: true },
      { source: '/hr', destination: '/fractional-hr-jobs', permanent: true },

      // Location pages - 301 redirects from old URLs
      { source: '/london', destination: '/fractional-jobs-london', permanent: true },
      { source: '/remote', destination: '/fractional-jobs-remote', permanent: true },

      // Legacy URL redirects
      { source: '/jobs', destination: '/fractional-jobs', permanent: true },
      { source: '/articles', destination: '/fractional-jobs-articles', permanent: true },
    ]
  },
}

export default nextConfig
