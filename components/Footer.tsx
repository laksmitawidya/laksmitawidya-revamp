import { Heart } from 'lucide-react'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

import SectionContainer from './SectionContainer'
import headerNavLinks from '@/data/headerNavLinks'
import SocialMedia from './SocialMedia'
import { Sparkle } from '@/components/ui/Doodles'

const RIBBON_ITEMS = ['Frontend Engineer', 'Web', 'Desktop', 'Mobile', 'Gen AI']

function RibbonGroup() {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5">
      {RIBBON_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-5">
          <span>{item}</span>
          <Sparkle className="h-3.5 w-3.5 text-cream-paper" />
        </span>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* Tilted text ribbon laid over the top edge of the footer */}
      <div
        aria-hidden="true"
        className="relative left-1/2 z-10 w-[106vw] -translate-x-1/2 -rotate-1 overflow-hidden border-y-2 border-cocoa bg-teal py-2 dark:border-sand/40 dark:bg-teal-muted"
      >
        <div className="marquee-track flex w-max font-heading text-sm font-extrabold uppercase tracking-widest text-cocoa-800 dark:text-cocoa-950">
          <RibbonGroup />
          <RibbonGroup />
        </div>
      </div>

      {/* Wavy top edge of the footer block */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="-mt-5 block h-10 w-full fill-sand dark:fill-cocoa-900"
      >
        <path d="M0 22C120 4 240 4 360 20s240 18 360 2 240-18 360-2 240 18 360 2V40H0z" />
      </svg>

      <div className="bg-sand dark:bg-cocoa-900">
        <SectionContainer>
          <div className="pb-12 pt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="font-script text-3xl text-cocoa-800 dark:text-cream">
                  {siteMetadata.author}
                </div>
                <p className="text-sm leading-relaxed text-cocoa-800 dark:text-sand">
                  Frontend Engineer who loves the visual side, building for web, desktop, and
                  mobile.
                </p>
                <SocialMedia />
              </div>

              {/* Navigation */}
              <div className="space-y-4">
                <h3 className="shadow-sticker inline-block -rotate-1 rounded-md border-2 border-cocoa bg-blush px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:border-sand/50 dark:bg-blush-muted dark:text-cocoa-950">
                  Navigation
                </h3>
                <div className="flex flex-col gap-3">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="w-fit text-sm text-cocoa-800 decoration-coral-deep decoration-2 underline-offset-4 transition-colors hover:underline dark:text-sand dark:decoration-coral dark:hover:text-cream"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="shadow-sticker inline-block rotate-1 rounded-md border-2 border-cocoa bg-cream-paper px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:border-sand/50 dark:bg-teal-muted dark:text-cocoa-950">
                  Get in Touch
                </h3>
                <div className="flex flex-col gap-3 text-sm text-cocoa-800 dark:text-sand">
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="w-fit decoration-coral-deep decoration-2 underline-offset-4 transition-colors hover:underline dark:decoration-coral dark:hover:text-cream"
                  >
                    {siteMetadata.email}
                  </a>
                  <a
                    href={siteMetadata.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit decoration-coral-deep decoration-2 underline-offset-4 transition-colors hover:underline dark:decoration-coral dark:hover:text-cream"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit decoration-coral-deep decoration-2 underline-offset-4 transition-colors hover:underline dark:decoration-coral dark:hover:text-cream"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t-2 border-dashed border-cocoa/40 pt-8 dark:border-sand/20">
              <div className="flex flex-col items-center justify-between gap-4 text-sm text-cocoa-800 dark:text-sand sm:flex-row">
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
                <div className="text-xs text-cocoa-800 dark:text-sand">
                  Powered by AI: Kiro, Claude & ChatGPT
                  <p className="mt-1 text-center font-hand text-sm font-bold text-cocoa-800 dark:text-sand">
                    Boilerplate:{' '}
                    <a
                      href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-deep underline decoration-coral-deep decoration-2 underline-offset-4 hover:text-cocoa-800 dark:text-teal dark:decoration-coral dark:hover:text-cream"
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
      </div>
    </footer>
  )
}
