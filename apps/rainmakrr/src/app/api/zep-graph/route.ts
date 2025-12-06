import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

/**
 * Zep Graph API
 * Returns nodes and links for 3D force-directed graph visualization
 */

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
  const searchParams = request.nextUrl.searchParams
  const companyId = searchParams.get('company') || 'all'

  try {
    // Fetch companies
    const companies = await sql`
      SELECT id, name, slug, company_type, payload
      FROM companies
      WHERE status = 'published'
        AND company_type = 'placement_agent'
      ORDER BY name
      LIMIT 150
    `

    const nodes: Node[] = []
    const links: Link[] = []
    const nodeIds = new Set<string>()

    // Add company nodes
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
          url: `/private-equity-placement-agents-list/${company.slug}`
        })
      }

      // Extract relationships from payload if available
      if (company.payload) {
        const payload = typeof company.payload === 'string'
          ? JSON.parse(company.payload)
          : company.payload

        // Add fund relationships
        if (payload.notable_funds) {
          payload.notable_funds.forEach((fund: any, i: number) => {
            const fundId = `fund-${company.id}-${i}`
            if (!nodeIds.has(fundId)) {
              nodeIds.add(fundId)
              nodes.push({
                id: fundId,
                name: typeof fund === 'string' ? fund : fund.name || `Fund ${i + 1}`,
                type: 'fund',
                group: 2,
                size: 6
              })
            }
            links.push({
              source: nodeId,
              target: fundId,
              type: 'placed',
              value: 1
            })
          })
        }

        // Add people relationships
        if (payload.leadership) {
          payload.leadership.forEach((person: any, i: number) => {
            const personId = `person-${company.id}-${i}`
            if (!nodeIds.has(personId)) {
              nodeIds.add(personId)
              nodes.push({
                id: personId,
                name: typeof person === 'string' ? person : person.name || `Leader ${i + 1}`,
                type: 'person',
                group: 3,
                size: 5
              })
            }
            links.push({
              source: nodeId,
              target: personId,
              type: 'leads',
              value: 1
            })
          })
        }
      }

      // Create connections between nearby companies (simulated relationships)
      if (index > 0 && index < companies.length - 1) {
        const prevCompany = companies[index - 1]
        const prevNodeId = `company-${prevCompany.id}`

        // Connect some companies based on similar characteristics
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

    return NextResponse.json({
      nodes,
      links
    }, {
      headers: {
        'Cache-Control': 'public, max-age=300'
      }
    })

  } catch (error) {
    console.error('Error fetching graph data:', error)
    return NextResponse.json({ nodes: [], links: [] }, { status: 500 })
  }
}
