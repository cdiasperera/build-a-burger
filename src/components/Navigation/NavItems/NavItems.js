import React from 'react'

import NavItem from './NavItem/NavItem'

import classes from './NavItems.module.css'

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link='/'>Burger Builder</NavItem>
      <NavItem link='/orders'>Orders</NavItem>
      <NavItem link='/auth'>Authentication</NavItem>
    </ul>
  )
}

export default NavItems
