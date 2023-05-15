import React from 'react'
import { Box } from '@chakra-ui/react'

export const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <Box as="span" fontSize="0.8em">
    {children}
  </Box>
)
