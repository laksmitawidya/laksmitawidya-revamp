'use client'

import { useEffect } from 'react'
import { MotionConfig, motion } from 'framer-motion'

// The first page load is server rendered and must stay visible before hydration,
// so only client-side navigations get the "paper sheet slides in" animation.
let isFirstLoad = true

export default function Template({ children }: { children: React.ReactNode }) {
  const initial = isFirstLoad ? false : { opacity: 0, y: 18, rotate: -0.6 }

  useEffect(() => {
    isFirstLoad = false
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.8 }}
        style={{ transformOrigin: '50% 0%' }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}
