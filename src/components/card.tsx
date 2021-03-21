import styled from 'styled-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

const Card = styled.div<ThemeProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  margin: ${(props) => props.theme.gutterWidth};

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow};
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
