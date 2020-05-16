import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Container from '../components/container'
import GridCard from '../components/card-grid'
import Layout from '../components/layout'
import PageHeader from '../components/headings'
import Row from '../components/row'
import { makeAlbumPagePath } from '../utils'
import { spacings } from '../components/constants'

const CaptionStyles = styled.h4`
  margin: ${spacings[1]} 0;

  .year {
    font-size: 1rem;
  }
`

const PhotoIndexPage = ({ data }) => {
  const pagesArray = data.allSanityGallery.edges
  const mostRecentGallery = data.allSanityGallery.edges[0]
  const seoImage = mostRecentGallery.node.mainPhoto.asset.full.src
  return (
    <Layout
      title="Photos"
      description="Galleries de photos sur les évènements marquants. "
      image={seoImage}
      path="/photos/"
    >
      <Container>
        <PageHeader>Galleries de photos</PageHeader>
        <Row>
          {pagesArray.map(({ node }) => {
            const pageUrl = makeAlbumPagePath(node.title, node.year)
            return (
              <GridCard key={node.id}>
                <Link to={pageUrl}>
                  <Img fluid={node.mainPhoto.asset.thumb} />
                  <CaptionStyles>
                    {node.title}
                    <br />
                    <span className="year">{node.year}</span>
                  </CaptionStyles>
                </Link>
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default PhotoIndexPage

export const pageQuery = graphql`
  query GalleryPagesList {
    allSanityGallery(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          year: date(formatString: "YYYY")
          mainPhoto {
            asset {
              thumb: fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
              full: fixed(width: 1024, height: 800) {
                src
              }
            }
          }
        }
      }
    }
  }
`
