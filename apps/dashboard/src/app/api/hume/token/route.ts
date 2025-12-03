import { NextResponse } from 'next/server'

/**
 * API route to get a Hume access token.
 * Exchanges API key + secret for a short-lived access token.
 */
export async function GET() {
  const apiKey = process.env.HUME_API_KEY
  const secretKey = process.env.HUME_SECRET_KEY

  if (!apiKey || !secretKey) {
    return NextResponse.json(
      { error: 'Hume credentials not configured' },
      { status: 500 }
    )
  }

  try {
    // Exchange API key + secret for an access token
    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        api_key: apiKey,
        secret_key: secretKey,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Hume token error:', errorText)
      return NextResponse.json(
        { error: 'Failed to get Hume access token' },
        { status: 500 }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      accessToken: data.access_token,
      configId: process.env.HUME_CONFIG_ID,
    })
  } catch (error) {
    console.error('Error getting Hume token:', error)
    return NextResponse.json(
      { error: 'Failed to get access token' },
      { status: 500 }
    )
  }
}
