// Force this layout to be rendered as static HTML
// This overrides the client boundary from the parent StackProvider

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Just pass through - the page itself handles the full layout
  return <>{children}</>
}

// Force static rendering for SEO
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour
