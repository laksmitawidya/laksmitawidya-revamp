import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="mt-20">
      <hr className="border-t-1 dark:border-gray-700 " />
      <SectionContainer>
        <div className="flex flex-col py-10">
          <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center sm:items-start">
              <div className="mb-2 flex space-x-2">
                <div className="font-script text-lg sm:text-xl">{siteMetadata.author}</div>
              </div>

              <SocialMedia />
            </div>
            <div className="flex flex-col">
              <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                Quick navigation
              </div>
              <div className="mb-3 flex flex-col gap-y-4">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block text-sm text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5 border-t-1 dark:border-gray-700" />
        <div className="flex justify-center gap-x-2 pb-5  text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </SectionContainer>
    </footer>
  )
}
