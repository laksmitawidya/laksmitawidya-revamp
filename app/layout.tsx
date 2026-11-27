import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { DM_Sans, Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import IntroLoader from '@/components/ui/IntroLoader'
import { introBootScript } from '@/components/ui/introBoot'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'

// Geometric display face for headings, a friendly grotesk for reading, a hand for notes
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['300', '400', '500', '600'],
  preload: true,
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
})

// Clean sans for sticky notes and annotations, in the spirit of Miro's labels
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-note',
  weight: ['500', '600'],
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${poppins.variable} ${dm_sans.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Decides before first paint whether the first-visit intro shows */}
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link rel="icon" href={`${basePath}/static/favicons/favicon.ico`} sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href={`${basePath}/static/favicons/favicon.svg`} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#3D8BFF"
      />
      <meta name="msapplication-TileColor" content="#F7F6FB" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F6FB" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0E0E13" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-canvas-dots font-sans text-ink antialiased transition-colors duration-500 dark:text-night-text">
        <ThemeProviders>
          <IntroLoader />
          <ScrollProgress />
          <CustomCursor />
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />

          <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
            <Header />
            <main className="mb-auto pt-24 sm:pt-28">{children}</main>
          </SearchProvider>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
