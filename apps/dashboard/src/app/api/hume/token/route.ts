import { NextResponse } from 'next/server'
import { stackServerApp, isStackConfigured } from '@/stack'

/**
 * API route to get a Hume access token.
 * Uses Basic auth with API key as username and Secret key as password.
 * Also returns user ID for session tracking.
 */
export async function GET() {
  const apiKey = process.env.HUME_API_KEY
  const secretKey = process.env.HUME_SECRET_KEY

  if (!apiKey || !secretKey) {
    console.error('Hume credentials missing:', { hasApiKey: !!apiKey, hasSecretKey: !!secretKey })
    return NextResponse.json(
      { error: 'Hume credentials not configured' },
      { status: 500 }
    )
  }

  // Get current user from Stack Auth (if configured)
  const user = isStackConfigured && stackServerApp ? await stackServerApp.getUser() : null

  try {
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
        { error: 'Failed to get Hume access token' },
        { status: 500 }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      accessToken: data.access_token,
      configId: process.env.HUME_CONFIG_ID,
      userId: user?.id || null,
    })
  } catch (error) {
    console.error('Error getting Hume token:', error)
    return NextResponse.json(
      { error: 'Failed to get access token' },
      { status: 500 }
    )
  }
}
