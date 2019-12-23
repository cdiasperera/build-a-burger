import React from 'react'

import Logo from '../../Logo/Logo'

import NavItems from '../NavItems/NavItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import classes from './Toolbar.module.css'

const Toolbar = ({ menu, logo, nav, toggleDrawer }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle toggle={toggleDrawer} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default Toolbar
