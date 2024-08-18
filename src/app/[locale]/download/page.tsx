'use client'

import { serverUrl } from '@/_data/serverUrl'
import { downloadImage } from '@/utils/downloadImage'
import { Button, Center } from '@chakra-ui/react'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  const params = useSearchParams()
  const ImageId = params?.get('ImageId')
  console.log(params?.get('ImageId'))
  useEffect(() => {
    console.log(params)
    downloadImage(`${serverUrl}/uploads/${ImageId}`)
  }, [])

  const handleDownload = () => {
    downloadImage(`${serverUrl}/uploads/${ImageId}`)
  }
  return (
    <Center h='100vh' w='100vw'>
      <Button onClick={handleDownload}>Click Here To Download</Button>
    </Center>
  )
}
