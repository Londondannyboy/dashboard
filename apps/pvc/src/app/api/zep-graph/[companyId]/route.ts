import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

/**
 * API endpoint for Zep knowledge graph data
 * Returns graph nodes and edges for interactive visualization
 */

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params

  // Handle "all" for full network view
  if (companyId === 'all') {
    return getFullNetwork()
  }

  // Try to fetch real data from database
  try {
    const companies = await sql`
      SELECT
        name,
        slug,
        payload
      FROM companies
      WHERE slug = ${companyId}
      LIMIT 1
    `

    if (companies.length > 0) {
      const company = companies[0] as any
      const payload = company.payload || {}
      const sections = payload.profile_sections || {}

      // Build graph from real profile data
      const nodes: any[] = []
      const edges: any[] = []
      let nodeId = 1

      // Add company as central node
      nodes.push({
        id: String(nodeId++),
        label: company.name,
        group: 'company',
        size: 40
      })

      // Extract deals from profile sections
      if (sections.deals && sections.deals.content) {
        const dealsContent = sections.deals.content
        const dealLines = dealsContent.split('\n').filter((line: string) =>
          line.trim().startsWith('•') || line.trim().startsWith('-')
        )

        dealLines.slice(0, 6).forEach((line: string) => {
          let dealText = line.trim().replace(/^[•-]\s*/, '')
          const boldMatch = dealText.match(/\*\*\[?([^\]*]+)/)
          if (boldMatch) {
            dealText = boldMatch[1].replace(/\]\(.*$/, '')
          }
          const valueMatch = line.match(/\$[\d,.]+\s*[BMK](?:illion)?/i)
          const value = valueMatch ? valueMatch[0] : null
          dealText = dealText.substring(0, 45)
          if (dealText.length === 45) dealText += '...'

          if (dealText) {
            nodes.push({
              id: String(nodeId),
              label: dealText,
              group: 'deal',
              title: value ? `Deal Size: ${value}` : 'Deal'
            })
            edges.push({
              from: '1',
              to: String(nodeId),
              label: value || 'Advised'
            })
            nodeId++
          }
        })
      }

      // Extract headquarters
      if (payload.headquarters_city && payload.headquarters_country) {
        nodes.push({
          id: String(nodeId),
          label: `${payload.headquarters_city}, ${payload.headquarters_country}`,
          group: 'entity'
        })
        edges.push({
          from: '1',
          to: String(nodeId),
          label: 'Headquartered'
        })
        nodeId++
      }

      // Add industry
      if (payload.industry) {
        nodes.push({
          id: String(nodeId),
          label: payload.industry,
          group: 'entity'
        })
        edges.push({
          from: '1',
          to: String(nodeId),
          label: 'Industry'
        })
        nodeId++
      }

      // Extract team members
      if (sections.team && sections.team.content) {
        const teamContent = sections.team.content
        const personMatches = teamContent.match(/\*\*([^*,]+(?:,\s*[^*]+)?)\*\*/g) || []

        personMatches.slice(0, 4).forEach((match: string) => {
          const personText = match.replace(/\*\*/g, '')
          const nameParts = personText.split(',')
          const name = nameParts[0].trim()
          const title = nameParts[1] ? nameParts[1].trim() : null

          if (name && name.length > 2 && name.length < 40) {
            nodes.push({
              id: String(nodeId),
              label: name,
              group: 'person',
              title: title || 'Team Member'
            })
            edges.push({
              from: '1',
              to: String(nodeId),
              label: title ? title.substring(0, 20) : 'Team'
            })
            nodeId++
          }
        })
      }

      // Add founded year
      if (payload.founded_year) {
        nodes.push({
          id: String(nodeId),
          label: `Founded ${payload.founded_year}`,
          group: 'entity'
        })
        edges.push({
          from: '1',
          to: String(nodeId),
          label: 'Established'
        })
        nodeId++
      }

      return NextResponse.json({ type: 'data', nodes, edges })
    }
  } catch (error) {
    console.error('Error fetching graph data:', error)
  }

  // Return empty graph for unknown companies
  return NextResponse.json({ type: 'data', nodes: [], edges: [] })
}

async function getFullNetwork() {
  try {
    // Fetch all companies for full network view
    const companies = await sql`
      SELECT id, name, slug, headquarters, specializations
      FROM companies
      WHERE status = 'published' AND company_type = 'placement_agent'
      ORDER BY global_rank ASC NULLS LAST, name ASC
      LIMIT 100
    `

    const nodes: any[] = []
    const edges: any[] = []

    // Central node
    nodes.push({
      id: 'center',
      label: 'PE/VC Network',
      group: 'company',
      size: 50
    })

    // Add company nodes
    companies.forEach((company: any, i: number) => {
      const nodeId = `company-${company.id}`
      nodes.push({
        id: nodeId,
        label: company.name,
        group: 'company',
        url: `/private-equity-placement-agents-list/${company.slug}`,
        hasArticle: true
      })

      // Connect to center
      edges.push({
        from: 'center',
        to: nodeId,
        label: ''
      })

      // Connect nearby companies (create clusters)
      if (i > 0 && i % 5 !== 0) {
        edges.push({
          from: `company-${companies[i - 1].id}`,
          to: nodeId,
          label: ''
        })
      }
    })

    return NextResponse.json({ type: 'data', nodes, edges })
  } catch (error) {
    console.error('Error fetching full network:', error)
    return NextResponse.json({ type: 'data', nodes: [], edges: [] })
  }
}
