'use client'

import React from 'react'
import { Button, Drawer, useDisclosure, Icon, Stack } from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import Link from 'next/link'
import { IoMdHome, IoMdImages, IoMdPeople, IoMdVideocam } from 'react-icons/io'

export const Menu = () => {
  const { open, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorPalette="blue">
        <Icon as={HiMenu} boxSize={10} color="secondary" />
      </Button>
      <Drawer.Root
        open={open}
        placement="end"
        onOpenChange={(e) => (e.open ? onOpen() : onClose())}
      >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            backgroundColor="secondary"
            color="primary"
            fontSize="2xl"
            fontWeight="bold"
            paddingY={10}
          >
            <Drawer.CloseTrigger />
            <Drawer.Body>
              <Stack gap={4}>
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
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  )
}
