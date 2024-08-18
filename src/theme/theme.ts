import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        fontFamily: 'Open Sans',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        backgroundColor: '#FFFFFF',
      },
    }),
  },
  shadows: {
    base: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    secondary: '0px 8px 16px -6px rgba(0, 0, 0, 0.02)',
    XS: '0px 4px 12px -2px rgba(0, 0, 0, 0.04)',
    S: '0px 6px 20px -2px rgba(0, 0, 0, 0.04)',
    M: '0px 8px 24px -4px rgba(0, 0, 0, 0.06)',
    L: '0px 8px 32px -6px rgba(0, 0, 0, 0.12)',
    XL: '0px 10px 36px -8px rgba(0, 0, 0, 0.16)',
    XXL: '0px 16px 20px -8px rgba(0, 0, 0, 0.20)',
  },
  sizes: {
    container: {
      sm: '30rem',
      md: '48rem',
      lg: '64rem',
      xl: '73.25rem',
    },
  },
  // DONE
  space: {
    xxs: '0.25rem', // 4px
    xss: '0.375rem', // 6px
    xs: '0.5rem', // 8px
    s: '0.75rem', // 12px
    ms: '0.875rem', // 14px
    m: '1rem', // 16px
    l: '1.5rem', // 24px
    xl: '3rem', // 48px
    xxl: '6rem', // 96px
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  radii: {
    xxxs: '0.125rem', // 2px
    xxs: '0.25rem', // 4px
    xs: '0.375rem', // 6px
    s: '0.5rem', // 8px
    m: '0.625rem', // 10px
    l: '0.75rem', // 12px
    xl: '0.875rem', // 14px
    xxl: '1rem', // 16px
  },
  components: {
    // ...components,
  },
  config,
})

export const Theme = typeof theme

export default theme
