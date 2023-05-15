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
import { Link } from 'gatsby'
import { IoMdHome, IoMdImages, IoMdPeople, IoMdVideocam } from 'react-icons/io'

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} colorScheme="primary">
        <Icon as={HiMenu} boxSize={10} color="secondary" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
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
              <Link to="/">
                <Icon as={IoMdHome} /> Acceuil
              </Link>
              <Link to="/photos/">
                <Icon as={IoMdImages} /> Photos
              </Link>
              <Link to="/videos/">
                <Icon as={IoMdVideocam} /> Vidéos
              </Link>
              <Link to="/drink-team/">
                <Icon as={IoMdPeople} /> Drink Team
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
