import { extendTheme } from '@chakra-ui/react'
const customTheme = {
  fonts: {
    body: 'Roboto Slab, Times New Roman, Times, serif',
    heading: '"Raleway", "Roboto", "Arial", sans-serif',
  },
  colors: {
    primary: '#0054c7',
    secondary: '#f4d62e',
  },
  sizes: {
    'site-logo': {
      height: '40px',
    },
  },
}

export const theme = extendTheme(customTheme)
