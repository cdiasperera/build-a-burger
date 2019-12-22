import React from 'react'

import NavItems from '../NavItems/NavItems'
import Logo from '../../Logo/Logo'

import classes from './SideDrawer.module.css'

const sideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </div>
  )
}

export default sideDrawer
