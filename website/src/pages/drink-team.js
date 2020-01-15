import React from 'react'

import { graphql } from 'gatsby'

import Container from '../components/container'
import Layout from '../components/layout'
import Profile from '../components/profile'

const DrinkTeamPage = ({ data }) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout
      title="La Drink Team"
      description="Le comité des fêtes de Sauclières, AKA Les Capsules."
      path="/drink-team/"
    >
      <Container yPadding={true}>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h1>Drink team:</h1>
            {membersArray.map(({ node }) => {
              return (
                <div className="mb-3" key={node.id}>
                  <Profile
                    name={node.name}
                    imgSrc={node.photo.asset.fixed.src}
                    favouritePlace={node.favouritePlace}
                    hobbies={node.hobbies}
                  />
                </div>
              )
            })}
          </div>
        </div>
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
