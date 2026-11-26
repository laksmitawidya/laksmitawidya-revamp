import { ReactNode } from 'react'
import BlurText from './BlurText'
import Reveal from './Reveal'

/**
 * Section opener: a small numbered eyebrow pill, a large lowercase display title,
 * and an optional intro line. `title` may mix strings with highlight nodes.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = 'left',
  aside,
}: {
  index?: string
  eyebrow: string
  title: ReactNode[]
  intro?: ReactNode
  align?: 'left' | 'center'
  aside?: ReactNode
}) {
  const centered = align === 'center'
  return (
    <div
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? 'flex flex-col items-center' : ''}>
        <Reveal y={12}>
          <span className="surface inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft shadow-card dark:text-night-text/80">
            {index && <span className="text-sky-deep dark:text-sky-strong">{index}</span>}
            {index && <span className="h-3 w-px bg-black/15 dark:bg-white/20" />}
            {eyebrow}
          </span>
        </Reveal>
        <BlurText
          as="h2"
          inView
          className="mt-5 font-heading text-4xl font-medium leading-[1.05] tracking-tight text-ink dark:text-night-text sm:text-5xl md:text-6xl"
        >
          {title}
        </BlurText>
        {intro && (
          <Reveal delay={0.15}>
            <p
              className={`mt-5 max-w-xl text-base leading-relaxed text-ink-muted dark:text-night-text/70 md:text-lg ${
                centered ? 'mx-auto' : ''
              }`}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
      {aside}
    </div>
  )
}
