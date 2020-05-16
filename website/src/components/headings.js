import styled from 'styled-components'

import { spacings } from './constants'

const PageHeader = styled.h1`
  padding: ${spacings[4]} 0;
  ${(props) =>
    props.bottomPadding
      ? `padding-bottom: ${spacings[props.bottomPadding]}`
      : ''}
`

export default PageHeader
