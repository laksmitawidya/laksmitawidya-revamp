'use client'

import { ElementType, ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * Splits a sentence into words that rise out of a blur one after another.
 * Pass `children` as an array of strings and React nodes: strings are split into words,
 * nodes (an avatar, a highlight) animate in as a single piece.
 */
export default function BlurText({
  children,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.06,
  inView = false,
}: {
  children: ReactNode | ReactNode[]
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  /** Animate when scrolled into view instead of on mount */
  inView?: boolean
}) {
  const parts = (Array.isArray(children) ? children : [children]).flatMap((part) =>
    typeof part === 'string' ? part.split(/(\s+)/).filter(Boolean) : [part]
  )

  let index = 0
  const trigger = inView
    ? { whileInView: 'show', viewport: { once: true, amount: 0.5 } }
    : { animate: 'show' }

  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (typeof part === 'string' && /^\s+$/.test(part)) return part
        const d = delay + index++ * stagger
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial="hidden"
            {...trigger}
            variants={{
              hidden: { opacity: 0, y: '0.35em', filter: 'blur(10px)' },
              show: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
              },
            }}
          >
            {part}
          </motion.span>
        )
      })}
    </Tag>
  )
}
