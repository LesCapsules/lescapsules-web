import styled from 'styled-components'
import { gutterWidth } from './constants'

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
    box-shadow: rgba(29, 33, 41, 0.15) 0px 2px 40px 0px;
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
