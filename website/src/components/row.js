import styled, { css } from 'styled-components'
import { gutterWidth } from './constants'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${gutterWidth};
  margin-left: -${gutterWidth};
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`

export default Row
