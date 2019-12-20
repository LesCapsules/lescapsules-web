import styled from 'styled-components'
import Card from './card'
import { gridBreakpoints, gutterWidth } from './constants'

const GridCard = styled(Card)`
  width: calc(
    ${props => (props.width ? `${props.width}%` : '50%')} - ${gutterWidth} * 2
  );

  @media (min-width: ${gridBreakpoints.sm}) {
    width: calc(
      ${props => (props.widthSm ? `${props.widthSm}%` : `${100 / 3}%`)} -
        ${gutterWidth} * 2
    );
  }

  @media (min-width: ${gridBreakpoints.md}) {
    width: calc(
      ${props => (props.widthMd ? `${props.widthMd}%` : '25%')} - ${gutterWidth} *
        2
    );
  }
`

export default GridCard
