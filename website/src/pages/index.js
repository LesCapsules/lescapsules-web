import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="container">
        <h1>Les Capsules</h1>
        <p>Bienvenue sur notre Site</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeImage {
    file(relativePath: { eq: "images/comite-grand.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
