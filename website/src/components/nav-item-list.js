import React from 'react'
import PropTypes from 'prop-types'

const NavItemList = ({ children }) => <ul className="nav">{children}</ul>

NavItemList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavItemList
