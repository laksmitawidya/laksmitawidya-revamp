'use client'

import { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import type { WorkHighlight } from '@/data/workHighlights'

const CARD_BG = {
  lilac: 'bg-lilac dark:bg-[#2a2340]',
  sky: 'bg-sky dark:bg-[#1c2a40]',
  rose: 'bg-rose dark:bg-[#3a2229]',
  butter: 'bg-butter dark:bg-[#383220]',
  mint: 'bg-mint dark:bg-[#1c3329]',
} as const

const ICON_BG = {
  lilac: 'bg-lilac-strong',
  sky: 'bg-sky-strong',
  rose: 'bg-rose-strong',
  butter: 'bg-butter-strong',
  mint: 'bg-mint-strong',
} as const

function Card({
  work,
  i,
  total,
  progress,
}: {
  work: WorkHighlight
  i: number
  total: number
  progress: MotionValue<number>
}) {
  // Each card shrinks a little as the ones after it slide over, so the pile reads as layers
  const targetScale = 1 - (total - 1 - i) * 0.035
  const scale = useTransform(progress, [i / total, 1], [1, targetScale])
  const Icon = work.icon

  return (
    <div
      className={`sticky top-24 flex items-start justify-center md:top-28 ${
        i === total - 1 ? 'pb-4' : 'h-[70vh] max-h-[560px]'
      }`}
    >
      <motion.div
        style={{ scale, top: `${i * 22}px` }}
        className={`relative w-full origin-top overflow-visible rounded-[2rem] border border-black/[0.06] p-7 shadow-card dark:border-white/[0.07] md:p-10 ${
          CARD_BG[work.tone]
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-heading text-5xl font-light tracking-tight text-ink/80 dark:text-night-text/80 md:text-6xl">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="whitespace-nowrap rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft dark:bg-white/10 dark:text-night-text/80 sm:text-xs sm:tracking-[0.14em]">
              {work.category}
            </span>
          </div>
          <span
            className={`mr-12 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold md:mr-16 ${
              work.stat === 'Go-Live'
                ? 'bg-ink text-white dark:bg-white dark:text-ink'
                : work.stat === 'Ongoing'
                ? 'bg-white/80 text-ink dark:bg-white/10 dark:text-night-text'
                : 'border border-dashed border-ink/40 text-ink dark:border-white/40 dark:text-night-text'
            }`}
          >
            {work.stat === 'Ongoing' && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-strong opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-strong" />
              </span>
            )}
            {work.stat === 'Go-Live' && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-strong opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-strong" />
              </span>
            )}
            {work.stat}
          </span>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-12">
          <div>
            <h3 className="font-heading text-2xl font-medium leading-tight tracking-tight text-ink dark:text-night-text md:text-4xl">
              {work.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft dark:text-night-text/70">
              {work.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink-soft dark:bg-white/10 dark:text-night-text/80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden space-y-3 self-end md:block">
            {work.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 border-b border-ink/10 pb-3 text-sm text-ink-soft last:border-0 dark:border-white/10 dark:text-night-text/70"
              >
                <span className="text-ink/40 dark:text-white/40">↳</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Layered icon tile peeking off the card edge */}
        <div
          aria-hidden="true"
          className={`absolute -right-3 -top-6 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl text-white shadow-lift md:-right-6 md:h-20 md:w-20 ${
            ICON_BG[work.tone]
          }`}
        >
          <Icon className="h-8 w-8 md:h-9 md:w-9" strokeWidth={1.75} />
        </div>
      </motion.div>
    </div>
  )
}

/** Work highlights that pin and pile up on each other as you scroll. */
export default function StackCards({ items }: { items: WorkHighlight[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <div ref={ref} className="relative">
      {items.map((work, i) => (
        <Card key={work.title} work={work} i={i} total={items.length} progress={scrollYProgress} />
      ))}
    </div>
  )
}
