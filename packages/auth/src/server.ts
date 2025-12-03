import 'server-only'

import { StackServerApp } from '@stackframe/stack'

// Create the server app instance
// This should be instantiated once per app in a stack.ts file
export function createStackServerApp() {
  return new StackServerApp({
    tokenStore: 'nextjs-cookie',
  })
}

// Type for the server app
export type { StackServerApp }

// Helper to get current user on server
export async function getCurrentUser(stackServerApp: StackServerApp) {
  return await stackServerApp.getUser()
}

// Helper to require auth on server (redirects if not authenticated)
export async function requireAuth(stackServerApp: StackServerApp) {
  return await stackServerApp.getUser({ or: 'redirect' })
}

// Helper to get user or null
export async function getOptionalUser(stackServerApp: StackServerApp) {
  try {
    return await stackServerApp.getUser()
  } catch {
    return null
  }
}
