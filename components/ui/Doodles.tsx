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

/** Section heading that sits on a polka-dot band, like a label stuck on fabric. */
export function StripeHeading({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="polka-blue relative mb-10 flex items-center justify-center rounded-xl border-2 border-cocoa px-4 py-6 dark:border-sand/40">
      <h2 className="shadow-sticker -rotate-1 rounded-lg border-2 border-cocoa bg-cream px-5 py-2 font-heading text-xl font-extrabold uppercase tracking-wide text-cocoa dark:border-sand/60 dark:bg-cocoa-900 dark:text-cream md:text-2xl">
        {children}
      </h2>
      {note && (
        <span className="absolute -bottom-4 right-4 rotate-3 rounded-md bg-cream-paper px-2 font-hand text-xl font-bold text-coral-deep ring-1 ring-cocoa/15 dark:bg-cocoa-900 dark:text-coral md:right-10">
          {note}
        </span>
      )}
    </div>
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
