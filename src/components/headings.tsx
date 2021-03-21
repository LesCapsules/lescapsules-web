import styled from 'styled-components'
import {
  ThemeProps,
  SpacingValue,
} from '@browniebroke/react-ui-components/src/types'

interface PageHeaderProps extends ThemeProps {
  bottomPadding?: SpacingValue
}

const PageHeader = styled.h1<PageHeaderProps>`
  padding: ${(props) => props.theme.spacings[4]} 0;
  ${(props) =>
    props.bottomPadding
      ? `padding-bottom: ${props.theme.spacings[props.bottomPadding]}`
      : ''}
`

export default PageHeader
