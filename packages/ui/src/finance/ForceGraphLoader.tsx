'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

/**
 * ForceGraphLoader - Loads the 3d-force-graph library
 *
 * Include this component once in your layout to load the required libraries
 * for ZepGraph3D and DealTimeline3D components.
 */

interface ForceGraphLoaderProps {
  onLoad?: () => void
}

export function ForceGraphLoader({ onLoad }: ForceGraphLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded && onLoad) {
      onLoad()
    }
  }, [loaded, onLoad])

  return (
    <>
      <Script
        src="https://unpkg.com/3d-force-graph@1.79.0"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
      {/* Optional: vis-network for 2D network graphs */}
      <Script
        src="https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js"
        strategy="lazyOnload"
      />
    </>
  )
}

/**
 * Hook to check if ForceGraph3D is loaded
 */
export function useForceGraphReady(): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const check = () => {
      if (typeof window !== 'undefined' && (window as any).ForceGraph3D) {
        setReady(true)
        return true
      }
      return false
    }

    if (check()) return

    const interval = setInterval(() => {
      if (check()) {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return ready
}
