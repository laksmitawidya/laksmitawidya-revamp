'use client'

import { ArrowUpRight, MousePointer2 } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'
import Reveal from '@/components/ui/Reveal'
import Magnetic from '@/components/ui/Magnetic'
import { RollText } from '@/components/ui/ScrollMotion'

/* ---------- Tiny drawn mock-ups, one per service ---------- */

function LandingMock() {
  return (
    <div className="w-full rounded-xl bg-white p-2.5 shadow-lift ring-1 ring-black/5">
      <div className="mb-2 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="rounded-lg bg-gradient-to-br from-sky to-lilac px-3 py-4">
        <div className="h-2 w-3/4 rounded bg-ink/80" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-ink/30" />
        <div className="mt-3 h-4 w-14 rounded-full bg-ink" />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded-md bg-canvas" />
        ))}
      </div>
    </div>
  )
}

function MenuMock() {
  const items = ['w-16', 'w-12', 'w-14', 'w-10']
  return (
    <div className="mx-auto w-28 rounded-[1.25rem] border-4 border-ink bg-white p-2 shadow-lift">
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-ink/80" />
      <div className="mb-2 text-center font-heading text-[9px] font-semibold text-ink">
        Today&apos;s menu
      </div>
      <div className="space-y-1.5">
        {items.map((w, i) => (
          <div key={i} className="flex items-center justify-between gap-1">
            <span className={`h-1.5 rounded bg-ink/60 ${w}`} />
            <span className="h-1.5 w-3 rounded bg-butter-strong" />
          </div>
        ))}
      </div>
      <div className="mx-auto mt-2.5 grid h-7 w-7 grid-cols-3 gap-px rounded bg-white p-0.5 ring-1 ring-ink/20">
        {[1, 0, 1, 0, 1, 0, 1, 1, 0].map((on, i) => (
          <span key={i} className={on ? 'bg-ink' : 'bg-transparent'} />
        ))}
      </div>
    </div>
  )
}

function InteractiveMock() {
  return (
    <div className="relative w-full rounded-xl bg-white p-3 shadow-lift ring-1 ring-black/5">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-lg bg-rose transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-full rounded bg-ink/60" />
          <div className="h-1.5 w-2/3 rounded bg-ink/25" />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1">
          {['bg-rose-strong', 'bg-butter-strong', 'bg-sky-strong'].map((c) => (
            <span key={c} className={`h-3 w-3 rounded-full ${c}`} />
          ))}
        </div>
        {/* toggle that flips when the card is hovered */}
        <span className="relative h-4 w-7 rounded-full bg-ink/15 transition-colors duration-300 group-hover:bg-mint-strong">
          <span className="absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white shadow transition-transform duration-300 group-hover:translate-x-3" />
        </span>
      </div>
      <MousePointer2 className="absolute -bottom-2 right-8 h-5 w-5 fill-ink text-white transition-transform duration-500 group-hover:-translate-x-10 group-hover:-translate-y-8" />
    </div>
  )
}

/* ---------- Services ---------- */

const SERVICES = [
  {
    title: 'Landing pages',
    text: 'A focused page that explains what you offer and turns visitors into enquiries, launches or sign-ups.',
    goodFor: ['Launches', 'Small businesses', 'Events'],
    bg: 'bg-sky dark:bg-[#1c2a40]',
    Mock: LandingMock,
  },
  {
    title: 'Digital menus',
    text: 'QR-friendly menus for cafés and restaurants that look great on any phone. When your menu changes, I update it for you.',
    goodFor: ['Cafés', 'Restaurants', 'Bars'],
    bg: 'bg-butter dark:bg-[#383220]',
    Mock: MenuMock,
  },
  {
    title: 'Interactive websites',
    text: 'Sites with motion, configurators and playful details that make people stay, explore and remember you.',
    goodFor: ['Brands', 'Product showcases', 'Portfolios'],
    bg: 'bg-rose dark:bg-[#3a2229]',
    Mock: InteractiveMock,
  },
]

const STEPS = ['Tell me your idea', 'I design & build it', 'We launch together']

/** The services grid and the "Got a business idea?" panel. The page supplies the title. */
export default function Services() {
  const mail = `mailto:${siteMetadata.email}?subject=${encodeURIComponent('Project idea')}`

  return (
    <section aria-label="Services" className="mt-8">
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, text, goodFor, bg, Mock }, i) => (
          <Reveal
            key={title}
            delay={(i % 2) * 0.1}
            className={`min-w-0 ${i === 1 ? 'md:mt-16' : ''} ${
              i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <a
              href={mail}
              data-cursor="Let's talk"
              className={`group relative block rounded-[2rem] border border-black/[0.06] p-7 pt-0 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift dark:border-white/[0.07] md:p-9 md:pt-0 ${bg}`}
            >
              {/* Mock-up layered over the card's top edge */}
              <div
                aria-hidden="true"
                className={`relative mx-auto -mt-8 mb-6 w-full max-w-[15rem] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 ${
                  i % 2 === 0 ? '-rotate-3 group-hover:rotate-0' : 'rotate-3 group-hover:rotate-0'
                }`}
              >
                {/* gentle idle bob, offset per card so they don't move in sync */}
                <div className="animate-float-slow" style={{ animationDelay: `${i * -2.2}s` }}>
                  <Mock />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-heading text-sm font-light text-ink/60 dark:text-night-text/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 font-heading text-2xl font-medium tracking-tight text-ink dark:text-night-text md:text-3xl">
                    {title}
                  </h3>
                </div>
                <span className="mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-ink transition-transform duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white dark:bg-white/10 dark:text-night-text dark:group-hover:bg-white dark:group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-ink-soft dark:text-night-text/70">
                {text}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {goodFor.map((g) => (
                  <li
                    key={g}
                    className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink-soft dark:bg-white/10 dark:text-night-text/80"
                  >
                    {g}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>

      {/* How working together goes, plus the contact button */}
      <Reveal className="mt-16">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-white dark:bg-night-card dark:ring-1 dark:ring-white/10 sm:px-10 md:flex md:items-center md:justify-between md:gap-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 animate-blob rounded-full bg-sky-strong/30 blur-3xl"
          />
          <div className="relative">
            <h3 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
              Got a business idea?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              Tell me what you need, and we&apos;ll work out the simplest thing that does the job
              well. I&apos;m based in Yogyakarta, Indonesia, and happy to work remotely, hybrid or
              onsite.
            </p>
            <ol className="mt-6 flex flex-wrap gap-2">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-3 text-xs font-medium text-white/90"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-ink">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="relative mt-8 shrink-0 md:mt-0">
            <Magnetic>
              <a
                href={mail}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink shadow-lift transition-colors hover:bg-butter"
              >
                <RollText>Start a project</RollText>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
