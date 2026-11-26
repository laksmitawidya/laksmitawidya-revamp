'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar across the top of the viewport that fills as you scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-90 h-[3px] origin-left bg-gradient-to-r from-sky-strong via-lilac-strong to-rose-strong"
    />
  )
}
