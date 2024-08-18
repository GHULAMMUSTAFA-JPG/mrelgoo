'use client'

import PrivateLayout from '@/app/components/privateLayout/PrivateLayout'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import DataTable from '../dashboard/components/DataTable'

export default function Orders() {
  const [title, setTitle] = useState('All Orders')
  return (
    <PrivateLayout title={title} parentTitle='Orders'>
      <DataTable isOrderable setTitle={setTitle} />
    </PrivateLayout>
  )
}
