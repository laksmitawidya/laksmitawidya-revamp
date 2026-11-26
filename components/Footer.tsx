'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { TextSelect } from '@/components/ui/Selection'
import Magnetic from '@/components/ui/Magnetic'
import Marquee from '@/components/ui/Marquee'
import BlurText from '@/components/ui/BlurText'

const RIBBON = [
  'Frontend Engineer',
  'Web · Desktop · Mobile',
  'Gen AI',
  'Design-minded',
  'Remote GMT+7',
  'Open to collaborations',
]

function CopyEmail() {
  const [copied, setCopied] = useState(false)

  return (
    <Magnetic strength={0.25}>
      <button
        type="button"
        data-cursor={copied ? 'Copied!' : 'Copy email'}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(siteMetadata.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
          } catch {
            window.location.href = `mailto:${siteMetadata.email}`
          }
        }}
        className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-white shadow-lift transition-colors dark:bg-white dark:text-ink sm:text-base"
      >
        <span>{siteMetadata.email}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 dark:bg-ink/10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? 'done' : 'copy'}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </motion.span>
          </AnimatePresence>
        </span>
      </button>
      <span role="status" className="sr-only">
        {copied ? 'Email address copied' : ''}
      </span>
    </Magnetic>
  )
}

export default function Footer() {
  const social = [
    { label: 'LinkedIn', href: siteMetadata.linkedin ?? '' },
    { label: 'GitHub', href: siteMetadata.github ?? '' },
    { label: 'Email', href: `mailto:${siteMetadata.email}` },
  ].filter((s) => s.href)

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Two crossing ribbons */}
      <div className="relative h-28">
        <Marquee
          items={RIBBON}
          className="absolute inset-x-[-5%] top-8 -rotate-2 bg-sky-strong py-3 font-heading text-base font-medium text-white"
        />
        <Marquee
          items={RIBBON}
          reverse
          className="absolute inset-x-[-5%] top-8 rotate-2 bg-butter-strong py-3 font-heading text-base font-medium text-ink opacity-90"
        />
      </div>

      <div className="px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lilac via-peri to-sky px-6 pb-10 pt-20 dark:from-[#221c35] dark:via-[#1a1b33] dark:to-[#14213a] sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 animate-blob rounded-full bg-rose/70 blur-3xl dark:bg-rose-strong/20"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-10 h-72 w-72 animate-blob rounded-full bg-butter/80 blur-3xl [animation-delay:-6s] dark:bg-butter-strong/10"
          />

          <div className="relative flex flex-col items-center text-center">
            <p className="font-hand text-2xl font-bold text-sky-deep dark:text-sky-strong">
              got an idea brewing?
            </p>
            <h2 className="mt-3 font-heading text-[clamp(3rem,10vw,8rem)] font-medium leading-[0.95] tracking-tighter text-ink dark:text-night-text">
              <BlurText inView>
                {[
                  "let's ",
                  <TextSelect key="w" tone="butter">
                    work
                  </TextSelect>,
                ]}
              </BlurText>
              <br />
              <BlurText inView delay={0.15}>
                {[
                  <TextSelect key="t" tone="sky" delay={0.3}>
                    together
                  </TextSelect>,
                ]}
              </BlurText>
            </h2>
            <p className="mt-6 max-w-md text-base text-ink-soft dark:text-night-text/70">
              Any question, project, or just want to talk frontend and Gen AI? My inbox is always
              open, and I reply fast.
            </p>
            <div className="mt-8">
              <CopyEmail />
            </div>
          </div>

          <div className="relative mt-20 grid gap-10 border-t border-ink/10 pt-10 dark:border-white/10 sm:grid-cols-3">
            <div>
              <p className="font-heading text-2xl font-semibold tracking-tight text-ink dark:text-night-text">
                mita<span className="text-sky-strong">.</span>
              </p>
              <p className="mt-2 max-w-xs text-sm text-ink-soft dark:text-night-text/70">
                Frontend Engineer who loves the visual side, building for web, desktop, and mobile.
              </p>
            </div>
            <nav aria-label="Footer">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/50">
                Navigate
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {headerNavLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink transition-colors hover:text-sky-deep dark:text-night-text dark:hover:text-sky-strong"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/50">
                Elsewhere
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-ink transition-colors hover:text-sky-deep dark:text-night-text dark:hover:text-sky-strong"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-between gap-3 text-xs text-ink-muted dark:text-night-text/50 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Laksmita Widya Astuti · Powered by AI: Kiro, Claude &
              ChatGPT
            </span>
            <span>
              Built with Next.js & Framer Motion · Started from{' '}
              <a
                href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-sky-strong underline-offset-2 hover:text-ink dark:hover:text-night-text"
              >
                Tailwind Nextjs Starter Blog
              </a>{' '}
              by Timothy Lin, thank you!
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
