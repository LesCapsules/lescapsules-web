'use client'

import React from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Icon,
  Stack,
} from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import Link from 'next/link'
import { IoMdHome, IoMdImages, IoMdPeople, IoMdVideocam } from 'react-icons/io'

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme="primary">
        <Icon as={HiMenu} boxSize={10} color="secondary" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="secondary"
          color="primary"
          fontSize="2xl"
          fontWeight="bold"
          paddingY={10}
        >
          <DrawerCloseButton size="lg" />
          <DrawerBody>
            <Stack spacing={4}>
              <Link href="/" onClick={onClose}>
                <Icon as={IoMdHome} /> Acceuil
              </Link>
              <Link href="/photos/" onClick={onClose}>
                <Icon as={IoMdImages} /> Photos
              </Link>
              <Link href="/videos/" onClick={onClose}>
                <Icon as={IoMdVideocam} /> Vidéos
              </Link>
              <Link href="/drink-team/" onClick={onClose}>
                <Icon as={IoMdPeople} /> Drink Team
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
