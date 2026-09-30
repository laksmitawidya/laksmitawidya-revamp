'use client'
import React, { useState } from 'react'
import { cn } from '@/components/lib/utils'
import { Project } from '@/data/projectsData'

// Full class names written out so Tailwind JIT picks them all up
const CARD_COLORS = [
  {
    gradient:
      'from-sky-50/70 via-transparent to-cyan-50/70 dark:from-sky-950/30 dark:to-cyan-950/30',
    accent: 'from-sky-300 to-cyan-300 dark:from-sky-700/60 dark:to-cyan-700/60',
    number: 'text-sky-500 dark:text-sky-400',
    hoverBorder: 'hover:border-sky-300 dark:hover:border-sky-700',
  },
  {
    gradient:
      'from-violet-50/70 via-transparent to-purple-50/70 dark:from-violet-950/30 dark:to-purple-950/30',
    accent: 'from-violet-300 to-purple-300 dark:from-violet-700/60 dark:to-purple-700/60',
    number: 'text-violet-500 dark:text-violet-400',
    hoverBorder: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
  {
    gradient:
      'from-rose-50/70 via-transparent to-pink-50/70 dark:from-rose-950/30 dark:to-pink-950/30',
    accent: 'from-rose-300 to-pink-300 dark:from-rose-700/60 dark:to-pink-700/60',
    number: 'text-rose-500 dark:text-rose-400',
    hoverBorder: 'hover:border-rose-300 dark:hover:border-rose-700',
  },
  {
    gradient:
      'from-emerald-50/70 via-transparent to-teal-50/70 dark:from-emerald-950/30 dark:to-teal-950/30',
    accent: 'from-emerald-300 to-teal-300 dark:from-emerald-700/60 dark:to-teal-700/60',
    number: 'text-emerald-500 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-300 dark:hover:border-emerald-700',
  },
  {
    gradient:
      'from-amber-50/70 via-transparent to-orange-50/70 dark:from-amber-950/30 dark:to-orange-950/30',
    accent: 'from-amber-300 to-orange-300 dark:from-amber-700/60 dark:to-orange-700/60',
    number: 'text-amber-500 dark:text-amber-400',
    hoverBorder: 'hover:border-amber-300 dark:hover:border-amber-700',
  },
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

    const CardContent = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'group relative h-60 w-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 ease-out dark:border-gray-800 dark:bg-gray-900/50 md:h-64',
          hovered !== null && hovered !== index && 'scale-[0.98] opacity-50',
          card.href && `cursor-pointer hover:shadow-xl ${color.hoverBorder}`
        )}
      >
        {/* Color gradient overlay on hover */}
        <div
          className={cn(
            `absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 transition-opacity duration-500`,
            hovered === index && 'opacity-100'
          )}
        />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
          {/* Title and number */}
          <div className="space-y-2">
            <div className={`text-sm font-semibold ${color.number}`}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-2xl">
              {card.title}
            </h3>
          </div>

          {/* Description */}
          <div className="space-y-3">
            {card.description && (
              <p
                className={cn(
                  'line-clamp-3 text-sm leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-400',
                  hovered === index ? 'opacity-100' : 'opacity-60'
                )}
              >
                {card.description}
              </p>
            )}

            {/* View project link */}
            {card.href && (
              <div
                className={cn(
                  `flex items-center gap-2 text-sm font-medium transition-all duration-300 ${color.number}`,
                  hovered === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                )}
              >
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

        {/* Colored corner accent */}
        <div
          className={cn(
            `absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${color.accent} opacity-0 transition-opacity duration-500`,
            hovered === index && 'opacity-60'
          )}
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
      </div>
    )

    if (card.href) {
      return (
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-[1.02]"
        >
          {CardContent}
        </a>
      )
    }

    return CardContent
  }
)

Card.displayName = 'Card'

export function FocusCards({ cards }: { cards: Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="mx-auto grid h-full w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:px-8">
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
