import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ContentWrapper } from '@browniebroke/react-ui-components'

import { Footer } from './footer'
import { Header } from './header'
import { SEO } from './seo'
import { GlobalStyles } from './global-style'
import { theme } from '../theme'
// ChakraUI
import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme as chakraTheme } from '../utils/theme'

interface LayoutProps {
  title: string
  description: string
  image?: string
  path?: string
  paddingY?: number
  children?: React.ReactNode
}

export const Layout = ({
  title,
  description,
  image,
  path,
  paddingY = 10,
  children,
}: LayoutProps) => (
  <>
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SEO
          title={title}
          description={description}
          image={image}
          path={path}
          lang="fr"
        />
        <Header />
        <Box paddingY={paddingY} minHeight="80vh">
          {children}
        </Box>
        <Footer />
      </ThemeProvider>
    </ChakraProvider>
  </>
)
