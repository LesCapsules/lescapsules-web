import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const ContentWrapper = styled.div`
  min-height: calc(100vh - 100px - 6rem);
`

const Layout = ({ title, description, image, path, children }) => (
  <>
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
  </>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
}

export default Layout
