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
            className="absolute -top-10 left-[calc(100%-1rem)] hidden w-max rotate-6 lg:block"
          >
            <span className="block font-hand text-2xl font-bold tracking-normal text-sky-deep dark:text-sky-strong">
              {note}
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 60 40"
              className="ml-4 hidden h-8 w-12 -scale-x-100 text-sky-deep dark:text-sky-strong md:block"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M5 5 C 20 30, 40 32, 55 22" />
              <path d="M47 16 L55 22 L46 27" />
            </svg>
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
