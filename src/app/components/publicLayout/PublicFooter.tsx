import { footerMenu } from '@/_data/menu'
import { colors } from '@/theme/colors'
import { Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import CustomLink from '../CustomLink'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Icon } from '@/theme/icons'

export default function PublicFooter() {
  return (
    <VStack
      w='100%'
      as='footer'
      borderTop='1px'
      borderTopColor={colors.line}
      pt='m'
    >
      <Container maxW='container.xl' px={{ base: '20px', md: 'm' }}>
        <HStack
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          pb='m'
          borderBottom='1px'
          borderBottomColor={colors.line}
          gap={{ base: 'm', md: 'xs' }}
        >
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            gap={{ base: 'm', md: '32px' }}
          >
            {footerMenu.map((item, index) => (
              <CustomLink href={item.href}>
                <Center
                  fontWeight='medium'
                  color={hexToRGBA(colors.black, 50)}
                  lineHeight='150%'
                >
                  {item.title}
                </Center>
              </CustomLink>
            ))}
          </HStack>
          <HStack
            fontWeight='medium'
            color={hexToRGBA(colors.black, 50)}
            lineHeight='150%'
          >
            <Icon icon='Copyright' />
            <Box>Copyright {new Date().getFullYear()}</Box>
          </HStack>
        </HStack>

        {/*  */}
        <Center mt='m' color={colors.red} fontWeight='600' lineHeight='150%'>
          Disclaimer
        </Center>

        <Text
          mt='s'
          color={colors.black}
          fontSize='14px'
          pb='46px'
          textAlign='center'
          fontWeight='medium'
          lineHeight='150%'
        >
          Our service is for entertainment purposes only and is not related to
          genetics or medicine. We use an AI model to generate child photos
          based on the provided images of the parents. While we strive for
          maximum accuracy, there may be errors or differences in the generated
          images.
        </Text>
      </Container>
    </VStack>
  )
}
