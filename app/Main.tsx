'use client'

import React from 'react'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '@/components/SocialMedia'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import Image from '@/components/Image'
import Reveal from '@/components/ui/Reveal'
import { Bot, Database, FileText, HeartPulse, Settings, ShieldCheck, Sprout } from 'lucide-react'
import {
  DoodleArrow,
  Polaroid,
  Sparkle,
  StickerHeading,
  StripeHeading,
  Tape,
} from '@/components/ui/Doodles'

const MAX_DISPLAY = 6

const workHighlights = [
  {
    icon: Bot,
    category: 'Gen AI',
    title: 'Chatbot Admin Portal & RAG Chatbot',
    description:
      'RAG chatbot achieving 75%+ accuracy, powered by AWS CDK, QuickSight, and Nova Pro.',
    tags: ['React', 'AWS', 'CDK', 'Bedrock', 'RAG'],
    stat: 'POC',
  },
  {
    icon: FileText,
    category: 'Document AI',
    title: 'Litigation Text Extraction',
    description:
      'Document extraction with ~90% accuracy across newspapers, CEDs, and Gazettes using Sonnet 4.',
    tags: ['Lambda', 'S3', 'Textract', 'Bedrock'],
    stat: 'POC',
  },
  {
    icon: Settings,
    category: 'Admin Portal',
    title: 'Text Extraction Admin Portal',
    description:
      'Scalable React + TypeScript portal with automated CI/CD pipeline and image processing.',
    tags: ['React', 'TypeScript', 'CI/CD'],
    stat: 'Go-Live',
  },
  {
    icon: Database,
    category: 'Data & AI',
    title: 'Redshift Knowledge Base',
    description: 'Integrated Redshift as an alternative knowledge base source for the POC chatbot.',
    tags: ['Redshift', 'AWS', 'Bedrock', 'Lambda'],
    stat: 'POC',
  },
  {
    icon: ShieldCheck,
    category: 'Data Management',
    title: 'Data Asset Management Portal',
    description: 'Built from scratch with Playwright E2E testing and full VAPT compliance.',
    tags: ['React', 'Playwright', 'VAPT'],
    stat: 'Go-Live',
  },
  {
    icon: Sprout,
    category: 'Agronomy',
    title: 'Agronomy Admin Portal',
    description: 'Cross-team delivery featuring postMessage auth POC and hands-on team mentoring.',
    tags: ['React', 'TypeScript', 'Auth'],
    stat: 'Go-Live',
  },
  {
    icon: HeartPulse,
    category: 'Healthcare',
    title: 'Healthcare Admin Portal',
    description:
      'Refactored for VAPT and SonarQube compliance, resolving circular dependencies across cross-functional teams.',
    tags: ['React', 'SonarQube', 'VAPT'],
    stat: 'Go-Live',
  },
]

// Full class names written out so Tailwind JIT picks them all up
const BLOCK_COLORS = [
  'bg-teal dark:bg-teal-muted',
  'bg-coral dark:bg-coral-muted',
  'bg-sand dark:bg-sand-muted',
  'bg-blush dark:bg-blush-muted',
]

const TAPE_COLORS = ['bg-teal', 'bg-coral', 'bg-sand', 'bg-blush']

const STATS = [
  { value: '7+', label: 'Years Exp', color: 'bg-coral dark:bg-coral-muted', tilt: '-rotate-2' },
  { value: '10+', label: 'Projects', color: 'bg-sand dark:bg-sand-muted', tilt: 'rotate-1' },
  { value: 'AWS', label: 'Certified', color: 'bg-teal dark:bg-teal-muted', tilt: '-rotate-1' },
  { value: 'Remote', label: 'GMT+7', color: 'bg-blush dark:bg-blush-muted', tilt: 'rotate-2' },
]

function StatusBadge({ stat }: { stat: string }) {
  if (stat === 'Go-Live') {
    return (
      <span className="inline-flex -rotate-3 items-center gap-1 rounded-full border-2 border-cocoa-800 bg-cream-paper px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-cocoa-800 dark:border-cocoa-950 dark:text-cocoa-950">
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3 fill-current">
          <path d="M8 13.6 4.4 10l-1.4 1.4L8 16.4l9-9L15.6 6z" />
        </svg>
        Go-Live
      </span>
    )
  }
  return (
    <span className="inline-flex rotate-2 items-center rounded-full border-2 border-dashed border-cocoa-800 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-cocoa-800 dark:border-cocoa-950 dark:text-cocoa-950">
      POC
    </span>
  )
}

