import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { Box, Center, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Pagination({ setCurrentPage, length }) {
  const [activePage, setActivePage] = useState(1)
  return (
    <Center mt='m'>
      <HStack gap='5px'>
        <Center
          borderWidth='1px'
          borderColor={colors.line}
          borderRadius='32px'
          h='32px'
          w='32px'
          onClick={() => {
            if (activePage > 1) {
              setActivePage(activePage - 1)
              setCurrentPage(activePage - 1)
            }
          }}
        >
          <Icon icon='SingaleArrowLeft' />
        </Center>
        {Array.from({ length }, (_, index) => index + 1).map((item, index) => (
          <Center
            onClick={() => {
              setCurrentPage(item)
              setActivePage(item)
            }}
            borderWidth='1px'
            borderColor={colors.line}
            borderRadius='32px'
            h='32px'
            w='32px'
            bg={activePage === item ? colors.primary : 'white'}
            _hover={{
              bg:
                activePage === item
                  ? colors.primary
                  : hexToRGBA(colors.primary, 5),
            }}
            cursor='pointer'
          >
            <Text
              fontSize='12px'
              fontWeight='semibold'
              lineHeight='150%'
              color={
                activePage === item ? 'white' : hexToRGBA(colors.black, 50)
              }
            >
              {item}
            </Text>
          </Center>
        ))}

        <Center
          borderWidth='1px'
          borderColor={colors.line}
          borderRadius='32px'
          h='32px'
          w='32px'
          onClick={() => {
            if (activePage < length) {
              setActivePage(activePage + 1)
              setCurrentPage(activePage + 1)
            }
          }}
        >
          <Icon icon='SingalArrowRight' />
        </Center>
      </HStack>
    </Center>
  )
}
