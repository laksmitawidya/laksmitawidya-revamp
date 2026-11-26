'use client'

import { useEffect, useState } from 'react'
import { INTRO_STORAGE_KEY } from './introBoot'

// Total time the intro stays up, counted from navigation start
const INTRO_MS = 1100
const EXIT_MS = 480

export default function IntroLoader() {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('intro-pending')) return

    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
    } catch {
      // Storage can be blocked; the intro then simply shows again next time
    }

    let finished = false
    let removeTimer: number | undefined
    const finish = () => {
      if (finished) return
      finished = true
      setLeaving(true)
      removeTimer = window.setTimeout(() => root.classList.remove('intro-pending'), EXIT_MS)
    }

    const remaining = Math.max(0, INTRO_MS - performance.now())
    const timer = window.setTimeout(finish, remaining)
    window.addEventListener('keydown', finish)
    window.addEventListener('pointerdown', finish)

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(removeTimer)
      window.removeEventListener('keydown', finish)
      window.removeEventListener('pointerdown', finish)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`intro-overlay bg-canvas-dots ${leaving ? 'intro-leaving' : ''}`}
    >
      <p className="font-heading text-5xl font-medium tracking-tight text-ink dark:text-night-text sm:text-7xl">
        <span className="intro-word" style={{ animationDelay: '0ms' }}>
          hello,
        </span>{' '}
        <span className="intro-word" style={{ animationDelay: '90ms' }}>
          I&apos;m
        </span>{' '}
        <span className="relative inline-block">
          <span className="intro-word" style={{ animationDelay: '180ms' }}>
            mita
          </span>
          <span className="intro-box absolute -inset-x-2 -inset-y-0.5 border-[1.5px] border-sky-strong">
            {[
              '-left-[5px] -top-[5px]',
              '-right-[5px] -top-[5px]',
              '-bottom-[5px] -left-[5px]',
              '-bottom-[5px] -right-[5px]',
            ].map((pos) => (
              <span
                key={pos}
                className={`intro-handle absolute h-[9px] w-[9px] border-[1.5px] border-sky-strong bg-white ${pos}`}
              />
            ))}
          </span>
        </span>
      </p>
    </div>
  )
}
