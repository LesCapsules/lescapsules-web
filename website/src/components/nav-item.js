import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const NavItem = ({ children, to }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </li>
)

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavItem
