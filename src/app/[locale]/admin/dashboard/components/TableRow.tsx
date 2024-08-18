import { colors } from '@/theme/colors'
import {
  Box,
  Center,
  Flex,
  Img,
  Modal,
  ModalContent,
  ModalOverlay,
  Td,
  Text,
  Tooltip,
  Tr,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { Select } from './DataTable'
import { Icon } from '@/theme/icons'
import StatusSelect from '@/theme/select/StatusSelect'
import EmailPopup from '../../email-template/components/EmailPopup'
import ImageViewer from './ImageViewer'
import { useState } from 'react'
import { serverUrl } from '@/_data/serverUrl'
import { convertDate } from '@/utils/convertDate'
import { downloadImage } from '@/utils/downloadImage'

export function TableRow({ data }) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState({ url: '', name: '' })
  const {
    isOpen: isOpenImageViewer,
    onClose: onCloseImageViewer,
    onOpen: onOpenImageViewer,
  } = useDisclosure()

  const handleDownloadImage = () => {
    if (data.momPhoto) {
      downloadImage(serverUrl + data.momPhoto)
    }
    if (data.dadPhoto) {
      downloadImage(serverUrl + data.dadPhoto)
    }
    if (data.yourPhoto) {
      downloadImage(serverUrl + data.yourPhoto)
    }
  }
  return (
    <Tr
      borderColor={isOpen ? colors.primary : 'transparent'}
      // borderRadius='5px'
      // bg='red'
      // borde2px solid ${isOpen?colors.primary:'trasparent'}`}
    >
      <Td
        p='8px'
        borderLeft={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Box h='80px'>
          <Tooltip label={convertDate(data.createdAt)} placement='bottom-start'>
            <Text size='medium' fontWeight='600' color={colors.black}>
              {data.uid}
            </Text>
          </Tooltip>
        </Box>
      </Td>
      <Td
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Box h='80px'>
          <Text size='medium' fontWeight='600' color={colors.black}>
            {data.name}
          </Text>
        </Box>
      </Td>
      <Td
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Box h='80px'>
          <Text size='medium' fontWeight='600' color={colors.black}>
            {data.email}
          </Text>
        </Box>
      </Td>

      <Td
        cursor='pointer'
        onClick={() => {
          setSelectedImage({
            url: data.orderType === 'SINGLE' ? data.yourPhoto : data.dadPhoto,
            name: 'Dad Photo',
          })
          onOpenImageViewer()
        }}
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Center
          w='80px'
          h='80px'
          overflow='hidden'
          rounded='6px'
          bgImage={`url(${serverUrl}${
            data.orderType === 'SINGLE' ? data.yourPhoto : data.dadPhoto
          })`}
          bgPos='center'
          bgSize='cover'
          bgRepeat='no-repeat'
          shadow='base'
        />
        {/* <Box>{data.orderType === 'SINGLE' ? 'true' : 'false'}</Box> */}
      </Td>
      <Td
        cursor='pointer'
        onClick={() => {
          setSelectedImage({ url: data.momPhoto, name: 'Mom Photo' })
          onOpenImageViewer()
        }}
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Center
          w='80px'
          h='80px'
          overflow='hidden'
          rounded='6px'
          bgImage={`url(${serverUrl}${data.momPhoto})`}
          bgPos='center'
          bgSize='cover'
          bgRepeat='no-repeat'
          shadow='base'
        />
      </Td>
      <Td
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Flex>
          <VStack>
            <StatusSelect user={data} />
            <Select orderType={data.orderType} />
          </VStack>
        </Flex>
      </Td>
      <Td
        p='8px'
        borderTop={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderRight={`2px solid ${isOpen ? colors.primary : 'white'}`}
        borderBottom={`2px solid ${isOpen ? colors.primary : 'white'}`}
      >
        <Box h='80px'>
          <Flex gap='0.625rem'>
            <Box cursor='pointer' onClick={onOpen}>
              <Icon shouldSize={false} icon='EmailOutline' />
            </Box>
            <Box cursor='pointer' onClick={handleDownloadImage}>
              <Icon shouldSize={false} icon='DownloadOutline' />
            </Box>
          </Flex>
        </Box>
      </Td>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='538px'>
          <EmailPopup email={data?.email} onClose={onClose} />
        </ModalContent>
      </Modal>
      {/* <EmailModal isOpen={isOpen} onClose={onClose} /> */}
      <ImageViewer
        isOpen={isOpenImageViewer}
        onClose={onCloseImageViewer}
        onOpen={onOpenImageViewer}
        selectedImage={selectedImage}
      />
    </Tr>
  )
}
