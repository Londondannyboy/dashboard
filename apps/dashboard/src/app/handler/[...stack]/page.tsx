import { StackHandler } from '@stackframe/stack'

export default function Handler(props: { params: Promise<{ stack: string[] }> }) {
  return <StackHandler fullPage />
}
