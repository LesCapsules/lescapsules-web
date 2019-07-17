import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Logo from './logo'

const Header = styled.header`
  padding: 1rem 0;
  background-color: #0024d9;
  color: #fff;
`

const Main = styled.main`
  min-height: 90vh;
`

const SiteTitle = styled.span`
  font-size: 1.5em;
`

const Layout = ({ children }) => (
  <div>
    <Header>
      <Container>
        <Logo style={{ maxWidth: '70px' }} />
      </Container>
    </Header>
    <Main>{children}</Main>
    <footer>
      <Container>Footer content here</Container>
    </footer>
  </div>
)

export default Layout
