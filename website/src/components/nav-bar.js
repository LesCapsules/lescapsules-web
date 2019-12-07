import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import LogoCapsules from '../images/icons/lescapsules-name.svg'
import Container from './container'

const NavBav = ({ children }) => (
  <nav className="navbar navbar-expand bg-primary navbar-dark">
    <Container>
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <LogoCapsules />
      </Link>
      <ul className="navbar-nav ml-auto">{children}</ul>
    </Container>
  </nav>
)

NavBav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavBav
