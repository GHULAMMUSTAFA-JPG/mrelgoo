'use client'
import { websiteBrandName } from '@/_data/common'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Center, HStack, Img, Input, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const MAX_FILE_SIZE_MB = 15 // Max file size in MB

export default function ImageDrop({
  name,
  title,
  error,
  register,
  value,
  setValue,
  setError,
  showImage = true,
  resetOnOrder = false, // Add a prop to handle reset on new order
}) {
  const [imageBlob, setImageBlob] = useState('')
  const [isOverFile, setIsOverFile] = useState(false)
  const [fileSizeError, setFileSizeError] = useState('') // State for file size error
  const [uploadProgress, setUploadProgress] = useState(0) // State for upload progress

  const validateFileSize = (file) => {
    return file.size <= MAX_FILE_SIZE_MB * 1024 * 1024
  }

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      if (validateFileSize(file)) {
        setImageBlob(URL.createObjectURL(file))
        setError(name, '')
        setFileSizeError('')
        setValue(name, file)
        simulateUpload(file) // Simulate upload progress
      } else {
        setFileSizeError(`File size exceeds ${MAX_FILE_SIZE_MB}MB limit.`)
        setError(name, 'File size exceeds limit')
      }
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsOverFile(true)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFileSize(file)) {
        setImageBlob(URL.createObjectURL(file))
        setError(name, '')
        setFileSizeError('')
        setValue(name, file)
        simulateUpload(file) // Simulate upload progress
      } else {
        setFileSizeError(`File size exceeds ${MAX_FILE_SIZE_MB}MB limit.`)
        setError(name, 'File size exceeds limit')
      }
    }
    setIsOverFile(false)
  }

  // Simulate upload progress for demonstration purposes
  const simulateUpload = (file) => {
    const total = 100 // Total progress (100%)
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= total) {
        clearInterval(interval)
      }
    }, 500)
  }

  // Reset the photo and error state
  const resetPhoto = () => {
    setImageBlob('')
    setValue(name, '')
    setError(name, '')
    setFileSizeError('')
    setUploadProgress(0) // Reset upload progress
  }

  // Handle reset on new order
  React.useEffect(() => {
    if (resetOnOrder) {
      resetPhoto()
    }
  }, [resetOnOrder])

  return (
    <>
      <VStack
        onDragOver={handleDragOver}
        onDragLeave={() => setIsOverFile(false)}
        onDrop={handleDrop}
        position='relative'
      >
        <Box
          as='label'
          htmlFor={name}
          fontSize='14px'
          fontWeight='semibold'
          lineHeight='150%'
          textAlign='left'
          w='100%'
        >
          {title}
        </Box>

        <Box
          w='100%'
          as='label'
          htmlFor={name}
          px='1rem'
          py='24px'
          borderWidth='1px'
          borderColor={
            isOverFile
              ? colors.green
              : error || fileSizeError
              ? colors.red
              : colors.primary
          }
          borderStyle='dashed'
          borderRadius='8px'
          bg={
            isOverFile
              ? hexToRGBA(colors.green, 10)
              : error || fileSizeError
              ? hexToRGBA(colors.red, 5)
              : hexToRGBA(colors.primary, 10)
          }
          position='relative'
        >
          <Box
            position='absolute'
            top='0'
            left='0'
            right='0'
            bottom='0'
            bg={hexToRGBA(colors.primary, 20)}
            borderRadius='8px'
            zIndex='1'
          >
            <Box
              height='100%'
              width={`${uploadProgress}%`}
              bg={colors.green}
              borderRadius='8px'
              position='absolute'
              top='0'
              left='0'
              zIndex='2'
            />
            <Center
              height='100%'
              position='absolute'
              top='0'
              left='0'
              right='0'
              bottom='0'
              zIndex='3'
            >
              <Text fontSize='14px' fontWeight='semibold' color={colors.white}>
                {uploadProgress}%
              </Text>
            </Center>
          </Box>
          <Center>
            {error || fileSizeError ? (
              <Icon icon='DragAndDropRed' />
            ) : (
              <Icon icon='DragAndDrop' />
            )}
          </Center>
          <Text
            mt='10px'
            textAlign='center'
            fontSize='14px'
            fontWeight='semibold'
            lineHeight='150%'
            color={colors.black}
          >
            Drag and drop your file
          </Text>
          {fileSizeError && (
            <Text
              mt='10px'
              textAlign='center'
              fontSize='12px'
              fontWeight='semibold'
              color={colors.red}
            >
              {fileSizeError}
            </Text>
          )}
        </Box>
        <Input
          onChange={handleChange}
          display='none'
          type='file'
          id={name}
          accept='image/*'
          multiple={false}
        />
      </VStack>
      {value && (
        <Box>
          <HStack
            justifyContent='space-between'
            mt='12px'
            borderRadius='8px'
            borderWidth='1px'
            borderColor={colors.line}
            px='m'
            py='12px'
          >
            <HStack>
              <Center h='46px' w='61px' rounded='6px' overflow='hidden'>
                <Img src={URL.createObjectURL(value)} />
              </Center>
              <Box ml='12px'>
                <Text
                  fontSize='14px'
                  fontWeight='medium'
                  lineHeight='150%'
                  textColor={colors.black}
                  noOfLines={1}
                  maxW='300px'
                >
                  {value.name}
                </Text>
                <Text
                  mt='4px'
                  fontSize='12px'
                  fontWeight='semibold'
                  lineHeight='150%'
                  color={hexToRGBA(colors.black, 50)}
                >
                  {parseFloat(
                    parseFloat(value?.size || '0') / (1024 * 1024)
                  ).toFixed(2)}{' '}
                  MB
                </Text>
              </Box>
            </HStack>
            <Box
              pr='s'
              cursor='pointer'
              onClick={() => {
                resetPhoto()
                setError(name, 'Mom photo is required')
              }}
            >
              <Icon icon='ImageClose' />
            </Box>
          </HStack>
        </Box>
      )}
    </>
  )
}
