import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'
import styled from 'styled-components'

import Container from './container'
import LogoCapsules from '../images/icons/lescapsules-name.svg'
import NavItem from './nav-item'
import NavItemList from './nav-item-list'

import { colors, spacings } from './constants'

const SiteNavBar = styled.nav`
  background-color: ${colors.primary};
  padding: ${spacings[1]} ${spacings[2]};
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
  padding-left: 0;
`

const Header = () => (
  <header>
    <SiteNavBar>
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
    </SiteNavBar>
  </header>
)

Header.propTypes = {}

export default Header
