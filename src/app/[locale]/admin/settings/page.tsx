'use client'

import PrivateLayout from '@/app/components/privateLayout/PrivateLayout'
import { useAdminUpdateMutation } from '@/store/api/user/user.api'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

export default function Settings() {
  const [updateAdmin, { isLoading }] = useAdminUpdateMutation()
  const user = useSelector((state) => state.user?.user)
  console.log(user)
  const router = useRouter()
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push('/admin/login')
    }
  }, [user])

  const toast = useToast()

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

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
      name: user?.name,
      email: user?.email,
      password: '',
    },
  })

  const onSubmit = async (values) => {
    console.log(values)
    const { error, data } = await updateAdmin(values)
    if (error) {
      toast({
        position: 'top-right',
        title: 'Update failed.',
        description: JSON.stringify(error),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        position: 'top-right',
        title: 'update successful.',
        description: 'You have successfully updated your account.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }
  // onOpen()
  // setIsLoading(true)

  return (
    <PrivateLayout title='Settings'>
      <Center>
        <Box
          mt='24px'
          borderRadius='16px'
          p='24px'
          borderWidth='1px'
          borderColor={colors.line}
          maxW='538px'
          w='538px'
          bg='white'
        >
          <Text
            fontSize='1rem'
            fontWeight='semibold'
            lineHeight='150%'
            color={colors.black}
          >
            Personal Information
          </Text>
          <Flex
            as='form'
            onSubmit={handleSubmit(onSubmit)}
            flexDir='column'
            gap='20px'
            mt='20px'
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
                _placeholder={{ color: hexToRGBA(colors.black, 50) }}
                mt='6px'
                placeholder='John Doe'
                {...register('name')}
                isInvalid={!!errors.name}
                isReadOnly={!isEditable}
              />
              <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                {errors.name?.message}
              </Box>
            </Box>
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
                placeholder='ex example@gmail.com'
                {...register('email')}
                isInvalid={!!errors.email}
                readOnly={user?.email}
                value={user?.email}
              />
              <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                {errors.email?.message}
              </Box>
            </Box>
            <Box>
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
                isReadOnly={!isEditable}
              />
              <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                {errors.password?.message}
              </Box>
            </Box>
            <Flex justifyContent='flex-end' mt='4px'>
              <HStack gap='1rem'>
                <Button
                  fontSize='15px'
                  fontWeight='semibold'
                  color={colors.primary}
                  lineHeight='150%'
                  w='100%'
                  py='22px'
                  bg='transparent'
                  borderWidth='1px'
                  borderColor={colors.line}
                  rounded='12px'
                  onClick={() => setIsEditable(true)}
                >
                  Edit
                </Button>
                <Button
                  fontSize='15px'
                  fontWeight='semibold'
                  color='white'
                  bg={colors.primary}
                  lineHeight='150%'
                  w='100%'
                  py='23px'
                  px='50px'
                  rounded='12px'
                  _hover={{ bgColor: colors.primary }}
                  type='submit'
                  isDisabled={isLoading || !isEditable}
                >
                  Save changes
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </PrivateLayout>
  )
}
