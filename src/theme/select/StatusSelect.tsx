'use client'

import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  useDisclosure,
  useOutsideClick,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Icon } from '@/theme/icons'
import { OrderStatus } from '@/types/common.types'
import { colors } from '../colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import { useUpdateOrderStatusMutation } from '@/store/api/order/order.api'
import CompleteModal from '@/app/[locale]/admin/dashboard/components/CompleteModal'
import ConfirmAlert from '@/app/components/ConfirmAlert'
import { useSendZeptoMutation } from '@/store/api/email/email.api'

export default function StatusSelect({ user }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(user.status)
  const [color, setColor] = useState(colors.orange)
  const [iconColor, setIconColor] = useState('primary')
  const [userId, setUserId] = useState(null)
  const [clickedValue, setClickedValue] = useState('')
  const [isMailChecked, setIsMailChecked] = useState(true)
  const [showReviewMenu, setShowReviewMenu] = useState(false)
  const [selectedReviewMenu, setSelectedReviewMenu] = useState(null)

  const ref = React.useRef()

  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  })

  const {
    isOpen: isOpenComplete,
    onClose: onCloseComplete,
    onOpen: onOpenComplete,
  } = useDisclosure()

  const {
    isOpen: isOpenConfirm,
    onClose: onCloseConfirm,
    onOpen: onOpenConfirm,
  } = useDisclosure()

  const toast = useToast()

  useEffect(() => {
    setUserId(user?._id)
    setSelected(user.status)
  }, [user])

  const [updateStatus, { isLoading, data }] = useUpdateOrderStatusMutation()
  const [sendZepto, { isLoading: isZeptoLoading, data: dataZepto }] =
    useSendZeptoMutation()

  const handleSelected = async (value) => {
    if (selected !== OrderStatus.NEW && clickedValue === OrderStatus.NEW) {
      setIsOpen(false)
      return
    }

    if (value !== selected) {
      onOpenConfirm()
      setClickedValue(value)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    switch (selected) {
      case OrderStatus.NEW:
        setColor(colors.primary)
        setIconColor('primary')
        break

      case OrderStatus.PENDING:
        setColor(colors.orange)
        setIconColor('orange')
        break

      case OrderStatus.REVIEW:
        setColor(colors.red)
        setIconColor('red')
        break
      case OrderStatus.REVIEW_DAD:
        setColor(colors.red)
        setIconColor('red')
        break
      case OrderStatus.REVIEW_MOM:
        setColor(colors.red)
        setIconColor('red')
        break
      case OrderStatus.REVIEW_BOTH:
        setColor(colors.red)
        setIconColor('red')
        break
      case OrderStatus.REVIEW_SINGLE:
        setColor(colors.red)
        setIconColor('red')
        break

      case OrderStatus.CANCELED:
        setColor(hexToRGBA(colors.black, 50))
        setIconColor('gray')
        break

      case OrderStatus.COMPLETED:
        setColor(colors.green)
        setIconColor('green')
        break

      default:
        break
    }
  }, [selected])

  const handleSendMail = async (config) => {
    const { subject, template, merge_info } = config
    const { error: mailError, data: mailData } = await sendZepto({
      name: user.name,
      email: user.email,
      subject,
      template,
      merge_info,
    })
    if (mailError) {
      toast({
        position: 'top-right',
        title: 'Update failed.',
        description: JSON.stringify(mailError),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        position: 'top-right',
        title: 'The email was sent successfully.',
        description: JSON.stringify(mailData),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const handleConfirm = async () => {
    if (clickedValue === OrderStatus.COMPLETED && isMailChecked) {
      onOpenComplete()
      // setIsOpen(false)
      return
    }
    console.log(user)
    try {
      const { error, data } = await updateStatus({
        _id: userId,
        status: clickedValue,
        isMailChecked,
        paymentIntent: user.paymentIntent,
      })
      console.log(user?.paymentIntent)
      if (isMailChecked) {
        switch (clickedValue) {
          case OrderStatus.NEW:
            break
          case OrderStatus.PENDING:
            handleSendMail({
              subject: 'Order approved.',
              template:
                '2d6f.6d84fecd3129a058.k1.04e979b0-eaee-11ee-8c1d-5254004d4100.18e777fd4cb',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break
          case OrderStatus.REVIEW_DAD:
            // Todo 3.A DAD
            handleSendMail({
              subject: 'Order review.',
              template:
                '2d6f.6d84fecd3129a058.k1.d6f9bea0-ed42-11ee-a834-525400fa05f6.18e86c7278a',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break
          case OrderStatus.REVIEW_MOM:
            // Todo 3.B MOM
            handleSendMail({
              subject: 'Order review.',
              template:
                '2d6f.6d84fecd3129a058.k1.ed8c6690-ed42-11ee-a834-525400fa05f6.18e86c7bb79',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break
          case OrderStatus.REVIEW_BOTH:
            // Todo 3 BOTH
            handleSendMail({
              subject: 'Order review.',
              template:
                '2d6f.6d84fecd3129a058.k1.94eabbe0-ed42-11ee-a834-525400fa05f6.18e86c5769e',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break
          case OrderStatus.REVIEW_SINGLE:
            // Todo 3 SINGLE
            handleSendMail({
              subject: 'Order review.',
              template:
                '2d6f.6d84fecd3129a058.k1.2460a7d0-ed43-11ee-a834-525400fa05f6.18e86c922cd',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break

          // case OrderStatus.COMPLETED:
          //   // Todo
          //   handleSendMail({
          //     subject: 'Order approved.',
          //     template:
          //       '2d6f.6d84fecd3129a058.k1.04e979b0-eaee-11ee-8c1d-5254004d4100.18e777fd4cb',
          //     merge_info: {
          //       Order_ID: user.uid,
          //       name: user.name,
          //     },
          //   })
          //   break

          case OrderStatus.CANCELED:
            // Todo Email 5
            handleSendMail({
              subject: 'Order canceled.',
              template:
                '2d6f.6d84fecd3129a058.k1.d600f730-eb07-11ee-ac1d-525400d6cd4f.18e78290623',
              merge_info: {
                Order_ID: user.uid,
                name: user.name,
              },
            })
            break

          default:
            break
        }
      }

      if (error) {
        toast({
          position: 'top-right',
          title: 'Update failed.',
          description: error?.data?.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        setSelected(clickedValue)
        setIsOpen(false)
        toast({
          position: 'top-right',
          title: 'update successful.',
          description: error?.data?.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        position: 'top-right',
        title: 'Update failed.',
        description: JSON.stringify(error),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }

    setIsOpen(false)
    onCloseConfirm()
    setIsMailChecked(true)
  }
  return (
    <Box cursor='pointer' ref={ref}>
      <HStack
        onClick={() =>
          selected !== OrderStatus.CANCELED &&
          selected !== OrderStatus.COMPLETED &&
          setIsOpen(!isOpen)
        }
        minW='140px'
        justifyContent='space-between'
        borderWidth='1px'
        borderColor={color}
        px='s'
        cursor={
          selected !== OrderStatus.CANCELED ||
          selected !== OrderStatus.COMPLETED
            ? 'pointer'
            : 'not-allowed'
        }
        py='xs'
        rounded='xs'
        roundedBottom={isOpen ? '0' : 'xs'}
        borderBottom={isOpen ? '0' : '1px'}
        borderBottomColor={color}
        bg={isOpen ? hexToRGBA(color, 10) : 'transparent'}
      >
        <Text fontWeight='600' color={color} fontSize='13px'>
          {selected}
        </Text>
        <Box transform={`rotate(${isOpen ? '180' : '0'}deg)`}>
          <Icon icon='ChevronDown' color={iconColor} />
        </Box>
      </HStack>
      {isOpen && (
        <VStack
          w='100%'
          gap='0'
          borderWidth='1px'
          borderColor={colors.primary}
          px='xxs'
          roundedBottom='m'
        >
          <Box
            display={selected !== OrderStatus.NEW ? 'none' : 'block'}
            p='10px'
            onClick={() => handleSelected(OrderStatus.NEW)}
            w='100%'
            _hover={{ bg: hexToRGBA(colors.primary, 5) }}
          >
            <Text
              fontWeight='600'
              color={colors.primary}
              fontSize='13px'
              w='100%'
              textAlign='center'
            >
              {OrderStatus.NEW}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.primary, 50)} />
          <Box
            _hover={{ bg: hexToRGBA(colors.primary, 5) }}
            p='10px'
            onClick={() => handleSelected(OrderStatus.PENDING)}
            w='100%'
          >
            <Text
              fontWeight='600'
              color={colors.primary}
              fontSize='13px'
              w='100%'
              textAlign='center'
            >
              {OrderStatus.PENDING}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.primary, 50)} />
          <Box
            onMouseEnter={() => setShowReviewMenu(true)}
            onMouseLeave={() => setShowReviewMenu(false)}
            p='10px'
            // onClick={() => handleSelected(OrderStatus.REVIEW)}
            w='100%'
            _hover={{ bg: hexToRGBA(colors.primary, 5) }}
            pos='relative'
          >
            <Text
              fontWeight='600'
              color={colors.primary}
              fontSize='13px'
              w='100%'
              textAlign='center'
            >
              {OrderStatus.REVIEW}
            </Text>

            {showReviewMenu && (
              <Box
                bg='white'
                pos='absolute'
                left='-170px'
                zIndex={5}
                top='-20px'
                rounded='6px'
              >
                <Box
                  rounded='6px'
                  p='8px'
                  w='180px'
                  bg={hexToRGBA(colors.red, 10)}
                  borderColor={colors.red}
                  borderWidth='1px'
                >
                  {' '}
                  <Text
                    fontWeight='600'
                    color={colors.red}
                    fontSize='13px'
                    w='100%'
                    textAlign='center'
                    pt='6px'
                    pb='6px'
                    onClick={() => {
                      setSelectedReviewMenu('Both')
                      handleSelected(OrderStatus.REVIEW_BOTH)
                    }}
                  >
                    Both
                  </Text>
                  <Divider borderColor={hexToRGBA(colors.primary, 50)} />
                  <Text
                    fontWeight='600'
                    color={colors.red}
                    fontSize='13px'
                    w='100%'
                    textAlign='center'
                    py='6px'
                    onClick={() => {
                      setSelectedReviewMenu('Dad')
                      handleSelected(OrderStatus.REVIEW_DAD)
                    }}
                  >
                    Dad
                  </Text>
                  <Divider borderColor={hexToRGBA(colors.primary, 50)} />
                  <Text
                    fontWeight='600'
                    color={colors.red}
                    fontSize='13px'
                    w='100%'
                    textAlign='center'
                    py='6px'
                    onClick={() => {
                      setSelectedReviewMenu('Mom')
                      handleSelected(OrderStatus.REVIEW_MOM)
                    }}
                  >
                    Mom
                  </Text>
                  <Divider borderColor={hexToRGBA(colors.primary, 50)} />
                  <Text
                    fontWeight='600'
                    color={colors.red}
                    fontSize='13px'
                    w='100%'
                    textAlign='center'
                    py='6px'
                    onClick={() => {
                      setSelectedReviewMenu('Single')
                      handleSelected(OrderStatus.REVIEW_SINGLE)
                    }}
                  >
                    Single
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
          <Divider borderColor={hexToRGBA(colors.primary, 50)} />
          <Box
            p='10px'
            onClick={() => handleSelected(OrderStatus.CANCELED)}
            w='100%'
            _hover={{ bg: hexToRGBA(colors.primary, 5) }}
          >
            <Text
              fontWeight='600'
              color={colors.primary}
              fontSize='13px'
              w='100%'
              textAlign='center'
            >
              {OrderStatus.CANCELED}
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.primary, 50)} />
          <Box
            p='10px'
            onClick={() => handleSelected(OrderStatus.COMPLETED)}
            w='100%'
            _hover={{ bg: hexToRGBA(colors.primary, 5) }}
          >
            <Text
              fontWeight='600'
              color={colors.primary}
              fontSize='13px'
              w='100%'
              textAlign='center'
            >
              {OrderStatus.COMPLETED}
            </Text>
          </Box>
        </VStack>
      )}
      <CompleteModal
        isOpen={isOpenComplete}
        onClose={onCloseComplete}
        user={user}
        onCloseConfirm={onCloseConfirm}
        onCloseComplete={onCloseComplete}
        setIsOpen={setIsOpen}
      />
      <ConfirmAlert
        isOpen={isOpenConfirm}
        onClose={onCloseConfirm}
        onConfirm={handleConfirm}
        selectedValue={selected}
        clickedValue={clickedValue}
        setIsMailChecked={setIsMailChecked}
      />
    </Box>
  )
}
