import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  Box,
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'

import { Layout } from '../components/layout'
import { LiteYouTubeEmbed, LiteYoutubeStatic } from '../components/youtube'
// @ts-ignore
import { makeVideoPagePath } from '../utils'

interface SanityVideoEdge {
  node: {
    id: string
    title: string
    youtubeId: string
  }
}

interface VideoPageProps {
  data: {
    allSanityVideo: {
      edges: SanityVideoEdge[]
    }
    sanityVideo: {
      title: string
      youtubeId: string
    }
  }
  pageContext: {
    urlPath: string
  }
}

const VideoPage = ({ data, pageContext }: VideoPageProps) => {
  const currentVideo = data.sanityVideo
  const videosArray = data.allSanityVideo.edges.filter(({ node }) => {
    return !currentVideo || node.youtubeId !== currentVideo.youtubeId
  })
  const pageTitle = currentVideo ? currentVideo.title : 'Vidéos'
  return (
    <Layout
      title={pageTitle}
      description="Quelques vidéos retraçant des bons moments."
      path={pageContext.urlPath}
    >
      <Container
        maxWidth={{
          base: '100%',
          xl: '1140px',
        }}
      >
        <Heading>{pageTitle}</Heading>
        {currentVideo && (
          <LiteYouTubeEmbed
            id={currentVideo.youtubeId}
            title={currentVideo.title}
          />
        )}
        {currentVideo && (
          <Heading as="h3" size="md">
            Plus de vidéos
          </Heading>
        )}
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {videosArray.map(({ node }) => {
            const { id, title, youtubeId } = node
            return (
              <GridItem
                key={id}
                sx={{
                  ':hover': {
                    boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
                  },
                }}
              >
                <Link to={makeVideoPagePath(title)}>
                  <Card height="100%" borderRadius={0}>
                    <CardBody padding={0}>
                      <LiteYoutubeStatic id={youtubeId} />
                    </CardBody>
                    <Box padding={2}>
                      <Heading size="md">{title}</Heading>
                    </Box>
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

export const pageQuery = graphql`
  query VideoData($id: String!) {
    sanityVideo(id: { eq: $id }) {
      title
      youtubeId
    }
    allSanityVideo {
      edges {
        node {
          id
          title
          youtubeId
        }
      }
    }
  }
`

export default VideoPage
