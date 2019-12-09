import React from 'react'
import { FaFacebook } from 'react-icons/fa'

import Container from './container'
import Row from './row'
import ExternalLink from './external-link'

const Footer = () => (
  <footer className="footer mt-auto bg-secondary text-primary py-5">
    <Container>
      <Row alignItems="center">
        <div className="col-md text-center text-md-left">
          <ExternalLink to="https://www.facebook.com/lescapsules/">
            <FaFacebook size="3rem" />
          </ExternalLink>
        </div>
        <div className="col-md text-center text-md-right">
          © Capsules {new Date().getFullYear()} - Fait avec{' '}
          <ExternalLink to="https://www.gatsbyjs.org/">Gatsby</ExternalLink>
        </div>
      </Row>
    </Container>
  </footer>
)

export default Footer
