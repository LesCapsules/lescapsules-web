import styled from 'styled-components'
import Card from './card'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

interface GridCardProps extends ThemeProps {
  width?: string | number
  widthSm?: string | number
  widthMd?: string | number
}

const GridCard = styled(Card)<GridCardProps>`
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
