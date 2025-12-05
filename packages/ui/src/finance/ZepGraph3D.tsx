'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

/**
 * Zep 3D Force Graph Visualization Component
 *
 * Renders an interactive 3D WebGL force-directed graph showing company relationships
 * using 3d-force-graph library (Three.js based)
 */

declare global {
  interface Window {
    ForceGraph3D: any
  }
}

interface GraphNode {
  id: string
  label?: string
  name?: string
  group: string
  val: number
  url?: string
  hasArticle?: boolean
  x?: number
  y?: number
  z?: number
  color?: string
}

interface GraphLink {
  source: string
  target: string
  label?: string
  value?: number
}

interface GraphData {
  nodes: Array<{
    id: string
    label: string
    group?: string
    url?: string
    hasArticle?: boolean
  }>
  edges: Array<{
    from: string
    to: string
    label?: string
  }>
}

export interface ZepGraph3DProps {
  companyId: string
  companyName: string
  height?: string
  apiEndpoint?: string
  onNodeClick?: (node: GraphNode) => void
}

const groupColors: Record<string, string> = {
  company: '#3b82f6',   // Blue
  deal: '#a855f7',      // Purple
  person: '#10b981',    // Green
  article: '#f59e0b',   // Amber
  entity: '#64748b',    // Gray
  default: '#6366f1'    // Indigo
}

