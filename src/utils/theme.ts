import { extendTheme } from '@chakra-ui/react'
const customTheme = {
  fonts: {
    body: 'Roboto Slab, Times New Roman, Times, serif',
    heading: '"Raleway", "Roboto", "Arial", sans-serif',
  },
}

export const theme = extendTheme(customTheme)
