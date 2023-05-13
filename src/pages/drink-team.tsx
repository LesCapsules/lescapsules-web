import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Container, Heading } from '@chakra-ui/react'

import { Layout } from '../components/layout'
import { Profile } from '../components/profile'

interface TeamMemberNode {
  node: {
    id: string
    name: string
    hobbies: string
    favouritePlace: string
    photo: {
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

interface DrinkTeamPageProps {
  data: {
    allSanityMember: {
      edges: TeamMemberNode[]
    }
  }
}

const DrinkTeamPage = ({ data }: DrinkTeamPageProps) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout
      title="La Drink Team"
      description="Le comité des fêtes de Sauclières, AKA Les Capsules."
      path="/drink-team/"
    >
      <Container maxWidth={{ base: '100%', lg: '960px' }}>
        <Heading>La Drink Team</Heading>
        {membersArray.map(({ node }, index) => {
          return (
            <Profile
              name={node.name}
              image={node.photo.asset.gatsbyImageData}
              favouritePlace={node.favouritePlace}
              hobbies={node.hobbies}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export default DrinkTeamPage

export const pageQuery = graphql`
  query DrinkTeamQuery {
    allSanityMember(sort: { name: ASC }) {
      edges {
        node {
          id
          name
          hobbies
          favouritePlace
          photo {
            asset {
              gatsbyImageData(
                layout: FIXED
                width: 150
                height: 150
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
