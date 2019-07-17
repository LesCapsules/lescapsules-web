import React from 'react'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'

const IntroHeader = styled.div`
  text-align: center;
  padding: 10rem 0;
`

const Index = () => (
  <Layout>
    <Container>
      <IntroHeader>
        <h1>Bienvenue sur le site de la bandade</h1>
      </IntroHeader>
    </Container>
  </Layout>
)

export default Index
