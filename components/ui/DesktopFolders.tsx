'use client'

import { RefObject, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'

export type DesktopItem = {
  label: string
  href: string
  /** Position inside the desktop area, as percentages */
  x: number
  y: number
  external?: boolean
}

function Folder({
  item,
  constraints,
  draggable,
  index,
}: {
  item: DesktopItem
  constraints: RefObject<HTMLDivElement | null>
  draggable: boolean
  index: number
}) {
  const dragged = useRef(false)
  const Anchor = item.external ? 'a' : NextLink

  return (
    <motion.div
      className="absolute z-10"
      style={{ left: `${item.x}%`, top: `${item.y}%` }}
      drag={draggable}
      dragConstraints={constraints}
      dragElastic={0.15}
      dragMomentum
      onDragStart={() => (dragged.current = true)}
      onDragEnd={() => setTimeout(() => (dragged.current = false), 0)}
      whileDrag={{ scale: 1.08, rotate: -3, zIndex: 30 }}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 + index * 0.08 }}
    >
      <Anchor
        href={item.href}
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        data-cursor={draggable ? 'Drag · Open' : undefined}
        onClick={(e) => {
          if (dragged.current) e.preventDefault()
        }}
        draggable={false}
        className="group flex w-20 select-none flex-col items-center gap-1.5 rounded-lg p-1.5 focus-visible:bg-sky/60"
      >
        <span className="mac-folder block h-12 w-16 transition-transform duration-200 group-hover:-translate-y-0.5" />
        <span className="rounded px-1.5 py-0.5 text-center text-xs font-medium text-ink group-hover:bg-sky-strong group-hover:text-white dark:text-night-text">
          {item.label}
        </span>
      </Anchor>
    </motion.div>
  )
}

/**
 * Desktop-style folders scattered around whatever sits in the middle. On a mouse they can be
 * dragged around (a click still opens them); on touch they are simply tappable.
 */
export default function DesktopFolders({
  items,
  children,
  className = '',
}: {
  items: DesktopItem[]
  children?: React.ReactNode
  className?: string
}) {
  const area = useRef<HTMLDivElement>(null)
  const [draggable, setDraggable] = useState(false)

  useEffect(() => {
    setDraggable(window.matchMedia('(pointer: fine)').matches)
  }, [])

  return (
    <div ref={area} className={`relative ${className}`}>
      {children}
      {items.map((item, i) => (
        <Folder key={item.label} item={item} constraints={area} draggable={draggable} index={i} />
      ))}
    </div>
  )
}
