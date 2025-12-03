import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@stackframe/stack', '@stackframe/stack-shared'],
}

export default nextConfig
