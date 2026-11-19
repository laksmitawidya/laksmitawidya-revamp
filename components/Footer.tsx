import { Heart } from 'lucide-react'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="mt-32">
      {/* Thin candy stripe ribbon */}
      <div
        aria-hidden="true"
        className="stripe-band h-3 border-y-2 border-cocoa dark:border-sand/40"
      />
      <SectionContainer>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="font-script text-2xl text-cocoa-800 dark:text-cream">
                {siteMetadata.author}
              </div>
              <p className="text-sm leading-relaxed text-cocoa dark:text-sand">
                Frontend Engineer who loves the visual side, building for web, desktop, and mobile.
              </p>
              <SocialMedia />
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="inline-block -rotate-1 rounded-md bg-blush px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:bg-blush-muted dark:text-cocoa-950">
                Navigation
              </h3>
              <div className="flex flex-col gap-3">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="w-fit text-sm text-cocoa decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-cocoa-800 hover:underline dark:text-sand dark:hover:text-cream"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="inline-block rotate-1 rounded-md bg-teal px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:bg-teal-muted dark:text-cocoa-950">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-3 text-sm text-cocoa dark:text-sand">
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="w-fit decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-cocoa-800 hover:underline dark:hover:text-cream"
                >
                  {siteMetadata.email}
                </a>
                <a
                  href={siteMetadata.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-cocoa-800 hover:underline dark:hover:text-cream"
                >
                  LinkedIn
                </a>
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-cocoa-800 hover:underline dark:hover:text-cream"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t-2 border-dashed border-cocoa/30 pt-8 dark:border-sand/20">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-cocoa dark:text-sand sm:flex-row">
              <div className="flex items-center gap-2">
                <span>© {new Date().getFullYear()}</span>
                <span>•</span>
                <span>Laksmita Widya Astuti</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Built with</span>
                <Heart
                  role="img"
                  aria-label="love"
                  className="h-4 w-4 fill-current text-coral-deep dark:text-coral"
                />
                <span>using Next.js</span>
              </div>
              <div className="text-xs text-cocoa-light dark:text-sand">
                Powered by AI: Kiro, Claude & ChatGPT
                <p className="mt-1 text-center font-hand text-sm font-bold text-cocoa-light dark:text-sand">
                  Boilerplate:{' '}
                  <a
                    href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-deep underline decoration-coral decoration-2 underline-offset-4 hover:text-cocoa-800 dark:text-teal dark:hover:text-cream"
                  >
                    Tailwind Nextjs Starter Blog
                  </a>{' '}
                  by Timothy Lin, thank you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
