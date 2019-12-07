import React from 'react'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../components/container'

const DrinkTeamPage = ({ location, data }) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout location={location}>
      <Container>
        <h1>Drink team:</h1>
        <Row>
          {membersArray.map(({ node }) => {
            return (
              <GridCard key={node.id}>
                <Img fluid={node.photo.asset.thumb} />
                <div className="m-2">
                  <h4>{node.name}</h4>
                  <p>Lieu de bandade favori: {node.favouritePlace}</p>
                  <p>Hobbies: {node.hobbies}</p>
                </div>
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
    allSanityMember {
      edges {
        node {
          id
          name
          hobbies
          favouritePlace
          photo {
            asset {
              thumb: fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
