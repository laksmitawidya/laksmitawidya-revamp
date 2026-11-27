import BlurText from './BlurText'
import Reveal from './Reveal'
import { TextSelect, Tone } from './Selection'

/** Top-of-page title block shared by the inner pages (projects, blog, about, tags). */
export default function PageHero({
  eyebrow,
  title,
  intro,
  note,
  tone = 'sky',
}: {
  eyebrow: string
  title: string
  intro?: string
  note?: string
  tone?: Tone
}) {
  return (
    <header className="relative mx-auto flex max-w-3xl flex-col items-center pb-16 pt-10 text-center md:pb-20 md:pt-16">
      <Reveal y={12}>
        <span className="surface inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft shadow-card dark:text-night-text/80">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-strong" />
          {eyebrow}
        </span>
      </Reveal>
      <h1 className="relative mt-6 font-heading text-6xl font-medium tracking-tighter text-ink dark:text-night-text sm:text-7xl md:text-8xl">
        <BlurText delay={0.1}>
          {[
            <TextSelect key="t" tone={tone} delay={0.5}>
              {title}
            </TextSelect>,
          ]}
        </BlurText>
        {note && (
          <Reveal
            delay={0.9}
            y={8}
            className="absolute -top-6 left-[calc(100%-0.5rem)] hidden w-max lg:block"
          >
            {/* Collaborator-cursor bubble, like a teammate's pointer on a whiteboard */}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="-mb-1 -ml-3 h-6 w-6 -rotate-12 fill-sky-strong stroke-white"
              strokeWidth={1.5}
              strokeLinejoin="round"
            >
              <path d="M3 2l17 8-7 2.5L9.5 20z" />
            </svg>
            <span className="block rounded-full border-2 border-white bg-sky px-4 py-1.5 font-note text-base font-semibold tracking-normal text-ink shadow-card dark:border-night-card">
              {note}
            </span>
          </Reveal>
        )}
      </h1>
      {intro && (
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted dark:text-night-text/70 md:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  )
}
