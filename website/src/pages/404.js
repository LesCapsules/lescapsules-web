import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PageHeader from '../components/headers'

const title = 'Page introuvable'
const description = 'Impossible de trouver cette page...'

const ContentStyles = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout title={title} description={description}>
    <ContentStyles>
      <PageHeader>{title}</PageHeader>
      <p>
        {description}
        <br />
      </p>
      <p>
        <Link to="/">Retour à l'acceuil</Link>
      </p>
    </ContentStyles>
  </Layout>
)

export default NotFoundPage
