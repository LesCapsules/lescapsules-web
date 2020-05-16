import React from 'react'
import { Link } from 'gatsby'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'
import styled from 'styled-components'

import Container from './container'
import LogoCapsules from '../images/icons/lescapsules-name.svg'
import Navigation from './navigation'
import SideMenu from './side-menu'

import { colors, spacings } from './constants'

const SiteNavBar = styled.nav`
  background-color: ${colors.primary};
  padding: ${spacings[1]} ${spacings[2]};
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacings[1]} 0;

  > a {
    display: flex;
    align-items: center;
  }
`

const StyledLogo = styled(LogoCapsules)`
  height: 40px;
  path {
    fill: ${colors.secondary};
  }
`

const Header = () => (
  <header>
    <SiteNavBar>
      <HeaderContainer>
        <Link to="/" title="Acceuil" aria-label="Acceuil">
          <StyledLogo />
        </Link>
        <SideMenu right>
          <Navigation>
            <Link to="/">
              <IoMdHome /> Acceuil
            </Link>
            <Link to="/photos/">
              <IoMdImages /> Photos
            </Link>
            <Link to="/videos/">
              <IoMdVideocam /> Vidéos
            </Link>
            <Link to="/drink-team/">
              <IoMdPeople /> Drink Team
            </Link>
          </Navigation>
        </SideMenu>
      </HeaderContainer>
    </SiteNavBar>
  </header>
)

export default Header
