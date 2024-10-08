'use client'
import { websiteBrandName } from '@/_data/common'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Center, HStack, Img, Input, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageDropMultiple({
  name,
  title,
  error,
  value,
  setValue,
  setError,
}) {
  const [isOverFile, setIsOverFile] = useState(false)
  const handleChange = (event) => {
    console.log(name)
    if (event.target.files && event.target.files[0]) {
      setError(name, '')
      // lkfjs
      setValue(name, Array.from(event.target.files))
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsOverFile(true)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setError(name, '')
      // lkfjs
      setValue(name, Array.from(e.dataTransfer.files))
    }
    setIsOverFile(false)
  }

  const handleItemClose = (index) => {
    let updatedValue: any = []
    value.map((it, iIndex) => {
      console.log(iIndex, index)
      if (iIndex != index) {
        console.log(false, it)
        updatedValue = [...updatedValue, it]
      } else {
        console.log(true)
      }
    })
    console.log(updatedValue)
    setValue(name, updatedValue)
  }
  return (
    <>
      <VStack
        onDragOver={handleDragOver}
        onDragLeave={() => setIsOverFile(false)}
        onDrop={handleDrop}
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
            isOverFile ? colors.green : error ? colors.red : colors.primary
          }
          borderStyle='dashed'
          borderRadius='8px'
          bg={
            isOverFile
              ? hexToRGBA(colors.green, 10)
              : error
              ? hexToRGBA(colors.red, 5)
              : hexToRGBA(colors.primary, 10)
          }
        >
          <>
            <Center>
              {error ? (
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
          </>
        </Box>
        <Input
          onChange={handleChange}
          display='none'
          type='file'
          id={name}
          accept='image/*'
          multiple={true}
        />
      </VStack>
      {value.length > 0 && (
        <VStack>
          {value.map((item, index) => (
            <Box key={index} w='100%'>
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
                    <Img src={URL.createObjectURL(item)} />
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
                      {item.name}
                    </Text>
                    <Text
                      mt='4px'
                      fontSize='12px'
                      fontWeight='semibold'
                      lineHeight='150%'
                      color={hexToRGBA(colors.black, 50)}
                    >
                      {parseFloat(
                        parseFloat(item?.size || '0') / (1024 * 1024)
                      ).toFixed(2)}{' '}
                      MB
                    </Text>
                  </Box>
                </HStack>
                <Box
                  pr='s'
                  cursor='pointer'
                  onClick={() => {
                    handleItemClose(index)
                    setError(name, 'Mom photo is required')
                  }}
                >
                  <Icon icon='ImageClose' />
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </>
  )
}
