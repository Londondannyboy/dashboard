'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ForceGraph3D from 'react-force-graph-3d'

export interface GraphNode {
  id: string
  name: string
  type: string
  color?: string
  size?: number
  metadata?: Record<string, unknown>
}

export interface GraphLink {
  source: string
  target: string
  type: string
  strength?: number
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

interface KnowledgeGraph3DProps {
  data: GraphData
  width?: number
  height?: number
  onNodeClick?: (node: GraphNode) => void
  onNodeHover?: (node: GraphNode | null) => void
  backgroundColor?: string
  nodeColors?: Record<string, string>
  className?: string
}

const DEFAULT_NODE_COLORS: Record<string, string> = {
  user: '#3B82F6', // blue
  destination: '#10B981', // green
  article: '#F59E0B', // amber
  fact: '#8B5CF6', // purple
  company: '#EF4444', // red
  job: '#EC4899', // pink
  default: '#6B7280', // gray
}

export function KnowledgeGraph3D({
  data,
  width,
  height,
  onNodeClick,
  onNodeHover,
  backgroundColor = '#0a0a0a',
  nodeColors = DEFAULT_NODE_COLORS,
  className = '',
}: KnowledgeGraph3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: width || 800, height: height || 600 })

  // Update dimensions on resize
  useEffect(() => {
    if (width && height) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: width || containerRef.current.clientWidth,
          height: height || containerRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width, height])

  // Get node color based on type
  const getNodeColor = useCallback(
    (node: GraphNode) => {
      return node.color || nodeColors[node.type] || nodeColors.default
    },
    [nodeColors]
  )

  // Handle node click
  const handleNodeClick = useCallback(
    (node: object) => {
      const graphNode = node as GraphNode
      onNodeClick?.(graphNode)
    },
    [onNodeClick]
  )

  // Handle node hover
  const handleNodeHover = useCallback(
    (node: object | null) => {
      onNodeHover?.(node as GraphNode | null)
    },
    [onNodeHover]
  )

  // Format graph data
  const graphData = {
    nodes: data.nodes.map((node) => ({
      ...node,
      color: getNodeColor(node),
      val: node.size || 1,
    })),
    links: data.links.map((link) => ({
      ...link,
      value: link.strength || 1,
    })),
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <ForceGraph3D
        graphData={graphData}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor={backgroundColor}
        nodeLabel={(node: object) => (node as GraphNode).name}
        nodeColor={(node: object) => (node as { color: string }).color}
        nodeVal={(node: object) => (node as { val: number }).val}
        linkColor={() => 'rgba(255,255,255,0.2)'}
        linkWidth={(link: object) => (link as { value: number }).value}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        enableNodeDrag={true}
        enableNavigationControls={true}
        showNavInfo={false}
      />
    </div>
  )
}

// Hook to fetch graph data from ZEP
export function useGraphData(graphId: string, apiEndpoint = '/api/graph') {
  const [data, setData] = useState<GraphData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiEndpoint}/${graphId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch graph data')
        }
        const graphData = await response.json()
        setData(graphData)
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)))
      } finally {
        setLoading(false)
      }
    }

    if (graphId) {
      fetchData()
    }
  }, [graphId, apiEndpoint])

  return { data, loading, error }
}
