import React from 'react'
import NavBav from './nav-bar'
import NavItem from './nav-item'
import PropTypes from 'prop-types'

const Header = ({ location, data }) => (
  <header>
    <NavBav>
      <NavItem location={location} to="/">
        Acceuil
      </NavItem>
    </NavBav>
  </header>
)

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default Header
