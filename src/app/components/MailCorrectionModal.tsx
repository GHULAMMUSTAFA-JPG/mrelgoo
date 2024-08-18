'use client'

import { colors } from '@/theme/colors'
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { useContactUsMutation } from '@/store/api/email/email.api'

interface MailCorrectionModalProps {
  onClose: () => void
  isOpen: boolean
  onSubmitFunction: (val) => void
  isLoading: boolean
  formValues: {
    [key: string]: string
  }
}

export default function MailCorrectionModal({
  onClose,
  isOpen,
  formValues,
  onSubmitFunction,
  isLoading,
}: MailCorrectionModalProps) {
  const [handleLoading, setHandleLoading] = useState('originalEmail')

  const { correctedEmail, originalEmail, ...rest } = formValues

  const handleSubmission = async (
    values,
    typeOfSubmission: 'original' | 'corrected'
  ) => {
    setHandleLoading(typeOfSubmission)
    onSubmitFunction(values)
  }

  return (
    <Modal
      isCentered
      onClose={() => {
        onClose()
      }}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent maxW='624px' rounded='16px' mx={{ base: '20px', md: '0' }}>
        <ModalBody>
          <Box px='8px' py='16px' pb={{ base: '24px', md: '24px' }} pt='0px'>
            <Center>
              <Box>
                <Img className='' src='/mail_img.png' />
              </Box>
            </Center>
            <Text
              textAlign='center'
              fontSize={{ base: '24px', md: '32px' }}
              fontWeight='bold'
              lineHeight='150%'
              textColor={colors.black}
            >
              We’ll save your email as {formValues?.correctedEmail}
            </Text>
            <Text
              mt='m'
              fontSize={{ base: '12px', md: '1rem' }}
              fontWeight='bold'
              lineHeight='150%'
              textColor={hexToRGBA(colors.black, 50)}
              textAlign='center'
            >
              We think you may have entered a typo. So, we updated it for you.
            </Text>
            <Grid templateColumns='repeat(2, 1fr)' gap='m' mt='32px'>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <Button
                  minW={{ base: '100%', md: '235px' }}
                  fontSize='15px'
                  fontWeight='semibold'
                  color={colors.primary}
                  borderWidth='1px'
                  borderColor={colors.primary}
                  bg='transparent'
                  lineHeight='150%'
                  w='100%'
                  py='24px'
                  rounded='12px'
                  _hover={{ bg: 'transparent' }}
                  onClick={() => {
                    handleSubmission(
                      {
                        ...rest,
                        email: correctedEmail,
                      },
                      'corrected'
                    )
                  }}
                  isLoading={handleLoading === 'corrected' && isLoading}
                  disabled={handleLoading === 'corrected' && isLoading}
                >
                  OK
                </Button>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <Button
                  onClick={() => {
                    handleSubmission(
                      {
                        ...rest,
                        email: originalEmail,
                      },
                      'original'
                    )
                  }}
                  minW={{ base: '100%', md: '235px' }}
                  fontSize='15px'
                  fontWeight='semibold'
                  color={colors.primary}
                  borderWidth='1px'
                  borderColor={colors.primary}
                  bg='transparent'
                  lineHeight='150%'
                  w='100%'
                  py='24px'
                  rounded='12px'
                  _hover={{ bg: 'transparent' }}
                  isLoading={handleLoading === 'original' && isLoading}
                  disabled={handleLoading === 'original' && isLoading}
                >
                  Use Original Email
                </Button>
              </GridItem>
            </Grid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
