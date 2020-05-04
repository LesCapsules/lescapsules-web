import React from 'react'
import styled from 'styled-components'

import { spacings } from './constants'

const NavigationStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;

  li {
    padding: ${spacings[1]};
  }

  a,
  a:hover {
    text-decoration: none;
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
