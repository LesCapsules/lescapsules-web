import React from 'react'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'
import {
  Container,
  ExternalLink,
  ListInline,
} from '@browniebroke/react-ui-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

const FooterStyles = styled.footer<ThemeProps>`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacings[4]} 0;
`

const FooterContainer = styled(Container)<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacings[1]} 0;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.gridBreakpoints.md}) {
    flex-direction: row;
  }
`

const CopyrightStyles = styled.div<ThemeProps>`
  padding-top: ${(props) => props.theme.spacings[2]};

  @media (min-width: ${(props) => props.theme.gridBreakpoints.md}) {
    padding: 0;
  }
`

const Footer: React.FC = () => (
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
