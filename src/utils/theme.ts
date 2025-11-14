import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react'

const headingRecipe = defineRecipe({
  base: {
    marginTop: 0,
    marginBottom: 8,
    lineHeight: '1.2',
    fontWeight: '400',
    textRendering: 'optimizeLegibility',
  },
})

const customConfig = {
  theme: {
    recipes: {
      heading: headingRecipe,
    },
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
