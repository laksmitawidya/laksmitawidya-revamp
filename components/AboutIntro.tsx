'use client'

import { useEffect, useRef, useState } from 'react'
import NextImage from 'next/image'
import { animate, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import Reveal from '@/components/ui/Reveal'
import BlurText from '@/components/ui/BlurText'
import DesktopFolders, { DesktopItem } from '@/components/ui/DesktopFolders'
import { ScrollWords } from '@/components/ui/ScrollMotion'
import { FigmaFrame, TextSelect } from '@/components/ui/Selection'

/* ------------------------------------------------------------------ */
/* About: a little desktop with draggable folders                        */
/* ------------------------------------------------------------------ */

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 7, suffix: '+', label: 'years shipping UI', bg: 'bg-butter', tilt: '-rotate-3' },
  { value: 10, suffix: '+', label: 'production apps', bg: 'bg-rose', tilt: 'rotate-2' },
  { value: 6, suffix: '', label: 'side projects live', bg: 'bg-mint', tilt: '-rotate-1' },
  {
    value: 3,
    suffix: '',
    label: 'platforms: web, desktop, mobile',
    bg: 'bg-sky',
    tilt: 'rotate-3',
  },
]

const FOLDERS: DesktopItem[] = [
  {
    label: 'GitHub',
    href: siteMetadata.github ?? 'https://github.com/laksmitawidya',
    x: 2,
    y: 6,
    external: true,
  },
  { label: 'LinkedIn', href: siteMetadata.linkedin ?? '/about', x: 78, y: 2, external: true },
  { label: 'Articles', href: '/blog', x: 0, y: 66 },
  { label: 'Projects', href: '/projects', x: 82, y: 74 },
  { label: 'say-hi.txt', href: `mailto:${siteMetadata.email}`, x: 56, y: 87 },
]

export default function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto mt-32 grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 xl:px-0"
    >
      <Reveal>
        <DesktopFolders items={FOLDERS} className="mx-auto h-[30rem] w-full max-w-md sm:h-[34rem]">
          {/* Layered portrait: tinted slab, taped photo in a selection frame, avatar sticker */}
          <div className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 sm:w-64">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rotate-6 rounded-[2rem] bg-gradient-to-br from-lilac to-sky dark:from-lilac-strong/30 dark:to-sky-strong/20"
            />
            <FigmaFrame label="mita.webp  600 × 800" className="block -rotate-2">
              <div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-lift dark:bg-night-card">
                <NextImage
                  src="/static/images/me-portrait.webp"
                  alt="Mita standing in front of a terracotta shingle wall"
                  width={600}
                  height={800}
                  sizes="256px"
                  className="aspect-[3/4] w-full rounded-lg object-cover"
                />
                <p className="pt-2 text-center font-note text-sm font-semibold text-ink-soft dark:text-night-text/70">
                  that&apos;s me!
                </p>
              </div>
            </FigmaFrame>
            <span className="tape -top-3 left-6 -rotate-12" />
            {/* Fake right-click menu */}
            <div
              aria-hidden="true"
              className="surface absolute -right-12 top-1/2 hidden w-36 rotate-3 rounded-xl p-1 text-xs shadow-lift sm:block"
            >
              {['Copy', 'Paste', 'Duplicate'].map((item) => (
                <div
                  key={item}
                  className="rounded-md px-2.5 py-1 text-ink-soft dark:text-night-text/70"
                >
                  {item}
                </div>
              ))}
              <div className="rounded-md bg-sky-strong px-2.5 py-1 font-medium text-white">
                Hire Mita ✨
              </div>
              <svg
                viewBox="0 0 24 24"
                className="absolute -bottom-5 left-16 h-6 w-6 fill-ink stroke-white dark:fill-white dark:stroke-ink"
                strokeWidth={1.5}
              >
                <path d="M4 2l16 9-7 2-3 7z" />
              </svg>
            </div>
          </div>
        </DesktopFolders>
      </Reveal>

      <div>
        <Reveal y={12}>
          <span className="surface inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft shadow-card dark:text-night-text/80">
            Hello again
          </span>
        </Reveal>
        <h2
          id="about-heading"
          className="mt-5 font-heading text-5xl font-medium tracking-tight text-ink dark:text-night-text md:text-6xl"
        >
          <BlurText inView>
            {[
              'about ',
              <TextSelect key="me" tone="sky">
                me
              </TextSelect>,
            ]}
          </BlurText>
        </h2>
        <ScrollWords
          className="mt-6 text-base leading-relaxed text-ink dark:text-night-text md:text-lg"
          text="I'm a Frontend Engineer from Yogyakarta, Indonesia, who loves the visual side of building. I started in software QA, which still shapes how I work: I think about failure modes early and take production readiness seriously. Today I lead frontend delivery on enterprise Gen AI projects. I'm comfortable writing every line myself, and just as comfortable handing the scaffolding to an AI agent and spending my time on review, edge cases and polish. In my spare time I build playful things like 3D room builders and piano games."
        />
        <Reveal delay={0.1}>
          <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-ink-soft dark:text-night-text/70">
            <span className="font-medium text-ink dark:text-night-text">
              📍 Yogyakarta, Indonesia
            </span>
            <span aria-hidden="true">·</span>
            Open to
            {['Remote', 'Hybrid', 'Onsite'].map((m) => (
              <span
                key={m}
                className="rounded-full bg-mint px-2.5 py-0.5 text-xs font-medium text-ink dark:bg-mint-strong/20 dark:text-night-text"
              >
                {m}
              </span>
            ))}
          </p>
        </Reveal>

        {/* Sticky-note stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.09} y={-36} tilt={i % 2 ? 10 : -10}>
              <div
                className={`note-shadow transition-transform duration-300 hover:rotate-0 hover:scale-105 ${s.tilt}`}
              >
                <div className={`sticky-note px-3 pb-5 pt-3 ${s.bg}`}>
                  <div className="font-heading text-3xl font-semibold text-ink">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 font-note text-xs font-semibold leading-snug text-ink/75">
                    {s.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-sky-strong decoration-2 underline-offset-4 dark:text-night-text"
          >
            The longer story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
