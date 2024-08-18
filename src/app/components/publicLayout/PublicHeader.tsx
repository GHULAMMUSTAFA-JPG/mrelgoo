'use client'

import { websiteBrandName } from '@/_data/common'
import { menu } from '@/_data/menu'
import { colors } from '@/theme/colors'
import { Box, Button, Container, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import CustomLink from '../CustomLink'
import MobileMenu from './MobileMenu'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { usePathname } from 'next/navigation'
import { scrollToSection } from '@/utils/secrollToSection'

export default function PublicHeader({ isHome }: { isHome: boolean }) {
  const pathname = usePathname()

  return (
    <Box pos='fixed' w='100%' zIndex='3'>
      <HStack
        // position='fixed'
        as='header'
        bg={isHome ? colors.black : 'white'}
        pos='relative'
        zIndex='20'
        w='100%'
        borderBottom='1px'
        borderBottomColor={hexToRGBA(colors.primary, 10)}
      >
        <Container maxW='container.xl'>
          <Box py='13px'>
            <HStack justifyContent='space-between' alignItems='center'>
              <HStack gap='m'>
                <CustomLink href='/'>
                  <Image
                    src={isHome ? '/home-logo.webp' : '/home-logo-white.webp'}
                    height={35}
                    width={35}
                    alt={websiteBrandName}
                  />
                </CustomLink>
                <Box display={{ base: 'block', md: 'none' }}>
                  <MobileMenu />
                </Box>
              </HStack>
              <HStack display={{ base: 'none', md: 'flex' }} gap='40px'>
                {menu.map((item, index) => (
                  <CustomLink href={item.href}>
                    <Box
                      fontWeight='medium'
                      lineHeight='150%'
                      cursor='pointer'
                      color={
                        pathname === '/contact-us' &&
                        item.href === '/contact-us'
                          ? colors.primary
                          : isHome
                          ? 'white'
                          : colors.black
                      }
                    >
                      {item.title}
                    </Box>
                  </CustomLink>
                ))}
              </HStack>
              <CustomLink
                href={`${
                  pathname === '/checkout' ? '#CheckOutForm' : '#ExclusiveOffer'
                }`}
              >
                <Button
                  fontWeight='semibold'
                  lineHeight='100%'
                  maxH='35px'
                  fontSize='14px'
                  textColor='white'
                  px='20px'
                  py='8px'
                  // onClick={() => scrollToSection('ExclusiveOffer')}
                  rounded='8px'
                  bg={colors.primary}
                  _hover={{
                    bg: colors.primary,
                  }}
                >
                  Order now
                </Button>
              </CustomLink>
            </HStack>
          </Box>
        </Container>
      </HStack>
    </Box>
  )
}
