import React from 'react'
import styled from 'styled-components'

import { spacings } from './constants'

const NavigationStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    padding: ${spacings[1]};
  }
`

const Navigation = ({ children }) => (
  <NavigationStyles>
    {React.Children.map(children, (child) => (
      <li>{child}</li>
    ))}
  </NavigationStyles>
)

export default Navigation
