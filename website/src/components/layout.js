import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
`

const Layout = ({ title, description, image, path, children }) => (
  <>
    <GlobalStyles />
    <SEO
      title={title}
      description={description}
      image={image}
      path={path}
      lang="fr"
    />
    <Header />
    <div style={{ minHeight: 'calc(100vh - 100px - 6rem)' }}>{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
}

export default Layout
