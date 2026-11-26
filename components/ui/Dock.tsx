'use client'

import { useRef } from 'react'
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Tool = { short: string; name: string; bg: string; fg: string }

// App-icon style tiles: a two-letter mark on a brand-ish gradient, like a design suite's icons
export const TOOLS: Tool[] = [
  { short: 'Re', name: 'React', bg: 'from-[#0f1b2d] to-[#1e3a5f]', fg: 'text-[#61DAFB]' },
  { short: 'Ts', name: 'TypeScript', bg: 'from-[#2f74c0] to-[#235a97]', fg: 'text-white' },
  { short: 'Nx', name: 'Next.js', bg: 'from-[#111] to-[#333]', fg: 'text-white' },
  { short: 'Rx', name: 'Remix', bg: 'from-[#121212] to-[#2b2b2b]', fg: 'text-[#E8F2FF]' },
  { short: 'As', name: 'Astro', bg: 'from-[#ff5d01] to-[#c13584]', fg: 'text-white' },
  { short: 'El', name: 'Electron', bg: 'from-[#2b2e3a] to-[#47848f]', fg: 'text-[#9FEAF9]' },
  { short: 'Rn', name: 'React Native', bg: 'from-[#20232a] to-[#3a3f4b]', fg: 'text-[#61DAFB]' },
  { short: 'Tw', name: 'Tailwind CSS', bg: 'from-[#0ea5e9] to-[#14b8a6]', fg: 'text-white' },
  { short: 'Fm', name: 'Framer Motion', bg: 'from-[#e11d74] to-[#7c3aed]', fg: 'text-white' },
  { short: 'Aw', name: 'AWS', bg: 'from-[#232f3e] to-[#3b4a5e]', fg: 'text-[#FF9900]' },
  { short: 'Br', name: 'Bedrock · Gen AI', bg: 'from-[#01a88d] to-[#055f4e]', fg: 'text-white' },
  { short: 'Pw', name: 'Playwright', bg: 'from-[#2d4552] to-[#45ba4b]', fg: 'text-white' },
  { short: 'Sb', name: 'Storybook', bg: 'from-[#ff4785] to-[#e0306b]', fg: 'text-white' },
  { short: 'Fg', name: 'Figma', bg: 'from-[#a259ff] to-[#f24e1e]', fg: 'text-white' },
]

const BASE = 44
const MAX = 72
const RANGE = 150

function DockIcon({ tool, mouseX }: { tool: Tool; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null)
  const distance = useTransform(mouseX, (val) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return RANGE
    return val - r.left - r.width / 2
  })
  const sizeRaw = useTransform(distance, [-RANGE, 0, RANGE], [BASE, MAX, BASE])
  const size = useSpring(sizeRaw, { stiffness: 260, damping: 18, mass: 0.2 })

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="group relative flex shrink-0 items-end"
    >
      <div
        className={`flex h-full w-full items-center justify-center rounded-[26%] bg-gradient-to-br ring-1 ring-black/10 ${tool.bg} shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_12px_-6px_rgba(0,0,0,0.45)]`}
      >
        <span className={`font-heading text-[clamp(14px,40%,26px)] font-semibold ${tool.fg}`}>
          {tool.short}
        </span>
      </div>
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-card transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-white dark:text-ink">
        {tool.name}
      </span>
    </motion.div>
  )
}

/**
 * Tool belt shown as a desktop dock. Icons swell as the pointer passes over them.
 * On touch screens it is a plain scrollable row.
 */
export default function Dock({ className = '' }: { className?: string }) {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className={`relative ${className}`}>
      <p className="sr-only">Tools I work with: {TOOLS.map((t) => t.name).join(', ')}</p>
      <motion.div
        aria-hidden="true"
        onPointerMove={(e) => e.pointerType === 'mouse' && mouseX.set(e.clientX)}
        onPointerLeave={() => mouseX.set(Infinity)}
        className="no-scrollbar mx-auto flex h-[68px] max-w-full items-end gap-2.5 overflow-x-auto rounded-[22px] border border-white/70 bg-white/55 px-3 pb-3 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-night-card/60 sm:w-fit sm:overflow-visible"
      >
        {TOOLS.map((tool) => (
          <DockIcon key={tool.name} tool={tool} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  )
}
