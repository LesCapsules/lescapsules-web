import styled from 'styled-components'

const CardCaption = styled.h4`
  padding: ${(props) => props.theme.spacings[1]};

  .year {
    font-size: 1rem;
  }
`

export default CardCaption
