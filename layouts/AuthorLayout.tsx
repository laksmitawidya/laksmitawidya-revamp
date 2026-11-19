import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { DoodleArrow, Polaroid, Sparkle, Squiggle } from '@/components/ui/Doodles'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div>
        <div className="relative space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex items-end gap-2">
            <h1 className="font-heading text-3xl font-extrabold leading-9 tracking-tight text-cocoa-800 dark:text-cream sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h1>
            <DoodleArrow className="mb-1 h-8 w-11 -scale-x-100 text-coral-deep dark:text-coral md:h-10 md:w-14" />
            <span className="mb-4 -rotate-3 font-hand text-2xl font-bold text-coral-deep dark:text-coral md:text-3xl">
              about me!
            </span>
          </div>
          <Squiggle className="w-40 text-coral" />
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-10 xl:space-y-0">
          <div className="flex flex-col items-center pt-10">
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="cutout-shadow absolute -inset-x-5 -inset-y-4 -z-10 rotate-6"
              >
                <div className="paper-cutout grid-paper-pink h-full w-full" />
              </div>
              <Polaroid caption="Mita" className="-rotate-2" tapeClassName="bg-teal">
                <Image
                  src="/static/images/me.jpg"
                  alt="Mita, Laksmita Widya Astuti"
                  width={208}
                  height={277}
                  className="aspect-[3/4] w-52 bg-sand object-cover object-center"
                />
              </Polaroid>
              <Sparkle className="absolute -right-4 -top-4 h-6 w-6 text-coral" />
            </div>
            <h3 className="pb-2 pt-6 text-center text-2xl font-bold leading-8 tracking-tight text-cocoa-800 dark:text-cream">
              {name}
            </h3>
            <div className="flex flex-col items-center gap-2">
              {occupation && (
                <span className="shadow-sticker -rotate-1 rounded-full border-2 border-cocoa bg-blush px-3 py-0.5 text-center text-sm font-semibold text-cocoa-800 dark:border-sand/50 dark:bg-blush-muted dark:text-cocoa-950">
                  {occupation}
                </span>
              )}
              {company && <div className="text-cocoa-light dark:text-sand">{company}</div>}
            </div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="pb-8 pt-8 xl:col-span-2">
            <div className="prose max-w-none rounded-xl border-2 border-cocoa/80 bg-cream-paper px-5 py-6 dark:prose-invert dark:border-sand/40 dark:bg-cocoa-900 sm:px-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
