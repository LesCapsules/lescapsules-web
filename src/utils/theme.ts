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
  styles: {
    global: {
      html: {
        fontSize: '1.25rem',
        letterSpacing: '.03em',
        overflowY: 'scroll',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        marginTop: 0,
        marginBottom: 8,
        lineHeight: '1.2',
        fontWeight: '400',
        textRendering: 'optimizeLegibility',
      },
    },
  },
}

export const theme = extendTheme(customTheme)
