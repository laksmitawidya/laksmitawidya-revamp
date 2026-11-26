'use client'

import Link from '@/components/Link'
import PageHero from '@/components/ui/PageHero'
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

const ACCENTS = [
  'bg-sky-strong',
  'bg-rose-strong',
  'bg-butter-strong',
  'bg-mint-strong',
  'bg-lilac-strong',
]

const pagerBtn =
  'surface flex h-11 w-11 items-center justify-center rounded-full text-ink shadow-card transition-colors hover:bg-ink hover:text-white dark:text-night-text dark:hover:bg-white dark:hover:text-ink'

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-4 pb-8 pt-16">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `${pathname}/` : `${pathname}/?page=${currentPage - 1}`}
          rel="prev"
          aria-label="Previous page"
          className={pagerBtn}
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pagerBtn} opacity-40`}>
          <ArrowLeft className="h-4 w-4" />
        </span>
      )}
      <span className="text-sm font-medium text-ink-muted dark:text-night-text/60">
        {currentPage} / {totalPages}
      </span>
      {nextPage ? (
        <Link
          href={`${pathname}/?page=${currentPage + 1}`}
          rel="next"
          aria-label="Next page"
          className={pagerBtn}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <span aria-hidden="true" className={`${pagerBtn} opacity-40`}>
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </nav>
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
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
  const activeTag = decodeURI(pathname.split('/tags/')[1] ?? '').replace(/\/$/, '')
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const isTagPage = Boolean(activeTag)

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">
      <PageHero
        eyebrow={isTagPage ? `Topic · ${title}` : 'Blog'}
        title={isTagPage ? `#${title.toLowerCase()}` : 'articles'}
        tone="rose"
        note={isTagPage ? undefined : 'fresh from my notebook'}
        intro="Notes from my journey in frontend engineering, best practices and lessons learned across industries, plus the occasional musing on life beyond code."
      />

      {/* Topic chips */}
      <Reveal>
        <ul className="mx-auto mb-14 flex max-w-4xl flex-wrap justify-center gap-2">
          <li>
            <Link
              href="/blog"
              className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !isTagPage
                  ? 'bg-ink text-white dark:bg-white dark:text-ink'
                  : 'surface text-ink-soft hover:bg-sky dark:text-night-text/70 dark:hover:bg-white/10'
              }`}
            >
              All
            </Link>
          </li>
          {sortedTags.map((t) => {
            const isActive = activeTag === slug(t)
            return (
              <li key={t}>
                <Link
                  href={`/tags/${slug(t)}`}
                  aria-label={`View posts tagged ${t}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-ink text-white dark:bg-white dark:text-ink'
                      : 'surface text-ink-soft hover:bg-sky dark:text-night-text/70 dark:hover:bg-white/10'
                  }`}
                >
                  {t}
                  <span className="ml-1.5 text-xs opacity-60">{tagCounts[t]}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post, i) => {
          const { path, date, title, summary, tags } = post
          return (
            <Reveal key={path} className="h-full" delay={(i % 3) * 0.07}>
              <Link
                href={`/${path}`}
                data-cursor="Read"
                className="surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-[3] ${
                    ACCENTS[i % ACCENTS.length]
                  }`}
                />
                <time
                  dateTime={date}
                  className="relative text-xs font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-text/60"
                >
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="relative mt-3 font-heading text-xl font-medium leading-snug tracking-tight text-ink dark:text-night-text">
                  {title}
                </h2>
                {summary && (
                  <p className="relative mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted dark:text-night-text/60">
                    {summary}
                  </p>
                )}
                <div className="relative mt-6 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-xs font-medium text-ink-soft dark:bg-white/[0.06] dark:text-night-text/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white dark:bg-white/[0.06] dark:text-night-text dark:group-hover:bg-white dark:group-hover:text-ink">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:-rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
