import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import Container from '../components/container'
import { makeAlbumPagePath } from '../utils'

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
      <Container yPadding={true}>
        <h1>Galleries de photos:</h1>
        <Row>
          {pagesArray.map(({ node }) => {
            const pageUrl = makeAlbumPagePath(node.title, node.year)
            return (
              <GridCard key={node.id}>
                <Link to={pageUrl}>
                  <Img fluid={node.mainPhoto.asset.thumb} />
                  <div className="m-2">
                    <h4>{node.title}</h4>
                    <p className="h6">{node.year}</p>
                  </div>
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
