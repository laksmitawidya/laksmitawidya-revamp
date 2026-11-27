import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { SideProject } from '@/data/sideProjectsData'
import { Github as GithubMark } from '@/components/social-icons/icons'

const NOTE_BG = {
  sky: 'bg-sky',
  butter: 'bg-butter',
  rose: 'bg-rose',
  lilac: 'bg-lilac',
  mint: 'bg-mint',
} as const

const TINT = {
  sky: 'from-sky/70',
  butter: 'from-butter/80',
  rose: 'from-rose/70',
  lilac: 'from-lilac/70',
  mint: 'from-mint/70',
} as const

/**
 * Layered side-project card: a browser window holding a screenshot, a taped sticky note
 * overlapping its corner, and the project details underneath. The window links to the live
 * demo; the GitHub button links to the code.
 */
export default function ProjectWindow({
  project,
  index = 0,
  priority = false,
}: {
  project: SideProject
  index?: number
  priority?: boolean
}) {
  const tilt = index % 2 === 0 ? '-rotate-1' : 'rotate-1'
  const noteTilt = index % 2 === 0 ? 'rotate-3' : '-rotate-3'
  const host = project.live ? new URL(project.live).host : 'github.com'

  return (
    <article className="group relative">
      {/* Soft coloured slab behind the window: the bottom layer */}
      <div
        aria-hidden="true"
        className={`absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br ${
          TINT[project.tone]
        } to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100`}
      />

      <a
        href={project.live ?? project.repo}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="Open ↗"
        aria-label={`Open ${project.title} live demo`}
        className={`relative block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${tilt} group-hover:-translate-y-2 group-hover:rotate-0`}
      >
        <div className="surface overflow-hidden rounded-2xl shadow-card transition-shadow duration-500 group-hover:shadow-lift">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-black/[0.06] bg-canvas px-4 py-2.5 dark:border-white/[0.06] dark:bg-night">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-ink-muted ring-1 ring-black/[0.05] dark:bg-night-card dark:text-night-text/60 dark:ring-white/[0.06]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint-strong" />
              <span className="truncate">{host}</span>
            </div>
            <span className="w-10" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-canvas dark:bg-night">
            <Image
              src={project.image}
              alt={`${project.title}: ${project.tagline}`}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Sticky note layered over the corner */}
        <div
          className={`note-shadow absolute -bottom-6 -right-2 w-40 transition-transform duration-500 sm:-right-5 sm:w-44 ${noteTilt} group-hover:rotate-6 group-hover:scale-105`}
        >
          <div className={`sticky-note ${NOTE_BG[project.tone]} px-4 pb-5 pt-4`}>
            <p className="font-note text-sm font-semibold leading-snug text-ink">{project.note}</p>
          </div>
          <span className="tape -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-2" />
        </div>
      </a>

      <div className="mt-10 pr-2">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/60">
              {project.year} · Side project
            </p>
            <h3 className="mt-1.5 break-words font-heading text-xl font-medium tracking-tight text-ink dark:text-night-text sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-ink-soft dark:text-night-text/70">{project.tagline}</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Code"
              aria-label={`${project.title} source code on GitHub`}
              className="surface flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink hover:text-white dark:text-night-text dark:hover:bg-white dark:hover:text-ink"
            >
              <GithubMark className="h-4 w-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Live demo"
                aria-label={`${project.title} live demo`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white transition-transform hover:rotate-45 dark:bg-white dark:text-ink"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-night-text/60">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-black/[0.08] px-2.5 py-0.5 text-xs font-medium text-ink-soft dark:border-white/10 dark:text-night-text/70"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
