'use client'

import React from 'react'
import Link from 'next/link'
import { Box, Card, Container, Grid, GridItem, Heading } from '@chakra-ui/react'

import { LiteYouTubeEmbed, LiteYoutubeStatic } from '@/src/components/youtube'
import { makeVideoPagePath } from '@/lib/utils'

interface Video {
  id: string
  title: string
  youtubeId: string
}

interface VideosClientProps {
  currentVideo?: Video
  allVideos: Video[]
}

export function VideosClient({ currentVideo, allVideos }: VideosClientProps) {
  const videosArray = allVideos.filter(
    (video) => !currentVideo || video.youtubeId !== currentVideo.youtubeId
  )
  const pageTitle = currentVideo ? currentVideo.title : 'Vidéos'

  return (
    <Box paddingY={10} minHeight="80vh">
      <Container
        maxWidth={{
          base: 'full',
          xl: '5xl',
        }}
      >
        <Heading>{pageTitle}</Heading>
        {currentVideo && (
          <>
            <LiteYouTubeEmbed
              id={currentVideo.youtubeId}
              title={currentVideo.title}
            />
            <Heading as="h3" size="md" marginTop={10}>
              Plus de vidéos
            </Heading>
          </>
        )}
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {videosArray.map((video) => {
            return (
              <GridItem
                key={video.id}
                css={{
                  '&:hover': {
                    boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
                  },
                }}
              >
                <Link href={makeVideoPagePath(video.title)}>
                  <Card.Root height="100%" borderRadius={0}>
                    <Card.Body padding={0}>
                      <LiteYoutubeStatic id={video.youtubeId} />
                    </Card.Body>
                    <Box padding={2}>
                      <Heading size="md">{video.title}</Heading>
                    </Box>
                  </Card.Root>
                </Link>
              </GridItem>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
