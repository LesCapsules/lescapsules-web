import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledBurger = styled.button`
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
  z-index: 10;

  span {
    height: 20%;
    background: ${({ theme, open }) =>
      open ? theme.colors.primary : theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
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

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = !!open

  return (
    <StyledBurger
      aria-label="Accès au menu"
      aria-expanded={isExpanded}
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

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Burger
