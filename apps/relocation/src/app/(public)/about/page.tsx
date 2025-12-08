import { AboutPage } from '@quest/ui/pages'

export const metadata = {
  title: 'About | Relocation Quest',
  description: 'About Relocation Quest - AI-powered relocation guidance.',
}

export default function About() {
  return (
    <AboutPage
      brandName="Relocation Quest"
      brandDescription="AI-powered relocation guidance"
      mission="We help people navigate international relocation with AI-powered tools and expert guidance."
    />
  )
}
