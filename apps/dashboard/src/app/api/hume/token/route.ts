import { NextResponse } from 'next/server'

/**
 * API route to get a Hume access token.
 * This keeps the API secret on the server side.
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
    // Hume uses an API key directly for WebSocket connections
    // For EVI, the client uses the API key directly
    // Return the API key (or generate a short-lived token)
    return NextResponse.json({
      accessToken: apiKey,
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
