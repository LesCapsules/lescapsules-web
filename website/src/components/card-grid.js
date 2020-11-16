import styled from 'styled-components'
import Card from './card'

const GridCard = styled(Card)`
  width: calc(
    ${(props) => (props.width ? `${props.width}%` : '50%')} -
      ${(props) => props.theme.gutterWidth} * 2
  );

  @media (min-width: ${(props) => props.theme.gridBreakpoints.sm}) {
    width: calc(
      ${(props) => (props.widthSm ? `${props.widthSm}%` : `${100 / 3}%`)} -
        ${(props) => props.theme.gutterWidth} * 2
    );
  }

  @media (min-width: ${(props) => props.theme.gridBreakpoints.md}) {
    width: calc(
      ${(props) => (props.widthMd ? `${props.widthMd}%` : '25%')} -
        ${(props) => props.theme.gutterWidth} * 2
    );
  }
`

export default GridCard
