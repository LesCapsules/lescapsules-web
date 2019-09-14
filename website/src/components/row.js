import styled from 'styled-components'
import { gutterWidth } from './constants'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${gutterWidth};
  margin-left: -${gutterWidth};
`

export default Row
