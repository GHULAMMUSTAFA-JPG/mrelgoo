'use client'

import { filter } from '@/_data/filter'
import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import SortSelect from '@/theme/select/SortSelect'
import { Filter, OrderStatus } from '@/types/common.types'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Center,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TableRow } from './TableRow'
import Pagination from './Pagination'
import { useGetAllOrdersQuery } from '@/store/api/order/order.api'
import { useRouter } from 'next/navigation'

export default function DataTable({ setTitle, isOrderable = false }) {
  const [activeFilter, setActiveFilter] = useState(Filter.ALL_ORDERS)
  const [currentPage, setCurrentPage] = useState(1)
  const [tableData, setTableData] = useState([])
  const [searchTxt, setSearchTxt] = useState('')

  const router = useRouter()

  const { isLoading, data } = useGetAllOrdersQuery(
    { status: activeFilter, page: currentPage, search: searchTxt },
    { refetchOnMountOrArgChange: true }
  )

  useEffect(() => {
    const mData = data
    if (data?.results.length > 0) {
      const list = data?.results
      if (list) {
        const sortedData = [...list].sort((a, b) => {
          const dateA = new Date(a.createdAt)
          const dateB = new Date(b.createdAt)
          return dateB - dateA
        })
        setTableData(sortedData)
        console.log(sortedData)
      }
    } else {
      setTableData([])
    }
  }, [data])

  console.log(data)

  const UserData = [
    {
      id: '#001',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#002',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#003',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#004',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#005',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#006',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
    {
      id: '#007',
      name: 'Eleanor Pena',
      email: 'muraddc0@gmail.com',
      dadPhoto: '/sample.png',
      momPhoto: '/sample-2.png',
    },
  ]

  return (
    <Box m='24px' p='20px' bg='white' rounded='16px'>
      <HStack justifyContent='space-between'>
        {isOrderable ? (
          <HStack
            p='5px'
            borderWidth='1px'
            borderColor={colors.line}
            borderRadius='8px'
          >
            <HStack gap='0'>
              {filter.map((item, index) => (
                <Box
                  cursor='pointer'
                  onClick={() => {
                    setActiveFilter(item.key)
                    setTitle(item.label)
                  }}
                  key={index}
                  whiteSpace='nowrap'
                  fontSize='14px'
                  fontWeight='semibold'
                  lineHeight='150%'
                  color={item.key === activeFilter ? 'white' : colors.black}
                  py='xs'
                  px='m'
                  bg={
                    item.key === activeFilter ? colors.primary : 'transparent'
                  }
                  borderRadius='8px'
                >
                  {item.label}
                </Box>
              ))}
            </HStack>
          </HStack>
        ) : (
          <Box
            fontSize='18px'
            fontWeight='semibold'
            lineHeight='150%'
            color={colors.black}
          >
            New Orders
          </Box>
        )}
        <HStack gap='m'>
          <SortSelect />

          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Icon icon='Search' />
            </InputLeftElement>
            <Input
              onChange={(e) => {
                setSearchTxt(e.target.value)
              }}
              type='text'
              fontSize='0.875rem'
              placeholder='Search'
            />
          </InputGroup>
          <Box
            fontSize='14px'
            fontWeight='semibold'
            lineHeight='150%'
            color='white'
            py='10px'
            px='20px'
            bg={colors.primary}
            borderRadius='8px'
            whiteSpace='nowrap'
            cursor='pointer'
            onClick={() => router.push('/checkout')}
          >
            New Order
          </Box>
        </HStack>
      </HStack>

      <Box mt='m'>
        <TableContainer>
          <Table>
            <Thead bg={hexToRGBA(colors.primary, 5)}>
              <Tr>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    ID
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Name
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Email
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Dad Image
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Mom Image
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Status
                  </Text>
                </Td>
                <Td px='8px'>
                  <Text
                    size='small'
                    fontWeight='600'
                    color={hexToRGBA(colors.black, 50)}
                  >
                    Action
                  </Text>
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              {(tableData || []).map((item, index) => (
                <TableRow data={item} key={index} />
              ))}
              {isLoading && <Box>Loading...</Box>}
            </Tbody>
          </Table>
          {!tableData.length && !isLoading && (
            <Center>
              <Text py='24px'>
                There’s no orders in "{activeFilter || 'ALL'}" yet.
              </Text>
            </Center>
          )}
          <Box>
            <Pagination
              setCurrentPage={setCurrentPage}
              length={data?.totalPages}
            />
          </Box>
        </TableContainer>
      </Box>
    </Box>
  )
}

export function Select({ orderType }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Dual')

  const handleSelected = (value) => {
    setSelected(value)
    setIsOpen(false)
  }
  return (
    <Box cursor='pointer'>
      <HStack
        // onClick={() => setIsOpen(!isOpen)}
        minW='140px'
        justifyContent='space-between'
        // borderWidth='1px'
        // borderColor={selected === 'Dual' ? colors.primary : colors.green}
        px='s'
        py='xs'
        rounded='xs'
        roundedBottom={isOpen ? '0' : 'xs'}
        // borderBottom={isOpen ? '0' : '1px'}
        borderBottomColor={selected === 'Dual' ? colors.primary : colors.green}
        bg={hexToRGBA(
          orderType === 'DOUBLE' ? colors.primary : colors.green,
          10
        )}
      >
        <Text
          fontWeight='600'
          color={orderType === 'DOUBLE' ? colors.primary : colors.green}
          fontSize='13px'
        >
          {orderType === 'DOUBLE' ? 'Dual' : 'Single'}
        </Text>
        <Box transform={`rotate(${isOpen ? '180' : '0'}deg)`}>
          <Icon icon='ChevronDown' />
        </Box>
      </HStack>
      {/* {isOpen && (
        <VStack
          w='100%'
          gap='0'
          borderWidth='1px'
          borderColor={colors.primary}
          px='xxs'
          roundedBottom='m'
        >
          <Box p='10px' onClick={() => handleSelected('Dual')}>
            <Text fontWeight='600' color={colors.primary} fontSize='13px'>
              Dual
            </Text>
          </Box>
          <Divider borderColor={hexToRGBA(colors.black, 50)} />
          <Box p='10px' onClick={() => handleSelected('Single')}>
            <Text fontWeight='600' color={colors.primary} fontSize='13px'>
              Single
            </Text>
          </Box>
        </VStack>
      )} */}
    </Box>
  )
}
