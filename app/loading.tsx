const CHIPS = [
  { color: 'bg-coral', tilt: '-6deg', delay: '0ms' },
  { color: 'bg-teal', tilt: '4deg', delay: '150ms' },
  { color: 'bg-sand', tilt: '-3deg', delay: '300ms' },
]

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-5"
    >
      <div className="flex items-end gap-3">
        {CHIPS.map(({ color, tilt, delay }) => (
          <span
            key={color}
            aria-hidden="true"
            className={`tape-bounce torn-tape h-7 w-11 ${color}`}
            style={{ ['--tilt' as string]: tilt, animationDelay: delay }}
          />
        ))}
      </div>
      <span className="font-hand text-2xl font-bold text-cocoa dark:text-sand">
        Hold on a sec...
      </span>
      <span className="sr-only">Loading</span>
    </div>
  )
}
