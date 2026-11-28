'use client'

import { ReactNode, useRef } from 'react'
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'

// Reduced motion is handled in CSS (`motion-reduce:` overrides) rather than by branching on
// useReducedMotion(): the server can't know the visitor's setting, so branching makes the
// server and client markup differ and React throws a hydration error.

/**
 * Moves its children at a different speed from the page while it scrolls past.
 * `speed` is the total travel in pixels: positive drifts up, negative drifts down.
 */
export function Parallax({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const raw = useTransform(scrollYProgress, [0, 1], [speed / 2, -speed / 2])
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`motion-reduce:!transform-none ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.18, 1])
  return (
    <span className="relative">
      <motion.span style={{ opacity }} className="motion-reduce:!opacity-100">
        {children}
      </motion.span>{' '}
    </span>
  )
}

/**
 * A paragraph whose words light up one by one as it scrolls through the viewport,
 * like a reading highlight following your eyes. Screen readers get the plain text.
 */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          >
            {word}
          </Word>
        ))}
      </span>
    </p>
  )
}

/**
 * Wraps a block that drifts up, shrinks slightly and fades as you scroll past it,
 * so the hero gently gives way to the content underneath.
 */
export function ScrollAway({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`motion-reduce:!transform-none motion-reduce:!opacity-100 ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

/**
 * Button label that rolls up on hover and is replaced by an identical copy from below.
 * Put it inside an element with the `group` class. Pure CSS, so it costs nothing at rest.
 */
export function RollText({ children }: { children: string }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full motion-reduce:transition-none">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:transition-none"
      >
        {children}
      </span>
    </span>
  )
}
