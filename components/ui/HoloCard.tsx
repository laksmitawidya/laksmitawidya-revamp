'use client'

import { ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Card that tilts toward the pointer in 3D while a holographic sheen follows it,
 * like turning a collectible card in the light.
 */
export default function HoloCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 })

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        onPointerMove={(e) => {
          if (e.pointerType !== 'mouse' || !ref.current) return
          const r = ref.current.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width
          const y = (e.clientY - r.top) / r.height
          px.set(x)
          py.set(y)
          ref.current.style.setProperty('--mx', `${x * 100}%`)
          ref.current.style.setProperty('--my', `${y * 100}%`)
        }}
        onPointerLeave={() => {
          px.set(0.5)
          py.set(0.5)
        }}
        className="group relative"
      >
        {children}
      </motion.div>
    </div>
  )
}
