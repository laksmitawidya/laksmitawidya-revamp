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
    <div aria-hidden="true" className={`intro-overlay bg-paper ${leaving ? 'intro-leaving' : ''}`}>
      <div className="intro-card shadow-sticker border-cocoa bg-cream-paper dark:border-sand/50 dark:bg-cocoa-900 relative flex flex-col items-center rounded-xl border-2 px-10 pb-7 pt-6">
        <span className="washi-tape intro-tape bg-teal" />
        <svg
          viewBox="0 0 260 130"
          className="text-cocoa-800 dark:text-cream w-56 sm:w-64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="50%" y="84" textAnchor="middle" className="intro-name">
            hello!
          </text>
          <path
            d="M58 108 q 18 -9 36 0 t 36 0 t 36 0 t 36 0"
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
            className="intro-underline stroke-coral"
          />
        </svg>
        <div className="mt-1 flex items-center gap-2.5">
          <span
            className="intro-dot border-cocoa bg-coral dark:border-sand/60 h-3 w-3 rounded-full border-2"
            style={{ animationDelay: '620ms, 1000ms' }}
          />
          <span
            className="intro-dot border-cocoa bg-teal dark:border-sand/60 h-3 w-3 rounded-full border-2"
            style={{ animationDelay: '720ms, 1150ms' }}
          />
          <span
            className="intro-dot border-cocoa bg-sand dark:border-sand/60 h-3 w-3 rounded-full border-2"
            style={{ animationDelay: '820ms, 1300ms' }}
          />
        </div>
      </div>
    </div>
  )
}
