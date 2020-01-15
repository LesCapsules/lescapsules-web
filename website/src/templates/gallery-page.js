import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

import Layout from '../components/layout'
import Container from '../components/container'

const GalleryPage = ({ data, path }) => {
  const page = data.sanityGallery
  const images = page.photos
  const fullSize = images.map(imageNode => imageNode.asset.full.src)
  const thumbs = images.map(imageNode => imageNode.asset.thumb)
  console.log(path)
  return (
    <Layout
      title={page.title}
      description={`Album photo: ${page.title}`}
      image={page.mainPhoto.asset.full.src}
      path={path}
    >
      <Container yPadding={true}>
        <h1>{page.title}</h1>
        <Gallery images={fullSize} thumbs={thumbs} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryData($id: String!) {
    sanityGallery(id: { eq: $id }) {
      title
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
      mainPhoto {
        asset {
          full: fixed(width: 1024, height: 800) {
            src
          }
        }
      }
    }
  }
`

export default GalleryPage
