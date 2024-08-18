'use client'

import PrivateLayout from '@/app/components/privateLayout/PrivateLayout'
import React from 'react'
import DataTable from '../dashboard/components/DataTable'
import EmailPopup from './components/EmailPopup'
import { Box, Center, Flex } from '@chakra-ui/react'
import { colors } from '@/theme/colors'

export default function EmailTemplate() {
  return (
    <PrivateLayout title='Email Template'>
      <Flex justifyContent='center' alignItems='center'>
        <Box
          w='538px'
          maxW='538px'
          bg='white'
          mt='xl'
          rounded='12px'
          borderWidth='1px'
          borderColor={colors.line}
        >
          <EmailPopup />
        </Box>
      </Flex>
    </PrivateLayout>
  )
}
