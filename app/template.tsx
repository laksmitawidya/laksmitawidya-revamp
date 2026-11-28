'use client'

import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// The first page load is server rendered and must stay visible before hydration,
// so only client-side navigations get the page transition.
let isFirstLoad = true

const ease = [0.76, 0, 0.24, 1] as const

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  const animateIn = !isFirstLoad
  const initial = animateIn ? { opacity: 0, y: 40 } : false

  useEffect(() => {
    isFirstLoad = false
  }, [])

  return (
    <>
      {/* Two coloured panels sweep up and off the screen, revealing the new page.
          Kept outside the animated wrapper: a transformed parent would trap fixed children. */}
      {animateIn && !reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[96] bg-lilac-strong"
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.7, ease }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[97] bg-sky-strong"
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.6, ease }}
          />
        </>
      )}
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: animateIn && !reduce ? 0.25 : 0,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
