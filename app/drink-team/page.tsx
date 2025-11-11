import type { Metadata } from 'next'
import Image from 'next/image'
import { Container, Heading, Box, Flex, Text } from '@chakra-ui/react'
import { sanityClient, urlFor } from '@/lib/sanity'

interface TeamMember {
  id: string
  name: string
  hobbies: string
  favouritePlace: string
  photo: {
    asset: {
      _ref: string
    }
  }
}

async function getTeamMembers() {
  const members = await sanityClient.fetch<TeamMember[]>(
    `*[_type == "member"] | order(name asc) {
      "id": _id,
      name,
      hobbies,
      favouritePlace,
      photo
    }`
  )
  return members
}

export const metadata: Metadata = {
  title: 'La Drink Team',
  description: 'Le comité des fêtes de Sauclières, AKA Les Capsules.',
}

export default async function DrinkTeamPage() {
  const members = await getTeamMembers()

  return (
    <Box paddingY={10} minHeight="80vh">
      <Container maxWidth={{ base: 'full', lg: '3xl' }}>
        <Heading>La Drink Team</Heading>
        {members.map((member) => {
          const imageUrl = urlFor(member.photo).width(150).height(150).url()
          return (
            <Flex
              key={member.id}
              direction={{ base: 'column', sm: 'row' }}
              alignItems="center"
              boxShadow="rgba(30, 30, 30, 0.15) 0px 2px 40px 0px"
              padding={4}
              mb={6}
            >
              <Box mt={{ base: 4, sm: 0 }}>
                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '1px solid rgb(81, 85, 93)',
                    padding: '4px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={member.name}
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
              </Box>
              <Box marginLeft={4}>
                <Heading as="h4" size="md">
                  {member.name}
                </Heading>
                <Text mb={{ base: 4, sm: 0 }}>
                  Lieu de bandade favori: {member.favouritePlace} <br />
                  Hobbies: {member.hobbies}
                </Text>
              </Box>
            </Flex>
          )
        })}
      </Container>
    </Box>
  )
}
