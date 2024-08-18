import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

export default function ProtectionBanner() {
  return (
    <Box py={{ base: '50px', xl: '90px' }} bg='#0A2A41'>
      <Container maxW='container.xl' px={{ base: '20px', md: 'm' }}>
        <Grid templateColumns='repeat(3, 1fr)' gap={{ base: 'xs', xl: 'm' }}>
          <GridItem colSpan={{ base: 3, xl: 1 }}>
            <VStack>
              <Image src='/protection-checkmark.svg' />
              <Text
                maxW='420px'
                pos='relative'
                top='-16px'
                as='p'
                // mt='20px'
                textAlign='center'
                fontSize='20px'
                lineHeight='150%'
                fontWeight='medium'
                textColor='white'
              >
                No Registration required. Start Immediately.
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, xl: 1 }}>
            <VStack>
              <Image src='/protection-checkmark.svg' />
              <Text
                maxW='420px'
                pos='relative'
                top='-16px'
                as='p'
                // mt='20px'
                textAlign='center'
                fontSize='20px'
                lineHeight='150%'
                fontWeight='medium'
                textColor='white'
              >
                100% Data privacy protection.
              </Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, xl: 1 }}>
            <VStack>
              <Image src='/protection-checkmark.svg' />
              <Text
                maxW='420px'
                pos='relative'
                top='-16px'
                as='p'
                // mt='20px'
                textAlign='center'
                fontSize='20px'
                lineHeight='150%'
                fontWeight='medium'
                textColor='white'
              >
                Same day delivery (24h). Each photo we receive is reviewed
                manually to ensure the best quality possible.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
