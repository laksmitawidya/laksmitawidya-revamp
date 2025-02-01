import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { BackgroundBeamsWithCollision } from '@/components/ui/Explosion'
import SectionContainer from '@/components/SectionContainer'
import { Carousel } from '@/components/ui/Carousel'
import { BentoGrid, BentoGridItem, Skeleton } from '@/components/ui/BentoGrid'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { GradientTitle } from '@/components/GradientTitle'
import SocialMedia from '@/components/SocialMedia'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const items = [
    {
      title: 'The Dawn of Innovation',
      description: 'Explore the birth of groundbreaking ideas and inventions.',
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Digital Revolution',
      description: 'Dive into the transformative power of technology.',
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Art of Design',
      description: 'Discover the beauty of thoughtful and functional design.',
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Power of Communication',
      description: 'Understand the impact of effective communication in our lives.',
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Pursuit of Knowledge',
      description: 'Join the quest for understanding and enlightenment.',
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Joy of Creation',
      description: 'Experience the thrill of bringing ideas to life.',
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: 'The Spirit of Adventure',
      description: 'Embark on exciting journeys and thrilling discoveries.',
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ]
  return (
    <>
      <BackgroundBeamsWithCollision>
        <h2 className="font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl">
          Hi, I'm Mita!
        </h2>
        <div className="my-5">
          I'm a front-end engineer specializing in the React tech stack. I've had the opportunity to
          build innovative features across web, desktop, and mobile applications. I’m passionate
          about crafting meaningful and impactful user experiences. Let’s connect and build
          something extraordinary together!
        </div>
        <div className="my-5 font-sans font-bold tracking-tight text-black dark:text-white sm:text-xl">
          Let's connect!
        </div>

        <SocialMedia />
      </BackgroundBeamsWithCollision>

      <SectionContainer>
        <div className="my-8">
          <GradientTitle title="Selected" subtitle="Projects" />
          <Carousel
            slides={[
              {
                title: 'Mystic Mountains',
                button: 'Explore Component',
                src: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Urban Dreams',
                button: 'Explore Component',
                src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Neon Nights',
                button: 'Explore Component',
                src: 'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Desert Whispers',
                button: 'Explore Component',
                src: 'https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ]}
          />
        </div>

        <div className="mt-24">
          <GradientTitle title="Latest" subtitle="Posts" />
          <ul className="divide-y divide-gray-200 dark:divide-gray-900">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-5 sm:py-5">
                  <article>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read more: "${title}"`}
                    >
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-bold leading-8 ">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </SectionContainer>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
