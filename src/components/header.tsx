'use client'

import React from 'react'
import Link from 'next/link'
import { Box, Container, Flex, Icon } from '@chakra-ui/react'

import LogoCapsules from '@/src/images/icons/lescapsules-name.svg'
import { Menu } from './menu'

export const Header = () => {
  return (
    <Box as="header" backgroundColor="primary" color="secondary">
      <Box as="nav" padding={4}>
        <Container maxWidth={{ base: 'full', lg: '5xl' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Link href="/" title="Acceuil" aria-label="Acceuil">
              <Icon
                as={LogoCapsules}
                height="site-logo.height"
                width="auto"
                css={{ path: { fill: 'currentColor' } }}
              />
            </Link>
            <Menu />
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
