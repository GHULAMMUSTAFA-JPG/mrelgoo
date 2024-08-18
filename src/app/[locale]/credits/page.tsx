import { websiteBrandName } from '@/_data/common'
import CustomLink from '@/app/components/CustomLink'
import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Credits() {
  return (
    <PublicLayout hasGreyBG>
      <Box
        userSelect='none'
        // onCopy={(event) => {
        //   event.preventDefault()
        // }}
        mt='61px'
        bg='#FAFAFA'
        pb={{ base: '1rem', md: '30px', xl: '90px' }}
      >
        <Container
          px={{ base: 'm', md: '30px', xl: '16px' }}
          maxW='container.xl'
          pt={{ base: '25.5px', md: '33.5px' }}
        >
          <Box>
            <HStack gap='m'>
              <CustomLink href='/'>
                <Image
                  src='/back-arrow.svg'
                  height={33}
                  width={33}
                  alt={websiteBrandName}
                />
              </CustomLink>
              <Text
                fontSize='20px'
                fontWeight='semibold'
                lineHeight='150%'
                textColor={colors.black}
              >
                Back
              </Text>
            </HStack>
          </Box>

          <HStack justifyContent='space-between' alignItems='flex-start'>
            <Box mt={{ base: '20px', md: '24px' }} maxW='848px'>
              <Text
                as='h1'
                fontSize={{ base: '28px', md: '42px' }}
                fontWeight='bold'
                lineHeight='150%'
                textColor={colors.black}
              >
                Credits
              </Text>
              <Text
                mt='24px'
                mb={{ base: '20px', md: '20px' }}
                fontSize={{ base: '13px', md: '14px' }}
                fontWeight='medium'
                lineHeight='150%'
                textColor={colors.black}
              >
                Last Updated: July 27, 2024
              </Text>
              <Text
                my='24px'
                fontSize={{ base: '13px', md: '14px' }}
                fontWeight='medium'
                lineHeight='150%'
                textColor={colors.black}
              >
                - We used portraits from Freepik to design the 3 cards in the
                1st section of the home page (Father, Mother, and Child).
                <br />
                <br />
                <Box>
                  <Image
                    src='/hero-image.webp' // Adjust the path as necessary
                    alt=''
                    width={150}
                    height={150}
                    quality={100}
                    draggable='false'
                    style={{ pointerEvents: 'none' }}
                  />
                </Box>
                <br />
                <br />
                Designed by{' '}
                <a
                  style={{ color: 'blue' }}
                  href='https://www.freepik.com/'
                  rel='nofollow'
                >
                  Freepik
                </a>
                .
              </Text>
            </Box>
            <Box
              maxW='222px'
              mt='100px'
              display={{ base: 'none', xl: 'block' }}
            >
              <Text
                fontSize='20px'
                fontWeight='semibold'
                color={colors.black}
                lineHeight='150%'
              >
                Other pages
              </Text>
              <VStack alignItems='flex-start' mt='24px' gap='24px'>
                <Link href='/contact-us' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Contact Us
                  </Text>
                </Link>
                <Link href='/privacy-policy' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Privacy Policy
                  </Text>
                </Link>
                <Link href='/terms-of-service' passHref>
                  <Text
                    fontWeight='medium'
                    fontSize={{ base: '13px', md: '14px' }}
                    lineHeight='20%'
                    color={colors.black}
                    _hover={{ textDecoration: 'underline' }} // Optional: Add underline on hover
                  >
                    Terms of Service
                  </Text>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Container>
      </Box>
    </PublicLayout>
  )
}
