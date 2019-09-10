import React from 'react'

import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const IndexPage = ({ location, data }) => {
  const pagesArray = data.allSitePage.edges
  return (
    <Layout location={location}>
      <div className="container">
        <h1>Galleries de photos:</h1>
        <ul>
          {pagesArray.map(({ node }) => (
            <li key={node.context.id}>
              <Link to={node.path}>{node.context.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GalleryPagesList {
    allSitePage(filter: { context: { isGallery: { eq: true } } }) {
      edges {
        node {
          path
          context {
            location
            title
            id
          }
        }
      }
    }
  }
`
