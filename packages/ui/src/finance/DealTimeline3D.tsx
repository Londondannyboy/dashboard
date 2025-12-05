'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

/**
 * Deal Timeline 3D Visualization
 *
 * Creates an interactive 3D timeline of deals and news events using 3d-force-graph
 * Events are positioned in 3D space based on time, category, and importance
 */

declare global {
  interface Window {
    ForceGraph3D: any
  }
}

interface Deal {
  id: string | number
  title: string
  date: string
  type: 'deal' | 'news' | 'event' | 'company'
  value?: number
  company?: string
}

interface TimelineNode {
  id: string
  label: string
  group: string
  date?: string
  value?: number
  company?: string
  val: number
  color: string
  fx?: number
  fy?: number
  fz?: number
  x?: number
  y?: number
  z?: number
  name?: string
}

interface TimelineLink {
  source: string
  target: string
  value: number
}

export interface DealTimeline3DProps {
  height?: string
  maxDeals?: number
  apiEndpoint?: string
  deals?: Deal[]
  onDealClick?: (deal: TimelineNode) => void
}

const categoryColors: Record<string, string> = {
  deal: '#ef4444',
  news: '#3b82f6',
  event: '#f59e0b',
  company: '#10b981',
  center: '#6366f1',
}

// Default sample data when no API is available
const sampleDeals: Deal[] = [
  { id: 1, title: 'PAG $8.3B China Mall Deal', date: '2025-11', type: 'deal', value: 8300, company: 'PAG' },
  { id: 2, title: 'UK Healthcare £500M Opportunity', date: '2025-10', type: 'deal', value: 500, company: 'Various' },
  { id: 3, title: 'Ares €2B Plenitude Investment', date: '2025-09', type: 'deal', value: 2000, company: 'Ares Management' },
  { id: 4, title: 'PE Rising Stars 2025', date: '2025-08', type: 'news', value: 0, company: 'Industry' },
  { id: 5, title: 'Ares GP Stakes Launch', date: '2025-07', type: 'event', value: 0, company: 'Ares' },
  { id: 6, title: 'Real Madrid 5% Stake', date: '2025-06', type: 'deal', value: 500, company: 'Real Madrid' },
  { id: 7, title: 'Inspiro Acquires Remit', date: '2025-05', type: 'deal', value: 100, company: 'Inspiro' },
  { id: 8, title: 'Legal PE Transformation', date: '2025-04', type: 'news', value: 0, company: 'Legal Sector' },
]

