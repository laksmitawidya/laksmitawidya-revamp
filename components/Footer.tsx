import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-gray-800">
      <SectionContainer>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="font-script text-xl text-gray-900 dark:text-gray-100">
                {siteMetadata.author}
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Front End Engineer specializing in React, TypeScript, and modern web technologies.
              </p>
              <SocialMedia />
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Navigation
              </h3>
              <div className="flex flex-col gap-3">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {siteMetadata.email}
                </a>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  LinkedIn
                </a>
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
              <div className="flex items-center gap-2">
                <span>© {new Date().getFullYear()}</span>
                <span>•</span>
                <span>{siteMetadata.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>using Next.js</span>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Powered by AI — Kiro, Claude & ChatGPT
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
