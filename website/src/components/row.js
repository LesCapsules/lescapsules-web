import styled, { css } from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${(props) => props.theme.gutterWidth};
  margin-left: -${(props) => props.theme.gutterWidth};
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`

export default Row
