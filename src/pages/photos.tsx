import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import {
  Heading,
  Container,
  Grid,
  GridItem,
  Card,
  CardBody,
  Box,
} from '@chakra-ui/react'

import { Layout } from '../components/layout'
// @ts-ignore
import { makeAlbumPagePath } from '../utils'

interface GalleryNode {
  node: {
    id: string
    title: string
    year: string
    mainPhoto: {
      asset: {
        gatsbyImageData: IGatsbyImageData
        full: IGatsbyImageData
      }
    }
  }
}

interface PhotoIndexPageProps {
  data: {
    allSanityGallery: {
      edges: GalleryNode[]
    }
  }
}

const PhotoIndexPage = ({ data }: PhotoIndexPageProps) => {
  const pagesArray = data.allSanityGallery.edges
  const mostRecentGallery = data.allSanityGallery.edges[0]
  const seoImage =
    mostRecentGallery?.node?.mainPhoto?.asset?.full?.images?.fallback?.src
  return (
    <Layout
      title="Photos"
      description="Galleries de photos sur les évènements marquants. "
      image={seoImage}
      path="/photos/"
    >
      <Container
        maxWidth={{
          base: '100%',
          xl: '1140px',
        }}
      >
        <Heading>Galleries de photos</Heading>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {pagesArray.map(({ node }) => {
            const pageUrl = makeAlbumPagePath(node.title, node.year)
            return (
              <GridItem
                sx={{
                  ':hover': {
                    boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
                  },
                }}
              >
                <Link to={pageUrl}>
                  <Card height="100%" borderRadius={0}>
                    <CardBody padding={0}>
                      <GatsbyImage
                        image={node.mainPhoto.asset.gatsbyImageData}
                        alt=""
                      />
                      <Box padding={2}>
                        <Heading size="md">
                          {node.title}
                          <br />
                          <Box as="span" fontSize="0.8em">
                            {node.year}
                          </Box>
                        </Heading>
                      </Box>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default PhotoIndexPage

export const pageQuery = graphql`
  query GalleryPagesList {
    allSanityGallery(sort: { date: DESC }) {
      edges {
        node {
          id
          title
          year: date(formatString: "YYYY")
          mainPhoto {
            asset {
              gatsbyImageData(width: 300, height: 200, placeholder: BLURRED)
              full: gatsbyImageData(
                layout: FULL_WIDTH
                width: 1200
                height: 600
              )
            }
          }
        }
      }
    }
  }
`
