import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Dock from '@/components/ui/Dock'
import { FigmaFrame } from '@/components/ui/Selection'

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
        intro="Frontend engineer, former QA, Gen AI tinkerer, and someone who cares how things look and feel."
      />

      <div className="grid items-start gap-14 lg:grid-cols-[22rem_1fr]">
        <aside className="lg:sticky lg:top-28">
          <Reveal>
            <div className="relative mx-auto w-64">
              <div
                aria-hidden="true"
                className="absolute -inset-5 -rotate-6 rounded-[2rem] bg-gradient-to-br from-butter via-rose to-lilac dark:from-butter-strong/20 dark:via-rose-strong/20 dark:to-lilac-strong/20"
              />
              <FigmaFrame label={`${name}`} className="block rotate-2">
                <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-lift dark:bg-night-card">
                  <Image
                    src="/static/images/me-portrait.webp"
                    alt={`${name} standing in front of a terracotta shingle wall`}
                    width={600}
                    height={800}
                    sizes="256px"
                    priority
                    className="aspect-[3/4] w-full rounded-xl object-cover"
                  />
                </div>
              </FigmaFrame>
              <span className="tape -top-3 right-6 rotate-12" />
              <div className="absolute -bottom-6 -left-8 h-20 w-20 -rotate-12 animate-float overflow-hidden rounded-full shadow-lift ring-4 ring-white [--r:-12deg] dark:ring-night-card">
                <Image src="/static/images/avatar-sm.webp" alt="" fill sizes="80px" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 text-center">
              <h2 className="font-heading text-2xl font-medium tracking-tight text-ink dark:text-night-text">
                {name}
              </h2>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {occupation && (
                  <span className="rounded-full bg-sky px-3 py-1 text-sm font-medium text-ink">
                    {occupation}
                  </span>
                )}
                {company && (
                  <span className="rounded-full bg-lilac px-3 py-1 text-sm font-medium text-ink">
                    @ {company}
                  </span>
                )}
              </div>
              <div className="mt-6 flex justify-center gap-4 [&_svg]:h-5 [&_svg]:w-5">
                <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
                <SocialIcon kind="github" href={github} size={5} />
                <SocialIcon kind="linkedin" href={linkedin} size={5} />
                <SocialIcon kind="x" href={twitter} size={5} />
                <SocialIcon kind="bluesky" href={bluesky} size={5} />
              </div>
            </div>
          </Reveal>
        </aside>

        <Reveal delay={0.15}>
          <article className="surface prose max-w-none rounded-[2rem] px-6 py-8 shadow-card dark:prose-invert prose-headings:tracking-tight prose-table:text-sm sm:px-10 sm:py-10">
            {children}
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-24">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-muted dark:text-night-text/50">
          My everyday toolkit
        </p>
        <Dock />
      </Reveal>
    </div>
  )
}
