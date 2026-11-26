'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

// The first page load is server rendered and must stay visible before hydration,
// so only client-side navigations get the fade-up page transition.
let isFirstLoad = true

export default function Template({ children }: { children: React.ReactNode }) {
  const initial = isFirstLoad ? false : { opacity: 0, y: 24 }

  useEffect(() => {
    isFirstLoad = false
  }, [])

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
