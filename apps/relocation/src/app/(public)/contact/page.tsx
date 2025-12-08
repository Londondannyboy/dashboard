import { ContactPage } from '@quest/ui/pages'

export const metadata = {
  title: 'Contact | Relocation Quest',
  description: 'Get in touch with the Relocation Quest team.',
}

export default function Contact() {
  return (
    <ContactPage
      brandName="Relocation Quest"
      contactEmail="hello@relocation.quest"
      supportEmail="support@relocation.quest"
    />
  )
}
