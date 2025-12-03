'use client'

import { ReactNode } from 'react'
import { StackProvider, StackTheme } from '@stackframe/stack'
import { StackServerApp } from '@stackframe/stack'

// This component is only loaded when Stack is configured (via dynamic import)
const stackServerApp = new StackServerApp({
  tokenStore: 'nextjs-cookie',
})

export default function StackContent({ children }: { children: ReactNode }) {
  return (
    <StackProvider app={stackServerApp}>
      <StackTheme>
        {children}
      </StackTheme>
    </StackProvider>
  )
}
