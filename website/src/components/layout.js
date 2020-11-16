import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import ContentWrapper from './content-wrapper'
import Footer from './footer'
import GlobalStyles from './global-styles'
import Header from './header'
import SEO from './seo'
import theme from '../theme'

const Layout = ({ title, description, image, path, children }) => (
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

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
}

export default Layout
