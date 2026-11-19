'use client'

import { useEffect, useState } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-end py-6 sm:justify-center">
      <div
        className={`mr-5 flex items-center space-x-4 rounded-2xl border-2 border-cocoa px-5 py-3 leading-5 transition-all duration-300 dark:border-sand/50 sm:mr-0 sm:space-x-6 ${
          scrolled ? 'shadow-sticker bg-cream-paper dark:bg-cocoa-900' : 'bg-sand dark:bg-cocoa-800'
        }`}
      >
        <div className="no-scrollbar mr-5 hidden max-w-40 items-center space-x-1 overflow-x-auto sm:flex sm:space-x-2 md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block whitespace-nowrap rounded-lg px-2.5 py-1 font-semibold text-cocoa-800 transition duration-200 hover:bg-blush motion-safe:hover:-translate-y-0.5 motion-safe:hover:-rotate-2 dark:text-cream dark:hover:bg-cocoa-950"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
