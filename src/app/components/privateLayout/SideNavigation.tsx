'use client'

import { websiteBrandName } from '@/_data/common'
import { sidebar } from '@/_data/sidebar'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import CustomLink from '../CustomLink'
import EmailPopup from '@/app/[locale]/admin/email-template/components/EmailPopup'

export default function SideNavigation() {
  const pathname = usePathname()

  const { onOpen, onClose, isOpen } = useDisclosure()
  return (
    <Flex
      justifyContent='space-between'
      flexDir='column'
      w='240px'
      minW='240px'
      p='m'
      bg='white'
      pos='fixed'
      h='100vh'
    >
      <Box>
        <Center>
          <Image
            src='/home-logo-white.svg'
            height={60}
            width={60}
            alt={websiteBrandName}
          />
        </Center>
        <Flex mt='32px' flexDir='column' gap='2px'>
          {sidebar.map((item, index) => (
            <CustomLink key={index} href={item.href}>
              <HStack
                w='100%'
                p='m'
                gap='10px'
                rounded='8px'
                bg={
                  item.href === pathname
                    ? hexToRGBA(colors.primary, 10)
                    : 'transparent'
                }
              >
                <Icon
                  icon={item.icon}
                  color={item.href === pathname ? 'primary' : 'inactive'}
                />
                <Text
                  fontSize='1rem'
                  fontWeight='medium'
                  lineHeight='137.755%'
                  textColor={
                    item.href === pathname ? colors.primary : '#7F7F7F'
                  }
                >
                  {item.title}
                </Text>
              </HStack>
            </CustomLink>
          ))}
        </Flex>
      </Box>
      <Box>
        <Button
          onClick={onOpen}
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
        >
          Mail
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='538px'>
          <EmailPopup onClose={onClose} />
        </ModalContent>
      </Modal>
    </Flex>
  )
}
