'use client'

import CustomLink from '@/app/components/CustomLink'
import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import { Box, Button, Center, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
  const router = useRouter()
  return (
    <PublicLayout isCenter>
      <VStack h='100%' mt='61px' maxW='982px' px='36px'>
        <Text
          fontWeight='semibold'
          textColor={'#0A2A41'}
          fontSize={{ base: '60px', md: '130px' }}
          lineHeight={{ base: '90px', md: '150px' }}
        >
          404
        </Text>
        <Text
          fontSize={{ base: '12px', md: '30px' }}
          textAlign='center'
          textColor={'#0A2A41'}
          fontWeight='semibold'
          lineHeight={{ base: '18px', md: '45px' }}
        >
          Sorry, the page you're looking for cannot be found. It might have been
          moved, deleted, or it may never have existed at all.
        </Text>
        <Button
          minW={{ base: '100%', md: '235px' }}
          fontSize='15px'
          fontWeight='semibold'
          color={colors.primary}
          borderWidth='1px'
          borderColor={colors.primary}
          bg='transparent'
          lineHeight='150%'
          w={{ base: '100%', md: 'auto' }}
          py='24px'
          px='24px'
          mt='40px'
          onClick={() => router.push('/')}
          rounded='12px'
          _hover={{ bg: 'transparent' }}
        >
          Back to Home
        </Button>
      </VStack>
    </PublicLayout>
  )
}
