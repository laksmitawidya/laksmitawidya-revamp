import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-2 inline-block rounded-full bg-sky px-3 py-1 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white dark:bg-white/10 dark:text-night-text dark:hover:bg-white dark:hover:text-ink"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
