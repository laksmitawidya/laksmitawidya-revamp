import Link from '@/components/Link'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import PageHero from '@/components/ui/PageHero'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

const CHIP = ['bg-sky', 'bg-rose', 'bg-butter', 'bg-mint', 'bg-lilac']

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 xl:px-0">
      <PageHero
        eyebrow="Topics"
        title="tags"
        tone="mint"
        intro="Everything I write about, sorted by how often."
      />
      <ul className="flex flex-wrap justify-center gap-3">
        {sortedTags.length === 0 && <li>No tags found.</li>}
        {sortedTags.map((t, i) => (
          <li key={t}>
            <Link
              href={`/tags/${slug(t)}`}
              aria-label={`View posts tagged ${t}`}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5 hover:rotate-[-2deg] ${
                CHIP[i % CHIP.length]
              }`}
            >
              #{t.split(' ').join('-')}
              <span className="rounded-full bg-white/70 px-2 text-xs">{tagCounts[t]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
