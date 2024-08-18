'use client'

import { ShortStatus } from '@/types/common.types'
import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  useOutsideClick,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { colors } from '../colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Icon } from '../icons'

export default function SortSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(ShortStatus.SHORTBY15)
  const ref = useRef()
  useOutsideClick({ ref: ref, handler: () => setIsOpen(false) })

  const handleSelected = (value) => {
    setSelected(value)
    setIsOpen(false)
  }

  return (
    <Box ref={ref} position='relative' cursor='pointer'>
      <HStack
        onClick={() => setIsOpen(!isOpen)}
        minW='147px'
        justifyContent='space-between'
        borderWidth='1px'
        borderColor={colors.line}
        px='s'
        py='xs'
        rounded='m'
        roundedBottom={isOpen ? '0' : 'm'}
        borderBottom={isOpen ? '0' : '1px'}
        borderBottomColor={colors.line}
        // bg={isOpen ? hexToRGBA(color, 10) : 'transparent'}
      >
        <Text fontWeight='normal' color={colors.black} fontSize='14px'>
          {selected}
        </Text>
        <Box transform={`rotate(${isOpen ? '180' : '0'}deg)`}>
          <Icon icon='ChevronDown' />
        </Box>
      </HStack>
      {isOpen && (
        <VStack
          w='100%'
          gap='0'
          position='absolute'
          top='0'
          left='0'
          zIndex='999'
          borderWidth='1px'
          borderColor={colors.primary}
          borderRadius='m'
          px='xxs'
          roundedBottom='m'
          bg='white'
        >
          <Box p='10px' onClick={() => handleSelected(ShortStatus.SHORTBY15)}>
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              {ShortStatus.SHORTBY15}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box p='10px' onClick={() => handleSelected(ShortStatus.SHORTBY30)}>
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              {ShortStatus.SHORTBY30}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box p='10px' onClick={() => handleSelected(ShortStatus.SHORTBY45)}>
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              {ShortStatus.SHORTBY45}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box p='10px' onClick={() => handleSelected(ShortStatus.SHORTBY60)}>
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              {ShortStatus.SHORTBY60}
            </Text>
          </Box>
        </VStack>
      )}
    </Box>
  )
}
