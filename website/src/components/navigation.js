import React from 'react'
import styled from 'styled-components'

import { spacings } from './constants'

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
`

const NavItem = styled.li`
  padding: ${spacings[1]};

  a,
  a:hover {
    text-decoration: none;
  }
`

const Navigation = ({ children }) => (
  <NavigationList>
    {React.Children.map(children, (child) => (
      <NavItem>{child}</NavItem>
    ))}
  </NavigationList>
)

export default Navigation
