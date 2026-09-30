import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import { FocusCards } from '@/components/ui/FocusCard'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <SectionContainer>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-heading text-3xl font-extrabold leading-9  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <FocusCards cards={projectsData} />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
