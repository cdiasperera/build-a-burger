import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavItem.module.css'
const NavItem = ({ link, children, active }) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={link}
        exact
        activeClassName={classes.active}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavItem
