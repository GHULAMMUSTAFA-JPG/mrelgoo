'use client'

import PrivateLayout from '@/app/components/privateLayout/PrivateLayout'
import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'
import DataTable from './components/DataTable'
import { colors } from '@/theme/colors'
import MonthRangeSelect from '@/theme/select/MonthRangeSelect'
import OrderCard from './components/OrderCard'
import VisitorsChart from './components/VisitorsChart'
import { useGetStatesQuery } from '@/store/api/order/order.api'

export default function Dashboard() {
  const { isLoading, data } = useGetStatesQuery()

  return (
    <PrivateLayout title='Dashboard'>
      <HStack mt='24px' justifyContent='space-between' px='30px'>
        <Box
          fontSize='18px'
          fontWeight='semibold'
          lineHeight='150%'
          color={colors.black}
        >
          Stats
        </Box>
        <Box>
          <MonthRangeSelect />
        </Box>
      </HStack>
      <Grid px='30px' pt='24px' templateColumns='repeat(3, 1fr)' gap='24px'>
        <GridItem>
          <OrderCard
            orderNumber={data?.new}
            orderType='New order'
            growth='+7% Growth than last day'
            iconName='CartOutline'
          />
        </GridItem>
        <GridItem>
          <OrderCard
            orderNumber={data?.pending}
            orderType='Total pending'
            growth='+7% Growth than last day'
            iconName='CartPendingOutline'
          />
        </GridItem>
        <GridItem>
          <OrderCard
            orderNumber={data?.completed}
            orderType='Total completed'
            growth='+7% Growth than last day'
            iconName='CheckOutline'
          />
        </GridItem>
      </Grid>

      {/* <HStack mt='24px' justifyContent='space-between' px='30px'>
        <Box
          fontSize='18px'
          fontWeight='semibold'
          lineHeight='150%'
          color={colors.black}
        >
          Visitors
        </Box>
        <Box>
          <MonthRangeSelect isWeekRange />
        </Box>
      </HStack> */}

      {/* <Box px='30px'>
        <VisitorsChart data={[10, 15, 20, 25, 20, 15, 10, 30]} />
      </Box> */}

      <DataTable />
    </PrivateLayout>
  )
}
