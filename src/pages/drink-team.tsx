import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@browniebroke/react-ui-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

import Layout from '../components/layout'
import Profile from '../components/profile'
import PageHeader from '../components/headings'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const TeamContainer = styled(Container)<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div<ThemeProps>`
  flex-basis: ${(props) => props.theme.containersMaxWidth.md};
  margin-bottom: ${(props) => props.theme.spacings[4]};
`

const ProfileSpacer = styled.div<ThemeProps>`
  margin-bottom: ${(props) => props.theme.spacings[2]};
`

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

const DrinkTeamPage: React.FC<DrinkTeamPageProps> = ({ data }) => {
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
                  image={node.photo.asset.gatsbyImageData}
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
