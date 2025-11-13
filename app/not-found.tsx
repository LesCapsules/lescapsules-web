import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable',
  description: 'Impossible de trouver cette page...',
}

export default function NotFound() {
  return (
    <Box paddingY={10} minHeight="80vh">
      <Flex
        direction="column"
        height="60vh"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>Page introuvable</Heading>
        <Text>
          Impossible de trouver cette page...
          <br />
        </Text>
        <Text>
          <Link href="/">Retour à l'acceuil</Link>
        </Text>
      </Flex>
    </Box>
  )
}
