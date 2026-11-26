import { genPageMetadata } from 'app/seo'
import ProjectsBoard from '@/components/ProjectsBoard'
import PageHero from '@/components/ui/PageHero'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">
      <PageHero
        eyebrow="Work & play"
        title="projects"
        tone="butter"
        note="things I've built & been part of!"
        intro="Enterprise portals and Gen AI tools from my day job, plus the side projects I build to learn: 3D, games, canvas and component libraries."
      />
      <ProjectsBoard />
    </div>
  )
}
