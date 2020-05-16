import React from 'react'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

import Container from './container'
import ExternalLink from './external-link'
import ListInline from './list-inline'
import { colors, gridBreakpoints, spacings } from './constants'

const FooterStyles = styled.footer`
  color: ${colors.primary};
  background-color: ${colors.secondary};
  padding: ${spacings[4]} 0;
`

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacings[1]} 0;
  justify-content: space-between;

  @media (min-width: ${gridBreakpoints.md}) {
    flex-direction: row;
  }
`

const CopyrightStyles = styled.div`
  padding-top: ${spacings[2]};

  @media (min-width: ${gridBreakpoints.md}) {
    padding: 0;
  }
`

const Footer = () => (
  <FooterStyles>
    <FooterContainer>
      <ListInline>
        <ExternalLink
          to="https://www.facebook.com/lescapsules/"
          title="Les Capsules sur Facebook"
        >
          <FaFacebook size="3rem" />
        </ExternalLink>
        <ExternalLink
          to="mailto:lescapsules@gmail.com"
          title="Contactez nous via email"
        >
          <FaEnvelope size="3rem" />
        </ExternalLink>
      </ListInline>
      <CopyrightStyles>© Capsules {new Date().getFullYear()}</CopyrightStyles>
    </FooterContainer>
  </FooterStyles>
)

export default Footer
