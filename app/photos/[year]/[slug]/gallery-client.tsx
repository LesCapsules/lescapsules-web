'use client'

import React from 'react'
import Image from 'next/image'
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

import { SubHeading } from '@/src/components/subheading'

interface GalleryPhoto {
  asset: {
    url: string
    metadata: {
      dimensions: {
        width: number
        height: number
      }
    }
  }
}

interface GalleryPageClientProps {
  title: string
  year: string
  overview: any
  mainPhotoUrl: string
  photos: GalleryPhoto[]
}

export function GalleryPageClient({
  title,
  year,
  overview,
  mainPhotoUrl,
  photos,
}: GalleryPageClientProps) {
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }

  return (
    <Box paddingY={10} minHeight="80vh">
      <Container
        maxWidth={{
          base: 'full',
          xl: '5xl',
        }}
      >
        <Heading>
          {title} <br />
          <SubHeading>{year}</SubHeading>
        </Heading>
        {overview && (
          <Box marginY={8}>
            <PortableText value={overview} />
          </Box>
        )}
        <Gallery>
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
            gap={2}
            marginTop={8}
          >
            {photos.map((photo, index) => {
              const thumbUrl = `${photo.asset.url}?w=270&h=270&fit=crop`
              return (
                <Item
                  key={index}
                  original={photo.asset.url}
                  thumbnail={thumbUrl}
                  width={photo.asset.metadata.dimensions.width}
                  height={photo.asset.metadata.dimensions.height}
                >
                  {({ ref, open }) => (
                    <Box
                      ref={ref as any}
                      onClick={open}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          paddingBottom: '100%',
                        }}
                      >
                        <Image
                          src={thumbUrl}
                          alt=""
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </Box>
                  )}
                </Item>
              )
            })}
          </SimpleGrid>
        </Gallery>
      </Container>
    </Box>
  )
}
