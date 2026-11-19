'use client'

import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { Sparkle, Tape } from '@/components/ui/Doodles'
import Reveal from '@/components/ui/Reveal'
import tagData from 'app/tag-data.json'
import type { Blog } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-10 md:space-y-5">
      <nav className="flex items-center justify-between text-cocoa-800 dark:text-cream">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            <ArrowLeft />
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `${pathname}/` : `${pathname}/?page=${currentPage - 1}`}
            rel="prev"
          >
            <ArrowLeft />
          </Link>
        )}
        <span className="rounded-md bg-sand px-3 py-0.5 text-sm font-bold text-cocoa-800 dark:bg-sand-muted dark:text-cocoa-950">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            <ArrowRight />
          </button>
        )}
        {nextPage && (
          <Link href={`${pathname}/?page=${currentPage + 1}`} rel="next">
            <ArrowRight />
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <SectionContainer>
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-y-6 p-4 pt-10 md:pt-0">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center">
            <h1 className="shadow-sticker -rotate-2 rounded-full border-2 border-cocoa bg-blush px-4 py-0.5 text-sm font-extrabold uppercase tracking-widest text-cocoa-800 dark:border-sand/50 dark:bg-blush-muted dark:text-cocoa-950">
              Blog
            </h1>
          </div>
          <div className="relative isolate inline-block">
            <h2 className="font-heading text-3xl font-bold leading-tight text-cocoa-800 dark:text-cream sm:text-4xl md:text-5xl">
              Thoughts & Insights
            </h2>
            <span
              aria-hidden="true"
              className="absolute -bottom-0.5 left-2 right-2 -z-10 h-3 rotate-1 rounded-sm bg-sand dark:bg-cocoa-light/60 md:h-4"
            />
            <Sparkle className="absolute -right-6 -top-3 h-5 w-5 text-coral" />
          </div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-cocoa dark:text-sand">
            Sharing my journey in front-end engineering, best practices, and lessons learned across
            different industries. Plus occasional musings on hobbies and life beyond code.
          </p>
          <div
            aria-hidden="true"
            className="polka-ribbon-pink mx-auto h-6 w-48 rounded-full border-2 border-cocoa dark:border-sand/40"
          />
        </div>
      </div>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-cocoa-800 dark:text-cream sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-12 lg:space-x-16">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {displayPosts.map((post, i) => {
                const { path, date, title, summary, tags } = post
                return (
                  <Reveal
                    key={path}
                    className="h-full"
                    delay={(i % 3) * 0.07}
                    tilt={i % 2 === 0 ? -1.5 : 1.5}
                  >
                    <Link href={`/${path}`} className="group block h-full">
                      <article className="relative flex h-full flex-col space-y-4 rounded-lg border-2 border-cocoa/80 bg-cream-paper p-6 pt-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg] dark:border-sand/40 dark:bg-cocoa-900">
                        <Tape
                          className={`-top-3 left-1/2 h-5 w-16 -translate-x-1/2 ${
                            i % 2 === 0 ? '-rotate-3 bg-teal' : 'rotate-3 bg-coral'
                          }`}
                        />

                        {/* Date */}
                        <time
                          dateTime={date}
                          className="font-hand text-lg font-bold text-coral-deep dark:text-coral"
                        >
                          {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>

                        {/* Title */}
                        <h3 className="text-xl font-bold leading-tight text-cocoa-800 decoration-coral decoration-2 underline-offset-4 group-hover:underline dark:text-cream">
                          {title}
                        </h3>

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-md bg-sand px-2.5 py-0.5 text-xs font-semibold text-cocoa-800 dark:bg-sand-muted dark:text-cocoa-950"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Summary */}
                        {summary && (
                          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-cocoa-light dark:text-sand">
                            {summary}
                          </p>
                        )}

                        {/* Read more link */}
                        <div className="flex items-center gap-2 pt-2 text-sm font-bold text-teal-deep dark:text-teal">
                          <span>Read article</span>
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                )
              })}
            </div>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
          <div className="hidden h-full max-h-screen min-w-[180px] max-w-[180px] flex-wrap overflow-auto sm:flex">
            <div className="sticky top-0 w-full space-y-4 rounded-lg border-2 border-cocoa/80 bg-cream-paper p-4 dark:border-sand/40 dark:bg-cocoa-900">
              <h3 className="inline-block -rotate-1 rounded-md bg-teal px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-widest text-cocoa-800 dark:bg-teal-muted dark:text-cocoa-950">
                Topics
              </h3>
              <ul className="flex flex-col gap-1.5">
                {sortedTags.map((t) => {
                  const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  return (
                    <li key={t}>
                      {isActive ? (
                        <span className="inline-block rounded-md bg-coral px-2 py-0.5 text-sm font-bold text-cocoa-800 dark:bg-coral-muted dark:text-cocoa-950">
                          {t} ({tagCounts[t]})
                        </span>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="inline-block rounded-md px-2 py-0.5 text-sm text-cocoa transition-colors hover:bg-blush hover:text-cocoa-800 dark:text-sand dark:hover:bg-cocoa-800 dark:hover:text-cream"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {t} ({tagCounts[t]})
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
