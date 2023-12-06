import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Layout } from '../components/layout'
import { SubHeading } from '../components/subheading'

interface GalleryPhotoNode {
  asset: {
    thumb: IGatsbyImageData
    width: number
    height: number
    url: string
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
  const photoAssets = page.photos.map(({ asset }) => asset)
  return (
    <Layout
      title={page.title}
      description={`Album photo: ${page.title} (${page.year})`}
      image={page.mainPhoto.asset.gatsbyImageData?.images?.fallback?.src}
      path={pageContext.urlPath}
    >
      <Container
        maxWidth={{
          base: 'full',
          xl: '5xl',
        }}
      >
        <Heading>
          {page.title} <br />
          <SubHeading>{page.year}</SubHeading>
        </Heading>
        {page.overview && (
          <Box marginY={8}>
            <BlockContent blocks={page.overview} />
          </Box>
        )}
        <Gallery>
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            spacing={2}
            marginTop={8}
          >
            {photoAssets.map((asset, index) => (
              <Item
                original={asset.url}
                thumbnail={asset.thumb.images.fallback?.src}
                width={asset.width}
                height={asset.height}
              >
                {({ ref, open }) => (
                  <Box
                    ref={ref as unknown as React.MutableRefObject<HTMLImageElement>}
                    onClick={open}
                  >
                    <GatsbyImage image={asset.thumb} alt="" />
                  </Box>
                )}
              </Item>
            ))}
          </SimpleGrid>
        </Gallery>
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
          width
          height
          url
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
