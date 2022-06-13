import styled from 'styled-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

export const CardCaption = styled.h4<ThemeProps>`
  padding: ${(props) => props.theme.spacings[1]};

  .year {
    font-size: 1rem;
  }
`
