import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heading,
  Container,
  Grid,
  GridItem,
  Card,
  CardBody,
  Box,
} from '@chakra-ui/react'
import { sanityClient, urlFor } from '@/lib/sanity'
import { makeAlbumPagePath } from '@/lib/utils'
import { SubHeading } from '@/src/components/subheading'

interface Gallery {
  id: string
  title: string
  date: string
  mainPhoto: {
    asset: {
      _ref: string
    }
  }
}

async function getGalleries() {
  try {
    const galleries = await sanityClient.fetch<Gallery[]>(
      `*[_type == "gallery"] | order(date desc) {
      "id": _id,
      title,
      date,
      mainPhoto
    }`
    )
    return galleries
  } catch (error) {
    console.error('Failed to fetch galleries:', error)
    return []
  }
}

export const metadata: Metadata = {
  title: 'Photos',
  description: 'Galleries de photos sur les évènements marquants.',
}

export default async function PhotosPage() {
  const galleries = await getGalleries()

  return (
    <Box paddingY={10} minHeight="80vh">
      <Container
        maxWidth={{
          base: 'full',
          xl: '5xl',
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
          {galleries.map((gallery) => {
            const year = new Date(gallery.date).getFullYear().toString()
            const pageUrl = makeAlbumPagePath(gallery.title, year)
            const imageUrl = urlFor(gallery.mainPhoto)
              .width(300)
              .height(200)
              .url()

            return (
              <GridItem
                key={gallery.id}
                sx={{
                  ':hover': {
                    boxShadow: 'rgba(30, 30, 30, 0.15) 0px 2px 40px 0px',
                  },
                }}
              >
                <Link href={pageUrl}>
                  <Card height="full" borderRadius={0}>
                    <CardBody padding={0}>
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '200px',
                        }}
                      >
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <Box padding={2}>
                        <Heading size="md">
                          {gallery.title}
                          <br />
                          <SubHeading>{year}</SubHeading>
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
    </Box>
  )
}
