import styled from 'styled-components'

import { containersMaxWidth, gridBreakpoints, gutterWidth } from './constants'

const Container = styled.div`
  width: 100%;
  padding-right: ${gutterWidth};
  padding-left: ${gutterWidth};
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${gridBreakpoints.sm}) {
    max-width: ${containersMaxWidth.sm};
  }

  @media (min-width: ${gridBreakpoints.md}) {
    max-width: ${containersMaxWidth.md};
  }

  @media (min-width: ${gridBreakpoints.lg}) {
    max-width: ${containersMaxWidth.lg};
  }

  @media (min-width: ${gridBreakpoints.xl}) {
    max-width: ${containersMaxWidth.xl};
  }
`

export default Container
