import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/layout'
import { Flex, Heading, Text } from '@chakra-ui/react'

const title = 'Page introuvable'
const description = 'Impossible de trouver cette page...'

const NotFoundPage = () => (
  <Layout title={title} description={description}>
    <Flex
      direction="column"
      height="60vh"
      alignItems="center"
      justifyContent="center"
    >
      <Heading>{title}</Heading>
      <Text>
        {description}
        <br />
      </Text>
      <Text>
        <Link to="/">Retour à l'acceuil</Link>
      </Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
