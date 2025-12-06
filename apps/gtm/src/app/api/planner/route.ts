import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// Lazy initialization to avoid build-time errors
function getOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set')
  }
  return new OpenAI({ apiKey })
}

interface PlannerInput {
  product: string
  targetAudience: string
  problem: string
  solution: string
  budget?: string
  timeline?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: PlannerInput = await request.json()

    if (!body.product || !body.targetAudience || !body.problem || !body.solution) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const prompt = `You are an expert go-to-market strategist. Generate a comprehensive GTM plan based on the following information:

Product/Service: ${body.product}
Target Audience: ${body.targetAudience}
Problem Solved: ${body.problem}
Solution: ${body.solution}
${body.budget ? `Marketing Budget: ${body.budget}` : ''}
${body.timeline ? `Launch Timeline: ${body.timeline}` : ''}

Generate a detailed GTM plan in the following JSON structure:
{
  "executive_summary": "2-3 sentence overview of the GTM strategy",
  "target_market": {
    "segments": ["array of 3-4 target market segments"],
    "icp": "Detailed ideal customer profile description",
    "pain_points": ["array of 4-5 key pain points"]
  },
  "positioning": {
    "value_proposition": "Clear value proposition statement",
    "differentiators": ["array of 3-4 key differentiators"],
    "messaging": "Core messaging framework"
  },
  "channels": [
    {
      "name": "Channel name",
      "strategy": "Brief strategy for this channel",
      "priority": "high|medium|low"
    }
  ],
  "timeline": [
    {
      "phase": "Phase name",
      "duration": "Duration (e.g., 'Weeks 1-4')",
      "activities": ["array of 3-4 key activities"]
    }
  ],
  "metrics": [
    {
      "kpi": "KPI name",
      "target": "Target value"
    }
  ]
}

Include 5-6 marketing channels, 4 timeline phases, and 6 key metrics. Make recommendations specific and actionable.`

    const openai = getOpenAI()
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a senior go-to-market strategist with 20+ years of experience launching B2B and B2C products. Respond only with valid JSON.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Invalid JSON response')
    }

    const plan = JSON.parse(jsonMatch[0])

    return NextResponse.json({ plan }, {
      headers: { 'Cache-Control': 'no-store' }
    })

  } catch (error) {
    console.error('Error generating GTM plan:', error)
    return NextResponse.json(
      { error: 'Failed to generate GTM plan' },
      { status: 500 }
    )
  }
}
