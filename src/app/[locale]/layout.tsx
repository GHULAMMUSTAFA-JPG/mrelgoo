import { Open_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }]
}

import ClientProviders from './clientProviders'
import ClientScripts from './clientScripts'
import ClientGlobals from './clientGlobals'

// const nunitoSans = Nunito_Sans({
//   subsets: ['latin'],
//   variable: '--font-nunito-sans',
//   display: 'swap',
// })

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// // Meta Section
export const metadata = {
  title: 'baby.zone - AI Future Baby Generator',
  description: 'See How Your Future Baby Will Look Like Today',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={`${openSans.variable}`}>
      <head>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='stylesheet' href='/global.css' />
        {/* <link rel='manifest' href='/site.webmanifest' /> */}
        <ClientScripts />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>
            <ClientGlobals>{children}</ClientGlobals>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
