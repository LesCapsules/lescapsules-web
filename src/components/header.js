import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { IoMdHome, IoMdImages, IoMdPeople, IoMdVideocam } from 'react-icons/io'
import { Header as HeaderContainer } from '@browniebroke/react-ui-components'

import LogoCapsules from '../images/icons/lescapsules-name.svg'
import Menu from './menu'

const StyledLogo = styled(LogoCapsules)`
  height: 40px;
  path {
    fill: ${(props) => props.theme.colors.secondary};
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" title="Acceuil" aria-label="Acceuil">
        <StyledLogo />
      </Link>
      <Menu>
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
      </Menu>
    </HeaderContainer>
  )
}

export default Header