function FolderTab({ label, color }: { label: string; color: string }) {
  return (
    <div
      className={`absolute left-0 top-0 z-10 flex h-9 items-center rounded-t-lg border-2 border-b-0 border-cocoa px-4 dark:border-sand/50 ${color}`}
    >
      <span className="text-[11px] font-extrabold uppercase tracking-widest text-cocoa-800 dark:text-cocoa-950">
        {label}
      </span>
    </div>
  )
}

function WorkTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-cocoa/25 bg-cream-paper/85 px-2 py-0.5 text-xs font-semibold text-cocoa-800 dark:text-cocoa-950"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function WorkBento() {
  const [featured, ...rest] = workHighlights

  return (
    <div className="space-y-8">
      {/* Featured folder */}
      <Reveal>
        <div className="group relative pt-8 transition-transform duration-200 hover:-translate-y-1">
          <FolderTab label={`01 · ${featured.category}`} color={BLOCK_COLORS[0]} />
          <div
            className={`shadow-sticker relative rounded-b-xl rounded-tr-xl border-2 border-cocoa p-7 dark:border-sand/50 md:p-9 ${BLOCK_COLORS[0]}`}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex-1 space-y-4">
                <div className="flex h-12 w-12 -rotate-3 items-center justify-center rounded-xl border-2 border-cocoa bg-cream-paper text-cocoa-800 dark:border-cocoa-950">
                  <featured.icon aria-hidden="true" className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-extrabold leading-snug text-cocoa-800 dark:text-cocoa-950 md:text-3xl">
                  {featured.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-cocoa-800 dark:text-cocoa-950">
                  {featured.description}
                </p>
                <WorkTags tags={featured.tags} />
              </div>
              <div className="flex-shrink-0">
                <StatusBadge stat={featured.stat} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Folder grid */}
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((work, i) => {
          const color = BLOCK_COLORS[(i + 1) % BLOCK_COLORS.length]
          return (
            <Reveal
              key={work.title}
              className="flex"
              delay={(i % 3) * 0.08}
              tilt={i % 2 === 0 ? -2 : 2}
            >
              <div className="group relative flex w-full flex-col pt-8 transition-transform duration-200 hover:-translate-y-1">
                <FolderTab
                  label={`${String(i + 2).padStart(2, '0')} · ${work.category}`}
                  color={color}
                />
                <div
                  className={`shadow-sticker relative flex flex-1 flex-col justify-between rounded-b-xl rounded-tr-xl border-2 border-cocoa p-6 dark:border-sand/50 ${color}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 rotate-2 items-center justify-center rounded-lg border-2 border-cocoa bg-cream-paper text-cocoa-800 dark:border-cocoa-950">
                        <work.icon aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <StatusBadge stat={work.stat} />
                    </div>
                    <h3 className="text-base font-bold leading-snug text-cocoa-800 dark:text-cocoa-950">
                      {work.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-cocoa-800 dark:text-cocoa-950">
                      {work.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <WorkTags tags={work.tags.slice(0, 4)} />
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pb-12 pt-10 sm:px-6 md:pt-16 xl:max-w-5xl xl:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="mb-1 flex items-end justify-center gap-1 lg:justify-start">
              <span className="-rotate-3 font-hand text-2xl font-bold text-coral-deep dark:text-coral md:text-3xl">
                my name is
              </span>
              <DoodleArrow className="h-9 w-12 translate-y-4 text-coral-deep dark:text-coral" />
            </div>

            <div className="relative isolate inline-block">
              <h2 className="font-heading text-5xl font-extrabold tracking-tight text-cocoa-800 dark:text-cream sm:text-6xl lg:text-7xl">
                Hi, I'm Mita!
              </h2>
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-1 right-1 -z-10 h-4 -rotate-1 rounded-sm bg-blush dark:bg-coral-muted/60 md:h-5"
              />
              <Sparkle className="absolute -right-7 -top-4 h-7 w-7 text-coral" />
              <Sparkle className="absolute -left-6 bottom-2 h-4 w-4 text-teal" />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="shadow-sticker -rotate-2 rounded-full border-2 border-cocoa bg-teal px-4 py-1 text-sm font-bold text-cocoa-800 dark:border-sand/50 dark:bg-teal-muted dark:text-cocoa-950">
                Frontend Engineer
              </span>
              <span className="shadow-sticker rotate-1 rounded-full border-2 border-cocoa bg-cream-paper px-4 py-1 text-sm font-bold text-cocoa-800 dark:border-sand/50 dark:bg-cocoa-900 dark:text-cream">
                Web · Desktop · Mobile
              </span>
              <span className="shadow-sticker rotate-1 rounded-full border-2 border-cocoa bg-blush px-4 py-1 text-sm font-bold text-cocoa-800 dark:border-sand/50 dark:bg-blush-muted dark:text-cocoa-950">
                Gen AI
              </span>
              <span className="shadow-sticker -rotate-1 rounded-full border-2 border-cocoa bg-sand px-4 py-1 text-sm font-bold text-cocoa-800 dark:border-sand/50 dark:bg-sand-muted dark:text-cocoa-950">
                Remote GMT+7
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cocoa dark:text-sand md:text-lg lg:mx-0">
              Frontend Engineer who loves the visual side. Building for web, desktop, and mobile
              with React, Remix, Astro, Electron, and React Native. Currently building Gen AI
              solutions at Axrail.
            </p>

            {/* Stats */}
            <div className="mx-auto my-7 grid max-w-sm grid-cols-2 gap-3 sm:max-w-none sm:grid-cols-4 lg:mx-0">
              {STATS.map(({ value, label, color, tilt }) => (
                <div key={label} className={`torn-tape px-4 py-3 text-center ${color} ${tilt}`}>
                  <div className="font-heading text-xl font-extrabold text-cocoa-800 dark:text-cocoa-950">
                    {value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cocoa-800 dark:text-cocoa-950">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <SocialMedia />
            </div>
          </div>

          {/* Taped polaroid on a polka-dot fabric swatch */}
          <div className="relative isolate mx-auto w-56 sm:w-64 lg:w-72">
            <div
              aria-hidden="true"
              className="polka-blue absolute -inset-x-5 -inset-y-4 -z-10 -rotate-6 rounded-[2rem] border-2 border-cocoa dark:border-sand/40 sm:-inset-x-7 sm:-inset-y-6"
            />
            <Polaroid
              caption="that's me!"
              className="rotate-3 transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]"
            >
              <Image
                src="/static/images/me.jpg"
                alt="Mita"
                width={288}
                height={384}
                priority
                className="aspect-[3/4] w-full bg-sand object-cover object-center"
              />
            </Polaroid>
            <div
              aria-hidden="true"
              className="shadow-sticker absolute -left-6 -top-5 flex h-16 w-16 -rotate-12 items-center justify-center rounded-full border-2 border-cocoa bg-coral font-hand text-xl font-bold text-cocoa-800 motion-safe:animate-wiggle dark:border-sand/50 dark:bg-coral-muted dark:text-cocoa-950"
            >
              hello!
            </div>
            <Sparkle className="absolute -bottom-3 -right-5 h-6 w-6 text-teal" />
          </div>
        </div>
      </section>

      <SectionContainer>
        {/* Recent Work Highlights */}
        <div className="my-8">
          <Reveal tilt={1}>
            <StripeHeading note="things I shipped lately">Recent Work Highlights</StripeHeading>
          </Reveal>
          <WorkBento />
        </div>

        {/* Polka-dot divider */}
        <div aria-hidden="true" className="polka-line mx-auto mt-16 w-44 text-coral" />

        {/* Certification: cream card with tape and a stamp badge */}
        <div className="mt-12">
          <Reveal>
            <StickerHeading note="officially stamped!">Certification</StickerHeading>
          </Reveal>
          <Reveal delay={0.08} tilt={1.5}>
            <a
              href="https://www.credly.com/badges/9b7b8876-15c5-451a-b7f7-1989920a44d5/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl border-2 border-cocoa bg-cream-paper p-7 transition-transform duration-200 hover:-translate-y-1 dark:border-sand/50 dark:bg-cocoa-900 md:p-8"
            >
              <Tape className="-top-3 left-8 -rotate-6 bg-teal" />
              <Tape className="-top-3 right-8 rotate-6 bg-coral" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* Stamp */}
                <div className="flex h-24 w-24 flex-shrink-0 -rotate-6 items-center justify-center rounded-full border-[3px] border-cocoa text-cocoa dark:border-sand dark:text-sand">
                  <div className="flex h-[4.6rem] w-[4.6rem] flex-col items-center justify-center rounded-full border-2 border-dashed border-cocoa dark:border-sand">
                    <span className="font-heading text-xl font-extrabold leading-none">AWS</span>
                    <span className="mt-1 text-[9px] font-bold uppercase tracking-widest">
                      Certified
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-deep dark:text-teal">
                    Amazon Web Services
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-extrabold text-cocoa-800 dark:text-cream md:text-2xl">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="mt-1 break-all text-sm text-cocoa-light dark:text-sand sm:break-normal">
                    Issued Nov 2025 · Expires Nov 2028 · ID 9b7b8876-15c5-451a-b7f7-1989920a44d5
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="shadow-sticker inline-flex items-center gap-2 rounded-lg border-2 border-cocoa bg-cocoa px-4 py-2.5 text-sm font-bold text-cream transition-colors group-hover:bg-cocoa-800 dark:border-sand/50 dark:bg-sand dark:text-cocoa-950 dark:group-hover:bg-cream">
                    View credential
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Polka-dot divider */}
        <div aria-hidden="true" className="polka-line mx-auto mt-16 w-44 text-teal" />

        {/* Latest Posts */}
        <div className="mt-12">
          <Reveal>
            <StickerHeading note="fresh from my notebook">Latest Posts</StickerHeading>
          </Reveal>
          {!posts.length && <p className="text-cocoa-light dark:text-sand">No posts found.</p>}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.slice(0, MAX_DISPLAY).map((post, i) => {
              const { slug, date, title, summary, tags } = post
              return (
                <Reveal
                  key={slug}
                  className="h-full"
                  delay={(i % 2) * 0.08}
                  tilt={i % 2 === 0 ? -1.5 : 1.5}
                >
                  <Link href={`/blog/${slug}`} className="group block h-full">
                    <article className="relative flex h-full flex-col justify-between rounded-lg border-2 border-cocoa/80 bg-cream-paper p-6 pt-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg] dark:border-sand/40 dark:bg-cocoa-900">
                      <Tape
                        className={`-top-3 left-1/2 h-5 w-16 -translate-x-1/2 ${
                          i % 2 === 0 ? '-rotate-3' : 'rotate-3'
                        } ${TAPE_COLORS[i % TAPE_COLORS.length]}`}
                      />
                      <div className="space-y-2">
                        <time
                          dateTime={date}
                          className="font-hand text-lg font-bold text-coral-deep dark:text-coral"
                        >
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                        <h3 className="text-base font-bold leading-snug text-cocoa-800 decoration-coral decoration-2 underline-offset-4 group-hover:underline dark:text-cream">
                          {title}
                        </h3>
                        {summary && (
                          <p className="line-clamp-2 text-sm leading-relaxed text-cocoa-light dark:text-sand">
                            {summary}
                          </p>
                        )}
                      </div>
                      {tags && tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-sand px-2.5 py-0.5 text-xs font-semibold text-cocoa-800 dark:bg-sand-muted dark:text-cocoa-950"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="shadow-sticker inline-flex items-center gap-2 rounded-lg border-2 border-cocoa bg-cream-paper px-6 py-3 text-sm font-bold text-cocoa-800 transition-colors hover:bg-blush dark:border-sand/50 dark:bg-cocoa-900 dark:text-cream dark:hover:bg-cocoa-800"
              aria-label="All posts"
            >
              All Posts
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </SectionContainer>
    </>
  )
}
