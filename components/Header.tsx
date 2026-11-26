'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  // Tuck the bar away while reading down the page, bring it back on any scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > prev && y > 240)
  })

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
  const pill = hovered ?? headerNavLinks.find((l) => isActive(l.href))?.href ?? null

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6"
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border py-2 pl-5 pr-2 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-black/[0.08] bg-white/75 shadow-card dark:border-white/10 dark:bg-night-card/75'
            : 'border-black/[0.06] bg-white/50 dark:border-white/[0.06] dark:bg-night-card/40'
        }`}
      >
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="group flex items-center gap-1 font-heading text-lg font-semibold tracking-tight text-ink dark:text-night-text"
        >
          mita
          <span className="h-2 w-2 rounded-full bg-sky-strong transition-transform duration-300 group-hover:scale-150 group-hover:bg-rose-strong" />
        </Link>

        <ul className="hidden items-center sm:flex" onMouseLeave={() => setHovered(null)}>
          {headerNavLinks.map((link) => (
            <li key={link.title} className="relative">
              <Link
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative z-10 block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  pill === link.href
                    ? 'text-ink dark:text-night-text'
                    : 'text-ink-muted hover:text-ink dark:text-night-text/60 dark:hover:text-night-text'
                }`}
              >
                {link.title}
              </Link>
              {pill === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/10"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <SearchButton />
          <ThemeSwitch />
          <a
            href={`mailto:${siteMetadata.email}`}
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-ink md:inline-flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-strong opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-strong" />
            </span>
            Let&apos;s talk
          </a>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
