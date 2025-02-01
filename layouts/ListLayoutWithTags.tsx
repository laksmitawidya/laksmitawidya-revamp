'use client'

import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { Spotlight } from '@/components/ui/Spotlight'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from '@heroui/react'
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
        <h1 className="dark:text-gray-10 text-center text-xl font-extrabold leading-9 text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Posts
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal dark:text-neutral-300">
          Random thoughts on what I've learned, along with best practices and tips for front-end
          engineering across industries, as well as insights into my hobbies and personal interests.
        </p>
      </div>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <div className="flex flex-wrap gap-4 px-8">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <Card key={path} isPressable shadow="sm" className="min-w-[200px] max-w-[200px]">
                    <CardBody className="flex-none overflow-visible p-0">
                      <Image
                        alt={title}
                        className="h-[140px] w-full object-cover"
                        radius="lg"
                        shadow="sm"
                        src="https://heroui.com/images/card-example-3.jpeg"
                        width="100%"
                      />
                    </CardBody>
                    <CardFooter className="flex flex-col items-start justify-start">
                      <div className="flex flex-wrap gap-1">
                        {tags?.map((tag) => (
                          <Chip size="sm" key={tag}>
                            {tag}
                          </Chip>
                        ))}
                      </div>
                      <div className="text-md py-4 text-start">{title}</div>
                      <div className="text-start text-sm text-gray-500">{summary}</div>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
          <div className="hidden h-full max-h-screen min-w-[180px] max-w-[180px] flex-wrap overflow-auto rounded sm:flex">
            <h3 className="pb-3 font-bold text-primary-500">Blog Topics</h3>
            <ul className="flex flex-wrap gap-2">
              {sortedTags.map((t) => {
                return (
                  <li key={t}>
                    {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                      <Chip
                        className="bg-neutral-300 dark:bg-neutral-800"
                        size="sm"
                      >{`${t} (${tagCounts[t]})`}</Chip>
                    ) : (
                      <Link
                        href={`/tags/${slug(t)}`}
                        className="text-sm font-medium hover:text-primary-500 dark:hover:text-primary-500"
                        aria-label={`View posts tagged ${t}`}
                      >
                        <Chip size="sm">{`${t} (${tagCounts[t]})`}</Chip>
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
