'use client'

import { ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import Reveal from '@/components/ui/Reveal'
import BlurText from '@/components/ui/BlurText'
import Magnetic from '@/components/ui/Magnetic'
import Marquee from '@/components/ui/Marquee'
import AboutIntro from '@/components/AboutIntro'
import { RollText, ScrollAway } from '@/components/ui/ScrollMotion'
import Dock from '@/components/ui/Dock'
import SectionHeading from '@/components/ui/SectionHeading'
import StackCards from '@/components/ui/StackCards'
import HoloCard from '@/components/ui/HoloCard'
import { TextSelect } from '@/components/ui/Selection'
import workHighlights from '@/data/workHighlights'

const MAX_DISPLAY = 3

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function FloatTag({
  children,
  className,
  depth,
  mx,
  my,
  rotate,
  delay,
  bg,
}: {
  children: ReactNode
  className: string
  bg: string
  depth: number
  mx: MotionValue<number>
  my: MotionValue<number>
  rotate: number
  delay: number
}) {
  // Mouse parallax: tags further "forward" (bigger depth) drift further
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay }}
      className={`absolute hidden xl:block ${className}`}
    >
      <div
        className={`animate-float rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink shadow-card ${bg}`}
        style={{ ['--r' as string]: `${rotate}deg`, animationDelay: `${delay * -3}s` }}
      >
        {children}
      </div>
    </motion.div>
  )
}

