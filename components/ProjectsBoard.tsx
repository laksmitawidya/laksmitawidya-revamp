'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import projectsData from '@/data/projectsData'
import sideProjectsData from '@/data/sideProjectsData'
import ProjectWindow from '@/components/ui/ProjectWindow'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'side', label: 'Side projects' },
  { id: 'client', label: 'Client work' },
] as const

type Filter = (typeof FILTERS)[number]['id']

const TABS = ['bg-sky', 'bg-rose', 'bg-butter', 'bg-mint', 'bg-lilac']

function ClientCard({ project, index }: { project: (typeof projectsData)[number]; index: number }) {
  const [label, ...rest] = project.title.split(/ [—:] /)
  const sub = rest.join(' · ')
  const body = (
    <>
      {/* Folder tab on top: the card reads like a case file */}
      <span
        aria-hidden="true"
        className={`absolute -top-3 left-6 h-6 w-24 rounded-t-xl ${TABS[index % TABS.length]}`}
      />
      <div className="surface relative flex h-full flex-col rounded-3xl rounded-tl-xl p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:shadow-lift">
        <div className="flex items-start justify-between gap-3">
          <span className="font-heading text-sm font-light text-ink-muted dark:text-night-text/50">
            {String(index + 1).padStart(2, '0')}
          </span>
          {project.href && (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.04] text-ink transition-transform duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white dark:bg-white/[0.06] dark:text-night-text dark:group-hover:bg-white dark:group-hover:text-ink">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <h3 className="mt-3 font-heading text-xl font-medium leading-snug tracking-tight text-ink dark:text-night-text">
          {label}
        </h3>
        {sub && (
          <p className="mt-1 text-sm font-medium text-sky-deep dark:text-sky-strong">{sub}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-night-text/60">
          {project.description}
        </p>
      </div>
    </>
  )

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Visit ↗"
      className="group relative block h-full pt-3"
    >
      {body}
    </a>
  ) : (
    <div className="group relative h-full pt-3">{body}</div>
  )
}

export default function ProjectsBoard() {
  const [filter, setFilter] = useState<Filter>('all')
  const showSide = filter !== 'client'
  const showClient = filter !== 'side'

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="surface mx-auto mb-16 flex w-fit gap-1 rounded-full p-1 shadow-card"
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
              filter === f.id
                ? 'text-white dark:text-ink'
                : 'text-ink-muted hover:text-ink dark:text-night-text/60 dark:hover:text-night-text'
            }`}
          >
            {filter === f.id && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-ink dark:bg-white"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{f.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-28"
        >
          {showSide && (
            <section aria-labelledby="side-heading">
              <h2
                id="side-heading"
                className="mb-10 flex items-center gap-3 font-heading text-2xl font-medium tracking-tight text-ink dark:text-night-text"
              >
                <span className="h-3 w-3 rounded-full bg-butter-strong" />
                Side projects
                <span className="text-base font-light text-ink-muted">
                  ({sideProjectsData.length})
                </span>
              </h2>
              <div className="grid gap-x-12 gap-y-20 md:grid-cols-2">
                {sideProjectsData.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`min-w-0 ${i % 2 === 1 ? 'md:mt-24' : ''}`}
                  >
                    <ProjectWindow project={p} index={i} priority={i < 2} />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {showClient && (
            <section aria-labelledby="client-heading">
              <h2
                id="client-heading"
                className="mb-10 flex items-center gap-3 font-heading text-2xl font-medium tracking-tight text-ink dark:text-night-text"
              >
                <span className="h-3 w-3 rounded-full bg-sky-strong" />
                Client work & career
                <span className="text-base font-light text-ink-muted">({projectsData.length})</span>
              </h2>
              <div className="grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ClientCard project={p} index={i} />
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
