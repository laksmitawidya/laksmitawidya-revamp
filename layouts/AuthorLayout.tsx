import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from 'next/image'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Dock from '@/components/ui/Dock'

const EDUCATION = [
  ['MSc Computer Science', 'Universitas Gadjah Mada'],
  ['BEng Information Technology', 'Duta Wacana Christian University'],
  ['AWS Certified Cloud Practitioner', 'Amazon Web Services · 2025'],
]

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">
      <PageHero
        eyebrow="About"
        title="about me"
        tone="sky"
        note="hi, nice to meet you!"
        intro="Frontend engineer and former QA who writes code by hand and keeps up with AI-assisted workflows."
      />

      {/* The longer story from data/authors/default.mdx */}
      <section id="story" className="scroll-mt-28">
        <div className="grid items-start gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-28">
            <Reveal>
              <div className="surface rounded-3xl p-6 shadow-card">
                <div className="relative mb-5 overflow-hidden rounded-2xl">
                  <Image
                    src="/static/images/me-portrait.webp"
                    alt={`${name} standing in front of a terracotta shingle wall`}
                    width={600}
                    height={800}
                    sizes="(min-width: 1024px) 208px, 100vw"
                    priority
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/50">
                  The longer story
                </p>
                <h2 className="mt-3 font-heading text-xl font-medium tracking-tight text-ink dark:text-night-text">
                  {name}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {occupation && (
                    <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-ink">
                      {occupation}
                    </span>
                  )}
                  {company && (
                    <span className="rounded-full bg-lilac px-3 py-1 text-xs font-medium text-ink">
                      @ {company}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex gap-4 [&_svg]:h-5 [&_svg]:w-5">
                  <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
                  <SocialIcon kind="github" href={github} size={5} />
                  <SocialIcon kind="linkedin" href={linkedin} size={5} />
                  <SocialIcon kind="x" href={twitter} size={5} />
                  <SocialIcon kind="bluesky" href={bluesky} size={5} />
                </div>
                <ul className="mt-6 space-y-3 border-t border-black/[0.06] pt-5 dark:border-white/10">
                  {EDUCATION.map(([title, place]) => (
                    <li key={title} className="flex items-center gap-3">
                      <span aria-hidden="true" className="mac-folder block h-6 w-8 shrink-0" />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-snug text-ink dark:text-night-text">
                          {title}
                        </span>
                        <span className="block text-xs text-ink-muted dark:text-night-text/60">
                          {place}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <Reveal delay={0.1} className="min-w-0">
            <article className="surface prose max-w-none rounded-[2rem] px-6 py-8 shadow-card dark:prose-invert prose-headings:tracking-tight prose-table:text-sm sm:px-10 sm:py-10">
              {children}
            </article>
          </Reveal>
        </div>
      </section>

      <Reveal className="mt-24">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-muted dark:text-night-text/50">
          My everyday toolkit
        </p>
        <Dock />
      </Reveal>
    </div>
  )
}
