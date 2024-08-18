'use client'

import { colors } from '@/theme/colors'
import {
  Box,
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function ConfirmAlert({
  onClose,
  isOpen,
  onConfirm,
  selectedValue,
  clickedValue,
  setIsMailChecked,
}) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsMailChecked(true)
  }, [])

  useEffect(() => {
    setIsLoading(!isOpen)
  }, [isOpen])
  return (
    <Modal
      isCentered
      onClose={() => {
        setIsLoading(false)
        onClose()
      }}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box pr='24px'>
            Are you sure wanna change{' '}
            <Box as='span' fontWeight='700'>
              {selectedValue}
            </Box>{' '}
            to{' '}
            <Box as='span' fontWeight='700'>
              {clickedValue}
            </Box>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Checkbox
            onChange={(e) => setIsMailChecked(e.target.checked)}
            defaultChecked
          >
            mail action
          </Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            isDisabled={isLoading}
            variant='ghost'
            onClick={() => {
              setIsLoading(true)
              onConfirm()
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
