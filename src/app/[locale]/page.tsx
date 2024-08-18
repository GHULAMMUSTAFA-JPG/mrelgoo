'use client'

import { colors } from '@/theme/colors'
import { Icon } from '@/theme/icons'
import { Box, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import PublicLayout from '../components/publicLayout/PublicLayout'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ProtectionBanner from './components/ProtectionBanner'
import TestimonialCarousel from './components/TestimonialCarousel'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Head from 'next/head'

export default function Home() {
  const t = useTranslations('Landing')
  return (
    <>
      <PublicLayout isHome>
        <Hero />
        <HowItWorks />
        <ProtectionBanner />
        <TestimonialCarousel />
        <FAQ />
        <Pricing />
        {/* Todo */}
      </PublicLayout>
    </>
  )
}
