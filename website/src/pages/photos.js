import React from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ location, data }) => {
  const pagesArray = data.allSanityGallery.edges
  return (
    <Layout location={location}>
      <div className="container">
        <h1>Galleries de photos:</h1>
        <div className="row">
          {pagesArray.map(({ node }) => {
            const pageUrl = `/photos/${node.year}/${node.slug.current}`
            return (
              <div
                className="card col-6 col-md-4 col-lg-3 p-3"
                key={node.id}
                style={{ borderWidth: '0' }}
              >
                <Link to={pageUrl}>
                  <div>
                    <Img
                      fluid={node.mainPhoto.asset.thumb}
                      className="card-img-top"
                    />
                    <div className="card-text">
                      <h4>{node.title}</h4>
                      <p className="h6">{node.year}</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

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
