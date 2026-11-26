'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

const DOTS = [
  'bg-sky-strong',
  'bg-rose-strong',
  'bg-butter-strong',
  'bg-mint-strong',
  'bg-lilac-strong',
]

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!navRef.current) return
    if (open) disableBodyScroll(navRef.current)
    else enableBodyScroll(navRef.current)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => clearAllBodyScrollLocks, [])

  return (
    <>
      <button
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white dark:bg-white dark:text-ink sm:hidden"
      >
        <span className="relative block h-3 w-4">
          <span
            className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${
              open ? 'top-1.5 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-all duration-300 ${
              open ? 'top-1.5 -rotate-45' : 'top-2.5'
            }`}
          />
        </span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={navRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
                exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
                transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                className="bg-canvas-dots fixed inset-0 z-[95] flex flex-col justify-between px-8 pb-10 pt-28 sm:hidden"
              >
                <nav className="flex flex-col gap-2">
                  {headerNavLinks.map((link, i) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        delay: 0.15 + i * 0.07,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 py-2 font-heading text-5xl font-medium tracking-tight text-ink dark:text-night-text"
                      >
                        <span className={`h-3 w-3 rounded-full ${DOTS[i % DOTS.length]}`} />
                        {link.title.toLowerCase()}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href={`mailto:${siteMetadata.email}`}
                  className="self-start rounded-full bg-ink px-6 py-3 text-sm font-medium text-white dark:bg-white dark:text-ink"
                >
                  Say hello →
                </motion.a>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-2xl leading-none text-white dark:bg-white dark:text-ink"
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}

export default MobileNav
