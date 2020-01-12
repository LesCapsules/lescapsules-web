import React from 'react'
import { FaFacebook, FaEnvelope } from 'react-icons/fa'

import Container from './container'
import Row from './row'
import ExternalLink from './external-link'

const Footer = () => (
  <footer className="footer mt-auto bg-secondary text-primary py-5">
    <Container>
      <Row alignItems="center">
        <div className="col-md text-center text-md-left">
          <ul className="list-inline">
            <li className="list-inline-item">
              <ExternalLink to="https://www.facebook.com/lescapsules/">
                <FaFacebook size="3rem" />
              </ExternalLink>
            </li>
            <li className="list-inline-item">
              <ExternalLink to="mailto:lescapsules@gmail.com">
                <FaEnvelope size="3rem" />
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div className="col-md text-center text-md-right">
          © Capsules {new Date().getFullYear()}
        </div>
      </Row>
    </Container>
  </footer>
)

export default Footer
