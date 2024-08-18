'use client'

import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  HStack,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import ImageDrop from '../../../checkout/components/ImageDrop'
import ImageDropMultiple from '@/app/[locale]/checkout/components/ImageDropMultiple'
import { useUploadImagesMutation } from '@/store/api/upload/upload.api'
import { serverUrl } from '@/_data/serverUrl'
import {
  useSendZeptoMutation,
  useSendZohoMutation,
} from '@/store/api/email/email.api'

export default function EmailPopup({ onClose, email }) {
  const [uploadImages, { isLoading }] = useUploadImagesMutation()
  const [sendMail, { isLoading: isLoadingSendMail }] = useSendZohoMutation()
  const [images, setImages] = useState([])
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  })

  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email,
      subject: '',
      message: '',
    },
  })

  const toast = useToast()

  const onSubmit = async (values) => {
    if (images.length > 0) {
      const fomrData = new FormData()
      images.map((item, index) => {
        fomrData.append('img', item)
      })

      let uploadedImages: any = []
      const { error, data } = await uploadImages(fomrData)

      data?.img?.map((img) => {
        const ImgPath = window.location.origin
          ? `${window.location.origin}/download?ImageId=${img.filename}`
          : `${serverUrl}/uploads/${img.filename}`
        console.log(ImgPath)
        uploadedImages = [...uploadedImages, ImgPath]
      })

      if (!error && uploadImages.length > 0) {
        const htmlValue = `<div>
          ${values?.message}
          <br/>
          <br/>
          ${uploadedImages
            .map(
              (a, i) => `
            <div>
              <p>Image ${i + 1}: ${a}</p>              
            </div>`
            )
            .join('')}
          </div>`
        console.log(htmlValue)

        const { error: mailError, data: mailData } = await sendMail({
          ...values,
          message: htmlValue,
        })
        if (mailError) {
          toast({
            position: 'top-right',
            title: 'Email Sending Failed.',
            description: JSON.stringify(mailError),
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        } else {
          toast({
            position: 'top-right',
            title: 'The email was sent successfully.',
            description: JSON.stringify(mailError),
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
        console.log(mailError)
        console.log(mailData)
      }
    } else {
      const { error: mailError, data: mailData } = await sendMail({
        ...values,
      })
      if (mailError) {
        toast({
          position: 'top-right',
          title: 'Email Sending Failed.',
          description: JSON.stringify(mailError),
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          position: 'top-right',
          title: 'The email was sent successfully.',
          description: JSON.stringify(mailError),
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    //    onOpen()
    console.log(email)
  }
  return (
    <Box as='form' onSubmit={handleSubmit(onSubmit)} p='24px'>
      <HStack justifyContent='space-between'>
        <Text
          fontSize='20px'
          fontWeight='semibold'
          lineHeight='150%'
          textColor={colors.black}
        >
          New Mail (Zoho)
        </Text>
        {onClose && (
          <Box cursor='pointer' onClick={onClose}>
            <Icon icon='ModalClose' />
          </Box>
        )}
      </HStack>
      <HStack mt='24px'>
        <Text
          fontSize='14px'
          fontWeight='semibold'
          lineHeight='150%'
          textColor={colors.black}
        >
          To
        </Text>
        <Box flexGrow='1'>
          <Input
            fontSize='14px'
            lineHeight='150%'
            _placeholder={{ color: hexToRGBA(colors.black, 50) }}
            mt='6px'
            placeholder='Email'
            {...register('email')}
            value={email}
            isInvalid={!!errors.email}
          />
        </Box>
      </HStack>
      <Box ml='24px' color={colors.red} fontSize='14px' lineHeight='150%'>
        {errors.email?.message}
      </Box>
      <Box mt='16px'>
        <Input
          fontSize='14px'
          lineHeight='150%'
          _placeholder={{ color: hexToRGBA(colors.black, 50) }}
          mt='6px'
          placeholder='Subject'
          {...register('subject')}
          isInvalid={!!errors.subject}
        />
        <Box color={colors.red} fontSize='14px' lineHeight='150%'>
          {errors.subject?.message}
        </Box>
      </Box>

      <Box mt='16px'>
        <Textarea
          rows={6}
          fontSize='14px'
          lineHeight='150%'
          maxH='140px'
          minH='140px'
          _placeholder={{ color: hexToRGBA(colors.black, 50) }}
          mt='6px'
          placeholder='Type your message'
          {...register('message')}
          isInvalid={!!errors.message}
        />
        <Box color={colors.red} fontSize='14px' lineHeight='150%'>
          {errors.message?.message}
        </Box>
      </Box>

      <Box mt='24px'>
        <ImageDropMultiple
          name='image'
          title=''
          setValue={(key, value) => {
            console.log(value)
            setError('image', { message: '' })
            setValue('image', value)
            console.log(value)
            setImages(value)
          }}
          setError={setError}
          value={images}
          error={errors?.image?.message}
        />
        <Box color={colors.red} fontSize='14px' lineHeight='150%'>
          {errors.image?.message}
        </Box>
      </Box>

      <Box mt='24px'>
        <Text
          fontSize='12px'
          fontWeight='semibold'
          textColor={hexToRGBA(colors.black, 50)}
        >
          Uploaded file
        </Text>
      </Box>

      <HStack mt='24px' justifyContent='space-between'>
        <HStack gap='12px'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            rounded='35px'
            h='35px'
            w='35px'
            borderWidth='1px'
            borderColor={colors.line}
          >
            <Icon icon='Attatchment' />
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            rounded='35px'
            h='35px'
            w='35px'
            borderWidth='1px'
            borderColor={colors.line}
          >
            <Icon icon='Text' />
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            rounded='35px'
            h='35px'
            w='35px'
            borderWidth='1px'
            borderColor={colors.line}
          >
            <Icon icon='Emoji' />
          </Box>
        </HStack>
        <Button
          fontSize='15px'
          fontWeight='semibold'
          bg={colors.primary}
          color='white'
          _hover={{ bg: colors.primary }}
          lineHeight='150%'
          py='25px'
          px='30px'
          rounded='12px'
          type='submit'
          isDisabled={isLoadingSendMail || isLoading}
        >
          {isLoading
            ? 'Image Uploading'
            : isLoadingSendMail
            ? 'Mail Sending'
            : 'Send'}
        </Button>
      </HStack>
    </Box>
  )
}
