import { NextRequest } from 'next/server'
import OpenAI from 'openai'
import {
  getMessagesForOpenAI,
  addMessage,
  setThreadContext,
} from './messageStore'

// Initialize OpenAI client pointing to C1 API
const openai = new OpenAI({
  apiKey: process.env.THESYS_API_KEY,
  baseURL: 'https://api.thesys.dev/v1/embed',
})

// Tool definitions for relocation assistant
const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_country_info',
      description: 'Search for detailed information about a specific country including visa requirements, cost of living, healthcare, and quality of life metrics',
      parameters: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'The country to search information about',
          },
          topics: {
            type: 'array',
            items: { type: 'string' },
            description: 'Specific topics to focus on (e.g., visa, cost_of_living, healthcare, weather)',
          },
        },
        required: ['country'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'compare_countries',
      description: 'Compare multiple countries across various metrics like cost of living, visa ease, healthcare quality',
      parameters: {
        type: 'object',
        properties: {
          countries: {
            type: 'array',
            items: { type: 'string' },
            description: 'List of countries to compare',
          },
          metrics: {
            type: 'array',
            items: { type: 'string' },
            description: 'Metrics to compare (e.g., cost_of_living, visa_ease, healthcare, safety)',
          },
        },
        required: ['countries'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_visa_requirements',
      description: 'Get specific visa requirements for a nationality moving to a target country',
      parameters: {
        type: 'object',
        properties: {
          nationality: {
            type: 'string',
            description: 'The user nationality or passport country',
          },
          destination: {
            type: 'string',
            description: 'The target country for relocation',
          },
          visa_type: {
            type: 'string',
            description: 'Type of visa (e.g., digital_nomad, work, golden, retirement)',
          },
        },
        required: ['nationality', 'destination'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'save_user_preference',
      description: 'Save a user preference or fact to their profile',
      parameters: {
        type: 'object',
        properties: {
          fact_type: {
            type: 'string',
            enum: ['destination', 'origin', 'budget', 'timeline', 'profession', 'family_status', 'nationality', 'visa_interest'],
            description: 'The type of preference being saved',
          },
          value: {
            type: 'string',
            description: 'The value of the preference',
          },
          confidence: {
            type: 'number',
            description: 'Confidence score 0-1 for this extraction',
          },
        },
        required: ['fact_type', 'value'],
      },
    },
  },
]

// Tool execution handlers
async function executeTool(
  name: string,
  args: Record<string, unknown>,
  userId?: string
): Promise<unknown> {
  switch (name) {
    case 'search_country_info':
      return mockCountryInfo(args.country as string, args.topics as string[] | undefined)

    case 'compare_countries':
      return mockCountryComparison(
        args.countries as string[],
        args.metrics as string[] | undefined
      )

    case 'get_visa_requirements':
      return mockVisaRequirements(
        args.nationality as string,
        args.destination as string,
        args.visa_type as string | undefined
      )

    case 'save_user_preference':
      if (userId) {
        // Save to database via gateway
        await saveUserFact(
          userId,
          args.fact_type as string,
          args.value as string,
          (args.confidence as number) || 0.8
        )
      }
      return { success: true, message: `Saved ${args.fact_type}: ${args.value}` }

    default:
      return { error: `Unknown tool: ${name}` }
  }
}

// Mock data functions (replace with real API calls)
function mockCountryInfo(country: string, topics?: string[]) {
  const baseInfo = {
    country,
    overview: `${country} is a popular destination for expats and digital nomads.`,
    cost_of_living: {
      monthly_average: '$1,500 - $2,500',
      rent_1br_city: '$800 - $1,200',
      rent_1br_outside: '$500 - $800',
      meal_inexpensive: '$8 - $15',
    },
    visa_types: ['Digital Nomad Visa', 'Work Permit', 'Retirement Visa'],
    healthcare: {
      quality: 'Good',
      public_available: true,
      private_monthly: '$100 - $200',
    },
    weather: {
      climate: 'Mediterranean',
      avg_temp_summer: '28°C / 82°F',
      avg_temp_winter: '12°C / 54°F',
    },
    pros: ['Great weather', 'Affordable', 'Good infrastructure'],
    cons: ['Language barrier', 'Bureaucracy'],
  }

  if (topics?.length) {
    const filtered: Record<string, unknown> = { country }
    topics.forEach((topic) => {
      if (topic in baseInfo) {
        filtered[topic] = baseInfo[topic as keyof typeof baseInfo]
      }
    })
    return filtered
  }

  return baseInfo
}

function mockCountryComparison(countries: string[], metrics?: string[]) {
  const defaultMetrics = ['cost_of_living', 'visa_ease', 'healthcare', 'safety', 'quality_of_life']
  const compareMetrics = metrics?.length ? metrics : defaultMetrics

  return {
    countries,
    metrics: compareMetrics,
    comparison: countries.map((country) => ({
      country,
      scores: Object.fromEntries(
        compareMetrics.map((m) => [m, Math.floor(Math.random() * 30) + 70])
      ),
    })),
    recommendation: countries[0],
    reasoning: 'Based on your profile preferences',
  }
}

function mockVisaRequirements(
  nationality: string,
  destination: string,
  visaType?: string
) {
  return {
    nationality,
    destination,
    visa_type: visaType || 'Digital Nomad Visa',
    requirements: [
      'Valid passport (6+ months)',
      'Proof of income ($2,500+/month)',
      'Health insurance',
      'Clean criminal record',
      'Application form',
    ],
    processing_time: '2-4 weeks',
    cost: '$150 - $300',
    validity: '1 year (renewable)',
    can_work: true,
    notes: 'Application can be submitted online or at embassy',
  }
}

async function saveUserFact(
  userId: string,
  factType: string,
  value: string,
  confidence: number
) {
  try {
    const gatewayUrl = process.env.RAILWAY_API_URL || 'https://quest-gateway-production.up.railway.app'
    await fetch(`${gatewayUrl}/user/profile/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': userId,
      },
      body: JSON.stringify({
        fact_type: factType,
        fact_value: value,
        confidence,
        source: 'genui_chat',
      }),
    })
  } catch (error) {
    console.error('Failed to save user fact:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { threadId, message, context } = body

    // Generate thread ID if not provided
    const effectiveThreadId = threadId || `thread_${Date.now()}_${Math.random().toString(36).slice(2)}`

    // Store context if provided
    if (context) {
      setThreadContext(effectiveThreadId, context)
    }

    // Add user message to store
    if (message) {
      addMessage(effectiveThreadId, {
        role: 'user',
        content: message,
      })
    }

    // Get full message history with system prompt
    const messages = getMessagesForOpenAI(effectiveThreadId)

    // Call C1 API
    const stream = await openai.chat.completions.create({
      model: 'c1-nightly',
      messages,
      tools,
      stream: true,
    })

    // Create a ReadableStream to handle streaming response
    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        let assistantContent = ''
        let toolCalls: Array<{
          id: string
          type: 'function'
          function: { name: string; arguments: string }
        }> = []

        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta

            // Handle content streaming
            if (delta?.content) {
              assistantContent += delta.content
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ type: 'content', content: delta.content })}\n\n`)
              )
            }

            // Handle tool calls
            if (delta?.tool_calls) {
              for (const tc of delta.tool_calls) {
                if (tc.index !== undefined) {
                  if (!toolCalls[tc.index]) {
                    toolCalls[tc.index] = {
                      id: tc.id || '',
                      type: 'function',
                      function: { name: '', arguments: '' },
                    }
                  }
                  if (tc.id) toolCalls[tc.index].id = tc.id
                  if (tc.function?.name) toolCalls[tc.index].function.name = tc.function.name
                  if (tc.function?.arguments) toolCalls[tc.index].function.arguments += tc.function.arguments
                }
              }
            }
          }

          // Execute tool calls if any
          if (toolCalls.length > 0) {
            // Add assistant message with tool calls
            addMessage(effectiveThreadId, {
              role: 'assistant',
              content: assistantContent || null,
              tool_calls: toolCalls,
            })

            // Execute each tool and add results
            const userId = context?.userId as string | undefined
            for (const tc of toolCalls) {
              const args = JSON.parse(tc.function.arguments)
              const result = await executeTool(tc.function.name, args, userId)

              addMessage(effectiveThreadId, {
                role: 'tool',
                tool_call_id: tc.id,
                content: JSON.stringify(result),
              })
            }

            // Get follow-up response after tool execution
            const followUpMessages = getMessagesForOpenAI(effectiveThreadId)
            const followUpStream = await openai.chat.completions.create({
              model: 'c1-nightly',
              messages: followUpMessages,
              stream: true,
            })

            let followUpContent = ''
            for await (const chunk of followUpStream) {
              if (chunk.choices[0]?.delta?.content) {
                followUpContent += chunk.choices[0].delta.content
                controller.enqueue(
                  encoder.encode(
                    `data: ${JSON.stringify({ type: 'content', content: chunk.choices[0].delta.content })}\n\n`
                  )
                )
              }
            }

            // Save follow-up response
            if (followUpContent) {
              addMessage(effectiveThreadId, {
                role: 'assistant',
                content: followUpContent,
              })
            }
          } else {
            // Save assistant response
            if (assistantContent) {
              addMessage(effectiveThreadId, {
                role: 'assistant',
                content: assistantContent,
              })
            }
          }

          // Send done signal
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'done', threadId: effectiveThreadId })}\n\n`
            )
          )
          controller.close()
        } catch (error) {
          console.error('Stream error:', error)
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ type: 'error', error: 'Stream failed' })}\n\n`)
          )
          controller.close()
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat GenUI API error:', error)
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    )
  }
}
