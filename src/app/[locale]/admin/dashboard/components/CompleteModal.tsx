import { serverUrl } from '@/_data/serverUrl'
import ImageDrop from '@/app/[locale]/checkout/components/ImageDrop'
import ImageDropMultiple from '@/app/[locale]/checkout/components/ImageDropMultiple'
import { useSendZeptoMutation } from '@/store/api/email/email.api'
import { useUpdateOrderStatusMutation } from '@/store/api/order/order.api'
import { useUploadImagesMutation } from '@/store/api/upload/upload.api'
import { OrderStatus } from '@/types/common.types'
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CompleteModal({
  isOpen,
  onClose,
  user,
  onCloseComplete,
  onCloseConfirm,
  setIsOpen,
}) {
  const [error, setError] = useState(null)
  const [value, setValue] = useState(null)
  const [images, setImages] = useState([])

  const [uploadImages, { isLoading }] = useUploadImagesMutation()
  const [sendZepto, { isLoading: isZeptoLoading, data: dataZepto }] =
    useSendZeptoMutation()
  const [updateStatus, { isLoading: isLoadingStatusUpdate, data }] =
    useUpdateOrderStatusMutation()

  const toast = useToast()

  console.log(user)

  const handleUpload = async () => {
    console.log(images)
    if (images.length > 0) {
      const fomrData = new FormData()
      images.map((item, index) => {
        fomrData.append('img', item)
      })
      const { name, email } = user
      if (!name || !email) {
        return toast({
          position: 'top-right',
          title: 'Update failed.',
          description: "User's name or email not found",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        const { error: errorImageUploading, data } =
          await uploadImages(fomrData)

        if (errorImageUploading) {
          return toast({
            position: 'top-right',
            title: 'Images uploading failed.',
            description: JSON.stringify(errorImageUploading),
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
        console.log({
          _id: user._id,
          status: OrderStatus.COMPLETED,
          isMailChecked: true,
          paymentIntent: user.paymentIntent,
        })
        const { error: errorUpdateStatus, data: dataUpdateStatus } =
          await updateStatus({
            _id: user._id,
            status: OrderStatus.COMPLETED,
            isMailChecked: true,
            paymentIntent: user.paymentIntent,
          })

        if (errorUpdateStatus) {
          return toast({
            position: 'top-right',
            title: 'Order status updating failed.',
            description: JSON.stringify(dataUpdateStatus),
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }

        if (!error) {
          let uploadedImages: any = []
          data?.img?.map((img) => {
            const ImgPath = window.location.origin
              ? `${window.location.origin}/download?ImageId=${img.filename}`
              : `${serverUrl}/uploads/${img.filename}`
            console.log(ImgPath)
            uploadedImages = [...uploadedImages, ImgPath]
          })

          // Handle Zepto here
          // const { error: mailError, data: mailData } = await sendZepto({
          //   name: user?.name,
          //   email: user?.email,
          //   subject: 'Order completed.',
          //   template:
          //     '2d6f.6d84fecd3129a058.k1.58d86520-f7fc-11ee-addd-5254004d4100.18ecd101c72',
          //   merge_info: {
          //     Order_ID: user.uid,
          //     name,
          //     images: `<div>
          //                 <div style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 20px;">
          //                     ${data?.img?.map(
          //                       (
          //                         img,
          //                         index
          //                       ) => `<div style="border: 1px solid #D3D3D3; padding: 16px; margin-left: 64px; margin-right: 64px; display: flex; justify-content: space-between; align-items: center; @media (max-width: 768px) { margin: 0; }">
          //                                 <div style="flex-grow: 1;">
          //                                     <img src="https://api.baby.zone/uploads/${
          //                                       img.filename
          //                                     }" alt="Image ${
          //                                       index + 1
          //                                     }" style="max-width: 100%; height: auto; max-height: 200px; display: block; margin-bottom: 20px;">
          //                                 </div>
          //                                 <div>
          //                                     <button style="background-color: #037EE6; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px; margin-bottom: 10px;">
          //                                         <a href="${
          //                                           window.location.origin
          //                                         }/download?ImageId=${
          //                                           img.filename
          //                                         }" download style="color: inherit; text-decoration: none;">Download Image ${
          //                                           index + 1
          //                                         }</a>
          //                                     </button>
          //                                 </div>
          //                             </div>`
          //                     )}
          //                 </div>
          //             </div>`,
          //   },
          // })
            const { error: mailError, data: mailData } = await sendZepto({
            name: user?.name,
            email: user?.email,
            subject: 'Order completed.',
            template:
              '2d6f.6d84fecd3129a058.k1.58d86520-f7fc-11ee-addd-5254004d4100.18ecd101c72',
            merge_info: {
              Order_ID: user.uid,
              name,
              images: `<div style="text-align: center; margin-bottom: 20px;">
                          <button style="background-color: #000000; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                            <a href="${window.location.origin}/download?AllImages=true" download style="color: inherit; text-decoration: none;">Download All Images</a>
                          </button>
                        </div>
                        <table width="100%" cellspacing="0" cellpadding="0" border="0">
                          ${data?.img
                            .map((img, index) =>
                              index % 2 === 0
                                ? `<tr>
                                     <td width="50%" align="center" valign="top" style="padding: 10px;">
                                       <div style="border: 1px solid #D3D3D3; padding: 16px;">
                                         <img src="https://api.baby.zone/uploads/${img.filename}" alt="Image ${index + 1}" style="width: 100%; max-height: 200px; display: block; margin-bottom: 10px;">
                                         <button style="background-color: #037EE6; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                                           <a href="${window.location.origin}/download?ImageId=${img.filename}" download style="color: inherit; text-decoration: none;">Download Image ${index + 1}</a>
                                         </button>
                                       </div>
                                     </td>`
                                : `<td width="50%" align="center" valign="top" style="padding: 10px;">
                                       <div style="border: 1px solid #D3D3D3; padding: 16px;">
                                         <img src="https://api.baby.zone/uploads/${img.filename}" alt="Image ${index + 1}" style="width: 100%; max-height: 200px; display: block; margin-bottom: 10px;">
                                         <button style="background-color: #037EE6; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                                           <a href="${window.location.origin}/download?ImageId=${img.filename}" download style="color: inherit; text-decoration: none;">Download Image ${index + 1}</a>
                                         </button>
                                       </div>
                                     </td>
                                   </tr>`
                            )
                            .join('')}
                        </table>
                        <div style="text-align: center; margin-top: 20px;">
                          <button style="background-color: #000000; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                            <a href="${window.location.origin}/download?AllImages=true" download style="color: inherit; text-decoration: none;">Download All Images</a>
                          </button>
                        </div>`,
            },
          });
          console.log(mailError)
          console.log(mailData)
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
            setImages([])
            onCloseComplete()
            onCloseConfirm()
            setIsOpen(false)
            toast({
              position: 'top-right',
              title: 'The email was sent successfully.',
              description: JSON.stringify(mailData),
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
          }
        } else {
          toast({
            position: 'top-right',
            title: 'Image upload was not successfull.',
            description: JSON.stringify(error),
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        }
      }
    }
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody py='24px' pb='28px'>
          <Text textAlign='center' mb='m'>
            Upload Result Image
          </Text>
          <Box mt='24px'>
            <ImageDropMultiple
              name='image'
              title=''
              setValue={(key, value) => {
                console.log(value)
                setError(null)
                console.log(value)
                setImages(value)
              }}
              setError={setError}
              value={images}
              error={error}
            />
            {/* <Box color={colors.red} fontSize='14px' lineHeight='150%'>
                  {errors.image?.message}
                </Box> */}
          </Box>
          <HStack mt='24px' justifyContent='flex-end'>
            <Button
              colorScheme='blue'
              w='100%'
              onClick={handleUpload}
              isDisabled={isLoading || isZeptoLoading || isLoadingStatusUpdate}
            >
              {isLoading
                ? 'Images uploading'
                : isZeptoLoading
                ? 'Mail sending'
                : isLoadingStatusUpdate
                ? 'Status updating'
                : 'Upload'}
            </Button>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
