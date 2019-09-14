import styled from 'styled-components'
import Card from './card'
import { gridBreakpoints, gutterWidth } from './constants'

const GridCard = styled(Card)`
  width: calc(50% - ${gutterWidth} * 2);

  @media (min-width: ${gridBreakpoints.sm}) {
    width: calc(33.333% - ${gutterWidth} * 2);
  }

  @media (min-width: ${gridBreakpoints.md}) {
    width: calc(25% - ${gutterWidth} * 2);
  }
`

export default GridCard
