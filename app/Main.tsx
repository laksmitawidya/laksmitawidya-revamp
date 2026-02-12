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
    title: 'AI-Powered Admin Portal & Chatbot Integration POC',
    description:
      'Delivered a POC for AI solution integrating chatbot and admin portal with Jira and multiple data sources (PDF, web crawl). Leveraged AWS CDK, QuickSight, and Sonnet 4 to achieve 75%+ chatbot accuracy. Successfully handled complex AI prompt engineering for specialized use cases despite steep learning curve.',
    tags: ['AWS', 'CDK', 'QuickSight', 'AI', 'Chatbot'],
  },
  {
    title: 'Text Extraction Frontend Admin Portal',
    description:
      'Designed and delivered a scalable React + TypeScript admin portal with text extraction capabilities based on backend image processing. Implemented reusable UI components, CI/CD automation, and maintained production stability through continuous support and bug fixes.',
    tags: ['React', 'TypeScript', 'CI/CD', 'AdminPortal'],
  },
  {
    title: 'Redshift Knowledge Base Integration',
    description:
      'Explored and implemented Redshift knowledge base integration for a POC chatbot, successfully connecting alternative data sources beyond S3. Strengthened backend and data integration skills while expanding knowledge base architecture understanding.',
    tags: ['Redshift', 'AWS', 'DataIntegration', 'KnowledgeBase'],
  },
  {
    title: 'Data Asset Management Admin Portal',
    description:
      'Architected and delivered admin portal from ground up with improved code structure and maintainability. Established end-to-end testing with Playwright through iterative configuration, mentored team on implementation, and ensured VAPT compliance for secure production deployment.',
    tags: ['React', 'TypeScript', 'Playwright', 'VAPT', 'E2E Testing'],
  },
  {
    title: 'Chatbot & Speech-to-Speech Solution',
    description:
      'First project at Axrail: delivered chatbot and speech-to-speech solution for company event using internal Q&A knowledge base. Solution was later enhanced with multi-model selection capability, allowing users to switch between knowledge base and general knowledge modes, and reused for subsequent demos.',
    tags: ['Chatbot', 'Speech-to-Speech', 'AI', 'KnowledgeBase'],
  },
  {
    title: 'Agronomy Admin Portal - Cross-Team Collaboration',
    description:
      'Contributed to scalable frontend delivery using React and TypeScript best practices. Developed postMessage-based login flow POC for secure cross-application authentication, implemented linting and pre-commit hooks for code quality, and mentored team members for smooth knowledge transfer.',
    tags: ['React', 'TypeScript', 'Authentication', 'Mentoring'],
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
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
                      {work.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
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
        <div className="my-5 text-base leading-relaxed md:text-lg">
          I'm a Front-End Engineer with 5+ years of experience building production-ready
          applications across web, desktop, and mobile platforms. Currently at Axrail.ai, I
          specialize in React, TypeScript, and modern frontend technologies.
        </div>
        <div className="my-5 text-base leading-relaxed md:text-lg">
          My journey started in Quality Assurance, which gave me a unique perspective on software
          development. I don't just write code—I build reliable, tested, and maintainable solutions
          that users love. From gaming backend portals at AccelByte to mobile apps at Okkami, I've
          delivered impactful products that scale.
        </div>
        <div className="my-5 text-base leading-relaxed md:text-lg">
          Beyond coding, I'm passionate about mentoring and empowering women in tech. Let's connect
          and create something amazing together!
        </div>
        <div className="my-5 font-sans font-bold tracking-tight text-black dark:text-white sm:text-xl">
          Let's connect!
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
