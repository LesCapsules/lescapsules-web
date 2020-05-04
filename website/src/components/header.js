import React from 'react'
import Container from './container'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'

import NavItem from './nav-item'
import NavItemList from './nav-item-list'
import LogoCapsules from '../images/icons/lescapsules-name.svg'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand bg-primary navbar-dark">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          title="Acceuil"
          aria-label="Acceuil"
        >
          <LogoCapsules />
        </Link>
        <Menu right>
          <NavItemList>
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
          </NavItemList>
        </Menu>
      </div>
    </nav>
  </header>
)

Header.propTypes = {}

export default Header