export function DealTimeline3D({
  height = '400px',
  maxDeals = 20,
  apiEndpoint = '/api/deals-timeline',
  deals: propDeals,
  onDealClick,
}: DealTimeline3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ dealCount: 0, totalValue: 0, minDate: '', maxDate: '' })
  const animationRef = useRef<number | undefined>(undefined)

  const initTimeline = useCallback(async () => {
    if (!containerRef.current) return

    // Wait for ForceGraph3D
    const waitForLib = (): Promise<boolean> => {
      return new Promise((resolve) => {
        let attempts = 0
        const check = setInterval(() => {
          attempts++
          if (typeof window.ForceGraph3D !== 'undefined') {
            clearInterval(check)
            resolve(true)
          } else if (attempts >= 60) {
            clearInterval(check)
            resolve(false)
          }
        }, 100)
      })
    }

    await waitForLib()

    try {
      let deals: Deal[] = propDeals || []

      // Fetch from API if no props provided
      if (!deals.length && apiEndpoint) {
        try {
          const response = await fetch(apiEndpoint)
          if (response.ok) {
            deals = await response.json()
          }
        } catch {
          // Use sample data as fallback
        }
      }

      // Use sample data if still empty
      if (!deals.length) {
        deals = sampleDeals
      }

      // Create nodes and links
      const nodes: TimelineNode[] = []
      const links: TimelineLink[] = []

      // Sort by date
      deals.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      // Time range
      const dates = deals.map(d => new Date(d.date).getTime())
      const minDate = Math.min(...dates)
      const maxDate = Math.max(...dates)
      const timeRange = maxDate - minDate || 1

      // Update stats
      const dealCount = deals.filter(d => d.type === 'deal').length
      const totalValue = deals.reduce((sum, d) => sum + (d.value || 0), 0)
      setStats({
        dealCount,
        totalValue,
        minDate: new Date(minDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        maxDate: new Date(maxDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      })

      // Central timeline node
      nodes.push({
        id: 'timeline',
        label: 'Deal Flow',
        group: 'center',
        fx: 0,
        fy: 0,
        fz: 0,
        val: 20,
        color: categoryColors.center,
        name: 'Deal Flow',
      })

      // Add deal nodes
      deals.slice(0, maxDeals).forEach((deal, i) => {
        const date = new Date(deal.date).getTime()
        const timeFactor = timeRange > 0 ? (date - minDate) / timeRange : 0.5

        const theta = timeFactor * Math.PI * 1.5
        const radius = 25 + (i % 3) * 5

        const x = Math.cos(theta) * radius
        const y = (deal.type === 'deal' ? 2 : deal.type === 'news' ? 0 : -2) * 10 + Math.sin(i) * 3
        const z = Math.sin(theta) * radius

        const val = deal.value ? Math.log10(deal.value + 1) * 3 + 4 : 5

        nodes.push({
          id: `deal-${deal.id}`,
          label: deal.title,
          group: deal.type,
          date: deal.date,
          value: deal.value,
          company: deal.company,
          x,
          y,
          z,
          val,
          color: categoryColors[deal.type] || categoryColors.deal,
          name: deal.title,
        })

        // Link to timeline
        links.push({
          source: 'timeline',
          target: `deal-${deal.id}`,
          value: 1,
        })

        // Link to adjacent deals
        if (i > 0) {
          links.push({
            source: `deal-${deals[i - 1].id}`,
            target: `deal-${deal.id}`,
            value: 0.5,
          })
        }
      })

      // Add company nodes
      const companies = [...new Set(deals.map(d => d.company).filter(c => c && c !== 'Various' && c !== 'Industry'))]
      companies.slice(0, 8).forEach((company, i) => {
        const angle = (i / companies.length) * Math.PI * 2
        const radius = 40

        nodes.push({
          id: `company-${i}`,
          label: company!,
          group: 'company',
          fx: Math.cos(angle) * radius,
          fy: -8,
          fz: Math.sin(angle) * radius,
          val: 8,
          color: categoryColors.company,
          name: company,
        })

        // Link companies to their deals
        deals.forEach(deal => {
          if (deal.company === company) {
            links.push({
              source: `company-${i}`,
              target: `deal-${deal.id}`,
              value: 0.3,
            })
          }
        })
      })

      setLoading(false)

      // Create 3D graph
      const Graph = window.ForceGraph3D()(containerRef.current)
        .graphData({ nodes, links })
        .backgroundColor('rgba(0,0,0,0)')
        .nodeColor((node: TimelineNode) => node.color)
        .nodeVal((node: TimelineNode) => node.val)
        .nodeOpacity(0.9)
        .nodeRelSize(5)
        .linkColor(() => 'rgba(99, 102, 241, 0.25)')
        .linkWidth(1)
        .linkDirectionalParticles(1)
        .linkDirectionalParticleSpeed(0.003)
        .linkDirectionalParticleWidth(1.5)
        .enableNodeDrag(false)
        .onNodeHover((node: TimelineNode | null) => {
          if (containerRef.current) {
            containerRef.current.style.cursor = node ? 'pointer' : 'default'
          }
        })
        .onNodeClick((node: TimelineNode) => {
          if (node && node.id !== 'timeline') {
            if (onDealClick) {
              onDealClick(node)
            } else {
              console.log('Clicked:', node.label)
            }
          }
        })
        .nodeLabel((node: TimelineNode) => {
          if (node.id === 'timeline') return ''
          return `
            <div style="background: rgba(15,23,42,0.95); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(99,102,241,0.5); max-width: 280px;">
              <div style="font-weight: 600; margin-bottom: 4px; color: ${node.color};">${node.label}</div>
              ${node.date ? `<div style="color: #94a3b8;">Date: ${new Date(node.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>` : ''}
              ${node.value ? `<div style="color: #10b981; font-weight: 600;">$${node.value >= 1000 ? (node.value / 1000).toFixed(1) + 'B' : node.value + 'M'}</div>` : ''}
              ${node.company ? `<div style="color: #64748b; font-size: 0.7rem;">${node.company}</div>` : ''}
            </div>
          `
        })

      // Configure forces
      Graph.d3Force('charge')?.strength(-100)
      Graph.d3Force('link')?.distance(30)
      Graph.warmupTicks(50)
      Graph.cooldownTicks(20)

      // Camera position
      setTimeout(() => {
        Graph.cameraPosition({ x: 60, y: 50, z: 60 }, { x: 0, y: 0, z: 0 }, 1500)
      }, 500)

      // Slow rotation
      let angle = 0
      const animate = () => {
        angle += 0.002
        Graph.cameraPosition({
          x: Math.sin(angle) * 70,
          y: 40,
          z: Math.cos(angle) * 70,
        })
        animationRef.current = requestAnimationFrame(animate)
      }
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate)
      }, 2000)

      graphRef.current = Graph
    } catch (error) {
      console.error('Error initializing deal timeline:', error)
      setLoading(false)
    }
  }, [maxDeals, apiEndpoint, propDeals, onDealClick])

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initTimeline()
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px' }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initTimeline])

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full rounded-2xl border border-slate-700/50 relative overflow-hidden"
        style={{
          height,
          background: 'rgba(15, 23, 42, 0.8)',
        }}
      >
        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-400 text-sm">Loading deal timeline...</p>
            </div>
          </div>
        )}

        {/* Legend */}
        {!loading && (
          <div className="absolute top-3 left-3 bg-black/70 px-3 py-2 rounded-lg text-[10px] z-10">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-slate-300">Deals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-slate-300">News</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Companies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-slate-300">Events</span>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        {!loading && stats.dealCount > 0 && (
          <div className="absolute top-3 right-3 bg-black/70 px-3 py-2 rounded-lg text-[11px] text-slate-400 z-10">
            <div>{stats.dealCount} Deals</div>
            <div className="text-indigo-400">
              ${(stats.totalValue / 1000).toFixed(1)}B+
            </div>
          </div>
        )}

        {/* Timeline axis */}
        {!loading && (
          <div className="absolute bottom-5 left-12 right-12">
            <div className="flex justify-between items-center border-t-2 border-indigo-500/40">
              <span className="text-[10px] text-slate-500 -translate-y-1/2 bg-slate-900/90 px-1">
                {stats.minDate}
              </span>
              <span className="text-[10px] text-slate-500 -translate-y-1/2 bg-slate-900/90 px-1">
                Timeline
              </span>
              <span className="text-[10px] text-slate-500 -translate-y-1/2 bg-slate-900/90 px-1">
                {stats.maxDate}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
