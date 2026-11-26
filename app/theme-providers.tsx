'use client'

import { ThemeProvider } from 'next-themes'
import { MotionConfig } from 'framer-motion'
import siteMetadata from '@/data/siteMetadata'
import { HeroUIProvider } from '@heroui/react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
        {/* Every framer-motion animation on the site honours the OS reduced-motion setting */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </HeroUIProvider>
  )
}
