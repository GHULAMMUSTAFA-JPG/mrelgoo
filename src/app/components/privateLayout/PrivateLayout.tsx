'use client'

import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SideNavigation from './SideNavigation'
import PrivateHeader from './PrivateHeader'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/store/slices/userSlice'
import { useRouter } from 'next/navigation'

export default function PrivateLayout({
  title,
  parentTitle,
  children,
}: {
  title: string
  parentTitle?: string
  children: React.ReactNode
}) {
  const dispatch = useDispatch()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)

  const user = useSelector((state) => state?.user)
  console.log(user)

  useEffect(() => {
    if (!user?.auth || !user?.jwt) {
      dispatch(logoutUser())
      router.push('/admin/login')
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <Flex bg='#FAFAFA' minH='100vh'>
          <SideNavigation />
          <Flex flexDir='column' ml='240px' flexGrow='1'>
            <PrivateHeader title={title} parentTitle={parentTitle} />
            <Flex flexDir='column' flexGrow='1'>
              {children}
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  )
}
