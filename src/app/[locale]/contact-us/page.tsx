'use client'

import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Mailcheck from 'mailcheck'

// SuccessModal Component
const SuccessModal = () => (
  <Center py={4}>
    <Text fontSize='20px' fontWeight='bold'>
      Thank you! Your message has been sent successfully.
    </Text>
  </Center>
)

// MailCorrectionModal Component
const MailCorrectionModal = ({
  isOpen,
  onClose,
  formValues,
  isLoading,
  onSubmitFunction,
}) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent maxW='624px' rounded='16px' mx={{ base: '20px', md: '0' }}>
      <ModalBody>
        <Box textAlign='center' p={6}>
          <Text fontSize='18px' mb={4}>
            Did you mean <strong>{formValues.correctedEmail}</strong>?
          </Text>
          <Button
            onClick={() =>
              onSubmitFunction({
                ...formValues,
                email: formValues.correctedEmail,
              })
            }
            isLoading={isLoading}
            colorScheme='teal'
            mr={3}
          >
            Yes, use this email
          </Button>
          <Button onClick={onClose}>No, keep original</Button>
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
)

// ContactUs Component
export default function ContactUs() {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    name: Yup.string().required('Name is required'),
    message: Yup.string().required('Message is required'),
  })

  const {
    isOpen: isMailCorrectionModalOpen,
    onOpen: openMailCorrectionModal,
    onClose: closeMailCorrectionModal,
  } = useDisclosure()

  const [contactFormValues, setContactFormValues] = useState({
    originalEmail: '',
    correctedEmail: '',
    name: '',
    message: '',
  })

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  })

  const email = watch('email')

  const handleContactSubmission = async (values: any) => {
    // Add your API call logic here
    console.log('Submitted values:', values)
    closeMailCorrectionModal()
    onOpen()
  }

  const onSubmit = async (values: any) => {
    Mailcheck.run({
      email: values.email,
      empty: () => {
        handleContactSubmission(values)
      },
      suggested: (suggestion: any) => {
        setContactFormValues({
          originalEmail: values.email,
          correctedEmail: suggestion.full,
          name: values.name,
          message: values.message,
        })
        setValue('email', suggestion.full)
        openMailCorrectionModal()
      },
    })
  }

  const handleMailCorrection = (useCorrectedEmail: boolean) => {
    if (useCorrectedEmail) {
      handleContactSubmission({
        ...contactFormValues,
        email: contactFormValues.correctedEmail,
      })
    } else {
      setValue('email', contactFormValues.originalEmail)
      closeMailCorrectionModal()
    }
  }

  return (
    <PublicLayout>
      <Box
        bg={colors.primary}
        h='346px'
        w='100%'
        bgImg='url(/contact-us-bg.webp)'
        bgPos='center'
        bgSize='cover'
        pt='60px'
        mt='61px'
        mb={{ base: '520px', md: '480px' }}
      >
        <Text
          as='h1'
          textAlign='center'
          fontSize='42px'
          fontWeight='bold'
          lineHeight='150%'
          textColor='white'
        >
          Contact Us
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Center
            mt={{ base: '35px', md: '60px' }}
            mx={{ base: '20px', md: '0' }}
          >
            <Box
              w='737px'
              maxW='737px'
              bg='white'
              rounded='16px'
              borderWidth='1px'
              borderColor={colors.line}
              p={{ base: '1rem', md: '24px' }}
            >
              <Box>
                <Box
                  as='label'
                  htmlFor='name'
                  color={colors.black}
                  fontSize='14px'
                  fontWeight='semibold'
                  lineHeight='150%'
                >
                  Name
                </Box>
                <Input
                  fontSize='14px'
                  lineHeight='150%'
                  bg='#FAFAFA'
                  _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                  mt='6px'
                  placeholder='John Doe'
                  {...register('name')}
                  isInvalid={!!errors.name}
                />
                <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                  {errors.name?.message}
                </Box>
              </Box>
              <Box mt='20px'>
                <Box
                  as='label'
                  htmlFor='email'
                  color={colors.black}
                  fontSize='14px'
                  fontWeight='semibold'
                  lineHeight='150%'
                >
                  Email
                </Box>
                <Input
                  fontSize='14px'
                  lineHeight='150%'
                  bg='#FAFAFA'
                  _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                  mt='6px'
                  placeholder='john@example.com'
                  {...register('email')}
                  isInvalid={!!errors.email}
                />
                <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                  {errors.email?.message}
                </Box>
              </Box>
              <Box mt='20px'>
                <Box
                  as='label'
                  htmlFor='message'
                  color={colors.black}
                  fontSize='14px'
                  fontWeight='semibold'
                  lineHeight='150%'
                >
                  What can we help you with?
                </Box>
                <Textarea
                  minH='150px'
                  maxH='150px'
                  overflow='auto'
                  fontSize='14px'
                  lineHeight='150%'
                  bg='#FAFAFA'
                  _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                  mt='6px'
                  placeholder='Type here..'
                  {...register('message')}
                  isInvalid={!!errors.message}
                />
                <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                  {errors.message?.message}
                </Box>
              </Box>
              <Button
                mt='24px'
                fontSize='15px'
                fontWeight='semibold'
                bg={colors.primary}
                textColor='white'
                lineHeight='150%'
                w='100%'
                py='25px'
                _hover={{
                  bg: colors.primary,
                }}
                rounded='12px'
                type='submit'
                isLoading={false}
              >
                Submit
              </Button>
            </Box>
          </Center>
        </form>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW='624px'
          rounded='16px'
          mx={{ base: '20px', md: '0' }}
        >
          <ModalBody>
            <SuccessModal />
          </ModalBody>
        </ModalContent>
      </Modal>

      <MailCorrectionModal
        isOpen={isMailCorrectionModalOpen}
        onClose={() => handleMailCorrection(false)}
        formValues={contactFormValues}
        isLoading={false}
        onSubmitFunction={(values) => handleMailCorrection(true)}
      />
    </PublicLayout>
  )
}
