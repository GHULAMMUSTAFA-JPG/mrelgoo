'use client'

import { websiteBrandName } from '@/_data/common'
import { menu } from '@/_data/menu'
import { Box, Center, Collapse, Img, ScaleFade } from '@chakra-ui/react'
import Image from 'next/image'
import { useOutsideClick } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import CustomLink from '../CustomLink'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'

export default function MobileMenu() {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const switchIsOpen = () => setIsOpen(!isOpen)

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  })

  return (
    <Box ref={ref}>
      <Box onClick={switchIsOpen}>
        <Image src='/menu.svg' height={35} width={35} alt={websiteBrandName} />
      </Box>
      <Box pos='absolute' w='100%' left='0' top='60px' zIndex='1'>
        <Collapse in={isOpen}>
          <Box
            p='m'
            bg={'#000000'}
            // borderBottomWidth='1px'
            // borderBottomColor='white'
            borderBottomRightRadius='m'
            maxW='272px'
          >
            {menu.map((item, index) => (
              <CustomLink href={item.href}>
                <Center
                  onClick={() => setIsOpen(false)}
                  borderBottom={menu.length === index + 1 ? '0' : '1px'}
                  borderBottomColor={'#E5E5E51A'}
                  pt={index === 0 ? '0' : 'l'}
                  pb={index === 2 ? '0' : 'l'}
                  fontWeight='bold'
                  color='white'
                  lineHeight='150%'
                >
                  {item.title}
                </Center>
              </CustomLink>
            ))}

            <Center mt='36px'>
              <Img
                onClick={() => setIsOpen(false)}
                src='/moboile-menu-close.svg'
              />
            </Center>
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}
