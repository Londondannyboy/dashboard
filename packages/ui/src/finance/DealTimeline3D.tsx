'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false,
  loading: () => null
})

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
  name: string
  group: string
  val: number
  color: string
  date?: string
  value?: number
}

interface TimelineLink {
  source: string
  target: string
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

const sampleDeals: Deal[] = [
  { id: 1, title: 'PAG $8.3B China Mall Deal', date: '2025-11', type: 'deal', value: 8300, company: 'PAG' },
  { id: 2, title: 'UK Healthcare £500M Opportunity', date: '2025-10', type: 'deal', value: 500 },
  { id: 3, title: 'Ares €2B Plenitude Investment', date: '2025-09', type: 'deal', value: 2000, company: 'Ares' },
  { id: 4, title: 'PE Rising Stars 2025', date: '2025-08', type: 'news' },
  { id: 5, title: 'Ares GP Stakes Launch', date: '2025-07', type: 'event', company: 'Ares' },
  { id: 6, title: 'Real Madrid 5% Stake', date: '2025-06', type: 'deal', value: 500 },
]

export function DealTimeline3D({
  height = '400px',
  maxDeals = 20,
  apiEndpoint = '/api/deals-timeline',
  deals: propDeals,
  onDealClick,
}: DealTimeline3DProps) {
  const [graphData, setGraphData] = useState<{ nodes: TimelineNode[], links: TimelineLink[] } | null>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ dealCount: 0, totalValue: 0 })

  useEffect(() => {
    async function loadData() {
      let deals: Deal[] = propDeals || []

      if (!deals.length && apiEndpoint) {
        try {
          const response = await fetch(apiEndpoint)
          if (response.ok) {
            deals = await response.json()
          }
        } catch {
          // Use sample data
        }
      }

      if (!deals.length) {
        deals = sampleDeals
      }

      // Create nodes and links
      const nodes: TimelineNode[] = []
      const links: TimelineLink[] = []

      // Central node
      nodes.push({
        id: 'center',
        name: 'Deal Flow',
        group: 'center',
        val: 25,
        color: categoryColors.center,
      })

      // Add deal nodes
      deals.slice(0, maxDeals).forEach((deal, i) => {
        const val = deal.value ? Math.log10(deal.value + 1) * 3 + 5 : 8

        nodes.push({
          id: `deal-${deal.id}`,
          name: deal.title,
          group: deal.type,
          date: deal.date,
          value: deal.value,
          val,
          color: categoryColors[deal.type] || categoryColors.deal,
        })

        links.push({
          source: 'center',
          target: `deal-${deal.id}`,
        })

        if (i > 0) {
          links.push({
            source: `deal-${deals[i - 1].id}`,
            target: `deal-${deal.id}`,
          })
        }
      })

      // Stats
      const dealCount = deals.filter(d => d.type === 'deal').length
      const totalValue = deals.reduce((sum, d) => sum + (d.value || 0), 0)
      setStats({ dealCount, totalValue })

      setGraphData({ nodes, links })
      setLoading(false)
    }

    loadData()
  }, [apiEndpoint, propDeals, maxDeals])

  return (
    <div className="w-full relative" style={{ height }}>
      <div
        className="w-full h-full rounded-2xl overflow-hidden"
        style={{ background: 'rgba(15, 23, 42, 0.8)' }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border-3 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mx-auto mb-3" />
              <p className="text-slate-400 text-sm">Loading timeline...</p>
            </div>
          </div>
        )}

        {!loading && graphData && (
          <ForceGraph3D
            graphData={graphData}
            backgroundColor="rgba(0,0,0,0)"
            nodeColor={(node: any) => node.color}
            nodeVal={(node: any) => node.val}
            nodeLabel={(node: any) => node.name}
            nodeOpacity={0.9}
            linkColor={() => 'rgba(99, 102, 241, 0.3)'}
            linkWidth={1}
            onNodeClick={(node: any) => {
              if (node.id !== 'center' && onDealClick) {
                onDealClick(node)
              }
            }}
            enableNodeDrag={false}
          />
        )}
      </div>

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
          <div className="text-indigo-400 font-medium">
            ${(stats.totalValue / 1000).toFixed(1)}B+
          </div>
        </div>
      )}
    </div>
  )
}
