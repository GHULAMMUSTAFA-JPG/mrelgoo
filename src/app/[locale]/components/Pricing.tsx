import { websiteBrandName } from '@/_data/common'
import CustomLink from '@/app/components/CustomLink'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Button, Center, HStack, Img, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Pricing() {
  return (
    <Center
      id='ExclusiveOffer'
      mb={{ base: '50px', md: '90px' }}
      px={{ base: '1rem', md: '0' }}
    >
      <Box>
        <Text
          fontSize={{ base: '24px', md: '42px' }}
          fontWeight='bold'
          lineHeight='150%'
          textColor={colors.black}
          textAlign='center'
        >
          See Your Future Baby Today
        </Text>
        <Center mt={{ base: '24px', md: '60px' }}>
          <Box
            w={{ base: '100%', md: '497px' }}
            maxW={{ base: '100%', md: '497px' }}
            borderRadius='30px'
            borderWidth='2px'
            borderColor={hexToRGBA('#FFFFFF', 35)}
            bg={colors.black}
            p={{ base: '21px', md: '32px' }}
            py='32px'
            bgImage='url(/pricing-bg.webp)'
            bgSize='cover'
            bgPos='center'
            bgRepeat='no-repeat'
          >
            <Box>
              <Text
                as='h2'
                fontSize='24px'
                fontWeight='bold'
                lineHeight='150%'
                textTransform='uppercase'
                color='white'
              >
                Exclusive Offer:
              </Text>
              <HStack gap='10px' alignItems='flex-end'>
                <Text
                  as='h1'
                  textDecor='line-through'
                  fontSize='30px'
                  fontWeight='normal'
                  lineHeight='150%'
                  textTransform='uppercase'
                  color='white'
                  py='32px'
                >
                  $20
                </Text>
                <Text
                  as='h1'
                  fontSize='40px'
                  fontWeight='bold'
                  lineHeight='150%'
                  textTransform='uppercase'
                  color='white'
                  py='32px'
                >
                  $9
                </Text>
              </HStack>
              <Box>
                <HStack>
                  <Img
                    src='/pricing-checkmark.svg'
                    height={55}
                    width={55}
                    alt={websiteBrandName}
                  />
                  <Text
                    fontSize='18px'
                    fontWeight='semibold'
                    lineHeight='150%'
                    textColor='white'
                  >
                    For a set of 6 baby pics (3 boy and 3 girl).{' '}
                  </Text>
                </HStack>

                <HStack mt='24px'>
                  <Img
                    src='/pricing-checkmark.svg'
                    height={55}
                    width={55}
                    alt={websiteBrandName}
                  />
                  <Text
                    fontSize='18px'
                    fontWeight='semibold'
                    lineHeight='150%'
                    textColor='white'
                  >
                    FREE Gift: a well designed story to share with your
                    friends/audience.
                  </Text>
                </HStack>
              </Box>
            </Box>

            <Box mt={{ base: '46px', md: '100px' }}>
              <CustomLink href='/checkout'>
                <Button
                  fontSize='15px'
                  fontWeight='semibold'
                  lineHeight='150%'
                  textColor='white'
                  py='24px'
                  rounded='12px'
                  bg={colors.primary}
                  _hover={{ bg: colors.primary }}
                  w='100%'
                >
                  Order Now
                </Button>
              </CustomLink>
              <CustomLink href='/contact-us'>
                <Button
                  mt='20px'
                  fontSize='15px'
                  fontWeight='semibold'
                  lineHeight='150%'
                  textColor={colors.primary}
                  py='24px'
                  rounded='12px'
                  bg='white'
                  w='100%'
                >
                  Contact Us
                </Button>
              </CustomLink>
              <Text
                fontSize='14px'
                fontWeight='medium'
                lineHeight='150%'
                color='white'
                textAlign='center'
                mt='1rem'
                whiteSpace='nowrap'
              >
                No Registration required (one time payment).
              </Text>
            </Box>
          </Box>
        </Center>
      </Box>
    </Center>
  )
}
