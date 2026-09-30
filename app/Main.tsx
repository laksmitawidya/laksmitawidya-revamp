'use client'

import React from 'react'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '@/components/SocialMedia'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import { BackgroundRippleEffect } from '@/components/ui/Ripple'

const MAX_DISPLAY = 6

const workHighlights = [
  {
    icon: '🤖',
    category: 'Gen AI',
    title: 'Chatbot Admin Portal & RAG Chatbot',
    description:
      'RAG chatbot achieving 75%+ accuracy, powered by AWS CDK, QuickSight, and Nova Pro.',
    tags: ['React', 'AWS', 'CDK', 'Bedrock', 'RAG'],
    stat: 'POC',
  },
  {
    icon: '📋',
    category: 'Document AI',
    title: 'Litigation Text Extraction',
    description:
      'Document extraction with ~90% accuracy across newspapers, CEDs, and Gazettes using Sonnet 4.',
    tags: ['Lambda', 'S3', 'Textract', 'Bedrock'],
    stat: 'POC',
  },
  {
    icon: '⚙️',
    category: 'Admin Portal',
    title: 'Text Extraction Admin Portal',
    description:
      'Scalable React + TypeScript portal with automated CI/CD pipeline and image processing.',
    tags: ['React', 'TypeScript', 'CI/CD'],
    stat: 'Go-Live',
  },
  {
    icon: '🗄️',
    category: 'Data & AI',
    title: 'Redshift Knowledge Base',
    description: 'Integrated Redshift as an alternative knowledge base source for the POC chatbot.',
    tags: ['Redshift', 'AWS', 'Bedrock', 'Lambda'],
    stat: 'POC',
  },
  {
    icon: '🔐',
    category: 'Data Management',
    title: 'Data Asset Management Portal',
    description: 'Built from scratch with Playwright E2E testing and full VAPT compliance.',
    tags: ['React', 'Playwright', 'VAPT'],
    stat: 'Go-Live',
  },
  {
    icon: '🌿',
    category: 'Agronomy',
    title: 'Agronomy Admin Portal',
    description: 'Cross-team delivery featuring postMessage auth POC and hands-on team mentoring.',
    tags: ['React', 'TypeScript', 'Auth'],
    stat: 'Go-Live',
  },
  {
    icon: '🏥',
    category: 'Healthcare',
    title: 'Healthcare Admin Portal',
    description:
      'Refactored for VAPT and SonarQube compliance, resolving circular dependencies across cross-functional teams.',
    tags: ['React', 'SonarQube', 'VAPT'],
    stat: 'Go-Live',
  },
]

function StatusBadge({ stat }: { stat: string }) {
  if (stat === 'Go-Live') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Go-Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      POC
    </span>
  )
}

function WorkBento() {
  const [featured, ...rest] = workHighlights

  return (
    <div className="space-y-3">
      {/* Featured card */}
      <div className="group relative overflow-hidden rounded-2xl border-l-4 border-l-indigo-500 bg-slate-50 p-7 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-900/40 dark:ring-slate-800 md:p-9">
        <div className="flex flex-col gap-5 md:flex-row md:items-start">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                {featured.icon}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {featured.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold leading-snug text-slate-900 dark:text-slate-100 md:text-3xl">
              {featured.title}
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <StatusBadge stat={featured.stat} />
          </div>
        </div>
      </div>

      {/* Grid cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((work) => (
          <div
            key={work.title}
            className="group flex flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900/40 dark:ring-slate-800"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-slate-800">
                  {work.icon}
                </div>
                <StatusBadge stat={work.stat} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {work.category}
              </p>
              <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-slate-100">
                {work.title}
              </h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {work.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {work.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden md:h-[40rem]">
        <BackgroundRippleEffect />
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
          <h2 className="font-heading pt-20 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl lg:text-7xl xl:pt-0">
            Hi, I'm Mita!
          </h2>
          <div className="my-4 max-w-2xl text-center text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Full-Stack Leaning Frontend Engineer. React, Remix, Astro. Currently building Gen AI
            solutions at Axrail.
          </div>

          {/* Stats */}
          <div className="my-6 flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { value: '7+', label: 'Years Exp' },
              { value: '10+', label: 'Projects' },
              { value: 'AWS', label: 'Certified' },
              { value: 'Remote', label: 'GMT+7' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/50 bg-white/70 px-5 py-3 text-center backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/70"
              >
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
              </div>
            ))}
          </div>

          <SocialMedia />
        </div>
      </div>

      <SectionContainer>
        {/* Recent Work Highlights */}
        <div className="my-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-6 rounded-full bg-indigo-500" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Recent Work Highlights
            </h2>
          </div>
          <WorkBento />
        </div>

        {/* Certification — refined dark navy banner */}
        <div className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-6 rounded-full bg-indigo-500" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Certification
            </h2>
          </div>
          <a
            href="https://www.credly.com/badges/9b7b8876-15c5-451a-b7f7-1989920a44d5/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-900/40 dark:from-slate-900 dark:to-indigo-950"
          >
            {/* Subtle grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            {/* Indigo glow in corner */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-4xl ring-1 ring-white/10">
                🏅
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Amazon Web Services
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Issued Nov 2025 · Expires Nov 2028 · ID 9b7b8876-15c5-451a-b7f7-1989920a44d5
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium ring-1 ring-white/10 transition-all group-hover:bg-white/15">
                  View credential
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Latest Posts */}
        <div className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-6 rounded-full bg-indigo-500" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Latest Posts
            </h2>
          </div>
          {!posts.length && <p className="text-slate-400 dark:text-slate-500">No posts found.</p>}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <Link key={slug} href={`/blog/${slug}`} className="group block h-full">
                  <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900/40 dark:ring-slate-800">
                    <div className="space-y-2">
                      <time
                        dateTime={date}
                        className="text-xs font-medium text-slate-400 dark:text-slate-500"
                      >
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                        {title}
                      </h3>
                      {summary && (
                        <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                          {summary}
                        </p>
                      )}
                    </div>
                    {tags && tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-400 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-500"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              )
            })}
          </div>
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition-all hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              aria-label="All posts"
            >
              All Posts
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </SectionContainer>
    </>
  )
}
