'use client'

import theme from '@/theme/theme'
import { ColorModeScript } from '@chakra-ui/react'
import React, { useEffect } from 'react'

type Props = {}

const ClientScripts = (props: Props) => {
  useEffect(() => {
    document.addEventListener('contextmenu', (event) => {
      // event.preventDefault()
    })
  }, [])
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </>
  )
}

export default ClientScripts
