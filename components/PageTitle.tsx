import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-heading text-3xl font-medium leading-tight tracking-tight text-ink dark:text-night-text sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
