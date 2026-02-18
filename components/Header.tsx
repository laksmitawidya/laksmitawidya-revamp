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
    <header className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-end py-4 sm:justify-center">
      <div
        className={`mr-5 flex items-center space-x-4 rounded-2xl px-5 py-3 leading-5 transition-all duration-300 sm:mr-0 sm:space-x-6 ${
          scrolled
            ? 'border border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/80'
            : 'bg-gray-200/85 dark:bg-gray-800/85'
        }`}
      >
        <div className="no-scrollbar mr-5 hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block whitespace-nowrap font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
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
