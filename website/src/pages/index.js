import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div>
        <Img fluid={data.photo.image.asset.full} />
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
  query HomePage {
    photo: sanityPhoto(name: { eq: "all-staff-big" }) {
      name
      title
      image {
        asset {
          full: fluid(maxWidth: 1024) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
