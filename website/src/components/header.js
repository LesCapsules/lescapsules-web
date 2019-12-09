import React from 'react'
import PropTypes from 'prop-types'
import { IoMdImages, IoMdHome, IoMdPeople } from 'react-icons/io'
import NavBav from './nav-bar'
import NavItem from './nav-item'

const Header = ({ location, data }) => (
  <header>
    <NavBav>
      <NavItem location={location} to="/">
        <IoMdHome /> Acceuil
      </NavItem>
      <NavItem location={location} to="/photos/">
        <IoMdImages /> Photos
      </NavItem>
      <NavItem location={location} to="/drink-team/">
        <IoMdPeople /> Drink Team
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
