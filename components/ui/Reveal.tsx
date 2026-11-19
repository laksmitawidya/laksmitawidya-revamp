'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * Pops its children in when they scroll into view, like a sticker being placed:
 * a small lift, a slight tilt that settles, and a gentle spring.
 * Reduced motion is handled by the MotionConfig in app/template.tsx.
 *
 * Keep hover transforms on a child element: framer-motion owns this wrapper's transform.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  tilt = -1.5,
}: {
  children: ReactNode
  className?: string
  delay?: number
  tilt?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22, rotate: tilt, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22, delay }}
    >
      {children}
    </motion.div>
  )
}
