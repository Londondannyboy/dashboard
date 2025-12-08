import { PrivacyPage } from '@quest/ui/pages'

export const metadata = {
  title: 'Privacy Policy | Relocation Quest',
  description: 'Privacy policy for Relocation Quest - how we handle your data.',
}

export default function Privacy() {
  return (
    <PrivacyPage
      brandName="Relocation Quest"
      contactEmail="privacy@relocation.quest"
    />
  )
}
