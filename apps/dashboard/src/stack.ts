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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _stackServerApp: any = null
let _initialized = false

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStackServerApp(): Promise<any> {
  if (!isStackConfigured) {
    console.log('[Stack] Not configured - missing or invalid NEXT_PUBLIC_STACK_PROJECT_ID')
    return null
  }
  if (_initialized) return _stackServerApp

  try {
    const { StackServerApp } = await import('@stackframe/stack')
    _stackServerApp = new StackServerApp({ tokenStore: 'nextjs-cookie' })
    _initialized = true
    return _stackServerApp
  } catch (e) {
    console.error('[Stack] Failed to initialize Stack Auth:', e)
    return null
  }
}
