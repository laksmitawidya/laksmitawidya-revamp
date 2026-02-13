'use client'

import React from 'react'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '@/components/SocialMedia'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import dynamic from 'next/dynamic'

const BackgroundBeamsWithCollision = dynamic(
  () => import('@/components/ui/Explosion').then((mod) => mod.BackgroundBeamsWithCollision),
  { ssr: false }
)

const MAX_DISPLAY = 5

const workHighlights = [
  {
    title: 'AI Admin Portal & Chatbot',
    description:
      'Production RAG chatbot with 75%+ accuracy using AWS CDK, QuickSight, and Sonnet 4.',
    tags: ['AWS', 'CDK', 'AI', 'Chatbot'],
    stat: '75%+',
    statLabel: 'Accuracy',
  },
  {
    title: 'Text Extraction Admin Portal',
    description: 'Scalable React + TypeScript portal with CI/CD automation and image processing.',
    tags: ['React', 'TypeScript', 'CI/CD'],
    stat: 'Go-Live',
    statLabel: 'Production',
  },
  {
    title: 'Redshift Knowledge Base',
    description: 'Integrated Redshift as alternative knowledge base source for POC chatbot.',
    tags: ['Redshift', 'AWS', 'KnowledgeBase'],
    stat: 'POC',
    statLabel: 'Delivered',
  },
  {
    title: 'Data Asset Management Portal',
    description: 'Built from scratch with Playwright E2E testing and VAPT compliance.',
    tags: ['React', 'Playwright', 'VAPT'],
    stat: 'Go-Live',
    statLabel: 'Production',
  },
  {
    title: 'Chatbot & Speech-to-Speech',
    description: 'Chatbot with multi-model selection, reused across subsequent demos.',
    tags: ['Chatbot', 'AI', 'Speech'],
    stat: '2+',
    statLabel: 'Reuses',
  },
  {
    title: 'Agronomy Admin Portal',
    description: 'Cross-team delivery with postMessage auth POC and team mentoring.',
    tags: ['React', 'TypeScript', 'Auth'],
    stat: '3+',
    statLabel: 'Teams',
  },
]

function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workHighlights.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workHighlights.length) % workHighlights.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {workHighlights.map((work, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
                        {work.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center dark:border-gray-700 dark:bg-gray-800">
                      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {work.stat}
                      </div>
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">
                        {work.statLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 dark:text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2 shadow-lg transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        aria-label="Previous slide"
      >
        <svg
          className="h-5 w-5 text-gray-600 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full border border-gray-200 bg-white p-2 shadow-lg transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
        aria-label="Next slide"
      >
        <svg
          className="h-5 w-5 text-gray-600 dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center gap-2">
        {workHighlights.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-gray-900 dark:bg-gray-100'
                : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <h2 className="font-sans text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl">
          Hi, I'm Mita!
        </h2>
        <div className="my-4 max-w-2xl text-base leading-relaxed md:text-lg">
          Front-End Engineer crafting production-ready apps with React & TypeScript. Currently
          building AI-powered solutions at Axrail.ai.
        </div>

        {/* Stats */}
        <div className="my-6 flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="rounded-lg border border-gray-200/50 bg-white/80 px-4 py-3 text-center backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp</div>
          </div>
          <div className="rounded-lg border border-gray-200/50 bg-white/80 px-4 py-3 text-center backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">10+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
          </div>
          <div className="rounded-lg border border-gray-200/50 bg-white/80 px-4 py-3 text-center backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">AWS</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Certified</div>
          </div>
          <div className="rounded-lg border border-gray-200/50 bg-white/80 px-4 py-3 text-center backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/80">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">AI</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">& NLP</div>
          </div>
        </div>

        <SocialMedia />
      </BackgroundBeamsWithCollision>

      <SectionContainer>
        <div className="my-8">
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Recent Work Highlights
              </h2>
            </div>
          </div>

          <WorkCarousel />
        </div>

        {/* Achievements */}
        <div className="mt-24">
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Certifications
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.credly.com/badges/9b7b8876-15c5-451a-b7f7-1989920a44d5/linked_in_profile"
              target="_blank"
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-2xl dark:bg-amber-950/30">
                🏅
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 dark:text-gray-100">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued Nov 2025 · Expires Nov 2028 · Credential ID
                  9b7b8876-15c5-451a-b7f7-1989920a44d5
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Latest Posts
              </h2>
            </div>
          </div>
          <div className="space-y-8">
            {!posts.length && <p className="text-gray-500 dark:text-gray-400">No posts found.</p>}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="group relative border-b border-gray-200 pb-8 transition-all last:border-0 dark:border-gray-800"
                >
                  <Link href={`/blog/${slug}`} className="block">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                      {/* Left: Content */}
                      <div className="flex-1 space-y-3">
                        {/* Date */}
                        <time
                          dateTime={date}
                          className="text-sm font-medium text-gray-400 dark:text-gray-600"
                        >
                          {formatDate(date, siteMetadata.locale)}
                        </time>

                        {/* Title */}
                        <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-gray-600 dark:text-gray-100 dark:group-hover:text-gray-400">
                          {title}
                        </h3>

                        {/* Summary */}
                        {summary && (
                          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {summary}
                          </p>
                        )}

                        {/* Tags */}
                        {tags && tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs text-gray-500 dark:text-gray-500">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Arrow */}
                      <div className="flex items-center text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-gray-900 dark:text-gray-600 dark:group-hover:text-gray-100 md:pt-8">
                        <svg
                          className="h-5 w-5"
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
                  </Link>
                </article>
              )
            })}
          </div>
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
