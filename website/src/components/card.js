import styled from 'styled-components'
import { boxShadow, gutterWidth } from './constants'

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  margin: ${gutterWidth};

  :hover {
    box-shadow: ${boxShadow};
  }

  img {
    width: 100%;
  }

  a {
    color: currentColor;
    :hover {
      text-decoration: none;
    }
  }
`

export default Card
