import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import '../scss/main.scss'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const ContentWrapper = styled.div`
  min-height: calc(100vh - 100px - 6rem);
`

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
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
