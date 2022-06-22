import { styledComponentsTheme } from '@browniebroke/react-ui-components'

export type SiteTheme = {
  white: string
  black: string
  blue: string
  spacings: string[]
  mdBreakpoint: string
  containerMaxWidth: string
  fontSizes: {
    base: string
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
  }
  baseFont: string
  headersFont: string
}

const baseFontSize = 1.25
const baseSpacer = 1
const spacers = [
  baseSpacer / 4,
  baseSpacer / 2,
  baseSpacer,
  baseSpacer * 1.5,
  baseSpacer * 2,
  baseSpacer * 3,
]

export const theme: SiteTheme = {
  ...styledComponentsTheme,
  spacings: spacers.map((s) => `${s}rem`),
  colors: {
    ...styledComponentsTheme.colors,
    primary: '#0054c7',
    secondary: '#f4d62e',
    navbar: '#0054c7',
    navbarText: '#f4d62e',
  },
  fontSizes: {
    base: `${baseFontSize}rem`,
    h1: `${baseFontSize * 1.7}rem`,
    h2: `${baseFontSize * 1.3}rem`,
    h3: `${baseFontSize * 1.15}rem`,
    h4: `${baseFontSize * 1.1}rem`,
    h5: `${baseFontSize}rem`,
    h6: `${baseFontSize * 0.9}rem`,
  },
  boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
  overlay: 'rgba(0, 0, 0, 0.85)', // Aligned with lightbox
  baseFont: 'Roboto Slab, Times New Roman, Times, serif',
  headersFont: '"Raleway", "Roboto", "Arial", sans-serif',
}
