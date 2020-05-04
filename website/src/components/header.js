import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'
import styled from 'styled-components'

import Container from './container'
import LogoCapsules from '../images/icons/lescapsules-name.svg'
import NavItem from './nav-item'
import NavItemList from './nav-item-list'

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => (
  <header>
    <nav className="navbar navbar-expand bg-primary navbar-dark">
      <HeaderContainer>
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
      </HeaderContainer>
    </nav>
  </header>
)

Header.propTypes = {}

export default Header
