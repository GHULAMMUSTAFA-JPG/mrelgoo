import { serverUrl } from '@/_data/serverUrl'
import { colors } from '@/theme/colors'
import { downloadImage } from '@/utils/downloadImage'
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

export default function ImageViewer({
  isOpen,
  onOpen,
  onClose,
  selectedImage,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <ModalBody>
        <ModalContent maxW='640px' maxH='100vh' overflow='hidden'>
          <Box>
            <Center mt='40px'>
              <Img maxH='400px' src={`${serverUrl}${selectedImage.url}`} />
            </Center>
            <Center>
              <HStack py='m' bg='white'>
                <Button
                  onClick={() => downloadImage(serverUrl + selectedImage.url)}
                  colorScheme='blue'
                >
                  Download
                </Button>
                <Button
                  colorScheme='gray'
                  color={colors.black}
                  variant='outline'
                  onClick={onClose}
                >
                  Close
                </Button>
              </HStack>
            </Center>
          </Box>
        </ModalContent>
      </ModalBody>
    </Modal>
  )
}
