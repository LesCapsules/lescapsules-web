import React from 'react'

import Layout from '../components/layout'
import GridCard from '../components/card-grid'
import Row from '../components/row'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Container from '../components/container'

const PhotoIndexPage = ({ location, data }) => {
  const pagesArray = data.allSanityGallery.edges
  return (
    <Layout location={location}>
      <Container>
        <div className="py-5">
          <h1>Galleries de photos:</h1>
          <Row>
            {pagesArray.map(({ node }) => {
              const pageUrl = `/photos/${node.year}/${node.slug.current}`
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
        </div>
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
          slug {
            current
          }
          year: date(formatString: "YYYY")
          mainPhoto {
            asset {
              thumb: fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
