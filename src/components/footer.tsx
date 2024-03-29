import React from 'react'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'
import { Container, Box, Flex, Stack, Link } from '@chakra-ui/react'

export const Footer = () => (
  <Box as="footer" color="primary" backgroundColor="secondary" paddingY={10}>
    <Container maxWidth="5xl">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={4}>
          <Link
            href="https://www.facebook.com/lescapsules/"
            title="Les Capsules sur Facebook"
            isExternal
          >
            <FaFacebook size="3rem" />
          </Link>
          <Link
            href="mailto:lescapsules@gmail.com"
            title="Contactez nous via email"
            isExternal
          >
            <FaEnvelope size="3rem" />
          </Link>
        </Stack>
        <Box paddingTop={{ base: 4, md: 0 }}>
          © Capsules {new Date().getFullYear()}
        </Box>
      </Flex>
    </Container>
  </Box>
)
