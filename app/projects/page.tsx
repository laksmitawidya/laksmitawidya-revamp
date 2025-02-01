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
          <h1 className="text-3xl font-extrabold leading-9  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
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
