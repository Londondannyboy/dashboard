import type { StackServerApp as StackServerAppType } from '@stackframe/stack'

// Check if Stack Auth is properly configured
export const isStackConfigured = Boolean(
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'placeholder' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'your_stack_project_id' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    )
)

// Only import and create StackServerApp when properly configured
// This prevents the SDK from throwing during build when env vars are missing
let stackServerApp: StackServerAppType<true> | null = null

if (isStackConfigured) {
  // Dynamic require to avoid SDK initialization when not configured
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { StackServerApp } = require('@stackframe/stack')
  stackServerApp = new StackServerApp({
    tokenStore: 'nextjs-cookie',
  })
}

export { stackServerApp }
