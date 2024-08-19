'use client'

import { websiteBrandName } from '@/_data/common'
import CustomLink from '@/app/components/CustomLink'
import PublicLayout from '@/app/components/publicLayout/PublicLayout'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import ImageDrop from './components/ImageDrop'
import { useSearchParams } from 'next/navigation'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useCreateOrderMutation } from '@/store/api/order/order.api'
import { serverUrl } from '@/_data/serverUrl'
import { useSendZeptoMutation } from '@/store/api/email/email.api'
import { useRouter } from 'next/navigation'
import MailCorrectionModal from '@/app/components/MailCorrectionModal'
import Mailcheck from 'mailcheck'

export default function Checkout() {
  const searchParams = useSearchParams()
  const [amount, setAmount] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [cardError, setCardError] = useState('0')
  const stripe = useStripe()
  const elements = useElements()
  const [dadPhoto, setDadPhoto] = useState('')
  const [momPhoto, setMomPhoto] = useState('')
  const [yourPhoto, setYourPhoto] = useState('')

  const {
    isOpen: isMailCorrectionModalOpen,
    onOpen: openMailCorrectionModal,
    onClose: closeMailCorrectionModal,
  } = useDisclosure()

  const [createOrder, { isLoading: orcerCreateLoading }] =
    useCreateOrderMutation()
  const [sendZepto, { isLoading: isZeptoLoading, data: dataZepto }] =
    useSendZeptoMutation()

  const session_id = searchParams?.get('session_id')

  const toast = useToast()
  const router = useRouter()

  const [isSingleSelected, setIsSingleSelected] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)

  const [checkoutFormValues, setCheckoutFormValues] = useState<{
    [key: string]: string
  }>({})

  const singleValidationSchema = Yup.object({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    name: Yup.string().required('Name is required'),
    yourPhoto: Yup.string().required('Your photo is required'),
  })

  const doubleValidationSchema = Yup.object({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    name: Yup.string().required('Name is required'),
    momPhoto: Yup.string().required('Mom photo is required'),
    dadPhoto: Yup.string().required('Dad photo is required'),
  })

  useEffect(() => {
    if (session_id) onOpen()
  }, [])

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    reset,
    getFieldState,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(
      isSingleSelected ? singleValidationSchema : doubleValidationSchema
    ),
    defaultValues: {
      email: '',
      name: '',
      yourPhoto: '',
      momPhoto: '',
      dadPhoto: '',
    },
  })

  const handleOrder = async (values: any, paymentIntent: any) => {
    setIsLoading(true)
    const formData = new FormData()

    console.log(paymentIntent)

    formData.append('dadPhoto', dadPhoto)
    formData.append('momPhoto', momPhoto)
    formData.append('yourPhoto', yourPhoto)
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('paymentIntent', paymentIntent.id)
    formData.append('orderType', isSingleSelected ? 'SINGLE' : 'DOUBLE')

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    console.log(values)

    const { error, data } = await createOrder(formData)

    console.log(data)
    // Zepto mail
    // const { error: mailError, data: mailData } = await sendZepto({
    //   name: values?.name,
    //   email: values?.email,
    //   subject: 'Order received.',
    //   template:
    //     '2d6f.6d84fecd3129a058.k1.6ccb7eb0-e874-11ee-a154-525400ae9113.18e6747821b',
    //   merge_info: {
    //     Order_ID: data?.uid,
    //     name: values.name,
    //   },
    // })
    // console.log(mailError)
    // console.log(mailData)
    // if (mailError) {
    //   toast({
    //     position: 'top-right',
    //     title: 'Update failed.',
    //     description: JSON.stringify(mailError),
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //   })
    // } else {
    //   toast({
    //     position: 'top-right',
    //     title: 'The email was sent successfully.',
    //     description: JSON.stringify(mailData),
    //     status: 'success',
    //     duration: 5000,
    //     isClosable: true,
    //   })
    // }
    if (error) {
      console.log(error)
      alert(error.data?.message)
    } else {
      console.log(data)
      onOpen()
    }
  }

  const handlePayment = async (name, email, values) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const cardElement = elements.getElement(CardElement)

    try {
      const { data } = await axios.get(`${serverUrl}/create-payment-intent`)
      setClientSecret(data.clientSecret)

      console.log(data.clientSecret)

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name,
            email,
          },
        },
      })

      if (result.error) {
        console.error(result.error)
        alert(result.error.message)
        setIsLoading(false)
        closeMailCorrectionModal()
        return false
      } else {
        await handleOrder(values, result.paymentIntent)
        // alert('Payment succeeded')
        console.log(result.paymentIntent)
        setIsLoading(false)
        closeMailCorrectionModal()
        return result.paymentIntent
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred')
      setIsLoading(false)
      closeMailCorrectionModal()
      return false
    }
  }

  const handleCheckoutSubmission = async (values) => {
    setIsLoading(true)

    await handlePayment(values.name, values.email, values)
  }

  const onSubmit = async (values) => {
    Mailcheck.run({
      email: values.email,
      empty: () => {
        handleCheckoutSubmission(values)
      },
      suggested: (suggestion) => {
        setCheckoutFormValues({
          ...values,
          originalEmail: values.email,
          correctedEmail: suggestion.full,
        })
        openMailCorrectionModal()
      },
    })
  }

  const handleCardChange = (event) => {
    console.log(event.error)
    if (event.error) {
      setCardError(event.error.message)
    } else {
      setCardError('')
    }
  }

  const handleReset = () => {
    setError('yourPhoto', '')
    // setError('dadPhoto', '')
    // setError('momPhoto', '')
    setValue('yourPhoto', '')
    // setValue('dadPhoto', '')
    // setValue('momPhoto', '')

    // setDadPhoto(null)
    // setMomPhoto(null)
    setYourPhoto(null)
  }

  return (
    <PublicLayout hasGreyBG>
      <Box
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        mt='61px'
        bg='#FAFAFA'
        mb={{ base: '1rem', md: '0' }}
        pb='40px'
      >
        <Container maxW='container.xl' pt={{ base: '25.5px', md: '33.5px' }}>
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
                Checkout page
              </Text>
            </HStack>
          </Box>
          <Grid
            bg='white'
            rounded='16px'
            templateColumns='repeat(2, 1fr)'
            my='20px'
            p={{ base: '16px', md: '24px' }}
            pb={{ base: '16px', md: '24px' }}
            gap={{ base: '1rem', md: '20px' }}
          >
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Box
                borderRadius='16px'
                borderWidth='1px'
                borderColor={colors.line}
                p='m'
                px='0'
              >
                <Text
                  fontSize='1rem'
                  fontWeight='semibold'
                  lineHeight='150%'
                  textColor={colors.black}
                  px='m'
                >
                  What you get
                </Text>
                <Box mt='14px' mx='xs'>
                  <HStack gap='0'>
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/pricing-checkmark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      High quality.
                    </Text>
                  </HStack>
                  <HStack
                    gap='0px'
                    mt={{ base: '8px', md: '0' }}
                    mb={{ base: '14px', md: '0px' }}
                  >
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/pricing-checkmark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      No registration required (1 time payment).
                    </Text>
                  </HStack>
                  <HStack gap='0px'>
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/pricing-checkmark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      Same day delivery (24H). Each photo is reviewed manually
                      to ensure the best quality possible.
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Box
                borderRadius='16px'
                borderWidth='1px'
                borderColor={colors.line}
                p='m'
                pl='0'
              >
                <Text
                  fontSize='1rem'
                  fontWeight='semibold'
                  lineHeight='150%'
                  textColor={colors.black}
                  px='m'
                >
                  Please Be Aware
                </Text>
                <Box mt='14px'>
                  <HStack gap='0'>
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/warning-mark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      Make sure you enter the correct email.
                    </Text>
                  </HStack>
                  <HStack gap='0' my={{ base: '10px', md: '0' }}>
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/warning-mark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      Please provide a clear photo for the best results.
                    </Text>
                  </HStack>
                  <HStack gap='0' id='CheckOutForm'>
                    <Box minH='46px' minW='46px'>
                      <Image
                        src='/warning-mark.svg'
                        height={46}
                        width={46}
                        alt={websiteBrandName}
                      />
                    </Box>
                    <Text
                      fontSize='14px'
                      fontWeight='medium'
                      textColor={colors.black}
                      lineHeight='150%'
                    >
                      Check your spam folder for delivery if it's not in the
                      inbox.
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </GridItem>
          </Grid>

          <Grid
            bg='white'
            rounded='16px'
            templateColumns='repeat(2, 1fr)'
            mt='20px'
            p={{ base: '16px', md: '24px' }}
            gap='m'
          >
            <GridItem cursor='pointer' colSpan={{ base: 2, md: 1 }}>
              <HStack
                onClick={() => setIsSingleSelected(true)}
                alignItems='flex-start'
                borderRadius='8px'
                borderWidth='1px'
                borderColor={isSingleSelected ? colors.primary : colors.line}
                px='m'
                bg={
                  isSingleSelected
                    ? hexToRGBA(colors.primary, 10)
                    : 'transparent'
                }
                py='12px'
              >
                <Image
                  src={
                    isSingleSelected ? '/radio-check.svg' : '/radio-uncheck.svg'
                  }
                  height={20}
                  width={20}
                  alt={websiteBrandName}
                />
                <Box>
                  <Text
                    fontSize='14px'
                    fontWeight='semibold'
                    lineHeight='150%'
                    color={colors.black}
                  >
                    Single parent snapshot
                  </Text>
                  <Text
                    mt='xxs'
                    fontSize='12px'
                    fontWeight='medium'
                    lineHeight='150%'
                    textColor={hexToRGBA(colors.black, 50)}
                  >
                    Generate baby pics from 1 photo only
                  </Text>
                </Box>
              </HStack>
            </GridItem>
            <GridItem cursor='pointer' colSpan={{ base: 2, md: 1 }}>
              <HStack
                onClick={() => setIsSingleSelected(false)}
                alignItems='flex-start'
                borderRadius='8px'
                borderWidth='1px'
                borderColor={!isSingleSelected ? colors.primary : colors.line}
                px='m'
                bg={
                  !isSingleSelected
                    ? hexToRGBA(colors.primary, 10)
                    : 'transparent'
                }
                py='12px'
              >
                <Image
                  src={
                    !isSingleSelected
                      ? '/radio-check.svg'
                      : '/radio-uncheck.svg'
                  }
                  height={20}
                  width={20}
                  alt={websiteBrandName}
                />
                <Box>
                  <Text
                    fontSize='14px'
                    fontWeight='semibold'
                    lineHeight='150%'
                    color={colors.black}
                  >
                    Dual snapshot
                  </Text>
                  <Text
                    mt='xxs'
                    fontSize='12px'
                    fontWeight='medium'
                    lineHeight='150%'
                    textColor={hexToRGBA(colors.black, 50)}
                  >
                    Generate baby pics from 2 photos for couples
                  </Text>
                </Box>
              </HStack>
            </GridItem>

            <GridItem colSpan={{ base: 2, md: 1 }}>
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
                  _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                  mt='6px'
                  placeholder='John Doe'
                  {...register('name')}
                  isInvalid={!!errors.name}
                />
                <Box
                  mt='xs'
                  color={colors.red}
                  fontSize='14px'
                  lineHeight='150%'
                >
                  {errors.name?.message}
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <Box>
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
                  _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                  mt='6px'
                  placeholder='john@example.com'
                  {...register('email')}
                  isInvalid={!!errors.email}
                />
                <Box
                  mt='xs'
                  color={colors.red}
                  fontSize='14px'
                  lineHeight='150%'
                >
                  {errors.email?.message}
                </Box>
              </Box>
            </GridItem>

            {isSingleSelected && (
              <GridItem colSpan={2}>
                <ImageDrop
                  name='yourPhoto'
                  title='Your Photo'
                  value={yourPhoto}
                  setValue={(name, value) => {
                    setValue(name, value)
                    setYourPhoto(value)
                  }}
                  register={register}
                  setError={setError}
                  error={errors?.yourPhoto?.message}
                />
                <Box
                  mt='xs'
                  color={colors.red}
                  fontSize='14px'
                  lineHeight='150%'
                >
                  {errors.yourPhoto?.message}
                </Box>
              </GridItem>
            )}

            {!isSingleSelected && (
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <ImageDrop
                  name='dadPhoto'
                  title='Dad Photo'
                  setValue={(name, value) => {
                    setValue(name, value)
                    setDadPhoto(value)
                  }}
                  value={dadPhoto}
                  setError={setError}
                  register={register}
                  error={errors?.dadPhoto?.message}
                />
                <Box
                  mt='xs'
                  color={colors.red}
                  fontSize='14px'
                  lineHeight='150%'
                >
                  {errors.dadPhoto?.message}
                </Box>
              </GridItem>
            )}

            {!isSingleSelected && (
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <ImageDrop
                  name='momPhoto'
                  title='Mom Photo'
                  value={momPhoto}
                  setValue={(name, value) => {
                    console.log(name, value)
                    setValue(name, value)
                    setMomPhoto(value)
                  }}
                  register={register}
                  setError={setError}
                  error={errors?.momPhoto?.message}
                />
                <Box
                  mt='xs'
                  color={colors.red}
                  fontSize='14px'
                  lineHeight='150%'
                >
                  {errors.momPhoto?.message}
                </Box>
              </GridItem>
            )}

            <GridItem colSpan={2}>
              <Box>
                <HStack
                  flexDir={{ base: 'column', md: 'row' }}
                  w='100%'
                  justifyContent='space-between'
                  mb={{ base: '40px', md: '0' }}
                >
                  <Box minW={{ base: '100%', md: '540px' }}>
                    <CardElement onChange={handleCardChange} />
                  </Box>
                  <Img height='40px' src='/stripe-secure.png' />
                </HStack>
                <Button
                  fontSize='15px'
                  fontWeight='semibold'
                  color='white'
                  lineHeight='150%'
                  w='100%'
                  py='25px'
                  rounded='12px'
                  bg={colors.primary}
                  _hover={{ bg: colors.primary }}
                  isDisabled={isLoading}
                  type='submit'
                >
                  Submit Order $9
                </Button>
              </Box>
            </GridItem>
            {/* <GridItem colSpan={2}>
              <Button
                fontSize='15px'
                fontWeight='semibold'
                color='white'
                lineHeight='150%'
                w='100%'
                py='25px'
                rounded='12px'
                bg={colors.primary}
                _hover={{ bg: colors.primary }}
                type='submit'
                isDisabled={isLoading}
              >
                Submit Oder $9
              </Button>
            </GridItem> */}
            <GridItem colSpan={2} mb={{ base: '20px', md: '0' }}>
              <Text
                fontSize='12px'
                fontWeight='semibold'
                lineHeight='150%'
                textColor={hexToRGBA(colors.black, 50)}
                textAlign='center'
              >
                Guaranteed and secure checkout powered by Stripe.
              </Text>
              <Text
                fontSize='12px'
                fontWeight='semibold'
                lineHeight='150%'
                textColor={hexToRGBA(colors.black, 50)}
                textAlign='center'
              >
                By clicking submit, you agree to our{' '}
                <Box
                  as='a'
                  href='/terms-of-service'
                  textColor={'#008cd9'}
                  textDecor='underline'
                  cursor='pointer'
                  // onClick={() => router.push('/terms-of-service')}
                >
                  Terms of Service
                </Box>{' '}
                and{' '}
                <Box
                  as='a'
                  href='/privacy-policy'
                  textColor={'#008cd9'}
                  textDecor='underline'
                  cursor='pointer'
                  // onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy.
                </Box>
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW='624px'
          rounded='16px'
          mx={{ base: '20px', md: '0' }}
        >
          <ModalBody>
            <SuccessModal onClose={onClose} handleReset={handleReset} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <MailCorrectionModal
        isOpen={isMailCorrectionModalOpen}
        onClose={closeMailCorrectionModal}
        formValues={checkoutFormValues}
        isLoading={isLoading}
        onSubmitFunction={handleCheckoutSubmission}
      />
    </PublicLayout>
  )
}

export function SuccessModal({ onClose, handleReset }) {
  return (
    <Box px='8px' py='16px' pb={{ base: '24px', md: '24px' }} pt='0px'>
      <Center>
        <Box>
          <Img h='100px' src='/pricing-checkmark.svg' />
        </Box>
      </Center>
      <Text
        textAlign='center'
        fontSize={{ base: '24px', md: '32px' }}
        fontWeight='bold'
        lineHeight='150%'
        textColor={colors.black}
      >
        Thank you for your order!
      </Text>
      <Text
        mt='m'
        fontSize={{ base: '12px', md: '1rem' }}
        fontWeight='bold'
        lineHeight='150%'
        textColor={hexToRGBA(colors.black, 50)}
        textAlign='center'
      >
        We received your order, we'll review the files and deliver within 24h.
      </Text>
      <Grid templateColumns='repeat(2, 1fr)' gap='m' mt='32px'>
        <GridItem colSpan={{ base: 2, md: 1 }}>
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
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Button
            onClick={() => {
              handleReset()
              onClose()
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
          >
            New Order
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}
