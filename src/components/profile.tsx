import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

interface ProfileProps {
  name: string
  image: IGatsbyImageData
  favouritePlace: string
  hobbies: string
}

export const Profile = ({
  name,
  image,
  favouritePlace,
  hobbies,
}: ProfileProps) => {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      alignItems="center"
      boxShadow="rgba(30, 30, 30, 0.15) 0px 2px 40px 0px"
      padding={4}
      mb={6}
    >
      <Box
        sx={{
          img: {
            maxWidth: '150px',
            borderRadius: '50% !important',
            border: '1px solid rgb(81, 85, 93) !important',
            padding: 1,
          },
        }}
        mt={{ base: 4, sm: 0 }}
      >
        <GatsbyImage image={image} alt={name} />
      </Box>
      <Box marginLeft={4}>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text mb={{ base: 4, sm: 0 }}>
          Lieu de bandade favori: {favouritePlace} <br />
          Hobbies: {hobbies}
        </Text>
      </Box>
    </Flex>
  )
}
