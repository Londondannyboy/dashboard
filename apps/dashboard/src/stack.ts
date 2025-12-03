import { StackServerApp } from '@stackframe/stack'

// Only create the Stack app if properly configured
const projectId = process.env.NEXT_PUBLIC_STACK_PROJECT_ID

let stackServerAppInstance: StackServerApp | null = null

export function getStackServerApp() {
  if (!projectId || projectId === 'placeholder') {
    return null
  }

  if (!stackServerAppInstance) {
    stackServerAppInstance = new StackServerApp({
      tokenStore: 'nextjs-cookie',
    })
  }

  return stackServerAppInstance
}

// For backward compatibility, but this will throw if not configured
export const stackServerApp = (() => {
  if (!projectId || projectId === 'placeholder') {
    // Return a mock during build time
    return {
      getUser: async () => null,
    } as unknown as StackServerApp
  }
  return new StackServerApp({
    tokenStore: 'nextjs-cookie',
  })
})()
