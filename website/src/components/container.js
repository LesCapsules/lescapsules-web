import styled from 'styled-components'

import { containersMaxWidth, gridBreakpoints, gutterWidth } from './constants'

const Container = styled.div`
  width: 100%;
  padding-right: ${gutterWidth};
  padding-left: ${gutterWidth};
  margin-right: auto;
  margin-left: auto;

  ${Object.keys(containersMaxWidth).map(
    (k) =>
      `@media (min-width: ${gridBreakpoints[k]}) {
        max-width: ${containersMaxWidth[k]};
      }
      `
  )}
`

export default Container
