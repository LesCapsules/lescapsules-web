import styled from 'styled-components'

const PageHeader = styled.h1`
  padding: ${(props) => props.theme.spacings[4]} 0;
  ${(props) =>
    props.bottomPadding
      ? `padding-bottom: ${(props) =>
          props.theme.spacings[props.bottomPadding]}`
      : ''}
`

export default PageHeader
