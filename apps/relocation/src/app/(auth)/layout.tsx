import { Providers } from '../providers'

// This layout wraps authenticated routes with StackProvider
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
