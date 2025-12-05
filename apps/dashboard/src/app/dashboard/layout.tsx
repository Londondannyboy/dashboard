import { stackServerApp } from '@/stack/server'
import { redirect } from 'next/navigation'
import { GlobalHeader, GlobalFooter } from '@quest/ui/layout'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let user = null

  try {
    user = await stackServerApp.getUser()
    console.log('Dashboard layout - user:', user ? { id: user.id, email: user.primaryEmail } : null)
  } catch (error) {
    console.error('Dashboard layout - getUser error:', error)
    throw error
  }

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
