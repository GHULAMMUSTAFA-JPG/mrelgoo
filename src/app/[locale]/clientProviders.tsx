'use client'

import theme from '@/theme/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { persistor, store } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function ClientProviders({ children }: { children: React.ReactNode }) {
  const stripePromise = loadStripe(
    'pk_test_51OqUKlBZdk7QabnfaXcUE86sf4Ml483o9mzr5NB4lkERDVia77nMW7zU0N2wtklK1ogbMnf8A1oxMFmIg0QYglBh00gVTMbfeF'
  )
  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </Elements>
  )
}

export default ClientProviders
