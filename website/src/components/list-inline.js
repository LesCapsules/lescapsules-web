import React from 'react'
import styled from 'styled-components'

import { spacings } from './constants'

const ListInlineStyle = styled.ul`
  list-style: none;
  margin: 0;
`

const ListItemStyle = styled.li`
  margin-bottom: 0;
  display: inline-block;

  :not(:last-child) {
    margin-right: ${spacings[1]};
  }
`

const ListInline = ({ children, compact = false }) => {
  return (
    <ListInlineStyle>
      {React.Children.map(children, (child, i) => (
        <ListItemStyle key={i} compact={compact}>
          {child}
        </ListItemStyle>
      ))}
    </ListInlineStyle>
  )
}

export default ListInline
