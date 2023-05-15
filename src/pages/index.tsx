import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/layout'

interface IndexPageProps {
  data: {
    photo: {
      title: string
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout
      title="Acceuil"
      description="Bienvenue sur le site des Capsules, le comité des fêtes de Sauclières"
      path="/"
    >
      <div>
        <GatsbyImage
          image={data.photo.image.asset.gatsbyImageData}
          alt={data.photo.title}
        />
      </div>
      <Container maxWidth="4xl">
        <Box padding={8}>
          <Heading textAlign="center" color="primary" size="lg">
            Bienvenue sur le site de la Bandade!
          </Heading>
          <Text fontSize="1.25em">
            Ce site a pour vocation de réunir une bande de collègues autour d'un
            centre d'intérêt : l'art de la fête ! Cette passion les rassemble au
            sein du comité des fêtes de Sauclières, où les Capsules peuvent
            donner libre cours à leur imagination pour faire bouger ce petit
            village du sud Aveyron. Vous trouverez ici des photos de leurs plus
            célèbres exploits.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    photo: sanityPhoto(name: { eq: "all-staff-big" }) {
      title
      image {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 1024
            height: 600
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
