import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Container, Heading } from '@chakra-ui/react'
import Gallery from '@browniebroke/gatsby-image-gallery'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'

import { Layout } from '../components/layout'

interface GalleryPhotoNode {
  asset: {
    thumb: IGatsbyImageData
    full: IGatsbyImageData
  }
}

interface GalleryPageProps {
  data: {
    sanityGallery: {
      title: string
      year: string
      overview: string
      mainPhoto: {
        asset: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      photos: GalleryPhotoNode[]
    }
  }
  pageContext: {
    urlPath: string
  }
}

const GalleryPage = ({ data, pageContext }: GalleryPageProps) => {
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
      image={page.mainPhoto.asset.gatsbyImageData?.images?.fallback?.src}
      path={pageContext.urlPath}
    >
      <Container maxWidth="4xl">
        <Heading>
          {page.title} <br />
          <small>{page.year}</small>
        </Heading>
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
          gatsbyImageData(width: 1200, height: 600, layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default GalleryPage
