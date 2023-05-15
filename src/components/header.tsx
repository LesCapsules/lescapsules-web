import React from 'react'
import { Link } from 'gatsby'
import { Box, Container, Flex, Icon } from '@chakra-ui/react'

import LogoCapsules from '../images/icons/lescapsules-name.svg'
import { Menu } from './menu'

export const Header = () => {
  return (
    <Box as="header" backgroundColor="primary" color="secondary">
      <Box as="nav" padding={4}>
        <Container maxWidth={{ base: 'full', lg: '5xl' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Link to="/" title="Acceuil" aria-label="Acceuil">
              <Icon
                as={LogoCapsules}
                height="site-logo.height"
                width="auto"
                sx={{ path: { fill: 'currentColor' } }}
              />
            </Link>
            <Menu />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
