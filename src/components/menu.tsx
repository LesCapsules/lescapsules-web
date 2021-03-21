import React, { useState } from 'react'
import styled from 'styled-components'
import { ThemeProps } from '@browniebroke/react-ui-components/src/types'

const menuZIndex = 10
const transitionSpeed = '0.3s'

// Just to make sure the menu starts after side header
const headerHeight = '80px'

interface StyledBurgerProps extends ThemeProps {
  open: boolean
}

const StyledBurger = styled.button<StyledBurgerProps>`
  position: relative;
  width: 36px;
  height: 36px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${menuZIndex + 1};

  &:focus {
    outline: none;
  }

  span {
    height: 20%;
    width: 100%;
    background: ${({ theme, open }) =>
      open ? theme.colors.primary : theme.colors.secondary};
    border-radius: 10px;
    transition: all ${transitionSpeed} linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

interface BurgerProps {
  open: boolean
  setOpen: (v: boolean) => void
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen, ...props }) => {
  return (
    <StyledBurger
      aria-label="Accès au menu"
      aria-expanded={open}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

export const StyledMenu = styled.nav<StyledBurgerProps>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${menuZIndex};
  height: 100vh;
  text-align: left;
  padding: ${({ theme }) => theme.spacings[4]};
  padding-top: ${headerHeight};
  width: clamp(350px, 30vw, 100%);

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ${transitionSpeed} ease-in-out;

  > a {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary} !important;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Overlay = styled.div<StyledBurgerProps>`
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${menuZIndex - 1};
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.overlay};
  transition: opacity ${transitionSpeed} ease-in-out;
  opacity: ${({ open }) => (open ? '1' : '0')};
  ${({ open }) => (open ? '' : 'transform: translate3d(100%, 0px, 0px);')}
`

const Menu: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const menuId = 'site-menu'
  const isHidden = !open

  return (
    <>
      <Overlay open={open} />
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <StyledMenu open={open} aria-hidden={isHidden}>
        {children}
      </StyledMenu>
    </>
  )
}

export default Menu
