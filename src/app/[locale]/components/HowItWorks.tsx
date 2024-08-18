import { websiteBrandName } from '@/_data/common'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Center, Flex, HStack, Img, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function HowItWorks() {
  const router = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Center bg='#EDF7FC' id='HowItWorks'>
      <Box py={{ base: '50px', md: '90px' }} px={{ base: '1rem', md: '0' }}>
        <Text
          as='h1'
          fontSize={{ base: '28px', md: '42px' }}
          fontWeight='bold'
          lineHeight='150%'
          color={colors.black}
          textAlign='center'
        >
          How it Works
        </Text>

        <Box
          mt={{ base: '20px', md: '40px' }}
          p={{ base: '12px', md: '20px' }}
          bg='white'
          rounded='12px'
          w={{ base: '100%', md: '666px' }}
        >
          <Center>
            <Box
              px={{ base: '10px', md: '14px' }}
              py={{ base: '6px', md: '10px' }}
              bg={hexToRGBA(colors.primary, 10)}
              textColor={colors.primary}
              rounded='8px'
              fontSize={{ base: '12px', md: '1rem' }}
              fontWeight='bold'
              lineHeight='150%'
              letterSpacing='1%'
              textTransform='uppercase'
            >
              Step 1
            </Box>
          </Center>
          <Text
            as='h2'
            mt={{ base: 'xs', md: 'm' }}
            fontSize={{ base: '16px', md: '24px' }}
            fontWeight='bold'
            lineHeight='150%'
            textColor={colors.black}
            textAlign='center'
          >
            Upload 1 or 2 Pictures
          </Text>
          <Center>
            <Flex
              mt={{ base: '8px', md: '10px' }}
              alignItems='center'
              gap={{ base: '18px', md: '32px' }}
            >
              <Center>
                <Box
                  bg={colors.primary}
                  rounded={{ base: '11px', md: '16px' }}
                  width={{ base: '115px', md: '150px' }}
                  height={{ base: '130px', md: '170px' }}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box display={{ base: 'none', md: 'block' }} mt='16px'>
                    <Image
                      src='/father.svg'
                      width={95}
                      height={120}
                      alt={websiteBrandName}
                    />
                  </Box>
                  <Box display={{ base: 'block', md: 'none' }} mt='10px'>
                    <Image
                      src='/father.svg'
                      height={80}
                      width={70}
                      alt={websiteBrandName}
                    />
                  </Box>
                  <Box
                    color='white'
                    fontSize={{ base: '12px', md: '14px' }}
                    fontWeight='bold'
                    lineHeight='150%'
                    // pt='20px'
                    py='6px'
                    width='90%'
                    margin='auto'
                    mt='4.5px'
                    borderWidth='1px'
                    borderColor={hexToRGBA('#FFFFFF', 20)}
                    bg={hexToRGBA('#FFFFFF', 10)}
                    borderRadius='12px'
                    textAlign='center'
                  >
                    Father
                  </Box>
                </Box>
              </Center>
              <Box>
                <Box
                  width={{ base: '28px', md: '36px' }}
                  height={{ base: '28px', md: '36px' }}
                >
                  <Image
                    src='/plus-circle.svg'
                    height={36}
                    width={36}
                    alt={websiteBrandName}
                  />
                </Box>
              </Box>
              <Center>
                <Box
                  bg={colors.primary}
                  rounded={{ base: '11px', md: '16px' }}
                  width={{ base: '115px', md: '150px' }}
                  height={{ base: '130px', md: '170px' }}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box display={{ base: 'none', md: 'block' }} mt='16px'>
                    <Image
                      src='/mother.svg'
                      width={95}
                      height={120}
                      alt={websiteBrandName}
                    />
                  </Box>
                  <Box display={{ base: 'block', md: 'none' }} mt='10px'>
                    <Image
                      src='/mother.svg'
                      height={80}
                      width={70}
                      alt={websiteBrandName}
                    />
                  </Box>
                  <Box
                    color='white'
                    fontSize={{ base: '12px', md: '14px' }}
                    fontWeight='bold'
                    lineHeight='150%'
                    // m='8px'
                    // mt='0'
                    // py='8px'
                    // px='30px'
                    py='6px'
                    mt='4.5px'
                    width='90%'
                    margin='auto'
                    borderWidth='1px'
                    borderColor={hexToRGBA('#FFFFFF', 20)}
                    bg={hexToRGBA('#FFFFFF', 10)}
                    borderRadius='12px'
                    textAlign='center'
                  >
                    Mother
                  </Box>
                </Box>
              </Center>
            </Flex>
          </Center>
        </Box>

        <Box
          mt={{ base: '20px', md: '40px' }}
          p={{ base: '20px', md: '40px' }}
          pt={{ base: '20px', md: '20px' }}
          bg='white'
          rounded='12px'
          w={{ base: '100%', md: '666px' }}
        >
          <Center>
            <Box
              px='14px'
              py={{ base: '8px', md: '10px' }}
              bg={hexToRGBA(colors.primary, 10)}
              textColor={colors.primary}
              rounded='8px'
              fontSize='16px'
              fontWeight='bold'
              lineHeight='150%'
              letterSpacing='1%'
              textTransform='uppercase'
            >
              Step 2
            </Box>
          </Center>
          <Text
            as='h2'
            mt={{ base: '15px', md: 'm' }}
            fontSize={{ base: '16px', md: '24px' }}
            fontWeight='bold'
            lineHeight='150%'
            textColor={colors.black}
            textAlign='center'
          >
            Receive your 6 baby photos via email + a FREE GIFT to share on
            social media
          </Text>
          <Box mt={{ base: '30px', md: '40px' }} display={{ base: 'flex' }}>
            <Center w='100%'>
              <HStack
                gap={{ base: '3px', md: 'm' }}
                flexWrap='wrap'
                justifyContent='center'
              >
                {/* lkf */}
                <Center
                  width={{ base: '115px', md: '150px' }}
                  position='relative'
                  zIndex='1'
                  flexBasis={{ base: '40%', md: 'auto' }}
                >
                  <Box
                    bg={colors.primary}
                    rounded={{ base: '11px', md: '16px' }}
                    width={{ base: '115px', md: '150px' }}
                    height={{ base: '130px', md: '170px' }}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Box display={{ base: 'none', md: 'block' }} mt='16px'>
                      <Image
                        src='/boy.svg'
                        width={95}
                        height={120}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Box
                      display={{ base: 'flex', md: 'none' }}
                      position='relative'
                      width='115px'
                      height='130px'
                      justifyItems='center'
                      alignItems='center'
                      textAlign='center'
                    >
                      <Image
                        src='/boy.svg'
                        height={90}
                        width={71}
                        style={{ margin: 'auto', marginTop: '7px' }}
                        alt={websiteBrandName}
                      />
                      <Box
                        display={{ base: 'block', md: 'none' }}
                        width={{ base: '115.5px' }}
                        height={{ base: '130.5px' }}
                        background='#D9EEF9'
                        borderRadius='16px'
                        position='absolute'
                        left='0'
                        right='0'
                        top='0'
                        bottom='0'
                        zIndex='-2'
                        style={{ rotate: '-16deg' }}
                      ></Box>
                      <Box
                        display={{ base: 'block', md: 'none' }}
                        width={{ base: '115.5px' }}
                        height={{ base: '130.5px' }}
                        background='#82C7EC'
                        borderRadius='16px'
                        position='absolute'
                        left='0'
                        right='0'
                        top='0'
                        bottom='0'
                        zIndex='-1'
                        style={{ rotate: '-8deg' }}
                      ></Box>
                    </Box>
                    <Box
                      color='white'
                      fontSize={{ base: '12px', md: '14px' }}
                      fontWeight='bold'
                      lineHeight='150%'
                      py='6px'
                      width='90%'
                      margin='auto'
                      mt={{ base: '-38px', md: '4.5px' }}
                      borderWidth='1px'
                      borderColor={hexToRGBA('#FFFFFF', 20)}
                      bg={hexToRGBA('#FFFFFF', 10)}
                      borderRadius={{ base: '6px', md: '12px' }}
                      textAlign='center'
                    >
                      Boy
                    </Box>
                  </Box>
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: 'auto', md: '150px' }}
                    height={{ base: 'auto', md: '170px' }}
                    background='#82C7EC'
                    borderRadius='16px'
                    position='absolute'
                    left='0'
                    right='0'
                    top='0'
                    bottom='0'
                    zIndex='-1'
                    style={{ rotate: '-8deg' }}
                  ></Box>
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: 'auto', md: '150px' }}
                    height={{ base: 'auto', md: '170px' }}
                    background='#D9EEF9'
                    borderRadius='16px'
                    position='absolute'
                    left='0'
                    right='0'
                    top='0'
                    bottom='0'
                    zIndex='-2'
                    style={{ rotate: '-16deg' }}
                  ></Box>
                </Center>
                <Box
                  flexBasis={{ base: '12%', md: 'auto' }}
                  display='flex'
                  justifyContent='center'
                >
                  <Img
                    h={{ base: '28px', md: '36px' }}
                    src='/plus-circle.svg'
                  />
                </Box>
                <Center
                  width={{ base: '115px', md: '150px' }}
                  position='relative'
                  zIndex='1'
                  flexBasis={{ base: '40%', md: 'auto' }}
                >
                  <Box
                    bg={colors.primary}
                    rounded={{ base: '11px', md: '16px' }}
                    width={{ base: '115px', md: '150px' }}
                    height={{ base: '130px', md: '170px' }}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Box display={{ base: 'none', md: 'block' }} mt='6px'>
                      <Image
                        src='/girl.svg'
                        width={110}
                        height={120}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Box
                      display={{ base: 'flex', md: 'none' }}
                      position='relative'
                      width='115px'
                      height='130px'
                      justifyItems='center'
                      alignItems='center'
                      textAlign='center'
                    >
                      <Image
                        src='/girl.svg'
                        width={81}
                        height={90}
                        style={{ margin: 'auto', marginTop: '0px' }}
                        alt={websiteBrandName}
                      />
                      <Box
                        display={{ base: 'block', md: 'none' }}
                        width={{ base: '115.5px' }}
                        height={{ base: '130.5px' }}
                        background='#D9EEF9'
                        borderRadius='16px'
                        position='absolute'
                        left='0'
                        right='0'
                        top='0'
                        bottom='0'
                        zIndex='-2'
                        style={{ rotate: '-16deg' }}
                      ></Box>
                      <Box
                        display={{ base: 'block', md: 'none' }}
                        width={{ base: '115.5px' }}
                        height={{ base: '130.5px' }}
                        background='#82C7EC'
                        borderRadius='16px'
                        position='absolute'
                        left='0'
                        right='0'
                        top='0'
                        bottom='0'
                        zIndex='-1'
                        style={{ rotate: '-8deg' }}
                      ></Box>
                    </Box>
                    <Box
                      color='white'
                      fontSize={{ base: '12px', md: '14px' }}
                      fontWeight='bold'
                      lineHeight='150%'
                      py='6px'
                      width='90%'
                      margin='auto'
                      mt={{ base: '-38px', md: '-3px' }}
                      borderWidth='1px'
                      borderColor={hexToRGBA('#FFFFFF', 20)}
                      bg={hexToRGBA('#FFFFFF', 10)}
                      borderRadius={{ base: '6px', md: '12px' }}
                      textAlign='center'
                    >
                      Girl
                    </Box>
                  </Box>
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: 'auto', md: '150px' }}
                    height={{ base: 'auto', md: '170px' }}
                    background='#82C7EC'
                    borderRadius='16px'
                    position='absolute'
                    left='0'
                    right='0'
                    top='0'
                    bottom='0'
                    zIndex='-1'
                    style={{ rotate: '-8deg' }}
                  ></Box>
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    width={{ base: 'auto', md: '150px' }}
                    height={{ base: 'auto', md: '170px' }}
                    background='#D9EEF9'
                    borderRadius='16px'
                    position='absolute'
                    left='0'
                    right='0'
                    top='0'
                    bottom='0'
                    zIndex='-2'
                    style={{ rotate: '-16deg' }}
                  ></Box>
                </Center>
                <Box
                  flexBasis={{ base: '100%', md: 'auto' }}
                  display='flex'
                  justifyContent='center'
                  marginBottom={{ base: '5px', md: '0px' }}
                >
                  <Img
                    h={{ base: '28px', md: '36px' }}
                    src='/plus-circle.svg'
                  />
                </Box>
                <Center flexBasis={{ base: '100%', md: 'auto' }}>
                  <Box
                    bg={colors.primary}
                    rounded={{ base: '11px', md: '16px' }}
                    width={{ base: '115px', md: '150px' }}
                    height={{ base: '130px', md: '170px' }}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <Box display={{ base: 'none', md: 'block' }} mt='16px'>
                      <Image
                        src='/gift.svg'
                        width={98}
                        height={120}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Box display={{ base: 'block', md: 'none' }} mt='10px'>
                      <Image
                        src='/gift.svg'
                        height={80}
                        width={70}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Box
                      color='white'
                      fontSize={{ base: '12px', md: '14px' }}
                      fontWeight='bold'
                      lineHeight='150%'
                      // m='8px'
                      // mt='0'
                      // py={{ base: '4px', md: '8px' }}
                      // px={{ base: '15px', md: '30px' }}
                      py='6px'
                      width='90%'
                      margin='auto'
                      mt={{ base: '3px', md: '1px' }}
                      borderWidth='1px'
                      borderColor={hexToRGBA('#FFFFFF', 20)}
                      bg={hexToRGBA('#FFFFFF', 10)}
                      borderRadius={{ base: '6px', md: '12px' }}
                      textAlign='center'
                    >
                      Gift
                    </Box>
                  </Box>
                </Center>
              </HStack>
            </Center>
          </Box>
        </Box>
      </Box>
    </Center>
  )
}
