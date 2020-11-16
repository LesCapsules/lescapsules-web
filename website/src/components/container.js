import styled from 'styled-components'

const genMediaQueries = (props) => {
  return Object.keys(props.theme.containersMaxWidth).map(
    (k) =>
      `@media (min-width: ${props.theme.gridBreakpoints[k]}) {
        max-width: ${props.theme.containersMaxWidth[k]};
      }
      `
  )
}

const Container = styled.div`
  width: 100%;
  padding-right: ${(props) => props.theme.gutterWidth};
  padding-left: ${(props) => props.theme.gutterWidth};
  margin-right: auto;
  margin-left: auto;

  ${genMediaQueries}
`

export default Container
