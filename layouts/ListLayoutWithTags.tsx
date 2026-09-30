'use client'

import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { Spotlight } from '@/components/ui/Spotlight'
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
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
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
        <span>
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
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="LightBlue" />
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-y-6 p-4 pt-20 md:pt-0">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
            <h1 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Blog
            </h1>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
          </div>
          <h2 className="font-heading text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
            Thoughts & Insights
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Sharing my journey in front-end engineering, best practices, and lessons learned across
            different industries. Plus occasional musings on hobbies and life beyond code.
          </p>
        </div>
      </div>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <Link
                    key={path}
                    href={`/${path}`}
                    className="group block transition-transform hover:scale-[1.02]"
                  >
                    <article className="relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700">
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-950/20 dark:to-purple-950/20" />

                      {/* Content */}
                      <div className="relative flex h-full flex-col space-y-4">
                        {/* Date */}
                        <time
                          dateTime={date}
                          className="text-sm font-medium text-gray-400 dark:text-gray-600"
                        >
                          {new Date(date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>

                        {/* Title */}
                        <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-gray-700 dark:text-gray-100 dark:group-hover:text-gray-300">
                          {title}
                        </h3>

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Summary */}
                        {summary && (
                          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {summary}
                          </p>
                        )}

                        {/* Read more link */}
                        <div className="flex items-center gap-2 pt-2 text-sm font-medium text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-100">
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
                      </div>

                      {/* Decorative corner accent */}
                      <div
                        className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-900/30 dark:to-purple-900/30"
                        style={{
                          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                        }}
                      />
                    </article>
                  </Link>
                )
              })}
            </div>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
          <div className="hidden h-full max-h-screen min-w-[180px] max-w-[180px] flex-wrap overflow-auto rounded sm:flex">
            <div className="sticky top-0 space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Topics
              </h3>
              <ul className="flex flex-col gap-2">
                {sortedTags.map((t) => {
                  const isActive = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  return (
                    <li key={t}>
                      {isActive ? (
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {t} ({tagCounts[t]})
                        </span>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
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
