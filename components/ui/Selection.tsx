'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const TONES = {
  sky: { fill: 'bg-sky dark:bg-sky-strong/30', caret: 'bg-sky-strong', label: 'bg-sky-strong' },
  butter: {
    fill: 'bg-butter dark:bg-butter-strong/25',
    caret: 'bg-butter-strong',
    label: 'bg-butter-strong text-ink',
  },
  rose: {
    fill: 'bg-rose dark:bg-rose-strong/25',
    caret: 'bg-rose-strong',
    label: 'bg-rose-strong',
  },
  lilac: {
    fill: 'bg-lilac dark:bg-lilac-strong/25',
    caret: 'bg-lilac-strong',
    label: 'bg-lilac-strong',
  },
  mint: {
    fill: 'bg-mint dark:bg-mint-strong/25',
    caret: 'bg-mint-strong',
    label: 'bg-mint-strong',
  },
} as const

export type Tone = keyof typeof TONES

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Looks like text being selected on a phone: a highlight sweeps across the words,
 * then the two drag handles pop in (top-left and bottom-right).
 */
export function TextSelect({
  children,
  tone = 'sky',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  delay?: number
  className?: string
}) {
  const t = TONES[tone]
  return (
    <motion.span
      className={`relative isolate inline-block px-[0.12em] ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.span
        aria-hidden="true"
        className={`absolute inset-y-[0.08em] left-0 right-0 -z-10 origin-left ${t.fill}`}
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.6, ease, delay } },
        }}
      />
      {/* Left handle: knob on top */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-[0.02em] left-0 flex w-0 flex-col items-center"
        variants={{
          hidden: { opacity: 0, scaleY: 0 },
          show: { opacity: 1, scaleY: 1, transition: { duration: 0.3, delay: delay + 0.05 } },
        }}
      >
        <span className={`-mt-[0.12em] h-[0.2em] w-[0.2em] shrink-0 rounded-full ${t.caret}`} />
        <span className={`w-[3px] flex-1 rounded-full ${t.caret}`} />
      </motion.span>
      {/* Right handle: knob at the bottom */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-[0.02em] right-0 flex w-0 flex-col items-center"
        variants={{
          hidden: { opacity: 0, scaleY: 0 },
          show: { opacity: 1, scaleY: 1, transition: { duration: 0.3, delay: delay + 0.55 } },
        }}
      >
        <span className={`w-[3px] flex-1 rounded-full ${t.caret}`} />
        <span className={`-mb-[0.12em] h-[0.2em] w-[0.2em] shrink-0 rounded-full ${t.caret}`} />
      </motion.span>
      {children}
    </motion.span>
  )
}

/**
 * A design-tool selection frame: a thin blue outline with square handles on the corners
 * and an optional layer label, drawn in when it scrolls into view.
 */
export function FigmaFrame({
  children,
  label,
  tone = 'sky',
  className = '',
  delay = 0,
}: {
  children: ReactNode
  label?: string
  tone?: Tone
  className?: string
  delay?: number
}) {
  const t = TONES[tone]
  const border =
    tone === 'sky'
      ? 'border-sky-strong'
      : tone === 'rose'
      ? 'border-rose-strong'
      : tone === 'butter'
      ? 'border-butter-strong'
      : tone === 'mint'
      ? 'border-mint-strong'
      : 'border-lilac-strong'
  const corners = [
    '-left-[5px] -top-[5px]',
    '-right-[5px] -top-[5px]',
    '-bottom-[5px] -left-[5px]',
    '-bottom-[5px] -right-[5px]',
  ]

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.span
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-x-2 -inset-y-1 border-[1.5px] ${border}`}
        variants={{
          hidden: { opacity: 0, scale: 1.08 },
          show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay } },
        }}
      >
        {corners.map((pos, i) => (
          <motion.span
            key={pos}
            className={`absolute h-[9px] w-[9px] border-[1.5px] bg-white ${border} ${pos}`}
            variants={{
              hidden: { scale: 0 },
              show: {
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                  delay: delay + 0.3 + i * 0.05,
                },
              },
            }}
          />
        ))}
        {label && (
          <motion.span
            className={`absolute -top-[1.65rem] left-[-1.5px] whitespace-nowrap rounded-t-md px-1.5 py-0.5 font-sans text-[11px] font-medium leading-tight tracking-normal text-white ${t.label}`}
            variants={{
              hidden: { opacity: 0, y: 6 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3, delay: delay + 0.45 } },
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.span>
      {children}
    </motion.span>
  )
}
