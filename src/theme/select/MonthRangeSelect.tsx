'use client'

import { ShortStatus } from '@/types/common.types'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { colors } from '../colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Icon } from '../icons'

export default function MonthRangeSelect({ isWeekRange = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(
    isWeekRange ? 'Last Week' : 'Last Month'
  )

  const handleSelected = (value) => {
    setSelected(value)
    setIsOpen(false)
  }

  return (
    <Box position='relative' cursor='pointer'>
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
        <Box>
          <Icon icon='Calender' />
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
          <Box
            p='10px'
            onClick={() =>
              handleSelected(`Last ${isWeekRange ? 'Week' : 'Month'}`)
            }
          >
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              Last {isWeekRange ? 'Week' : 'Month'}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box
            p='10px'
            onClick={() =>
              handleSelected(`Last 3 ${isWeekRange ? 'Week' : 'Month'}`)
            }
          >
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              Last 3 {isWeekRange ? 'Week' : 'Month'}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box
            p='10px'
            onClick={() =>
              handleSelected(`Last 6 ${isWeekRange ? 'Week' : 'Month'}`)
            }
          >
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              Last 6 {isWeekRange ? 'Week' : 'Month'}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box
            p='10px'
            onClick={() =>
              handleSelected(`Last ${isWeekRange ? 'Month' : 'Year'}`)
            }
          >
            <Text fontWeight='normal' color={colors.black} fontSize='14px'>
              Last {isWeekRange ? 'Month' : 'Year'}
            </Text>
          </Box>
        </VStack>
      )}
    </Box>
  )
}
