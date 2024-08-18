import { websiteBrandName } from '@/_data/common'
import { colors } from '@/theme/colors'
import { hexToRGBA } from '@/utils/hexToRGBAConverter'
import {
  Box,
  Center,
  Container,
  HStack,
  Img,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import 'swiper/react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Icon } from '@/theme/icons'
import { useGetAllTestimonialsQuery } from '@/store/api/testimonial/testimonial.api'

export default function TestimonialCarousel() {
  const swiperRef = useRef(null)

  const [isAutoScroll, setIsAutoScroll] = useState(true)

  const { data, error } = useGetAllTestimonialsQuery()

  return (
    <Box py={{ base: '50px', md: '90px' }} id='Testimonials'>
      <Container maxW='100%'>
        <Text
          as='h1'
          textAlign='center'
          fontSize={{ base: '24px', md: '42px' }}
          fontWeight='bold'
          textColor={colors.black}
          lineHeight='150%'
        >
          Trusted by +4500 users
        </Text>

        <Box mt={{ base: '23px', md: '60px' }}>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            onInit={(swiper) => {
              swiper.autoplay.start()
            }}
            // centeredSlides={true}
            loop={true}
            breakpoints={{
              // When window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // When window width is >= 480px
              480: {
                slidesPerView: 2,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // When window width is >= 1024px
              1200: {
                slidesPerView: 4,
              },
            }}
            autoplay={
              isAutoScroll
                ? {
                    delay: 2500,
                    disableOnInteraction: false,
                  }
                : false
            }
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
          >
            {data?.map((item, index) => (
              <SwiperSlide>
                <TestimonialCard
                  setIsAutoScroll={setIsAutoScroll}
                  swiperRef={swiperRef}
                  data={item}
                />
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
              <TestimonialCard
                setIsAutoScroll={setIsAutoScroll}
                swiperRef={swiperRef}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                setIsAutoScroll={setIsAutoScroll}
                swiperRef={swiperRef}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                setIsAutoScroll={setIsAutoScroll}
                swiperRef={swiperRef}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                setIsAutoScroll={setIsAutoScroll}
                swiperRef={swiperRef}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                setIsAutoScroll={setIsAutoScroll}
                swiperRef={swiperRef}
              />
            </SwiperSlide> */}
          </Swiper>
        </Box>
      </Container>

      <Center mt='20px'>
        <HStack gap='24px'>
          <Center
            h='49px'
            w='49px'
            borderColor={colors.primary}
            _hover={{ bg: hexToRGBA(colors.primary, 10) }}
            cursor='pointer'
            borderWidth='1px'
            borderRadius='26px'
            className='custom-prev'
          >
            <Icon icon='LeftArrow' color='primary' />
          </Center>
          <Center
            h='49px'
            w='49px'
            borderColor={colors.primary}
            _hover={{ bg: hexToRGBA(colors.primary, 10) }}
            cursor='pointer'
            borderWidth='1px'
            borderRadius='26px'
            className='custom-next'
          >
            <Icon icon='RightArrow' color='primary' />
          </Center>
        </HStack>
      </Center>
    </Box>
  )
}

export function TestimonialCard({
  setIsAutoScroll,
  swiperRef,
  data,
}: {
  setIsAutoScroll: any
  swiperRef: any
  data: any
}) {
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
  }
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      bg='#FAFAFA'
      borderRadius='16px'
      p='16px'
    >
      <HStack justifyContent='space-between'>
        <Box>
          <Image
            src='/quote.svg'
            height={31}
            width={31}
            alt={websiteBrandName}
          />
        </Box>
        <HStack>
          <VStack gap='2px' alignItems='flex-end'>
            <Text
              as='h4'
              fontSize='14px'
              fontWeight='600'
              lineHeight='150%'
              textColor={colors.black}
            >
              {data?.name}
            </Text>
            <Text
              as='h6'
              color={hexToRGBA(colors.black, 50)}
              fontSize='12px'
              fontWeight='bold'
              lineHeight='150%'
              textTransform='uppercase'
            >
              {data?.position}
            </Text>
          </VStack>
          <Box
            h='32px'
            w='32px'
            borderRadius='16px'
            bg='grey'
            bgImage={`url(${data?.image})`}
            bgPos='center'
            bgSize='cover'
            bgRepeat='no-repeat'
          ></Box>
        </HStack>
      </HStack>
      <Text
        as='p'
        fontSize='14px'
        fontWeight='medium'
        lineHeight='150%'
        textColor={colors.black}
        mt='20px'
      >
        {data?.message}
      </Text>
    </Box>
  )
}
