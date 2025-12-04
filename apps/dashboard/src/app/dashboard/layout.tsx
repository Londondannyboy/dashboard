import { getStackServerApp } from '@/stack'
import { redirect } from 'next/navigation'
import { GlobalHeader, GlobalFooter } from '@quest/ui'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const stackApp = await getStackServerApp()
  const user = stackApp ? await stackApp.getUser() : null

  if (!user) {
    redirect('/handler/sign-in')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalHeader
        brandName="Relocation Quest"
        showVoice={true}
        showChat={true}
        showArticles={true}
        showDashboard={true}
      />
      <main className="flex-1">
        {children}
      </main>
      <GlobalFooter
        brandName="Relocation Quest"
        brandDescription="Your AI-powered relocation assistant"
      />
    </div>
  )
}
