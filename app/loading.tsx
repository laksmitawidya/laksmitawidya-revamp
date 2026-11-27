const DOTS = [
  { color: 'bg-sky-strong', delay: '0ms' },
  { color: 'bg-rose-strong', delay: '120ms' },
  { color: 'bg-butter-strong', delay: '240ms' },
  { color: 'bg-mint-strong', delay: '360ms' },
]

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-5"
    >
      <div className="flex items-end gap-2.5">
        {DOTS.map(({ color, delay }) => (
          <span
            key={color}
            aria-hidden="true"
            className={`dot-bounce h-3.5 w-3.5 rounded-full ${color}`}
            style={{ animationDelay: delay }}
          />
        ))}
      </div>
      <span className="font-note text-base font-semibold text-ink-soft dark:text-night-text/70">
        loading the good stuff...
      </span>
      <span className="sr-only">Loading</span>
    </div>
  )
}
