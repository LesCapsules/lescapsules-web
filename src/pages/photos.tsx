import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Container, Row } from '@browniebroke/react-ui-components'

import CardCaption from '../components/card-caption'
import GridCard from '../components/card-grid'
import Layout from '../components/layout'
import PageHeader from '../components/headings'
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

const PhotoIndexPage: React.FC<PhotoIndexPageProps> = ({ data }) => {
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
      <Container>
        <PageHeader>Galleries de photos</PageHeader>
        <Row>
          {pagesArray.map(({ node }) => {
            const pageUrl = makeAlbumPagePath(node.title, node.year)
            return (
              <GridCard key={node.id}>
                <Link to={pageUrl}>
                  <GatsbyImage
                    image={node.mainPhoto.asset.gatsbyImageData}
                    alt=""
                  />
                  <CardCaption>
                    {node.title}
                    <br />
                    <span className="year">{node.year}</span>
                  </CardCaption>
                </Link>
              </GridCard>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default PhotoIndexPage

export const pageQuery = graphql`
  query GalleryPagesList {
    allSanityGallery(sort: { fields: date, order: DESC }) {
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
