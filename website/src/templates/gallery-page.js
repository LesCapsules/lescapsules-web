import { graphql } from 'gatsby'
import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

import Layout from '../components/layout'
import Container from '../components/container'

const GalleryPage = ({ data, pageContext }) => {
  const page = data.sanityGallery
  const images = page.photos
  const fullSize = images.map((imageNode) => imageNode.asset.full.src)
  const thumbs = images.map((imageNode) => imageNode.asset.thumb)
  return (
    <Layout
      title={page.title}
      description={`Album photo: ${page.title} (${page.year})`}
      image={page.mainPhoto.asset.full.src}
      path={pageContext.urlPath}
    >
      <Container>
        <h1 className="mt-5 mb-3">
          {page.title} <br />
          <small>{page.year}</small>
        </h1>
        <BlockContent blocks={page.overview} />
        <Gallery images={fullSize} thumbs={thumbs} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query GalleryData($id: String!) {
    sanityGallery(id: { eq: $id }) {
      title
      year: date(formatString: "YYYY")
      overview: _rawOverview(resolveReferences: { maxDepth: 50 })
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
