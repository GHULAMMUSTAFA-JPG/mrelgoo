'use client'

import { websiteBrandName } from '@/_data/common'
import { Box, Container, Img, ScaleFade, SlideFade } from '@chakra-ui/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ScrolltoTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array means this effect runs only once after mounting

  const scrollToTopFnc = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  console.log(pathname)

  return (
    <Box
      pos='fixed'
      bottom={{ base: '100px', md: '160px' }}
      left='0'
      right='0'
      w='100%'
      zIndex={1}
    >
      {!pathname?.includes('admin') && (
        <SlideFade in={isVisible}>
          <Container
            pos='relative'
            h='0px'
            bg='red'
            display='flex'
            justifyContent='flex-end'
            maxW='container.xl'
          >
            <Box>
              <Img
                onClick={scrollToTopFnc}
                src='/go-up.svg'
                h={{ base: '46px', md: '62px' }}
                alt={websiteBrandName}
              />
            </Box>
          </Container>
        </SlideFade>
      )}
    </Box>
  )
}
