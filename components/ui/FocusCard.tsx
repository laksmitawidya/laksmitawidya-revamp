'use client'
import React, { useState } from 'react'
import { cn } from '@/components/lib/utils'
import { Project } from '@/data/projectsData'
import { Tape } from '@/components/ui/Doodles'
import Reveal from '@/components/ui/Reveal'

// Full class names written out so Tailwind JIT picks them all up
const CARD_COLORS = [
  { block: 'bg-teal dark:bg-teal-muted', tape: 'bg-coral' },
  { block: 'bg-coral dark:bg-coral-muted', tape: 'bg-teal' },
  { block: 'bg-sand dark:bg-sand-muted', tape: 'bg-blush' },
  { block: 'bg-blush dark:bg-blush-muted', tape: 'bg-sand' },
]

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Project
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => {
    const color = CARD_COLORS[index % CARD_COLORS.length]
    const number = String(index + 1).padStart(2, '0')

    const CardContent = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'group relative flex h-full flex-col pt-9 transition-all duration-300 ease-out',
          hovered !== null && hovered !== index && 'opacity-70',
          card.href && 'cursor-pointer'
        )}
      >
        {/* Folder tab */}
        <div
          className={`absolute left-0 top-0 z-10 flex h-10 items-center rounded-t-lg border-2 border-b-0 border-cocoa px-4 dark:border-sand/50 ${color.block}`}
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:text-cocoa-950">
            Project {number}
          </span>
        </div>

        {/* Folder body */}
        <div
          className={cn(
            `shadow-sticker relative flex min-h-[15rem] flex-1 flex-col justify-between gap-5 rounded-b-xl rounded-tr-xl border-2 border-cocoa p-6 transition-transform duration-300 dark:border-sand/50 md:p-7 ${color.block}`,
            hovered === index && '-translate-y-1 rotate-[-0.4deg]'
          )}
        >
          <Tape className={`-top-3 right-6 h-5 w-16 rotate-6 ${color.tape}`} />
          <div className="flex-1 space-y-3">
            <h3 className="font-heading text-xl font-extrabold leading-tight text-cocoa-800 dark:text-cocoa-950 md:text-2xl">
              {card.title}
            </h3>
            {card.description && (
              <p className="line-clamp-4 text-sm leading-relaxed text-cocoa-800 dark:text-cocoa-950">
                {card.description}
              </p>
            )}
          </div>

          {/* View project link */}
          {card.href && (
            <div className="inline-flex w-fit items-center gap-2 rounded-md border-2 border-cocoa-800 bg-cream-paper px-3 py-1 text-sm font-bold text-cocoa-800 dark:border-cocoa-950 dark:text-cocoa-950">
              <span>View Project</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    )

    return (
      <Reveal className="h-full" delay={(index % 2) * 0.08} tilt={index % 2 === 0 ? -2 : 2}>
        {card.href ? (
          <a href={card.href} target="_blank" rel="noopener noreferrer" className="block h-full">
            {CardContent}
          </a>
        ) : (
          CardContent
        )}
      </Reveal>
    )
  }
)

Card.displayName = 'Card'

export function FocusCards({ cards }: { cards: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="mx-auto grid h-full w-full max-w-5xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
