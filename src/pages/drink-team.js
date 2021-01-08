import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@browniebroke/react-ui-components'

import Layout from '../components/layout'
import Profile from '../components/profile'
import PageHeader from '../components/headings'

const TeamContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  flex-basis: ${(props) => props.theme.containersMaxWidth.md};
`

const ProfileSpacer = styled.div`
  :not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacings[2]};
  }
`

const DrinkTeamPage = ({ data }) => {
  const membersArray = data.allSanityMember.edges
  return (
    <Layout
      title="La Drink Team"
      description="Le comité des fêtes de Sauclières, AKA Les Capsules."
      path="/drink-team/"
    >
      <TeamContainer>
        <ContentWrapper>
          <PageHeader>La Drink Team</PageHeader>
          {membersArray.map(({ node }) => {
            return (
              <ProfileSpacer key={node.id}>
                <Profile
                  name={node.name}
                  imgSrc={node.photo.asset.fixed.src}
                  favouritePlace={node.favouritePlace}
                  hobbies={node.hobbies}
                />
              </ProfileSpacer>
            )
          })}
        </ContentWrapper>
      </TeamContainer>
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
