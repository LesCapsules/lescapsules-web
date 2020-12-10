import React, { useState } from 'react'
import styled from 'styled-components'
import Burger from './burger'

export const StyledMenu = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
  width: 300px;
  height: 100vh;
  text-align: left;
  padding: ${({ theme }) => theme.spacings[4]};
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  > a {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary} !important;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Overlay = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  z-index: 8;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.3s ease 0s;
`

const Menu = ({ children }) => {
  const [open, setOpen] = useState(false)
  const menuId = 'site-menu'
  const isHidden = !!open

  return (
    <>
      <Overlay open={open} />
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <StyledMenu open={open} aria-hidden={!isHidden}>
        {children}
      </StyledMenu>
    </>
  )
}

export default Menu
