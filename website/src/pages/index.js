import React from 'react'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Container from '../components/container'
import Layout from '../components/layout'
import Row from '../components/row'

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      <div>
        <Img fluid={data.photo.image.asset.full} />
      </div>
      <Container>
        <Row>
          <div className="col">
            <div className="p-5">
              <h2 className="text-center text-primary">
                Bienvenue sur le site de la Bandade!
              </h2>
            </div>
          </div>
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
