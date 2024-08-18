import { Icon } from '@/theme/icons'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IconName } from '@/theme/icons/svg'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'

type IOrderCard = {
  orderNumber: number
  orderType: string
  growth: string
  iconName?: IconName
}

export default function OrderCard({
  orderType,
  orderNumber,
  growth,
  iconName,
}: IOrderCard) {
  return (
    <Flex
      px='l'
      py='0.625rem'
      w='100%'
      borderRadius='s'
      borderWidth='1px'
      bg='white'
      gap='0.9375rem'
    >
      <Icon shouldSize={false} icon={iconName} />
      <VStack justifyContent='center' alignItems='start' gap='4px'>
        <Text
          fontSize='12px'
          lineHeight='150%'
          fontWeight='medium'
          color={hexToRGBA(colors.black, 50)}
        >
          {orderType}
        </Text>
        <Text
          fontSize='20px'
          lineHeight='150%'
          fontWeight='semibold'
          color={colors.black}
        >
          {orderNumber}
        </Text>
        <Text
          fontSize='12px'
          lineHeight='150%'
          fontWeight='400'
          color={colors.green}
        >
          {growth}
        </Text>
      </VStack>
    </Flex>
  )
}
