import { createSystem, defaultConfig } from '@chakra-ui/react'

const customConfig = {
  theme: {
    tokens: {
      fonts: {
        body: { value: 'Roboto Slab, Times New Roman, Times, serif' },
        heading: { value: '"Raleway", "Roboto", "Arial", sans-serif' },
      },
      colors: {
        primary: { value: '#0054c7' },
        secondary: { value: '#f4d62e' },
      },
      sizes: {
        'site-logo.height': { value: '40px' },
      },
    },
  },
  globalCss: {
    html: {
      fontSize: '1.25rem',
      letterSpacing: '.03em',
      overflowY: 'scroll',
    },
  },
}

export const system = createSystem(defaultConfig, customConfig)
