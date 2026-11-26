import { ReactNode } from 'react'

/** Endless horizontal ribbon. Content is rendered twice so the -50% loop is seamless. */
export default function Marquee({
  items,
  className = '',
  reverse = false,
  separator,
}: {
  items: string[]
  className?: string
  reverse?: boolean
  separator?: ReactNode
}) {
  const group = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-6">
          <span>{item}</span>
          {separator ?? <span className="text-[0.7em]">✦</span>}
        </span>
      ))}
    </div>
  )
  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } hover:[animation-play-state:paused]`}
      >
        {group}
        {group}
      </div>
    </div>
  )
}
