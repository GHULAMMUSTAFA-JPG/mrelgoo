import { websiteBrandName } from '@/_data/common'
import { colors } from '@/theme/colors'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <Box
      // userSelect='none' something
      h={{ base: '100%', md: '733px', xl: '100vh' }}
      pt='61px'
    >
      <Center
        bg={colors.black}
        w='100%'
        h='100%'
        bgImage={{
          base: 'url(/hero-illustration-mobile.svg)',
          md: 'url(/hero-illustration.svg)',
        }}
        bgSize={{ base: 'contain', md: 'contain' }}
        bgPos={{ base: 'top', md: 'center' }}
        bgRepeat='no-repeat'
        px={{ base: '16px', md: '20px', xl: '16px' }}
        py={{ base: '40px', md: '0' }}
      >
        <Container maxW='container.xl'>
          <Grid
            templateColumns='repeat(2, 1fr)'
            gap={{ base: '24px', md: '30px' }}
          >
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Flex alignItems='center' h='100%'>
                <VStack gap='0' alignItems='flex-start'>
                  <Text
                    w='100%'
                    as='h1'
                    fontSize={{ base: '28px', md: '32px', xl: '55px' }}
                    fontWeight='bold'
                    lineHeight='150%'
                    textColor='white'
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    See How Your{' '}
                    <Box>
                      Future Baby{' '}
                      <span>
                        <Img
                          height={{ base: '25px', md: '42px' }}
                          style={{ display: 'inline' }}
                          src='/baby-head.svg'
                        />
                      </span>
                      <br />
                    </Box>
                    <Box
                      whiteSpace='nowrap'
                      textAlign={{ base: 'center', md: 'left' }}
                    >
                      Will Look Like Today
                    </Box>
                  </Text>

                  <Text
                    as='p'
                    textAlign={{ base: 'center', md: 'left' }}
                    color='white'
                    fontSize={{ base: '18px', md: '20px' }}
                    lineHeight='150%'
                    fontWeight='medium'
                    mt={{ base: '14px', md: '20px' }}
                  >
                    & Share it with your friends/audience on social media.
                  </Text>

                  <HStack
                    display={{ base: 'none', md: 'flex' }}
                    mt={{ base: '32px', md: '40px' }}
                    gap='20px'
                  >
                    <Box flexGrow='1'>
                      <Link href='/#ExclusiveOffer'>
                        <Button
                          fontSize='15px'
                          fontWeight='semibold'
                          color={colors.primary}
                          lineHeight='150%'
                          px='30px'
                          py='24px'
                          rounded='12px'
                        >
                          Order Now
                        </Button>
                      </Link>
                    </Box>
                    <Link href='#HowItWorks'>
                      <Button
                        fontSize='15px'
                        fontWeight='semibold'
                        color='white'
                        borderWidth='1px'
                        borderColor='white'
                        bg='transparent'
                        lineHeight='150%'
                        px={{ base: '28px', md: '30px' }}
                        py='24px'
                        rounded='12px'
                        _hover={{ bg: 'transparent' }}
                      >
                        How it works
                      </Button>
                    </Link>
                  </HStack>
                  <Grid
                    templateColumns='repeat(2, 1fr)'
                    w='100%'
                    display={{ base: 'grid', md: 'none' }}
                    mt={{ base: '32px', md: '40px' }}
                    gap='20px'
                  >
                    <Box flexGrow='1'>
                      <Link href='/#ExclusiveOffer'>
                        <Button
                          fontSize='15px'
                          fontWeight='semibold'
                          color={colors.primary}
                          lineHeight='150%'
                          w='100%'
                          py='25px'
                          rounded='12px'
                        >
                          Order Now
                        </Button>
                      </Link>
                    </Box>
                    <Link href='#HowItWorks'>
                      <Button
                        fontSize='15px'
                        fontWeight='semibold'
                        color='white'
                        borderWidth='1px'
                        borderColor='white'
                        bg='transparent'
                        lineHeight='150%'
                        w='100%'
                        py='24px'
                        rounded='12px'
                        _hover={{ bg: 'transparent' }}
                      >
                        How it works
                      </Button>
                    </Link>
                  </Grid>
                </VStack>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Box pos='relative' left={{ xl: '50px' }}>
                <Box display={{ base: 'none', md: 'block' }}>
                  <Img
                    src='/hero-image.webp'
                    alt={websiteBrandName}
                    h='100%'
                    // w='100%'
                    maxH='80vh'
                  />
                </Box>
                <Box
                  bgImage='url(/hero-image-bg-circle.svg)'
                  bgSize='contain'
                  bgPos='center'
                  bgRepeat='no-repeat'
                  display={{ base: 'block', md: 'none' }}
                >
                  <Image
                    src='/hero-image.webp'
                    alt={websiteBrandName}
                    height={730}
                    width={630}
                    priority
                  />
                </Box>
                {/*  */}
                <Box
                  pos='absolute'
                  inset='0'
                  w='100%'
                  h='100%'
                  bg='transparent'
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Center>
    </Box>
  )
}
