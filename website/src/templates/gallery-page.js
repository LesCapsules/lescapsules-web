import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const GalleryPage = ({ data, pageContext }) => {
  const page = data.sanityGallery
  const images = page.photos
  const fullSize = images.map(imageNode => imageNode.asset.full.src)
  const thumbs = images.map(imageNode => imageNode.asset.thumb)
  return (
    <Layout location={pageContext.location}>
      <div className="container my-4">
        <h1>{page.title}</h1>
        <Gallery images={fullSize} thumbs={thumbs} colClass="col-4 col-md-3" />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryData($id: String!) {
    sanityGallery(id: { eq: $id }) {
      title
      slug {
        current
      }
      photos {
        asset {
          thumb: fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbySanityImageFluid
          }
          full: fluid(maxWidth: 1024) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default GalleryPage
