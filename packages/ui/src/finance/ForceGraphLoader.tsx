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

const SCRIPT_ID = 'force-graph-3d-script'

export function ForceGraphLoader({ onLoad }: ForceGraphLoaderProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Safety check for SSR
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    try {
      // Check if already loaded
      if ((window as any).ForceGraph3D) {
        setLoaded(true)
        onLoad?.()
        return
      }

      // Check if script already exists
      if (document.getElementById(SCRIPT_ID)) {
        // Script exists but not loaded yet - wait for it
        const checkLoaded = setInterval(() => {
          if ((window as any).ForceGraph3D) {
            clearInterval(checkLoaded)
            setLoaded(true)
            onLoad?.()
          }
        }, 100)

        // Timeout after 10 seconds
        setTimeout(() => clearInterval(checkLoaded), 10000)
        return
      }

      // Load 3d-force-graph script
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://unpkg.com/3d-force-graph@1.73.3/dist/3d-force-graph.min.js'
      script.async = true
      script.onload = () => {
        setLoaded(true)
        onLoad?.()
      }
      script.onerror = () => {
        console.error('Failed to load 3d-force-graph library')
      }
      document.head.appendChild(script)
    } catch (err) {
      console.error('ForceGraphLoader error:', err)
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
