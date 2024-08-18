import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import PublicHeader from './PublicHeader'
import PublicFooter from './PublicFooter'

type IProps = {
  children: React.ReactNode
  isHome?: boolean
  isCenter?: boolean
  isFooter?: boolean
  hasGreyBG?: boolean
}

export default function PublicLayout({
  children,
  isHome = false,
  isCenter = false,
  isFooter = true,
  hasGreyBG = false,
}: IProps) {
  return (
    <VStack scrollBehavior='smooth' minH='100vh' w='100%' gap='0'>
      <Box pos='absolute' w='100%'>
        <PublicHeader isHome={isHome} />
      </Box>
      {isCenter ? (
        <Center flexGrow='1' w='100%'>
          {children}
        </Center>
      ) : (
        <Box
          as='main'
          flexGrow='1'
          w='100%'
          bg={hasGreyBG ? '#FAFAFA' : 'transparent'}
        >
          {children}
        </Box>
      )}
      {isFooter && <PublicFooter />}
    </VStack>
  )
}
