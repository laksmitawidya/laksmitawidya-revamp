import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded-md bg-sand px-2 py-1 text-sm font-semibold text-cocoa-800 transition-colors hover:bg-blush dark:bg-sand-muted dark:text-cocoa-950 dark:hover:bg-blush-muted"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
