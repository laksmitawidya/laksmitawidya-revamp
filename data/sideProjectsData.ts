import type { Tone } from '@/components/ui/Selection'

export interface SideProject {
  slug: string
  title: string
  tagline: string
  description: string
  /** Handwritten line for the sticky note on the card */
  note: string
  stack: string[]
  live?: string
  repo: string
  image: string
  tone: Tone
  year: string
}

const sideProjectsData: SideProject[] = [
  {
    slug: 'mita-studio',
    title: 'Mita Studio',
    tagline: 'Design your Bali workspace in 3D',
    description:
      'Furnish a live 3D villa room with desks, screens and corner zones, switch to night mode lit only by what you rented, then send a rental request. Fit rules explain themselves, and every setup is a shareable URL.',
    note: 'furnish it like a life-sim, rent it for real',
    stack: ['Next.js 16', 'three.js', 'R3F', 'Tailwind 4'],
    live: 'https://mita-studio-theta.vercel.app',
    repo: 'https://github.com/laksmitawidya/mita-studio',
    image: '/static/images/projects/mita-studio.webp',
    tone: 'butter',
    year: '2026',
  },
  {
    slug: 'piano-game',
    title: 'Hazel Piano Pals',
    tagline: 'A cozy piano rhythm game for kids',
    description:
      'Notes fall down a 3D lane onto a big on-screen piano or a real USB keyboard. Combos, held notes, stars and a kitten host. All art is SVG drawn in code and all sound is synthesised with Web Audio.',
    note: 'H-A-Z-E-L plays C-D-E-F-G ♪',
    stack: ['Phaser 3', 'React', 'Vite', 'Web Audio'],
    live: 'https://hazel-piano-pals.vercel.app',
    repo: 'https://github.com/laksmitawidya/piano-game',
    image: '/static/images/projects/piano-game.webp',
    tone: 'rose',
    year: '2026',
  },
  {
    slug: 'dropdown',
    title: '@laksmitawidya/dropdown',
    tagline: 'A tiny React component library on npm',
    description:
      'A lightweight, customisable dropdown for React with single, multi-select, search and custom option rendering. Published to npm with a Storybook and a live demo playground.',
    note: 'npm i @laksmitawidya/dropdown',
    stack: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
    live: 'https://laksmita-dropdown-demo-wheat.vercel.app',
    repo: 'https://github.com/laksmitawidya/laksmita-dropdown-demo',
    image: '/static/images/projects/dropdown.webp',
    tone: 'mint',
    year: '2024',
  },
  {
    slug: 'park-system',
    title: 'Park System',
    tagline: 'Interactive parking-lot map',
    description:
      'A canvas-drawn parking lot where drivers find and book free bays. Bays update live between available and booked, with a one-click search for the nearest empty spot.',
    note: 'green = free, red = taken',
    stack: ['React', 'Konva', 'TypeScript', 'Ant Design'],
    live: 'https://park-system.vercel.app',
    repo: 'https://github.com/laksmitawidya/park-system',
    image: '/static/images/projects/park-system.webp',
    tone: 'sky',
    year: '2024',
  },
  {
    slug: 'next-mini-project',
    title: 'Next Mini Portfolio',
    tagline: 'App Router + Google sign-in starter',
    description:
      'A Next.js App Router app with email and Google sign-in through NextAuth, global state in Zustand, and a UI that blends MUI v5 components with Tailwind utilities.',
    note: 'auth, state & MUI, wired together',
    stack: ['Next.js', 'NextAuth', 'Zustand', 'MUI v5'],
    live: 'https://next-mini-project.vercel.app',
    repo: 'https://github.com/laksmitawidya/next-mini-project',
    image: '/static/images/projects/next-mini.webp',
    tone: 'lilac',
    year: '2023',
  },
  {
    slug: 'portfolio',
    title: 'This portfolio',
    tagline: 'The site you are looking at',
    description:
      'An MDX blog and portfolio with a custom cursor, scroll-linked stacking cards, a magnifying tool dock and draggable desktop folders. Started from Timothy Lin\'s Tailwind Next.js starter and rebuilt piece by piece by hand, with AI helping to refine the UI.',
    note: 'built by hand, one fix at a time',
    stack: ['Next.js 15', 'Framer Motion', 'Contentlayer', 'Tailwind'],
    live: 'https://laksmita.space',
    repo: 'https://github.com/laksmitawidya/laksmitawidya-revamp',
    image: '/static/images/projects/portfolio.webp',
    tone: 'sky',
    year: '2026',
  },
]

export default sideProjectsData
