import type { StackServerApp } from '@stackframe/stack'

// Check if Stack Auth is properly configured
export const isStackConfigured = Boolean(
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'placeholder' &&
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID !== 'your_stack_project_id' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      process.env.NEXT_PUBLIC_STACK_PROJECT_ID
    )
)

// Lazy loader for Stack Server App - avoids Turbopack proxy issues
let _stackServerApp: StackServerApp | null = null
let _initialized = false

export async function getStackServerApp(): Promise<StackServerApp | null> {
  if (!isStackConfigured) return null
  if (_initialized) return _stackServerApp

  try {
    const { StackServerApp } = await import('@stackframe/stack')
    _stackServerApp = new StackServerApp({ tokenStore: 'nextjs-cookie' })
    _initialized = true
    return _stackServerApp
  } catch (e) {
    console.error('Failed to initialize Stack Auth:', e)
    return null
  }
}
