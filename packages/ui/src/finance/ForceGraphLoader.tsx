'use client'

import { useEffect, useState } from 'react'

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
    // Check if already loaded
    if (typeof window !== 'undefined' && (window as any).ForceGraph3D) {
      setLoaded(true)
      onLoad?.()
      return
    }

    // Load 3d-force-graph script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/3d-force-graph@1.79.0/dist/3d-force-graph.min.js'
    script.async = true
    script.onload = () => {
      setLoaded(true)
      onLoad?.()
    }
    script.onerror = () => {
      console.error('Failed to load 3d-force-graph library')
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup not needed - script stays loaded
    }
  }, [onLoad])

  return null
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
