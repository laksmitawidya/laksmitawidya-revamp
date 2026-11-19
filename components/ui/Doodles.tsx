import { ReactNode } from 'react'
import { cn } from '@/components/lib/utils'

/** Translucent washi tape strip. Pass position, rotation and a bg-* color via className. */
export function Tape({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn('washi-tape', className)} />
}

/** Small four point sparkle. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn('h-5 w-5 fill-current motion-safe:animate-twinkle', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c.6 5.6 3.4 9.4 12 12-8.6 2.6-11.4 6.4-12 12-.6-5.6-3.4-9.4-12-12 8.6-2.6 11.4-6.4 12-12z" />
    </svg>
  )
}

/** Hand drawn curly arrow. Points down and to the right by default; rotate or flip with className. */
export function DoodleArrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-10 w-14', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6c10-4 22-2 26 8 3 8-6 12-9 6-3-7 9-11 19-6 8 4 13 13 16 26" />
      <path d="M49 31l7 9 5-11" />
    </svg>
  )
}

/** Polaroid frame held by a strip of washi tape. */
export function Polaroid({
  children,
  caption,
  className,
  tapeClassName = 'bg-blush',
}: {
  children: ReactNode
  caption?: string
  className?: string
  tapeClassName?: string
}) {
  return (
    <figure
      className={cn(
        'relative bg-cream-paper p-3 pb-4 shadow-[0_8px_20px_-6px_rgba(102,81,50,0.35)] ring-1 ring-cocoa/10 dark:bg-cocoa-900 dark:ring-cream/10',
        className
      )}
    >
      <Tape className={cn('-top-3 left-1/2 -translate-x-1/2 -rotate-3', tapeClassName)} />
      {children}
      {caption && (
        <figcaption className="pt-3 text-center font-hand text-2xl font-bold leading-none text-cocoa dark:text-sand">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/** Hand-drawn wavy line, used as a section divider. Color comes from text-* utilities. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-4 w-44', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9c8-7 14-7 22 0s14 7 22 0 14-7 22 0 14 7 22 0 14-7 22 0 14 7 22 0 14-7 22 0 13 6 18 1" />
    </svg>
  )
}

/** Doodled pencil lying on its side, tip pointing right. */
export function Pencil({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 30"
      className={cn('h-auto w-40', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#3A2D1B" strokeWidth={2} strokeLinejoin="round">
        <rect x="2" y="5" width="22" height="20" rx="5" fill="#E8A497" />
        <rect x="24" y="5" width="11" height="20" fill="#E5D4B7" />
        <path d="M35 5h127v20H35z" fill="#60A8AD" />
        <path d="M35 15h127" strokeOpacity={0.35} />
        <path d="M162 5l33 10-33 10z" fill="#F5E6CC" />
        <path d="M184 11.7l11 3.3-11 3.3z" fill="#3A2D1B" />
      </g>
    </svg>
  )
}

/** Doodled ruler with tick marks. */
export function Ruler({ className }: { className?: string }) {
  const ticks = Array.from({ length: 23 }, (_, i) => i)
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 44"
      className={cn('h-auto w-56', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="236"
        height="40"
        rx="5"
        fill="#CFE4F4"
        stroke="#3A2D1B"
        strokeWidth={2}
      />
      <g stroke="#3A2D1B" strokeWidth={1.5} strokeLinecap="round">
        {ticks.map((i) => (
          <line key={i} x1={10 + i * 10} y1="3" x2={10 + i * 10} y2={i % 5 === 0 ? 17 : 11} />
        ))}
      </g>
      <g fill="#3A2D1B" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
        {[0, 5, 10, 15, 20].map((i) => (
          <text key={i} x={10 + i * 10} y="30">
            {i / 5 + 1}
          </text>
        ))}
      </g>
    </svg>
  )
}

/** Plain sticker-style section label for lighter sections. */
export function StickerHeading({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-end gap-3">
      <h2 className="shadow-sticker inline-flex -rotate-1 items-center gap-2 rounded-lg border-2 border-cocoa bg-sand px-4 py-1.5 font-heading text-lg font-extrabold uppercase tracking-wide text-cocoa-800 dark:border-sand/60 dark:bg-sand-muted dark:text-cocoa-950 md:text-xl">
        {children}
      </h2>
      {note && (
        <span className="font-hand text-xl font-bold text-coral-deep dark:text-coral">{note}</span>
      )}
    </div>
  )
}
