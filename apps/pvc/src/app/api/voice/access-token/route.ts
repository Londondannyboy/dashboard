import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/voice/access-token
 *
 * Generates a Hume AI access token for voice conversations.
 * Uses Basic auth with API key as username and Secret key as password.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id } = body

    // Allow trial users (trial-xxx) or authenticated users
    const isTrial = user_id?.startsWith('trial-')

    if (!user_id) {
      return NextResponse.json(
        { error: 'User ID required for voice chat' },
        { status: 401 }
      )
    }

    const apiKey = process.env.HUME_API_KEY
    const secretKey = process.env.HUME_SECRET_KEY

    if (!apiKey || !secretKey) {
      console.error('Missing Hume credentials')
      return NextResponse.json(
        { error: 'Voice service not configured' },
        { status: 500 }
      )
    }

    // Use Basic auth with API key as username and Secret key as password
    const credentials = Buffer.from(`${apiKey}:${secretKey}`).toString('base64')

    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Hume token error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Failed to get voice access token' },
        { status: response.status }
      )
    }

    const data = await response.json()

    // Build variables for PVC context
    const variables: Record<string, string> = {
      context: 'private equity and venture capital',
      expertise: 'placement agents, fund raising, deal flow',
    }

    console.log('✅ Generated Hume access token for PVC', {
      user_id,
      expires_in: data.expires_in,
      isTrial,
    })

    return NextResponse.json({
      accessToken: data.access_token,
      configId: process.env.NEXT_PUBLIC_HUME_CONFIG_ID,
      userId: user_id,
      variables,
    })

  } catch (error) {
    console.error('Access token error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
