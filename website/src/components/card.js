import styled from 'styled-components'

const Card = styled.div`
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
