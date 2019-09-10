import React from 'react'
import PropTypes from 'prop-types'
import LogoCapsules from '../images/icons/lescapsules-name.svg'
import { Link } from 'gatsby'

const NavBav = ({ children }) => (
  <nav className="navbar navbar-expand bg-primary navbar-dark">
    <div className="container">
      <Link to="/" className="navbar-brand d-flex align-items-center">
        <LogoCapsules />
      </Link>
      <ul className="navbar-nav ml-auto">{children}</ul>
    </div>
  </nav>
)

NavBav.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavBav
