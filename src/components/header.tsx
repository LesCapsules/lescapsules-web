import React from 'react'
import { Link } from 'gatsby'
import { Box, Container, Flex, Icon } from '@chakra-ui/react'
import { IoMdHome, IoMdImages, IoMdPeople, IoMdVideocam } from 'react-icons/io'

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
            <Menu>
              <Link to="/">
                <IoMdHome /> Acceuil
              </Link>
              <Link to="/photos/">
                <IoMdImages /> Photos
              </Link>
              <Link to="/videos/">
                <IoMdVideocam /> Vidéos
              </Link>
              <Link to="/drink-team/">
                <IoMdPeople /> Drink Team
              </Link>
            </Menu>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
