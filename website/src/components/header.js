import React from 'react'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'
import NavBav from './nav-bar'
import NavItem from './nav-item'

const Header = () => (
  <header>
    <NavBav>
      <NavItem to="/">
        <IoMdHome /> Acceuil
      </NavItem>
      <NavItem to="/photos/">
        <IoMdImages /> Photos
      </NavItem>
      <NavItem to="/videos/">
        <IoMdVideocam /> Vidéos
      </NavItem>
      <NavItem to="/drink-team/">
        <IoMdPeople /> Drink Team
      </NavItem>
    </NavBav>
  </header>
)

Header.propTypes = {}

export default Header
