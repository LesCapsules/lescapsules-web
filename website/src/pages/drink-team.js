import React from 'react'

import { graphql } from 'gatsby'

import GridCard from '../components/card-grid'
import Container from '../components/container'
import Layout from '../components/layout'
import Profile from '../components/profile'
import Row from '../components/row'

const DrinkTeamPage = ({ location, data }) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout location={location}>
      <Container yPadding={true}>
        <h1>Drink team:</h1>
        <Row>
          {membersArray.map(({ node }) => {
            return (
              <GridCard key={node.id}>
                <Profile
                  name={node.name}
                  imgSrc={node.photo.asset.fixed.src}
                  favouritePlace={node.favouritePlace}
                  hobbies={node.hobbies}
                />
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default DrinkTeamPage

export const pageQuery = graphql`
  query DrinkTeamQuery {
    allSanityMember(sort: { fields: name }) {
      edges {
        node {
          id
          name
          hobbies
          favouritePlace
          photo {
            asset {
              fixed(height: 300, width: 300) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`
