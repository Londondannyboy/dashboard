import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

interface Node {
  id: string
  name: string
  type: 'company' | 'person' | 'fund' | 'deal'
  group: number
  size: number
  url?: string
}

interface Link {
  source: string
  target: string
  type: string
  value: number
}

export async function GET(request: NextRequest) {
  try {
    const companies = await sql`
      SELECT id, name, slug, company_type, payload
      FROM companies
      WHERE status = 'published'
        AND company_type = 'gtm_provider'
      ORDER BY name
      LIMIT 150
    `

    const nodes: Node[] = []
    const links: Link[] = []
    const nodeIds = new Set<string>()

    companies.forEach((company: any, index: number) => {
      const nodeId = `company-${company.id}`
      if (!nodeIds.has(nodeId)) {
        nodeIds.add(nodeId)
        nodes.push({
          id: nodeId,
          name: company.name,
          type: 'company',
          group: 1,
          size: 10,
          url: `/directory/${company.slug}`
        })
      }

      // Create some random connections for visualization
      if (index > 0 && index < companies.length - 1) {
        const prevCompany = companies[index - 1]
        const prevNodeId = `company-${prevCompany.id}`
        if (Math.random() > 0.7) {
          links.push({
            source: nodeId,
            target: prevNodeId,
            type: 'partner',
            value: 0.5
          })
        }
      }
    })

    return NextResponse.json({ nodes, links }, {
      headers: { 'Cache-Control': 'public, max-age=300' }
    })

  } catch (error) {
    console.error('Error fetching graph data:', error)
    return NextResponse.json({ nodes: [], links: [] }, { status: 500 })
  }
}
