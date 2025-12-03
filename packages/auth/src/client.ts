'use client'

import { StackClientApp, useUser as useStackUser, useStackApp } from '@stackframe/stack'

export { useStackApp }

// Re-export the useUser hook with proper typing
export const useUser = useStackUser

// Create auth client for Next.js apps
export function createAuthClient(options?: {
  afterSignIn?: string
  afterSignUp?: string
  afterSignOut?: string
}) {
  return new StackClientApp({
    tokenStore: 'nextjs-cookie',
    urls: {
      signIn: '/handler/sign-in',
      signUp: '/handler/sign-up',
      signOut: '/handler/sign-out',
      afterSignIn: options?.afterSignIn ?? '/dashboard',
      afterSignUp: options?.afterSignUp ?? '/onboarding',
      afterSignOut: options?.afterSignOut ?? '/',
    },
  })
}

// Helper to check if user is authenticated
export function useIsAuthenticated(): boolean {
  const user = useStackUser()
  return user !== null
}

// Helper to require authentication (redirects if not authenticated)
export function useRequireAuth() {
  return useStackUser({ or: 'redirect' })
}
