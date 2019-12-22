import React from 'react'

import Logo from '../../Logo/Logo'

import NavItems from '../NavItems/NavItems'

import classes from './Toolbar.module.css'

const toolbar = ({ menu, logo, nav }) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar
