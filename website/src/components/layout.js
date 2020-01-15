import React from 'react'
import PropTypes from 'prop-types'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const Layout = ({ title, description, image, children }) => (
  <>
    <SEO title={title} description={description} image={image} lang="fr" />
    <Header />
    <div style={{ minHeight: 'calc(100vh - 100px - 6rem)' }}>{children}</div>
    <Footer />
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Layout
