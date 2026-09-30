# Laksmita Widya — Personal Portfolio V2 Revampped

Personal portfolio and blog site for **Laksmita Widya Astuti**, Front End Engineer with 5+ years of experience in React, TypeScript, and modern web technologies.

Live at: [laksmita.space](https://laksmita.space)

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Content**: [Contentlayer2](https://github.com/timlrx/contentlayer2) with MDX
- **UI Components**: HeroUI, Headless UI
- **Animations**: Framer Motion
- **Search**: KBar (local search)
- **Comments**: Giscus
- **Analytics**: Umami
- **Fonts**: Rethink Sans, Meow Script (Google Fonts)

## Features

- MDX blog posts with support for math (KaTeX), code highlighting (Prism), and GitHub-style alerts
- Light / dark / system theme
- Full-text search via KBar
- Tag-based blog filtering
- Giscus comment threads
- RSS feed and sitemap
- SEO-optimised with Open Graph and Twitter card metadata
- Docker-ready for self-hosting

## Deployment

The site is currently deployed on **[Netlify](https://www.netlify.com/)**. Pushes to the main branch trigger automatic builds and deployments.

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for the pinned version)
- npm

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Clear the Contentlayer cache

```bash
npm run clear-cache
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GISCUS_REPO` | GitHub repo used by Giscus for comments |
| `NEXT_PUBLIC_GISCUS_REPOSITORY_ID` | Giscus repository ID |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | Giscus discussion category |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | Giscus category ID |
| `NEXT_UMAMI_ID` | Umami analytics website ID |
| `BASE_PATH` | Base path when deploying to a subdirectory |

See `.env.example` for the full list including optional newsletter provider keys.

## Docker

A `Dockerfile` is included for self-hosting:

```bash
docker build -t laksmitawidya-portfolio .
docker run -p 3000:3000 laksmitawidya-portfolio
```

## Project Structure

```
app/          # Next.js App Router pages and layouts
components/   # Shared UI components
data/         # MDX blog posts, authors, and site metadata
public/       # Static assets
css/          # Global styles
```

## License

[MIT](./LICENSE)
