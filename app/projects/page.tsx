import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import { FocusCards } from '@/components/ui/FocusCard'
import { DoodleArrow } from '@/components/ui/Doodles'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <SectionContainer>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-end sm:gap-2">
            <h1 className="font-heading text-3xl font-extrabold leading-9 text-cocoa-800 dark:text-cream sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <DoodleArrow className="mb-1 hidden h-8 w-11 -scale-x-100 text-coral-deep dark:text-coral sm:block md:h-10 md:w-14" />
            <span className="w-fit -rotate-2 font-hand text-2xl font-bold text-coral-deep dark:text-coral sm:mb-4 md:text-3xl">
              things I&apos;ve built &amp; been part of!
            </span>
          </div>
          <div
            aria-hidden="true"
            className="polka-ribbon-pink h-6 w-48 rounded-full border-2 border-cocoa dark:border-sand/40"
          />
        </div>
        <div className="py-8">
          <FocusCards cards={projectsData} />
        </div>
      </div>
    </SectionContainer>
  )
}
