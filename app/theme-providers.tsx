'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { HeroUIProvider } from '@heroui/react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  )
}
