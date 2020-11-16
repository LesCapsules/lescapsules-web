import React from 'react'
import { Link } from 'gatsby'
import { IoMdImages, IoMdVideocam, IoMdHome, IoMdPeople } from 'react-icons/io'
import styled from 'styled-components'
import {
  Header as HeaderContainer,
  Navigation,
} from '@browniebroke/react-ui-components'

import LogoCapsules from '../images/icons/lescapsules-name.svg'
import SideMenu from './side-menu'

const StyledLogo = styled(LogoCapsules)`
  height: 40px;
  path {
    fill: ${(props) => props.theme.colors.secondary};
  }
`

const Header = () => (
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
)

export default Header
