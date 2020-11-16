import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Container from '../components/container'
import Layout from '../components/layout'
import Row from '../components/row'

const ContentStyles = styled.div`
  padding: ${(props) => props.theme.spacings[4]};
`

const ContentTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacings[4]};
`

const LeadParagraph = styled.p`
  font-size: 1.25em;
`

const IndexPage = ({ data }) => {
  return (
    <Layout
      title="Acceuil"
      description="Bienvenue sur le site des Capsules, le comité des fêtes de Sauclières"
      path="/"
    >
      <div>
        <Img fluid={data.photo.image.asset.full} />
      </div>
      <Container>
        <Row>
          <ContentStyles>
            <ContentTitle>Bienvenue sur le site de la Bandade!</ContentTitle>
            <LeadParagraph>
              Ce site a pour vocation de réunir une bande de collègues autour
              d'un centre d'intérêt : l'art de la fête !!! Cette passion les
              rassemble au sein du comité des fêtes de Sauclières, où les
              Capsules peuvent donner libre cours à leur imagination pour faire
              bouger ce petit village du sud Aveyron. Vous trouverez ici des
              photos de leurs plus célèbres exploits !!
            </LeadParagraph>
          </ContentStyles>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    photo: sanityPhoto(name: { eq: "all-staff-big" }) {
      name
      title
      image {
        asset {
          full: fluid(maxWidth: 1024, maxHeight: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
