'use client'

import { useRef } from 'react'
import { MotionValue, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Drama, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND_PATHS, BrandKey } from './brandIcons'

type Glyph = { brand: BrandKey } | { icon: LucideIcon } | { text: string }
type Tool = { name: string; glyph: Glyph; bg: string; fg: string }

// App-icon tiles: the real logo (from Simple Icons) on a tile in the brand's colours.
// AWS and Playwright aren't in Simple Icons, so they get a wordmark and a stand-in icon.
export const TOOLS: Tool[] = [
  {
    name: 'React',
    glyph: { brand: 'react' },
    bg: 'from-[#20232a] to-[#2f3440]',
    fg: 'text-[#61DAFB]',
  },
  {
    name: 'TypeScript',
    glyph: { brand: 'typescript' },
    bg: 'from-white to-[#eef3fb]',
    fg: 'text-[#3178C6]',
  },
  { name: 'Next.js', glyph: { brand: 'nextjs' }, bg: 'from-[#1a1a1a] to-black', fg: 'text-white' },
  { name: 'Remix', glyph: { brand: 'remix' }, bg: 'from-[#1f1f1f] to-[#0b0b0b]', fg: 'text-white' },
  {
    name: 'Astro',
    glyph: { brand: 'astro' },
    bg: 'from-[#2a1a3d] to-[#17101f]',
    fg: 'text-[#ff8a4c]',
  },
  {
    name: 'Electron',
    glyph: { brand: 'electron' },
    bg: 'from-[#2b2e3a] to-[#1d1f27]',
    fg: 'text-[#9FEAF9]',
  },
  {
    name: 'Node.js',
    glyph: { brand: 'nodejs' },
    bg: 'from-white to-[#eef6ea]',
    fg: 'text-[#5FA04E]',
  },
  {
    name: 'Python',
    glyph: { brand: 'python' },
    bg: 'from-[#ffe873] to-[#ffd43b]',
    fg: 'text-[#306998]',
  },
  {
    name: 'Tailwind CSS',
    glyph: { brand: 'tailwind' },
    bg: 'from-white to-[#e8f8fc]',
    fg: 'text-[#06B6D4]',
  },
  {
    name: 'Framer Motion',
    glyph: { brand: 'framer' },
    bg: 'from-[#2b6bff] to-[#0047e1]',
    fg: 'text-white',
  },
  { name: 'AWS', glyph: { text: 'aws' }, bg: 'from-[#2c3a4d] to-[#232F3E]', fg: 'text-white' },
  {
    name: 'Bedrock · Gen AI',
    glyph: { icon: Sparkles },
    bg: 'from-[#01a88d] to-[#05705c]',
    fg: 'text-white',
  },
  {
    name: 'Playwright',
    glyph: { icon: Drama },
    bg: 'from-[#2d4552] to-[#1f323c]',
    fg: 'text-[#45ba4b]',
  },
  {
    name: 'Storybook',
    glyph: { brand: 'storybook' },
    bg: 'from-[#ff4785] to-[#e0306b]',
    fg: 'text-white',
  },
  { name: 'Figma', glyph: { brand: 'figma' }, bg: 'from-[#1e1e1e] to-[#0f0f0f]', fg: 'text-white' },
]

function ToolGlyph({ glyph }: { glyph: Glyph }) {
  if ('brand' in glyph) {
    return (
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%] fill-current">
        <path d={BRAND_PATHS[glyph.brand]} />
      </svg>
    )
  }
  if ('icon' in glyph) {
    const Icon = glyph.icon
    return <Icon className="h-[54%] w-[54%]" strokeWidth={1.75} />
  }
  return (
    <span className="relative flex flex-col items-center font-sans text-[clamp(12px,34%,22px)] font-bold leading-none tracking-tight">
      {glyph.text}
      {/* the little orange smile under the wordmark */}
      <svg
        viewBox="0 0 30 8"
        className="mt-[2px] w-[1.6em] fill-none stroke-[#FF9900]"
        strokeWidth={2.6}
        strokeLinecap="round"
      >
        <path d="M2 2 Q15 9 28 2" />
      </svg>
    </span>
  )
}

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
        className={`flex h-full w-full items-center justify-center rounded-[26%] bg-gradient-to-br ring-1 ring-black/10 ${tool.bg} ${tool.fg} shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_12px_-6px_rgba(0,0,0,0.45)]`}
      >
        <ToolGlyph glyph={tool.glyph} />
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
        // Magnify only on wide screens, where the whole dock fits without scrolling
        onPointerMove={(e) =>
          e.pointerType === 'mouse' && window.innerWidth >= 1024 && mouseX.set(e.clientX)
        }
        onPointerLeave={() => mouseX.set(Infinity)}
        className="no-scrollbar mx-auto flex h-[68px] max-w-full items-end gap-2.5 overflow-x-auto rounded-[22px] border border-white/70 bg-white/55 px-3 pb-3 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-night-card/60 lg:w-fit lg:overflow-visible"
      >
        {TOOLS.map((tool) => (
          <DockIcon key={tool.name} tool={tool} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  )
}
