import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ContentWrapper, GlobalStyles } from '@browniebroke/react-ui-components'

import Footer from './footer'
import Header from './header'
import SEO from './seo'
import theme from '../theme'

interface LayoutProps {
  title: string
  description: string
  image?: string
  path?: string
}

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  image,
  path,
  children,
}) => (
  <>
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
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </ThemeProvider>
  </>
)

export default Layout
