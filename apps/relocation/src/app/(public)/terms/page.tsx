import { TermsPage } from '@quest/ui/pages'

export const metadata = {
  title: 'Terms of Service | Relocation Quest',
  description: 'Terms of service for Relocation Quest.',
}

export default function Terms() {
  return (
    <TermsPage
      brandName="Relocation Quest"
      contactEmail="legal@relocation.quest"
    />
  )
}
