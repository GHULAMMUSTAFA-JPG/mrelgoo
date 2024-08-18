import Link from 'next/link'
import React from 'react'

type ICustomLink = {
  href: string
  children: React.ReactNode
}

export default function CustomLink({ href, children, ...rest }: ICustomLink) {
  return <Link href={href}>{children}</Link>
}
