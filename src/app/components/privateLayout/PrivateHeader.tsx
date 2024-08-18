'use client'
import { logoutUser } from '@/store/slices/userSlice'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Center,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomLink from '../CustomLink'
import { useRouter } from 'next/navigation'

export default function PrivateHeader({ title = 'Dashboard', parentTitle }) {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user?.user)
  console.log(user)
  const router = useRouter()
  const handleLogout = () => {
    dispatch(logoutUser())
    router.push('/admin/login')
  }
  return (
    <Flex
      borderBottom='1px'
      justifyContent='space-between'
      borderColor={colors.line}
      px='30px'
    >
      <HStack
        gap='xs'
        color={colors.black}
        fontSize='1.5rem'
        fontWeight='600'
        py='s'
      >
        {parentTitle && (
          <HStack>
            <Box color={hexToRGBA(colors.black, 50)} fontSize='1rem'>
              {parentTitle}
            </Box>
            <Icon icon='HeaderArrow' color='primary' />
          </HStack>
        )}
        <Box>{title}</Box>
      </HStack>

      <Center cursor='pointer'>
        <Menu>
          <MenuButton as={Box}>
            <Box display='flex' gap='m' alignItems='center'>
              <Icon icon='Avatar' shouldSize={false} />
              <Text color={colors.black} fontWeight='600' size='small'>
                {user?.name || 'Unknown'}
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem onClick={() => router.push('/admin/settings')}>
              Settings
            </MenuItem>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  )
}
