import { genPageMetadata } from 'app/seo'
import PageHero from '@/components/ui/PageHero'
import Services from '@/components/Services'

export const metadata = genPageMetadata({
  title: 'Services',
  description:
    'Landing pages, digital menus and interactive websites for businesses, designed and built by Mita.',
})

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">
      <PageHero
        eyebrow="Work with me · Freelance"
        title="services"
        tone="butter"
        note="bring your idea to life!"
        intro="Alongside my full-time role, I help businesses bring their ideas to life through thoughtful design and digital solutions."
      />
      <Services />
    </div>
  )
}
