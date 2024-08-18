'use client'
import { websiteBrandName } from '@/_data/common'
import { useLoginMutation } from '@/store/api/user/user.api'
import { loginUser, setJWT, setUserData } from '@/store/slices/userSlice'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

export default function Login() {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
  })

  const dispatch = useDispatch()
  const [handleLogin, { isLoading: logging }] = useLoginMutation()

  const router = useRouter()

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  const onSubmit = async (values) => {
    if (isCaptchaValid) {
      console.log(values)
      setIsLoading(true)
      const { data, errors } = await handleLogin(values)

      console.log(errors)
      if (!data) {
        console.log(errors)
        alert('Login failed')
        setIsLoading(false)
      } else {
        console.log(data)

        dispatch(loginUser())
        dispatch(setUserData(data))
        dispatch(setJWT({ token: data?.sessionToken }))

        router.push('/admin/dashboard')
      }
    }
    // onOpen()
    // setIsLoading(true)
  }
  const handleRecaptchaChange = (response) => {
    // Handle reCAPTCHA response
    console.log(response)
    if (response) setIsCaptchaValid(true)
  }
  return (
    <Center
      minH='100vh'
      w='100%'
      bg={colors.primary}
      bgImage='url(/noise-bg.svg)'
      bgPos='center'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Box
        w={{ base: '100%', md: '562px' }}
        maxW={{ base: '100%', md: '562px' }}
        p={{ base: '20px', md: '40px' }}
        m={{ base: '16px', md: '0' }}
        borderRadius='20px'
        bg='white'
      >
        <Center>
          <Box>
            <Image
              src='/home-logo-white.svg'
              height={90}
              width={90}
              alt={websiteBrandName}
            />
          </Box>
        </Center>
        <Text
          as='h1'
          mt='20px'
          fontSize='24px'
          fontWeight='bold'
          lineHeight='150%'
          textColor={colors.black}
          textAlign='center'
        >
          Welcome Back!
        </Text>

        <Flex
          as='form'
          onSubmit={handleSubmit(onSubmit)}
          mt='28px'
          flexDir='column'
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
              Mail
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
          </Box>
          <Box mt='m'>
            <Box
              as='label'
              htmlFor='name'
              color={colors.black}
              fontSize='14px'
              fontWeight='semibold'
              lineHeight='150%'
            >
              Password
            </Box>
            <Input
              fontSize='14px'
              lineHeight='150%'
              _placeholder={{ color: hexToRGBA(colors.black, 50) }}
              mt='6px'
              placeholder=''
              {...register('password')}
              isInvalid={!!errors.password}
              type='password'
            />
          </Box>
          <Box mt='24px'>
            <Text
              maxW='200px'
              mb='m'
              fontSize='14px'
              textColor={hexToRGBA(colors.black, 75)}
            >
              Before you proceed to the survery, please complete the captcha
              below.
            </Text>
            <ReCAPTCHA
              sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              onChange={handleRecaptchaChange}
            />
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
            isDisabled={isLoading || logging}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}
