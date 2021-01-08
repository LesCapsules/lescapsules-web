import { styledComponentsTheme } from '@browniebroke/react-ui-components'

const theme = {
  ...styledComponentsTheme,
  colors: {
    ...styledComponentsTheme.colors,
    primary: '#0054c7',
    secondary: '#f4d62e',
    navbar: '#0054c7',
    navbarText: '#f4d62e',
  },
  boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
  overlay: 'rgba(0, 0, 0, 0.85)', // Aligned with lightbox
}

export default theme
