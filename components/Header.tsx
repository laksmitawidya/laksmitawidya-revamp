import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center justify-end w-full py-10 sm:justify-center transition-colors duration-700 max-w-screen'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="mr-5 flex items-center space-x-4 rounded-lg bg-gray-200 bg-opacity-85 px-5 py-3 leading-5 transition-colors duration-700 dark:bg-gray-800 sm:mr-0 sm:space-x-6">
        <div className="no-scrollbar mr-5 hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
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
