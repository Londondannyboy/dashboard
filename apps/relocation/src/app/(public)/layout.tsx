// This is a pass-through layout - the root layout handles html/body
// Route groups don't add their own document structure
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
