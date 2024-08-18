'use client'

import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  Image,
  Img,
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
import CustomLink from '@/app/components/CustomLink'
import ReCAPTCHA from 'react-google-recaptcha'
import { useContactUsMutation } from '@/store/api/email/email.api'
import MailCorrectionModal from '@/app/components/MailCorrectionModal'
import Mailcheck from 'mailcheck'

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

  const [handleContactUs, { isLoading }] = useContactUsMutation()

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  })

  const handleContactSubmission = async (values: any) => {
    const { errors, data } = await handleContactUs(values)
    if (data) {
      console.log(data)
      closeMailCorrectionModal()
      onOpen()
    } else {
      console.log(errors)
    }
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
        openMailCorrectionModal()
      },
    })
  }

  const handleRecaptchaChange = (response) => {
    // Handle reCAPTCHA response
    console.log(response)
    if (response) setIsCaptchaValid(true)
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
                  htmlFor='name'
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
                  htmlFor='name'
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
              {/* <Box mt='24px'>
                <ReCAPTCHA
                  sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  onChange={handleRecaptchaChange}
                />
              </Box> */}
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
                isLoading={isLoading}
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
        onClose={closeMailCorrectionModal}
        formValues={contactFormValues}
        isLoading={isLoading}
        onSubmitFunction={handleContactSubmission}
      />
    </PublicLayout>
  )
}

export function SuccessModal() {
  return (
    <Box px='8px' py='16px' pt='0px'>
      <Center>
        <Box>
          <Image h='100px' src='/pricing-checkmark.svg' />
        </Box>
      </Center>
      <Text
        textAlign='center'
        fontSize={{ base: '24px', md: '32px' }}
        fontWeight='bold'
        lineHeight='150%'
        textColor={colors.black}
      >
        Thank you for getting in touch!
      </Text>
      <Text
        mt='m'
        fontSize={{ base: '12px', md: '1rem' }}
        fontWeight='bold'
        lineHeight='150%'
        textColor={hexToRGBA(colors.black, 50)}
        textAlign='center'
      >
        We appreciate you contacting us, we will reply soon! Have a great day!
      </Text>
      <Center display={{ base: 'block', md: 'flex' }} mt='32px' mb='xs'>
        <CustomLink href='/'>
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
          >
            Back to Home
          </Button>
        </CustomLink>
      </Center>
    </Box>
  )
}
