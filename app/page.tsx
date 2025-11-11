import type { Metadata } from 'next'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { sanityClient, urlFor } from '@/lib/sanity'
import { siteMetadata } from '@/lib/metadata'

interface HomePhoto {
  title: string
  image: {
    asset: {
      _ref: string
    }
  }
}

async function getHomeData() {
  const photo = await sanityClient.fetch<HomePhoto>(
    `*[_type == "photo" && name == "all-staff-big"][0] {
      title,
      image
    }`
  )
  return { photo }
}

export const metadata: Metadata = {
  title: 'Acceuil',
  description: 'Bienvenue sur le site des Capsules, le comité des fêtes de Sauclières',
}

export default async function HomePage() {
  const { photo } = await getHomeData()
  const imageUrl = urlFor(photo.image).width(1024).height(600).url()

  return (
    <Box minHeight="80vh">
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        <Image
          src={imageUrl}
          alt={photo.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <Container maxWidth="4xl">
        <Box padding={8}>
          <Heading textAlign="center" color="primary" size="lg">
            Bienvenue sur le site de la Bandade!
          </Heading>
          <Text fontSize="1.25em">
            Ce site a pour vocation de réunir une bande de collègues autour d'un
            centre d'intérêt : l'art de la fête ! Cette passion les rassemble au
            sein du comité des fêtes de Sauclières, où les Capsules peuvent
            donner libre cours à leur imagination pour faire bouger ce petit
            village du sud Aveyron. Vous trouverez ici des photos de leurs plus
            célèbres exploits.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
