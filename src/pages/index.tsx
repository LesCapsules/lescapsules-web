import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Container, Row } from '@browniebroke/react-ui-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

import Layout from '../components/layout'

const ContentStyles = styled.div<ThemeProps>`
  padding: ${(props) => props.theme.spacings[4]};
`

const ContentTitle = styled.h2<ThemeProps>`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacings[4]};
`

const LeadParagraph = styled.p`
  font-size: 1.25em;
`

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

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
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
