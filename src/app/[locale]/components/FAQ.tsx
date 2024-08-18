import { websiteBrandName } from '@/_data/common'
import { faq } from '@/_data/faq'
import { colors } from '@/theme/colors'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function FAQ() {
  return (
    <Center px={{ base: 'm', md: '0' }}>
      <Box w='697px' maxW='697px'>
        <Text
          fontSize={{ base: '24px', md: '42px' }}
          fontWeight='bold'
          lineHeight='150%'
          textColor={colors.black}
          textAlign='center'
        >
          Frequently Asked Questions
        </Text>
        <Box
          mt={{ base: '24px', md: '60px' }}
          mb={{ base: '34px', md: '74px' }}
        >
          <Accordion
            // defaultIndex={[0]}
            allowMultiple
          >
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                borderWidth='1px'
                borderColor={colors.line}
                rounded='12px'
                px='0'
                py='0'
                m='0'
                mb='m'
                overflow='hidden'
                // _hover={{ bg: '#FAFAFA' }}
              >
                {({ isExpanded }) => (
                  <>
                    <Box
                      px='4px'
                      py='xs'
                      bg={isExpanded ? '#FAFAFA' : 'transparent'}
                      _hover={{ bg: '#FAFAFA' }}
                    >
                      <AccordionButton _hover={{ bg: '#FAFAFA' }}>
                        <Box
                          as='span'
                          flex='1'
                          textAlign='left'
                          fontSize='18px'
                          fontWeight='semibold'
                          lineHeight='150%'
                          color={colors.black}
                        >
                          {item.title}
                        </Box>
                        <Box>
                          <Image
                            src={
                              isExpanded ? '/faq-minus.svg' : '/faq-plus.svg'
                            }
                            height={30}
                            width={30}
                            alt={websiteBrandName}
                          />
                        </Box>
                      </AccordionButton>
                    </Box>
                    <AccordionPanel
                      pb={4}
                      pt='9px'
                      bg={isExpanded ? '#FAFAFA' : 'transparent'}
                    >
                      <Box
                        fontSize='14px'
                        fontWeight='medium'
                        lineHeight='150%'
                        color={colors.black}
                      >
                        {item.description}
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Center>
  )
}