export function ZepGraph3D({
  companyId,
  companyName,
  height = '500px',
  apiEndpoint = '/api/zep-graph',
  onNodeClick,
}: ZepGraph3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const animationRef = useRef<number | undefined>(undefined)

  const initGraph = useCallback(async () => {
    if (!containerRef.current) return

    // Wait for ForceGraph3D to load
    const waitForLib = (): Promise<boolean> => {
      return new Promise((resolve) => {
        let attempts = 0
        const maxAttempts = 60
        const check = setInterval(() => {
          attempts++
          if (typeof window.ForceGraph3D !== 'undefined') {
            clearInterval(check)
            resolve(true)
          } else if (attempts >= maxAttempts) {
            clearInterval(check)
            resolve(false)
          }
        }, 100)
      })
    }

    const loaded = await waitForLib()
    if (!loaded) {
      console.warn('3d-force-graph library failed to load')
      setLoading(false)
      setError(true)
      return
    }

    try {
      // Fetch graph data
      const response = await fetch(`${apiEndpoint}/${companyId}`)
      if (!response.ok) throw new Error('Failed to fetch graph data')

      const graphData: GraphData = await response.json()

      if (!graphData.nodes || graphData.nodes.length === 0) {
        setLoading(false)
        setError(true)
        return
      }

      // Transform data for 3d-force-graph
      const nodes: GraphNode[] = graphData.nodes.map(node => ({
        id: node.id,
        name: node.label,
        group: node.group || 'default',
        val: node.label === companyName ? 30 : 15,
        url: node.url,
        hasArticle: node.hasArticle || !!node.url || node.group === 'company'
      }))

      const links: GraphLink[] = graphData.edges.map(edge => ({
        source: edge.from,
        target: edge.to,
        label: edge.label || ''
      }))

      setLoading(false)

      // Create 3D force graph
      const Graph = window.ForceGraph3D()(containerRef.current)
        .graphData({ nodes, links })
        .backgroundColor('rgba(0,0,0,0)')
        .nodeLabel((node: GraphNode) => `<div style="background: rgba(15,23,42,0.95); padding: 8px 12px; border-radius: 6px; color: #e2e8f0; font-size: 12px; border: 1px solid rgba(99,102,241,0.3);">
          <strong>${node.name}</strong>
          ${node.hasArticle ? '<br><span style="color: #a5b4fc; font-size: 10px;">Click to explore</span>' : ''}
        </div>`)
        .nodeColor((node: GraphNode) => groupColors[node.group] || groupColors.default)
        .nodeVal((node: GraphNode) => node.val)
        .nodeOpacity(0.9)
        .nodeRelSize(6)
        .linkColor(() => 'rgba(99, 102, 241, 0.4)')
        .linkWidth(1.5)
        .linkOpacity(0.6)
        .linkDirectionalArrowLength(4)
        .linkDirectionalArrowColor(() => 'rgba(99, 102, 241, 0.6)')
        .linkLabel((link: GraphLink) => link.label)
        .enableNodeDrag(true)
        .enableNavigationControls(true)
        .showNavInfo(false)
        .width(containerRef.current.offsetWidth)
        .height(containerRef.current.offsetHeight)

      // Add particle effects on links
      Graph.linkDirectionalParticles(2)
        .linkDirectionalParticleSpeed(0.005)
        .linkDirectionalParticleColor(() => 'rgba(165, 180, 252, 0.8)')
        .linkDirectionalParticleWidth(2)

      // Click handler
      Graph.onNodeClick((node: GraphNode) => {
        if (onNodeClick) {
          onNodeClick(node)
        } else if (node.hasArticle || node.url) {
          if (node.url) {
            window.location.href = node.url
          } else if (node.group === 'company') {
            const slug = (node.name || '')
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '')
            window.location.href = `/private-equity-placement-agents-list/${slug}`
          }
        }
      })

      // Hover effects
      Graph.onNodeHover((node: GraphNode | null) => {
        if (containerRef.current) {
          containerRef.current.style.cursor = node && (node.hasArticle || node.url) ? 'pointer' : 'grab'
        }
      })

      // Auto-rotate slowly
      let angle = 0
      const rotateGraph = () => {
        angle += 0.002
        Graph.cameraPosition({
          x: 200 * Math.sin(angle),
          z: 200 * Math.cos(angle)
        })
        animationRef.current = requestAnimationFrame(rotateGraph)
      }
      // Start rotation after stabilization
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(rotateGraph)
      }, 3000)

      graphRef.current = Graph

      // Handle resize
      const resizeObserver = new ResizeObserver(() => {
        if (containerRef.current && graphRef.current) {
          graphRef.current.width(containerRef.current.offsetWidth)
          graphRef.current.height(containerRef.current.offsetHeight)
        }
      })
      resizeObserver.observe(containerRef.current)

      return () => {
        resizeObserver.disconnect()
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    } catch (err) {
      console.error('Error loading 3D graph:', err)
      setLoading(false)
      setError(true)
    }
  }, [companyId, companyName, apiEndpoint, onNodeClick])

  useEffect(() => {
    // Lazy load with IntersectionObserver
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initGraph()
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '100px' }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initGraph])

  return (
    <div className="relative" style={{ width: '100%', height }}>
      <div
        ref={containerRef}
        className="w-full h-full rounded-xl overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1a 100%)',
        }}
      >
        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-indigo-300 text-sm">Loading 3D graph...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <svg className="w-12 h-12 text-indigo-500 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3m18 0a9 9 0 01-9 9m-9-9a9 9 0 019-9" />
            </svg>
            <p className="text-indigo-300 text-sm">3D visualization coming soon</p>
          </div>
        )}
      </div>

      {/* Controls hint */}
      {!loading && !error && (
        <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-2 rounded-lg text-[11px] text-slate-400 z-10">
          <span className="mr-3">🖱️ Drag to rotate</span>
          <span className="mr-3">🔍 Scroll to zoom</span>
          <span>👆 Click node to explore</span>
        </div>
      )}

      {/* Color Legend */}
      {!loading && !error && (
        <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-2 rounded-lg text-[10px] z-10 flex flex-wrap gap-2 max-w-[280px]">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span className="text-slate-400">Company</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_6px_#a855f7]" />
            <span className="text-slate-400">Deals</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
            <span className="text-slate-400">People</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500 shadow-[0_0_6px_#64748b]" />
            <span className="text-slate-400">Info</span>
          </div>
        </div>
      )}
    </div>
  )
}
