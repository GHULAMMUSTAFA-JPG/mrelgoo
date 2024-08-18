import React from 'react'
import ScrolltoTop from '../components/ScrolltoTop'

type Props = {
  children: React.ReactNode
}

export default function Globals({ children }: Props) {
  return (
    <div style={{ width: '100%' }}>
      {children}
      <ScrolltoTop />
    </div>
  )
}
