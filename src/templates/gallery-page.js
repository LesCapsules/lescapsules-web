import { graphql } from 'gatsby'
import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import { Container } from '@browniebroke/react-ui-components'

import Layout from '../components/layout'
import PageHeader from '../components/headings'

const GalleryPage = ({ data, pageContext }) => {
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  const page = data.sanityGallery
  const images = page.photos.map(({ asset }) => asset)
  return (
    <Layout
      title={page.title}
      description={`Album photo: ${page.title} (${page.year})`}
      image={page.mainPhoto.asset.full.images.fallback.src}
      path={pageContext.urlPath}
    >
      <Container>
        <PageHeader bottomPadding={2}>
          {page.title} <br />
          <small>{page.year}</small>
        </PageHeader>
        {page.overview && <BlockContent blocks={page.overview} />}
        <Gallery images={images} lightboxOptions={lightboxOptions} />
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
          thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
          full: gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      mainPhoto {
        asset {
          full: gatsbyImageData(width: 1200, height: 600, layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default GalleryPage
