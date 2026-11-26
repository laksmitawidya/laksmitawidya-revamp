'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

type Mode = 'default' | 'link' | 'label' | 'text' | 'hidden'

/**
 * A two-part cursor: a precise dot plus a translucent ring that trails behind on a spring.
 *
 * - Over links and buttons the ring grows.
 * - Over any element with `data-cursor="Open ↗"` (or any label) the ring turns into a
 *   button-like pill showing that label, so cards read as clickable at a glance.
 * - Over text inputs it steps aside so the native caret shows.
 *
 * Only mounts for fine pointers without reduced motion; everyone else keeps the system cursor.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState<Mode>('default')
  const [label, setLabel] = useState('')
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(fine.matches && !reduced.matches)
    update()
    fine.addEventListener('change', update)
    reduced.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      if (!target?.closest) return
      if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        setMode('text')
        return
      }
      const labelled = target.closest<HTMLElement>('[data-cursor]')
      if (labelled) {
        setLabel(labelled.dataset.cursor || '')
        setMode('label')
        return
      }
      if (target.closest('a, button, [role="button"], label, summary')) {
        setMode('link')
        return
      }
      setMode('default')
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('pointerleave', onLeave)

    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  const isLabel = mode === 'label'
  const hidden = !visible || mode === 'text' || mode === 'hidden'

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-100">
      {/* Trailing ring / label pill */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden whitespace-nowrap rounded-full ${
            isLabel
              ? 'bg-sky-strong/90 text-white shadow-lift backdrop-blur-md'
              : 'border border-ink/30 bg-lilac/30 backdrop-blur-[2px] dark:border-white/40 dark:bg-white/10'
          }`}
          animate={{
            width: isLabel ? 'auto' : mode === 'link' ? 56 : 34,
            height: isLabel ? 44 : mode === 'link' ? 56 : 34,
            paddingLeft: isLabel ? 18 : 0,
            paddingRight: isLabel ? 18 : 0,
            scale: pressed ? 0.85 : 1,
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        >
          <AnimatePresence mode="popLayout">
            {isLabel && (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.2 }}
                className="font-heading text-sm font-medium"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ x, y }}
        animate={{ opacity: hidden || isLabel ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink dark:bg-white" />
      </motion.div>
    </div>
  )
}
