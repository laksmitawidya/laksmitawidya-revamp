'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * Fades children up out of a soft blur when they scroll into view.
 * Reduced motion is handled by the MotionConfig in app/theme-providers.tsx.
 *
 * Keep hover transforms on a child element: framer-motion owns this wrapper's transform.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  tilt = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  tilt?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, rotate: tilt, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' }}
      // 'some' + a bottom margin: tall blocks (a long article) still reveal as soon as they enter
      viewport={{ once: true, amount: 'some', margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