function Hero() {
  const mxRaw = useMotionValue(0)
  const myRaw = useMotionValue(0)
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 18 })
  const my = useSpring(myRaw, { stiffness: 60, damping: 18 })

  return (
    <section
      className="px-3 sm:px-6"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        mxRaw.set(e.clientX / window.innerWidth - 0.5)
        myRaw.set(e.clientY / window.innerHeight - 0.5)
      }}
    >
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-peri via-lilac/70 to-canvas px-5 pb-28 pt-16 dark:from-[#1d1c38] dark:via-[#1a1530] dark:to-night sm:pt-24 md:pb-36">
        {/* Drifting colour blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-80 w-80 animate-blob rounded-full bg-sky-strong/25 blur-3xl" />
          <div className="absolute -right-10 top-24 h-96 w-96 animate-blob rounded-full bg-rose-strong/20 blur-3xl [animation-delay:-5s]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-butter-strong/25 blur-3xl [animation-delay:-10s]" />
        </div>

        {/* Floating tags around the headline */}
        <FloatTag
          mx={mx}
          my={my}
          depth={-40}
          rotate={-8}
          delay={0.9}
          bg="bg-sky"
          className="left-[7%] top-[22%]"
        >
          ✦ Frontend Engineer
        </FloatTag>
        <FloatTag
          mx={mx}
          my={my}
          depth={50}
          rotate={6}
          delay={1.0}
          bg="bg-rose"
          className="right-[8%] top-[18%]"
        >
          🤖 Gen AI builder
        </FloatTag>
        <FloatTag
          mx={mx}
          my={my}
          depth={30}
          rotate={5}
          delay={1.1}
          bg="bg-butter"
          className="bottom-[24%] left-[3%] 2xl:left-[8%]"
        >
          Web · Desktop · Mobile
        </FloatTag>
        <FloatTag
          mx={mx}
          my={my}
          depth={-30}
          rotate={-6}
          delay={1.2}
          bg="bg-mint"
          className="bottom-[28%] right-[3%] 2xl:right-[8%]"
        >
          📍 Yogyakarta · GMT+7
        </FloatTag>

        <ScrollAway className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-night-text/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-strong opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-strong" />
            </span>
            Currently building Gen AI products at Axrail
          </motion.span>

          <h1 className="mt-8 font-heading text-[clamp(2.4rem,7.5vw,5.75rem)] font-medium leading-[1.04] tracking-tighter text-ink [text-wrap:balance] dark:text-night-text">
            <BlurText delay={0.2}>{"Hello! I'm Mita,"}</BlurText>
            <br />
            <BlurText delay={0.45} className="text-[0.72em] text-ink-soft dark:text-night-text/80">
              a frontend engineer who loves{' '}
              <TextSelect key="visual" tone="sky" delay={1.2}>
                <span className="text-ink dark:text-night-text">pixel-perfect details.</span>
              </TextSelect>
            </BlurText>
          </h1>

          <Reveal delay={0.9} y={16}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft dark:text-night-text/70 md:text-lg">
              7+ years writing production interfaces for{' '}
              <strong className="font-semibold text-ink dark:text-night-text">
                web, desktop and mobile
              </strong>{' '}
              with React, Remix, Astro, Electron and React Native. These days I also pair with{' '}
              <strong className="font-semibold text-ink dark:text-night-text">
                AI coding tools like Kiro and Claude
              </strong>{' '}
              to move faster, while still owning the review, the tests and what ships.
            </p>
          </Reveal>

          <Reveal delay={1.05} y={16}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-lift transition-colors hover:bg-ink-soft dark:bg-white dark:text-ink dark:hover:bg-night-text"
                >
                  <RollText>See my work</RollText>
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-night-text dark:hover:bg-white/10"
                >
                  <RollText>More about me</RollText>
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </ScrollAway>
      </div>

      {/* Tool dock overlapping the panel's bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mt-12 px-2"
      >
        <Dock />
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Companies strip                                                      */
/* ------------------------------------------------------------------ */

function Companies() {
  return (
    <section className="mt-24">
      <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-muted dark:text-night-text/50">
        Companies I&apos;ve worked at
      </p>
      <div className="relative mt-6 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <Marquee
          items={['Axrail', 'AccelByte', 'Okkami', 'tiket.com', 'Ralali.com']}
          separator={<span className="h-1.5 w-1.5 rounded-full bg-lilac-strong" />}
          className="font-heading text-3xl font-medium tracking-tight text-ink/25 dark:text-white/25 md:text-4xl"
        />
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Certification                                                        */
/* ------------------------------------------------------------------ */

function Certification() {
  return (
    <section className="mx-auto mt-32 max-w-5xl px-4 sm:px-6 xl:px-0">
      <SectionHeading
        index="02"
        eyebrow="Credentials"
        title={[
          'officially ',
          <TextSelect key="c" tone="mint">
            certified
          </TextSelect>,
        ]}
      />
      <Reveal>
        <HoloCard>
          <a
            href="https://www.credly.com/badges/9b7b8876-15c5-451a-b7f7-1989920a44d5/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Verify ↗"
            className="surface relative flex flex-col gap-6 overflow-hidden rounded-[2rem] p-7 shadow-card sm:flex-row sm:items-center md:p-10"
          >
            <div
              aria-hidden="true"
              className="holo pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60 dark:mix-blend-screen dark:group-hover:opacity-25"
            />
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#232f3e] to-[#3b4a5e] shadow-lift">
              <div className="flex h-[5.2rem] w-[5.2rem] flex-col items-center justify-center rounded-full border border-dashed border-[#FF9900]/70">
                <span className="font-heading text-xl font-semibold text-white">AWS</span>
                <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#FF9900]">
                  Certified
                </span>
              </div>
            </div>
            <div className="relative flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-sky-deep dark:text-sky-strong">
                Amazon Web Services
              </p>
              <h3 className="mt-1 font-heading text-2xl font-medium tracking-tight text-ink dark:text-night-text md:text-3xl">
                AWS Certified Cloud Practitioner
              </h3>
              <p className="mt-2 break-all text-sm text-ink-muted dark:text-night-text/60 sm:break-normal">
                Issued Nov 2025 · Expires Nov 2028 · ID 9b7b8876-15c5-451a-b7f7-1989920a44d5
              </p>
            </div>
            <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-ink sm:self-center">
              View credential
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </a>
        </HoloCard>
      </Reveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Latest posts                                                         */
/* ------------------------------------------------------------------ */

const POST_ACCENTS = ['bg-sky-strong', 'bg-rose-strong', 'bg-butter-strong', 'bg-mint-strong']

function LatestPosts({ posts }) {
  return (
    <section className="mx-auto mt-32 max-w-5xl px-4 sm:px-6 xl:px-0">
      <SectionHeading
        index="03"
        eyebrow="Writing"
        title={[
          'fresh from my ',
          <TextSelect key="n" tone="rose">
            notebook
          </TextSelect>,
        ]}
        aside={
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white dark:border-white/15 dark:text-night-text dark:hover:bg-white dark:hover:text-ink md:self-auto"
          >
            All articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />
      {!posts.length && <p className="text-ink-muted">No posts found.</p>}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {posts.slice(0, MAX_DISPLAY).map((post, i) => {
          const { slug, date, title, summary, tags } = post
          return (
            <Reveal key={slug} className="h-full" delay={i * 0.08}>
              <Link
                href={`/blog/${slug}`}
                data-cursor="Read"
                className="surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-[3] ${
                    POST_ACCENTS[i % POST_ACCENTS.length]
                  }`}
                />
                <time
                  dateTime={date}
                  className="relative text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/60"
                >
                  {formatDate(date, siteMetadata.locale)}
                </time>
                <h3 className="relative mt-3 font-heading text-lg font-medium leading-snug text-ink dark:text-night-text">
                  {title}
                </h3>
                {summary && (
                  <p className="relative mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted dark:text-night-text/60">
                    {summary}
                  </p>
                )}
                {tags && tags.length > 0 && (
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-xs font-medium text-ink-soft dark:bg-white/[0.06] dark:text-night-text/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </Reveal>
          )
        })}
      </div>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-12">
          <NewsletterForm />
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <Companies />
      <AboutIntro />

      {/* Client work: cards pin and pile up as you scroll */}
      <section id="work" className="mx-auto mt-32 max-w-5xl scroll-mt-28 px-4 sm:px-6 xl:px-0">
        <SectionHeading
          index="01"
          eyebrow="Selected client work"
          title={[
            'recent ',
            <TextSelect key="w" tone="lilac">
              highlights
            </TextSelect>,
          ]}
          intro="Things I shipped lately at Axrail, from Gen AI proofs-of-concept to portals running in production."
        />
        <StackCards items={workHighlights} />
        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white dark:border-white/15 dark:text-night-text dark:hover:bg-white dark:hover:text-ink"
          >
            Full project history
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      <Certification />
      <LatestPosts posts={posts} />
    </>
  )
}
