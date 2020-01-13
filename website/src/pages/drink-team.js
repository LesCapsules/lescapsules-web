import React from 'react'

import { graphql } from 'gatsby'

import Container from '../components/container'
import Layout from '../components/layout'
import Profile from '../components/profile'

const DrinkTeamPage = ({ location, data }) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout location={location}>
      <Container yPadding={true}>
        <h1>Drink team:</h1>
        {membersArray.map(({ node }) => {
          return (
            <div className="row justify-content-center mb-3" key={node.id}>
              <div className="col-11 col-md-10 col-lg-8">
                <Profile
                  name={node.name}
                  imgSrc={node.photo.asset.fixed.src}
                  favouritePlace={node.favouritePlace}
                  hobbies={node.hobbies}
                />
              </div>
            </div>
          )
        })}
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
